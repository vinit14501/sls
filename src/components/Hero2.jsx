import { useEffect, useState } from "react"

const Hero2 = () => {
  // State for controlling animation visibility
  const [isVisible, setIsVisible] = useState(false)

  // Animation trigger on component mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // ===== Theme Configuration =====
  const theme = {
    // Background and Text Colors
    background: "#033e4e", // Primary background color for the entire section
    textPrimary: "#f4f1ec", // Main heading text color
    textSecondary: "#b2cbd0", // Subtext/paragraph color

    // Button Styling
    buttonBg: "#f4f1ec", // Default button background color
    buttonText: "#033e4e", // Default button text color
    buttonHoverBg: "#e4d4b0", // Button background color on hover
    buttonHoverText: "#033e4e", // Button text color on hover
  }

  // ===== Animation Configuration =====
  const animation = {
    duration: "duration-1000", // Duration of the animation (using Tailwind classes)
    easing: "ease-out", // Easing function for smoother transitions
    delay: "delay-200", // Delay before animation starts
  }

  // ===== Layout Configuration =====
  const layout = {
    maxWidth: "max-w-7xl", // Maximum width of the content container
    padding: "py-7", // Vertical padding for the outer container
    innerPadding: "py-14", // Vertical padding for the inner content
    spacing: "gap-8", // Space between elements

    // Height Configuration
    minHeight: "min-h-[150px]", // Minimum height constraint
    maxHeight: "max-h-[400px]", // Maximum height constraint
    containerHeight: "h-full", // Full height for proper inheritance
    contentMinHeight: "min-h-[50px]", // Minimum content area height
    contentMaxHeight: "max-h-[350px]", // Maximum content area height
    backgroundMinHeight: "min-h-[150px]", // Minimum background height
    backgroundMaxHeight: "max-h-[370px]", // Maximum background height
    contentAlignment: "justify-center", // Vertical alignment of content
  }

  return (
    // Main Hero Container with Min/Max Height
    <div
      className={`relative ${layout.padding} ${layout.minHeight} ${layout.maxHeight} 
        ${layout.containerHeight} font-sans`}
      role="banner"
      aria-label="Hero Section"
      style={{ backgroundColor: theme.background }}
    >
      {/* Content Width Controller with Full Height */}
      <div className={`${layout.maxWidth} mx-auto px-4 sm:px-6 lg:px-8 h-full`}>
        {/* Background Container with Min/Max Height */}
        <div
          className={`relative ${layout.backgroundMinHeight} ${layout.backgroundMaxHeight} 
            ${layout.containerHeight}`}
          style={{ backgroundColor: theme.background }}
        >
          {/* Animated Background Layer with Min/Max Height */}
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

          {/* Main Content Container with Min/Max Height */}
          <div
            className={`relative z-10 px-6 ${layout.innerPadding} 
              ${layout.contentMinHeight} ${layout.contentMaxHeight}
              sm:px-12 flex flex-col items-center ${layout.contentAlignment} ${
              layout.spacing
            } 
              transition-all ${animation.duration} ${animation.easing}
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            {/* Content Wrapper */}
            <div className="text-center space-y-6">
              {/* Main Headline */}
              <h1
                className={`font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                  leading-[1.2] max-w-[25ch] mx-auto transition-all ${
                    animation.duration
                  } ${animation.easing}
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  color: theme.textPrimary,
                }}
              >
                Clear Vision, Clear Behaviors,{" "}
                <span className="block">Clear Plan</span>
              </h1>

              {/* Subtext/Description */}
              <p
                className={`text-lg md:text-xl max-w-2xl mx-auto transition-all 
                  ${animation.duration} ${animation.delay} ${animation.easing}
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{ color: theme.textSecondary }}
              >
                Are you a life sciences executive who hires the best industry
                talent but finds slowing down of innovation?
              </p>

              {/* Call-to-Action Button */}
              <button
                className={`mt-8 px-8 py-3 text-lg font-medium rounded-lg transition-all 
                  duration-300 ease-in-out border-2 border-transparent
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
                Explore Synergy Evolve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
