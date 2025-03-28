"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

// ProjectsList is a client component that renders the projects
export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CodeIcon className="h-5 w-5" /> Featured Projects
        </CardTitle>
        <CardDescription>
          A showcase of my recent development work and technical skills
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div key={project.id} className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {project.description}
                      </p>
                      {project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    {project.image && (
                      <div className="ml-4 flex-shrink-0 relative w-16 h-16 rounded-md overflow-hidden">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                  {project.url && (
                    <div className="mt-3 flex justify-end">
                      <Button variant="ghost" size="sm" asChild className="text-xs">
                        <Link href={project.url}>
                          View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <p className="text-muted-foreground">No featured projects found</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="ml-auto" asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 