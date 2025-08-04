import {Outlet, useMatches} from "react-router";
import * as React from "react";
import {Navigation} from "./Navigation.tsx";
import {Button} from "./Button.tsx";
import {Footer} from "./Footer.tsx";

interface RootProps {
    children?: React.ReactNode;
}

export const RootLayout = ({children}: RootProps) => {
    const matches = useMatches();
    const isRootPath = matches.every(match => match.pathname === '/');

    return (
        <>
            <Navigation showLogo={!isRootPath}/>
            <hr/>
            {children ? {children} : null}
            {<Outlet/>}
            <Footer/>
        </>
    );
};
