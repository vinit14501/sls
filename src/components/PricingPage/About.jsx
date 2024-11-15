import { useState, useEffect } from "react"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  const config = {
    theme: {
      leftBackground: "#2a6f7f",
      rightBackground: "#e6dfd5",
      headingColor: "#033e4e",
      textColor: "#546b7b",
      accentColor: "#1a5f72",
      boxShadow: "rgba(3, 62, 78, 0.1)",
      fontFamily: '"Playfair Display", serif',
    },

    // Updated heights configuration for better responsive behavior
    heights: {
      mobile: {
        min: "auto",
        default: "auto",
      },
      tablet: {
        min: "auto",
        default: "auto",
      },
      desktop: {
        min: "600px",
        default: "calc(100vh - 80px)", // Subtracting header height
      },
    },

    content: {
      leftSection: {
        title: "What is Synergy Evolve?",
        description:
          "Our product is a 3-month engagement where you and your team achieve a shared vision of what innovation looks like in your organization, identify the key behaviors that employees need to achieve that vision, and co-create a clear plan of action to equip employees with the latest skills, knowledge, and competencies to deliver transformative results.",
      },
      rightSection: {
        title: "Who is Synergy Evolve For?",
        subtitle: "For the Life Sciences Executive Who...",
        bulletPoints: [
          "Leads a ClinOps or R&D team in a life sciences organization.",
          "Wants to drive innovation to stand out in a competitive market and meet the evolving needs of clients.",
          "Wants to attract and retain top talent.",
          "Wants a clear and straightforward learning framework that equips employees for innovation.",
        ],
      },
    },

    animation: {
      duration: "duration-1000",
      easing: "ease-out",
      delay: "delay-200",
      threshold: 0.1,
    },

    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  }

  // Simplified height styles with better responsive behavior
  const getHeightStyles = () => ({
    minHeight: config.heights.mobile.min,
    height: config.heights.mobile.default,
    [`@media (min-width: ${config.breakpoints.lg})`]: {
      minHeight: config.heights.desktop.min,
      height: config.heights.desktop.default,
    },
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: config.animation.threshold }
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
  }, [config.animation.threshold])

  return (
    <div
      id="about-section"
      className="w-full flex flex-col lg:flex-row min-h-screen"
    >
      {/* Left Section */}
      <div
        className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 xl:p-16 flex items-start justify-center"
        style={{
          backgroundColor: config.theme.leftBackground,
          ...getHeightStyles(),
        }}
      >
        <div
          className={`w-full max-w-2xl text-white transition-all ${
            config.animation.duration
          } ${config.animation.easing} ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6"
            style={{ fontFamily: config.theme.fontFamily }}
          >
            {config.content.leftSection.title}
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              {config.content.leftSection.description}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 xl:p-16 flex items-start justify-center"
        style={{
          backgroundColor: config.theme.rightBackground,
          ...getHeightStyles(),
        }}
      >
        <div
          className={`w-full max-w-2xl transition-all ${
            config.animation.duration
          } ${config.animation.easing} ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6"
            style={{
              color: config.theme.headingColor,
              fontFamily: config.theme.fontFamily,
            }}
          >
            {config.content.rightSection.title}
          </h2>

          <p
            className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6"
            style={{ color: config.theme.textColor }}
          >
            {config.content.rightSection.subtitle}
          </p>

          <div className="space-y-3 sm:space-y-4">
            <ul className="space-y-2 sm:space-y-3">
              {config.content.rightSection.bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg"
                  style={{ color: config.theme.textColor }}
                >
                  <CheckCircle2
                    className="mt-1 flex-shrink-0"
                    size={20}
                    style={{ color: config.theme.accentColor }}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
