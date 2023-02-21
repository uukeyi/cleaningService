import React from "react";
import { useOrderPopup } from "../../contexts/orderPopupContext";
import BlueButton from "../BlueButton/BlueButton";
import styles from "./FeedbackFooter.module.css";
const FeedbackFooter = () => {
   const {
      mainContainer,
      socialLinksContainer,
      mainTitle,
      vkLink,
      feedbackContainer,
      container,
      iconContainer,
      mainBlueBtn,
      btnContainer,
      textContainer,
   } = styles;
   const { setIsOpen , setIsOpenPrice } = useOrderPopup();
   return (
      <div className={mainContainer}>
            <div className={textContainer}>
               <p>
                  <p style={{ textAlign: "center" }} className={mainTitle}>
                     Занимайтесь важными делами, <br />
                     <strong>а уборку доверьте профессионалам!</strong>
                  </p>
               </p>
               <div className={btnContainer}>
                  <BlueButton
                     title={"Узнать стоимость"}
                     className={mainBlueBtn}
                     setIsOpen = {setIsOpenPrice}
                  />
                  <img
                     src="https://thumb.tildacdn.com/tild6438-3761-4134-b535-663465383634/-/cover/79x91/center/center/-/format/webp/photo.png"
                     alt="#"
                  />
               </div>
            </div>
         <div className={`container ${container}`}>
            <div className={socialLinksContainer}>
               <p className={mainTitle}>
                  <strong>Следите за нами </strong> в соцсетях
               </p>
               <p>Смотрите больше работ, отзывов, и жизни команды</p>
               <div>
                  <a href="https://vk.com/zamermontazh_msc" className={vkLink}>
                     <img
                        src="https://static.tildacdn.com/tild6333-3861-4362-b965-663038623337/449429d7ed748f6be09e.svg"
                        alt="#"
                     />
                  </a>
               </div>
            </div>
            <div className={feedbackContainer}>
               <p className={mainTitle}>
                  <strong>Свяжитесь с нами, </strong>удобным для вас способом:
               </p>
               <div>
                  <div className={iconContainer}>
                     <img
                        src="https://static.tildacdn.com/tild3465-3138-4361-b939-343239653166/61dafce550a2550c6f60.svg"
                        alt="phone"
                     />
                     <a href="tel:+79654066644">+7 (965) 406-66-44</a>
                  </div>
                  <div className={iconContainer}>
                     <img
                        src="https://static.tildacdn.com/tild6431-3935-4466-b766-633663333638/8d5122af9c19d0b6ef39.svg"
                        alt="mail"
                     />
                     <a href="mailto: lucidezza@mail.ru">lucidezza@mail.ru</a>
                  </div>

                  <a href="https://wa.me/79654066644" className={iconContainer}>
                     <img
                        src="https://static.tildacdn.com/tild6164-3137-4865-b165-633739316562/f40fba1c99e24aef1b81.svg"
                        alt="whatsapp"
                     />
                     <a
                        onClick={(e) => {
                           e.preventDefault();
                           setIsOpen(true);
                        }}
                     >
                        Закзать звонок
                     </a>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeedbackFooter;
