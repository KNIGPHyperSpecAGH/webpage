import { MapLocation } from "../components/MapLocation";

export const ContactPage = () => {
  return (
    /* example of using map location contener */
    <div className="flex flex-col items-center gap-10 py-10 px-4">
      <h1 className="text-4xl font-header font-bold mb-4 text-center">
        Kontakt
      </h1>
      <MapLocation />
    </div>
  );
};
