import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';

const RatingBox = ({handleStars}) => {
  const [rating, setRating] = useState(0);
  // const [NewRating , NewSetRating] = useState(0);


  const changeRating = (newRating) => {
    setRating(newRating);
    handleStars(newRating);
    // You can handle the rating change here
  };


  const colorMode = useSelector((state) => state.theme.theme);


  // console.log(rating);

  return (
    <div className=' font-irSans '>
      
      <StarRatings
        rating={rating}
        starRatedColor="orange"
        changeRating={changeRating}
        numberOfStars={5}
        starDimension="30px"
        starSpacing="5px"
        starHoverColor="#d4a373"
        starEmptyColor= {colorMode === "dark" ?        "#eae0d5" :                  "#E6E6E6"}
        
        halfStars
      />
      
    </div>
  );
};

export default RatingBox;