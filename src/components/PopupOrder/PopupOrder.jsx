import React from "react";

import { useEffect, useState } from "react";
import {
   handlePhoneInput,
   handlePhoneKeyDown,
   handlePhonePaste,
} from "../../utlis/validatePhone";
import { preventDigits } from "../../utlis/validateName";
import styles from "./PopupOrder.module.css";
import { sendData } from "../../utlis/sendData";
const PopupOrder = ({ open, setIsOpen, title, btnTitle, text }) => {
   if (open) {
      document.body.style.overflow = "hidden";
   }
   const [error, setError] = useState(false);
   const [serverError, setServerError] = useState(false);
   const [successServer, setSuccesServer] = useState(false);
   useEffect(() => {
      if (serverError) {
         alert("Произошла серверная ошибка , попробуйте позже");
      }
   }, [serverError]);
   const handleClick = (e) => {
      if (e.target.classList[0] === "popup-bg") {
         setIsOpen(false);
         document.body.style.overflow = "auto";
      }
   };
   useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
         document.addEventListener("click", handleClick);
      };
   }, [open]);
   const onSubmit = (e) => {
      e.preventDefault();
      if (
         e.target.children[0].value === "" ||
         e.target.children[1].value === ""
      ) {
         setError(true);
         return;
      } else {
         const data = {
            phone: e.target.children[0].value,
            name: e.target.children[1].value,
         };
         sendData(data, setServerError, setSuccesServer);
         setError(false);
      }
   };
   const { popupOrder, popupOrderTextContainer, popupOrderForm, textPrivate } =
      styles;
   return (
      <div className={open ? "popup-bg active" : "popup-bg"}>
         <div className={open ? `popup active ${popupOrder}` : "popup"}>
            <svg
               onClick={() => {
                  document.body.style.overflow = "auto";
                  setIsOpen(false);
               }}
               role="presentation"
               width="23px"
               height="23px"
               viewBox="0 0 23 23"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               xlink="http://www.w3.org/1999/xlink"
               style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: "10px",
                  float: "right",
                  right: "10px",
                  display: open ? "block" : "none",
               }}
            >
               <g
                  stroke="none"
                  strokeWidth="1"
                  fill="#292929"
                  fillRule="evenodd"
               >
                  <rect
                     transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
                     x="10.3137085"
                     y="-3.6862915"
                     width="2"
                     height="30"
                  ></rect>
                  <rect
                     transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
                     x="10.3137085"
                     y="-3.6862915"
                     width="2"
                     height="30"
                  ></rect>
               </g>
            </svg>
            <div className={popupOrderTextContainer}>
               <p>{title}</p>
               <p>{text}</p>
            </div>
            <form onSubmit={onSubmit} className={popupOrderForm}>
               <input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  onChange={(e) => {
                     handlePhoneInput(e);
                  }}
                  onKeyDown={(e) => handlePhoneKeyDown(e)}
                  onPaste={(e) => handlePhonePaste(e)}
               />
               <input
                  type="text"
                  onChange={(e) => {
                     preventDigits(e.target);
                  }}
                  placeholder="Ваше имя"
               />
               <p
                  style={{
                     color: "red",
                     textAlign: "center",
                     display: error ? "block" : "none",
                  }}
               >
                  Заполните все поля!
               </p>
               <p
                  style={{
                     color: "green",
                     textAlign: "center",
                     display: successServer ? "block" : "none",
                  }}
               >
                  Данные успешно отправлены!
               </p>
               <button type="submit">{btnTitle}</button>
            </form>
            <p
               className={textPrivate}
               style={{
                  fontSize: "16px",
                  fontWeight: "200",
                  marginTop: "30px",
                  lineHeight: "1.5",
               }}
            >
               Нажимая на кнопку, Вы даете согласие на обработку персональных
               данных и соглашаетесь с политикой конфиденциальности
            </p>
         </div>
      </div>
   );
};

export default PopupOrder;
