import {useState} from "react";
import {NavButton} from "../components/NavButton";
import {SimpleCard} from "../components/SimpleCard";

const classes = {
    button: "inline-flex items-center justify-center min-w-[50px] px-4 md:px-8 py-2 md:py-4 text-lg md:text-xl font-bold text-white bg-accent shadow-lg rounded-full transition overflow-hidden whitespace-nowrap truncate",
    card: "relative flex flex-col bg-element rounded-[3vw] shadow-md overflow-hidden",
    cardImage: "relative w-full aspect-[3/4] overflow-hidden rounded-[3vw]",
    modalOverlay: "fixed inset-0 bg-background/85 flex items-center justify-center z-50 overflow-auto",
    modalWindow: "bg-element text-white p-10 rounded-[3vw] max-w-3xl w-full shadow-lg relative max-h-[90vh] overflow-y-auto",
    badge: "absolute top-0 left-1/2 transform -translate-x-1/2 z-1 px-5 py-3 text-sm font-text shadow-md rounded-b-3xl",
};

type Achievement = {
    title: string;
    date: string;
    description: string;
    imageUrl?: string;
    details?: string;
    place?: number;
};

// Dane
const achievements: Achievement[] = [
    {
        title: "Wygraliśmy!",
        date: "01.01.2024",
        description: "Nasze pierwsze, pierwsze miejsce!",
        details: "S",
        place: 1,
        imageUrl: "/yobama.jpg"
    },
    {
        title: "Wygraliśmy!",
        date: "01.01.2024",
        description: "Nasze pierwsze, pierwsze miejsce!",
        details: "S",
        place: 3,
        imageUrl: "/yobama.jpg"
    },
    {title: "Wygraliśmy!", date: "01.01.2024", description: "Nasze pierwsze, pierwsze miejsce!", details: "S"},
    {
        title: "Wygraliśmy!",
        date: "01.01.2024",
        description: "Nasze pierwsze, pierwsze miejsce!",
        details: "S",
        place: 2,
        imageUrl: "/yobama.jpg"
    },
    {
        title: "Wygraliśmy!",
        date: "01.01.2024",
        description: "Nasze pierwsze, pierwsze miejsce!",
        details: "S",
        place: 7
    },
];


const placeBadgeMap: Record<number, { label: string; color: string }> = {
    1: {label: "🥇 1 miejsce", color: "bg-yellow-400 text-black"},
    2: {label: "🥈 2 miejsce", color: "bg-gray-300 text-black"},
    3: {label: "🥉 3 miejsce", color: "bg-amber-700 text-white"},
};
const getPlaceBadge = (place?: number) => place ? (placeBadgeMap[place] || {
    label: `${place} miejsce`,
    color: "bg-gray-700 text-white"
}) : null;
const Badge = ({label, color}: { label: string; color: string }) => (
    <div className={`${classes.badge} ${color}`}>{label}</div>
);

const placeRingMap: Record<number, string> = {
    1: "ring-6 ring-yellow-400",
    2: "ring-6 ring-gray-300",
    3: "ring-6 ring-amber-700",
};

const Button = ({children, onClick, href, className}: {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string
}) =>
    href ? <a href={href} className={`${classes.button} ${className}`}>{children}</a> :
        <button onClick={onClick} className={`${classes.button} ${className}`}>{children}</button>;


const Modal = ({children, onClose}: { children: React.ReactNode; onClose: () => void }) => (
    <div className={classes.modalOverlay} onClick={onClose}>
        <div className={classes.modalWindow} onClick={e => e.stopPropagation()}>
            <button className="absolute top-8 right-8 text-white text-3xl font-text hover:text-accent"
                    onClick={onClose}>X
            </button>
            {children}
        </div>
    </div>
);

const AchievementCard = ({ach, onOpen}: { ach: Achievement; onOpen: () => void }) => {
    const badge = getPlaceBadge(ach.place);
    const borderClass = ach.place ? (placeRingMap[ach.place] || "ring-6 ring-gray-700") : "";

    return (
        <div className={classes.card}>
            {badge && <Badge {...badge} />}
            <div className={`${classes.cardImage} ${borderClass}`}>
                <img
                    src={ach.imageUrl || "/pwa-maskable-512x512.png"}
                    alt={ach.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col flex-1">
                <p className="text-white font-text font-bold text-2xl md:text-2xl">{ach.title}</p>
                <p className="text-accent text-base md:text-lg mb-1">{ach.date}</p>
                <p className="text-white flex-1 mb-3 text-base md:text-lg">{ach.description}</p>
                {ach.details && <Button onClick={onOpen}>Czytaj więcej</Button>}
            </div>
        </div>
    );
};

const AchievementModal = ({ach, onClose}: { ach: Achievement; onClose: () => void }) => {
    const badge = getPlaceBadge(ach.place);
    return (
        <Modal onClose={onClose}>
            {badge && <Badge {...badge} />}
            <h3 className="text-3xl md:text-4xl font-text mb-4">{ach.title}</h3>
            <p className="text-accent text-base md:text-lg mb-4">{ach.date}</p>
            <img src={ach.imageUrl || "/pwa-maskable-512x512.png"} alt={ach.title}
                 className="w-full max-h-48 object-cover rounded-3xl mb-4"/>
            <p>{ach.details}</p>
        </Modal>
    );
};

const AchievementSection = () => {
    const [open, setOpen] = useState<Achievement | null>(null);
    const [page, setPage] = useState(0);
    const perPage = 4;
    const totalPages = Math.ceil(achievements.length / perPage);
    const current = achievements.slice(page * perPage, (page + 1) * perPage);

    const openModal = (ach: Achievement) => {
        setOpen(ach);
        document.body.classList.add("overflow-hidden"); // blokada scrolla
    };

    const closeModal = () => {
        setOpen(null);
        document.body.classList.remove("overflow-hidden"); // przywrócenie scrolla
    };

    return (
        <div className="w-full max-w-7xl flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full px-4 mb-2">
                {current.map((ach, i) => (
                    <AchievementCard key={i} ach={ach} onOpen={() => openModal(ach)} />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="flex items-center justify-center mt-1 gap-2">
                    <Button onClick={() => { setPage(p => Math.max(p-1,0)); setTimeout(() => window.scrollTo({top:0, behavior:'smooth'}),3) }}>{"<"}</Button>
                    <span className="text-white font-text px-2 py-2 flex-shrink-0">Strona {page+1} / {totalPages}</span>
                    <Button onClick={() => { setPage(p => Math.min(p+1,totalPages-1)); setTimeout(() => window.scrollTo({top:0, behavior:'smooth'}),3) }}>{">"}</Button>
                </div>
            )}
            {open && <AchievementModal ach={open} onClose={closeModal} />}
        </div>
    );
};

//AchiPage
export const AchievementsPage = () => (
    <div className="min-h-screen bg-background flex flex-col items-center py-10 px-4 text-white text-center pt-20">
        <AchievementSection/>
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
