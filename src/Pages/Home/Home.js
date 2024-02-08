import React from 'react'
import Card from '../../Components/Card.tsx'
import './Home.css'
const Home = (props) => {
  
  return (
    <div className="card-list">
    {
      props.array.map((element) => {
       return <Card key = {element.RejectionTime} element = {element}/>
      })
      
    }
    </div>
  )
}

export default Home