import { NavButton } from "../components/NavButton";
import { SimpleCard } from "../components/SimpleCard";

type Sponsor = {
    name: string;
    logoUrl?: string;
    url?: string;
};

const sponsors: Sponsor[] = [
    { name: "Sponsor A", logoUrl: "/yobama.jpg", url: "https://poczta.agh.edu.pl/rcm-1.5/" },
    { name: "Sponsor B", logoUrl: "/yobama.jpg" },
    { name: "Sponsor C", logoUrl: "/yobama.jpg" },
    { name: "Sponsor D"},
    { name: "Sponsor D"},
    { name: "Sponsor D"},
];

const cardBase = "relative flex flex-col bg-element rounded-[3vw] shadow-md overflow-hidden";
const cardImageBase = "relative w-full aspect-[3/4] overflow-hidden rounded-[3vw]";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => (
    <div className={cardBase}>
        {sponsor.url ? (
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <div className={cardImageBase}>
                    <img
                        src={sponsor.logoUrl || "/pwa-maskable-512x512.png"}
                        alt={sponsor.name}
                        className="w-full h-full object-cover block select-none"
                        draggable={false}
                        loading="lazy"
                    />
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
        <h2 className="text-3xl font-header font-bold mb-3 text-center text-white">
            Nasi sponsorzy
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {sponsors.map((sponsor, i) => (
                <SponsorCard key={i} sponsor={sponsor} />
            ))}
        </div>
    </section>
);

export const SponsorsPage = () => (
    <div className="min-h-screen bg-background flex flex-col items-center py-10 pt-20 text-white px-4">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-5 mb-3">
            <SimpleCard
                header="Na co zbieramy pieniądze ?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            />
            <SimpleCard
                header="Zostań naszym sponsorem"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
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
        <SponsorSection />
    </div>
);