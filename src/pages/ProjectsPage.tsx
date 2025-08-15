import { ProjectCard } from "../components/ProjectCard";


export const ProjectsPage = () => {
    return (
        <div className="flex flex-col space-y-20 pb-20">
            <div className="min-h-[80vh] w-full flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-text)" }}>
                    Projekty
                </h1>
                <p className="text-sm md:text-lg text-white w-full md:w-3/5 text-center px-4" style={{ fontFamily: "var(--font-text)" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a vehicula nisl...
                </p>
            </div>

            <ProjectCard
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a vehicula nisl..."
                image="/yobama.jpg"
                variant="left"
                ctaLabel="Czytaj więcej"
                ctaHref="#"
            />

            <ProjectCard
                title="Inny projekt"
                description="Kolejny opis projektu, responsywny i nie hardkodowany."
                image="/yobama.jpg"
                variant="right"
                ctaLabel="Szczegóły"
                ctaHref="#"
            />

            {/* ...additional ProjectCard instances... */}
        </div>
    );
};
