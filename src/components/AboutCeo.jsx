import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

const AboutCeo = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Theme configuration
  const theme = {
    leftBackground: "#b2cbd0",
    rightBackground: "#f4f1ec",
    headingColor: "#033e4e",
    textColor: "#546b7b",
    accentColor: "#1a5f72",
    boxShadow: "rgba(3, 62, 78, 0.1)",
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

    const ceoSection = document.getElementById("ceo-section")
    if (ceoSection) {
      observer.observe(ceoSection)
    }

    return () => {
      if (ceoSection) {
        observer.unobserve(ceoSection)
      }
    }
  }, [])

  return (
    <div
      id="ceo-section"
      className="w-full flex flex-col lg:flex-row"
    >
      {/* Left Section - Image */}
      <div
        className="w-full lg:w-1/2 min-h-[400px] md:min-h-[500px] lg:min-h-screen relative p-6 sm:p-8"
        style={{ backgroundColor: theme.leftBackground }}
      >
        <div
          className={`h-full transition-all ${animation.duration} ${
            animation.easing
          } ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          {/* White frame container */}
          <div className="relative h-full w-full p-4 sm:p-6">
            {/* Inner image container */}
            <div className="relative h-full w-full overflow-hidden border-4 sm:border-8 border-white">
              <img
                src="ceo.png"
                alt="CEO Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Content */}
      <div
        className="w-full lg:w-1/2 min-h-[400px] md:min-h-[500px] lg:min-h-screen p-6 sm:p-8 lg:p-12 flex items-center"
        style={{ backgroundColor: theme.rightBackground }}
      >
        <div
          className={`w-full max-w-2xl mx-auto transition-all ${
            animation.duration
          } ${animation.easing} ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2"
            style={{
              color: theme.headingColor,
              fontFamily: '"Poppins", serif',
            }}
          >
            Meet the Founder & CEO
          </h2>

          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 lg:mb-6"
            style={{
              color: theme.accentColor,
              fontFamily: '"Poppins", serif',
            }}
          >
            Dr. Shauna F. Martin
          </h3>

          <div className="space-y-6 lg:space-y-8">
            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: theme.textColor }}
            >
              Learning solutions leader for 3 award-winning, global CROs with a
              doctorate in educational leadership.
            </p>

            <div className="space-y-4">
              <p
                className="text-lg sm:text-xl font-medium"
                style={{ color: theme.accentColor }}
              >
                Creator of the Synergy Evolve Method -
              </p>
              <p
                className="text-lg sm:text-xl leading-relaxed"
                style={{ color: theme.textColor }}
              >
                Over 20 years helping thousands of people use what they learn to
                make a transformative impact in their lives and in the lives of
                others.
              </p>
            </div>

            {/* Connect Button with LinkedIn link */}
            <a
              href="https://www.linkedin.com/in/shaunafmartin/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 lg:mt-8 inline-flex items-center gap-2 px-4 sm:px-6 py-3 text-white rounded-lg transition-all duration-300 hover:translate-x-1"
              style={{ backgroundColor: theme.accentColor }}
            >
              Connect with Me
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCeo
