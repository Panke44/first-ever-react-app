import React from 'react'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardHolder from '../Components/CardHolder'
import Card from '../Components/Card'
import Button from '../Components/Button'

import img1 from '../Images/box.jpg'
import img2 from '../Images/dog.jpg'
import img3 from '../Images/handball.jpg'


const Contact = () => {

  return (
    <div>
        <Navbar/>
        <Title naslov="Kontakt"/>

        <CardHolder>
          <Card cardImg={img1} >
            <h3>Truck Sale</h3>
            <p>Looking to lease, rent or buy a truck? See what we have available for you.</p>
            <Button btn="Check inventory" link="/truck-sale" alt="Box Truck"></Button>
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
    </div>
  )
}

export default Contact