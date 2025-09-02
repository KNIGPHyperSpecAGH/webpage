import {NewsCard} from "../components/NewsCard";


export const NewsPage = () => {
    return (
        <div className="flex flex-col items-center gap-10 py-10 px-4 min-h-screen pt-20">
            <div className="w-full max-w-7xl flex flex-col gap-12">
                <NewsCard
                    title="Podpisanie umowy z Acerol Mittal"
                    description="W 2025 udało nam się podpisać umowę z firmą ArcelorMittal ..."
                    image="ArcelorMittal.svg"
                    date={new Date(2025, 9, 1)}
                    ctaLabel="Czytaj więcej"
                    ctaHref="/projekty"
                    variant="left"
                />

                <NewsCard
                    title="Modelowanie ruchu wydm w Słowińskim PN"
                    description="W ramach projektu badawczego w okolicach Łeby analizujemy proces przemieszczania się wydm..."
                    image="leba.jpg"
                    date={new Date(2025, 6, 15)}
                    ctaLabel="Czytaj więcej"
                    ctaHref="/projekty"
                    variant="right"
                />
            </div>
        </div>
    );
};
