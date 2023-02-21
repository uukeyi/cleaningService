import React from "react";
import styles from "./CleaningPage.module.css";
import { useNavigate } from "react-router-dom";
import { useOrderPopup } from "../../contexts/orderPopupContext";
const CleaningPage = () => {
   const {
      mainContainer,
      fullWidthContainer,
      mainTitle,
      mainSubtitle,
      textContainer,
      cardContainer,
      mainCard,
      cardActionContainer,
      blackBtn,
      blueBtn,
      cardTextContainer,
      mainDescContainer,
   } = styles;
   const { setIsOpen } = useOrderPopup();
   const navigate = useNavigate();
   return (
      <div className={mainContainer}>
         <div className={`container ${fullWidthContainer}`}>
            <div className={textContainer}>
               <p className={mainTitle}>Уборка и мойка</p>
               <p className={mainSubtitle}>
                  Услуги клининговой компании «Colibri»
               </p>
            </div>
            <div className={cardContainer}>
               {[
                  {
                     title: "Влажная уборка квартир",
                     path: "wetCleaning",
                     img: "https://img.freepik.com/free-photo/high-angle-young-woman-cleaning_23-2148394942.jpg?w=1380&t=st=1676569287~exp=1676569887~hmac=d807594ac98664ab0c09f1bef88351c1da80bf0e675a850ec1676a15f687c126",
                  },
                  {
                     title: "Генеральная уборка квартир",
                     path: "generalCleaning",
                     img: "https://img.freepik.com/free-photo/man-with-bucket-of-cleaning-products_23-2148133363.jpg?w=1380&t=st=1676569333~exp=1676569933~hmac=20c84be9e0d6cfe3cb5ada3a2c641a27694b89eb9bdd53d362b9ecb815ba3cbb",
                  },
                  {
                     title: "Уборка коттеджей",
                     path: "privateHouses",
                     img: "https://img.freepik.com/free-photo/hand-holding-stand-with-cleaning-products_23-2149345539.jpg?w=1380&t=st=1676569365~exp=1676569965~hmac=088d5c8bcc39203b73a89c25ea625333c2a50d789ce0451a837fa1768414e636",
                  },
                  {
                     title: "Мытье окон и балконов",
                     path: "windowCleaning",
                     img: "https://img.freepik.com/free-photo/woman-in-protective-gloves-is-smiling-and-wiping-dust-using-a-spray-and-a-duster-while-cleaning-her-house-close-up_231208-12392.jpg?w=1380&t=st=1676569403~exp=1676570003~hmac=0989733907bf86c3c27857f13a1eb6b65ff10a52c58e6133c8f23dfd49ccea64",
                  },
                  {
                     title: "Уборка после ремонта",
                     path: "cleaningRepair",
                     img: "https://img.freepik.com/free-photo/man-cleaning-his-home_23-2148119213.jpg?w=1380&t=st=1676569452~exp=1676570052~hmac=7a7be37cc34b90040ef58335d1e4f5742f76357980dd50b59c6b3377715982d7",
                  },
                  {
                     title: "Уборка коммерческих помещений",
                     path: "commercialPremise",
                     img: "https://img.freepik.com/free-photo/close-up-of-man-cleaning-his-house_23-2148112860.jpg?w=1380&t=st=1676569526~exp=1676570126~hmac=9fc4a12232378297d9f83062c76648e2cb19902bd534a7e38781547621f213bd",
                  },
               ].map((card, index) => {
                  return (
                     <div className={mainCard} key={index}>
                        <div
                           style={{ cursor: "pointer" }}
                           onClick={() => {
                              navigate(`/${card.path}`);
                           }}
                           className={cardTextContainer}
                        >
                           <img src={card.img} alt="#" />
                           <p>{card.title}</p>
                        </div>

                        <div className={cardActionContainer}>
                           <button
                              onClick={() => {
                                 navigate(`/${card.path}`);
                              }}
                              className={blackBtn}
                           >
                              Подробнее
                           </button>
                           <button
                              onClick={() => {
                                 setIsOpen(true);
                              }}
                              className={blueBtn}
                           >
                              Заказать
                           </button>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className={mainDescContainer}>
               <p>
                  Профессиональный подход к уборке, с применением новейших
                  средств и технологий, только квалифицированный персонал,
                  осуществляем постоянный контроль за качеством выполняемых
                  услуг по уборке вашего помещения в Санкт-Петербуре – мы готовы
                  сделать все, чтобы вы получили качественные услуги, и
                  комфортные условия по уборки в Санкт-Петербурге. Мы
                  гарантируем Вам превосходную чистоту. Мы рассчитываем на
                  длительные отношения с нашими любимыми клиентами, и поэтому вы
                  всегда можете быть уверенны в высоком уровне качества и
                  сервиса с нашей стороны. Клининговая компания <strong>«Colibri»</strong> в
                  Санкт-Петербурге — преимущества комфортной уборки квартиры или
                  офиса!
               </p>
            </div>
         </div>
      </div>
   );
};

export default CleaningPage;
