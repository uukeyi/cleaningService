import React from "react";
import headerLogoSrc from "../../assets/img/logo.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useOrderPopup } from "../../contexts/orderPopupContext";
const Header = () => {
   const {
      header,
      headerContainer,
      headerScheduleContainer,
      headerTelContainer,
      headerMenuNav,
      headerBtnPrice,
      menuNavigation,
   } = styles;
   const { setIsOpenPrice } = useOrderPopup();
   return (
      <header className={header}>
         <div className={`container ${headerContainer}`}>
            <NavLink to={"/"}>
               <img
                  src={headerLogoSrc}
                  className="logo"
                  alt="Colibri клининговая компания"
               />
            </NavLink>
            <nav className={headerMenuNav}>
               <div className={headerScheduleContainer}>
                  <div></div>
                  <p>с 9:00 до 22:00</p>
               </div>
               <div className={headerTelContainer}>
                  <a href="tel:+79654066644">
                     <img src={'https://thumb.tildacdn.com/tild3735-6332-4537-b236-643364643832/-/resize/50x/-/format/webp/_.png'} alt="Звонок" />
                  </a>
                  <a href="tel:+79654066644">+7 (965) 406-66-44</a>
                  <button
                     onClick={() => {
                        document.body.style.overflow = "hidden";
                        setIsOpenPrice(true);
                     }}
                     className={headerBtnPrice}
                  >
                     Узнать стоимость
                  </button>
               </div>
            </nav>
         </div>
         <div className={menuNavigation}>
            <NavLink to={"/cleaning"}>Уборка</NavLink>
            <NavLink to={"/dryCleaning"}>Химчистка</NavLink>
            <NavLink to={"/forBusiness"}>Для бизнеса</NavLink>
         </div>
      </header>
   );
};

export default Header;
