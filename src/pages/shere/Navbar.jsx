import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars,FaRegUserCircle,FaTimes } from 'react-icons/fa';
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="jm_container py-5">
            <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center'>
                <h1 className='text-4xl lg:col-span-2'><Link to="/"><span className='font-serif text-5xl text-pink-500'>J</span>m <span className='font-serif text-5xl text-pink-500'>M</span>art</Link></h1>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-pink-400" : "hover:text-pink-400" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-pink-400" : "hover:text-pink-400" } to="/shop">Shop</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-pink-400" : "hover:text-pink-400" } to="/products">Products</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-pink-400" : "hover:text-pink-400" } to="/blogs">Blog</NavLink></li>
                    </ul>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7 items-center'>
                        <li><button to="/"><IoSearchSharp className="text-2xl" /></button></li>
                        <li><NavLink to="/cart" ><IoCartOutline className="text-2xl" /></NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-pink-400" : "" } to="/user"><FaRegUserCircle className="text-2xl" /></NavLink></li>
                    </ul>
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes/> : <FaBars/>}</button>
            </nav>
        </div>
    );
};

export default Navbar;
