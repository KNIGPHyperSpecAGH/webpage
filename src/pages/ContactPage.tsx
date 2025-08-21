import { SimpleCard } from "../components/SimpleCard";
import {SocialsFull} from "../components/SocialsFull";
export const ContactPage = () => {
  return (
    /* example of using map location contener */
    <div className="flex flex-col items-center gap-10 py-10 px-4 text-center min-h-screen pt-20">
      {/*upper*/}
      <div className="w-full max-w-7xl mb-12">
        <SimpleCard header="Skontaktuj się z nami" text="Jesteście zainteresowani dołączeniem do naszego koła?
Zapraszamy!" />
      </div>
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 mb-12">
        <SimpleCard header="E-mail" text="hyperspec@agh.edu.pl" /> 
        <SimpleCard header="Lokalizacja" text="al. Adama Mickiewicza 30, 30-059 Kraków" />
        <SimpleCard header="Social Media" text=""><SocialsFull/></SimpleCard>
      </div>
    </div>
  );
};
