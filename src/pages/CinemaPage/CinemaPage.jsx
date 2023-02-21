import React from "react";
import AlertForCleaningPages from "../../components/AlertForCleaningPages/AlertForCleaningPages";
import BlueInfoBlock from "../../components/BlueInfoBlock/BlueInfoBlock";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import RoomPrice from "../../components/RoomPrice/RoomPrice";
import WhyUs from "../../components/WhyUs/WhyUs";
import styles from "./CinemaPage.module.css";

const CinemaPage = () => {
   const {
      mainContainer,
      priceBg,
   
   } = styles;
   return (
      <>
         <ForWhatServiceImg
            title="Уборка кинотеатров"
            subtitle={"кинотеатров"}
            img="https://thumb.tildacdn.com/tild6631-6635-4733-b661-333866333961/-/format/webp/bv.jpg"
         />
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "Ежедневно кинотеатры посещают тысячи человек. После сеансов в залах остаются остатки еды, напитков, бутылки и прочий мелкий мусор, который необходимо убрать оперативно до начала следующего фильма. Самой большой и объёмной является ночная уборка. Кинотеатры работают без выходных, поэтому единственное возможное время для уборки – после закрытия."
               }
               subtitle={
                  "Клининговая компания «Colibri» предлагает оказание услуг по поддерживающей уборке помещений, учитывая любые пожелания Заказчика:"
               }
            />
            <BlueInfoBlock
               title={"Что входит в клининг фитнес клубов?"}
               subtitle="Первым делом для качественного оказания услуги необходимо согласовать график и периодичность уборки помещений, и учесть следующие моменты:"
               arr={[
                {
                   title: "ГРАФИК РАБОТ",
                   desc: "(полный день, утренняя уборка, вечерняя уборка, ночная уборка)",
                   img: "https://static.tildacdn.com/tild3263-6535-4836-a464-663565393863/100fdceb1aaf1fb1f29a.svg",
                },
                {
                   title: "ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ",
                   desc: "(поломоечные машины любых типов и мощностей, подметальные машины, вакуумные пылеводососы, экстракторные аппараты, профинвентарь)",
                   img: "https://static.tildacdn.com/tild6563-6132-4362-b633-663161353331/0e5f134070f6c975036b.svg",
                },
                {
                   title: "ПРЕДОСТАВЛЯЕМЫЙ ПЕРСОНАЛ",
                   desc: "(количество, национальная принадлежность, пол, возраст)",
                   img: "https://static.tildacdn.com/tild3531-3730-4836-b862-383061333263/ff8984dba05134d0c122.svg",
                },
             ]}
           
            />
            <AlertForCleaningPages
               background={"#e8fafa"}
               text="Оказание услуг производится любой сложности, вне зависимости от удаленности, степени загрязнения объекта, режима работы и других возможных параметров."
            />

           
            <RoomPrice
               title={"клининга"}
              
               desc={[]}
               footerTitle={
                  "Чтобы рассчитать детально, пригласите менеджера нашей компании «Colibri» и мы бесплатно предоставим расчеты."
               }
               bgImageClass={priceBg}
            />
            <WhyUs />
         </div>
      </>
   );
};

export default CinemaPage;
