import React from "react";
import { useOrderPopup } from "../../contexts/orderPopupContext";
import styles from "./RoomPrice.module.css";
const RoomPrice = ({
   title,
   subtitle,
   desc,
   footerTitle,
   bgImageClass,
   mainContainerClass,
   btnContainerClass
}) => {
   const {
      mainContainer,
      textContainer,
      mainTitle,
      mainDesc,
      mainSubtitle,
      mainList,
      mainListItem,
      mainFooterTitle,
      contentContainer,
      mainBlueBtn,
      mainBg,
      btnContainer,
      hiddenBg,
   } = styles;
   const { setIsOpen } = useOrderPopup();
   return (
      <div className={`${mainContainer} ${mainContainerClass}`}>
         <div className="container">
            <div className={contentContainer}>
               <div className={textContainer}>
                  <p className={mainTitle}>
                     <span>Стоимость </span>
                     {title}
                  </p>
                  <div className={mainDesc}>
                     <p className={mainSubtitle}>
                        {subtitle}
                     </p>
                     {!desc.length ? null : (
                        <ul className={mainList}>
                           {desc.map((text, index) => {
                              return (
                                 <li className={mainListItem} key={index}>
                                    <span></span>
                                    {text}
                                 </li>
                              );
                           })}
                        </ul>
                     )}
                  </div>
                  <p className={mainFooterTitle}>
                     {footerTitle}
                  </p>
                  <div className={`${btnContainer} ${btnContainerClass}`}>
                     <img
                     data-aos="fade-down"
                        className={hiddenBg}
                        src="https://thumb.tildacdn.com/tild6366-3735-4863-a262-343964333539/-/resize/767x/-/format/webp/noroot.png"
                        alt="#"
                     />
                     <button
                        onClick={() => {
                           setIsOpen(true);
                        }}
                        className={mainBlueBtn}
                     >
                        <img
                           
                           src="https://thumb.tildacdn.com/tild3261-3966-4164-b762-373863616538/-/cover/111x91/center/center/-/format/webp/811e84f809065169d86d.png"
                           alt="#"
                        />
                        Заказать уборку
                     </button>
                  </div>
               </div>
               <img
                  data-aos="fade-down"
                  className={`${mainBg} ${bgImageClass}`}
                  src="https://thumb.tildacdn.com/tild6366-3735-4863-a262-343964333539/-/resize/767x/-/format/webp/noroot.png"
                  alt="#"
               />
            </div>
         </div>
      </div>
   );
};

export default RoomPrice;
