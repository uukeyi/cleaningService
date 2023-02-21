import React from "react";
import styles from "./BlueInfoBlock.module.css";

const BlueInfoBlock = ({ title, arr, subtitle, cardClassName , classContainer }) => {
   const {
      mainContainer,
      contentContainer,
      mainCard,
      textContainer,
      cardTitle,
      cardDesc,
      bgCard,
      mainTitle,
      mainSubtitle,
      mainTextContainer
   } = styles;
   return (
      <div className={`${mainContainer} ${classContainer}`}>
         <div className="container">
            {title && subtitle ? (
               <div className={mainTextContainer}>
                  <p className={mainTitle}>{title}</p>
                  <p className={mainSubtitle} >
                    {
                        subtitle
                    }
                  </p>
               </div>
            ) : null}

            <div className={contentContainer}>
               {arr.map((card, index) => {
                  return (
                     <div key={index} className={`${mainCard} ${cardClassName}`}>
                        <img src={card.img} alt="#" />
                        <div className={textContainer}>
                           <p className={cardTitle}>{card.title}</p>
                           <p className={cardDesc}>{card.desc}</p>
                        </div>
                        <div className={bgCard}></div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default BlueInfoBlock;
