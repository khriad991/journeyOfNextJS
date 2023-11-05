import React from 'react';
import Link from "next/link";
import LinkCom from "@/components/MiniComponets/LinkCom";

const Sidebar = () => {
    return (
        <div className='flex-[1] h-screen bg-slate-50 border-gray-300 flex items-center -mt-1 py-2 flex-col gap-y-3 border-r-[20px] border-gray-100 snap-y  '>
            <h1 className='w-full font-bold text-xl text-center text-violet-800 bg-cyan-300 -mt-2 mb-5 py-3'>
                Al Use Case
            </h1>
            <LinkCom href='/loading' value='loading' />
            <LinkCom href='/csrapi' value='CSR API Randaring' />
        </div>
    );
};

export default Sidebar;