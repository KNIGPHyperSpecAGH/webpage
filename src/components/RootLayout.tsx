import {Outlet} from "react-router";
import * as React from "react";
import {Navigation} from "./Navigation.tsx";

interface props {
    children?: React.ReactNode;
}

export const RootLayout = ({children}: props) => {
    return (
        <>
            <Navigation/>

            <hr/>
            {children ? {children} : null}

            {<Outlet/>}
        </>
    );
};
