import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Timeline({
  className,
  children,
  ...props
}: TimelineProps) {
  return (
    <div
      className={cn("space-y-6", className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TimelineItem({
  className,
  children,
  ...props
}: TimelineItemProps) {
  return (
    <div
      className={cn("relative pb-6 last:pb-0", className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface TimelineConnectorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TimelineConnector({
  className,
  ...props
}: TimelineConnectorProps) {
  return (
    <div
      className={cn("absolute left-0 top-6 bottom-0 w-px bg-border", className)}
      {...props}
    />
  )
}

interface TimelineHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TimelineHeader({
  className,
  children,
  ...props
}: TimelineHeaderProps) {
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

interface TimelineTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function TimelineTitle({
  className,
  children,
  ...props
}: TimelineTitleProps) {
  return (
    <h3
      className={cn("font-semibold leading-none", className)}
      {...props}
    >
      {children}
    </h3>
  )
}

interface TimelineDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function TimelineDescription({
  className,
  children,
  ...props
}: TimelineDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
}

interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TimelineContent({
  className,
  children,
  ...props
}: TimelineContentProps) {
  return (
    <div
      className={cn("pl-6 ml-1 border-l border-border", className)}
      {...props}
    >
      {children}
    </div>
  )
} 