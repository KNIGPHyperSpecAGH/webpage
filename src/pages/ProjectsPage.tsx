import {ProjectCard} from "../components/ProjectCard";

export const ProjectsPage = () => {
    return (
        <div className="flex flex-col items-center gap-10 py-10 px-4 min-h-screen pt-20">
            <div className="w-full max-w-7xl flex flex-col gap-12">
                <ProjectCard
                    title="Wspolpraca z Acerol Mittal"
                    description="W 2025 udało nam się podpisać umowę..."
                    image="/yobama.jpg"
                    variant="left"
                    ctaLabel="Czytaj więcej"
                    ctaHref="/projekty/piec"
                    startDate="01 stycznia 2025"
                    endDate="30 kwietnia 2025"
                />

                <ProjectCard
                    title="Modelowanie ruchu wydm"
                    description="Dzięki zastosowaniu nowoczesnych technologii udało nam się stworzyć model..."
                    image="/yobama.jpg"
                    variant="right"
                    ctaLabel="Czytaj więcej"
                    ctaHref="/projekty/wydmy"
                    startDate="15 stycznia 2025"
                />
            </div>
        </div>
    );
};
