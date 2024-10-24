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
        className="w-full lg:w-1/2 min-h-[600px] lg:min-h-screen relative p-8 lg:p-16"
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
          <div className="relative h-full w-full p-7">
            {/* Inner image container */}
            <div className="relative h-full w-full overflow-hidden border-8 border-white">
              <img
                src="ceo.png"
                alt="CEO Portrait"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <p className="text-white text-xl italic font-light">
                  Transforming lives through innovative learning solutions
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Content */}
      <div
        className="w-full lg:w-1/2 min-h-[600px] lg:min-h-screen py-16 lg:py-24 px-4 sm:px-8 lg:px-16 flex items-center"
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12"
            style={{
              color: theme.headingColor,
              fontFamily: '"Poppins", serif',
            }}
          >
            Meet the Founder & CEO
          </h2>

          <div className="space-y-8">
            <p
              className="text-xl leading-relaxed"
              style={{ color: theme.textColor }}
            >
              Learning solutions leader for 3 award-winning, global CROs with a
              doctorate in educational leadership.
            </p>

            <div className="space-y-4">
              <p
                className="text-xl font-medium"
                style={{ color: theme.accentColor }}
              >
                Creator of the Synergy Evolve Method -
              </p>
              <p
                className="text-xl leading-relaxed"
                style={{ color: theme.textColor }}
              >
                Over 20 years helping thousands of people use what they learn to
                make a transformative impact in their lives and in the lives of
                others.
              </p>
            </div>

            {/* New Connect Button */}
            <button
              className="mt-8 flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:translate-x-1"
              style={{ backgroundColor: theme.accentColor }}
            >
              Connect with Me
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCeo
