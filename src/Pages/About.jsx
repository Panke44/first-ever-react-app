import React from 'react'
import Navbar from '../Components/Navbar';
import Title from '../Components/Title'
import CardHolder from "../Components/CardHolder";

const About = () => {
  return (
    <div>
        <Navbar/>
        <Title naslov="About Us"/>
        <CardHolder/>
    </div>
  )
}

export default About