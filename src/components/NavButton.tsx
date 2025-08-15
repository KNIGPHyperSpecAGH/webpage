import React from 'react';
import {NavLink} from "react-router";

type ButtonProps = {
    children: React.ReactNode;
    active?: boolean;
    href?: string; // if present, render an <a>
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavButton: React.FC<ButtonProps> = ({ children, active, href, ...props }) => {
    const baseClasses = `bg-accent text-white font-bold font-text rounded-full
        px-8 py-4 text-xl shadow-lg hover:bg-accent/90 transition self-center hover:cursor-pointer
        ${active ? 'ring-2 ring-accent/60 scale-[0.99]' : ''}`;
    return (
        <NavLink to={href || '#'} className={baseClasses} {...(props as any)}>
            {children}
        </NavLink>
    );
};

export {NavButton};
