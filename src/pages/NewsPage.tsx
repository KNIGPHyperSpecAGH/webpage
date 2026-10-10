import {NewsCard} from "../components/NewsCard";
import arcelorMittalImage from "../assets/ArcelorMittal.svg";
import labaImage from "../assets/leba.jpg";
import koloImage from "../assets/LogoBezTla.png";

type NewsType = {
    title: string,
    description: string,
    image: string,
    date: Date,
    ctaLabel: string,
    ctaHref: string,
    ctaNewPage: boolean,
};

const news: NewsType[] = [
    {
        title: "Rozpoczynamy rekrutację do naszego koła!",
        description: "W dniu 14 października będziemy na Targach Organizacji Studenckich",
        image: koloImage,
        date: new Date("2026-10-14"),
        ctaLabel: "Formularz zgłoszeniowy",
        ctaHref: "https://docs.google.com/forms/d/e/1FAIpQLSfYlyhdrVoVufCyALyVn0M_yLbAsy5nWc8x-_9Pj-TUbIvwRw/viewform?usp=dialog",
        ctaNewPage: true,
    }, {
        title: "Podpisanie umowy z ArcelorMittal",
        description: "W 2025 udało nam się podpisać umowę z firmą ArcelorMittal ...",
        image: arcelorMittalImage,
        date: new Date("2025-10-01"),
        ctaLabel: "Czytaj więcej",
        ctaHref: "/projekty",
        ctaNewPage: false,
    }, {
        title: "Modelowanie ruchu wydm w Słowińskim PN",
        description: "W ramach projektu badawczego w okolicach Łeby analizujemy proces przemieszczania się wydm...",
        image: labaImage,
        date: new Date("2025-07-15"),
        ctaLabel: "Czytaj więcej",
        ctaHref: "/projekty",
        ctaNewPage: false,
    }
];

export const NewsPage = () => {
    return (
        <div className="flex flex-col items-center gap-10 py-10 px-4 min-h-screen pt-20">
            <div className="w-full max-w-7xl flex flex-col gap-12">
                {news.map((item, index) => (
                    <NewsCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        date={item.date}
                        ctaLabel={item.ctaLabel}
                        ctaHref={item.ctaHref}
                        ctaNewPage={item.ctaNewPage}
                        variant={index % 2 === 0 ? "left" : "right"}
                    />
                ))}
            </div>
        </div>
    );
};
