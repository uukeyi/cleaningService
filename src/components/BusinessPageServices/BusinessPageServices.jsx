import React from "react";
import ListOfFacilityServices from "../ListOfFacilityServices/ListOfFacilityServices";
import styles from "./BusinessPageServices.module.css";
const BusinessPageService = () => {
   const {
      mainContainer,
      bgClouds,
      cardContainer,
      container,
      mainCard,
      contentContainer,
      contentTitle,
   } = styles;
   return (
      <>
         <section className={mainContainer}>
            <img
               className={bgClouds}
               src="https://thumb.tildacdn.com/tild6635-3261-4964-b261-373036336634/-/format/webp/_16.png"
               alt="#"
            />
            <div className={`container ${container}`}>
               <div className={cardContainer}>
                  {[
                     {
                        title: "100%",
                        underTitle: "постоплата",
                        img: "https://thumb.tildacdn.com/tild3366-3637-4531-b432-643065616635/-/resize/112x/-/format/webp/_378.png",
                     },
                     {
                        title: "Бесплатный выезд",
                        underTitle: " менеджера для оценки",
                        img: "https://thumb.tildacdn.com/tild3637-6166-4233-b861-613863343733/-/resize/100x/-/format/webp/_.png",
                     },
                     {
                        title: "Индивидуальный",
                        underTitle: "подход к вашей задаче",
                        img: "https://thumb.tildacdn.com/tild3438-6664-4566-b632-333866323439/-/resize/102x/-/format/webp/_379.png",
                     },
                  ].map((card, index) => {
                     return (
                        <div key={index} className={mainCard}>
                           <img src={card.img} alt="#" />
                           <p>
                              <span>{card.title}</span>
                              <span>{card.underTitle}</span>
                           </p>
                        </div>
                     );
                  })}
               </div>
               <div className={contentContainer}>
                  <p className={contentTitle}>
                     Мы предоставляем услуги клининга для <br /> следующих
                     объектов:
                  </p>
                  <ListOfFacilityServices
                     arr={[
                        {
                           title: "Торговые центры",
                           img: "https://thumb.tildacdn.com/tild3032-6130-4539-b261-383837616530/-/cover/73x72/center/center/-/format/webp/gbt87kur4so.jpg",
                           path : 'shoppingCenter',
                           color : '#93e1ed',
                           border : 'none'
                        },
                        {
                           title: "Бизнес-центры",
                           img: "https://thumb.tildacdn.com/tild6634-6434-4861-b066-326138313530/-/cover/73x72/center/center/-/format/webp/original.jpg",
                           color : '#e8fcff',
                           border : '1px solid #9fd6eb',
                           path : 'businessCenter'
                        },
                        {
                           title: "Заводы",
                           img: "https://thumb.tildacdn.com/tild3835-6465-4138-a639-353035666532/-/cover/73x72/center/center/-/format/webp/_.png",
                           color : '#93e1ed',
                           border : 'none',
                           path : 'factoryCleaning'
                        },
                        {
                           title: "Фитнес клубов",
                           img: "https://thumb.tildacdn.com/tild3433-6263-4530-a133-323964646430/-/cover/73x72/center/center/-/format/webp/30907_15577479091146.jpg",
                           color : '#e8fcff',
                           border : '1px solid #9fd6eb',
                           path : 'fitnessClub'
                        },
                        {
                           title: "Офисные помещения",
                           img: "https://thumb.tildacdn.com/tild3762-3630-4265-a133-656231333232/-/cover/73x72/center/center/-/format/webp/ktt7ybbqsmwnrvt06yrg.jpg",
                           color : '#93e1ed',
                           border : 'none',
                           path : 'officeRoom'
                        },
                        {
                           title: "Автосалоны",
                           img: "https://thumb.tildacdn.com/tild6231-6230-4937-b133-613362373064/-/cover/73x72/center/center/-/format/webp/1556502561.jpg",
                           color : '#e8fcff',
                           border : '1px solid #9fd6eb',
                           path : 'carShowroom'
                        },
                        {
                           title: "Паркинг",
                           img: "https://thumb.tildacdn.com/tild3961-3061-4663-b166-313033343236/-/cover/73x72/center/center/-/format/webp/noroot.png",
                           color : '#93e1ed',
                           border : 'none',
                           path : 'parking'
                        },
                        {
                           title: "Складов",
                           img: "https://thumb.tildacdn.com/tild3637-6633-4337-b061-383263326163/-/cover/73x72/center/center/-/format/webp/noroot.png",
                           color : '#e8fcff',
                           border : '1px solid #9fd6eb',
                           path : 'warehouses'
                        },
                        {
                           title: "Подьездов",
                           img: "https://thumb.tildacdn.com/tild6635-6162-4061-a166-336538393631/-/cover/73x72/center/center/-/format/webp/a9c7ced3167631bc9390.jpg",
                           color : '#93e1ed',
                           border : 'none',
                           path : 'entrance'
                        },
                        {
                           title: "Магазинов",
                           img: "https://thumb.tildacdn.com/tild3133-3966-4437-b539-626166656131/-/cover/73x72/center/center/-/format/webp/142e2647-3032-4862-a.jpg",
                           color : '#e8fcff',
                           border : '1px solid #9fd6eb',
                           path : 'groceryStore'
                        },
                        {
                           title: "Кинотеатров",
                           img: "https://thumb.tildacdn.com/tild6161-6665-4162-b131-616366666166/-/cover/73x72/center/center/-/format/webp/1625624176_9-phonote.jpg",
                           color : '#93e1ed',
                           border : 'none',
                           path : 'cinema'
                        },
                       
                     ]}
                  />
               </div>
            </div>
         </section>
      </>
   );
};

export default BusinessPageService;
