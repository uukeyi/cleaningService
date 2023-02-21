import React, { useEffect, useState } from "react";
import { getAnswerQuiz } from "../../../../utlis/getAnswerQuiz";
import styles from "./InputTextQuestion.module.css";
const InputTextQuestion = ({ data, setData, setIndexElement, prefix }) => {
   const { mainContainer, mainTitle, mainInput } = styles;
   const [inputValue, setInputValue] = useState("");
   useEffect(() => {
      getAnswerQuiz(data, setData, inputValue, prefix);
      setIndexElement(inputValue)
   }, [inputValue]);
   return (
      <div className={mainContainer}>
         <p className={mainTitle}>Ваш адрес?</p>
         <input
            value={inputValue}
            onChange={(e) => {
               setInputValue(e.target.value);

            }}
            className={mainInput}
            placeholder={"г. Санкт - Петербург, ул. Ломоносова, д.1 кв.3"}
            type="text"
         />
      </div>
   );
};

export default InputTextQuestion;
