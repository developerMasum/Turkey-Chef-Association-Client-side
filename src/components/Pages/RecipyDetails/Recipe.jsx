import React, { useState } from "react";
import { useRef } from "react";
import { Card } from "react-bootstrap";
import {FaRegStar, FaStar } from "react-icons/fa";
import {MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import Rating from "react-rating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ singleRecipe }) => {
 
  let btnRef = useRef();


  const handleLike=()=>{

    toast("added to favorite!");
    

  }
  const { recipeName, ingredients, cookingMethod, rating,recipeImg } = singleRecipe;
  return (
    <div>
      <div className="mt-3">
        <div className=" mx-auto">
          <Card style={{height:'550px'}} className="relative">
            <Card.Body>
              <Card.Title className="d-flex"> <p>{recipeName}</p> <MdOutlineFavoriteBorder  id="fvt" className="flex-grow-1"  ref={btnRef} onClick={handleLike} style={{cursor:'pointer'}} /> </Card.Title>
            
              <Card.Img variant="top" src={recipeImg} />
              <Card.Text>
                <p>
                  {" "}
                  <span className="text-danger fw-bold">Ingredients:</span>{" "}
                  {ingredients}
                </p>

                <p className=" mb-0">
                  {" "}
                  <span className="text-danger fw-bold">
                    Cooking Method:{" "}
                  </span>{" "}
                  {cookingMethod}
                </p>

                <div className=" text-center position-absolute bottom-0 end-50 mb-3">
                  <Rating
                    readonly
                    className="text-success"
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar> </FaStar>}
                    fullSymbol={<FaStar> </FaStar>}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
       
        </div>
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default Recipe;
