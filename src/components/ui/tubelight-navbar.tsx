
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

  // Set initial active index based on URL
  React.useEffect(() => {
    if (isHomePage) {
      const hash = window.location.hash
      if (hash) {
        const activeItem = items.findIndex(item => item.url === hash)
        if (activeItem !== -1) {
          setActiveIndex(activeItem)
        }
      }
    }
  }, [isHomePage, items, location])

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
        "relative flex items-center justify-center rounded-full border border-primary/10 bg-background/50 backdrop-blur-sm px-3 py-2 shadow-sm",
        className
      )}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="relative flex space-x-4">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <button
              key={index}
              className={cn(
                "relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
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
              left: `${(activeIndex * 100) + 12}px`, // Position based on active button
              width: "80px", // Fixed width for the indicator
              transform: "translateX(-50%)",
              top: "-1px",
            }}
          />
        )}

        {/* Tubelight highlight effect */}
        {hoveredIndex !== null && (
          <div
            className="absolute z-0 rounded-full bg-primary/10 transition-all duration-300 pointer-events-none"
            style={{
              left: `${(hoveredIndex * 100) + 12}px`, // Position based on hovered button
              width: "80px", // Fixed width for the highlight
              top: "2px",
              height: "calc(100% - 4px)",
              transform: "translateX(-50%)",
            }}
          />
        )}
      </div>
    </nav>
  )
}
