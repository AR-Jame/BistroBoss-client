import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AuthContext } from "../Authentication/AuthProvider";
import profile from '../assets/others/profile.png'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CiLogout } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import useCart from "../hooks/useCart";





const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const lgLiClass = 'text-lg hover:text-[#EEFF25] font-medium text-white cursor-pointer px-3 py-3 rounded-md transition-bg'
    const smLiClass = 'w-[250px] text-black hover:text-[#EEFF25] text-center bg-[#f1f1ef] py-2 transition-all cursor-pointer text-xl font-medium'

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
    }
    const auth = <>
        {
            user ?
                <>
                    <div className="z-50">
                        <Menu>
                            <MenuButton className={lgLiClass}><img src={profile} className="w-14 rounded-full" /></MenuButton>

                            <MenuItems
                                transition
                                anchor="bottom end"
                                className="w-52 z-50 origin-top-right rounded-xl border border-white/5 bg-[#5f5a5a9a] p-1 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                            >
                                <MenuItem>
                                    <p className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3">
                                        {user?.email}
                                    </p>
                                </MenuItem>
                                <MenuItem>
                                    <p className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3">
                                        {user?.displayName}
                                    </p>
                                </MenuItem>
                                <MenuItem>
                                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        <p onClick={handleLogOut} className="flex items-center text-lg justify-start gap-1 font-medium"><CiLogout /> Log out</p>
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </>
                :
                <>
                    <NavLink to='/login'><li className={lgLiClass}>Login</li></NavLink>
                </>

        }
    </>



    return (
        <div className="z-10 fixed w-full top-0 bg-[rgba(21,21,21,0.47)] py-2">
            {/* for lg device */}
            <div className="hidden lg:block ">
                <div className='flex justify-between items-center mx-[7%] '>
                    <div>
                        <img src={logo} className='w-20 inline-block' />
                    </div>
                    <ul className='flex gap-3 items-center'>
                        <NavLink to='/'><li className={lgLiClass}>Home</li></NavLink>
                        <NavLink to='/menu'><li className={lgLiClass}>Menu</li></NavLink>
                        <NavLink to='/order'><li className={lgLiClass}>Order</li></NavLink>
                        <NavLink to='/dashboard/cart'><li className={`flex items-center gap-1 ${lgLiClass}`}>My Cart <IoCartSharp /> <div className="badge badge-secondary">{cart.length}</div></li></NavLink>
                        {auth}
                    </ul>
                </div>
            </div>
            {/* for mobile device */}
            <div className='flex lg:hidden justify-between items-center mx-10'>
                <div>
                    <button onClick={toggleDrawer} className='text-2xl font-bold text-white'>x</button>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='left'
                    >
                        <ul className='flex flex-col justify-center items-center gap-3 h-1/2'>
                            <>
                                <NavLink onClick={() => setIsOpen(false)} to='/'><li className={`${smLiClass}`}><button>Home</button></li></NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to='/menu'><li className={smLiClass}>Menu</li></NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to='/order'><li className={smLiClass}>Order</li></NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to='/dashboard/cart'><li className={smLiClass}>My Job Post</li></NavLink>

                            </>
                        </ul>
                    </Drawer>
                </div>
                <div>
                    <img src={logo} className='w-20' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;