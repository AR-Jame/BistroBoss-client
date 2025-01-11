import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import MainMenu from "../Pages/Menu/MainMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoard from "./DashBoard";
import Cart from "../Pages/UserDashboard/Cart";

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
            {
                path: '/register',
                element: <Register />
            },

        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard />,
        children: [
            {
                path: '/dashboard/cart',
                element: <Cart />
            }
        ]
    }
])
export default router