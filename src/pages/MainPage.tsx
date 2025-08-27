// export const MainPage = () => {
//     return (
//         <>MainPage</>
//     );
// };

import { Card } from "../components/Card";
import { NavButton } from "../components/NavButton";
const lorem = `🎓 Witajcie!
Z ogromną radością ogłaszamy powstanie nowego koła naukowego KNIGP HyperSpec AGH, działającego przy kierunku Informatyka Geoprzestrzenna na WGGiIŚ AGH!
Naszą misją jest rozwijanie pasji do informatyki, teledetekcji oraz nowoczesnych technologii poprzez realizację innowacyjnych projektów, badań i warsztatów. Działamy na styku przestrzeni, danych i technologii — eksplorując zastosowania sztucznej inteligencji, analizę danych z UAV, fotogrametrię i systemy informacji przestrzennej. Przed nami wiele pasjonujących projektów, spotkań, warsztatów i współprac.
Czym będziemy się zajmować?
🌍 Zamierzamy tworzyć aplikacje użytkowe oparte na AI
🛰 Planujemy pracować z danymi satelitarnymi i UAV
🔬 Chcemy realizować projekty środowiskowe i przestrzenne
💻 Będziemy budować i integrować rozwiązania programistyczne i sprzętowe
🌐 Zamierzamy współpracować z uczelnią, firmami i kołami w Polsce i za granicą
👉 Obserwujcie nasz profil, bo to dopiero początek!`;



export const MainPage: React.FC = () => {
  return (
    <main className="min-h-screen py-10 lg:py-14 ">
      <div className="flex justify-center mb-10 flex-col items-center">
        <h2 className="text-xl font-bold mb-6 text-center w-full max-w-7xl px-10">Witaj niwerovnb noeiwf weoniwoe qnfwoq ienfqowein </h2>
        <div>
        <NavButton href="kontakt">Dołącz do nas</NavButton>
        </div>
      </div>
      
      {/* Para #1: lewa przyklejona do lewego brzegu, prawa pływa -> prawa jest wyśrodkowana w swojej kolumnie */}
      <section className="w-full mb-12 lg:mb-16 xl:mb-20">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-start">
          {/* LEWA (przyklejona) - na lg: start (zaczyna przy lewej krawędzi kolumny) */}
          <div className="w-full lg:justify-self:start lg:pl-0 px-4">
            <Card
              title="Najnowszy Projekt"
              date="24 LIP"
              description={lorem}
              imageUrl="https://images.unsplash.com/photo-1551921038-a9009c20adb3?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alignLeft
              link = "projekty"
            />
          </div>

          {/* PRAWA (pływająca) - na lg: centered w drugiej kolumnie -> daje "pływający" efekt
              (WAŻNE: obie pary używają tej samej struktury grid, więc start X prawej karty w tej kolumnie
               będzie zgodny w obu wierszach) */}
          <div className="w-full lg:justify-self:center px-4">
            <Card
              title="Ostatnie osiągnięcia"
              date="20 LIP"
              description={lorem}
              imageUrl="https://images.unsplash.com/photo-1483651646696-c1b5fe39fc0e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alignLeft={false}
              link = "osiagniecia"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
