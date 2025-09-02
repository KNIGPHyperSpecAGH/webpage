import {NavButton} from "../components/NavButton";
import {SimpleCard} from "../components/SimpleCard";
import ArcerolMittal from "../assets/ArcelorMittal.svg";

const naCo = `Zebrane środki przeznaczamy przede wszystkim na zakup specjalistycznego sprzętu pomiarowego, oprogramowania oraz realizację naszych badań i projektów. Dzięki temu możemy rozwijać kompetencje praktyczne, prowadzić ambitne inicjatywy naukowe i brać udział w wydarzeniach branżowych.`
const zostan = `Zapraszamy do współpracy wszystkich, którzy chcieliby wesprzeć młodych pasjonatów teledetekcji i fotogrametrii. Zostań naszym sponsorem i pomóż nam tworzyć innowacyjne rozwiązania oraz znajdować nowe, kreatywne zastosowania dla sprawdzonych technologii.`

type Sponsor = {
    name: string;
    logoUrl?: string;
    url?: string;
};

const sponsors: Sponsor[] = [
    {name: "ArcelorMittal", logoUrl: ArcerolMittal, url: "https://poland.arcelormittal.com/"},
];

const cardBase = "relative flex flex-col bg-element rounded-[3vw] shadow-md overflow-hidden";
const cardImageBase = "relative w-full aspect-[3/4] overflow-hidden rounded-[3vw]";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const SponsorCard = ({sponsor}: { sponsor: Sponsor }) => (
    <div className={cardBase}>
        {sponsor.url ? (
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <div className={cardImageBase}>
                    <div className="h-full bg-[#FEFEFE] flex items-center justify-center">
                        <img src={ArcerolMittal} alt="ArcelorMittal" className="max-h-full object-contain" />
                    </div>
                </div>
            </a>
        ) : (
            <div className={cardImageBase}>
                <img
                    src={sponsor.logoUrl || "/pwa-maskable-512x512.png"}
                    alt={sponsor.name}
                    className="w-full h-full object-cover block select-none"
                    draggable={false}
                    loading="lazy"
                />
            </div>
        )}
        <div className="p-4 flex flex-col flex-1 items-center">
            <p className="text-white font-text text-center">{sponsor.name}</p>
        </div>
    </div>
);

const SponsorSection = () => (
    <section className="w-full max-w-7xl">
        <h2 className="text-3xl font-header font-bold my-10 text-center text-white">
            Nasi sponsorzy
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {sponsors.map((sponsor, i) => (
                <SponsorCard key={i} sponsor={sponsor}/>
            ))}
        </div>
    </section>
);

export const SponsorsPage = () => (
    <div className="min-h-screen bg-background flex flex-col items-center py-10 pt-20 text-white px-4">
        <div
            className="w-full max-w-7xl flex flex-col items-center text-center gap-5 mb-3 md:flex-row md:items-stretch md:text-left">
            <SimpleCard
                header="Na co zbieramy pieniądze ?"
                text={naCo}
            />
            <SimpleCard
                header="Zostań naszym sponsorem"
                text={zostan}
            >
                <NavButton href="/kontakt">Zostań sponsorem!</NavButton>
            </SimpleCard>
        </div>
        <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-2 bg-accent text-white p-4 z-5 rounded-full shadow-lg transition"
        >
            ↑
        </button>
        <SponsorSection/>
    </div>
);