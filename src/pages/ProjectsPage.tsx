import { ProjectCard } from "../components/ProjectCard";


export const ProjectsPage = () => {
    return (
        <div className="flex flex-col space-y-20 pb-20">
            <div className="min-h-[30vh] w-full flex flex-col items-center justify-center">
                <h1 className=" text-7xl md:text-8xl font-bold text-white mb-6">
                    Projekty
                </h1>
            </div>

            <ProjectCard
                title="Wspolpraca z Acerol Mittal"
                description="W 2025 udało nam się podpisać umowę..."
                image="/yobama.jpg"
                variant="left"
                ctaLabel="Czytaj więcej"
                ctaHref="/projekty/piec"
            />

            <ProjectCard
                title="Modelowanie ruchu wydm"
                description="Dzięki zastosowaniu nowoczesnych technologii udało nam się stworzyć model..."
                image="/yobama.jpg"
                variant="right"
                ctaLabel="Czytaj więcej"
                ctaHref="/projekty/wydmy"
            />
        </div>
    );
};
