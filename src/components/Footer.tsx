import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-black text-gray-300 py-6 mt-8 w-full fixed bottom-0 left-0">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
            <span className="text-sm font-text text-white">&copy; {new Date().getFullYear()} HyperSpec AGH. All rights reserved.</span>
        </div>
    </footer>
);

export { Footer };