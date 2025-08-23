import {NewsCard} from "../components/NewsCard";

export const NewsPage = () => {
    return (
        <div className="flex flex-col items-center gap-10 py-10 px-4 min-h-screen pt-20">
            <div className="w-full max-w-7xl flex flex-col gap-12">
                <NewsCard
                    title="Podpisanie umowy z Acerol Mittal"
                    description="W 2025 udało nam się podpisać umowę, która pozwoli na rozwój nowych technologii..."
                    image="/yobama.jpg"
                    date={new Date(2025, 1, 21)}
                    ctaLabel="Czytaj więcej"
                    ctaHref="/news/acerol"
                />

                <NewsCard
                    title="Modelowanie ruchu wydm"
                    description="Dzięki zastosowaniu nowoczesnych technologii udało nam się stworzyć realistyczny model..."
                    image="/yobama.jpg"
                    date={new Date(2025, 12, 15)}
                    ctaLabel="Czytaj więcej"
                    ctaHref="/news/wydmy"
                />
            </div>
        </div>
    );
};
