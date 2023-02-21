import React from "react";
import styles from "./WhyUs.module.css";
const WhyUs = ({ mainContainerClass }) => {
   const {
      mainContainer,
      bgImage,
      mainTitle,
      cardContainer,
      mainCard,
      cardImgContainer,
   } = styles;
   return (
      <div className={`${mainContainer} ${mainContainerClass}`}>
         <div className="container">
            <p className={mainTitle}>
               <strong>Почему выбирают</strong> "Colibri"
            </p>
            <div className={cardContainer}>
               {[
                  {
                     img: "https://static.tildacdn.com/tild3433-6230-4830-a565-373765393830/medal-star.png",
                     title: "Имеем штат квалифицированных работников",
                  },
                  {
                     img: "https://static.tildacdn.com/tild3039-6564-4362-a565-323264623765/star.png",
                     title: "Широкий спектр предоставляемых услуг позволяет решить любую задачу",
                  },
                  {
                     img: "https://static.tildacdn.com/tild3231-6364-4261-b831-613830386264/like-shapes.png",
                     title: "Контролируем работу сотрудников на каждом этапе",
                  },
                  {
                     img: "https://static.tildacdn.com/tild6637-3136-4836-b733-343764373232/timer.png",
                     title: "Оперативно реагируем на запросы клиентов.",
                  },
               ].map((card, index) => {
                  return (
                     <div key={index}  className={mainCard}>
                        <div className={cardImgContainer}>
                            <img src={card.img} alt="#" />
                        </div>
                        <p>
                            {
                                card.title
                            }
                        </p>
                     </div>
                  );
               })}
            </div>
         </div>

         <img
            className={bgImage}
            src="https://static.tildacdn.com/tild6435-3439-4535-b431-613531666566/_19__6png.png"
            alt="#"
         />
      </div>
   );
};

export default WhyUs;
