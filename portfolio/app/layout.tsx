import type React from "react"
import type { Metadata } from "next"
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Ahmed Alaa | AI Engineer",
  description: "Portfolio of Ahmed Alaa, an AI Engineer specializing in Deep Learning, Computer Vision, and Data Analysis.",
  // generator: "v0.app",
  openGraph: {
    title: "Ahmed Alaa | AI Engineer",
    description: "Portfolio of Ahmed Alaa, an AI Engineer specializing in Deep Learning, Computer Vision, and Data Analysis.",
    url: "https://ahmedalaa.dev",
    siteName: "Ahmed Alaa Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Alaa | AI Engineer",
    description: "Portfolio of Ahmed Alaa, an AI Engineer specializing in Deep Learning, Computer Vision, and Data Analysis.",
    creator: "@AhmedAlaa839958",
  },
  icons: {
    icon: [
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body bg-slate-950 text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
