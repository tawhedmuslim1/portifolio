import { links } from "@/data/links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Browse all my development projects",
};

export default function ProjectsPage() {
  // Extract project links from the links data
  const projectLinks = links.find(link => link.label === "Projects")?.subLinks || [];
  
  return (
    <div className="container py-8 space-y-6">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse all my development projects and experiments. Featured projects are highlighted.
        </p>
      </div>
      
      {/* Project Categories */}
      {projectLinks.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectLinks.map((category, idx) => (
            <div key={idx}>
              {category.category && (
                <div className="mb-4">
                  <h2 className="text-xl font-semibold">{category.category.label}</h2>
                  <div className="grid gap-4 mt-3">
                    {category.category.link.map((projectLink, linkIdx) => (
                      <Card key={linkIdx} className="transition-all hover:shadow-md border-2">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{projectLink.label}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 flex justify-between items-center">
                          <Button asChild className="mt-2 w-full justify-between group">
                            <Link href={projectLink.href || "#"}>
                              <span className="flex items-center">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Open Project Page
                              </span>
                              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 