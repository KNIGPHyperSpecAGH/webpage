import {NavButton} from "../components/NavButton";

type Sponsor = {
    name: string;
    logoUrl?: string;
};

const sponsors: Sponsor[] = [
    {name: "Sponsor A", logoUrl: "/yobama.jpg"},
    {name: "Sponsor B", logoUrl: "/yobama.jpg"},
    {name: "Sponsor C", logoUrl: "/yobama.jpg"},
    {name: "Sponsor D", logoUrl: "/yobama.jpg"},
];

export const SponsorsPage = () => {
    return (
        <div
            className="min-h-screen bg-[url(/background.jpg)] bg-primary bg-fixed
                  flex flex-col items-center pt-20 px-4 pb-20 text-white"
        >
            {/* Top section, 2 blocks */}
            <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 mb-12">
                {/* Left */}
                <section className="flex-1 bg-secondary rounded-[3vw] p-8 flex flex-col">
                    <h1 className="text-4xl font-header font-bold mb-1">
                        Na co zbieramy pieniądze ?
                    </h1>
                    <p className="text-lg leading-relaxed font-text flex-grow">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
                        vehicula nisl. Nunc feugiat leo eget lacus auctor placerat. Aenean
                        feugiat luctus gravida.
                    </p>
                </section>

                {/* Right */}
                <section className="flex-1 bg-secondary rounded-[3vw] p-8 flex flex-col">
                    <h2 className="text-4xl font-header font-bold mb-1">Zostań sponsorem</h2>
                    <h3 className="text-2xl font-header font-bold mb-1">Co oferujemy?</h3>
                    <p className="font-text mb-8 flex-grow">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
                        vehicula nisl. Nunc feugiat leo eget lacus auctor placerat. Aenean
                        feugiat luctus gravida.
                    </p>
                    <NavButton href="/kontakt">Zostań naszym sponsorem!</NavButton>
                </section>
            </div>

            {/* Snponsors section */}
            <section className="w-full max-w-7xl bg-secondary rounded-[3vw] p-8 shadow-lg">
                <h2 className="text-4xl font-header font-bold mb-10 text-center">
                    Nasi sponsorzy
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {sponsors.map(({name, logoUrl}, i) => (
                        <div
                            key={i}
                            className="bg-primary rounded-3xl flex flex-col items-center p-6 shadow-md border-2 border-solid border-accent"
                        >
                            <div
                                className="w-32 h-32 bg-white rounded-2xl mb-6 flex items-center justify-center select-none border-2 border-solid border-accent"
                                style={{
                                    backgroundImage: logoUrl ? `url(${logoUrl})` : undefined,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                {!logoUrl && null}
                            </div>

                            <h3 className="font-header text-xl text-center text-white">
                                {name}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
