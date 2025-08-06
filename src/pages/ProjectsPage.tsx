{/* 

    placeholder content everywhere

*/}

{/*Temp props*/}
type ButtonProps = {
    text: string;
};

type ProjectProps = {
    title: string;
    description: string;
    variant?: "left" | "right";
}; 
{/*Creating temporary button, that only display 'clicked' in console*/}
const ViewmoreButton = ({text}: ButtonProps) => {
    
    const handleClick = () => {
        console.log(text); 
    };
    
    return(
        <button className="outline-2 outline-red rounded-full
                           w-[13vw] h-[3.5vw] max-w-40 max-h-10 
                           text-red font-text font-bold"
                style={{ fontSize:"clamp(0rem, 1.6vw, 1.3rem)"}}
                onClick={handleClick}
        >
            Czytaj więcej
        </button>
    )
};

{/*Project component template*/}
const ProjectComponent = ({ title, description, variant="left"}: ProjectProps) => {
    const isLeft = variant === 'left'; 

    return (
        <div className={`bg-element/50 w-[80vw] max-h-105
                        shadow-md grid grid-flow-col
                        ${isLeft ? "rounded-r-[6vw]" : "place-self-end rounded-l-[6vw]"}`}
            >   
                {!isLeft &&(    
                    <div className="bg-[url(/yobama.jpg)] bg-center bg-cover 
                                    w-[20vw] max-w-75 aspect-square 
                                    ml-[3vw] mb-[3vw] mt-[3vw]
                                    rounded-[3vw]
                                    place-self-end"
                    ></div>
                )}
                <div className="w-4/5 ml-[6vw] mt-[3vw]
                                flex flex-col justify-between">   
                    <div>    
                        <h1 className={`font-projheader
                                    mb-[1vw] line-clamp-2
                                    ${isLeft ? "text-right" : "text-left"}`}>
                            {title}
                        </h1>
                        <p className="font-content line-clamp-4"
                        >
                            {description}
                        </p>
                    </div>
                    <div className={`mt-auto mb-[3vw] place-self-end
                                    ${isLeft ? "place-self-start" : "place-self-end"}`}>
                    <ViewmoreButton text="clicked"/>
                    </div>
                </div>   
                {isLeft &&(    
                    <div className="bg-[url(/yobama.jpg)] bg-center bg-cover 
                                    w-[20vw] max-w-75 aspect-square 
                                    mr-[3vw] mb-[3vw] mt-[3vw]
                                    rounded-[3vw]
                                    place-self-end"
                    ></div>
                )}
        </div>
    );
};

export const ProjectsPage = () => {  

    return (
    <div className="min-h-screen bg-[url(/background.jpg)] bg-cover bg-fixed
                    flex flex-col space-y-20 pb-20">
        <div className="min-h-[80vh] w-full
                        flex flex-col items-center justify-center">
            <h1 className="text-[5vw] font-text font-bold text-white mb-[2vw]">
                Projekty
            </h1>
            <p className="font-text font-bold text-white text-[1vw] w-[60vw] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a vehicula nisl. Nunc feugiat leo eget lacus auctor placerat. Aenean feugiat luctus gravida. Vestibulum efficitur nibh libero, nec bibendum lacus mollis eu. Fusce at mauris ac ligula sollicitudin ultrices quis vel felis. Proin tempor venenatis urna, quis lacinia quam ullamcorper in. Proin velit elit, sodales sed aliquet efficitur, porttitor et enim. Morbi nec volutpat mauris, non fringilla dui. Vivamus hendrerit pulvinar leo. Etiam finibus velit vitae elit congue auctor. Proin euismod tincidunt ligula, non fermentum dui convallis ac. Aenean lorem lectus, ultrices at malesuada eget, fermentum non tortor
            </p>
        </div>
        <ProjectComponent title="Lorem ipsum dolor sit amet"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a vehicula nisl. Nunc feugiat leo eget lacus auctor placerat. Aenean feugiat luctus gravida. Vestibulum efficitur nibh libero, nec bibendum lacus mollis eu. Fusce at mauris ac ligula sollicitudin ultrices quis vel felis."
                            variant="left"
        />                     
        <ProjectComponent title="Lorem ipsum dolor sit amet"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a vehicula nisl. Nunc feugiat leo eget lacus auctor placerat. Aenean feugiat luctus gravida. Vestibulum efficitur nibh libero, nec bibendum lacus mollis eu. Fusce at mauris ac ligula sollicitudin ultrices quis vel felis."
                            variant="right"
        />
        <ProjectComponent title="Lorem ipsum dolor sit amet"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a vehicula nisl. Nunc feugiat leo eget lacus auctor placerat. Aenean feugiat luctus gravida. Vestibulum efficitur nibh libero, nec bibendum lacus mollis eu. Fusce at mauris ac ligula sollicitudin ultrices quis vel felis."
                            variant="left"
        />
        <ProjectComponent title="Lorem ipsum dolor sit amet"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a vehicula nisl. Nunc feugiat leo eget lacus auctor placerat. Aenean feugiat luctus gravida. Vestibulum efficitur nibh libero, nec bibendum lacus mollis eu. Fusce at mauris ac ligula sollicitudin ultrices quis vel felis."
                            variant="right"
        />
    </div>           
    );
};
