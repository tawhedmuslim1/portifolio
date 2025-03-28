export type Link = {
    label: string;
    href?: string;
    subLinks?: {
        category?: {
            label: string;
            link: Link[];
        };
    }[];
}