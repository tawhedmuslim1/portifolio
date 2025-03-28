import { fetchProjects } from "@/lib/notion";
import { NextResponse } from "next/server";
import { Project } from "@/types";

// API route to fetch projects
export async function GET() {
  try {
    const projectsData = await fetchProjects();
    
    // Process the data before sending to client
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const projects = projectsData.results.map((page: any) => {
      const props = page.properties || {};
      
      // Extract values from Notion properties
      const title = props.Name?.title?.[0]?.plain_text || "Untitled Project";
      const description = props.Description?.rich_text?.[0]?.plain_text || "";
      const tags = Array.isArray(props.Tags?.multi_select) 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      } as Project;
    });
    
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
} 