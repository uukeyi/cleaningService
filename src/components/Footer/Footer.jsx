import React from "react";
import styles from "./Footer.module.css";
import footerLogoSrc from "../../assets/img/logo.png";
import { useOrderPopup } from "../../contexts/orderPopupContext";

const Footer = () => {
   const { footerContainer, footerLink ,footerTextContainer , footerInfoContainer } = styles;
   const {setOpenPrivacyPolicy} = useOrderPopup()
   return (
      <footer>
         <div className={`container ${footerContainer}`}>
            <img className="logo" src={footerLogoSrc} alt="Calibri клининговая компания" />
            <div className={footerInfoContainer} >
            <a className={footerLink} onClick = {() => {
               setOpenPrivacyPolicy(true)
            }}>Политика конфиденциальности</a>
            <div className={footerTextContainer}>
               <p> ИНН 5038153774</p>
               <p> КПП 503801001</p>
            </div>


            </div>
         </div>
      </footer>
   );
};

export default Footer;
