import React from "react";
import AlertForCleaningPages from "../../components/AlertForCleaningPages/AlertForCleaningPages";
import BlueInfoBlock from "../../components/BlueInfoBlock/BlueInfoBlock";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import ImageDescForServicePages from "../../components/ImageDescForServicePages/ImageDescForServicePages";
import RoomPrice from "../../components/RoomPrice/RoomPrice";
import WhyUs from "../../components/WhyUs/WhyUs";
import styles from "./FitnessClubPage.module.css";

const FitnessClubPage = () => {
   const { mainContainer, blueCard, cardContainer, flexContainer, mainCard , mainTitle , priceBg , cardTitle , cardDesc  , container} =
      styles;
   return (
      <>
         <ForWhatServiceImg
            title="Уборка фитнес клубов"
            subtitle={"фитнес клубов"}
            img="https://thumb.tildacdn.com/tild6135-3163-4366-b736-393565383831/-/format/webp/Servizi-di-pulizie-R.png"
         />
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "Уборка фитнес клубов, спортзалов, спортивных центров, и других мест массового скопления людей, непростая задача. Наша компания оказывает данные услуги уже большое время. За это время нашими специалистами разработаны определенные методы и концепции, позволяющие нам выполнять работы идеально качественно, а заказчику сэкономить время и финансы."
               }
               subtitle={
                  "Мы оказываем услуги комплексного клининга фитнес клубов: от очистки после ремонта, до генеральной уборки с мытьем остекления."
               }
            />
            <ImageDescForServicePages
               desc="При оказании данной услуги мы всегда учитывает специфику убираемого объекта, ведь фитнес клуб - это комплекс различных помещений, таких как тренажерный зал, раздевалки, душевые, бассейн, спа зоны, сауны, административные помещения. Каждое из них требует особого вида уборки, и специальных химических средств."
               img="https://thumb.tildacdn.com/tild6130-3633-4334-b538-396663373930/-/cover/431x257/center/center/-/format/webp/pic-slide-3-4.jpg"
               background={"#e8fafa"}
            />
            <AlertForCleaningPages
               background={"#e8fafa"}
               text="Индивидуальный подход позволяет разработать уникальную систему, которая будет работать лучше и стоить меньше чем любое типовое решение."
            />
            <BlueInfoBlock
               title={"Что входит в клининг фитнес клубов?"}
               subtitle="Первым делом для качественного оказания услуги необходимо согласовать график и периодичность уборки помещений, и учесть следующие моменты:"
               arr={[
                  {
                     title: "РЕЖИМ РАБОТЫ",
                     desc: "(дневной, ночной, круглосуточный)",
                     img: "https://static.tildacdn.com/tild3664-3236-4166-b662-666662396537/a2d63cad539d5fc1f9ab.svg",
                  },
                  {
                     title: "ЧАСТОТА УБОРКИ",
                     desc: "рекомендуется 1 раз в 4-6 часов, в зависимости от типа помещения",
                     img: "https://static.tildacdn.com/tild3263-6535-4836-a464-663565393863/100fdceb1aaf1fb1f29a.svg",
                  },
               ]}
               cardClassName={blueCard}
            />
            <div className={cardContainer}>
               <div className={`container ${container}`}>
                  <p className={mainTitle} >Далее, в зависимости от типа помещений выделяют:</p>
                  <div className={flexContainer}>
                     <div className={mainCard}>
                        <div></div>
                        <p className={cardTitle} >Специализированную химию</p>
                        <p className={cardDesc} >
                           (данный момент очень важен, поскольку при занятии
                           спортом дыхание учащается, поэтому мы используем
                           только гипоаллергенные химические средства)
                        </p>
                     </div>
                     <div className={mainCard}>
                        <div></div>
                        <p className={cardTitle}>Профессиональное оборудование</p>
                        <p className={cardDesc}>
                        (МОП, поломоечная машина, роторная машина, пылесосы)
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <RoomPrice
               title={"клининга"}
               subtitle={
                  "Для каждого объекта цена рассчитывается индивидуально. Во внимание берется абсолютно все, начиная от"
               }
               desc={[
                 
               ]}
               footerTitle={
                  "Чтобы рассчитать детально, пригласите менеджера нашей компании «Colibri» и мы бесплатно предоставим расчеты."
               }
               bgImageClass = {priceBg}
            />
            <WhyUs />
         </div>
      </>
   );
};

export default FitnessClubPage;
