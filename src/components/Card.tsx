import React from "react";
import { Photo } from "./Photo";
import { NavButton } from "./NavButton";

export interface CardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  /** true = obrazek po lewej, false = obrazek po prawej (desktop) */
  alignLeft?: boolean;
  link: string;
}



export const Card: React.FC<CardProps> = ({
  title,
  date,
  description,
  imageUrl,
  link,
  alignLeft = true,
}) => {
  return (
    <article
      className={[
        "w-full",
        "bg-element text-white rounded-3xl border-2 border-element shadow-[0_8px_28px_rgba(0,0,0,.22)] overflow-hidden",
        "flex flex-col md:flex-row",
        alignLeft ? "md:flex-row" : "md:flex-row-reverse",
      ].join(" ")}
    >
      {/* Kolumna ze zdjęciem + przycisk */}
      <div className="w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col">
        <Photo src={imageUrl} alt={title} />

        <NavButton href = {link}>
          Więcej
        </NavButton>
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
