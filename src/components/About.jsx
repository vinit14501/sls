import { useState, useEffect } from "react"
import { CheckCircle } from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Theme configuration
  const theme = {
    backgroundPrimary: "#f4f1ec",
    backgroundSecondary: "#e6dfd5",
    headingColor: "#033e4e",
    textColor: "#033e4e",
    boxBackground: "#e6dfd5",
    // boxShadow: "rgba(3, 62, 78, 0.1)",
    accentColor: "#0891b2",
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

    const aboutSection = document.getElementById("about-section")
    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection)
      }
    }
  }, [])

  // Bullet points data with enhanced organization
  const bulletPoints = [
    {
      title:
        "Accelerate innovation without sacrificing quality, driving industry-leading outcomes for CROs",
    },
    {
      title:
        " Equip your employees with the skills and knowledge to deliver transformative results.",
    },
    {
      title:
        "Ensure the right people are doing the right things with the right training, at the right time for maximum impact",
    },
  ]

  return (
    <div
      id="about-section"
      className="w-full py-16 lg:py-19"
      style={{ backgroundColor: theme.backgroundPrimary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modified Main Heading - Changed from center to left alignment */}
        <div
          className={`mb-12 transition-all ${animation.duration} ${
            animation.easing
          }
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{
              color: theme.headingColor,
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Empowering CRO Excellence
          </h2>
          <p
            className="text-xl max-w-3xl"
            style={{ color: theme.textColor }}
          >
            Our well proven framework helps the CRO executives -
          </p>
        </div>

        {/* Enhanced Box Container */}
        <div
          className={`rounded-sm transition-all ${animation.duration} ${
            animation.easing
          }
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{
            backgroundColor: theme.backgroundSecondary,
            boxShadow: `0 4px 24px ${theme.boxShadow}`,
          }}
        >
          {/* Content Container */}
          <div className="p-8 md:p-12 space-y-8">
            {bulletPoints.map((point, index) => (
              <div
                key={index}
                className={`transition-all ${animation.duration} ${
                  animation.easing
                }
                  ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start group hover:transform hover:scale-102 transition-all duration-300">
                  {/* Enhanced Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle
                      size={24}
                      className="text-cyan-600 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Enhanced Content */}
                  <div className="ml-6">
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: theme.headingColor }}
                    >
                      {point.title}
                    </h3>
                    <p
                      className="text-lg"
                      style={{ color: theme.textColor }}
                    >
                      {point.description}
                    </p>
                  </div>
                </div>

                {/* Refined Divider */}
                {index < bulletPoints.length - 1 && (
                  <div
                    className="mt-8 border-b opacity-20"
                    style={{ borderColor: theme.headingColor }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
