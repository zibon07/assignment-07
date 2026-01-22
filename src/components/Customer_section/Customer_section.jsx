import React, { use } from 'react';
import Tickets from '../Ticket/Tickets';
import Tasks from '../Tasks/Tasks';

const Customer_section = ({ticketPromise}) => {
    const tickets = use(ticketPromise)
    // console.log(tickets)
    return (
        <div className='border-2 border-red-500 mt-10 w-312.5 mx-auto flex '>
            <Tickets tickets={tickets}></Tickets>
            <Tasks></Tasks>
        </div>
    );
};

export default Customer_section;