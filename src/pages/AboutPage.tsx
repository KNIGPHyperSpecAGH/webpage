import groupPhoto from "../assets/group_photo.jpg";
const ManagementCard = ({
  name,
  role,
}: {
  name: string;
  role: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-element rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
      {/* Image */}
      <div className="w-20 h-20 bg-gray-700 rounded-full mb-4"></div>

      {/* Text */}
      <div>
        <p className="text-white font-bold text-lg">{name}</p>
        <p className="text-gray-300 text-sm">{role}</p>
      </div>
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

        <div className="w-full max-w-7xl mx-auto flex flex-col pt-5">
          {/* Title */}
          <div className="px-4 text-white font-semibold text-4xl mb-5 text-center">
            Nasz zarząd
          </div>

          {/* Grid of cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <ManagementCard
              name="Imię Nazwisko"
              role="Opiekun koła"
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Opiekun koła"
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Przewodniczący koła"
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Wiceprzewodniczący koła"
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Wiceprzewodnicząca koła"
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Przewodniczący sekcji"
            />
            <ManagementCard
              name="Imię Nazwisko"
              role="Przewodniczący sekcji"
            />
          </div>
        </div>
      </div>
    </div>
  );
};