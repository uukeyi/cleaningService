import React from "react";
import BlueInfoBlock from "../../components/BlueInfoBlock/BlueInfoBlock";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import ListOfFacilityServices from "../../components/ListOfFacilityServices/ListOfFacilityServices";
import RoomPrice from "../../components/RoomPrice/RoomPrice";
import WhyUs from "../../components/WhyUs/WhyUs";
import styles from "./ShoppingCenterPage.module.css";

const ShoppingCenterPage = () => {
   const {
      mainContainer,
      mainCard,
      mainTitle,
      complexContainer,
      fullWidthContainer,
      mainList,
      dailyCleaningContainer,
      mainSubtitle,
   } = styles;
   return (
      <>
         <ForWhatServiceImg
            title="Уборка торговых центров"
            subtitle={"торговых центров"}
            img="https://thumb.tildacdn.com/tild6164-3061-4865-b263-383666636165/-/format/webp/35dd68a3ad58dca55be2.jpg"
         />
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "Такие места характеризуются большим потоком посетителей, что требует повышенных усилий для поддержания чистоты. Обширные площади необходимо убирать оперативно и эффективно, для чего часто не хватает персонала и технического оснащения. На уборку расходуются материальные средства, а результат не оправдывает ожиданий. В таких случаях поможет привлечение квалифицированных сотрудников из клинингового агентства."
               }
               subtitle={
                  "Клининговая компания «Colibri» предлагает оказание услуг по поддерживающей уборке помещений, учитывая любые пожелания Заказчика"
               }
               extraDesc={
                  "Стоит понимать, что существует различная классификация заводов, а именно тяжелой, легкой и пищевой промышленности. Все они имеют свои особенности и требования, отличается техника безопасности и специфика работ."
               }
            />
            <BlueInfoBlock
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
            <div className={complexContainer}>
               <div className={`container ${fullWidthContainer}`}>
                  <p className={mainTitle}>
                     <strong>Комплекс поддерживающих</strong> мероприятий
                     включает:
                  </p>
                  <ListOfFacilityServices
                     arr={[
                        {
                           img: "https://thumb.tildacdn.com/tild6435-3264-4365-b037-373366376433/-/cover/142x142/center/center/-/format/webp/valytoja-81471775.jpg",
                           title: "Удаление на полу очагов случайных загрязнений",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6263-3531-4231-b037-666239653365/-/cover/142x142/center/center/-/format/webp/60b956cb14805457e96a.jpg",
                           title: "Протирание ручек, дверей, стеклянных поверхностей",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6462-6238-4335-a337-333566326439/-/cover/142x142/center/center/-/format/webp/_2.jpg",
                           title: "Обслуживание санитарных зон общего пользования",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3362-6434-4735-b831-383334323266/-/cover/142x142/center/center/-/format/webp/person1.jpg",
                           title: "Обеспечение чистоты входного блока",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3963-3439-4562-b035-663638623833/-/cover/142x142/center/center/-/format/webp/stock-photo-handsome.png",
                           title: "Полувлажная уборка в холле, на лестнице и в лифте",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6230-3861-4635-b463-326263326461/-/cover/142x142/center/center/-/format/webp/23080_97109cceab86a9.jpg",
                           title: "Уборка мусора на прилегающей территории",
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
                  <p style={{ marginTop: "120px" }} className={mainTitle}>
                     <strong>Комплекс поддерживающих</strong> мероприятий
                     включает:
                  </p>
                  <p className={mainSubtitle}>
                     Подразумевает выполнение большого комплекса мероприятий,
                     учитывающих все нюансы помещений. В перечень работ входит
                  </p>
                  <ListOfFacilityServices
                     arr={[
                        {
                           img: "https://thumb.tildacdn.com/tild3465-6238-4764-b332-353564626364/-/cover/142x142/center/center/-/format/webp/clean-tc.jpg",
                           title: "Ежедневная уборка торговых центров",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6132-3536-4732-b236-363165376237/-/cover/142x142/center/center/-/format/webp/2020_3_15_14_30_19_8.jpg",
                           title: "Очистка и придание блеска хромированным, зеркальным и стеклянным поверхностям",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6235-3134-4664-b134-653737363936/-/cover/142x142/center/center/-/format/webp/uborka-biznes-czentr.jpg",
                           title: "Протирание мебели и дверей",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6335-3137-4436-b533-623362656437/-/cover/142x142/center/center/-/format/webp/2-128.jpg",
                           title: "Тщательная уборка полов поломоечной машиной",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6262-3934-4430-a231-313931376236/-/cover/142x142/center/center/-/format/webp/noroot.png",
                           title: "Уборка витрин и стендов",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6466-6135-4266-b230-383134643266/-/cover/142x142/center/center/-/format/webp/stock-photo-handsome.png",
                           title: "Санитарный уход за лестницами, лифтами и подъемниками",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://static.tildacdn.com/tild3832-6439-4034-a563-326531383464/e6fb830bd0f5dd3adea6.jpg",
                           title: "Сухая и влажная уборка вспомогательных помещений",
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
               title={"обслуживания торгового центра"}
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
               footerTitle = {'Чтобы рассчитать детально, пригласите менеджера нашей компании «Colibri» и мы бесплатно предоставим расчеты.'}
            />
            <WhyUs/>
         </div>
      </>
   );
};

export default ShoppingCenterPage;
