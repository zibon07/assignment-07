
import Tickets from '../Ticket/Tickets';
import Tasks from '../Tasks/Tasks';
import { use } from 'react';

const Customer_section = ({ ticketPromise, handleVisitedCards, selectedTask,completeTask,resolovedTask }) => {
    // console.log(handleVisitedCards)
    const tickets = use(ticketPromise)
    // console.log(tickets)
    return (
        <div className='border-2 border-red-500 mt-10 w-312.5 mx-auto flex gap-15'>
            <Tickets
                tickets={tickets}
                handleVisitedCards={handleVisitedCards}
                ></Tickets>
            <Tasks
                selectedTask={selectedTask}
                completeTask={completeTask}
                resolovedTask={resolovedTask}></Tasks>
        </div>
    );
};

export default Customer_section;