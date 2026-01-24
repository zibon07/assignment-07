
import Tickets from '../Ticket/Tickets';
import Tasks from '../Tasks/Tasks';
// import { use } from 'react';

const Customer_section = ({ ticketList, handleVisitedCards, selectedTask, completeTask, resolvedTask }) => {
    // console.log(handleVisitedCards)
    // const tickets = use(ticketList)
    // console.log(tickets)
    return (
        <div className=' mt-10 md:w-312.5 mx-auto flex flex-col md:flex-row gap-15'>
            <Tickets
                tickets={ticketList}
                handleVisitedCards={handleVisitedCards}
            ></Tickets>
            <Tasks
                selectedTask={selectedTask}
                completeTask={completeTask}
                resolvedTask={resolvedTask}
                tickets={ticketList}></Tasks>
        </div>
    );
};

export default Customer_section;