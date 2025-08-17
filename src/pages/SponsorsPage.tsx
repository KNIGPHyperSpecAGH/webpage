import {NavButton} from "../components/NavButton";
import { SimpleCard } from "../components/SimpleCard";
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
const SponsorSection = () => {
    return (
        <section className="w-full max-w-7xl bg-primary rounded-[3vw] p-8 shadow-lg">
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
    );
};

export const SponsorsPage = () => {
    return (
        <div
            className="min-h-screen bg-fixed
                  flex flex-col items-center pt-20 px-4 pb-20 text-white"
        >
            {/* Top section, 2 blocks */}
            <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 mb-12">
                {/* Left */}
                <SimpleCard header="Na co zbieramy pieniądze ?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a vehicula nisl. Nunc feugiat leo eget lacus auctor placerat. Aenean feugiat luctus gravida." />
                {/* Right */}
                <SimpleCard header="Zostań sponsorem" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a vehicula nisl. Nunc feugiat leo eget lacus auctor placerat. Aenean feugiat luctus gravida."> 
                    <NavButton href="/kontakt">Zostań naszym sponsorem!</NavButton>
                </SimpleCard>
            </div>
            {/* Sponsors section */}
            <SponsorSection />
        </div>
    );
};
