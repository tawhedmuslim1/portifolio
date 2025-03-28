"use client";

import { Lightbulb, Code, PenTool, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your needs and project requirements through in-depth consultation.",
    icon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    title: "Design",
    description: "Creating intuitive and visually appealing mockups and prototypes.",
    icon: <PenTool className="h-10 w-10 text-purple-500" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Development",
    description: "Building your application with clean, maintainable, and scalable code.",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Deployment",
    description: "Launching your project and providing ongoing support and maintenance.",
    icon: <Rocket className="h-10 w-10 text-green-500" />,
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">My Development Process</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A structured approach to bringing your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border shadow-md h-full">
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-30`}></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-bl-full"></div>
              
              <CardHeader className="relative">
                <div className="mb-3">{step.icon}</div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <CardDescription className="text-foreground/70 text-sm">
                  {step.description}
                </CardDescription>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 