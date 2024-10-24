import { useState, useEffect } from "react"

export default function Hero3() {
  const [isVisible, setIsVisible] = useState(false)

  // Theme configuration
  const theme = {
    backgroundPrimary: "#e6dfd5",
    headingColor: "#033e4e",
    textColor: "#546b7b",
    // boxShadow: "rgba(3, 62, 78, 0.1)",
  }

  // Animation configuration
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

    const heroSection = document.getElementById("hero-section")
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
      id="hero-section"
      className="py-24"
      style={{ backgroundColor: theme.backgroundPrimary }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-14 text-center transition-all ${animation.duration} ${
            animation.easing
          }
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          <h2
            className="text-4xl text-center font-medium leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto"
            style={{
              color: theme.headingColor,
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            How can you remove the obstacles hindering your innovation?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          {/* First Card */}
          <div
            className={`relative w-full transition-all ${animation.duration} ${
              animation.easing
            }
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex flex-col space-y-6">
              <div className="bg-gray-800 rounded-sm overflow-hidden relative group hover:transform hover:scale-102 transition-all duration-300">
                <div className="aspect-video">
                  <img
                    src="vision.jpg"
                    alt="Clear vision"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center space-y-3">
                <h1 className="text-lg font-medium xl:text-xl text-black">
                  Clear Vision
                </h1>
                {/* <p className="text-gray-600 text-sm xl:text-base">
                  Develop a strategic roadmap that aligns with your
                  organization&apos;s goals and drives innovation forward.
                </p> */}
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div
            className={`relative w-full transition-all ${animation.duration} ${
              animation.easing
            }
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex flex-col space-y-6">
              <div className="bg-indigo-500 rounded-sm overflow-hidden relative group hover:transform hover:scale-102 transition-all duration-300">
                <div className="aspect-video">
                  <img
                    src="behavior.jpg"
                    alt="Clear Behavior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center space-y-3">
                <h1 className="text-lg font-medium xl:text-xl text-black">
                  Clear Behaviors
                </h1>
                {/* <p className="text-gray-600 text-sm xl:text-base">
                  Foster a culture of innovation by implementing best practices
                  and encouraging collaborative problem-solving.
                </p> */}
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div
            className={`relative w-full transition-all ${animation.duration} ${
              animation.easing
            }
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="flex flex-col space-y-6">
              <div className="bg-violet-500 rounded-sm overflow-hidden relative group hover:transform hover:scale-102 transition-all duration-300">
                <div className="aspect-video">
                  <img
                    src="plan.jpg"
                    alt="Clear Plan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center space-y-3">
                <h1 className="text-lg font-medium xl:text-xl text-black">
                  Clear Plan
                </h1>
                {/* <p className="text-gray-600 text-sm xl:text-base">
                  Execute your innovation strategy with clear milestones,
                  measurable outcomes, and actionable steps.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
