import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../SharedComp/Navbar";

const Root = () => {
    const location = useLocation();
    const isNav = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {isNav || <Navbar />}
            <Outlet />
        </div>
    );
};

export default Root;