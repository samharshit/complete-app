import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[data, setData] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:8080/')
      .then(res=>res.json())
      .then(data => {
      if(data) {
        if(data.length > 0) {
          setData(data)
        }
      }})    
      .catch(err=>console.log(err))
  },[])

  return (
    <>
    {data && data.length > 0 ? data.map((item) => {
      return(
        <div key={item.id} className="person-container">
        <h2>{item.first_name} {item.last_name}</h2>
        <h2>{item.email}</h2>
        <h2>{item.gender}</h2>
        <h2>{item.ip_address}</h2>
      </div>
      )
    }) : "loading..."}
    </>
  )
}

export default App
