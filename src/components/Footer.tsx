import React from "react";

const Footer: React.FC = () => (
    <footer className="sticky bottom-0 bg-black text-white py-6 mt-8 w-full">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
            <span className="text-sm font-text text-white">&copy; {new Date().getFullYear()} HyperSpec AGH. All rights reserved.</span>
        </div>
    </footer>
);

export { Footer };