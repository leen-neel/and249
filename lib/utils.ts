import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function getOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) return "th"
  switch (day % 10) {
    case 1:
      return "st"
    case 2:
      return "nd"
    case 3:
      return "rd"
    default:
      return "th"
  }
}

export function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("T")[0].split("-").map(Number)
  const date = new Date(year, month - 1, day)
  const monthLabel = date.toLocaleString("en-GB", { month: "short" })
  return `${day}${getOrdinalSuffix(day)} ${monthLabel}, ${year}`
}
