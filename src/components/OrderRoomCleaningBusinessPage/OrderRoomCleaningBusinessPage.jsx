import React, { useState , useEffect } from "react";
import styles from "./OrderRoomCleaningBusinessPage.module.css";
import {
   handlePhoneInput,
   handlePhoneKeyDown,
   handlePhonePaste,
} from "../../utlis/validatePhone";
import { preventDigits } from "../../utlis/validateName";
import { sendData } from "../../utlis/sendData";
const OrderRoomCleaningBusinessPage = () => {
   const {
      mainContainer,
      infoContainer,
      mainTitle,
      textContainer,
      mainSubtitle,
      bgImage,
      contentContainer,
      mainForm,
      confidentialityText,
   } = styles;
   const [serverError, setServerError] = useState(false);
   const [successServer, setSuccesServer] = useState(false);
   useEffect(() => {
      if (serverError) {
         alert("Произошла серверная ошибка , попробуйте позже");
      }
   }, [serverError]);
   const [error, setError] = useState(false);
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
   return (
      <div className={mainContainer}>
         <div className={`container ${contentContainer}`}>
            <div className={infoContainer}>
               <div className={textContainer}>
                  <p className={mainTitle}>
                     Нужна уборка нестандартного <br /> помещения?
                  </p>
                  <p className={mainSubtitle}>
                     Закажите бесплатный выезд оценщика на свой объект и <br />{" "}
                     получите точный расчет стоимости уборки
                  </p>
                  <p style={{ fontWeight: "300" }} className={mainSubtitle}>
                     Оставьте свои контактные данные и мы свяжемся с Вами в
                     течении 20 минут
                  </p>

                  <form onSubmit={onSubmit} className={mainForm}>
                     <input
                        data-aos="fade-down"
                        type="text"
                        onChange={(e) => {
                           preventDigits(e.target);
                        }}
                        placeholder={"Ваше имя"}
                     />
                     <input
                        data-aos="fade-down"
                        type="tel"
                        onChange={(e) => {
                           handlePhoneInput(e);
                        }}
                        onKeyDown={(e) => handlePhoneKeyDown(e)}
                        onPaste={(e) => handlePhonePaste(e)}
                        placeholder={"+7 (999) 999-99-99"}
                     />
                     <button data-aos="fade-down">Отправить</button>
                  </form>
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
                  <p className={confidentialityText}>
                     Нажимая на кнопку, Вы даете согласие на обработку
                     персональных данных и соглашаетесь с политикой
                     конфиденциальности
                  </p>
               </div>
            </div>
            <img
               data-aos="fade-down"
               className={bgImage}
               src="https://thumb.tildacdn.com/tild6435-6464-4636-b032-336166393762/-/resize/616x/-/format/webp/_.png"
               alt="#"
            />
         </div>
      </div>
   );
};

export default OrderRoomCleaningBusinessPage;
