"use client";

import { LightbulbIcon } from "lucide-react"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function HomeSkills() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LightbulbIcon className="h-5 w-5" /> Skills & Expertise
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="frontend">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="space-y-2">
            {["React", "Next.js", "Tailwind CSS", "TypeScript"].map((skill) => (
              <HoverCard key={skill}>
                <HoverCardTrigger asChild>
                  <div className="p-2 rounded-md bg-accent/50 cursor-pointer">{skill}</div>
                </HoverCardTrigger>
                <HoverCardContent>
                  Expert in {skill} with years of professional experience.
                </HoverCardContent>
              </HoverCard>
            ))}
          </TabsContent>
          <TabsContent value="backend" className="space-y-2">
            {["Node.js", "Express", "MongoDB", "PostgreSQL"].map((skill) => (
              <div key={skill} className="p-2 rounded-md bg-accent/50">{skill}</div>
            ))}
          </TabsContent>
          <TabsContent value="design" className="space-y-2">
            {["UI/UX", "Figma", "Responsive Design"].map((skill) => (
              <div key={skill} className="p-2 rounded-md bg-accent/50">{skill}</div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 