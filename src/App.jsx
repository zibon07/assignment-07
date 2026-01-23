import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import Customer_section from './components/Customer_section/Customer_section';
import React, { Suspense, useState } from 'react'



const fetchTickets = async () => {
  const res = await fetch("Tickets.json")
  return res.json()
}

const ticketPromise = fetchTickets()

function App() {
  const [clickedCards, setClickedCards] = useState([])

  const handleVisitedCards = (card) => {
    // console.log(card) //{...} 
    const newClickedCards = [...clickedCards, card]
    setClickedCards(newClickedCards)
    addTasks()
  }

  const addTasks = () => {
    console.log("add tasks clicked")
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner inProgress={clickedCards.length}></Banner>
      <Suspense fallback={"Tickets Data Coming"}>
        <Customer_section ticketPromise={ticketPromise}
          handleVisitedCards={handleVisitedCards}></Customer_section>
      </Suspense>
    </>
  )
}

export default App
