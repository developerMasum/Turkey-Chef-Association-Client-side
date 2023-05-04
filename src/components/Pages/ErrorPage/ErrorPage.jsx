import React from 'react'
import { Button, Card } from 'react-bootstrap'
import img from '../../../assets/ErrorPage.png'
import {  Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
 
  return (
    <Card className="bg-dark text-white">
    <Card.Img src={img} alt="Card image" />
    <Card.ImgOverlay>



      
 
    
    </Card.ImgOverlay>
  </Card>
  )
}

export default ErrorPage;