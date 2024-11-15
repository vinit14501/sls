import { useState, useEffect } from "react"

export default function Hero2() {
  const [isVisible, setIsVisible] = useState(false)

  const theme = {
    backgroundPrimary: "#f4f1ec",
    headingColor: "#033e4e",
    textColor: "#546b7b",
    cardColors: {
      first: "#b2cbd0",
      second: "#2a6f7f",
      third: "#033e4e",
    },
    card: {
      minHeight: "min-h-[180px]",
      maxHeight: "max-h-[250px]",
      defaultHeight: "h-auto",
      padding: "p-6",
      gap: "space-y-4",
    },
  }

  const animation = {
    duration: "duration-1000",
    easing: "ease-out",
    delay: "delay-200",
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
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: theme.backgroundPrimary }}
    >
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {/* Header */}
        <div
          className={`mb-8 sm:mb-10 lg:mb-12 text-center transition-all ${
            animation.duration
          } ${animation.easing} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold leading-tight sm:leading-normal lg:leading-[3.25rem] mx-auto max-w-xs sm:max-w-lg lg:max-w-3xl"
            style={{
              color: theme.headingColor,
            }}
          >
            Learning Accelerated Framework
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-md sm:max-w-2xl lg:max-w-full mx-auto">
          {/* First card */}
          <div
            className={`relative w-full transition-all ${animation.duration} ${
              animation.easing
            } ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div
              className={`flex flex-col ${theme.card.gap} ${theme.card.padding} rounded-sm ${theme.card.minHeight}`}
              style={{ backgroundColor: theme.cardColors.first }}
            >
              <div className="flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-[#033e4e]">
                  1
                </span>
              </div>
              <div className="text-center space-y-2 flex-grow flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-bold text-[#033e4e]">
                  ASSESS
                </h3>
                <p className="text-sm sm:text-base text-[#033e4e]">
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
              className={`flex flex-col ${theme.card.gap} ${theme.card.padding} rounded-sm ${theme.card.minHeight}`}
              style={{ backgroundColor: theme.cardColors.second }}
            >
              <div className="flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  2
                </span>
              </div>
              <div className="text-center space-y-2 flex-grow flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  ALIGN
                </h3>
                <p className="text-sm sm:text-base text-white">
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
              className={`flex flex-col ${theme.card.gap} ${theme.card.padding} rounded-sm ${theme.card.minHeight}`}
              style={{ backgroundColor: theme.cardColors.third }}
            >
              <div className="flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  3
                </span>
              </div>
              <div className="text-center space-y-2 flex-grow flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  ACHIEVE
                </h3>
                <p className="text-sm sm:text-base text-white">
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
