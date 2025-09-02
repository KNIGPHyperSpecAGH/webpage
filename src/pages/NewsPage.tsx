import {NewsCard} from "../components/NewsCard";

const acerol = `W ramach konkursu organizowanego przez firmę ArcelorMittal realizujemy projekt inwentaryzacji jednego z obiektów przemysłowych. Planujemy przeprowadzenie szczegółowego pomiaru 3D oraz opracowanie modelu, który zostanie uzupełniony o dane pozyskane z kamer termowizyjnych. Dzięki temu możliwe będzie nie tylko odwzorowanie geometrii obiektu, ale także analiza jego charakterystyki termicznej. 
Projekt łączy klasyczną fotogrametrię z nowoczesnymi metodami teledetekcji i stanowi okazję do zdobycia doświadczenia w pracy nad rozwiązaniami o realnym zastosowaniu w przemyśle.
`
const leba = `W ramach projektu badawczego w okolicach Łeby analizujemy proces przemieszczania się wydm oraz zmiany, jakie zaszły na przestrzeni lat. Do realizacji badań wykorzystujemy zarówno dane archiwalne, jak i materiały pozyskane podczas nalotów z drona. Dzięki temu możemy szczegółowo zbadać, w jaki sposób kształtuje się tamtejszy krajobraz oraz ocenić wpływ czynników naturalnych na jego zmiany. Projekt posłuży nam do rozwinięcia praktycznych umiejętności członków koła w zakresie fotogrametrii i analizy danych przestrzennych.`

export const NewsPage = () => {
    return (
        <div className="flex flex-col items-center gap-10 py-10 px-4 min-h-screen pt-20">
            <div className="w-full max-w-7xl flex flex-col gap-12">
                <NewsCard
                    title="Podpisanie umowy z Acerol Mittal"
                    description={acerol}
                    image="/yobama.jpg"
                    date={new Date(2025, 1, 21)}
                    ctaLabel="Czytaj więcej"
                    ctaHref="/news/acerol"
                    variant="left"
                />

                <NewsCard
                    title="Modelowanie ruchu wydm"
                    description={leba}
                    image="/yobama.jpg"
                    date={new Date(2025, 12, 15)}
                    ctaLabel="Czytaj więcej"
                    ctaHref="/news/wydmy"
                    variant="right"
                />
            </div>
        </div>
    );
};
