import React from "react";
import AlertForCleaningPages from "../../components/AlertForCleaningPages/AlertForCleaningPages";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import ListOfFacilityServices from "../../components/ListOfFacilityServices/ListOfFacilityServices";
import RoomPrice from "../../components/RoomPrice/RoomPrice";
import WhyUs from "../../components/WhyUs/WhyUs";
import styles from "./WarehousesPage.module.css";

const WarehousesPage = () => {
   const {
      mainContainer,
      mainCard,
      mainTitle,
      complexContainer,
      fullWidthContainer,
      mainList,
      dailyCleaningContainer,
      mainSubtitle,
      bgWomen,
      alertCircle
   } = styles;
   return (
      <>
         <ForWhatServiceImg
            title="Уборка складов"
            subtitle={"складов"}
            img="https://thumb.tildacdn.com/tild3038-6662-4531-a631-313636346237/-/format/webp/sklad_clean.jpg"
         />
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "Почти у всех магазинов и определенно у всех производств есть склады, где принимаются, размещаются и хранятся различные товары. Если не производить уборку складских помещений регулярно и должным образом, это может негативно сказаться на состоянии товаров. Современные складские помещения классов А и Б+, должны убираться не просто каждый день, а круглосуточно."
               }
               subtitle={
                  "Мы оказываем услуги комплексного клининга складов: от очистки после ремонта, до генеральной уборки с мытьем остекления."
               }
            />

            <div className={complexContainer}>
               <div className={`container ${fullWidthContainer}`}>
                  <p className={mainTitle}>
                     Что включает в себя
                     <strong> клининг складов?</strong>
                  </p>
                  <ListOfFacilityServices
                     arr={[
                        {
                           img: "https://thumb.tildacdn.com/tild3235-6235-4162-b139-643166323537/-/cover/142x142/center/center/-/format/webp/photo_6.jpg",
                           title: "Генеральная очистка",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6165-3930-4663-b933-363630383666/-/cover/142x142/center/center/-/format/webp/XXXL.jpg",
                           title: "Клининг после ремонта",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3433-3431-4132-b731-373262363332/-/cover/142x142/center/center/-/format/webp/99d146da29cb8412381f.jpg",
                           title: "Влажное мытье",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        
                     ]}
                     classNameCard={mainCard}
                     classNameContainer={mainList}
                  />
               </div>
            </div>
            <div className={dailyCleaningContainer}>
               <div className={`container ${fullWidthContainer}`}>
              
                  <p className={mainSubtitle}>
                  Так же предлагаем дополнительные услуги:
                  </p>
                  <ListOfFacilityServices
                     arr={[
                        {
                           img: "https://thumb.tildacdn.com/tild6661-6236-4434-b665-356163303166/-/cover/142x142/center/center/-/format/webp/cD1hpIaN.jpg",
                           title: "Нанесение защитного полимерного покрытия",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3663-3830-4232-b263-363731326363/-/cover/142x142/center/center/-/format/webp/1576776582-uborka_sk.jpg",
                           title: "Глубокую размывку полов",
                           color: "#b7e4ea",
                           border: "none",
                        },
                       
                     ]}
                     classNameCard={mainCard}
                     classNameContainer={mainList}
                  />
               </div>
            </div>
            <AlertForCleaningPages classNameCircle={alertCircle}  text={'Мы имеем опыт, техническое оснащение, компетентный персонал - ограниченное количество в Санкт-Петербурге.'} background = "transparent" />
            <RoomPrice
               title={"клининга"}
               
               desc={[
              
               ]}
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

export default WarehousesPage;
