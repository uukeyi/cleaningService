import React from "react";
import BlueInfoBlock from "../../components/BlueInfoBlock/BlueInfoBlock";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import ListOfFacilityServices from "../../components/ListOfFacilityServices/ListOfFacilityServices";
import RoomPrice from "../../components/RoomPrice/RoomPrice";
import WhyUs from "../../components/WhyUs/WhyUs";
import styles from "./BusinessCenterPage.module.css";

const BusinessCenterPage = () => {
   const {
      mainContainer,
      mainCard,
      mainTitle,
      complexContainer,
      fullWidthContainer,
      mainList,

   } = styles;
   return (
      <>
         <ForWhatServiceImg
            title="Уборка бизнес центров"
            subtitle={"бизнес центров"}
            img="https://thumb.tildacdn.com/tild3133-3462-4366-a231-646663373435/-/format/webp/photo.png"
         />
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "Любой бизнес-центр, это место, где сконцентрировано максимальное внимание на создание большей выручки. Это место где люди создают деньги путем реализации своих дерзких идей. А наша задача, обеспечить максимальный комфорт и порядок с входной двери, чтоб каждый человек чувствовал себя в Бизнес-центре частью одного большого дела."
               }
            />

            <div className={complexContainer}>
               <div className={`container ${fullWidthContainer}`}>
                  <p className={mainTitle}>
                     <strong>Комплекс поддерживающих</strong> мероприятий
                     включает:
                  </p>
                  <ListOfFacilityServices
                     arr={[
                        {
                           img: "https://thumb.tildacdn.com/tild3239-3164-4638-b965-663361643664/-/cover/142x142/center/center/-/format/webp/ee1113e116be0321db0f.png",
                           title: "Мойка стёкол входной группы",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6362-3833-4534-b862-633961343066/-/cover/142x142/center/center/-/format/webp/fbce7026a7106d9ea8f6.jpg",
                           title: "Наведение порядка на ресепшене",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3831-6634-4733-b639-366163613863/-/cover/142x142/center/center/-/format/webp/stock-photo-handsome.png",
                           title: "Лифты с внутренней и наружной стороны",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3161-6366-4963-a632-636239656332/-/cover/142x142/center/center/-/format/webp/_2.jpg",
                           title: "На каждом этаже уборка в уборных комнатах",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3162-6664-4462-a366-303139616261/-/cover/142x142/center/center/-/format/webp/8b1a0d62882cfdaf80cc.jpg",
                           title: "Замена и контроль расходных материалов",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6466-6332-4766-b532-306338623338/-/cover/142x142/center/center/-/format/webp/person1.jpg",
                           title: "Уборка прилегающей территорий и паркинга",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                            img: "https://thumb.tildacdn.com/tild6235-3635-4133-b938-373031656431/-/cover/142x142/center/center/-/format/webp/clean.jpg",
                            title: "Офисы, по определенном регламенту",
                            color: "#b7e4ea",
                            border: "none",
                         },
                         {
                            img: "https://thumb.tildacdn.com/tild6663-6337-4633-b931-383132333134/-/cover/142x142/center/center/-/format/webp/60b956cb14805457e96a.jpg",
                            title: "Сезонная мойка окон",
                            color: "#fff",
                            border: "none",
                         },
                         {
                            img: "https://thumb.tildacdn.com/tild6632-6465-4235-a436-373737646365/-/cover/142x142/center/center/-/format/webp/himchistka-mebeli-i-.jpg",
                            title: "Химчистка ковров и мягкой мебели",
                            color: "#fff",
                            border: "none",
                         },
                         {
                            img: "https://thumb.tildacdn.com/tild6332-6133-4530-b130-386539656638/-/cover/142x142/center/center/-/format/webp/eb54bd93eb3771eadc3a.jpg",
                            title: "Механизированная уборка или ручная",
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
               title={" обслуживания бизнес - центра"}
               subtitle={
                  "Для каждого объекта цена рассчитывается индивидуально. Во внимание берется абсолютно все, начиная от"
               }
               desc={[
                  "Графика работы",
                  "Сколько персонала требуется",
                  "Какие полотенца нужно закупать для комфорта",
                  "Метраж",
                  "Уборка ручная или механизированная",
                  "Типы поверхностей и т.д",
               ]}
               footerTitle={
                  "Чтобы рассчитать детально, пригласите менеджера нашей компании «Colibri» и мы бесплатно предоставим расчеты."
               }
            />
        
            <WhyUs />
         </div>
      </>
   );
};
export default BusinessCenterPage;
