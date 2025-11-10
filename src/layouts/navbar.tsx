import { useState } from "react";
import { Link } from "react-router";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { Navigation } from "../components/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Mobile toggle */}
        <Link to="/" aria-label="Home">
          <img
            src="https://suneraoverseashrc.com/storage/new-logo-sunera-1.jpg"
            alt="Logo"
            loading="lazy"
            className=" mx-auto w-full max-w-[80px]"
          />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-2xl text-[#1d1e50] lg:hidden"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <ul
          className={`${
            mobileOpen
              ? "absolute left-0 top-14 w-full bg-white shadow-lg lg:static lg:flex"
              : "hidden lg:flex"
          } flex-col lg:flex-row lg:items-center lg:gap-6`}
        >
          {Navigation.map((item) => (
            <li
              key={item.name}
              className="relative group border-b border-gray-200 lg:border-none"
            >
              {!item.children ? (
                <Link
                  to={item.path || "#"}
                  className="block px-4 py-3 text-gray-800 hover:text-[#1d1e50]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex w-full items-center justify-between px-4 py-3 text-gray-800 hover:text-[#1d1e50] lg:w-auto lg:gap-1"
                  >
                    {item.name}
                    <FaChevronDown
                      className={`ml-1 transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <ul
                    className={`${
                      openDropdown === item.name
                        ? "block"
                        : "hidden lg:group-hover:block"
                    } lg:absolute lg:left-0 lg:top-full lg:min-w-[220px] lg:rounded-md lg:bg-white lg:shadow-md`}
                  >
                    {item.children.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#1d1e50]"
                          onClick={() => {
                            setOpenDropdown(null);
                            setMobileOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
