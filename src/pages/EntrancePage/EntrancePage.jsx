import React from "react";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import ListOfFacilityServices from "../../components/ListOfFacilityServices/ListOfFacilityServices";
import RoomPrice from "../../components/RoomPrice/RoomPrice";
import WhyUs from "../../components/WhyUs/WhyUs";
import styles from "./EntrancePage.module.css";

const EntrancePage = () => {
   const {
      mainContainer,
      mainCard,
      mainTitle,
      complexContainer,
      fullWidthContainer,
      mainList,
      dailyCleaningContainer,
      mainSubtitle,
      bgWomen
   } = styles;
   return (
      <>
         <ForWhatServiceImg
            title="Уборка подъездов"
            subtitle={"подъездов"}
            img="https://thumb.tildacdn.com/tild6331-6131-4536-b739-333562326439/-/cover/961x475/center/center/-/format/webp/photo.png"
         />
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "Многие подъезды зданий в Санкт-Петербурге, Ленобласти пребывают в ужасном состоянии и уборку нужно производить регулярно. Мы знаем не понаслышке, что такое чистота в парадной.  Управляющая компания может с уверенностью передать этот важный момент в своей работе проверенной компании «Colibri» и заниматься более важными делами по управлению дома."
               }
               subtitle={
                  "Мы оказываем услуги комплексного клининга подъездов: от очистки после ремонта, замены окон, до генеральной уборки с мытьем остекления."
               }
            />

            <div className={dailyCleaningContainer}>
               <div className={`container ${fullWidthContainer}`}>
                  <p style={{ marginTop: "120px" }} className={mainTitle}>
                     Что включает в себя
                     <strong> клининг подъездов?</strong>
                  </p>
                  <p className={mainSubtitle}>
                     Согласно постановлению Правительства РФ №290 в список
                     действий по чистке подъездов и лестничных клеток включены:
                  </p>
                  <ListOfFacilityServices
                     arr={[
                        {
                           img: "https://thumb.tildacdn.com/tild3634-3034-4334-a134-623731656234/-/cover/142x142/center/center/-/format/webp/nkcgsugysesocwc440k.jpg",
                           title: "Влажная очистка маршей лестниц, лифтовых шахт и кабин (минимум дважды в месяц);",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3237-3566-4664-b538-326263636331/-/cover/142x142/center/center/-/format/webp/5e7b126382682c11982e.jpg",
                           title: "Санитарно-гигиеническая очистка батарей, подоконников, дверных коробок (раз в 3 месяца), подоконников, почтовых ящиков и электрощитков",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3938-6634-4036-b332-393138616362/-/cover/142x142/center/center/-/format/webp/202006152103-2020052.jpg",
                           title: "Очищение стеклянных и металлических конструкций, перилл, осветительных приборов, стенок (3-4 раза в год)",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3734-3561-4631-b964-313436623838/-/cover/142x142/center/center/-/format/webp/456.jpg",
                           title: "Сухая очистка площадок и тамбуров (в идеале раз в два дня)",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3862-3661-4239-b863-633934343666/-/cover/142x142/center/center/-/format/webp/a4c6636578a625d47dc9.jpg",
                           title: "Очистка межэтажных пролетов",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6566-3236-4233-b231-626631353139/-/cover/142x142/center/center/-/format/webp/nos-mtiers-hygiene-p.png",
                           title: "Очищение стекол в окнах",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3939-3635-4339-b936-613166633239/-/cover/142x142/center/center/-/format/webp/valytoja-81471775.jpg",
                           title: "Протирка металлических, цементных и каменных конструкций",
                           color: "#b7e4ea",
                           border: "none",
                        },
                     ]}
                     classNameCard={mainCard}
                     classNameContainer={mainList}
                  />
               </div>
            </div>

            <RoomPrice
               title={"клининга"}
               desc={[]}
               footerTitle={
                  "Чтобы рассчитать детально, пригласите менеджера нашей компании «Colibri» и мы бесплатно предоставим расчеты."
               }
               bgImageClass = {bgWomen}
            />
            <WhyUs />
         </div>
      </>
   );
};

export default EntrancePage;
