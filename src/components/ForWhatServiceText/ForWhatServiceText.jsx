import React from "react";
import styles from "./ForWhatServiceText.module.css";

const ForWhatServiceText = ({ desc, subtitle, extraDesc, children }) => {
   const {
      mainContainer,
      contentContainer,
      descContainer,
      textContainer,
      title,
      imgContainer,
      mainDesc,
      mainSubtitle,
      mainExtraDesc,
   } = styles;
   return (
      <div className={mainContainer}>
         <div className="container">
            <div className={contentContainer}>
               <div className={descContainer}>
                  <div className={imgContainer}>
                     <img
                        src="https://thumb.tildacdn.com/tild3864-6332-4138-a430-303863323838/-/cover/380x340/center/center/-/format/webp/5dab78b4b5ce45cef48e.png"
                        alt="#"
                     />
                     <div>
                        <div></div>
                     </div>
                  </div>
                  <div className={textContainer}>
                     <p className={title}>
                        <strong>Зачем и когда </strong>нужна услуга?
                     </p>
                     <p className={mainDesc}>{desc}</p>
                     <span className={mainExtraDesc}>
                        {extraDesc ? extraDesc : ""}
                     </span>
                     {
                  children
               }
                  </div>
               </div>
               <div className={mainSubtitle}>
                  <p>{subtitle ? subtitle : ""}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ForWhatServiceText;
