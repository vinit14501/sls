import { useState, useEffect } from "react"
import { Check, Star } from "lucide-react"

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)

  const theme = {
    backgroundPrimary: "#f4f1ec",
    headingColor: "#033e4e",
    textColor: "#2a6f7f",
    accentColor: "#546b7b",
    bonusColor: "#033e4e",
  }

  const animation = {
    duration: "duration-1000",
    easing: "ease-out",
    delay: "delay-200",
  }

  const pricingItems = [
    {
      title: '"Equipping Your Team for Innovation" Playbook',
      value: 30000,
    },
    {
      title: '1-Day In-Person "Creating Your Innovation Vision" Workshop',
      value: 15000,
    },
    {
      title: '"Equipping Your Team for Innovation" Coaching Support',
      value: 15000,
    },
    {
      title: "3 Virtual Strategy Sessions",
      value: 6000,
    },
    {
      title: "2 Executive Presentations",
      value: 4000,
    },
    {
      title: "BONUS: Executive Guide: Time-Efficient L&D Implementation",
      value: 5000,
      isBonus: true,
    },
    {
      title: "BONUS: Executive Guide: Change Management",
      value: 5000,
      isBonus: true,
    },
  ]

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

    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      observer.observe(pricingSection)
    }

    return () => {
      if (pricingSection) {
        observer.unobserve(pricingSection)
      }
    }
  }, [])

  const totalValue = pricingItems.reduce((sum, item) => sum + item.value, 0)
  const investment = 60000

  return (
    <section
      id="pricing-section"
      className="py-12 sm:py-16 md:py-20 lg:py-20"
      style={{ backgroundColor: theme.backgroundPrimary }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-8 sm:mb-10 md:mb-12 lg:mb-14 text-center transition-all ${
            animation.duration
          } ${animation.easing} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-tight md:leading-[3.25rem] mb-4 sm:mb-6"
            style={{
              color: theme.headingColor,
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Consulting Package
          </h2>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: theme.textColor }}
          >
            L&D OPTIMIZATION FOR INNOVATION
          </p>
          <p
            className="mt-3 sm:mt-4 text-base sm:text-lg max-w-3xl mx-auto"
            style={{ color: theme.textColor }}
          >
            In one quarter, your team will define what innovation looks like,
            identify behaviors to achieve it, and co-create a strategic roadmap
            for how to equip employees with the skills to perform the needed
            behaviors that will drive innovation.
          </p>
        </div>

        <div
          className={`bg-white rounded-lg shadow-xl transition-all ${
            animation.duration
          } ${animation.easing} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="p-4 sm:p-6 md:p-8">
            {pricingItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-start justify-between py-4 gap-2 sm:gap-4 ${
                  index !== pricingItems.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
                style={{
                  transitionDelay: `${150 * (index + 1)}ms`,
                }}
              >
                <div className="flex items-start gap-3 w-full sm:w-auto">
                  {item.isBonus ? (
                    <Star
                      className="mt-1 flex-shrink-0"
                      size={20}
                      style={{ color: theme.bonusColor }}
                      fill={theme.bonusColor}
                    />
                  ) : (
                    <Check
                      className="mt-1 flex-shrink-0"
                      size={20}
                      style={{ color: theme.accentColor }}
                    />
                  )}
                  <span
                    className={`text-base sm:text-lg ${
                      item.isBonus ? "font-semibold" : ""
                    }`}
                    style={{ color: theme.textColor }}
                  >
                    {item.title}
                  </span>
                </div>
                <span
                  className="text-base sm:text-lg font-semibold ml-8 sm:ml-0"
                  style={{ color: theme.headingColor }}
                >
                  ${item.value.toLocaleString()} value
                </span>
              </div>
            ))}

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-2 border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
                <span
                  className="text-lg sm:text-xl font-bold"
                  style={{ color: theme.headingColor }}
                >
                  TOTAL VALUE
                </span>
                <span
                  className="text-lg sm:text-xl font-bold ml-8 sm:ml-0"
                  style={{ color: theme.headingColor }}
                >
                  ${totalValue.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                <span
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: theme.accentColor }}
                >
                  YOUR INVESTMENT
                </span>
                <span
                  className="text-xl sm:text-2xl font-bold ml-8 sm:ml-0"
                  style={{ color: theme.accentColor }}
                >
                  ${investment.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
