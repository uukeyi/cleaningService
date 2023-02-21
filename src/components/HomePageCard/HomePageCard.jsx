import React from "react";
import styles from "./HomePageCard.module.css";
const HomePageCard = ({ img, title, text , isReverse }) => {
   const { card , cardTextContainer  , cardReverse} = styles;
   return (
      <div className={!isReverse ? card : cardReverse}>
         <img src={img} alt="#" />
         <div className={cardTextContainer} >
            <p style={{ fontWeight: "500", textTransform: "uppercase" }}>
               {title}
            </p>
            <p>{text}</p>
         </div>
      </div>
   );
};

export default HomePageCard;
