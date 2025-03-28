import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.png";
import { NavbarLinks } from "./links";
import { ModeSwitcher } from "components/mode-switcher";

export function Navbar() {
  return (
    <nav className="fixed bg-background top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-2 border-b border-border-foreground/20 shadow-sm backdrop-blur-md bg-background/80 transition-all">
      <div>
        {/* Logo */}
        <Link href="/">
          <Image src={logoSrc} alt="Logo" width={48} height={48} className="rounded-full" />
        </Link>
      </div>

      <div>
        <NavbarLinks />
      </div>

      <div>
        <ModeSwitcher />
      </div>
    </nav>
  )
}
