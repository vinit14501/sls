import { memo } from "react"
import { NavLink } from "react-router-dom"
import { FaLinkedinIn } from "react-icons/fa"

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

const content = {
  company: {
    name: "Enlinque Consulting LLC",
    logo: {
      src: "2.png",
      alt: "Company Logo",
      height: "42",
      width: "42",
    },
  },
  contact: {
    address: "Synergy Learning Solutions LLC  ",
    address2:
      "5540 Centerview Drive, Suite 204 Raleigh, North Carolina 27606-8012",
    phone: "+1(919)473-9193",
    email: "shauna_martin@synergy-learningsolutions.com",
    social: {
      linkedin:
        "https://www.linkedin.com/company/synergy-learningsolutions/?viewAsMember=true",
    },
  },
  navigation: {
    title: "Navigate",
    items: [
      { to: "/", label: "About" },
      { to: "/pricing", label: "Product & Pricing" },
      { to: "/testimonial", label: "Testimoials" },
    ],
  },
}

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

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleLogoClick = () => {
    window.location.href = "/"
  }

  return (
    <footer
      className={`bg-[${theme.background}] pt-0 pb-0 font-['Raleway'] mt-auto relative overflow-hidden`}
      role="contentinfo"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start md:pl-0">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 sm:gap-3 mb-6"
              aria-label="Home"
            >
              <img
                src={content.company.logo.src}
                alt={content.company.logo.alt}
                className="h-12 sm:h-14 md:h-16 w-auto brightness-200 filter object-contain"
                loading="lazy"
                width={content.company.logo.width}
                height={content.company.logo.height}
              />
              <div
                className="font-['Caveat'] text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap"
                style={{
                  color: theme.text.primary,
                  transform: "rotate(-2deg)",
                }}
              >
                Synergy Learning Solutions
              </div>
            </button>
          </div>

          <nav
            className="flex flex-col items-center md:items-start gap-4"
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

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#f4f1ec] font-bold text-xl mb-6 relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-[#b2cbd0]" />
            </h3>
            <address className="text-center md:text-left not-italic">
              <p className="text-[#f4f1ec] hover:text-[#b2cbd0] transition-colors duration-300 mb-1">
                {content.contact.address}
              </p>
              <p className="text-[#f4f1ec] hover:text-[#b2cbd0] transition-colors duration-300 mb-4">
                {content.contact.address2}
              </p>
              <a
                href={`mailto:${content.contact.email}`}
                className="text-[#f4f1ec] hover:text-[#b2cbd0] transition-colors duration-300 mb-6 block whitespace-nowrap"
              >
                {content.contact.email}
              </a>
              <a
                href={`tel:${content.contact.phone}`}
                className="text-[#f4f1ec] hover:text-[#b2cbd0] transition-colors duration-300 mb-4 block"
              >
                {content.contact.phone}
              </a>
            </address>

            <a
              href={content.contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-[#f4f1ec] text-[#033e4e] p-3 rounded-full hover:bg-[#b2cbd0] transition-all duration-300 hover:scale-110 hover:rotate-6"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

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
