import {useState} from "react";
import {NavButton} from "../components/NavButton";
import {SimpleCard} from "../components/SimpleCard";
import here from "../assets/HERE_logo.svg";
type Achievement = {
    title: string;
    date: string;
    description: string;
    imageUrl?: string;
    details?: string;
    place?: number;
};

const achievements: Achievement[] = [
    {
        title: "Wygrana",
        date: "13.06.2025",
        description: "Nasze pierwsze, pierwsze miejsce!",
        details: "S",
        place: 1,
        imageUrl: here
    },
    {
        title: "Miejsce na podium",
        date: "13.06.2025",
        description: "Drugi zespół z naszego koła zajął miejsce na podium!",
        details: "Podczas Hackathonu geoprzestrzennego organizowanego przez firmę HERE Technologies, nasz drugi zespół opracował rozwiązanie problemu oparte o zaawansowane metody przestrzennego uczenia maszynowego, dzięki czemu udało się nam zająć 3 miejsce.",
        place: 3,
        imageUrl: here
    },
];

const placeBadgeMap: Record<number, { label: string; color: string }> = {
    1: {label: "🥇 1 miejsce", color: "bg-yellow-400 text-black"},
    2: {label: "🥈 2 miejsce", color: "bg-gray-300 text-black"},
    3: {label: "🥉 3 miejsce", color: "bg-amber-700 text-white"},
};

const placeRingMap: Record<number, string> = {
    1: "ring-6 ring-yellow-400",
    2: "ring-6 ring-gray-300",
    3: "ring-6 ring-amber-700",
};

const getPlaceBadge = (place?: number) =>
    place ? placeBadgeMap[place] || {label: `${place} miejsce`, color: "bg-gray-700 text-white"} : null;

const AchievementCard = ({ach, onOpen}: { ach: Achievement; onOpen: () => void }) => {
    const badge = getPlaceBadge(ach.place);
    const borderClass = ach.place ? placeRingMap[ach.place] || "" : "";

    return (
        <div className="relative flex flex-col bg-element rounded-[3vw] shadow-md overflow-hidden">
            {badge && <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 z-1 px-5 py-3 text-sm font-text shadow-md rounded-b-3xl ${badge.color}`}>{badge.label}</div>}
            <div className={`relative w-full aspect-[3/4] overflow-hidden rounded-[3vw] ${borderClass}`}>
                <img src={ach.imageUrl || "/pwa-maskable-512x512.png"} alt={ach.title}
                     className="w-full h-full object-cover"/>
            </div>
            <div className="p-4 flex flex-col flex-1">
                <p className="text-4xl font-text font-bold mb-1">{ach.title}</p>
                <p className="text-accent text-base md:text-lg mb-2">{ach.date}</p>
                <p className="text-xl leading-relaxed font-text flex-grow">{ach.description}</p>
                {ach.details && (
                    <div className="mt-1 flex w-full md:w-auto justify-center">
                        <NavButton onClick={onOpen}>Czytaj więcej</NavButton>
                    </div>
                )}
            </div>
        </div>
    );
};

const AchievementModal = ({ach, onClose}: { ach: Achievement; onClose: () => void }) => (
    <div className="fixed inset-0 bg-background/85 flex items-center justify-center z-50 overflow-auto"
         onClick={onClose}>
        <div
            className="bg-element text-white p-10 rounded-[3vw] max-w-3xl w-full shadow-lg relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-8 right-8 text-white text-3xl font-text hover:text-accent"
                    onClick={onClose}>X
            </button>
            {getPlaceBadge(ach.place) && <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 z-1 px-5 py-3 text-sm font-text shadow-md rounded-b-3xl ${getPlaceBadge(ach.place)!.color}`}>{getPlaceBadge(ach.place)!.label}</div>}
            <h3 className="text-4xl font-text font-bold mb-1">{ach.title}</h3>
            <p className="text-accent text-base md:text-lg mb-2">{ach.date}</p>
            <img src={ach.imageUrl || "/pwa-maskable-512x512.png"} alt={ach.title}
                 className="w-full max-h-48 object-cover rounded-3xl mb-4"/>
            <p className="text-xl leading-relaxed font-text flex-grow">{ach.details}</p>
        </div>
    </div>
);

const AchievementSection = () => {
    const [open, setOpen] = useState<Achievement | null>(null);
    const [page, setPage] = useState(0);
    const perPage = 4;
    const totalPages = Math.ceil(achievements.length / perPage);
    const current = achievements.slice(page * perPage, (page + 1) * perPage);

    return (
        <div className="w-full max-w-7xl flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
                {current.map((ach, i) => (
                    <AchievementCard key={i} ach={ach} onOpen={() => {
                        setOpen(ach);
                        document.body.classList.add("overflow-hidden");
                    }}/>
                ))}
            </div>
            {totalPages > 1 && (
                <div className="flex items-center justify-center mt-4 gap-2">
                    <NavButton onClick={() => {
                        setPage(p => Math.max(p - 1, 0));
                        window.scrollTo({top: 0, behavior: 'smooth'});
                    }} className="px-6 py-3 text-lg md:text-xl min-w-[60px]">{'<'}</NavButton>
                    <span
                        className="text-white font-text px-2 py-2 flex-shrink-0">Strona {page + 1} / {totalPages}</span>
                    <NavButton onClick={() => {
                        setPage(p => Math.min(p + 1, totalPages - 1));
                        window.scrollTo({top: 0, behavior: 'smooth'});
                    }} className="px-6 py-3 text-lg md:text-xl min-w-[60px]">{'>'}</NavButton>
                </div>
            )}
            {open && <AchievementModal ach={open} onClose={() => {
                setOpen(null);
                document.body.classList.remove("overflow-hidden");
            }}/>}
        </div>
    );
};

export const AchievementsPage = () => (
    <div className="min-h-screen bg-background flex flex-col items-center py-10 px-4 text-white text-center pt-20">
        <AchievementSection/>
        <div className="w-full max-w-7xl px-0 mt-6 sm:mt-3 flex justify-center">
            <SimpleCard header="Co dalej?"
                        text="Dołącz do nas! Szukamy nowych osób do sekcji informatyki oraz teledetekcji ">
                <NavButton href="/kontakt">Dołącz teraz</NavButton>
            </SimpleCard>
        </div>
    </div>
);
