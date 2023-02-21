import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TypesOfCleaningCard.module.css";
import { NavLink } from "react-router-dom";
import { useOrderPopup } from "../../contexts/orderPopupContext";
const TypesOfCleaningCard = ({
   img,
   title,
   desc,
   avTime,
   amWorkers,
   price,
   prevPrice,
   path,
}) => {
   const {
      card,
      cardImgContainer,
      cardTitle,
      cardDesc,
      cardInfoContainer,
      cardPriceContainer,
      cardActionContainer,
   } = styles;
   const { setIsOpen } = useOrderPopup();
   const navigate = useNavigate();
   return (
      <div
         onClick={() => {
            navigate(`/${path}`);
         }}
         className={card}
         style={{ cursor: "pointer" }}
      >
         <div className={cardImgContainer}>
            <img src={img} alt="#" />
         </div>
         <p className={cardTitle}>{title}</p>
         <p className={cardDesc}>{desc}</p>
         <div className={cardInfoContainer}>
            <p>
               <strong>Среднее время уборки &nbsp;</strong>
               <span>{avTime}</span>
            </p>
            <p>
               <strong>Количество уборки &nbsp;</strong>
               <span>{amWorkers}</span>
            </p>
         </div>
         <div className={cardPriceContainer}>
            <p>{price}</p>
            <p>{prevPrice}</p>
         </div>
         <div className={cardActionContainer}>
            <NavLink to={`/${path}`}>Подробнее об услуге</NavLink>
            <button
               onClick={() => {
                  setIsOpen(true);
               }}
            >
               Заказать
            </button>
         </div>
      </div>
   );
};

export default TypesOfCleaningCard;
