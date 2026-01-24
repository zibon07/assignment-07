import React from 'react';

const Task = ({task,completeTask}) => {

    const handleComplete =()=>{
        completeTask(task)
    }
    return (
        // <div className='border-2 border-red-500 p-6'>
            <div className='flex flex-col bg-gray-200 p-3 rounded-2xl mt-3'>
                <h2 className='font-semibold text-center text-xl mb-3'>{task.title}</h2>
                <button onClick={handleComplete} className='px-20 py-2  bg-green-600 text-white rounded-2xl'>Complete</button>
            </div>
        
    );
};

export default Task;