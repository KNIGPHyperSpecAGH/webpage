import {createHashRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import {MainPage} from "./pages/MainPage.tsx";
import {ProjectsPage} from "./pages/ProjectsPage.tsx";
import {NewsPage} from "./pages/NewsPage.tsx";
import {AboutPage} from "./pages/AboutPage.tsx";
import {AchievementsPage} from "./pages/AchievementsPage.tsx";
import {ContactPage} from "./pages/ContactPage.tsx";
import {SponsorsPage} from "./pages/SponsorsPage.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";


const router = createHashRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {index: true, element: <MainPage/>},
            {path: "projekty", element: <ProjectsPage/>},
            {path: "aktualnosci", element: <NewsPage/>},
            {path: "o-nas", element: <AboutPage/>},
            {path: "osiagniecia", element: <AchievementsPage/>},
            {path: "kontakt", element: <ContactPage/>},
            {path: "sponsorzy", element: <SponsorsPage/>},
            /* Więcej podstron */
        ],
        errorElement: <ErrorPage/>,
    },
]);

function App() {
    return <RouterProvider router={router}/>
}

export default App
