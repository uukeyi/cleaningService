import React from "react";
import styles from "./WetCleaningPage.module.css";
import InfoBlockCleaningType from "../../components/InfoBlockCleaningType/InfoBlockCleaningType";
import InclusiveBlockCleaningType from "../../components/InclusiveBlockCleaningType/InclusiveBlockCleaningType";
import { useOrderPopup } from "../../contexts/orderPopupContext";
const WetCleaning = () => {
   const {
      mainContainer,
      textContainer,
      title,
      desc,
      subtitle,
      getSaleBtn,
      infoBlockContainer,
      inclusiveTitle,
      inclusiveBlockContainer,
      hiddenContainer,
   } = styles;
   const {  setIsOpen } = useOrderPopup();
   return (
      <div className={mainContainer}>
         <div className="container">
            <div className={textContainer}>
               <p className={title}>Влажная уборка</p>
               <p className={desc}>
                  Поддерживающая уборка в рамках нашей клининговой компании
                  разделяется на несколько этапов, где основной целью является
                  наведение общего порядка в квартире. Уборка включает в себя:
                  мойку коридора или прихожей, кухонной зоны, санузла, а так же
                  жилых комнат и гостиной (количество обсуждается). В коридоре и
                  комнатах протирается пыль с вертикальных и горизонтальных
                  поверхностей, протираются зеркала. В кухонной зоне дезинфекция
                  раковины, протирка бытовой техники (снаружи), фасадов шкафов,
                  приведение в надлежащий вид фартука и столешницы, а так же
                  моется посуда до 10 предметов. В санузле производится
                  дезинфекция всей сантехники: ванной, душевой кабины и
                  раковины, протираются зеркальные поверхности. А в завершении
                  производится мойка плинтусов, полов и вынос мусора до 10 кг.
                  Если есть необходимость в пылесосе, сообщите это менеджеру по
                  телефону.
               </p>
               <p className={subtitle}>
                  Мытье холодильника, духового шкафа, микроволновки, вытяжки и
                  окон рассчитывается отдельно.
               </p>
            </div>
         </div>
         <div className={`container ${hiddenContainer}`}>
            <div className={infoBlockContainer}>
               <InfoBlockCleaningType
                  price={"60 рублей за 1 м2"}
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
                  minPrice={"2490 рублей"}
                  minPriceDesc={"МИНИМАЛЬНЫЙ ЗАКАЗ"}
               />
            </div>

            <div className={inclusiveBlockContainer}>
               <p className={inclusiveTitle}>
                  Что входит во влажную уборку квартиры?
               </p>
               <InclusiveBlockCleaningType
                  rooms={{
                     text: [
                        "Пылесосим и моем пол и плинтусы",
                        "Протираем стеклянные поверхности и зеркала",
                        "Протираем все доступные поверхности",
                     ],
                     title: "Комнаты и коридоры:",
                  }}
                  kitchen={{
                     text: [
                        "Моем плитку, холодильник снаружи",
                        "Протираем фасады шкафов",
                        "Моем раковину",
                        "Протираем столешницу и кухонный фартук",
                        "Моем пол и плинтуса",
                     ],
                     title: "Кухня:",
                  }}
                  bathroom={{
                     text: [
                        "Протираем полки и зеркала",
                        "Моем и обеззараживаем сантехнику",
                        "Моем пол",
                     ],
                     title: "Ванная комната:",
                  }}
               />
               <button
                  onClick={() => {
                     setIsOpen(true);
                  }}
                  style={{ display: "block", margin: "50px auto" }}
                  data-aos="fade-down"
                  className={getSaleBtn}
               >
                  Заказать уборку
               </button>
            </div>
         </div>
      </div>
   );
};
export default WetCleaning;
