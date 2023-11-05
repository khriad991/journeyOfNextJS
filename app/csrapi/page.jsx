import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Content from "@/components/Content/Content";

const Page = () => {
    return (

        <div>
            <div >
                <Navbar />
            </div>
            <div className="flex justify-between items-center p-1 gap-x-2">
                <Sidebar/>
                <Content>



                </Content>
            </div>
        </div>
    );
};

export default Page;