import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "./Button"; // Import your Button
import { Socials } from "./Socials.tsx";
import logo from "../assets/logo.png";

const navigationLinks = [
  { path: "aktualnosci", label: "Aktualności" },
  { path: "projekty", label: "Projekty" },
  { path: "o-nas", label: "O nas" },
  { path: "osiagniecia", label: "Osiągnięcia" },
  { path: "kontakt", label: "Kontakt" },
  { path: "sponsorzy", label: "Sponsorzy" },
];

interface NavigationProps {
  showLogo?: boolean;
}

export const Navigation = ({ showLogo = true }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-10 bg-primary text-white">
        <div className="flex justify-between items-center p-4">
          <NavLink
            to="/"
            className={`z-12 transition-all duration-300 ease-out w-16
                            ${
                              showLogo || menuOpen ? "opacity-100" : "opacity-0"
                            }`}
            onClick={() => setMenuOpen(false)}
          >
            <img src={logo} alt="Logo" className="rounded-full bg-white p-0.5 h-14 w-14 -m-2 aspect-square"/>
          </NavLink>
          {/* Hamburger menu for mobile */}
          <div
            className="z-12 flex flex-col justify-center items-center w-10 h-10 cursor-pointer group lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-8 h-1 bg-white rounded transition-all duration-300 ease-in-out
                            ${menuOpen ? "rotate-45 translate-y-3" : ""}`}
            ></span>
            <span
              className={`
                            block w-8 h-1 bg-white rounded my-2 transition-all duration-300 ease-in-out 
                            ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white rounded transition-all duration-300 ease-in-out 
                            ${menuOpen ? "-rotate-45 -translate-y-3" : ""}`}
            ></span>
          </div>
          {/* Second navigation for larger screens */}
          <div className= "hidden lg:flex justify-around w-full max-w-5xl m-auto">
              {navigationLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className="contents">
                  {({ isActive }) => (
                    <Button active={isActive}>{link.label}</Button>
                  )}
                </NavLink>
              ))}
            </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`fixed top-0 left-0 z-11 w-full h-screen bg-primary flex flex-col pt-24
                         text-center font-text text-3xl font-bold
                         transition-all duration-300 ease-out origin-top lg:hidden

                        ${
                          menuOpen
                            ? "opacity-100 scale-y-100"
                            : "opacity-0 pointer-events-none scale-y-0"
                        }`}
        >
          {navigationLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={`p-4 transition-all ease-out hover:text-accent
                                ${
                                  menuOpen
                                    ? "translate-x-0 opacity-100 duration-300"
                                    : "-translate-x-10 opacity-0 duration-50"
                                }`}
              style={{
                transitionDelay: `${menuOpen ? index * 50 + 100 : 0}ms`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <hr className="m-5 mt-5" />

          {/* Socials component */}
          <Socials />
        </div>
      </nav>
    </>
  );
};
