import React from "react";
import styles from "./DryCleaningPage.module.css";
import ListDryCleaning from "../../components/ListDryCleaning/ListDryCleaning";
import { useOrderPopup } from "../../contexts/orderPopupContext";
const DryCleaningPage = () => {
   const {
      mainContainer,
      textContainer,
      mainTitle,
      mainSubtitle,
      contentContainer,
      mainCard,
      mainBtn,
      mainBtnContainer,
      servicesContainer,
      hiddenContainer,
   } = styles;
   const {setIsOpen} = useOrderPopup()
   return (
      <div className={mainContainer}>
         <div className={`container ${hiddenContainer}`}>
            <div className={textContainer}>
               <p className={mainTitle}>Химчистка</p>
               <p className={mainSubtitle}>
                  Химчистка ковров, мягкой мебели и матрасов
               </p>
            </div>
            <div className={contentContainer}>
               {[
                  {
                     img: "https://thumb.tildacdn.com/tild3932-6237-4631-b831-373962366430/-/cover/312x206/center/center/-/format/webp/2017-1657-Babayans-C.jpg",
                     title: "Химчистка ковров",
                     path: "carpets",
                  },
                  {
                     img: "https://thumb.tildacdn.com/tild3838-3535-4838-a533-643037326433/-/cover/312x206/center/center/-/format/webp/4424_large_149457650.jpg",
                     title: "Химчистка мягкой мебели",
                     path: "furniture",
                  },
                  {
                     img: "https://thumb.tildacdn.com/tild3663-3730-4138-b465-383835646234/-/cover/312x206/center/center/-/format/webp/700x420-e15293530871.jpg",
                     title: "Химчистка матрасов",
                     path: "mattresses",
                  },
                  {
                     img: "https://thumb.tildacdn.com/tild3461-6433-4234-b533-343034313662/-/cover/312x206/center/center/-/format/webp/stirka-shtor.jpg",
                     title: "Стирка штор",
                     path: "curtains",
                  },
               ].map((card, index) => {
                  return (
                     <a  key={index} href={`#${card.path}`} className={mainCard} >
                        <div
                           style={{ cursor: "pointer" }}
                          
                          
                        >
                           <img src={card.img} alt="#" />
                           <p>{card.title}</p>
                        </div>
                     </a>
                  );
               })}
            </div>
            <div className={mainBtnContainer}>
               <button onClick={() => {
                  setIsOpen(true)
               }} className={mainBtn}>Заказать уборку</button>
            </div>
            <div className={servicesContainer}>
               {[
                  {
                     title: "Химчистка Мебели",
                     path: "furniture",
                     arr: [
                        {
                           title: "Химчистка 2-х местного дивана",
                           price: "1800 рублей",
                        },
                        {
                           title: "Химчистка 3-х местного дивана",
                           price: "2300 рублей",
                        },
                        {
                           title: "Химчистка углового дивана",
                           price: "2800 рублей",
                        },
                        {
                           title: "Химчистка кухонного уголка",
                           price: "1500 рублей",
                        },
                        {
                           title: "Химчистка одного посадочного места",
                           price: "500 рублей",
                        },
                        {
                           title: "Химчистка дивана другой конструкции",
                           price: "рассчитывается индивидуально",
                        },
                        {
                           title: "Химчистка офисного кресла",
                           price: "400 рублей",
                        },
                        {
                           title: "Химчистка мягкого кресла",
                           price: "800 рублей",
                        },
                        {
                           title: "Химчистка стула",
                           price: "350 рублей",
                        },
                     ],
                  },
                  {
                     title: "Химчистка Матрасов",
                     path: "mattresses",
                     arr: [
                        {
                           title: "Химчистка матраса одноместного (1-а сторона/2-е стороны)",
                           price: "600/1200 рублей",
                        },
                        {
                           title: "Химчистка матраса полуторка (1-а сторона/2-е стороны)",
                           price: "800/1600 рублей",
                        },
                        {
                           title: "Химчистка матраса двухместного (1-а сторона/2-е стороны)",
                           price: "1100/2200 рублей",
                        },
                     ],
                  },
                  {
                     title: "Химчистка Ковров",
                     path: "carpets",
                     arr: [
                        {
                           title: "Химчистка синтетического ковра или ковролина до 100 кв.м",
                           price: "200 рублей за кв.м.",
                        },
                        {
                           title: "Химчистка синтетического ковра или ковролина свыше 100 кв.м",
                           price: "180 рублей за кв.м",
                        },
                        {
                           title: "Химчистка шерстяного ковра",
                           price: "300 рублей за кв.м.",
                        },
                     ],
                  },
                  {
                     title: "Стирка Штор",
                     path: "curtains",
                     arr: [
                        {
                           title: "Полный цикл стирки штор (стирка, глажка, отпаривание)",
                           price: "350 рублей за кг.",
                        },
                        {
                           title: "Снятие и вешание штор",
                           price: "100 рублей/гардина",
                        },
                     ],
                  },
               ].map((list, index) => {
                  return (
                     <ListDryCleaning
                        key={index}
                        title={list.title}
                        arr={list.arr}
                        id = {list.path}
                     />
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default DryCleaningPage;
