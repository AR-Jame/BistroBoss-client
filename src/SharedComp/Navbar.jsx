import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const lgLiClass = 'text-lg hover:text-[#EEFF25] font-medium text-white cursor-pointer px-3 py-3 rounded-md transition-bg'
    const smLiClass = 'w-[250px] text-black hover:text-[#EEFF25] text-center bg-[#f1f1ef] py-2 transition-all cursor-pointer text-xl font-medium'
    return (
        <div className="z-10 fixed w-full top-0 bg-[rgba(21,21,21,0.47)] py-2">
            {/* for lg device */}
            <div className="hidden lg:block ">
                <div className='justify-between items-center mx-[7%] flex'>
                    <div>
                        <img src={logo} className='w-20 inline-block'/>
                    </div>
                    <ul className='flex gap-3'>

                        <>
                            <NavLink to='/'><li className={lgLiClass}>Home</li></NavLink>
                            <NavLink to='/menu'><li className={lgLiClass}>Menu</li></NavLink>
                            <NavLink to='/order'><li className={lgLiClass}>Order</li></NavLink>
                            <NavLink to='/login'><li className={lgLiClass}>Login</li></NavLink>
                            <NavLink to='/myPost'><li className={lgLiClass}>My Job Post</li></NavLink>

                        </>

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
                                <NavLink onClick={() => setIsOpen(false)} to='/myApplication'><li className={smLiClass}>login</li></NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to='/myPost'><li className={smLiClass}>My Job Post</li></NavLink>

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