import React from 'react'
import Navbar from '../Components/Navbar';
import Title from '../Components/Title'
import CardHolder from "../Components/CardHolder";
import Card from "../Components/Card";
import RedButton from '../Components/RedButton';
import Button from '../Components/Button';

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
            <RedButton btn="Check inventory" link="/truck-sale" alt="Box Truck"></RedButton>
          </Card>

          <Card cardImg={chicago}>
            <h3> Chicagoland </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id, recusandae tempore dignissimos cumque pariatur.</p>
          </Card>
          
          <Card cardImg={lasvegas}>
            <h3> Las Vegas </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id, recusandae tempore dignissimos cumque pariatur.</p>
          </Card>

        </CardHolder>
    </div>
  )
}

export default About