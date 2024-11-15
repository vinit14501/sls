import { useState, useEffect } from "react"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  // Comprehensive configuration object
  const config = {
    // Theme configuration
    theme: {
      leftBackground: "#2a6f7f",
      rightBackground: "#e6dfd5",
      headingColor: "#033e4e",
      textColor: "#546b7b",
      accentColor: "#1a5f72",
      boxShadow: "rgba(3, 62, 78, 0.1)",
      fontFamily: '"Playfair Display", serif',
    },

    // Height configuration
    heights: {
      mobile: {
        left: {
          min: "400px",
          max: "600px",
          default: "450px",
        },
        right: {
          min: "400px",
          max: "600px",
          default: "450px",
        },
      },
      tablet: {
        left: {
          min: "450px",
          max: "650px",
          default: "500px",
        },
        right: {
          min: "450px",
          max: "650px",
          default: "500px",
        },
      },
      desktop: {
        left: {
          min: "60vh",
          max: "80vh",
          default: "70vh",
        },
        right: {
          min: "60vh",
          max: "80vh",
          default: "70vh",
        },
      },
    },

    // Content configuration
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

    // Animation configuration
    animation: {
      duration: "duration-1000",
      easing: "ease-out",
      delay: "delay-200",
      threshold: 0.1,
    },

    // Responsive breakpoints
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  }

  // Height style generator
  const getHeightStyles = (side) => ({
    minHeight: config.heights.mobile[side].min,
    maxHeight: config.heights.mobile[side].max,
    height: config.heights.mobile[side].default,
    [`@media (min-width: ${config.breakpoints.sm})`]: {
      minHeight: config.heights.tablet[side].min,
      maxHeight: config.heights.tablet[side].max,
      height: config.heights.tablet[side].default,
    },
    [`@media (min-width: ${config.breakpoints.lg})`]: {
      minHeight: config.heights.desktop[side].min,
      maxHeight: config.heights.desktop[side].max,
      height: config.heights.desktop[side].default,
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
      className="w-full flex flex-col lg:flex-row"
    >
      {/* Left Section */}
      <div
        className="w-full lg:w-1/2 px-8 lg:px-16 flex items-start pt-16"
        style={{
          backgroundColor: config.theme.leftBackground,
          ...getHeightStyles("left"),
        }}
      >
        <div
          className={`w-full max-w-2xl mx-auto text-white transition-all ${
            config.animation.duration
          } ${config.animation.easing} ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-6"
            style={{ fontFamily: config.theme.fontFamily }}
          >
            {config.content.leftSection.title}
          </h2>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
              {config.content.leftSection.description}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-16 flex items-start pt-16"
        style={{
          backgroundColor: config.theme.rightBackground,
          ...getHeightStyles("right"),
        }}
      >
        <div
          className={`w-full max-w-2xl mx-auto transition-all ${
            config.animation.duration
          } ${config.animation.easing} ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-6"
            style={{
              color: config.theme.headingColor,
              fontFamily: config.theme.fontFamily,
            }}
          >
            {config.content.rightSection.title}
          </h2>

          <p
            className="text-xl leading-relaxed mb-6"
            style={{ color: config.theme.textColor }}
          >
            {config.content.rightSection.subtitle}
          </p>

          <div className="space-y-4">
            <ul className="space-y-3">
              {config.content.rightSection.bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg"
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
