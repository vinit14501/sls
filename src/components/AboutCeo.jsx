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
        className="w-full lg:w-1/2 min-h-[400px] md:min-h-[500px] lg:min-h-screen relative p-6"
        style={{ backgroundColor: theme.leftBackground }}
      >
        <div
          className={`h-full w-full transition-all ${animation.duration} ${
            animation.easing
          } ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          {/* White frame container */}
          <div className="h-full w-full p-4 sm:p-6">
            {/* Inner image container */}
            <div className="h-full w-full overflow-hidden border-4 sm:border-8 border-white">
              <img
                src="ceo.jfif"
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
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2"
            style={{
              color: theme.headingColor,
              fontFamily: '"Poppins", serif',
            }}
          >
            Meet the Founder & CEO
          </h2>

          <h3
            className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-4 lg:mb-6"
            style={{
              color: theme.accentColor,
              fontFamily: '"Poppins", serif',
            }}
          >
            Dr. Shauna F. Martin
          </h3>

          <div className="space-y-6 lg:space-y-8">
            <p
              className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed"
              style={{ color: theme.textColor }}
            >
              I&apos;m a classroom teacher turned 6-figure learning strategy
              leader for 3 award-winning, global contract research organizations
              (CROs). Over the past 20 years, I have helped over 4000 people
              apply their learning in ways that get results. My passion is
              helping others bridge the gap between learning and doing, and now
              I&apos;m fulfilling my passion in an industry dedicated to driving
              innovative therapeutic discoveries that save lives.
            </p>

            <div className="space-y-6 lg:space-y-8">
              <p
                className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed"
                style={{ color: theme.textColor }}
              >
                The life sciences executives that I have worked with know that I
                excel at tailoring learning strategy to meet their team&apos;s
                unique needs. I use the Synergy Evolve method to assess where
                their team&apos;s training gaps are and develop a plan for
                closing those gaps. In addition, driving quality is at the
                forefront of my Synergy Evolve method; so, CEOs and executives
                never have to worry about the quality of their deliverables
                diminishing in order to close employee skill gaps.
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
              <span className="text-base sm:text-lg">Connect with Me</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCeo
