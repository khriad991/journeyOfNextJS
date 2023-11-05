"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {GrClose} from "react-icons/gr";
import {TfiMenu} from "react-icons/tfi";

const Navbar = () => {
    const [open,close] = useState(true)
    const handle = () => {
        close(!open)
    }
    return (
        <nav className='sm:bg-cyan-50 sm:px-4 lg:px-8 py-3 sticky top-0 drop-shadow-xl relative '>
            <div className="w-full flex justify-between item-cente ">
                <div className="flex-1 hidden md:block">
                    <strong className='font-extrabold tracking-[4px] text-3xl text-violet-700 '>LoGo</strong>
                </div>
                <div className={open === true ? "flex-2 hidden sm:flex items-center" +
                    " sm:flex-row flex-col gap-x-8 gap-y-5 sm:gap-y-0":"flex-2" +
                    " flex items-center sm:flex-row flex-col gap-x-8 gap-y-5 sm:gap-y-0"}>
                        <Link className='bg-cyan-200 flex font-bold px-8 p-1.5 rounded-md sm:flex justify-evenly items-center hover:bg-cyan-400 transition-all duration-300 text-gray-800 mt-6 sm:mt-0' href='/'>
                            Home
                        </Link>
                        <Link className='bg-cyan-200 flex font-bold px-8 p-1.5 rounded-md sm:flex justify-evenly items-center hover:bg-cyan-400 transition-all duration-300 text-gray-800' href='/about'>
                            About
                        </Link>
                        <Link className='bg-cyan-200 flex font-bold px-8 p-1.5 rounded-md sm:flex justify-evenly items-center hover:bg-cyan-400 transition-all duration-300 text-gray-800 ' href='/contact'>
                            Contact
                        </Link>
                </div>

            </div>
            <button onClick={handle} className="flex-1 sm:hidden absolute top-0 right-0">
                {open=== true ? <TfiMenu size={30} />:<GrClose size={30}/>}
            </button>
        </nav>
    );
};

export default Navbar;