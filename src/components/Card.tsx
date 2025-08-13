import React from "react";

export interface CardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  /** true = obrazek po lewej, false = obrazek po prawej (desktop) */
  alignLeft?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  date,
  description,
  imageUrl,
  alignLeft = true,
}) => {
  return (
    <article
      className={[
        "w-full",
        // kartę sami ograniczamy szerokością wewnątrz grid/kolumny
        "bg-[#648673] text-white rounded-3xl border-2 border-[#4e6f61] shadow-[0_8px_28px_rgba(0,0,0,.22)] overflow-hidden",
        // layout zawartości (obraz + treść)
        "flex flex-col md:flex-row",
        alignLeft ? "md:flex-row" : "md:flex-row-reverse",
      ].join(" ")}
    >
      {/* Kolumna ze zdjęciem + przycisk */}
      <div className="w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col">
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover select-none"
            draggable={false}
          />
        </div>

        <button
          className="mt-6 md:mt-8 self-center w-[160px] h-[60px] rounded-full bg-[#C57B57] text-white text-lg
                     transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          Więcej
        </button>
      </div>

      {/* Kolumna z treścią */}
      <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
        <h2 className="text-2xl lg:text-[28px] font-bold tracking-tight">{title}</h2>
        <span className="mt-1 text-xs lg:text-sm opacity-80">{date}</span>
        <p className="mt-4 lg:mt-6 text-base lg:text-[17px] leading-relaxed">{description}</p>
      </div>
    </article>
  );
};
