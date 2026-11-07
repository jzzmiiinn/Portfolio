import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-blue-950 underline underline-offset-4"
        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
    }`;

  return (
    <header className="relative z-50 bg-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-blue-950"
          onClick={closeMenu}
        >
          Yasmin's Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navigationItems.map((item) => (
            <NavLink key={item.name} to={item.path} className={linkStyles}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block p-3 border border-blue-950 text-blue-950 rounded-lg hover:bg-blue-950 hover:text-white transition-colors duration-200"
        >
          Contact Me
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-blue-950"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 p-4"
        >
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={linkStyles}
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 p-3 text-center bg-blue-950 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
