import { useEffect, useState } from "react"

const Hero = () => {
  // State for managing entrance animations
  const [isVisible, setIsVisible] = useState(false)

  // Trigger entrance animations on component mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Layout configuration
  const layout = {
    height: {
      min: "200px",
      default: "410px",
      mobile: "300px",
      tablet: "350px",
      desktop: "410px",
    },
    logoSize: {
      mobile: "120px",
      tablet: "140px",
      desktop: "160px",
    },
  }

  // Content configuration
  const content = {
    title: "Synergy Evolve",
    description:
      "Transform your business with our proven framework delivering consistent, measurable results",
    logoSrc: "3.png",
    logoAlt: "Synergy Evolve Logo",
    bgImage: "hero.jpg",
  }

  return (
    <section className="relative w-full font-sans py-0 pb-0 pt-0">
      {/* Background image container */}
      <div
        className="absolute inset-0 w-full h-full bg-[#033e4e] bg-opacity-100"
        style={{
          backgroundImage: `url(${content.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#033e4e] bg-opacity-80" />

      {/* Main container */}
      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{
          minHeight: layout.height.min,
          height: layout.height.default,
        }}
      >
        {/* Flex container for two columns */}
        <div className="flex h-full flex-col items-center md:flex-row md:justify-between">
          {/* Left column - Content */}
          <div className="w-full pt-8 md:w-1/2 md:pt-0">
            <div className="max-w-xl space-y-6">
              {/* Main heading with animation */}
              <h1
                className={`font-raleway text-4xl font-bold text-[#f4f1ec] sm:text-5xl md:text-6xl transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {content.title}
              </h1>

              {/* Description with delayed animation */}
              <p
                className={`text-lg text-[#f4f1ec] sm:text-xl transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {content.description}
              </p>
            </div>
          </div>

          {/* Right column - Logo */}
          <div className="flex w-full items-center justify-center md:w-1/2 pt-6">
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              {/* Logo container with responsive sizing */}
              <div className="rounded-sm bg-[#f4f1ec] p-1 shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={content.logoSrc}
                  alt={content.logoAlt}
                  className="h-28 w-28 object-contain sm:h-32 sm:w-32 md:h-40 md:w-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
