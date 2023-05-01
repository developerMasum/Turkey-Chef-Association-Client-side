import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "../../../assets/pasa.css";

const ChefCard = ({singleChef}) => {
    const {likes,chefName,chefPicture,numRecipes,yearsOfExperience,} = singleChef;
    return (
    
        
        <div className='text-center mx-auto'>
          <Card className='width'>
            <Card.Img variant="top" src={chefPicture} />
            <Card.Body>
              <Card.Title>{chefName}</Card.Title>
              <Card.Text>
               <p className='mb-0'>Recipes:{numRecipes}</p>
               <p className='mb-0'>Experiences:{yearsOfExperience}</p>
               <p className='mb-0 ' >Likes:{likes}</p>
              </Card.Text>
              <Button className='hover:' variant="warning">View Recipes</Button>
            </Card.Body>
          </Card>
        </div>
    
    );
};

export default ChefCard;