import React from 'react';

const ResolvedTask = ({ resolovedTask }) => {
    return (
        resolovedTask.map(task => (<div key={task.id} className='p-2'>

            <div className='bg-gray-200 p-2 rounded-lg'>
                <h3 className='font-semibold text-center text-lg '>{task.title}</h3>
            </div>
        </div>))
    );
};

export default ResolvedTask;