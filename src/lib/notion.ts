import "server-only";

import { Client } from "@notionhq/client";
import { cache } from "react";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Set up environment variables constants
const NOTION_TOKEN = process.env.NOTION_TOKEN as string;
const PROJECTS_DATABASE_ID = process.env.NOTION_DATABASE_ID as string;
const DOCS_DATABASE_ID = process.env.NOTION_DOCUMENTATION_DATABASE_ID as string;

export const notion = new Client({
    auth: NOTION_TOKEN,
});

// Helper function to extract property values from Notion pages
export function extractNotionProperties(page: any) {
    const props = page.properties || {};
    
    // Extract title (Notion databases always have a primary "title" property with type "title")
    let title = "Untitled";
    
    // First try to find the property that has type "title" (this is always the main title column in Notion)
    for (const key in props) {
        if (props[key]?.type === "title" && 
            Array.isArray(props[key].title) && 
            props[key].title.length > 0 && 
            props[key].title[0]?.plain_text) {
            title = props[key].title[0].plain_text;
            break;
        }
    }
    
    // Extract other common properties
    const description = props.Description?.rich_text?.[0]?.plain_text || "";
    const tags = Array.isArray(props.Tags?.multi_select) 
        ? props.Tags.multi_select.map((tag: any) => tag.name) 
        : [];
    const imageFiles = props.Image?.files || [];
    const image = imageFiles[0]?.file?.url || imageFiles[0]?.external?.url || "";
    const url = props.URL?.url || "";
    const featured = Boolean(props.Featured?.checkbox);
    
    return {
        id: page.id || "",
        title,
        description,
        tags,
        image,
        url,
        featured
    };
}

// Projects-related functions
export const fetchProjects = cache(() => {
    return notion.databases.query({
        database_id: PROJECTS_DATABASE_ID,
    });
});

// New function to fetch only featured projects
export const fetchFeaturedProjects = cache(() => {
    return notion.databases.query({
        database_id: PROJECTS_DATABASE_ID,
        filter: {
            property: "Featured",
            checkbox: {
                equals: true,
            },
        },
    });
});

export const fetchById = cache((id: string) => {
    return notion.databases.query({
        database_id: PROJECTS_DATABASE_ID,
        filter: {
            property: "Id",
            rich_text: {
                equals: id,
            },
        },
    }).then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = cache((pageId: string) => {
    return notion.blocks.children.list({
        block_id: pageId,
    }).then((res) => res.results as BlockObjectResponse[]);
});

export const fetchPageTitleById = cache((id: string) => {
    return notion.pages.retrieve({
        page_id: id,
    }).then((res) => {
        const page = res as PageObjectResponse;
        const titleProperty = page.properties.title as { title: Array<{ plain_text: string }> };
        return titleProperty.title[0].plain_text;
    });
});

// Documentation-related functions
export const fetchDocumentations = cache(() => {
    return notion.databases.query({
        database_id: DOCS_DATABASE_ID,
    });
});

export const fetchDocumentationById = cache((id: string) => {
    // Query the documentation database for a page with the specified ID in its properties
    try {
        console.log(`Fetching documentation with ID: ${id}`);
        console.log(`Using database ID: ${DOCS_DATABASE_ID}`);
        
        return notion.databases.query({
            database_id: DOCS_DATABASE_ID,
            filter: {
                property: "Id",
                rich_text: {
                    equals: id,
                },
            },
        }).then((res) => {
            console.log(`Query results count: ${res.results.length}`);
            
            if (res.results.length === 0) {
                console.error(`No documentation found with Id: ${id}`);
                return undefined;
            }
            
            const page = res.results[0] as PageObjectResponse;
            
            // Log all properties to help debug
            if (page.properties) {
                console.log("All properties from Notion:");
                Object.entries(page.properties).forEach(([key, value]) => {
                    console.log(`- ${key}: ${JSON.stringify(value.type)}`);
                });
            }
            
            return page;
        });
    } catch (error) {
        console.error("Error retrieving documentation by ID:", error);
        return undefined;
    }
});

export const fetchDocumentationBlocks = cache((pageId: string) => {
    return notion.blocks.children.list({
        block_id: pageId,
    }).then((res) => res.results as BlockObjectResponse[]);
});