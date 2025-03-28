"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { User, Briefcase, GraduationCap, Award, Heart, Code, Palette, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="space-y-8">
            {/* Hero Banner */}
            <div className="flex flex-col gap-4 w-full p-16 bg-gradient-to-br from-primary/80 to-primary-foreground/80 backdrop-blur-lg rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
                <span className="text-3xl font-bold text-center rounded-lg text-white bg-black/15 inset-0 absolute">
                    <div className="h-full w-full flex items-center justify-center">
                        About Me
                    </div>
                </span>
            </div>

            {/* Bio Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1 overflow-hidden">
                    <div className="bg-gradient-to-br from-primary/20 to-primary-foreground/20 p-6 flex justify-center">
                        <Avatar className="w-32 h-32 border-4 border-white">
                            <AvatarImage src="/logo.png" alt="Profile" />
                            <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-primary-foreground text-white">EZ</AvatarFallback>
                        </Avatar>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-center">Ezzeldin</CardTitle>
                        <CardDescription className="text-center">Full Stack Developer</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>Based in Abu Dhabi, UAE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Code className="h-4 w-4 text-muted-foreground" />
                            <span>5+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Palette className="h-4 w-4 text-muted-foreground" />
                            <span>UI/UX Enthusiast</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["React", "NextJS", "TypeScript", "Node"].map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-accent hover:bg-accent/80">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Heart className="h-5 w-5 text-red-500" /> My Story
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 leading-relaxed">
                        <p>
                            I&apos;m a passionate full-stack developer with expertise in building modern web applications.
                            My journey in software development started over 5 years ago when I discovered my love for
                            creating beautiful, functional user experiences.
                        </p>
                        <p>
                            With a strong foundation in both frontend and backend technologies, I pride myself on 
                            crafting clean, maintainable code that delivers exceptional performance. I&apos;m constantly
                            learning and adapting to new technologies to stay at the forefront of web development.
                        </p>
                        <p className="font-medium">
                            My mission is to build web experiences that are not just visually stunning, but also
                            accessible, performant, and delightful to use.
                        </p>
                        <div className="pt-4">
                            <Button asChild>
                                <Link href="/contact">Get in Touch</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Experience Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5" /> Professional Experience
                    </CardTitle>
                    <CardDescription>My career journey and professional achievements</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="border-l-2 border-primary/30 pl-6 relative">
                            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                            <h3 className="text-lg font-medium">Senior Developer at TechCorp</h3>
                            <p className="text-sm text-muted-foreground mb-2">2021 - Present</p>
                            <p className="text-muted-foreground">
                                Leading frontend development for enterprise applications, managing a team of 5 developers,
                                and implementing modern architecture patterns.
                            </p>
                        </div>
                        
                        <div className="border-l-2 border-primary/30 pl-6 relative">
                            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                            <h3 className="text-lg font-medium">Web Developer at Innovation Labs</h3>
                            <p className="text-sm text-muted-foreground mb-2">2018 - 2021</p>
                            <p className="text-muted-foreground">
                                Developed responsive web applications using React and Node.js, collaborated with designers
                                to implement pixel-perfect interfaces.
                            </p>
                        </div>
                        
                        <div className="border-l-2 border-primary/30 pl-6 relative">
                            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                            <h3 className="text-lg font-medium">Junior Developer at StartupX</h3>
                            <p className="text-sm text-muted-foreground mb-2">2016 - 2018</p>
                            <p className="text-muted-foreground">
                                Built and maintained company website, implemented e-commerce features, and improved site performance.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Education & Certifications */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5" /> Education & Certifications
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="education">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    Bachelor of Science in Computer Science
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pl-6 border-l-2 border-muted ml-2 py-2">
                                    <p className="font-medium">University of Technology</p>
                                    <p className="text-muted-foreground text-sm">2012 - 2016</p>
                                    <p className="mt-2">Graduated with honors, specializing in software engineering.</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="certification-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4" />
                                    AWS Certified Developer
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pl-6 border-l-2 border-muted ml-2 py-2">
                                    <p className="text-muted-foreground text-sm">Issued 2020</p>
                                    <p className="mt-2">Proficient in developing and maintaining applications on AWS.</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="certification-2">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4" />
                                    React Certification
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pl-6 border-l-2 border-muted ml-2 py-2">
                                    <p className="text-muted-foreground text-sm">Issued 2019</p>
                                    <p className="mt-2">Advanced knowledge of React patterns and best practices.</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            <Separator />

            <div className="text-center pb-8">
                <p className="text-muted-foreground mb-4">Interested in working together?</p>
                <Button asChild className="mr-4">
                    <Link href="/contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href={`mailto:ezzeldin.ui@gmail.com`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email Directly
                    </Link>
                </Button>
            </div>
        </div>
    )
}
