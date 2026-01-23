import React from 'react';

const Task = ({selectedTask}) => {
    return (
        <div className='border-2 border-red-500 p-6'>
            <p id='task-status'>Select a ticket to add to Task Status</p>
            {
                selectedTask.map((task)=>(<div className='flex flex-col bg-gray-200 p-3 rounded-2xl mb-3'>
                <h2 className='font-semibold text-center text-xl mb-3'>{task.title}</h2>
                <button className='px-20 py-2  bg-green-600 text-white rounded-2xl'>Complete</button>
            </div>))
            }
        </div>
    );
};

export default Task;