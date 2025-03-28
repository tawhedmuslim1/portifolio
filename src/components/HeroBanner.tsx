"use client";

import { ArrowRightIcon, SparklesIcon } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  return (
    <div className="flex flex-col gap-4 w-full p-36 bg-gradient-to-br from-blue-500 to-sky-700 backdrop-blur-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
      <div className="relative z-10 flex flex-col items-center text-white space-y-6">
        <Badge variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white border-white/20">
          <SparklesIcon className="h-3.5 w-3.5 mr-1" /> Portfolio
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold text-center tracking-tight">
          Creative Developer
        </h1>
        <p className="text-xl text-center max-w-2xl text-white/80">
          Building beautiful, functional, and performant web experiences with modern technologies.
        </p>
        <div className="flex gap-4 mt-4">
          <Button asChild className="bg-white text-sky-700 hover:bg-white/90">
            <Link href="/about">Learn More <ArrowRightIcon className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button 
            variant="outline" 
            asChild 
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-sky-700 transition-colors"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 