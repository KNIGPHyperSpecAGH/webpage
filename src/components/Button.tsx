import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <button
        {...props}
        className="rounded-full border-4 text-lg px-6 py-2 border-white font-semibold text-white cursor-pointer text-base font-header transition-colors duration-200 hover:text-accent hover:border-accent"
    >
        {children}
    </button>
);

export { Button };