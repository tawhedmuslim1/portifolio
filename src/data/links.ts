import { Link } from "types/link";

export const links: Link[] = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Projects", subLinks: [
        {
            category: {
                label: "Hobby Projects",
                link: [
                    { label: "Todo List", href: "/projects/211fc7b3-174d-4721-93fc-a52fab0d1be4" },
                    { label: "Fast Country Search", href: "/projects/0f8187b3-9ee9-46da-a9ae-d9f2e108953d" }
                ]
            }
        }
        ] },
    { label: "Documentations", subLinks: [
        {
            category: {
                label: "NPM Packages",
                link: [
                    { label: "Greetings Functions", href: "/documentations/399fc7b3-174d-4721-93fc-a52fab0d1be4" },
                    { label: "What color is it", href: "/documentations/451fc7b3-174d-4721-93fc-a52fab0d1be4" }
                ]
            }
        },
        // {
        //     category: {
        //         label: "API",
        //         link: [
        //             { label: "API 1", href: "/documentations/399fc7b3-174d-4721-93fc-a52fab0d1be4" },
        //             { label: "API 2", href: "/documentations/451fc7b3-174d-4721-93fc-a52fab0d1be4" }
        //         ]
        //     }
        // }
    ] },
]