import React from 'react'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardHolder from '../Components/CardHolder'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Title naslov="Home"/>
        <CardHolder/>
    </div>
  )
}

export default Home