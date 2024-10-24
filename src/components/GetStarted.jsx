import { useEffect, useState } from "react"

const GetStarted = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const theme = {
    background: "#033e4e",
    textPrimary: "#f4f1ec",
    textSecondary: "#b2cbd0",
    buttonBg: "#b2cbd0",
    buttonText: "#033e4e",
    buttonHoverBg: "#033e4e",
    buttonHoverText: "#b2cbd0",
  }

  const animation = {
    duration: "duration-1000",
    easing: "ease-out",
    delay: "delay-200",
  }

  const layout = {
    maxWidth: "max-w-7xl",
    padding: "py-6",
    innerPadding: "py-16",
    spacing: "gap-8",
    minHeight: "min-h-[200px]",
    maxHeight: "max-h-[500px]",
    containerHeight: "h-full",
    contentMinHeight: "min-h-[100px]",
    contentMaxHeight: "max-h-[400px]",
    backgroundMinHeight: "min-h-[200px]",
    backgroundMaxHeight: "max-h-[500px]",
  }

  return (
    <div
      className={`relative ${layout.padding} ${layout.minHeight} ${layout.maxHeight} 
        ${layout.containerHeight} font-sans pt-0 pb-0`}
      role="region"
      aria-label="Get Started Section"
      style={{ backgroundColor: theme.background }}
    >
      <div className={`${layout.maxWidth} mx-auto px-4 sm:px-6 lg:px-8 h-full`}>
        <div
          className={`relative ${layout.backgroundMinHeight} ${layout.backgroundMaxHeight} 
            ${layout.containerHeight}`}
          style={{ backgroundColor: theme.background }}
        >
          <div
            className={`absolute inset-0 z-0 ${layout.backgroundMinHeight} 
              ${layout.backgroundMaxHeight} transition-all ${
              animation.duration
            } ${animation.easing}
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
            style={{
              backgroundColor: theme.background,
            }}
            aria-hidden="true"
          ></div>

          <div
            className={`relative z-10 px-6 ${layout.innerPadding} 
              ${layout.contentMinHeight} ${layout.contentMaxHeight}
              sm:px-12 flex flex-col ${layout.spacing} 
              transition-all ${animation.duration} ${animation.easing}
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <div className="space-y-6">
              <h2
                className={`font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                  leading-[1.2] max-w-[25ch] transition-all ${
                    animation.duration
                  } ${animation.easing}
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{
                  fontFamily: '"Playfair Display", serif',
                  color: theme.textPrimary,
                }}
              >
                Get Started Today
              </h2>

              <p
                className={`text-lg md:text-xl max-w-2xl transition-all 
                  ${animation.duration} ${animation.delay} ${animation.easing}
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{ color: theme.textSecondary }}
              >
                Find out why life sciences executives who commit to SLS&apos;s
                Synergy Evolve method always know their teams are equipped to
                drive innovation.
              </p>

              <button
                className={`mt-8 px-10 py-4 text-lg font-medium rounded-xl transition-all 
                  duration-300 ease-in-out transform hover:scale-105 border-2 border-transparent
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{
                  backgroundColor: theme.buttonBg,
                  color: theme.buttonText,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = theme.buttonHoverBg
                  e.currentTarget.style.color = theme.buttonHoverText
                  e.currentTarget.style.border =
                    "2px solid " + theme.buttonHoverText
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = theme.buttonBg
                  e.currentTarget.style.color = theme.buttonText
                  e.currentTarget.style.border = "2px solid transparent"
                }}
              >
                Book A Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
