import Link from "next/link";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "ui/accordion";
import { Button } from "ui/button";

import { links } from "data/links";

export function NavbarLinks() {
  return (
    <>
      {links.map((link) => (
        link.href ? (
            <Button key={link.href} variant="ghost" className="h-9 px-3" asChild>
                <Link href={link.href}>
                {link.label}
                </Link>
            </Button>
        ) : (
        <DropdownMenu key={link.label}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-9 px-3 font-medium text-foreground/80 hover:text-foreground">
                    {link.label}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 p-2">
                {link.subLinks?.map((subLink) => (
                    subLink.category?.link !== undefined ? (
                        <Accordion type="single" collapsible key={subLink.category?.label} className="w-full">
                            <AccordionItem value={subLink.category?.label} className="border-b-0">
                                <AccordionTrigger className="py-2 px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md">
                                    {subLink.category?.label}
                                </AccordionTrigger>
                                <AccordionContent className="pb-2 pt-0 px-3">
                                    <div className="flex flex-col space-y-1">
                                        {subLink.category?.link.map((link) => (
                                            <Link 
                                                href={link.href!} 
                                                key={link.href!}
                                                className="text-sm py-1.5 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ) : (
                        <DropdownMenuItem key={subLink.category?.label} className="cursor-pointer">
                            {subLink.category?.label}
                        </DropdownMenuItem>
                    )
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
        )
      ))}
    </>
  )
}
