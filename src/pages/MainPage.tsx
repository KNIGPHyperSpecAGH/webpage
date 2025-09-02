import { Card } from "../components/Card";
import { NavButton } from "../components/NavButton";
import logo from "../assets/logo_full.svg";
const welcome = `KNIGP HyperSpec AGH to nowo powstałe koło naukowe, które zrzesza studentów pasjonujących się teledetekcją i fotogrametrią. Naszym celem jest pogłębianie wiedzy i rozwijanie umiejętności w zakresie pozyskiwania oraz przetwarzania danych przestrzennych – satelitarnych, lotniczych i naziemnych. 
Realizując różnorodne projekty badawcze i praktyczne, poznajemy nowoczesne technologie i uczymy się ich nowatorskich zastosowań.`
const newProject = `W ramach projektu badawczego w okolicach Łeby analizujemy proces przemieszczania się wydm oraz zmiany, jakie zaszły na przestrzeni lat. Do realizacji badań wykorzystujemy zarówno dane archiwalne, jak i materiały pozyskane podczas nalotów z drona. Dzięki temu możemy szczegółowo zbadać, w jaki sposób kształtuje się tamtejszy krajobraz oraz ocenić wpływ czynników naturalnych na jego zmiany. Projekt posłuży nam do rozwinięcia praktycznych umiejętności członków koła w zakresie fotogrametrii i analizy danych przestrzennych.`
const newAchivment = `Zwycięstwo w Hackathonie Geoprzestrzennym organizowanym przez HERE! Członek naszego zespołu - Błażej Kiełkowski wraz z drużyną opracował rozwiązanie zapewniające pierwsze miejsce w międzynarodowym konkursie programistycznym. Była to świetna okazja na zdobycie realnego doświadczenia oraz nawiązanie cennych kontaktów w branży.`



export const MainPage: React.FC = () => {
  return (
    <main className="min-h-screen py-10 lg:py-14 ">
      <div className="flex justify-center mb-10 flex-col items-center">
        <img src={logo} alt="Logo" className="mb-4 h-60" />
        <h2 className="text-2xl font-bold mb-6 text-center w-full max-w-7xl px-10">{welcome}</h2>
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
              description={newProject}
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
              description={newAchivment}
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
