import React from "react";
import InclusiveBlockCleaningType from "../../components/InclusiveBlockCleaningType/InclusiveBlockCleaningType";
import InfoBlockCleaningType from "../../components/InfoBlockCleaningType/InfoBlockCleaningType";
import { useOrderPopup } from "../../contexts/orderPopupContext";
import styles from "./GeneralCleaningPage.module.css";
const GeneralCleaningPage = () => {
   const {
      title,
      mainContainer,
      textContainer,
      desc,
      contentContainer,
      textContent,
      titleContent,
      descContent,
      contentBtn,
      contentImgContainer,
      mainDescContainer,
      mainBtn,
      hiddenContainer,
      infoBlockContainer,
      inclusiveBlockContainer,
      inclusiveBlockTitle,
      btnHidden,
      adaptiveList
   } = styles;
   const { setIsOpen } = useOrderPopup();
   return (
      <div className={mainContainer}>
         <div className="container">
            <div className={textContainer}>
               <p className={title}>Генеральная уборка</p>
               <p className={desc}>
                  Комплексная уборка квартиры и дома: уберем сильные загрязнения
                  даже в труднодоступных местах
               </p>
            </div>
            <div className={contentContainer}>
               <div className={textContent}>
                  <div>
                     <p className={titleContent}>
                        Что входит в <br /> <strong>генеральную уборку?</strong>
                     </p>
                     <p className={descContent}>
                        Нас не вызывают, что бы просто протереть пол, <br /> мы
                        делаем полноценную качественную уборку, <br /> которая
                        длится 5 - 6 часов, что бы вычистить всё до блеска!
                     </p>
                  </div>

                  <div>
                     <button onClick={() => {
                        setIsOpen(true)
                     }} className={contentBtn}>Заказать</button>
                  </div>
               </div>
               <div className={contentImgContainer}>
                  <img
                     src="https://thumb.tildacdn.com/tild6363-6665-4933-a633-373731646439/-/resize/710x/-/format/webp/_10.png"
                     alt="#"
                  />
                   <button onClick={() => {
                        setIsOpen(true)
                     }} className={`${contentBtn} ${btnHidden}`}>Заказать</button>
               </div>
            </div>
            <div className={mainDescContainer}>
               <p
                  style={{
                     fontSize: "17px",
                     lineHeight: "1.5",
                  }}
                  className={desc}
               >
                  Генеральная уборка – это комплексная уборка квартиры где мы
                  наводим не только общий порядок в квартире, но и уделяем
                  особое внимание местам сильных загрязнений и труднодоступным
                  местам. Везде протирается пыль с горизонтальных и вертикальных
                  поверхностей, протираются розетки и выключатели, моем
                  радиаторы, протираем все подоконники и двери. Так же моем
                  различные детали интерьера, моем зеркала. Отодвигаем диваны и
                  столы, чтоб протереть за ними пыль и вымыть пол. На кухне
                  удаляем жир с варочной панели, фартука и столешницы. Очищаем
                  фасады шкафов и бытовую технику. В ванной комнате совершаем
                  дезинфекцию сантехники, удаляем ржавчину, моем стены, полы,
                  весь кафель, мебель и зеркала. Если вы цените свое время,
                  доверьтесь профессиональным клинерам, которые оказывают услуги
                  выполнения генеральной уборки в Санкт-Петербурге и забудьте о
                  бытовых трудностях.
               </p>
               <p>
                  Мытье холодильника, духового шкафа, микроволновки, вытяжки и
                  окон рассчитывается отдельно.
               </p>
            </div>
         </div>
         <div className={`container ${hiddenContainer}`}>
            <div className={infoBlockContainer}>
               <InfoBlockCleaningType
                  price="Генеральная уборка от 95 рублей за 1 м2."
                  priceDesc="Кухня до 15 м2 - 2500"
                  services={{
                     text: [
                        "Мытьё окон - 300р",
                        "Помыть вытяжку - 400р",
                        "Помыть холодильник - 600р",
                        "Помыть духовой шкаф - 500р",
                        "Помыть микроволновку - 250р",
                     ],
                     subtitle: "ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ",
                  }}
                  minPrice="4000 рублей"
                  minPriceDesc="МИНИМАЛЬНЫЙ ЗАКАЗ"
                  stylesForPriceDesc={{
                     fontSize: "20px",
                     marginTop: "15px",
                     fontWeight: "700",
                  }}
               />
            </div>
            <div className={inclusiveBlockContainer}>
               <p data-aos="fade-down" className={inclusiveBlockTitle}>
                  Что входит в генеральную уборку?
               </p>
               <InclusiveBlockCleaningType
                  rooms={{
                     title: "Комнаты и коридоры",
                     text: [
                        "Удаление пыли с вертикальных поверхностей, электрических приборов, ламп и светильников, плафонов",
                        "Очищение плинтусов и радиаторов отопления",
                        "Смывание различных загрязнений с дверей и мебели ",
                        "Удаление пыли с мягкой мебели, ковров и ворсистых покрытий",
                        "Мытье пола с добавлением в воду специальных средств, обеспечивающих чистоту, свежеть и блеск",
                     ],
                  }}
                  kitchen={{
                     title: "Кухня",
                     text: [
                        "Моем кухонную технику снаружи",
                        "Моем плиту и столешницу",
                        "Моем фасады шкафов",
                        "Моем раковину",
                        "Выносим мусор",
                     ],
                  }}
                  bathroom={{
                     title: "Ванная комната",
                     text: [
                        "Протираем полки и зеркала",
                        "Моем и обеззараживаем сантехнику",
                        "Моем стены на всю высоту",
                        "Моем ванну и душевую кабину",
                     ],
                  }}
                  classNameList = {adaptiveList}
               />
            </div>
            <div
               style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
               }}
            >
               <button onClick={() => {
                setIsOpen(true)
               }} data-aos="fade-down" className={mainBtn}>
                  Заказать уборку
               </button>
            </div>
         </div>
      </div>
   );
};

export default GeneralCleaningPage;
