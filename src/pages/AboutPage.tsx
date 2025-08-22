import groupPhoto from "../assets/group_photo.jpg";
const ManagementCard = ({
  name,
  role,
  imageOnLeft = true,
}: {
  name: string;
  role: string;
  imageOnLeft?: boolean;
}) => {
  return (
    <div className="flex items-center w-full bg-element rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
      {imageOnLeft && (
        <div className="w-16 h-16 bg-gray-700 rounded-lg shrink-0"></div>
      )}

      <div
        className={`flex-1 px-4 ${
          imageOnLeft ? "text-left" : "text-right"
        }`}
      >
        <p className="text-white font-bold text-lg">{name}</p>
        <p className="text-gray-300 text-sm">{role}</p>
      </div>

      {!imageOnLeft && (
        <div className="w-16 h-16 bg-gray-700 rounded-lg shrink-0"></div>
      )}
    </div>
  );
};

export const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 pt-20">
      {/* Section: About */}
      <div className="w-full max-w-7xl mb-8 bg-element flex lg:flex-row flex-col items-center gap-8 p-8 rounded-[3vw]">
        <p className="text-white text-2xl leading-relaxed lg:w-1/2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nobis quia corporis
          recusandae. Impedit error tempore quod nemo quia tempora iste amet
          enim, non, nesciunt, ullam ipsum quo vero saepe. Nisi.
        </p>
        <img
          src={groupPhoto}
          alt="About us"
          className="rounded-2xl shadow-lg lg:w-1/2 w-full h-auto object-cover"
        />
      </div>

      {/* Section: Board */}
      <div className="w-full py-4">
        <hr className="border-t border-white mb-8" />

        <div className="w-full max-w-6xl mx-auto flex flex-col">
          {/* Title */}
          <div className="px-4 text-white font-semibold text-lg mb-6 text-center">
            Nasz zarząd
          </div>

          {/* Grid of cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <ManagementCard
              name="Imię Nazwisko"
              role="Opiekun koła"
              imageOnLeft
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Opiekun koła"
              imageOnLeft={false}
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Przewodniczący koła"
              imageOnLeft
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Wiceprzewodniczący koła"
              imageOnLeft={false}
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Wiceprzewodnicząca koła"
              imageOnLeft
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Przewodniczący sekcji"
              imageOnLeft={false}
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Przewodniczący sekcji"
              imageOnLeft
            />
          </div>
        </div>
      </div>
    </div>
  );
};