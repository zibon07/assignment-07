import React from 'react';

const Banner = ({ inProgress}) => {
    return (
        <div className='w-312.5 mt-6 mx-auto flex justify-between gap-6 '>
            <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-1/2 h-62.5 rounded-xl text-white flex  flex-col justify-center items-center'>
                <h4 className='text-3xl'>In-Progress</h4>
                <h1 className='text-6xl mt-3 font-bold'>{inProgress}</h1>
            </div>
            <div className='bg-linear-to-r from-[#54CF68] to-[#00827A] w-1/2 h-62.5 rounded-xl text-white flex  flex-col justify-center items-center'>
                <h4 className='text-3xl'>Resolved</h4>
                <h1 className='text-6xl mt-3 font-bold'>0</h1>
            </div>
        </div>
    );
};

export default Banner;