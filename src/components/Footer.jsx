import { memo } from "react"
import { NavLink } from "react-router-dom"
import { FaLinkedinIn } from "react-icons/fa"

// Theme configuration
const theme = {
  background: "#2a6f7f",
  text: {
    primary: "#f4f1ec",
    secondary: "#b2cbd0",
  },
  accent: "#b2cbd0",
  decorative: {
    background: "#b2cbd0",
    opacity: "0.05",
  },
}

// Content configuration
const content = {
  company: {
    name: "Company Name",
    description: "Synergy Learning Solutions LLC",
    logo: {
      src: "logo.png",
      alt: "Company Logo",
      height: "42",
      width: "42",
    },
  },
  contact: {
    address:
      "5540 Centerview Drive, Suite 204, Raleigh, North Carolina 27606-8012 United States",
    phone: "+1 (234) 567-890",
    email: "contact@synergylearning.com",
    social: {
      linkedin: "#",
    },
  },
  navigation: {
    title: "Navigate",
    items: [
      { to: "/", label: "About" },
      { to: "/pricing", label: "Product & Pricing" },
    ],
  },
}

// Footer Link Component
const FooterLink = memo(({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-[17px] transition-all duration-300 relative group ${
        isActive ? "text-[#f4f1ec]" : "text-[#b2cbd0] hover:text-[#f4f1ec]"
      } ${className}`
    }
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f4f1ec] transition-all duration-300 group-hover:w-full" />
  </NavLink>
))

FooterLink.displayName = "FooterLink"

// Main Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={`bg-[${theme.background}] pt-0 pb-0 font-['Raleway'] mt-auto relative overflow-hidden`}
      role="contentinfo"
    >
      {/* Decorative background elements */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#b2cbd0] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b2cbd0] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo and Description Section */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <NavLink
              to="/"
              className="block mb-6"
              aria-label="Home"
            >
              <img
                src={content.company.logo.src}
                alt={content.company.logo.alt}
                className="h-16 w-auto brightness-200 filter object-contain"
                loading="lazy"
                width={content.company.logo.width}
                height={content.company.logo.height}
              />
            </NavLink>
            <p className="text-[#f4f1ec]/90 text-center lg:text-left max-w-sm leading-relaxed mb-8">
              {content.company.description}
            </p>
          </div>

          {/* Navigation Section */}
          <nav
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            role="navigation"
            aria-label="Footer navigation"
          >
            <h3 className="text-[#f4f1ec] font-bold text-xl relative inline-block">
              {content.navigation.title}
              <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-[#b2cbd0]" />
            </h3>
            {content.navigation.items.map((item, index) => (
              <FooterLink
                key={index}
                to={item.to}
              >
                {item.label}
              </FooterLink>
            ))}
          </nav>

          {/* Contact and Social Section */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <h3 className="text-[#f4f1ec] font-bold text-xl mb-6 relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-[#b2cbd0]" />
            </h3>
            <p className="text-[#f4f1ec]/90 hover:text-[#b2cbd0] transition-colors duration-300 mb-4">
              {content.contact.address}
            </p>
            <a
              href={`mailto:${content.contact.email}`}
              className="text-[#f4f1ec]/90 hover:text-[#b2cbd0] transition-colors duration-300 mb-6"
            >
              {content.contact.email}
            </a>
            <a
              href={`tel:${content.contact.phone}`}
              className="text-[#f4f1ec]/90 hover:text-[#b2cbd0] transition-colors duration-300 mb-4"
            >
              {content.contact.phone}
            </a>

            <a
              href={content.contact.social.linkedin}
              aria-label="LinkedIn"
              className="bg-[#f4f1ec] text-[#033e4e] p-3 rounded-full hover:bg-[#b2cbd0] transition-all duration-300 hover:scale-110 hover:rotate-6"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-4 border-t border-[#f4f1ec]/10">
          <div className="text-center items-center gap-4">
            <p className="text-[#f4f1ec]/60 text-sm">
              © {currentYear} {content.company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
