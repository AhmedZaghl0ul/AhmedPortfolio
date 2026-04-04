"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID (free at formspree.io)
      const res = await fetch("https://formspree.io/f/mgopndzb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="max-w-xl">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-[calc(100vw)] bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact</h2>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-medium text-slate-200">Get In Touch</h3>
        <p className="mt-2 text-slate-400">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just
          want to say hi, I&apos;ll try my best to get back to you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-200">
              Name
            </label>
            <Input
              id="name"
              name="name"
              required
              placeholder="John Doe"
              className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:border-teal-300 focus:ring-teal-300"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-200">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:border-teal-300 focus:ring-teal-300"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-200">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Hello! I'd like to discuss a project..."
            className="min-h-[150px] bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:border-teal-300 focus:ring-teal-300"
          />
        </div>

        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-teal-300 text-teal-900 hover:bg-teal-200 font-semibold disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </Button>

        {status === "success" && (
          <p className="text-sm text-teal-300">✓ Message sent! I'll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>
        )}
      </form>
    </section>
  )
}
