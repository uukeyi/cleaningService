import React from "react";
import styles from "./AlertForCleaningPages.module.css";
const AlertForCleaningPages = ({background , text , classNameCircle}) => {
   const { mainContainer, contentContainer } = styles;
   return (
      <div style={{background : background}} className={mainContainer}>
         <div className="container">
            <div  className={contentContainer}>
               <div className={classNameCircle} >!</div>
               <p>
                 {
                  text
                 }
               </p>
            </div>
         </div>
      </div>
   );
};

export default AlertForCleaningPages;
