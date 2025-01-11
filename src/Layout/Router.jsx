import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import MainMenu from "../Pages/Menu/MainMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <MainMenu />
            },
            {
                path: '/order',
                element: <Order />
            },
            {
                path: '/login',
                element: <Login />
            },

        ]
    }
])
export default router