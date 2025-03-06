
"use client"

import * as React from "react"
import { motion } from "framer-motion"
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
  const [activeTab, setActiveTab] = React.useState(items[0].name)
  const [isMobile, setIsMobile] = React.useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  // Detect mobile screens
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Set initial active tab based on URL
  React.useEffect(() => {
    if (isHomePage) {
      const hash = window.location.hash
      if (hash) {
        const activeItem = items.find(item => item.url === hash)
        if (activeItem) {
          setActiveTab(activeItem.name)
        }
      }
    }
  }, [isHomePage, items, location])

  // Handle navigation with proper section scrolling
  const handleNavigation = (item: { name: string, url: string }) => {
    setActiveTab(item.name)
    
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
    >
      <div className="flex items-center gap-3">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-colors",
                "text-primary/60 hover:text-primary",
                isActive && "text-primary"
              )}
            >
              <span className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.name}</span>
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
