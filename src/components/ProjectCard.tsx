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
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    imageAlt = "",
    variant = "left",
    ctaLabel,
    ctaHref,
}) => {
    const isRight = variant === "right";

    return (
        <article
            className={`w-full max-w-7xl mx-auto shadow-md overflow-hidden
                        rounded-lg bg-primary
                        flex flex-col-reverse md:flex-row ${isRight ? "md:flex-row-reverse" : "md:flex-row"}
                        `}
        >
            {/* content */}
            <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">
                        {title}
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed">
                        {description}
                    </p>
                </div>

                {ctaLabel ? (
                    <div className="mt-4">
                        {ctaHref ? <NavButton href={ctaHref}>{ctaLabel}</NavButton>:<NavButton>{ctaLabel}</NavButton>}
                    </div>
                ) : null}
            </div>

            {/* image */}
            {image ? (
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-44 md:h-full object-cover"
                    />
                </div>
            ) : null}
        </article>
    );
};

export { ProjectCard };