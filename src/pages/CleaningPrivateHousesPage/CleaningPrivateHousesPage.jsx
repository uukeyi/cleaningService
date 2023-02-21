import React from "react";
import styles from "./CleaningPrivateHousesPage.module.css";
import InclusiveBlockCleaningType from "../../components/InclusiveBlockCleaningType/InclusiveBlockCleaningType";
import InfoBlockCleaningType from "../../components/InfoBlockCleaningType/InfoBlockCleaningType";
import { useOrderPopup } from "../../contexts/orderPopupContext";

const CleaningPrivateHousesPage = () => {
   const {
      mainContainer,
      mainTitle,
      mainBtn,
      mainTextContainer,
      hiddenContainer,
      infoBlockContainer,
      inclusiveBlockContainer,
      inclusiveTitle,
   } = styles;
   const { setIsOpen } = useOrderPopup();
   return (
      <div className={mainContainer}>
         <div className="container">
            <div className={mainTextContainer}>
               <p className={mainTitle}>Уборка коттеджей, частных домов</p>
            </div>
         </div>
         <div className={`container ${hiddenContainer}`}>
            <div className={infoBlockContainer}>
               <InfoBlockCleaningType
                  price="от 60 рублей за 1 м2."
                  priceDesc="ВЛАЖНАЯ УБОРКА ДОМА"
                  services={{
                     text: [
                        "Мытьё окон - 300р (створка)",
                        "Помыть вытяжку - 400р",
                        "Помыть холодильник - 600р",
                        "Помыть духовой шкаф - 500р",
                        "Помыть микроволновку - 250р",
                     ],
                     subtitle: "ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ",
                  }}
                  minPrice="от 100 рублей за 1 м2."
                  minPriceDesc="ГЕНЕРАЛЬНАЯ УБОРКА ДОМА"
                  stylesForPriceDesc={{ marginTop: "20px" }}
               />
            </div>
            <div className={inclusiveBlockContainer}>
               <p className={inclusiveTitle}>
                  Что входит в уборку коттеджей и частных домов?
               </p>
               <InclusiveBlockCleaningType
                  rooms={{
                     title: "Комнаты и коридоры",
                     text: [
                        "Пылесосим и моем пол",
                        "Моем мебель снаружи",
                        "Пылесосим мягкую мебель",
                        "Протираем все доступные поверхности",
                        "Удаляем пыль с бытовых приборов",
                        "Моем стеклянные поверхности и зеркала",
                        "Отодвигаем мебель и моем за ней",
                     ],
                  }}
                  kitchen={{
                     title: "Кухня",
                     text: [
                        "Моем мебель снаружи",
                        "Моем вытяжку",
                        "Моем плиту и столешницу",
                        "Моем кухонную технику снаружи",
                        "Выносим мусор",
                     ],
                  }}
                  bathroom={{
                     title: "Ванная комната",
                     text: [
                        "Моем стены",
                        "Моем ванную, душевую кабину",
                        "Моем и обеззараживаем сантехнику",
                        "Протираем полки и зеркала",
                     ],
                  }}
               />
            </div>
            <div
               style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
               }}
            >
               <button
                  onClick={() => {
                     setIsOpen(true);
                  }}
                  className={mainBtn}
               >
                  Заказать уборку
               </button>
            </div>
         </div>
      </div>
   );
};

export default CleaningPrivateHousesPage;
