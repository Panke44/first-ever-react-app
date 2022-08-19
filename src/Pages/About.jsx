import React from 'react'
import Navbar from '../Components/Navbar';
import Title from '../Components/Title'
import CardHolder from "../Components/CardHolder";
import Card from "../Components/Card";
import BuyTicketsButton from '../Components/BuyTicketsButton';
import DoubleText from '../Components/DoubleText'

import nyc from "../Images/nyc.jpg";
import chicago from "../Images/chicago.jpg";
import lasvegas from "../Images/lasvegas.jpg";

const About = () => {
  return (
    <div>
        <Navbar/>
        <Title> <h4> About us </h4> </Title>
        <CardHolder>
          <Card cardImg={nyc}>
            <h3> New York City</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id, recusandae tempore dignissimos cumque pariatur.</p>
            <BuyTicketsButton link="/new-york-city"/>
          </Card>

          <Card cardImg={chicago}>
            <h3> Chicagoland </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id, recusandae tempore dignissimos cumque pariatur.</p>
            <BuyTicketsButton link="/chicago"/>
          </Card>
          
          <Card cardImg={lasvegas}>
            <h3> Las Vegas </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id, recusandae tempore dignissimos cumque pariatur.</p>
            <BuyTicketsButton link="/las-vegas"/>
          </Card>

        </CardHolder>

        <DoubleText 
        header1="Header One"
        header2="Header Two"
        paragraph1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, facere?" 
        paragraph2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, facere?"
        />
    </div> 
  )
}

export default About