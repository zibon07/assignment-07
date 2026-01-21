import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';


function App() {

  // const tickets = fetch("./Tickets.json")
  //   .then(res => res.json())
  //   .then(data => {
  //     // console.log(data)
  //   })
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
    </>
  )
}

export default App
