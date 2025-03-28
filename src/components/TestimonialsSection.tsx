"use client";

import { Quote } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded all our expectations with their attention to detail.",
    author: "Alex Johnson",
    role: "CTO, TechStart",
    avatarFallback: "AJ"
  },
  {
    quote: "The website they built for our business has significantly increased our online presence and customer engagement. Their technical skills and eye for design are impressive.",
    author: "Sarah Williams",
    role: "Marketing Director, GrowthBrand",
    avatarFallback: "SW"
  },
  {
    quote: "Incredibly responsive and professional. They took the time to understand our requirements and delivered a solution that perfectly matched our vision.",
    author: "Michael Chen",
    role: "Founder, InnovateCo",
    avatarFallback: "MC"
  }
];

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Quote className="h-6 w-6 text-primary/40" {...props} />
  );
}

function TestimonialCard({ quote, author, role, avatarFallback }: {
  quote: string;
  author: string;
  role: string;
  avatarFallback: string;
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-0 relative">
        <QuoteIcon className="absolute top-4 right-4" />
      </CardHeader>
      <CardContent className="pt-4 flex-grow">
        <p className="text-muted-foreground">{quote}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            What clients are saying about working with me
          </p>
        </div>
        
        <div className={cn(
          "grid gap-8",
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        )}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatarFallback={testimonial.avatarFallback}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 