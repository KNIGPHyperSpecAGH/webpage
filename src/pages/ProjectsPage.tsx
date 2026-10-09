import {ProjectCard} from "../components/ProjectCard";
import arcelorMittalImage from "../assets/ArcelorMittal.svg";
import labaImage from "../assets/leba.jpg";

type Project = {
    title: string;
    description: string;
    image: string;
    startDate: Date;
}

const projects: Project[] = [
    {
        title: "Współpraca z ArcelorMittal",
        description: `W ramach konkursu organizowanego przez firmę ArcelorMittal realizujemy projekt inwentaryzacji jednego z obiektów przemysłowych.
        Planujemy przeprowadzenie szczegółowego pomiaru 3D oraz opracowanie modelu, który zostanie uzupełniony o dane pozyskane z kamer termowizyjnych.
        Dzięki temu możliwe będzie nie tylko odwzorowanie geometrii obiektu, ale także analiza jego charakterystyki termicznej. 
        Projekt łączy klasyczną fotogrametrię z nowoczesnymi metodami teledetekcji i stanowi okazję do zdobycia doświadczenia w pracy nad rozwiązaniami o realnym zastosowaniu w przemyśle.`,
        image: arcelorMittalImage,
        startDate: new Date("2025-10-01"),
    },
    {
        title: "Modelowanie ruchu wydm",
        description: `W ramach projektu badawczego w okolicach Łeby analizujemy proces przemieszczania się wydm oraz zmiany, jakie zaszły na przestrzeni lat.
        Do realizacji badań wykorzystujemy zarówno dane archiwalne, jak i materiały pozyskane podczas nalotów z drona.
        Dzięki temu możemy szczegółowo zbadać, w jaki sposób kształtuje się tamtejszy krajobraz oraz ocenić wpływ czynników naturalnych na jego zmiany.
        Projekt posłuży nam do rozwinięcia praktycznych umiejętności członków koła w zakresie fotogrametrii i analizy danych przestrzennych.`,
        image: labaImage,
        startDate: new Date("2025-07-15"),
    }
];

export const ProjectsPage = () => {
    return (
        <div className="flex flex-col items-center gap-10 py-10 px-4 min-h-screen pt-20">
            <div className="w-full max-w-7xl flex flex-col gap-12">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        variant={index % 2 === 0 ? "left" : "right"}
                        startDate={project.startDate}
                    />
                ))}
            </div>
        </div>
    );
};
