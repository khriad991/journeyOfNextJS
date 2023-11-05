'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const LinkCom = ({href, value}) => {
    const currentPath = usePathname()
    return (
        <Link href={href}
              className={currentPath === href ? `capitalize text-lg font-[500] hover:text-purple-900 mt-0 border-b-[1px] border-blue-600 bg-cyan-100 w-full px-5 py-1.5 transition-all duration-300`:`hover:text-purple-900 hover:bg-cyan-200 hover:drop-shadow capitalize text-black font-[500] w-full px-6 py-1.5 transition-all duration-300`} >
            {value}
        </Link>
    );
};

export default LinkCom;