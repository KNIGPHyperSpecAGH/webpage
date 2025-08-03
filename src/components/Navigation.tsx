import {useState} from "react";
import {NavLink} from "react-router";


const navigationLinks = [
    // {path: "/", label: "strona glowna"},
    {path: "aktualnosci", label: "Aktualności"},
    {path: "projekty", label: "Projekty"},
    {path: "o-nas", label: "O nas"},
    {path: "osiagniecia", label: "Osiągnięcia"},
    {path: "kontakt", label: "Kontakt"},
    {path: "sponsorzy", label: "Sponsorzy"},
];

export const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-10 bg-primary text-white">
                <div className="flex justify-between items-center p-4">
                    <img src="" alt="Logo"
                         // TODO: This logo behaviour is only for main page, on other pages logo should always be visible
                         className={
                             `transition-all duration-300 ease-out w-16
                            ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`
                         }
                    />
                    <div
                        className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer group"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className={
                            `block w-8 h-1 bg-white rounded transition-all duration-300 ease-in-out
                            ${menuOpen ? "rotate-45 translate-y-3" : ""}`
                        }></span>

                        <span className={`
                            block w-8 h-1 bg-white rounded my-2 transition-all duration-300 ease-in-out 
                            ${menuOpen ? "opacity-0" : ""}`
                        }></span>

                        <span className={
                            `block w-8 h-1 bg-white rounded transition-all duration-300 ease-in-out 
                            ${menuOpen ? "-rotate-45 -translate-y-3" : ""}`
                        }></span>
                    </div>
                </div>
                <div className={
                    `text-center font-text text-3xl font-bold flex flex-col overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${menuOpen ? "max-h-screen pb-4" : "max-h-0 p-0"}`
                }>
                    {navigationLinks.map((link, index) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={
                                `transition-all duration-300 ease-out hover:text-accent m-4
                                ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`
                            }
                            style={{transitionDelay: `${index * 50}ms`}}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </>
    );
};
