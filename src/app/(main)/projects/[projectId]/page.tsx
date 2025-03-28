import { fetchById, fetchPageBlocks, notion } from "lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { format } from "date-fns";
import Link from "next/link";
import { Fragment } from "react";

interface Props {
    params: {
        projectId: string;
    };
}

interface NotionPageProperties {
    Title?: {
        type: "title";
        title: Array<{
            type: "text";
            text: { content: string };
            plain_text: string;
        }>;
    };
    Technologies?: {
        type: "multi_select";
        multi_select: Array<{
            name: string;
            id: string;
        }>;
    };
    Link?: {
        type: "url";
        url: string | null;
    };
}

interface NotionPage {
    id: string;
    created_time: string;
    properties: NotionPageProperties;
}

export default async function ProjectPage({ params }: Props) {
    const { projectId } = params;
    const rawProject = await fetchById(projectId);
    
    if (!rawProject) {
        return <div>Project not found</div>;
    }

    const project = rawProject as unknown as NotionPage;
    const blocks = await fetchPageBlocks(project.id);

    const renderer = new NotionRenderer({
        client: notion,
    });

    renderer.use(hljsPlugin({}));
    renderer.use(bookmarkPlugin(undefined));

    const html = await renderer.render(...blocks);
    
    // Extract properties safely with fallbacks
    const title = project.properties?.Title?.title?.[0]?.plain_text || "Untitled";
    
    // Format date on server in a consistent way
    let formattedDate = "";
    if (project.created_time) {
        try {
            formattedDate = format(new Date(project.created_time), 'MMMM d, yyyy');
        } catch (e) {
            console.error("Date formatting error:", e);
        }
    }
    
    const projectUrl = project.properties?.Link?.url || "";
    const technologies = project.properties?.Technologies?.multi_select?.map((tech) => tech.name) || [];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <div className="flex flex-col gap-2 text-gray-600">
                    {formattedDate ? (
                        <div className="flex items-center gap-2">
                            <span className="font-medium">Created:</span>
                            <time dateTime={project.created_time}>{formattedDate}</time>
                        </div>
                    ) : null}
                    
                    {projectUrl ? (
                        <div className="flex items-center gap-2">
                            <span className="font-medium">Site URL:</span>
                            <Link 
                                href={projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                            >
                                {projectUrl}
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
}
