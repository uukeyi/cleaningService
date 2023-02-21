import React from "react";
import AlertForCleaningPages from "../../components/AlertForCleaningPages/AlertForCleaningPages";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import ImageDescForServicePages from "../../components/ImageDescForServicePages/ImageDescForServicePages";
import ListOfFacilityServices from "../../components/ListOfFacilityServices/ListOfFacilityServices";
import { useOrderPopup } from "../../contexts/orderPopupContext";

import styles from "./GroceryStorePage.module.css";

const GroceryStorePage = () => {
   const {
      mainContainer,
      mainCard,
      mainTitle,
      fullWidthContainer,
      mainList,
      dailyCleaningContainer,
      flexContainer,
      blueBlock,
      bgImage,
      bgCircle,
      textContainer,
      alertCircle,
      btnContainer , 
      mainBlueBtn ,

   } = styles;
   const {setIsOpen} = useOrderPopup()
   return (
      <>
         <ForWhatServiceImg
            title="Уборка магазинов"
            subtitle={"магазинов"}
            img="https://thumb.tildacdn.com/tild3634-3062-4936-b730-356336373963/-/format/webp/_.png"
            imgClassname={bgImage}
         />
         <div className={blueBlock}>
            <div style={{ position: "relative" }} className="container">
               <div className={textContainer}>
                  <p>
                     Клининг магазинов в СПб, осуществляемый сотрудниками нашей
                     компании - это:
                  </p>
                  <ul>
                     <li>ОПЕРАТИВНОСТЬ</li>
                     <li>ПРОФЕССИОНАЛИЗМ</li>
                     <li>АДЕКВАТНЫЕ ЦЕНЫ</li>
                     <li>ГАРАНТИЯ ВЫСОКОГО КАЧЕСТВА</li>
                  </ul>
               </div>
               <img
                  className={bgCircle}
                  src="https://thumb.tildacdn.com/tild6662-3561-4436-b262-613965316635/-/cover/168x169/center/center/-/format/webp/8925afae17a751868983.png"
                  alt="#"
               />
            </div>
         </div>
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "Уборка в торговых залах требует особого подхода, ведь в магазине много посетителей и чистоты добиться сложно.  В идеале комплексная чистка магазинов должна проводиться ежедневно: либо до открытия, либо после закрытия магазина. Дополнительно, в течение дня обязательно нужно проводить поддерживающую влажную уборку."
               }
            />

            <div className={dailyCleaningContainer}>
               <div className={`container ${fullWidthContainer}`}>
                  <p style={{ marginTop: "120px" }} className={mainTitle}>
                     <strong>В задачи клинеров </strong>нашей службы входит:
                  </p>

                  <ListOfFacilityServices
                     arr={[
                        {
                           img: "https://thumb.tildacdn.com/tild6235-6161-4634-b964-366466306439/-/cover/142x142/center/center/-/format/webp/79f4e8fc8c69054304d3.png",
                           title: "Влажная уборка полов, стен, лестниц",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6330-3762-4763-b231-613662373830/-/cover/142x142/center/center/-/format/webp/ec7d7f855764e66dcaab.png",
                           title: "Чистка витрин, перил, холодильников с помощью безопасных дезинфицирующих средств",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3733-6363-4232-a333-653366333635/-/cover/142x142/center/center/-/format/webp/f355cf156d6a736abc9a.png",
                           title: "Уборка в санузлах, замена гигиенических средств",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6564-3464-4534-a437-656333633232/-/cover/142x142/center/center/-/format/webp/3f867f27541c8f5384e7.png",
                           title: "Вынос мусора и очистка мусорных ведер",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3138-3432-4436-a236-663861366664/-/cover/142x142/center/center/-/format/webp/38e485edee880020c1df.png",
                           title: "Уборка на складе и в помещениях для персонала",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6465-3334-4263-b762-353932376262/-/cover/142x142/center/center/-/format/webp/58441fc0ba2b7aa31672.png",
                           title: "Прочие клининговые услуги по желанию заказчика",
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
                     <strong>Что входит в уборку </strong>магазинов в СПб:
                  </p>

                  <div className={flexContainer}>
                    <ImageDescForServicePages img={'https://thumb.tildacdn.com/tild3666-3162-4761-a535-663366373865/-/cover/431x302/center/center/-/format/webp/7d713df7a13df7d621ba.png'} desc = "Уборка после ремонта магазина . Включает в себя полное удаление строительной пыли и влажную уборку помещений. После ремонта с поверхностей удаляются пятна от клея, краски, цемента, побелки и других строительных загрязнений." />
                    <ImageDescForServicePages img={'https://thumb.tildacdn.com/tild3038-6133-4735-b363-663237303866/-/cover/431x302/center/center/-/format/webp/4441d4d0d258dd55b1f0.png'} desc = "Генеральная уборка магазина . Включает в себя удаление повседневных загрязнений поверхностей в торговых залах магазина, служебных помещениях. Предусмотрена чистка мебели, кухонного оборудования, витрин, дверей, стекол, светильников, холодильников, стен и прочих поверхностей. Сантехника и кабины в уборных не только моются, но и дезинфицируются с помощью безопасных растворов." />
                  
                    <ImageDescForServicePages img={'https://thumb.tildacdn.com/tild3164-6530-4435-b230-323963356439/-/cover/431x302/center/center/-/format/webp/0de5f1a9c9ea84ac32c6.png'} desc = "Регулярная уборка . Эта услуга предоставляется в течение рабочего дня, когда необходима влажная уборка полов и поверхностей оборудования магазина. Служебные помещения, торговые залы, уборные очищаются от пыли, тщательно вымываются от грязи. Регулярная уборка проводится по оговоренному с клиентом графику." />
                  
                  </div>
               </div>
            </div>
            <AlertForCleaningPages text={'Дополнительные задачи от заказчика, которые не включены в план уборки, оплачиваются отдельно'} classNameCircle = {alertCircle} />
            <div className={btnContainer}>
               <button
                  onClick={() => {
                     setIsOpen(true);
                  }}
                  className={mainBlueBtn}
               >
                  <img
                     src="https://thumb.tildacdn.com/tild3261-3966-4164-b762-373863616538/-/cover/111x91/center/center/-/format/webp/811e84f809065169d86d.png"
                     alt="#"
                  />
                  Заказать уборку
               </button>
            </div>
         </div>
      </>
   );
};

export default GroceryStorePage;
