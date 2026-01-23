import React from 'react';
import Task from '../Task/Task';
import ResolvedTask from '../Customer_section/ResolvedTask/ResolvedTask';

const Tasks = () => {
    return (
        <div className='mt-8 '>
           <h3 className='text-2xl text-center font-semibold'>Task Status</h3>
           <Task></Task>
           <h3 className='text-2xl text-center font-semibold'>Resolved Task</h3>
           <ResolvedTask></ResolvedTask>
        </div>
        
    );
};

export default Tasks;