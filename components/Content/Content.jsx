import React from 'react';

const Content = ({heading="use case of loading "}) => {
    return (
        <div className='flex-[4] h-screen p-2 '>
            <h1 className='text-2xl font-bold capitalize  py-2 text-violet-600 px-1'>{heading}</h1>
        </div>
    );
};

export default Content;