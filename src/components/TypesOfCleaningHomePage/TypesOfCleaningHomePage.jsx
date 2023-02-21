import React from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import styles from "./TypesOfCleaningHomePage.module.css";
import TypesOfCleaningCard from "../TypesOfCleaningCard/TypesOfCleaningCard";
const TypesOfCleaningHomePage = () => {
   const {
      cardContainerDesc,
      typesOfCleaningBlockText,
      typesOfCleaningBlockCards,
   } = styles;
   return (
      <section
         style={{
            position: "relative",
         }}
      >
         <img
            style={{
               position: "absolute",
               left: "0",
               top: "300px",
               objectFit: "cover",
               backgroundRepeat: "no-repeat",
               zIndex: "-1",
            }}
            src="https://thumb.tildacdn.com/tild6263-3335-4336-a334-333337366433/-/resize/382x/-/format/webp/_19_.png"
            alt="#"
         />
         <div className="container">
            <div className={cardContainerDesc}>
               {[
                  {
                     img: "https://thumb.tildacdn.com/tild6131-6130-4264-b466-326530373166/-/cover/105x90/center/center/-/format/webp/c980b65e-6e2d-433d-8.png",
                     title: "100% постоплата",
                     text: "Вы платите только после приёма выполненных работ",
                     isReverse: false,
                  },
                  {
                     img: "https://thumb.tildacdn.com/tild3434-6564-4563-b363-313265323931/-/cover/204x87/center/center/-/format/webp/346a68b9-cb9a-4805-a.png",
                     title: "Бесплатный выезд",
                     text: "Менеджер бесплатно приедет к Вам для оценки стоимости",
                     isReverse: true,
                  },
                  {
                     img: "https://thumb.tildacdn.com/tild6331-3533-4362-b832-316365333532/-/cover/69x109/center/center/-/format/webp/0f5927e6-6638-4ea1-b.png",
                     title: "Педантичные клинеры",
                     text: "Обученный персонал не пропустит ни пятнышка",
                     isReverse: false,
                  },
               ].map((card, index) => {
                  return (
                     <HomePageCard
                        img={card.img}
                        key={index}
                        title={card.title}
                        isReverse={card.isReverse}
                        text={card.text}
                     />
                  );
               })}
            </div>

            <img
               style={{
                  position: "absolute",
                  right: "0",
                  top: "60%",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "-1",
               }}
               src="https://thumb.tildacdn.com/tild3337-6566-4335-a561-366338323336/-/resize/240x/-/format/webp/_27.png"
            />

            <div className={typesOfCleaningBlockText}>
               <p>6</p>
               <p>
                  <span>видов уборки &nbsp;</span>
                  <br />
                  <span>под ваши задачи и бюджет</span>
               </p>
            </div>
            <div className={typesOfCleaningBlockCards}>
               {[
                  {
                     img: "https://img.freepik.com/free-photo/young-woman-with-cleaning-products_23-2148394870.jpg?w=996&t=st=1676123135~exp=1676123735~hmac=6d914f9da1199543f74bc6aee78b5db590e4861f454cf1deedee0ad23164ae65",
                     title: "Поддерживающая уборка",
                     desc: "Легкая уборка для поддержания чистоты в квартире",
                     avTime: "2-3 часа.",
                     amWorkers: "1-2 чел.",
                     price: "от 4 000р",
                     prevPrice: "от 6 500р",
                     path : 'wetCleaning'
                  },
                  {
                     img: "https://img.freepik.com/free-photo/frustrated-tired-young-european-wife-wearing-headband-standing-close-to-her-bearded-husband-and-staring-at-dirty-spot-on-window-glass-domestic-work-and-household-duties-concept_273609-7873.jpg?w=1380&t=st=1676564114~exp=1676564714~hmac=0948de0c1cb02ef7330fe15c1aaa8b01b55c119bcfda96b1cb981516c7ec13db",
                     title: "Генеральная уборка",
                     desc: "Тщательная уборка профессиональными средствами и оборудованием",
                     avTime: "5-6 часов.",
                     amWorkers: "3-5 чел.",
                     price: "от 100 р/м2",
                     prevPrice: "от 180 р/м2",
                     path : 'generalCleaning'
                  },
                  {
                     img: "https://img.freepik.com/free-photo/portrait-of-man-cleaning-his-house_23-2148119212.jpg?w=996&t=st=1676564152~exp=1676564752~hmac=b64ae62dead1e6c28798d49e6b0ae61387ead88a8a34cf02b2d871145ba886bc",
                     title: "Уборка после ремонта",
                     desc: "Подготовим Ваше помещение к использованию",
                     avTime: "5-6 часов.",
                     amWorkers: "3-5 чел.",
                     price: "от 100 р/м2",
                     prevPrice: "от 180 р/м2",
                     path : 'cleaningRepair'
                  },
                  {
                     img: "https://img.freepik.com/free-photo/woman-cleaning-the-house_53876-30618.jpg?w=1380&t=st=1676564198~exp=1676564798~hmac=d596a363549e59446c04b3c9eb95d4342ffc93056f320c2ef23542c49dc9def0",
                     title: "Уборка коттеджей",
                     desc: "Тщательная уборка профессиональными средствами и оборудованием",
                     avTime: "3-5 часов.",
                     amWorkers: "3-5 чел.",
                     price: "от 60 р/м2",
                     prevPrice: "от 90 р/м2",
                     path : 'privateHouses'
                  },
                  {
                     img: "https://img.freepik.com/free-photo/woman-cleaning-the-window-with-rag_23-2148465069.jpg?w=1380&t=st=1676564218~exp=1676564818~hmac=97b6f22f5f678cf1db72269076338b073e007a8638c7928f83140df19b648ee7",
                     title: "Мытье окон , балконов , панорам",
                     desc: "Чистые окна - это залог хорошего вида из окна",
                     avTime: "3-4 часа.",
                     amWorkers: "1-5 чел.",
                     price: "от 300 р за окно",
                     prevPrice: "от 450 р",
                     path : "windowCleaning"
                  },
                  {
                     img: "https://img.freepik.com/free-photo/person-taking-care-of-office-cleaning_23-2149374475.jpg?w=1380&t=st=1676564230~exp=1676564830~hmac=4dd09e7135e1580bd948ba488efe65f94bed63958aeb57c2ec3e53ec05664561",
                     title: "Уборка оффисов",
                     desc: "Клиенты оценят приятную , чистую обстановку в Вашем офисе",
                     avTime: "1-3 часа.",
                     amWorkers: "3-5 чел.",
                     price: "от 60 р/м2",
                     prevPrice: "от 90 р/м2",
                     path : 'commercialPremise'
                  },
               ].map((card, index) => {
                  return (
                     <TypesOfCleaningCard
                        img={card.img}
                        title={card.title}
                        desc={card.desc}
                        avTime={card.avTime}
                        amWorkers={card.amWorkers}
                        price={card.price}
                        prevPrice={card.prevPrice}
                        key={index}
                        path = {card.path}
                     />
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default TypesOfCleaningHomePage;
