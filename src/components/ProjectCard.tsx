import * as React from "react";
import { NavButton } from "./NavButton";

type ProjectCardProps = {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    variant?: "left" | "right";
    ctaLabel?: string;
    ctaHref?: string;
    startDate?: string;
    endDate?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     title,
                                                     description,
                                                     image,
                                                     imageAlt = "",
                                                     variant = "left",
                                                     ctaLabel,
                                                     ctaHref,
                                                     startDate,
                                                     endDate,
                                                 }) => {
    const isRight = variant === "right";

    return (
        <article
            className={`w-full max-w-7xl mx-auto shadow-md overflow-hidden
        rounded-[3vw] bg-element
        flex flex-col-reverse md:flex-row ${isRight ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
            <div
                className="p-4 md:p-6 flex-1 flex flex-col justify-between items-center md:items-start text-center md:text-left"
            >
                <div>
                    <h3 className="text-xl md:text-2xl font-header font-bold mb-1 text-white">
                        {title}
                    </h3>

                    {(startDate || endDate) && (
                        <div className="flex flex-col gap-1 mb-2">
                            {startDate && (
                                <div className="flex items-center">
                  <span className="text-accent font-text text-lg mr-2">
                    Data rozpoczęcia projektu:
                  </span>
                                    <span className="text-accent font-text text-lg">{startDate}</span>
                                </div>
                            )}
                            {endDate && (
                                <div className="flex items-center">
                  <span className="text-accent font-text text-lg mr-2">
                    Data zakończenia projektu:
                  </span>
                                    <span className="text-accent font-text text-lg">{endDate}</span>
                                </div>
                            )}
                        </div>
                    )}

                    <p className="text-lg md:text-xl font-text leading-relaxed text-white">
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

            {image && (
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-44 md:h-full object-cover"
                    />
                </div>
            )}
        </article>
    );
};

export { ProjectCard };
