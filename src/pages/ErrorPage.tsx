import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const messages = [
    "Ups! Ta strona jest poza zasięgiem naszego satelity.",
    "Ups! Nasz satelita nie mógł znaleźć tej strony.",
    "Ups! Wygląda na to, że ta strona została pochłonięta przez czarną dziurę.",
    "Ups! Wygląda na to, że nasz satelita ma oko na coś innego."
];

export const ErrorPage = () => {
    const navigate = useNavigate();
    const [randomMessage, setRandomMessage] = useState(messages[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setRandomMessage(messages[randomIndex]);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-secondary text-white">
            <Navigation />
            <main className="flex-grow flex flex-col justify-center items-center p-8 text-center max-w-3xl mx-auto">
                {/* Picture */}
                <div className="w-full max-w-sm h-64 mb-5">
                    <img src="/satchat.png" className="object-contain w-full h-full" />
                </div>
                <h1 className="text-5xl font-header font-bold mb-2">404 Page Not Found</h1>
                <p className="text-xl font-text mb-1">{randomMessage}</p>
                <p className="text-xl font-text mb-5">Spróbuj wrócić na naszą stronę główną.</p>
                <button
                    onClick={() => navigate("/")}
                    className="bg-accent  text-white font-bold font-text py-3 px-8 rounded-full text-xl shadow-lg transition"
                >
                    Wróć na stronę główną
                </button>
            </main>
            <Footer />
        </div>
    );
};
