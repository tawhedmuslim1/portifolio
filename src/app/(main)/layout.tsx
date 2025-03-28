import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function MainLayout({ children }: Props) {
    return (
        <div className="flex flex-col max-w-[80ch] mx-auto px-4">
            {children}
        </div>
    )
}
