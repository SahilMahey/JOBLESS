import React from 'react'
import Card from '../../Components/Card.tsx'
import './Home.css'
const Home = (props) => {
  
  
  return (
    <div className="card-list">
    {
      props.array.map((element) => {
       return <Card key = {element._id} element = {element} fetchData={props.fetchData} setUpdate = {props.setUpdate} setModal = {props.setModal} setModaldata = {props.setModaldata} setId = {props.setId}/>
      })
      
    }
    </div>
  )
}

export default Home