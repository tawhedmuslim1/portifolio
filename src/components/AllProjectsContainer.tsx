import { fetchProjects, extractNotionProperties } from "@/lib/notion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function AllProjectsContainer() {
  // Fetch all projects
  const projectsData = await fetchProjects();
  
  // Debug: Log first project properties to see structure
  if (projectsData.results.length > 0) {
    const firstPage = projectsData.results[0];
    console.log("All Projects - First project properties:", 
      Object.keys(firstPage.properties).map(key => `${key}: ${firstPage.properties[key].type}`)
    );
  }
  
  // Process the data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projects = projectsData.results.map((page: any) => extractNotionProperties(page));
  
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id} className="flex flex-col h-full">
          {project.image && (
            <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          )}
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle>{project.title}</CardTitle>
              {project.featured && (
                <Badge variant="secondary">
                  Featured
                </Badge>
              )}
            </div>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            
            {project.url && (
              <Button variant="outline" size="sm" asChild className="mt-auto">
                <Link href={project.url}>
                  View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 