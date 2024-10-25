import { useState, useEffect } from "react"

export default function Hero2() {
  const [isVisible, setIsVisible] = useState(false)

  // Theme setup
  const theme = {
    backgroundPrimary: "#f4f1ec",
    headingColor: "#033e4e",
    textColor: "#546b7b",
    cardColors: {
      first: "#b2cbd0",
      second: "#2a6f7f",
      third: "#033e4e",
    },
    // Card dimensions config
    card: {
      minHeight: "min-h-[220px]", // Minimum height
      maxHeight: "max-h-[300px]", // Maximum height
      defaultHeight: "h-79", // Default height
      // Responsive heights (optional)
      responsiveHeight: {
        sm: "h-80", // Small screens
        md: "h-96", // Medium screens
        lg: "h-[300px]", // Large screens
      },
      // Content spacing
      padding: "p-8",
      gap: "space-y-6",
    },
  }

  // Animation setup
  const animation = {
    duration: "duration-1000",
    easing: "ease-out",
    delay: "delay-200",
  }

  // Dynamic height class generation
  const getCardHeightClasses = () => {
    return `
      ${theme.card.minHeight}
      ${theme.card.maxHeight}
      ${theme.card.defaultHeight}
      sm:${theme.card.responsiveHeight.sm}
      md:${theme.card.responsiveHeight.md}
      lg:${theme.card.responsiveHeight.lg}
    `.trim()
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const heroSection = document.getElementById("hero2-section")
    if (heroSection) {
      observer.observe(heroSection)
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection)
      }
    }
  }, [])

  return (
    <section
      id="hero2-section"
      className="py-20"
      style={{ backgroundColor: theme.backgroundPrimary }}
    >
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {/* Header */}
        <div
          className={`mb-14 text-center transition-all ${animation.duration} ${
            animation.easing
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-4xl text-center font-bold leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto"
            style={{
              color: theme.headingColor,
            }}
          >
            Learning Accelerated Framework
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          {/* First card */}
          <div
            className={`relative w-full transition-all ${animation.duration} ${
              animation.easing
            } ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{
              transitionDelay: "150ms",
            }}
          >
            <div
              className={`flex flex-col ${theme.card.gap} ${
                theme.card.padding
              } rounded-sm ${getCardHeightClasses()}`}
              style={{ backgroundColor: theme.cardColors.first }}
            >
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-[#033e4e]">1</span>
              </div>
              <div className="text-center space-y-3 flex-grow flex flex-col justify-center">
                <h3 className="text-lg font-bold xl:text-xl text-[#033e4e]">
                  ASSESS
                </h3>
                <p className="text-[#033e4e] sm:text-lg xl:text-base">
                  Clarify and prioritize where L&D can be optimized.
                </p>
              </div>
            </div>
          </div>

          {/* Second card */}
          <div
            className={`relative w-full transition-all ${animation.duration} ${
              animation.easing
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div
              className={`flex flex-col ${theme.card.gap} ${
                theme.card.padding
              } rounded-sm ${getCardHeightClasses()}`}
              style={{ backgroundColor: theme.cardColors.second }}
            >
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <div className="text-center space-y-3 flex-grow flex flex-col justify-center">
                <h3 className="text-lg font-bold xl:text-xl text-white">
                  ALIGN
                </h3>
                <p className="text-white sm:text-lg xl:text-base">
                  Align L&D strategies to organization&apos;s innovation goals.
                </p>
              </div>
            </div>
          </div>

          {/* Third card */}
          <div
            className={`relative w-full transition-all ${animation.duration} ${
              animation.easing
            } ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div
              className={`flex flex-col ${theme.card.gap} ${
                theme.card.padding
              } rounded-sm ${getCardHeightClasses()}`}
              style={{ backgroundColor: theme.cardColors.third }}
            >
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <div className="text-center space-y-3 flex-grow flex flex-col justify-center">
                <h3 className="text-lg font-bold xl:text-xl text-white">
                  ACHIEVE
                </h3>
                <p className="text-white sm:text-lg xl:text-base">
                  Equip employees with competencies to drive innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
