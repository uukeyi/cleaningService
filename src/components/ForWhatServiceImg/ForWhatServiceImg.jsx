import React from "react";
import styles from "./ForWhatServiceImg.module.css";

const ForWhatService = ({ img, title, subtitle , imgClassname}) => {
   const {
      mainContainer,
      bgImage,
      card,
      mainTitle,
      desc,
      textContainer,
      infoContainer,
      fullWidthContainer,
   } = styles;
   return (
      <div className={mainContainer}>
         <div className={`container ${fullWidthContainer}`}>
            <div className={infoContainer}>
               <div className={card}>
                  <div></div>
                  <div className={textContainer}>
                     <p className={mainTitle}>{title}</p>
                     <p className={desc}>
                        Клининговая компания «Colibri» предлагает услуги по
                        выполнению ежедневной комплексной уборки
                        <strong> {subtitle}</strong> в Санкт-Петербурге и ЛО.
                     </p>
                  </div>
               </div>
            
            </div>
           
         </div>
         <img className={`${bgImage} ${imgClassname}`} src={img} alt="#" />
      </div>
   );
};

export default ForWhatService;
