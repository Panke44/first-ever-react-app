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
          <Card></Card>
        </CardHolder>
    </div>
  )
}

export default Contact