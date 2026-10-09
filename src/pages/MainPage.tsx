import React from "react";
import {Card} from "../components/Card";
import {NavButton} from "../components/NavButton";
import logo from "../assets/logo_full.svg";
import labaImage from "../assets/leba.jpg";
import hereLogo from "../assets/HERE_logo.svg";

const newProject = `W ramach projektu badawczego w okolicach Łeby analizujemy proces przemieszczania się wydm oraz zmiany, jakie zaszły na przestrzeni lat. Do realizacji badań wykorzystujemy zarówno dane archiwalne, jak i materiały pozyskane podczas nalotów z drona. Dzięki temu możemy szczegółowo zbadać, w jaki sposób kształtuje się tamtejszy krajobraz oraz ocenić wpływ czynników naturalnych na jego zmiany. Projekt posłuży nam do rozwinięcia praktycznych umiejętności członków koła w zakresie fotogrametrii i analizy danych przestrzennych.`
const newAchievement = `Zwycięstwo w Hackathonie Geoprzestrzennym organizowanym przez HERE! Członek naszego zespołu - Błażej Kiełkowski wraz z drużyną opracował rozwiązanie zapewniające pierwsze miejsce w międzynarodowym konkursie programistycznym. Była to świetna okazja na zdobycie realnego doświadczenia oraz nawiązanie cennych kontaktów w branży.`

// TODO: remove after winter recruitment is finished
const buttonStyle = `inline-flex items-center justify-center min-w-50
                    px-4 md:px-8 py-2 md:py-4 text-lg md:text-xl rounded-full
                    bg-accent text-white font-bold rounded-full shadow-lg transition
                    overflow-hidden whitespace-nowrap truncate my-5`;

export const MainPage: React.FC = () => {
    return (
        <main className="min-h-screen py-10 lg:py-14 ">
            <div className="flex justify-center mb-10 flex-col items-center">
                <img src={logo} alt="Logo" className="mb-4 h-60"/>
                <h2
                    className="text-2xl font-bold mb-6 hyphens-auto text-justify w-full max-w-6xl px-10"
                    lang="pl"
                >
                    KNIGP HyperSpec AGH to nowo powstałe koło naukowe, które zrzesza studentów pasjonujących się
                    teledetekcją i fotogrametrią. Naszym celem jest pogłębianie wiedzy i rozwijanie umiejętności w
                    zakresie pozyskiwania oraz przetwarzania danych przestrzennych – satelitarnych, lotniczych i
                    naziemnych.
                    Realizując różnorodne projekty badawcze i praktyczne, poznajemy nowoczesne technologie i uczymy się
                    ich nowatorskich zastosowań.
                </h2>
                <div>
                    {/*hide after 20.10.2026*/}
                    {(new Date().getTime() < new Date("2026-10-20").getTime()) ? (
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYlyhdrVoVufCyALyVn0M_yLbAsy5nWc8x-_9Pj-TUbIvwRw/viewform?usp=dialog"
                           target="_blank" rel="noopener noreferrer" className={buttonStyle}>
                            Dołącz do nas - rekrutacja 2026
                        </a>) : (<NavButton href="kontakt">Dołącz do nas</NavButton>)
                    }
                </div>
            </div>

            {/* Para #1: lewa przyklejona do lewego brzegu, prawa pływa -> prawa jest wyśrodkowana w swojej kolumnie */}
            <section className="w-full mb-12 lg:mb-16 xl:mb-20 hyphens-auto text-justify">
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-start">
                    {/* LEWA (przyklejona) - na lg: start (zaczyna przy lewej krawędzi kolumny) */}
                    <div className="w-full lg:justify-self:start lg:pl-0 px-4">
                        <Card
                            title="Najnowszy Projekt"
                            date="15 LIP"
                            description={newProject}
                            imageUrl={labaImage}
                            alignLeft
                            link="projekty"
                        />
                    </div>

                    {/* PRAWA (pływająca) - na lg: centered w drugiej kolumnie -> daje "pływający" efekt
              (WAŻNE: obie pary używają tej samej struktury grid, więc start X prawej karty w tej kolumnie
               będzie zgodny w obu wierszach) */}
                    <div className="w-full lg:justify-self:center px-4">
                        <Card
                            title="Ostatnie osiągnięcia"
                            date="13 CZE"
                            description={newAchievement}
                            imageUrl={hereLogo}
                            alignLeft={false}
                            link="osiagniecia"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};
