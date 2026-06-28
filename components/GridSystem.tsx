import * as React from "react"
import { cn } from "@/lib/utils"

export function GridContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("w-full h-full", className)}>
      {children}
    </div>
  )
}

export function GridSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}
