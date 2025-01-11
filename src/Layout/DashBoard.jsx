import { Outlet } from "react-router-dom";
import SideNav from "../SharedComp/SideNav";

const DashBoard = () => {
    return (
        <div className="flex">
            <div>
                <SideNav />
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;