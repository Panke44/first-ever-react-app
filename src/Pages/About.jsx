import React from 'react'
import Navbar from '../Components/Navbar';
import Title from '../Components/Title'
import CardHolder from "../Components/CardHolder";
import Card from "../Components/Card";

const About = () => {
  return (
    <div>
        <Navbar/>
        <Title naslov="About Us"/>
        <CardHolder>
          <Card></Card>  
        </CardHolder>
    </div>
  )
}

export default About