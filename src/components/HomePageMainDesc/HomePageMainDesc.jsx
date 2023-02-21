import React from "react";
import styles from "./HomePageMainDesc.module.css";
import vectorCircleDescSrc from "../../assets/img/home-page/vector-circle.svg";
import BlueButton from "../BlueButton/BlueButton";
import vectorCleanerSrc from "../../assets/img/home-page/vector-cleaner.svg";
import { useOrderPopup } from "../../contexts/orderPopupContext";
const HomePageMainDesc = () => {
   const {
      infoContainer,
      homePageTitle,
      homePageDescContainer,
      homePageBlueButtonContainer,
      blueButton,
   } = styles;
const {setIsOpen} = useOrderPopup()
   return (
      <>

         <div className={infoContainer} style={{ overflow: "hidden" }}>
            <span className={homePageTitle}>
               Уборка квартир и домов &nbsp;
               <br />
               <span
                  style={{
                     color: "#474747",
                     fontWeight: "500",
                     marginTop: "4px",
                  }}
               >
                  в Санкт - Петербурге
               </span>
            </span>
            <div className={homePageDescContainer}>
               <img src={vectorCircleDescSrc} alt="." />
               <p>
                  <span>- 10% на первый заказ </span>
                  <span>
                     каждому <br /> новому клиенту
                  </span>
               </p>
               <img
                  style={{ transform: "rotate(-180deg)" }}
                  src={vectorCircleDescSrc}
                  alt=""
               />
            </div>
            <div>
               <div className={homePageBlueButtonContainer}>
                  <BlueButton
                     title={"Заказать уборку"}
                     className={blueButton}
                     setIsOpen={setIsOpen}
                  />
                  <img src={vectorCleanerSrc} alt="#" />
               </div>
            </div>
         </div>
      </>
   );
};

export default HomePageMainDesc;
