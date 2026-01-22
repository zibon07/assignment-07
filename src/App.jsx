import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import Customer_section from './components/Customer_section/Customer_section';
import React, { Suspense } from 'react'


const fetchTickets = async ()=>{
  const res = await fetch("Tickets.json")
  return res.json()
}
function App() {
  const ticketPromise = fetchTickets()
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={"Tickets Data Coming"}>
        <Customer_section ticketPromise={ticketPromise}></Customer_section>
      </Suspense>
    </>
  )
}

export default App
