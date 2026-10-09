import {type ReactNode} from "react";

type SimpleCardProps = {
    header: string;
    children?: ReactNode;
};
const SimpleCard = ({header, children}: SimpleCardProps) => {
    return (
        <section className="flex-1 bg-element rounded-3xl p-12 flex flex-col">
            <h1 className="text-4xl font-header font-bold mb-5">
                {header}
            </h1>
            <div className="mt-4 self-center text-xl">
                {children}
            </div>
        </section>
    );
};

export {SimpleCard};
