"use client";

import { Trophy, Briefcase, GraduationCap, Award } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const achievements = [
  {
    title: "5+ Years Experience",
    description: "Creating modern web applications with cutting-edge technologies",
    icon: <Briefcase className="h-8 w-8 text-blue-500" />
  },
  {
    title: "20+ Projects Completed",
    description: "Delivering high-quality solutions for diverse clients and industries",
    icon: <Trophy className="h-8 w-8 text-amber-500" />
  },
  {
    title: "Continuous Learning",
    description: "Always expanding knowledge with latest frameworks and technologies",
    icon: <GraduationCap className="h-8 w-8 text-green-500" />
  },
  {
    title: "Client Satisfaction",
    description: "Committed to exceeding expectations and creating value",
    icon: <Award className="h-8 w-8 text-purple-500" />
  }
];

export default function AboutMeSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/logo.png"
              alt="Profile"
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/logo.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>
          </div>
          
          {/* Content Column */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I'm a passionate full-stack developer specializing in building exceptional digital experiences. 
              With expertise in React, Next.js, and modern backend technologies, I create scalable, 
              performant applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-8">
              My approach combines technical excellence with creative problem-solving to deliver 
              solutions that exceed expectations. I'm committed to clean code, intuitive design, 
              and continuous learning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "p-4 rounded-lg bg-background border flex flex-col",
                    "hover:shadow-md transition-shadow"
                  )}
                >
                  <div className="mb-2">{achievement.icon}</div>
                  <h3 className="font-medium mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
            
            <Button asChild>
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 