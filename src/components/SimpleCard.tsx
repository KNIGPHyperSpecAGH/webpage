import  { type ReactNode } from "react";

type SimpleCardProps = {
    header: string;
    text: string;
    children?: ReactNode;
};
const SimpleCard = ({ header, text, children }: SimpleCardProps) => {
    return (
        <section className="flex-1 bg-primary rounded-[3vw] p-12 flex flex-col">
            <h1 className="text-4xl font-header font-bold mb-1">
                {header}
            </h1>
                    <p className="text-lg leading-relaxed font-text flex-grow">
                        {text}
                    </p>
            <div className="mt-4 self-center">
                {children}
            </div>
        </section>
    );
};

export { SimpleCard };