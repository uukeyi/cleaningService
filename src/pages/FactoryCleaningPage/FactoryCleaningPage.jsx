import React from "react";
import AlertForCleaningPages from "../../components/AlertForCleaningPages/AlertForCleaningPages";
import BlueInfoBlock from "../../components/BlueInfoBlock/BlueInfoBlock";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import RoomPrice from "../../components/RoomPrice/RoomPrice";
import WhyUs from "../../components/WhyUs/WhyUs";
import styles from "./FactoryCleaningPage.module.css";

const FactoryCleaningPage = () => {
   const {
      mainContainer,
      aboutUsContainer,
      blueInfoBlockContainer,
      priceBg,
      priceContainer,
      btnContainer
   } = styles;
   return (
      <>
         <ForWhatServiceImg
            title="Уборка заводов"
            subtitle={"заводов"}
            img="https://thumb.tildacdn.com/tild6435-3938-4462-b866-633536306234/-/format/webp/photo.jpg"
         />
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "Уборка завода включает в себя множество нестандартных и технически сложных операций. Для их проведения необходим опыт и оборудование, которые есть далеко не у каждой клининговой компании."
               }
               subtitle={
                  "Исходя из этого подбирается узконаправленное оборудование, профессиональные химические средства, обучается персонал."
               }
               extraDesc={
                  "Стоит понимать, что существует различная классификация заводов, а именно тяжелой, легкой и пищевой промышленности. Все они имеют свои особенности и требования, отличается техника безопасности и специфика работ."
               }
            >
               <div className={aboutUsContainer}>
                  Компания «Colibri» имеет значительный опыт оказания
                  услуг <br /> в данной сфере деятельности.
               </div>
            </ForWhatServiceText>

            <BlueInfoBlock
            title={"Что входит в поддерживающую уборку заводов?"}
            subtitle = {'Клининговая компания «Colibri» предлагает оказание услуг по поддерживающей уборке помещений, учитывая любые пожелания Заказчика:'}
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
               classContainer = {blueInfoBlockContainer}
            />
            <AlertForCleaningPages background={'#e8fafa'} text = "Оказание услуг производится любой сложности, вне зависимости от удаленности, степени загрязнения объекта, режима работы и других возможных параметров." />
          
            <RoomPrice
               title={"клининга"}
               subtitle={
                  "Данный вопрос очень индивидуален, в среднем цена за данную услугу составляет от 20 рублей за 1 квадратный метр."
               }
               desc = {
                [

                ]
               }
               footerTitle={
                  "На все интересующие Вас вопросы, вам ответят наши специалисты."
               }
               bgImageClass = {priceBg}
               mainContainerClass = {priceContainer}
               btnContainerClass = {btnContainer}
            />
            <WhyUs />
         </div>
      </>
   );
};

export default FactoryCleaningPage;
