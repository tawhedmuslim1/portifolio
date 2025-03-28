import * as React from "react"
import { cn } from "@/lib/utils"

export function Timeline({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("space-y-6", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function TimelineItem({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative pb-6 last:pb-0", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function TimelineConnector({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("absolute left-0 top-6 bottom-0 w-px bg-border", className)}
      {...props}
    />
  )
}

export function TimelineHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-baseline gap-2 mb-2", className)}
      {...props}
    >
      <div className="size-3 rounded-full bg-primary mt-1.5 mr-1" />
      <div className="flex-1">{children}</div>
    </div>
  )
}

export function TimelineTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-semibold leading-none", className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function TimelineDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function TimelineContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("pl-6 ml-1 border-l border-border", className)}
      {...props}
    >
      {children}
    </div>
  )
} 