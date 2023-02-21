import React, {  useState } from "react";
import { getAnswerQuiz } from "../../../../utlis/getAnswerQuiz";
import styles from "./ImageQuestion.module.css";

const ImageQuestion = ({ arr , indexElement , setIndexElement  , setData , data , prefix}) => {
   const { mainContainer, mainTitle, cardContainer, mainCard } = styles;
   return (
      <div className={mainContainer}>
         <p className={mainTitle}>
            Выберите тип помещения, которое нуждается в уборке
         </p>
         <div className={cardContainer} data-aos="fade-down">
            {arr.map((card, index) => {
               return (
                  <div
                     onClick={() => {
                       getAnswerQuiz(data , setData , card.title , prefix)
                       setIndexElement(index)
                     }}
                     key={index}
                     style = {{
                        border : index === indexElement ? ' 2px solid #46dee9 ' : ' 1px solid #c7f7ff '
                     }}
                     className={mainCard}
                  >
                     <img src={card.img} alt="#" />
                     <p>{card.title}</p>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default ImageQuestion;
