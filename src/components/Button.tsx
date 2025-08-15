import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    active?: boolean;
};

const Button: React.FC<ButtonProps> = ({children, active, ...props}) => (
    <button
        {...props}
        className={
            `rounded-full text-lg px-6 py-2 font-semibold cursor-pointer transition-colors duration-200 hover:text-accent  border-4 whitespace-nowrap
            ${active ? "border-white" : "text-white border-transparent"}`
        }
    >
        {children}
    </button>
);

export {Button};
