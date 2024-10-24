import { useState, useEffect } from "react"
import { Quote as QuoteIcon } from "lucide-react"

const Quotes = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Theme configuration
  const theme = {
    quoteBackground: "#033e4e",
    quoteText: "#f4f1ec",
    accentColor: "#b2cbd0",
    boxShadow: "rgba(0, 0, 0, 0.2)",
  }

  // Animation configuration remains the same
  const animation = {
    duration: "duration-1000",
    easing: "ease-out",
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

    const quoteSection = document.getElementById("quote-section")
    if (quoteSection) {
      observer.observe(quoteSection)
    }

    return () => {
      if (quoteSection) {
        observer.unobserve(quoteSection)
      }
    }
  }, [])

  return (
    <div
      id="quote-section"
      className="w-full py-16 lg:py-24 bg-[#f4f1ec]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative transition-all ${animation.duration} ${
            animation.easing
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Quote Box */}
          <div
            className="rounded-lg p-8 md:p-12 relative overflow-hidden"
            style={{
              backgroundColor: theme.quoteBackground,
              boxShadow: `0 8px 32px ${theme.boxShadow}`,
            }}
          >
            {/* Background Quote Icons */}
            <div className="absolute -top-4 -left-4 opacity-5">
              <QuoteIcon
                size={120}
                color={theme.accentColor}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-5 transform rotate-180">
              <QuoteIcon
                size={120}
                color={theme.accentColor}
              />
            </div>

            {/* Main Quote Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <QuoteIcon
                  size={32}
                  className="text-cyan-600"
                  color={theme.accentColor}
                />
              </div>
              <blockquote>
                <p
                  className="text-xl md:text-2xl text-center font-medium leading-relaxed font-playfair italic"
                  style={{ color: theme.quoteText }}
                >
                  &quot;Life sciences organizations without a strong L&D
                  initiative report a 37% lower productivity rate that leads to
                  significant decreases in innovation. In fact, nearly 75% of
                  all life sciences executives report that employee skill gaps
                  are a major barrier to innovation.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotes
