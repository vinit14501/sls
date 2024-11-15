import { useState, useCallback, memo } from "react"
import { NavLink } from "react-router-dom"
import { HiMenu } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"

const theme = {
  colors: {
    primary: "#2a6f7f",
    secondary: "#033e4e",
    text: {
      primary: "#f4f1ec",
      secondary: "#b2cbd0",
    },
    button: {
      background: "#b2cbd0",
      hoverBackground: "#033e4e",
      text: "#033e4e",
      hoverText: "#f4f1ec",
    },
  },
  textSizes: {
    nav: "text-xl",
    button: "text-xl",
    mobile: "text-xl",
  },
}

const navItems = [
  { to: "/", label: "About" },
  { to: "/pricing", label: "Product & Pricing" },
  { to: "/testimonial", label: "Testimonials" },
]

const logo = {
  src: "2.png",
  alt: "Company Logo",
  height: "42",
  width: "42",
}

const buttonConfig = {
  href: "#",
  text: "Book A Call",
}

const CustomNavLink = memo(({ to, children, className, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    style={({ isActive }) => ({
      color: isActive ? theme.colors.text.primary : theme.colors.text.secondary,
    })}
    className={`font-bold ${theme.textSizes.nav} transition-colors duration-300 hover:underline hover:text-[${theme.colors.text.primary}] ${className}`}
  >
    {children}
  </NavLink>
))

CustomNavLink.displayName = "CustomNavLink"

const CTAButton = memo(({ className, onClick }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: theme.colors.button.background,
    }}
    className={`font-bold ${theme.textSizes.button} rounded-lg transition-colors duration-300 ${className}`}
  >
    <a
      href={buttonConfig.href}
      style={{
        color: theme.colors.button.text,
      }}
      className="block px-6 py-2 transition-colors duration-300"
      onMouseOver={(e) => {
        e.currentTarget.style.color = theme.colors.button.hoverText
        e.currentTarget.parentElement.style.backgroundColor =
          theme.colors.button.hoverBackground
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = theme.colors.button.text
        e.currentTarget.parentElement.style.backgroundColor =
          theme.colors.button.background
      }}
    >
      {buttonConfig.text}
    </a>
  </button>
))

CTAButton.displayName = "CTAButton"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto"
  }, [isMenuOpen])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = "auto"
  }, [])

  const handleLogoClick = () => {
    window.location.href = "/"
  }

  return (
    <header
      style={{ backgroundColor: theme.colors.primary }}
      className="font-['Poppins'] sticky top-0 z-50"
      role="banner"
    >
      <div className="h-20 px-4 sm:px-10 flex items-center justify-between relative">
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            style={{ color: theme.colors.text.primary }}
            className="lg:hidden p-2"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <HiMenu className="w-6 h-6" />
          </button>

          <nav
            className="hidden lg:flex items-center gap-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => (
              <CustomNavLink
                key={index}
                to={item.to}
              >
                {item.label}
              </CustomNavLink>
            ))}
          </nav>
        </div>

        {/* Center logo section with reduced gap */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-1"
            aria-label="Home"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto brightness-200 filter object-contain"
              loading="eager"
              width={logo.width}
              height={logo.height}
            />
            <div
              className="hidden md:block font-['Caveat'] text-2xl font-bold"
              style={{
                color: theme.colors.text.primary,
                transform: "rotate(-2deg)",
              }}
            >
              Synergy Learning Solutions
            </div>
          </button>
        </div>

        <div className="flex items-center">
          <CTAButton className="max-lg:hidden" />
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <aside
          id="mobile-menu"
          style={{ backgroundColor: theme.colors.secondary }}
          className={`lg:hidden fixed top-0 left-0 h-full w-72 z-50 
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} shadow-xl`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div
            style={{ borderColor: `${theme.colors.text.primary}1a` }}
            className="p-4 flex justify-between items-center border-b"
          >
            <button
              onClick={closeMenu}
              style={{ color: theme.colors.text.primary }}
              className="p-2 rounded-lg transition-colors duration-300"
              aria-label="Close menu"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>

          <nav
            className="p-6 space-y-6"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => (
              <CustomNavLink
                key={index}
                to={item.to}
                className={`block ${theme.textSizes.mobile}`}
                onClick={closeMenu}
              >
                {item.label}
              </CustomNavLink>
            ))}
            <CTAButton
              className="w-full mt-4"
              onClick={closeMenu}
            />
          </nav>
        </aside>
      </div>
    </header>
  )
}

export default memo(Navbar)
