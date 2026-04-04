"use client"

import { cn } from "@/lib/utils"

interface NavProps {
  activeSection: string
}

export default function Nav({ activeSection }: NavProps) {
  const navItems = [
    {
      name: "About",
      href: "#about",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      name: "Experience",
      href: "#experience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      name: "Projects",
      href: "#projects",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
    },
    {
      name: "Contact",
      href: "#contact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* ── Desktop sidebar nav (unchanged) ── */}
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

      {/* ── Mobile bottom navigation bar ── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800/60 bg-slate-950/85 backdrop-blur-lg lg:hidden"
        aria-label="Mobile navigation"
      >
        <ul className="mx-auto flex max-w-md items-center justify-around px-2 py-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center gap-0.5 rounded-lg px-3 py-2 transition-colors duration-200",
                    isActive
                      ? "text-teal-300"
                      : "text-slate-500 active:text-slate-300",
                  )}
                >
                  {item.icon}
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    {item.name}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Safe-area inset for phones with home indicators */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </nav>
    </>
  )
}
