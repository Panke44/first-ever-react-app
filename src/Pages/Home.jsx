import React from 'react'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardHolder from '../Components/CardHolder'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Title> <h4> Home </h4> </Title>
        <CardHolder/>
    </div>
  )
}

export default Home