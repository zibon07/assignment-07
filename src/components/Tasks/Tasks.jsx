import React from 'react';
import Task from '../Task/Task';
import ResolvedTask from '../Customer_section/ResolvedTask/ResolvedTask';

const Tasks = ({ selectedTask,completeTask,resolovedTask}) => {

    // console.log(selectedTask)
    return (
        <div className='mt-8 '>
            <h3 className='text-2xl text-center font-semibold'>Task Status</h3>
            {
                selectedTask.length ==0 && <p className='mt-3'>Select a ticket to add to Task Status</p>
            }
            {
                selectedTask.map(task=><Task 
                    key={task.id} 
                    task={task}
                    completeTask={completeTask}></Task>)
            }
            <h3 className='text-2xl text-center font-semibold mt-3'>Resolved Task</h3>
            {
                resolovedTask.length==0 && <p>No resolved tasks yet.</p>
            }
            <ResolvedTask 
            resolovedTask={resolovedTask}
            ></ResolvedTask>
        </div>


    );
};

export default Tasks;