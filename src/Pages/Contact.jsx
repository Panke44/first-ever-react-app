import React from 'react'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardHolder from '../Components/CardHolder'
import Card from '../Components/Card'
import Button from '../Components/Button'
import RedButton from '../Components/RedButton'
import DoubleText from '../Components/DoubleText'

import img1 from '../Images/box.jpg'
import img2 from '../Images/dog.jpg'
import img3 from '../Images/handball.jpg'

const Contact = () => {

  return (
    <div>
      <Navbar />
      <Title> <h4> Contact </h4> </Title>

      <CardHolder>
        <Card cardImg={img1} >
          <h3>Truck Sale</h3>
          <p>Looking to lease, rent or buy a truck? See what we have available for you.</p>
          <RedButton btn="Check inventory" link="/truck-sale" alt="Box Truck"></RedButton>
        </Card>

        <Card cardImg={img2}>
          <h3>Driver application</h3>
          <p>We are hiring owner operators, Company drivers & Team drivers.</p>
          <Button btn="Apply now" link="/contact" alt="Dog on truck"></Button>
        </Card>

        <Card cardImg={img3}>
          <h3>Cover Your Load</h3>
          <p>Looking for a carrier that can safely move your freight? Send us your offer.</p>
          <Button btn="Request a quote" link="/request" alt="Handball team"></Button>
        </Card>

      </CardHolder>
      <DoubleText
        header1="header" paragraph1="
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit architecto minus unde eius corporis laborum amet, doloribus molestias tenetur accusamus!" 
        header2="header" paragraph2="
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit architecto minus unde eius corporis laborum amet, doloribus molestias tenetur accusamus!">
      </DoubleText>
    </div>
  )
}

export default Contact