import { useState } from "react";
import { NavButton } from "../components/NavButton";
import { SimpleCard } from "../components/SimpleCard";

const buttonBase = "bg-accent text-white px-4 py-2 rounded-3xl font-text hover:bg-accent/80 transition";

const cardBase = "relative flex flex-col bg-element rounded-[3rem] shadow-md overflow-hidden";

const cardImageBase = "relative w-full aspect-[3/4] overflow-hidden rounded-[3rem]";

const modalOverlay = "fixed inset-0 bg-background/85 flex items-center justify-center z-50 overflow-auto";

const modalWindow = "bg-element text-white p-8 rounded-[3rem] max-w-3xl w-full shadow-lg relative max-h-[90vh] overflow-y-auto";

const badgeBase = "absolute top-2 left-6 z-1 px-2 py-1 rounded-3xl text-sm font-text shadow-md";


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
        title: "Wygraliśmy!",
        date: "01.01.2024",
        description: "Nasze pierwsze, pierwsze miejsce!",
        details: "Udało nam się wygrać prestiżowe zawody GPS, bla bla blabla bla blabla...",
        place: 1,
        imageUrl: "/yobama.jpg"
    },{
        title: "Wygraliśmy!",
        date: "01.01.2024",
        description: "Nasze pierwsze, pierwsze miejsce!",
        details: "Udało nam się wygrać prestiżowe zawody GPS, bla bla blabla bla blabla...",
        place: 3,
        imageUrl: "/yobama.jpg"
    },{
        title: "Wygraliśmy!",
        date: "01.01.2024",
        description: "Nasze pierwsze, pierwsze miejsce!",
        details: "Udało nam się wygrać prestiżowe zawody GPS, bla bla blabla bla blabla..."
    },{
        title: "Wygraliśmy!",
        date: "01.01.2024",
        description: "Nasze pierwsze, pierwsze miejsce!",
        details: "Udało nam się wygrać prestiżowe zawody GPS, bla bla blabla bla blabla...",
        place: 2,
        imageUrl: "/yobama.jpg"
    },{
        title: "Wygraliśmy!",
        date: "01.01.2024",
        description: "Nasze pierwsze, pierwsze miejsce!",
        details: "Udało nam się wygrać prestiżowe zawody GPS, bla bla blabla bla blabla...",
        place:7
    },

];

const placeBadgeMap: Record<number, { label: string; color: string }> = {
    1: { label: "🥇 1 miejsce", color: "bg-yellow-400 text-black" },
    2: { label: "🥈 2 miejsce", color: "bg-gray-300 text-black" },
    3: { label: "🥉 3 miejsce", color: "bg-amber-700 text-white" },
};

const getPlaceBadge = (place: number) => placeBadgeMap[place] || {
    label: `${place} miejsce`,
    color: "bg-gray-600 text-white"
};



const Badge = ({ label, color }: { label: string; color: string }) => (
    <div className={`${badgeBase} ${color}`}>
        {label}
    </div>
);

export const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
    <div className={modalOverlay} onClick={onClose}>
        <div className={modalWindow} onClick={e => e.stopPropagation()}>
            <button
                className="absolute top-4 right-4 text-white text-3xl font-text hover:text-accent"
                onClick={onClose}
            >
                X
            </button>
            {children}
        </div>
    </div>
);

export const Button = ({ children, onClick, className }: { children: React.ReactNode; onClick: () => void; className?: string }) => (
    <button onClick={onClick} className={`${buttonBase} ${className}`}>
        {children}
    </button>
);

export const InfoCard = ({ title, subtitle, description, imageUrl, buttonText, onOpen }: {
    title: string;
    subtitle?: string;
    description: string;
    imageUrl?: string;
    buttonText?: string;
    onOpen?: () => void;
}) => (
    <div className={cardBase}>
        <div className={cardImageBase}>
            <img
                src={imageUrl || "/pwa-maskable-512x512.png"}
                alt={title}
                className="w-full h-full object-cover block select-none"
                draggable={false}
                loading="lazy"
            />
        </div>
        <div className="p-4 flex flex-col flex-1">
            <p className="text-white font-text">{title}</p>
            {subtitle && <p className="text-accent text-sm mb-1">{subtitle}</p>}
            <p className="text-white flex-1 mb-3">{description}</p>
            {buttonText && onOpen && <Button onClick={onOpen}>{buttonText}</Button>}
        </div>
    </div>
);

const Pagination = ({ currentPage, totalPages, onPrev, onNext }: { currentPage: number; totalPages: number; onPrev: () => void; onNext: () => void }) => {
    const scrollTop = (fn: () => void) => () => {
        fn();
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 10);
    };

    return (
        <div className="flex items-center justify-center mt-1 gap-2">
            <Button onClick={scrollTop(onPrev)}>{"<"}</Button>
            <span className="text-white font-text px-2 py-2 flex-shrink-0">
                Strona {currentPage + 1} / {totalPages}
            </span>
            <Button onClick={scrollTop(onNext)}>{">"}</Button>
        </div>
    );
};

const AchievementCard = ({ ach, onOpen }: { ach: Achievement; onOpen: () => void }) => {
    const placeRingMap: Record<number, string> = {
        1: "ring-6 ring-yellow-400",
        2: "ring-6 ring-gray-300",
        3: "ring-6 ring-amber-700",
    };
    const borderClass = ach.place ? placeRingMap[ach.place] || "ring-6 ring-gray-600" : "";

    return (
        <div className={cardBase}>
            {ach.place && <Badge {...getPlaceBadge(ach.place)} />}
            <div className={`${cardImageBase} ${borderClass}`}>
                <img
                    src={ach.imageUrl || "/pwa-maskable-512x512.png"}
                    alt={ach.title}
                    className="w-full h-full object-cover block select-none"
                    draggable={false}
                    loading="lazy"
                />
            </div>
            <div className="p-4 flex flex-col flex-1">
                <p className="text-white font-text">{ach.title}</p>
                <p className="text-accent text-sm mb-1">{ach.date}</p>
                <p className="text-white flex-1 mb-3">{ach.description}</p>
                {ach.details && <Button onClick={onOpen}>Czytaj więcej</Button>}
            </div>
        </div>
    );
};

const AchievementModal = ({ ach, onClose }: { ach: Achievement; onClose: () => void }) => (
    <Modal onClose={onClose}>
        {ach.place && <Badge {...getPlaceBadge(ach.place)} />}
        <h3 className="text-3xl font-texxt mb-4">{ach.title}</h3>
        <p className="text-accent text-sm mb-4">{ach.date}</p>
        <img
            src={ach.imageUrl || "/pwa-maskable-512x512.png"}
            alt={ach.title}
            className="w-full max-h-48 object-cover rounded-3xl mb-4"
        />
        <p>{ach.details}</p>
    </Modal>
);

const AchievementSection = () => {
    const [open, setOpen] = useState<Achievement | null>(null);
    const [page, setPage] = useState(0);
    const perPage = 4;
    const totalPages = Math.ceil(achievements.length / perPage);
    const current = achievements.slice(page * perPage, (page + 1) * perPage);
    const changePage = (dir: number) => setPage(p => Math.min(Math.max(p + dir, 0), totalPages - 1));

    return (
        <div className="w-full max-w-7xl flex flex-col items-center">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full px-4 mb-2">
                {current.map((ach, i) => <AchievementCard key={i} ach={ach} onOpen={() => setOpen(ach)} />)}
            </div>
            {totalPages > 1 && (
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPrev={() => changePage(-1)}
                    onNext={() => changePage(1)}
                />
            )}
            {open && <AchievementModal ach={open} onClose={() => setOpen(null)} />}
        </div>
    );
};

export const AchievementsPage = () => (
    <div className="min-h-screen bg-background flex flex-col items-center py-10 px-4 text-white text-center pt-20">
        <AchievementSection />
        <div className="w-flex max-w-7xl px-3 mt-6 sm:mt-3">
            <SimpleCard
                header="Co dalej?"
                text="Dołącz do nas! Szukamy nowych osób do sekcji informatyki oraz teledetekcji "
            >
                <NavButton href="/kontakt">Dołącz teraz</NavButton>
            </SimpleCard>
        </div>
    </div>
);
