"use client";

import { RocketIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactButton() {
  return (
    <div className="text-center">
      <Button variant="outline" className="group" asChild>
        <Link href="/contact">
          Get in Touch
          <RocketIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
} 