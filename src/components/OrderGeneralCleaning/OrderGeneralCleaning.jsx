import React, { useState , useEffect } from "react";
import styles from "./OrderGeneralCleaning.module.css";
import {
   handlePhoneInput,
   handlePhoneKeyDown,
   handlePhonePaste,
} from "../../utlis/validatePhone";
import { preventDigits } from "../../utlis/validateName";
import { sendData } from "../../utlis/sendData";
const OrderGeneralCleaning = () => {
   const {
      container,
      title,
      desc,
      textContainer,
      formInput,
      bg,
      flexContainer,
      bgCircle,
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
         const data = {
            phone: e.target.children[0].value,
            name: e.target.children[1].value,
         };
         sendData(data, setServerError, setSuccesServer);
         setError(false);
      }
   };
   return (
      <section className={container}>
         <div className={`container ${flexContainer}`}>
            <div>
               <div className={textContainer}>
                  <p className={title}>
                     Закажите генеральную уборку <br /> и получите мойку <br />{" "}
                     холодильника бесплатно
                  </p>
                  <p className={desc}>
                     При заказе генеральной уборки Вы получаете в подарок <br />{" "}
                     дополнительную услугу «Мойка холодильника»
                  </p>
                  <p className={desc}>
                     Оставьте свои контактные данные и мы свяжемся с Вами в
                     течении 20 минут
                  </p>
               </div>
               <p
                  style={{
                     color: "red",
                     textAlign: "center",
                     display: error ? "block" : "none",
                     marginTop : '30px',
                     marginBottom : '-20px',
                     fontSize : '20px'
                  }}
               >
                      Заполните все поля!
               </p>
               <p
                  style={{
                     color: "green",
                     textAlign: "center",
                     display: successServer ? "block" : "none",
                     marginTop : '30px',
                     marginBottom : '-20px',
                     fontSize : '20px'
                  }}
               >
                     Данные успешно отправлены!
               </p>
               <form className={formInput} onSubmit = {onSubmit}>
                  <input
                     onChange={(e) => {
                        preventDigits(e.target);
                     }}
                     type="text"
                     placeholder="Ваше имя"
                  />
                  <input
                     onChange={(e) => {
                        handlePhoneInput(e);
                     }}
                     onKeyDown={(e) => handlePhoneKeyDown(e)}
                     onPaste={(e) => handlePhonePaste(e)}
                     type="tel"
                     placeholder="+7 (999) 999-99-99"
                  />
                  <input type="submit" />
               </form>
               <p
                  style={{ marginTop: "30px", fontSize: "15px" }}
                  className={desc}
               >
                  Нажимая на кнопку, Вы даете согласие на обработку персональных
                  данных и соглашаетесь с политикой конфиденциальности
               </p>
            </div>

            <img
               className={bg}
               src="https://thumb.tildacdn.com/tild3639-3264-4133-a566-636536643832/-/resize/688x/-/format/webp/_54_.png"
               alt="#"
            />
         </div>
         <img
            className={bgCircle}
            style={{ position: "absolute", bottom: "-10%", zIndex: "0" }}
            src="https://thumb.tildacdn.com/tild3161-6263-4134-a566-393461323736/-/resize/175x/-/format/webp/_53_.png"
            alt="#"
         />
      </section>
   );
};

export default OrderGeneralCleaning;
