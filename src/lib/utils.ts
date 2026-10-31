import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefixes a root-relative path with the configured `base` (e.g. "/fan" on GitHub Pages)
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "")
  return `${base}/${path.replace(/^\//, "")}`
}

// Compares two paths ignoring the trailing slash, so "/fan/ticketing/" matches "/fan/ticketing"
export function isSamePath(a: string, b: string) {
  return a.replace(/\/$/, "") === b.replace(/\/$/, "")
}
