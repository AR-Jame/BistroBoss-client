import { IoMdHome } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiJusticeStar,GiHamburgerMenu  } from "react-icons/gi";
import { CiGrid31 } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";

import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import useCart from "../hooks/useCart";
const SideNav = () => {
    const [cart] = useCart()
    return (
        <div className="min-h-screen bg-[#D1A054] py-5 cinzel">
            <div className='mb-10 px-10'>
                <img src={logo} className='w-24 mx-auto mb-3' />
                <h1 className='font-bold text-xl'>BISTRO BOSS</h1>
                <p className='tracking-[4px] font-semibold'>Restaurant</p>
            </div>
            <div className="flex flex-col gap-2 items-start ml-8">
                <div>
                    <NavLink className="flex items-center gap-1 justify-center text-lg font-semibold py-2 hover:text-white active:text-white">
                        <IoMdHome />User Home
                    </NavLink>
                </div>
                <div>
                    <NavLink className="flex items-center gap-1 justify-center text-lg font-semibold py-2 hover:text-white active:text-white">
                        <SlCalender />RESERVATION
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/dashboard/cart' className="flex items-center gap-1 justify-center text-lg font-semibold py-2 hover:text-white active:text-white">
                        <RiSecurePaymentFill />MY CART ({cart.length})
                    </NavLink>
                </div>
                <div>
                    <NavLink className="flex items-center gap-1 justify-center text-lg font-semibold py-2 hover:text-white active:text-white">
                        <GiJusticeStar />ADD REVIEW
                    </NavLink>
                </div>
                <div>
                    <NavLink className="flex items-center gap-1 justify-center text-lg font-semibold py-2 hover:text-white active:text-white">
                        <CiGrid31 />MY BOOKING
                    </NavLink>
                </div>
            </div>
            <hr className="px-5 mx-4 my-8 border-t-2" />
            <div className="flex flex-col gap-2 items-start ml-8">
                <NavLink to='/' className="flex items-center gap-1 justify-center text-lg font-semibold py-2 hover:text-white active:text-white">
                    <IoMdHome />Home
                </NavLink>
                <NavLink to='/menu' className="flex items-center gap-1 justify-center text-lg font-semibold py-2 hover:text-white active:text-white">
                    <GiHamburgerMenu />MENU
                </NavLink>
                <NavLink to='/order' className="flex items-center gap-1 justify-center text-lg font-semibold py-2 hover:text-white active:text-white">
                    <FaShoppingBag />ORDER
                </NavLink>
            </div>

        </div>
    );
};

export default SideNav;