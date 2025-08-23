import * as React from "react";
import {NavButton} from "./NavButton";

type NewsCardProps = {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    date: Date;
    ctaLabel?: string;
    ctaHref?: string;
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
                                           }) => {
    //months index from 0
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return (
        <article
            className="w-full max-w-7xl mx-auto flex flex-col md:flex-row
                 bg-element rounded-[3vw] shadow-md hover:shadow-lg
                 overflow-hidden transition-shadow"
        >
            <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-44 md:h-full object-cover block"
                    draggable={false}
                    loading="lazy"
                />
            </div>

            <div
                className="p-6 flex-1 flex flex-col md:flex-row
                   items-center md:items-start text-center md:text-left"
            >
                <div
                    className="flex flex-col items-center justify-center
                     w-24 h-24 bg-accent text-white rounded-[1.5vw]
                     shadow-md flex-shrink-0 mb-4 md:mb-0"
                >
                    <span className="text-2xl font-bold">{day}</span>
                    <span className="text-sm uppercase">{month}</span>
                    <span className="text-xs">{year}</span>
                </div>

                <div className="flex-1 md:ml-6 flex flex-col justify-between items-center md:items-start">
                    <div>
                        <h3 className="text-white font-header text-2xl mb-3">
                            {title}
                        </h3>
                        <p className="text-gray-300 font-text text-lg leading-relaxed">
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
            </div>
        </article>
    );
};

export {NewsCard};
