import { useState, useEffect } from "react"

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)

  const theme = {
    backgroundPrimary: "#ffffff",
    headingColor: "#1e3a8a",
    textColor: "#475569",
    testimonialColors: [
      {
        bg: "#e8f4f7",
        text: "#2c5967",
        secondary: "#45818e",
      },
      {
        bg: "#004d63",
        text: "#ffffff",
        secondary: "#a3c2cc",
      },
      {
        bg: "#37889d",
        text: "#ffffff",
        secondary: "#c5dde5",
      },
    ],
  }

  const testimonials = [
    {
      text: "Working with Shauna on the Learning Accelerated Framework was a transformative experience for our team. Her coaching helped us gain a clear understanding of how to align our training strategies with our business goals. Shauna's structured approach, particularly in using data to inform our training needs and outcomes, was incredibly valuable. As a result, we were able to create a comprehensive learning plan that enhanced client delivery and outcomes.  I highly recommend Shauna for her expertise in learning strategy and her ability to deliver practical, impactful solutions.",
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
      text: "I had the pleasure of working with Shauna for two years when she was a Senior Learning & Performance Specialist at Rho (2019-2021). Shauna was very creative, easy to work with, honest, ethical, and an excellent collaborator. Shauna is very knowledgeable about teaching, coaching, and team development, and she is very good at helping to identify needed skill sets and talent to achieve specific goals, particularly in the field of clinical drug development. Shauna helps teams identify and hire the people who are most likely to succeed for a specific project, as well as to develop and provide needed training for its successful execution. In short, Shauna was a pleasure to work with and added considerable value to every team she was on.",
      author: "Jack M.",
      position: "Scientific Advisor",
      company: "Rho",
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

  return (
    <div
      id="testimonial-section"
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: theme.backgroundPrimary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Anyone Can Promise You Growth, But Not Everyone Can Back It Up.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I pride myself on not only getting you growth but exceeding your
            expectations. Here are a handful of amazing women like you who've
            generated tremendous impact working with me.
          </p>
        </div>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } mb-6`}
              >
                <div
                  className={`max-w-2xl ${index % 2 === 0 ? "mr-12" : "ml-12"}`}
                >
                  {/* Chat bubble with internal author info */}
                  <div className="relative">
                    <div
                      className={`p-6 hover:transform hover:scale-[1.01] transition-all duration-300 rounded-2xl 
                        ${index % 2 === 0 ? "rounded-tl-sm" : "rounded-tr-sm"}`}
                      style={{
                        backgroundColor: theme.testimonialColors[index].bg,
                        color: theme.testimonialColors[index].text,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                    >
                      <div className="text-base leading-relaxed mb-4">
                        {testimonial.text}
                      </div>

                      {/* Divider line */}
                      <div
                        className="h-px w-full my-4"
                        style={{
                          backgroundColor:
                            theme.testimonialColors[index].secondary,
                          opacity: 0.2,
                        }}
                      />

                      {/* Author info */}
                      <div className="flex flex-col">
                        <p className="font-semibold text-sm">
                          {testimonial.author}
                        </p>
                        <p
                          className="text-xs"
                          style={{
                            color: theme.testimonialColors[index].secondary,
                          }}
                        >
                          {testimonial.position} • {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Chat bubble tail */}
                    <div
                      className={`absolute top-0 w-4 h-4 
                        ${index % 2 === 0 ? "-left-2" : "-right-2"}`}
                      style={{
                        backgroundColor: theme.testimonialColors[index].bg,
                        transform: "rotate(45deg)",
                        marginTop: "12px",
                      }}
                    />
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
