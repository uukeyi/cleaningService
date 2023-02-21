import React from "react";
import { useOrderPopup } from "../../contexts/orderPopupContext";
import BlueButton from "../BlueButton/BlueButton";
import styles from "./CalculatePrice.module.css";
const CalculatePrice = () => {
   const {
      container,
      contentContainer,
      textContainer,
      blueBtn,
      cardContainer,
      bgNote,
      bgPen,
      answerQusetionText
   } = styles;
   const {setIsOpenPrice} = useOrderPopup()
   return (
      <section className={container}>
         <div className="container">
            <div className={contentContainer}>
               <div className={textContainer}>
                  <p>Рассчитайте стоимость уборки</p>
                  <p className={answerQusetionText}>
                     за 3
                     <img
                        src="https://thumb.tildacdn.com/tild6630-6534-4966-b634-353836373936/-/cover/62x70/center/center/-/format/webp/fc2d95fc-e102-4576-a.png"
                        alt="#"
                     />
                     минуты и получите подарок
                  </p>
                  <img className={bgPen} src="https://thumb.tildacdn.com/tild3735-3036-4438-a633-623139326132/-/cover/181x178/center/center/-/format/webp/de587a03-f64a-4f36-9.png" alt="#" />
                  <img className={bgNote} src="https://thumb.tildacdn.com/tild6562-3861-4937-b137-326361393830/-/cover/312x376/center/center/-/format/webp/dc1c7f06-5a41-43b2-8.png" alt="#" />
               </div>
               <p  >
                  Ответьте на 7 простых вопросов и получите <br /> примерный
                  расчет стоимости уборки
               </p>
               <img
                  src="https://static.tildacdn.com/tild6464-3333-4133-b732-303965346266/55f044f2-7546-439a-8.svg"
                  alt="#"
               />
               <BlueButton setIsOpen={setIsOpenPrice} title={"Рассчитать стоимость"} className={blueBtn} />
               <p>Забирайте гарантированный бонус после рассчёта стоимости</p>
               <div className={cardContainer}>
                  {[
                     {
                        img: "https://thumb.tildacdn.com/tild6536-6464-4235-b566-643138316434/-/cover/208x117/center/center/-/format/webp/7dad915f-9e73-42c9-9.png",
                        width: "174px",
                        height: "98px",
                        title: "Скидка 5% на все услуги",
                     },
                     {
                        img: "https://thumb.tildacdn.com/tild3030-6230-4763-b439-363432656332/-/cover/80x132/center/center/-/format/webp/d7fa9ad2-b01f-4c08-a.png",
                        width: "67px",
                        height: "110px",
                        title: "Мойка холодильника",
                     },
                     {
                        img: "https://thumb.tildacdn.com/tild6134-3238-4839-b161-383765383334/-/cover/150x99/center/center/-/format/webp/1f4d653e-ae1a-425d-9.png",
                        width: "125px",
                        height: "83px",
                        title: "Чистка микроволновки",
                     },
                  ].map((card, index) => {
                     return (
                        <div key={index}>
                           <img
                              style={{ height: card.height, width: card.width }}
                              src={card.img}
                              alt="#"
                           />
                           <p>{card.title}</p>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default CalculatePrice;
