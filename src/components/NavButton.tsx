import React from 'react';
import {NavLink} from "react-router";

type ButtonProps = {
    children: React.ReactNode;
    active?: boolean;
    href?: string; // if present, render an <a>
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavButton: React.FC<ButtonProps> = ({ children, active, href, ...props }) => {
    const baseClasses = `inline-flex items-center justify-center min-w-50
        px-4 md:px-8 py-2 md:py-4 text-lg md:text-xl rounded-full
        bg-accent text-white font-bold rounded-full shadow-lg transition
        overflow-hidden whitespace-nowrap truncate mt-5
        ${active ? 'ring-2 ring-accent/60 scale-[0.99]' : ''}`;
    return (
        <NavLink to={href || '#'} className={baseClasses} {...(props as any)}>
            {children}
        </NavLink>
    );
};

export {NavButton};
