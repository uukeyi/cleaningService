import React, { useState , useEffect } from "react";
import styles from "./FormQuestion.module.css";
import {
   handlePhoneInput,
   handlePhoneKeyDown,
   handlePhonePaste,
} from "../../../../utlis/validatePhone";
import { preventDigits } from "../../../../utlis/validateName";
import { sendQuizData } from "../../../../utlis/sendQuizData";
const FormQuestion = ({open , data , setIsOpen}) => {
   const {
      mainContainer,
      mainTitle,
      mainForm,
      inputName,
      inputTel,
      mainSubtitle,
   } = styles;
   const [error, setError] = useState(false);
   const [serverError, setServerError] = useState(false);
   const [successServer, setSuccesServer] = useState(false);
   useEffect(() => {
      if (serverError) {
         alert("Произошла серверная ошибка , попробуйте позже");
      }
   }, [serverError]);
   const onSubmit = (e) => {
      e.preventDefault();
      if (
         e.target.children[0].value === "" ||
         e.target.children[1].value === ""
      ) {
         setError(true);
         return;
      } else {
         const dataQuiz = {
            name : e.target.children[0].value,
            phone : e.target.children[1].value,
            roomType : data[0],
            typeCleaning : data[1],
            rangeInput : data[2],
            furniture : data[3],
            windowCleaning : data[4],
            adress : data[5],
            prize : data[6]
         }
         sendQuizData(dataQuiz , setServerError , setSuccesServer )
         setError(false);
      }
   };
   return (
      <div className={mainContainer}>
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
               width: "18px",
               height: "18px",
            }}
         >
            <g stroke="none" strokeWidth="1" fill="#292929" fillRule="evenodd">
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
         <p className={mainTitle}>
            Заполните форму, чтобы мы могли с вами связаться
         </p>
         <p className={mainSubtitle}>
            Мы закрепим бонус за вашим номером телефона, Вы сможете его получить
            назвав свой номер при оформлении заказа
         </p>
         <form onSubmit={onSubmit} className={mainForm}>
            <input
               type="text"
               className={inputName}
               placeholder="Ваше имя"
               onChange={(e) => {
                  preventDigits(e.target);
               }}
            />
            <input
               onChange={(e) => {
                  handlePhoneInput(e);
               }}
               onKeyDown={(e) => handlePhoneKeyDown(e)}
               onPaste={(e) => handlePhonePaste(e)}
               type="tel"
               placeholder="+7 (999) 999-99-99"
               className={inputTel}
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
               Данные успешно  отправлены!
            </p>
            <button type="submit">Отправить</button>
         </form>
      </div>
   );
};

export default FormQuestion;
