
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useLocation } from "react-router-dom"

interface NavBarProps {
  items: {
    name: string
    url: string
    icon: React.ElementType
  }[]
  className?: string
}

export const NavBar = ({ items, className }: NavBarProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0)
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  // Handle navigation with proper section scrolling
  const handleNavigation = (item: { url: string }, index: number) => {
    setActiveIndex(index)
    
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.querySelector(item.url)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on another page, navigate to home page with anchor
      window.location.href = `/${item.url}`
    }
  }

  return (
    <nav
      className={cn(
        "relative flex items-center justify-center rounded-full border border-primary/10 bg-background/50 backdrop-blur-sm px-2 py-1",
        className
      )}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="relative flex space-x-2">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <button
              key={index}
              className={cn(
                "relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                activeIndex === index
                  ? "text-primary"
                  : "text-primary/60 hover:text-primary"
              )}
              onClick={() => handleNavigation(item, index)}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{item.name}</span>
            </button>
          )
        })}

        {/* Active indicator - dark line at top */}
        {activeIndex !== null && (
          <div
            className="absolute top-0 h-0.5 bg-primary transition-all duration-300"
            style={{
              left: activeIndex * 120 + 8, // Adjust based on button width
              width: "108px", // Adjust based on button width
            }}
          />
        )}

        {/* Tubelight highlight effect */}
        {hoveredIndex !== null && (
          <div
            className="absolute inset-0 z-0 rounded-full bg-primary/10 transition-all duration-300"
            style={{
              left: hoveredIndex * 120 + 8, // Adjust based on button width
              width: "108px", // Adjust based on button width
              top: "8px", // Position properly within the container
              height: "calc(100% - 16px)", // Slightly smaller than container
            }}
          />
        )}
      </div>
    </nav>
  )
}
