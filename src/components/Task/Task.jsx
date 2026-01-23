import React from 'react';

const Task = () => {
    return (
        <div className='border-2 border-red-500 p-6'>
            <p>Select a ticket to add to Task Status</p>
            <div className='flex flex-col bg-gray-200 p-3 rounded-2xl '>
                <h2 className='font-semibold text-lg mb-3'>Payment Failed - Card Declined</h2>
                <button className='px-20 py-2  bg-green-600 text-white rounded-2xl'>Complete</button>
            </div>
        </div>
    );
};

export default Task;