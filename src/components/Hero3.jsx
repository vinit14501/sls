import { useState, useEffect, memo } from "react"

// Theme configuration
const theme = {
  backgroundPrimary: "#e6dfd5",
  headingColor: "#033e4e",
  textColor: "#546b7b",
}

// Animation configuration
const animation = {
  duration: "duration-1000",
  easing: "ease-out",
  delay: "delay-200",
}

// Memoized Card Component
const Card = memo(function Card({ image, title, index, isVisible }) {
  const getAnimationClass = () => {
    if (index === 0) {
      return isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-10"
    } else if (index === 1) {
      return isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    } else {
      return isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-10"
    }
  }

  return (
    <div
      className={`relative w-full transition-all ${animation.duration} ${
        animation.easing
      } ${getAnimationClass()}`}
      style={{ transitionDelay: `${150 + index * 150}ms` }}
    >
      <div className="flex flex-col space-y-6">
        <div
          className={`${
            index === 0
              ? "bg-gray-800"
              : index === 1
              ? "bg-indigo-500"
              : "bg-violet-500"
          } rounded-sm overflow-hidden relative group hover:scale-105 transition-all duration-300`}
        >
          <div className="relative pb-[75%]">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-lg font-medium xl:text-xl text-black">{title}</h1>
        </div>
      </div>
    </div>
  )
})

// Main Component
export default function Hero3() {
  const [isVisible, setIsVisible] = useState(false)

  const cards = [
    { image: "vision.jpg", title: "Clear Vision" },
    { image: "behavior.jpg", title: "Clear Behaviors" },
    { image: "plan.jpg", title: "Clear Plan" },
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

    const heroSection = document.getElementById("hero-section")
    if (heroSection) {
      observer.observe(heroSection)
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection)
      }
    }
  }, [])

  return (
    <section
      id="hero-section"
      className="py-20"
      style={{ backgroundColor: theme.backgroundPrimary }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-14 text-center transition-all ${animation.duration} ${
            animation.easing
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-4xl text-center font-medium leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto"
            style={{
              color: theme.headingColor,
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            How can you remove the obstacles hindering your innovation?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          {cards.map((card, index) => (
            <Card
              key={card.title}
              image={card.image}
              title={card.title}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
