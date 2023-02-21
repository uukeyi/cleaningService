import React from "react";
import styles from "./ForBusinessPage.module.css";
import { useOrderPopup } from "../../contexts/orderPopupContext";
import BusinessPageService from "../../components/BusinessPageServices/BusinessPageServices";
import FactsAboutCompany from "../../components/FactsAboutCompany/FactsAboutCompany";
import OrderRoomCleaningBusinessPage from "../../components/OrderRoomCleaningBusinessPage/OrderRoomCleaningBusinessPage";
import FeedbackFooter from "../../components/FeedbackFooter/FeedbackFooter";
import QuizModal from "../../components/QuizModal/QuizModal";
const ForBusinessPage = () => {
   const {
      mainContainer,

      mainTitle,
      mainBlueBtn,
      mainBg,
      mainSubtitle,
      mainSubtitleContainer,
      mainBgWomen,
      container,
      mainBgBubbles,
      mainBgSale,
      mainTitleSubtitle,
      hiddenSubtitle,
      bgBubbles,
   } = styles;
   const { setIsOpen } = useOrderPopup();
   return (
      <>
         <section className={mainContainer}>
            <div className={`container ${container}`}>
               <p className={mainTitle}>
                  Качественная уборка <br />
                  <span className={mainTitleSubtitle}>
                     коммерческих <span>помещений</span> <br />
                  </span>
                  в Санкт - Петербурге
               </p>
               <div className={`${mainSubtitleContainer} ${hiddenSubtitle}`}>
                  <img
                     src="https://thumb.tildacdn.com/tild6131-3330-4039-a537-376237633162/-/resize/46x/-/format/webp/_8.png"
                     alt="#"
                  />
                  <p className={mainSubtitle}>
                     <strong>10% скидка </strong>
                     на первый заказ
                  </p>
               </div>
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
               <div className={mainSubtitleContainer}>
                  <img
                     src="https://thumb.tildacdn.com/tild6131-3330-4039-a537-376237633162/-/resize/46x/-/format/webp/_8.png"
                     alt="#"
                  />
                  <p className={mainSubtitle}>
                     <strong>10% скидка </strong>
                     на первый заказ
                  </p>
               </div>
               <img
                  className={mainBgWomen}
                  src="https://thumb.tildacdn.com/tild3162-3531-4764-b739-623063313164/-/resize/555x/-/format/webp/_.png"
                  alt="#"
               />
               <img
                  className={mainBgBubbles}
                  src="https://thumb.tildacdn.com/tild6163-3139-4462-b561-343063333062/-/resize/385x/-/format/webp/_15.png"
                  alt="#"
               />
               <img
                  className={mainBgSale}
                  src="https://thumb.tildacdn.com/tild3938-3133-4364-b461-316330353466/-/resize/168x/-/format/webp/_5500_.png"
                  alt="#"
               />
            </div>
            <img
               src="https://thumb.tildacdn.com/tild6533-3532-4161-b937-363232386663/-/format/webp/2.png"
               alt="#"
               className={mainBg}
            />
            <img
               className={bgBubbles}
               src="https://thumb.tildacdn.com/tild3863-3461-4663-a239-366361346135/-/resize/402x/-/format/webp/_1.png"
               alt="#"
            />
         </section>
         <BusinessPageService />
         <FactsAboutCompany/>
         <OrderRoomCleaningBusinessPage/>
         <FeedbackFooter/>
      </>
   );
};

export default ForBusinessPage;
