import React from "react";

interface PhotoProps {
  src: string;
  alt: string;
}

export const Photo: React.FC<PhotoProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover select-none"
        draggable={false}
        loading="lazy"
      />
    </div>
  );
};
