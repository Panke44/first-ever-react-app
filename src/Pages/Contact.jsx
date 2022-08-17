import React from 'react'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardHolder from '../Components/CardHolder'
import Card from '../Components/Card'
import Button from '../Components/Button'


const Contact = () => {

  return (
    <div>
        <Navbar/>
        <Title naslov="Kontakt"/>

        <CardHolder>
          <Card>
            <h3>Truck Sale</h3>
            <p>Looking to lease, rent or buy a truck? See what we have available for you.</p>
            <Button btn="Check inventory"></Button>
          </Card>

          <Card>
            <h3>Driver application</h3>
            <p>We are hiring owner operators, Company drivers & Team drivers.</p>
            <Button btn="Apply now"></Button>
          </Card>
          
          <Card>
            <h3>Cover Your Load</h3>
            <p>Looking for a carrier that can safely move your freight? Send us your offer.</p>
            <Button btn="Request a quote"></Button>
          </Card>
          

        </CardHolder>
    </div>
  )
}

export default Contact