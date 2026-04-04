"use client"

import { cn } from "@/lib/utils"

interface NavProps {
  activeSection: string
}

export default function Nav({ activeSection }: NavProps) {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              className={cn("group flex items-center py-3", activeSection === item.href.substring(1) ? "active" : "")}
              href={item.href}
            >
              <span
                className={cn(
                  "mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                  activeSection === item.href.substring(1) ? "w-16 bg-slate-200" : "",
                )}
              ></span>
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                  activeSection === item.href.substring(1) ? "text-slate-200" : "",
                )}
              >
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
