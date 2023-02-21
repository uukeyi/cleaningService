import React, { useState , useEffect } from "react";
import styles from "./RangeInput.module.css";
import { getAnswerQuiz } from "../../../../utlis/getAnswerQuiz";

const RangeInput = ({ data, setData, prefix, setIndexElement }) => {
   const {
      mainContainer,
      mainTitle,
      middle,
      sliderContainer,
      bar,
      fill,
      slider,
      outputInput,
   } = styles;
   const [value, setValue] = useState(20);
   const [range, setRange] = useState((20 / 500) * 100);
   const handleChange = (valueInp) => {
      const value = (valueInp / 500) * 100;
      setRange(value);
   };
   useEffect(() => {
      getAnswerQuiz(data, setData, value, prefix);
      setIndexElement(value);
   }, [value]);
   return (
      <div className={mainContainer}>
         <p className={mainTitle}>
            Сколько квадратных метров помещение, которое нуждается в уборке?
         </p>
         <input className={outputInput} value={value} type="text" disabled />
         <div className={middle}>
            <div className={sliderContainer}>
               <span className={bar}>
                  <span style={{ width: `${range}%` }} className={fill}></span>
               </span>
               <input
                  className={slider}
                  onChange={(e) => {
                     setValue(e.target.value);
                     handleChange(e.target.value);
                  }}
                  type="range"
                  min="0"
                  max="500"
                  defaultValue={value}
               />
            </div>
         </div>
      </div>
   );
};

export default RangeInput;
