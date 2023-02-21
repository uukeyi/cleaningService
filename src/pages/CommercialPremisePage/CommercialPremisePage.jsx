import React from "react";
import { useOrderPopup } from "../../contexts/orderPopupContext";
import styles from "./CommercialPremisePage.module.css";
const CommercialPremisePage = () => {
   const {
      mainContainer,
      textContainer,
      mainTitle,
      mainDesc,
      hiddenContainer,
      contentContainer,
      contentTextContainer,
      contentList,
      contentImgContainer,
      mainListContainer,
      mainList,
      btnContainer
   } = styles;
   const { setIsOpen} = useOrderPopup()
   return (
      <div className={mainContainer}>
         <div className={`container ${hiddenContainer}`}>
            <div className={textContainer}>
               <p className={mainTitle}>
                  Профессиональная уборка коммерческих помещений
               </p>
               <p className={mainDesc}>
                  Предлогаем полный спектр услуг по содержанию объектов в
                  чистоте и порядке, а также генеральной уборки коммерческих
                  помещений, промышленных предприятий, государственных
                  учреждений, ТЦ, офисов, бизнес центров, складов, паркинг и
                  больших частных домов. Индивидуальный подход к каждому объекту
                  с учетом всех его особенностей. Стоимость услуг за 1 месяц
                  высчитывается, из технического требования. Под техническим
                  требованием подразумевается: график уборки, количество
                  персонала на объекте, объем убираемой территории, мойка окон и
                  с какой периодичностью, количество расходных средств.
               </p>
            </div>
            <div className={contentContainer}>
               <div className={contentTextContainer}>
                  <p className={mainTitle}>Какие услуги предоставляем</p>
                  <ul className={contentList}>
                     {[
                        "Постоянное обслуживание",
                        "Генеральная уборка",
                        "Уборка после ремонта",
                        "Промышленный альпинизм",
                        "Химчистка мебели и ковролина",
                        "Роторная чистка пола",
                        "Послестроительный клининг",
                        "Индивидуальный подход к каждому объекту",
                     ].map((title, index) => {
                        return <li key={index}>{title}</li>;
                     })}
                  </ul>
               </div>
               <div className={contentImgContainer}>
                  <img
                     src="https://img.freepik.com/free-photo/full-shot-man-vacuuming-office-floor_23-2149345550.jpg?w=1380&t=st=1676567436~exp=1676568036~hmac=40154e075e12ee9da5bd8261cd0d2a2a18d0b89b6a82946f8db992bbd3f3bd9b"
                     alt="#"
                  />
               </div>
            </div>
            <div className={mainListContainer}>
               <p>Преимущество работы с нами:</p>
               <ul className={mainList}>
                  {[
                     {
                        title: "Гибкая система расценок",
                        id: 1,
                     },
                     {
                        title: "Экономия средств за счет сокращения штата сотрудников, которые занимаются уборкой",
                        id: 2,
                     },
                     {
                        title: "Экономия на покупке моющих средств и уборочной техники",
                        id: 3,
                     },
                     {
                        title: "С каждым клиентом работает персональный менеджер, который контролирует работы клинеров, а так же занимается снабжением объекта",
                        id: 4,
                     },
                     {
                        title: "Квалифицированный и обученный персонал. Единый внешний вид. Система контроля качества работы. Экономия вашего времени на поиск сотрудников",
                        id: 5,
                     },
                  ].map((item, index) => {
                     return (
                        <li key={index} >
                           <div>{item.id}</div>
                           {item.title}
                        </li>
                     );
                  })}
               </ul>
            </div>
            <div className={btnContainer}>
               <button onClick={() => {
                setIsOpen(true)
               }}  data-aos = "fade-down" >Заказать уборку</button>
            </div>
         </div>
      </div>
   );
};

export default CommercialPremisePage;
