import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import Customer_section from './components/Customer_section/Customer_section';
import React, { Suspense, useEffect, useState } from 'react'
import ResolvedTask from './components/Customer_section/ResolvedTask/ResolvedTask';
import { ToastContainer,toast} from 'react-toastify';



// const fetchTickets = async () => {
//   const res = await fetch("Tickets.json")
//   return res.json()
// }



// const ticketPromise = fetchTickets()

function App() {
  const [clickedCards, setClickedCards] = useState([])
  const [selectedTask, setSelectedTask] = useState([])
  const [resolvedTask, setResolvedTask] = useState([])
  const [ticketList,setTicketList]=useState([])

useEffect(()=>{
fetch("Tickets.json")
.then(res=>res.json())
.then(tickets=>setTicketList(tickets))
},[])

  const handleVisitedCards = (card) => {
    // console.log(card) //{...} 
    toast("Ticket Added To Tasks")
    const newClickedCards = [...clickedCards, card]
    setClickedCards(newClickedCards)
    setSelectedTask([...selectedTask, card])
    // document.getElementById("task-status").style.display = "none"
  }

  const completeTask = (task) => {
    // console.log(task)
    toast("Task Completed")
    const notResolvedTasks = selectedTask.filter((resTask) => resTask.id !== task.id)
    // console.log(notResolvedTasks)
    setSelectedTask(notResolvedTasks)
    setResolvedTask([...resolvedTask, task])
    const removedTicket =ticketList.filter((ticket)=>ticket.id!==task.id)
    console.log(removedTicket)
    // console.log(reslovedTask)
    setTicketList(removedTicket)
    


  }

  return (
    <>
      <Navbar></Navbar>
      <Banner inProgress={selectedTask.length}
      resolvedTask={resolvedTask}></Banner>
      <Suspense fallback={"Tickets Data Coming"}>
        <Customer_section
          ticketList={ticketList}
          handleVisitedCards={handleVisitedCards}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          completeTask={completeTask}
          resolvedTask={resolvedTask}></Customer_section>
      </Suspense>
      <ToastContainer />
    </>
  )
}

export default App
