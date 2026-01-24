import React from 'react';

const ResolvedTask = ({resolovedTask}) => {
    return (
        resolovedTask.map(task=>(<div className='border-2 border-red-500  p-6'>
            
            <div className='bg-gray-200 p-2 rounded-2xl'>
                <h3 className='font-semibold text-center text-lg '>{task.title}</h3>
            </div>
        </div>))
    );
};

export default ResolvedTask;