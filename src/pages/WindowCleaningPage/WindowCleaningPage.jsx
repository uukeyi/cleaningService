import React from "react";
import styles from "./WindowCleaningPage.module.css";
import InfoBlockCleaningType from "../../components/InfoBlockCleaningType/InfoBlockCleaningType";
import { useOrderPopup } from "../../contexts/orderPopupContext";

const WindowCleaningPage = () => {
   const {
      mainContainer,
      hiddenContainer,
      infoBlockContainer,
      textContainer,
      mainTitle,
      contentContainer,
      contentTextContainer,
      contentList,
      contentImgContainer,
      btnContainer,
   } = styles;
   const {setIsOpen} = useOrderPopup()
   return (
      <div className={mainContainer}>
         <div className={`container ${hiddenContainer}`}>
            <div className={textContainer}>
               <p className={mainTitle}>Мытьё окон и балконов</p>
               <p style={{ fontWeight: "300", fontSize: "19px" }}>
                  Моем стекла, откосы и подоконники
               </p>
            </div>
            <div className={infoBlockContainer}>
               <InfoBlockCleaningType
                  price="300р за створку"
                  priceDesc="МЫТЬЕ ОКОН"
                  services={{
                     text: ["от 1500р за единицу"],
                     subtitle: "МЫТЬЁ БАЛКОНА",
                  }}
                  minPrice="700р за единицу"
                  minPriceDesc="Балконная группа"
                  stylesForPriceDesc={{
                     marginTop: "20px",
                  }}
               />
            </div>
            <div className={contentContainer}>
               <div className={contentTextContainer}>
                  <p className={mainTitle}>
                     Что входит в мытьё <br /> окон и балконов?
                  </p>
                  <ul className={contentList}>
                     <li>очищения стекол от различных видов загрязнения</li>
                     <li>мойка откосов</li>
                     <li>мойка подоконника.</li>
                  </ul>
               </div>
               <div className={contentImgContainer}>
                  <img
                     src="https://img.freepik.com/free-photo/essential-goods-during-epidemic-prevention-and-protection-of-coronavirus-covid-19-spreading-hand-in-gloves-disinfecting-surfaces-with-sanitizer-at-home-cleaning-against-pneumonia-virus_155003-39913.jpg?w=1380&t=st=1676564540~exp=1676565140~hmac=c127218b975ead9487063faea3b9b59e95abda02dcbf5db20900ed9b13c170f3"
                     alt="#"
                  />
               </div>
            </div>
            <div className={btnContainer}>
               <button onClick={() => {
                setIsOpen(true)
               }} 
               data-aos = "fade-down"
               >Заказать уборку</button>
            </div>
         </div>
      </div>
   );
};
export default WindowCleaningPage;
