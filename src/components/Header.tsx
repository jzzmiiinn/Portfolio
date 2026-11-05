import { NavLink, Link } from "react-router-dom";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-950">Yasmin's Portfolio</h1>
      <nav className="flex">
        {navigationItems.map((navigationItem) => {
          return (
            <NavLink
              key={navigationItem.name}
              to={navigationItem.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-950 underline"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              {navigationItem.name}
            </NavLink>
          );
        })}
      </nav>
      <Link to="/contact">
        <button className="p-3 border border-blue-950 text-blue-950 rounded-lg hover:bg-blue-950 hover:text-white transition-colors duration-200">
          Contact Me
        </button>
      </Link>
    </header>
  );
};
