import { useState, useEffect } from "react"

const Pillars = () => {
  const [isVisible, setIsVisible] = useState(false)

  const pillars = [
    {
      title: "Setting the Stage",
      description:
        "One live workshop to clarify what innovation looks like and prioritize actions needed to achieve the vision.",
    },
    {
      title: "Strategy",
      description:
        "Three strategy sessions to establish clear objectives and clear process strategies for equipping employees with the skills needed to drive innovation.",
    },
    {
      title: "Coaching",
      description:
        "Coaching support to guide strategy development and tactical planning.",
    },
    {
      title: "Tools",
      description:
        "Get the Equipping Your Team for Innovation Playbook complete with blueprints, frameworks, and checklists.",
    },
  ]

  // Animation setup
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

    const pillarsSection = document.getElementById("pillars-section")
    if (pillarsSection) {
      observer.observe(pillarsSection)
    }

    return () => {
      if (pillarsSection) {
        observer.unobserve(pillarsSection)
      }
    }
  }, [])

  return (
    <div
      id="pillars-section"
      className="w-full px-4 py-12 bg-white"
    >
      <h2
        className={`text-center text-3xl md:text-4xl font-bold mb-12 text-[#033e4e] font-['Raleway'] 
          transition-all ${animation.duration} ${animation.easing}
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        Your 4 Success Pillars
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <div
            key={pillar.title}
            className={`p-6 rounded-lg shadow-md h-full flex flex-col 
              ${index % 2 === 0 ? "bg-[#e6dfd5]" : "bg-[#afccd2]"}
              transition-all ${animation.duration} ${animation.easing}
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            style={{
              transitionDelay: `${150 * (index + 1)}ms`,
            }}
          >
            <h3
              className={`text-xl font-bold mb-4 font-['Playfair_Display'] 
                ${index % 2 === 0 ? "text-[#033e4e]" : "text-[#033e4e]"}`}
            >
              {pillar.title}
            </h3>
            <p className="text-[#033e4e] flex-grow">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pillars
