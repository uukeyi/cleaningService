import React from "react";
import { useOrderPopup } from "../../contexts/orderPopupContext";
import styles from "./CleaningAfterRepairPage.module.css";
import InclusiveBlockCleaningType from "../../components/InclusiveBlockCleaningType/InclusiveBlockCleaningType";
import InfoBlockCleaningType from "../../components/InfoBlockCleaningType/InfoBlockCleaningType";
const CleaningAfterRepair = () => {
   const {
      mainContainer,
      mainTitle,
      mainDesc,
      textContainer,
      contentContainer,
      textContent,
      contentImgContainer,
      titleContent,
      descContent,
      contentBtn,
      mainDescContainer,
      desc,
      mainBtn,
      hiddenContainer,
      infoBlockContainer,
      inclusiveBlockContainer,
      inclusiveTitle,
      btnHidden,
   } = styles;
   const { setIsOpen } = useOrderPopup();
   return (
      <div className={mainContainer}>
         <div className="container">
            <div className={textContainer}>
               <p className={mainTitle}>Уборка после ремонта</p>
               <p className={mainDesc}>
                  Уберем строительную пыль и удалим все следы ремонта
               </p>
            </div>
            <div className={contentContainer}>
               <div className={contentImgContainer}>
                  <img
                     src="https://thumb.tildacdn.com/tild3162-3330-4562-b766-356136333039/-/resize/710x/-/format/webp/___.png"
                     alt="#"
                  />
                  <button
                     onClick={() => {
                        setIsOpen(true);
                     }}
                     className={`${contentBtn} ${btnHidden}`}
                  >
                     Заказать
                  </button>
               </div>
               <div className={textContent}>
                  <div>
                     <p className={titleContent}>
                        Что входит в <br />{" "}
                        <strong>уборку после ремонта?</strong>
                     </p>
                     <div className={descContent}>
                        Мы полностью подготавливаем помещение <br /> к заезду:
                        обеспыливаем все поверхности <br /> и очищаем их от
                        следов и капель краски, <br />
                        выносим мусор, дезинфицируем сантехнику.
                     </div>
                  </div>
                  <div>
                     <button
                        onClick={() => {
                           setIsOpen(true);
                        }}
                        className={contentBtn}
                     >
                        Заказать
                     </button>
                  </div>
               </div>
            </div>
            <div className={mainDescContainer}>
               <p className={desc}>
                  Уборка после ремонта разделяется на две категории. Уборка c
                  мебелью и без мебели. Цена на эти категории разные. Уборка
                  после ремонта без мебели занимает по времени от 6 часов и
                  включает в себя обеспыливание всех горизонтальных и
                  вертикальных поверхностей. Протираем пыль с потолка, пылесосим
                  стены (при необходимости моем), очищаем радиаторы отопления,
                  включатели и розетки. Отчищаем все поверхности от капель и
                  следов краски, цемента, грунтовки, шпаклевки и других
                  растворов. В санузле совершаем дезинфекцию сантехники, чистим
                  плитку, и оттираем остатки ремонта, моем плинтусы, зеркала,
                  радиаторы, трубы, двери, светильники, моем полы. Уборка после
                  ремонта с мебелью эта такая же стандартная уборка, плюс особое
                  внимание уделяем мебели, которая имеется. Протираем пыль на
                  шкафах снаружи и внутри, а мягкую мебель тщательно пылесосим.
                  После такой уборке не остается строительной пыли и грязи
               </p>
            </div>
         </div>
         <div className={`container ${hiddenContainer}`}>
            <div className={infoBlockContainer}>
               <InfoBlockCleaningType
                  price="от 100 рублей за 1 м2."
                  priceDesc="ПРИ УБОРКЕ КВАРТИРЫ БЕЗ МЕБЕЛИ"
                  services={{
                     text: ["от 120 рублей за 1 м2."],
                     subtitle: "ПРИ УБОРКЕ КВАРТИРЫ С МЕБЕЛЬЮ",
                  }}
                  minPrice="3500 рублей"
                  minPriceDesc="МИНИМАЛЬНЫЙ ЗАКАЗ"
                  stylesForPriceDesc={{ marginTop: "20px" }}
               />
            </div>
            <div className={inclusiveBlockContainer}>
               <p data-aos="fade-down" className={inclusiveTitle}>
                  Что входит в уборку после ремонта?
               </p>

               <InclusiveBlockCleaningType
                  rooms={{
                     title: "Комнаты и коридоры",
                     text: [
                        "Удаляем после строительную пыль",
                        "Протираем все поверхности",
                        "Удаляем следы ремонта",
                        "Пылесосим и моем пол, плинтусы",
                        "Моем мебель снаружи и внутри",
                        "Моем стеклянные поверхности и зеркала",
                        "Пылесосим мягкую мебель",
                     ],
                  }}
                  kitchen={{
                     title: "Кухня",
                     text: [
                        "Моем мебель снаружи и внутри",
                        "Удаляем следы ремонта",
                        "Удаляем после строительную пыль",
                        "Моем плиту и столешницу",
                        "Моем вытяжку",
                        "Моем кухонную технику снаружи и внутри",
                     ],
                  }}
                  bathroom={{
                     title: "Ванная комната",
                     text: [
                        "Моем потолок и стены на всю высоту",
                        "Моем ванную или душевую кабину",
                        "Моем и обеззараживаем сантехнику",
                        "Протираем полки и зеркала",
                     ],
                  }}
               />
               <div
                  style={{
                     display: "flex",
                     justifyContent: "center",
                     marginTop: "10px",
                  }}
               >
                  <button
                     onClick={() => {
                        setIsOpen(true);
                     }}
                     data-aos="fade-down"
                     className={mainBtn}
                  >
                     Заказать уборку
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CleaningAfterRepair;
