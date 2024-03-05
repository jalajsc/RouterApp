import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="bg-white shadow border-gray-500 px-10 lg:px-20 py-2">
        <div class="flex flex-wrap justify-between items-center mx-auto">
          <Link to={`/`} className="flex items-center justify-center order-0">
            <img src={Logo} alt="Logo" className="w-26 h-12" />
          </Link>
          <div className="order-1 items-center">
            <ul className="font-medium flex flex-col md:flex-row lg:gap-x-8 ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block p-2 border-l border-gray-400 ${
                      isActive ? "text-orange-700" : "text-gray-500"
                    } hover:bg-transparent border-0 hover:text-orange-600`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block p-2 border-l border-gray-400 ${
                      isActive ? "text-orange-700" : "text-gray-500"
                    } hover:bg-transparent border-0 hover:text-orange-600`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block p-2 border-l border-gray-400 ${
                      isActive ? "text-orange-700" : "text-gray-500"
                    } hover:bg-transparent border-0 hover:text-orange-600`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block p-2 border-l border-gray-400 ${
                      isActive ? "text-orange-700" : "text-gray-500"
                    } hover:bg-transparent border-0 hover:text-orange-600`
                  }
                >
                  GitHub
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `block p-2 border-l border-gray-400 ${
                      isActive ? "text-orange-700" : "text-gray-500"
                    } hover:bg-transparent border-0 hover:text-orange-600`
                  }
                >
                  User
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="order-2 flex items-center">
            <Link
              to="#"
              className="transition-all duration-300 hover:bg-orange-500 text-gray-900 font-medium ring-2 ring-offset-1 hover:ring-offset-2 ring-orange-600 rounded-lg text-sm px-4 py-2 mr-4 focus:outline-none focus:bg-red-600 focus:text-white"
            >
              Login
            </Link>
            <Link
              to="#"
              className="transition-all duration-300 hover:bg-orange-500 text-gray-900 font-medium ring-2 ring-offset-1 hover:ring-offset-2 ring-orange-600 rounded-lg text-sm px-4 py-2 mr-4 focus:outline-none focus:bg-red-600 focus:text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
