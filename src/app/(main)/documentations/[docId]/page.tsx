import { fetchDocumentationById, fetchDocumentationBlocks, notion } from "lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { format } from "date-fns";
import Link from "next/link";
import { Fragment } from "react";

// Define a type for Notion property objects
interface NotionProperty {
    type: string;
    title?: Array<{ plain_text: string }>;
    url?: string | null;
    multi_select?: Array<{ name: string }>;
    [key: string]: unknown;
}

type PageParams = {
    docId: string;
}

export default async function DocumentationPage({
    params,
}: {
    params: PageParams;
}) {
    const { docId } = params;
    
    try {
        // Get the page data
        const rawDocument = await fetchDocumentationById(docId);
        
        if (!rawDocument) {
            return <div>Documentation not found</div>;
        }

        // Direct inspection of what's coming from the API
        console.log("RAW DOCUMENT:", JSON.stringify(rawDocument, null, 2));

        // Direct property access
        const pageId = rawDocument.id;
        const pageProperties = rawDocument.properties;

        // Get the blocks for rendering content
        const blocks = await fetchDocumentationBlocks(pageId);

        // Setup renderer
        const renderer = new NotionRenderer({
            client: notion,
        });
        renderer.use(hljsPlugin({}));
        renderer.use(bookmarkPlugin(undefined));
        const html = await renderer.render(...blocks);
        
        // Find the title by examining all properties
        let pageTitle = "Untitled";
        let titleFound = false;
        
        // Simple function to extract a title from a property
        const extractTitle = (property: NotionProperty) => {
            if (property?.type === 'title' && property?.title?.[0]?.plain_text) {
                return property.title[0].plain_text;
            }
            return null;
        };
        
        // Log all properties
        if (pageProperties) {
            console.log("ALL PROPERTIES:");
            for (const [key, value] of Object.entries(pageProperties)) {
                console.log(`Property ${key}:`, value);
                
                // Check if this property contains title data
                const extractedTitle = extractTitle(value as NotionProperty);
                if (extractedTitle) {
                    pageTitle = extractedTitle;
                    titleFound = true;
                    console.log(`Found title in property "${key}": ${pageTitle}`);
                }
            }
            
            if (!titleFound) {
                console.log("No title property found in any property");
            }
        }
        
        // Date display
        let formattedDate = "";
        if (rawDocument.created_time) {
            try {
                formattedDate = format(new Date(rawDocument.created_time), 'MMMM d, yyyy');
            } catch (e) {
                console.error("Date formatting error:", e);
            }
        }

        // Get URL properties if they exist
        let documentUrl = "";
        let packageUrl = "";
        
        // Get the Link property (if it exists)
        if (pageProperties.Link?.type === 'url') {
            documentUrl = pageProperties.Link.url || "";
        }
        
        // Get the Link property (if it exists)
        if (pageProperties["Link"]?.type === 'url') {
            packageUrl = pageProperties["Link"].url || "";
        }
        
        // Get technologies if they exist
        let technologies: string[] = [];
        if (pageProperties.Technologies?.type === 'multi_select') {
            technologies = pageProperties.Technologies.multi_select.map(tech => tech.name);
        }

        return (
            <div className="max-w-4xl mx-auto px-4 py-8">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">{pageTitle}</h1>
                    <div className="flex flex-col gap-2 text-gray-600">
                        {formattedDate ? (
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Created:</span>
                                <time>{formattedDate}</time>
                            </div>
                        ) : null}
                        
                        {documentUrl ? (
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Resource Link:</span>
                                <Link 
                                    href={documentUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                                >
                                    {documentUrl}
                                </Link>
                            </div>
                        ) : null}
                        
                        {packageUrl ? (
                            <div className="flex items-center gap-2">
                                <span className="font-medium">URL:</span>
                                <Link 
                                    href={packageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                                >
                                    {packageUrl}
                                </Link>
                            </div>
                        ) : null}
                        
                        {technologies.length > 0 ? (
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-medium">Technologies:</span>
                                <div className="flex gap-2 flex-wrap">
                                    {technologies.map((tech, index) => (
                                        <Fragment key={`${tech}-${index}`}>
                                            <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </header>
                
                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        );
    } catch (error) {
        console.error("Error in DocumentationPage:", error);
        return <div>Error loading documentation. Please try again later.</div>;
    }
}
