import { MapLocation } from "../components/MapLocation";
const ManagementCard = ({
  name,
  role,
  imageOnLeft = true,
}: {
  name: string;
  role: string;
  imageOnLeft?: boolean;
}) => {

  const textAlignClass = imageOnLeft ?  "text-left" : "text-right";
  return (
    <div className="flex items-center justify-between w-full md:max-w-xs mx-auto md:mx-0 my-4">
      {imageOnLeft && (
        <div className="w-16 h-16 bg-gray-700 rounded-lg shrink-0"></div>
      )}
      <div className={`${textAlignClass} flex-1 px-4`}>
        <p className="text-white font-bold">{name}</p>
        <p className="text-white text-sm">{role}</p>
      </div>
      {!imageOnLeft && (
        <div className="w-16 h-16 bg-gray-700 rounded-lg shrink-0"></div>
      )}
    </div>
  );
};

export const AboutPage = () => {
 return (
    <div className="bg-primary min-h-screen flex flex-col items-center px-4 py-8">
      {/* Section: About */}
      <h2 className="text-white text-2xl font-bold mb-4">O nas</h2>
      <p className="text-white text-center max-w-md mb-8">
        ...
      </p>

      {/* Section: Board */}
      <div className="bg-primary w-full py-4 border-t border-[#6f9784]">
        {/* Container that becomes two columns on md+: left = members, right = map */}
        <div className="w-full max-w-6xl mx-auto flex flex-col ">
          
          {/* Top row: title on left, location heading on right (md+) */}
          <div className="w-full px-4 mb-6 flex flex-col md:flex-row items-center md:items-center md:justify-around">
            <div className="px-4 py-1 border-white rounded-full text-white font-semibold text-center">
              Nasz zarząd
            </div>

            {/* show on md+ beside the title */}
            <h3 className="hidden md:block text-white text-lg font-bold mb-0 text-center">
              Nasza lokalizacja
            </h3>
          </div>

          {/* Columns: members (left) and map (right) */}
          <div className="w-full px-4 flex flex-col md:flex-row md:items-start">
            {/* Left column: members */}
            <div className="w-full md:w-1/2">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ManagementCard name="imię nazwisko" role="Opiekun koła" imageOnLeft />
                <ManagementCard name="imię nazwisko" role="Opiekun koła" imageOnLeft={false} />
                <ManagementCard name="imię nazwisko" role="Przewodniczący koła" imageOnLeft />
                <ManagementCard name="imię nazwisko" role="Wiceprzewodniczący koła" imageOnLeft={false} />
                <ManagementCard name="imię nazwisko" role="Wiceprzewodnicząca koła" imageOnLeft />
                <ManagementCard name="imię nazwisko" role="Przewodniczący sekcji" imageOnLeft={false} />
                <ManagementCard name="imię nazwisko" role="Przewodniczący sekcji" imageOnLeft />
              </div>
            </div>

            {/* Right column: map */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 self-center md:content-stretch lg:content-normal">
              {/* mobile-only heading above the map */}
              <h3 className="block md:hidden text-white text-lg font-bold mb-4 text-center">
                Nasza lokalizacja
              </h3>
              <div className="self-stretch">
                <MapLocation />
              </div>
              
            </div>
          </div>
        </div>
      </div>
       </div>
  );
}