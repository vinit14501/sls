import { useEffect, useState } from "react"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Handle animation on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className="relative min-h-screen font-sans overflow-hidden"
      style={{ backgroundColor: "#f4f1ec" }}
      role="banner"
      aria-label="Hero Section"
    >
      {/* Background image with fade-in effect */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        style={{
          backgroundImage: "url('hero.jpg')",
        }}
        aria-hidden="true"
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        ></div>
      </div>

      {/* Content container with slide-up and fade-in animation */}
      <div
        className={`relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center transition-all duration-1000 ease-out
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="text-center">
          {/* Headline with animation */}
          <h1
            className={`font-serif font-extrabold text-3xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl leading-tight tracking-tight transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            style={{
              fontFamily: '"Poppins", "Merriweather", serif',
              color: "#033e4e",
            }}
          >
            Accelerating innovation for
          </h1>
          <h1
            className={`font-serif font-extrabold text-3xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl leading-tight tracking-tight transition-all duration-1000 ease-out lg:pt-6
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            style={{
              fontFamily: '"Poppins", "Merriweather", serif',
              color: "#033e4e",
            }}
          >
            life sciences executives
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
