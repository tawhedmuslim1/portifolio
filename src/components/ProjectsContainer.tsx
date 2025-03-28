import { fetchProjects, fetchFeaturedProjects, extractNotionProperties } from "@/lib/notion";
import ProjectsList from "./ProjectsList";
import { Project } from "@/types";

// This is a server component that fetches data
export default async function ProjectsContainer() {
  // Fetch featured projects directly from Notion using the filter
  const projectsData = await fetchFeaturedProjects();
  
  // Debug: Log first project properties to see structure
  if (projectsData.results.length > 0) {
    const firstPage = projectsData.results[0];
    console.log("First project properties:", 
      Object.keys(firstPage.properties).map(key => `${key}: ${firstPage.properties[key].type}`)
    );
  }
  
  // Process the data before passing to client component
  const projects = projectsData.results.map((page: any) => extractNotionProperties(page));
  
  // Pass processed data to client component
  return <ProjectsList projects={projects} />;
} 