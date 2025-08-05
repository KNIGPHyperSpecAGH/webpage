import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    active?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, active, ...props }) => (
    <button
        {...props}
        className={
            `rounded-full text-lg px-6 py-2 border-white font-semibold text-white cursor-pointer text-base font-header transition-colors duration-200 hover:text-accent hover:border-accent
            ${active ? "border-4 text-primary border-accent" : ""}`
        }
    >
        {children}
    </button>
);

export { Button };