import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import Customer_section from './components/Customer_section/Customer_section';
import React, { Suspense, useState } from 'react'
import ResolvedTask from './components/Customer_section/ResolvedTask/ResolvedTask';



const fetchTickets = async () => {
  const res = await fetch("Tickets.json")
  return res.json()
}

const ticketPromise = fetchTickets()

function App() {
  const [clickedCards, setClickedCards] = useState([])
  const [selectedTask, setSelectedTask] = useState([])
  const [resolovedTask, setResolvedTask] = useState([])
  const handleVisitedCards = (card) => {
    // console.log(card) //{...} 
    const newClickedCards = [...clickedCards, card]
    setClickedCards(newClickedCards)
    setSelectedTask([...selectedTask, card])
    // document.getElementById("task-status").style.display = "none"
  }

  const completeTask = (task) => {
    // console.log(task)
    const notResolvedTasks = selectedTask.filter((resTask) => resTask.id !== task.id)
    console.log(notResolvedTasks)
    setSelectedTask(notResolvedTasks)
    setResolvedTask([...resolovedTask, task])
    // console.log(reslovedTask)
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner inProgress={clickedCards.length}></Banner>
      <Suspense fallback={"Tickets Data Coming"}>
        <Customer_section
          ticketPromise={ticketPromise}
          handleVisitedCards={handleVisitedCards}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          completeTask={completeTask}
          resolovedTask={resolovedTask}></Customer_section>
      </Suspense>
    </>
  )
}

export default App
