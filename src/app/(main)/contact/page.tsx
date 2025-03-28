"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Send, ExternalLink } from "lucide-react";
import ContactForm from "@/forms/contact";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
    const emailAddress = "ezzeldin.ui@gmail.com";
    
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 w-full p-16 bg-gradient-to-br from-primary/80 to-primary-foreground/80 backdrop-blur-lg rounded-lg relative">
                <span className="text-2xl font-bold text-center rounded-lg text-white bg-black/15 inset-0 absolute">
                    <div className="h-full w-full flex items-center justify-center">
                        Contact
                    </div>
                </span>
            </div>

            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                I'm always interested in new opportunities and collaborations. Feel free to reach out using one of the methods below.
            </p>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                            <Send className="size-4" />
                            Send me a message
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-muted/50 rounded-lg p-4">
                        <ContactForm />
                    </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                            <Mail className="size-4" />
                            Email me directly
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-muted/50 rounded-lg p-4">
                        <div className="flex flex-col items-center space-y-4 p-4">
                            <Mail className="size-12 text-primary" />
                            <h3 className="text-lg font-medium">Send me an email</h3>
                            <p className="text-center text-muted-foreground">
                                You can reach me directly at:
                            </p>
                            <code className="bg-background py-2 px-4 rounded-md font-mono text-sm">
                                {emailAddress}
                            </code>
                            <Button asChild size="lg" className="mt-4">
                                <Link href={`mailto:${emailAddress}`}>
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Open in Mail App
                                </Link>
                            </Button>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
