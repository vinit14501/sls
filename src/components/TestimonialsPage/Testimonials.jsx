import { useState, useEffect } from "react"

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Theme configuration with updated colors for modern look
  const theme = {
    backgroundPrimary: "#f4f1ec",
    headingColor: "#033e4e",
    textColor: "#546b7b",
    testimonialColors: [
      {
        bg: "#e8f4f7",
        text: "#2c5967",
        secondary: "#45818e",
        shadow: "rgba(44, 89, 103, 0.1)",
      },
      {
        bg: "#004d63",
        text: "#ffffff",
        secondary: "#a3c2cc",
        shadow: "rgba(0, 77, 99, 0.15)",
      },
      {
        bg: "#37889d",
        text: "#ffffff",
        secondary: "#c5dde5",
        shadow: "rgba(55, 136, 157, 0.15)",
      },
    ],
  }

  // Animation configuration
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

    const testimonialSection = document.getElementById("testimonial-section")
    if (testimonialSection) {
      observer.observe(testimonialSection)
    }

    return () => {
      if (testimonialSection) {
        observer.unobserve(testimonialSection)
      }
    }
  }, [])

  const testimonials = [
    {
      text: "Working with Shauna on the Learning Accelerated Framework was a transformative experience for our team. Her coaching helped us gain a clear understanding of how to align our training strategies with our business goals. Shauna's structured approach, particularly in using data to inform our training needs and outcomes, was incredibly valuable.",
      author: "Michelle F",
      position: "CEO & Creator",
      company: "TimeMakeHer",
    },
    {
      text: "In terms of training effectiveness and experience Shauna has a keen ability to measure and enhance the impact of trainings. When working with Shauna it was obvious that her methods for evaluating training outcomes significantly improved the training materials available to drive our team's performance and knowledge retention.",
      author: "Neal W",
      position: "VP Global Biometrics Oversight",
      company: "Parexel",
    },
    {
      text: "I had the pleasure of working with Shauna for two years when she was a Senior Learning & Performance Specialist at Rho. Shauna was very creative, easy to work with, honest, ethical, and an excellent collaborator. Shauna is very knowledgeable about teaching, coaching, and team development.",
      author: "Jack M.",
      position: "Scientific Advisor",
      company: "Rho",
    },
  ]

  return (
    <div
      id="testimonial-section"
      className="w-full py-16 lg:py-20"
      style={{ backgroundColor: theme.backgroundPrimary }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all ${animation.duration} ${
            animation.easing
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: theme.headingColor }}
          >
            Anyone Can Promise You Growth, But Not Everyone Can Back It Up.
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: theme.textColor }}
          >
            I pride myself on not only getting you growth but exceeding your
            expectations. But don't take my word for it. Here are a handful of
            amazing women like you who've generated tremendous impact working
            with me.
          </p>
        </div>

        {/* Chat-style Testimonials */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all ${animation.duration} ${
                animation.easing
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Container with alternating alignment */}
              <div
                className={`flex ${
                  index % 2 === 0 ? "justify-start pl-4" : "justify-end pr-4"
                }`}
              >
                {/* Message Content */}
                <div
                  className={`relative max-w-2xl ${
                    index % 2 === 0 ? "chat-bubble-left" : "chat-bubble-right"
                  }`}
                  style={{
                    "--bubble-bg": theme.testimonialColors[index].bg,
                    "--bubble-shadow": theme.testimonialColors[index].shadow,
                  }}
                >
                  <style jsx>{`
                    .chat-bubble-left,
                    .chat-bubble-right {
                      position: relative;
                      background: var(--bubble-bg);
                      border-radius: 24px;
                      padding: 32px;
                      box-shadow: 0 8px 32px var(--bubble-shadow);
                    }

                    .chat-bubble-left {
                      border-bottom-left-radius: 4px;
                    }

                    .chat-bubble-right {
                      border-bottom-right-radius: 4px;
                    }
                  `}</style>

                  {/* Testimonial Text */}
                  <p
                    className="text-lg leading-relaxed mb-6"
                    style={{ color: theme.testimonialColors[index].text }}
                  >
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex flex-col">
                    <p
                      className="font-semibold text-lg mb-1"
                      style={{ color: theme.testimonialColors[index].text }}
                    >
                      {testimonial.author}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        color: theme.testimonialColors[index].secondary,
                      }}
                    >
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
