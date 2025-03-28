import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "utils"
import { Navbar } from "components/navbar"
import { ThemeProvider } from "@/components/providers/theme-provider"
const fonts = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ezzeldin's Portfolio",
  description: "Full Stack Developer Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(fonts.className, "h-screen w-screen bg-background")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
          </ThemeProvider>
      </body>
    </html>
  )
}
