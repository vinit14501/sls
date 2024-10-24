import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Start transition
    setIsTransitioning(true)

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })

    // Add a slight delay for the transition
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  // If transitioning, add an overlay
  if (isTransitioning) {
    return (
      <div
        className="fixed inset-0 bg-[#2a6f7f] bg-opacity-10 transition-opacity duration-300 ease-in-out z-50"
        style={{
          animation: "fadeInOut 600ms ease-in-out",
        }}
      />
    )
  }

  return null
}
