"use client"

import { useEffect, useRef, useState } from "react"

export default function MouseFollower() {
  const ref = useRef<HTMLDivElement>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detect touch-primary devices and disable the follower
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    setIsTouchDevice(isTouch)

    if (isTouch) return

    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (isTouchDevice) return null

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30"
    />
  )
}
