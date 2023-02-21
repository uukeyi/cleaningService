import React from "react";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import ImageDescForServicePages from "../../components/ImageDescForServicePages/ImageDescForServicePages";
import ListOfFacilityServices from "../../components/ListOfFacilityServices/ListOfFacilityServices";
import styles from "./ParkingPage.module.css";
import AlertForCleaningPages from "../../components/AlertForCleaningPages/AlertForCleaningPages";
import { useOrderPopup } from "../../contexts/orderPopupContext";
const ParkingPage = () => {
   const {
      mainContainer,
      mainCard,
      mainTitle,
      complexContainer,
      fullWidthContainer,
      mainList,
      descContainer,
      mainBlueBtn,
      btnContainer,
   } = styles;
   const { setIsOpen } = useOrderPopup();
   return (
      <>
         <ForWhatServiceImg
            title="Уборка паркинга"
            subtitle={"паркинга"}
            img="https://thumb.tildacdn.com/tild3937-3433-4032-b861-626166656361/-/format/webp/_0png.png"
         />
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "В Санкт-Петербурге большое количество автомобилей, поэтому наличие оборудованных парковочных мест здесь стало важной частью организации городской территории в жилищных массивах, торговых центрах и бизнес-центрах."
               }
               extraDesc="Уборка стоянок необходима в любое время года. Зимой нужно очищать территорию от снега и наледи, а летом обеспыливать парковку и убирать мусор. Производится уборка регулярно и в срочном порядке."
            />
            <div className={descContainer}>
               <ImageDescForServicePages
                  desc="Мусор на парковке — залежи отходов (пищевых, биологических и т.д.) становятся источником плохого запаха и рассадником инфекции. Снег и наледь на парковке приносят неудобства, так как уменьшают полезную площадь территории."
                  img={
                     "https://thumb.tildacdn.com/tild6330-3763-4534-b338-656432303631/-/cover/596x231/center/center/-/format/webp/polirovka-pola-do-po.png"
                  }
                  background={"#e8fafa"}
               />
            </div>

            <div className={complexContainer}>
               <div className={`container ${fullWidthContainer}`}>
                  <p className={mainTitle}>
                     <strong>Регулярная уборка паркинга</strong> включает в
                     себя:
                  </p>
                  <ListOfFacilityServices
                     arr={[
                        {
                           img: "https://thumb.tildacdn.com/tild3337-6561-4631-b765-656539363134/-/cover/142x142/center/center/-/format/webp/77495f2f-02ab-4c27-a.jpg",
                           title: "Подметание территории",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6232-3064-4061-a439-313331643862/-/cover/142x142/center/center/-/format/webp/na-czym-polega-konse.jpg",
                           title: "Ликвидацию химических загрязнений (масло, бензин и т.п.)",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6335-3436-4666-a266-666335326462/-/cover/142x142/center/center/-/format/webp/e6fb830bd0f5dd3adea6.jpg",
                           title: "Сбор и вывоз мусора",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3637-3933-4435-b739-363838313438/-/cover/142x142/center/center/-/format/webp/23080_97109cceab86a9.jpg",
                           title: "Очистку урн",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3733-3764-4133-b730-356439636139/-/cover/142x142/center/center/-/format/webp/person1.jpg",
                           title: "Также может включать уход за дополнительными сооружениями и прилегающей территорией.",
                           color: "#fff",
                           border: "none",
                        }
                     ]}
                     classNameCard={mainCard}
                     classNameContainer={mainList}
                  />
               </div>
            </div>
            <AlertForCleaningPages
               text={
                  "Эти и иные факторы влияют на качество жизни населения и репутацию организаций, в чьей зоне ответственности находится территория."
               }
               background="transparent"
            />
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

export default ParkingPage;
