import React from "react";
import {Socials} from "./Socials.tsx";
import whiteLogo from "../assets/whiteLogo.png";

const Footer: React.FC = () => (
    <footer className="bg-black text-white py-6  w-full">
        <div className="container mx-auto px-4 flex flex-row items-center space-y-4">
            <span className="w-1/4">
            <img src={whiteLogo} alt="Logo" />

            </span>
            <span className="flex flex-col w-1/4 ">
                <h3 className="text-xl font-bold text-footer">Kontakt</h3>
                <p className="mt-2"> e-mail: hyperspec@agh.edu.pl</p>
            </span>
            <span className="flex flex-col w-1/4 ">
                <h3 className="text-xl font-bold text-footer">Social Media</h3>
                <Socials />
            </span>
            <span className="w-1/4 text-sm font-text text-white">&copy; {new Date().getFullYear()} HyperSpec AGH. All rights reserved.</span>
            
        </div>
    </footer>
);

export { Footer };