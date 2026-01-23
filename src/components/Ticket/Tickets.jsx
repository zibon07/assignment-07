import React from 'react';
import calenderImg from '../../assets/calender.png'

const Tickets = ({ tickets, handleVisitedCards }) => {
    // console.log(handleVisitedCards)
    // console.log(tickets)
    return (
        <div className=''>
            <h3 className='text-2xl mt-3 font-semibold'>Customer Tickets</h3>
            <div className='grid grid-cols-2 mt-8 gap-3'>
                {
                    tickets.map(ticket => (<div key={ticket.id} onClick={()=>handleVisitedCards(ticket)} className='w-full bg-gray-200 p-4 rounded-2xl grid '>
                        <div className='flex justify-between mt-3 items-center '>
                            <h4 className='text-xl font-semibold'>{ticket.title}</h4>
                            <button className='btn bg-green-300 rounded-4xl'>{ticket.priority}</button>
                        </div>
                        <p className='mt-3 font-semibold text-gray-700'>{ticket.description}</p>
                        <div className='flex mt-3  justify-between items-center'>
                            <div className='flex mt-3 items-center'>
                                <p>#{ticket.id}</p>
                                <h5 className='text-md ml-2 font-semibold'>{ticket.priority}</h5>
                            </div>
                            <div className='flex  mt-3 items-center gap-3'>
                                <p>{ticket.customer}</p>
                                <div className='flex items-center'>
                                    <img className='w-5 h-5' src={calenderImg} alt="" />
                                    <p>{ticket.createdAt}</p>
                                </div>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Tickets;