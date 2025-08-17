import React from "react";
import SocialsFull from "./SocialsFull.tsx";
import whiteLogo from "../assets/whiteLogo.png";

const Footer: React.FC = () => (
    <footer className="bg-black text-white py-6  w-full">
        {/*Footer for desktop*/}
        <div className=" hidden lg:flex container mx-auto px-4 flex-row justify-between space-y-4 items-stretch">
            <div className="w-1/4">
            <img src={whiteLogo} alt="Logo" />
            </div>
        <div className="flex flex-col w-1/4">
            <h3 className="text-xl font-bold text-footer place-self-start">Kontakt</h3>
            <p className="mt-2">e-mail: hyperspec@agh.edu.pl</p>
        </div>

        <div className="flex flex-col w-1/4">
            <h3 className="text-xl font-bold text-footer mb-5">Social Media</h3>
            <SocialsFull />
        </div>
            <div className="w-1/4 text-sm font-text text-white self-end py-2">&copy; {new Date().getFullYear()} HyperSpec AGH. All rights reserved.</div>
        </div>
        {/*Footer for mobile*/}
        <div className="w-full lg:hidden text-sm font-text text-white flex justify-center items-center">&copy; {new Date().getFullYear()} HyperSpec AGH. All rights reserved.</div>
    </footer>
);

export { Footer };