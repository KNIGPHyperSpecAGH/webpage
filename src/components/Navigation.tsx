import {NavLink} from "react-router";

export const Navigation = () => {
    return (
        <>
            <ul>
                <li><NavLink to="/">strona glowna</NavLink></li>
                <li><NavLink to="aktualnosci">aktualnosci</NavLink></li>
                <li><NavLink to="projekty">projekty</NavLink></li>
                <li><NavLink to="o-nas">o nas</NavLink></li>
                <li><NavLink to="osiagniecia">osiągnięcia</NavLink></li>
                <li><NavLink to="kontakt">kontakt</NavLink></li>
                <li><NavLink to="sponsorzy">sponsorzy</NavLink></li>
            </ul>
        </>
    );
};
