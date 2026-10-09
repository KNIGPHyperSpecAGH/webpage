import {SimpleCard} from "../components/SimpleCard";
import {SocialsFull} from "../components/SocialsFull";
import {MapLocation} from "../components/MapLocation";

export const ContactPage = () => {
    return (
        /* example of using map location container */
        <div className="flex flex-col items-center gap-10 py-10 px-4 text-center min-h-screen pt-20">
            {/*upper*/}
            <div className="w-full max-w-7xl mb-12">
                <SimpleCard header="Skontaktuj się z nami!">
                    Masz pytania, pomysł na współpracę lub chcesz do nas dołączyć?<br/>
                    Skontaktuj się z nami – napisz do nas lub znajdź nas w mediach społecznościowych:
                </SimpleCard>
            </div>
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 mb-12">
                <SimpleCard header="E-mail">
                    <a
                        href="mailto:hyperspec@agh.edu.pl"
                        className="cursor-pointer hover:underline"
                    >hyperspec@agh.edu.pl</a>
                </SimpleCard>
                <SimpleCard header="Lokalizacja">al. Adama Mickiewicza 30, 30-059 Kraków</SimpleCard>
                <SimpleCard header="Social Media">
                    <SocialsFull/>
                </SimpleCard>
            </div>
            <div className="w-full max-w-7xl mb-12">
                <MapLocation/>
            </div>
        </div>
    );
};
