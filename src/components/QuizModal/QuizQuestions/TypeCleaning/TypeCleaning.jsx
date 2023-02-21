import React from "react";
import styles from "./TypeCleaning.module.css";
import { getAnswerQuiz } from "../../../../utlis/getAnswerQuiz";
const TypeCleaning = ({ setData, data, prefix, setIndexElement }) => {
   const {
      mainContainer,
      mainTitle,
      formContainer,
      formGroup,
      contentContainer,
      womenImg,
   } = styles;
   return (
      <div className={mainContainer}>
         <p data-aos="fade-down" className={mainTitle}>
            Какая уборка вас интересует?
         </p>
         <div className={contentContainer}>
            <div className={formContainer}>
               {[
                  {
                     title: "Генеральная уборка",
                     id: "generalCleaning",
                  },
                  {
                     title: "Уборка после ремонта",
                     id: "afterRepair",
                  },
                  {
                     title: "Поддерживающая уборка",
                     id: "helpCleaning",
                  },
                  {
                     title: "Мытье панорам и окон",
                     id: "windowCleaning",
                  },
               ].map((input, index) => {
                  return (
                     <div data-aos = "fade-down" htmlFor = {input.id} key={index} className={formGroup}>
                        <input
                           onChange={() => {
                              getAnswerQuiz(data, setData, input.title, prefix);

                              setIndexElement(index);
                           }}
                           type="radio"
                           id={input.id}
                           name="cleaning"
                        />
                        <label htmlFor={input.id}>{input.title}</label>
                     </div>
                  );
               })}
            </div>
            <img
               className={womenImg}
               src="https://hgwipn3sa-res.cloudinary.com/image/upload/w_380,f_auto,q_auto,g_auto,c_fill,h_307,dpr_1/ujzpdz4514beohmfkowm.png"
               alt="#"
            />
         </div>
      </div>
   );
};

export default TypeCleaning;
