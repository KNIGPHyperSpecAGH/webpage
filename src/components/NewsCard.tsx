import * as React from "react";
import {NavButton} from "./NavButton";

type NewsCardProps = {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    date?: Date;
    ctaLabel?: string;
    ctaHref?: string;
    variant?: "left" | "right";
};

const months = [
    "STY", "LUT", "MAR", "KWI", "MAJ", "CZE",
    "LIP", "SIE", "WRZ", "PAŹ", "LIS", "GRU"
];

const NewsCard: React.FC<NewsCardProps> = ({
                                               title,
                                               description,
                                               image,
                                               imageAlt = "",
                                               date,
                                               ctaLabel,
                                               ctaHref,
                                               variant = "left",
                                           }) => {
    const isRight = variant === "right";

    let day, month, year;
    if (date) {
        day = date.getDate();
        month = months[date.getMonth()];
        year = date.getFullYear();
    }

    return (
        <article
            className={`w-full max-w-7xl mx-auto shadow-md overflow-hidden
        rounded-[3vw] bg-element
        flex flex-col md:flex-row ${isRight ? "md:flex-row-reverse" : "md:flex-row"}
        hover:shadow-lg transition-shadow`}
        >
            <div className="w-full md:w-1/3 flex-shrink-0 relative order-1 md:order-1">
                <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-44 md:h-full object-cover rounded-[3vw]"
                />

                {date && (
                    <div
                        className={`absolute flex flex-col items-center justify-center
                          w-24 h-24 bg-accent text-white rounded-[1.5vw] shadow-md
                          ${isRight ? "bottom-4 right-4" : "bottom-4 left-4"}`}
                    >
                        <span className="text-2xl font-bold">{day}</span>
                        <span className="text-sm uppercase">{month}</span>
                        <span className="text-xs">{year}</span>
                    </div>
                )}
            </div>

            <div className="flex-1 flex flex-col justify-between p-4 md:p-6 text-center md:text-left">
                <div>
                    <h3 className="text-4xl font-text font-bold mb-5 text-white">
                        {title}
                    </h3>
                    <p className="text-xl leading-relaxed font-text text-white">
                        {description}
                    </p>
                </div>

                {ctaLabel && (
                    <div className="mt-4 flex w-full md:w-auto justify-center md:justify-start">
                        {ctaHref ? (
                            <NavButton href={ctaHref}>{ctaLabel}</NavButton>
                        ) : (
                            <NavButton>{ctaLabel}</NavButton>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};

export {NewsCard};
