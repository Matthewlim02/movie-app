import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';

const Rating = () => {
    const [rating, setRating] = useState(null);
        return(
          <div>
            {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
                <label id="starRating">
                    <input 
                    type="radio" 
                    name="rating" 
                    id="starbuttons" 
                    value={ratingValue}
                    onClick = {() => setRating(ratingValue)}
                    />
                    <FaStar className="star" color={ratingValue <= rating ? "#e8e107" : "#b8b8b5" } size={30} />
                </label>
              );
          })}
        </div>
  );  
};

export default Rating;