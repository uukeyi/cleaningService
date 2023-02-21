import React from "react";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import ImageDescForServicePages from "../../components/ImageDescForServicePages/ImageDescForServicePages";
import ListOfFacilityServices from "../../components/ListOfFacilityServices/ListOfFacilityServices";
import styles from "./CarShowroomPage.module.css";
import AlertForCleaningPages from "../../components/AlertForCleaningPages/AlertForCleaningPages";
import { useOrderPopup } from "../../contexts/orderPopupContext";
const CarShowroomPage = () => {
   const {
      mainContainer,
      mainCard,
      mainTitle,
      complexContainer,
      fullWidthContainer,
      mainList,
      descContainer,
      mainBlueBtn,
      btnContainer
   } = styles;
   const { setIsOpen } = useOrderPopup();
   return (
      <>
         <ForWhatServiceImg
            title="Уборка автосалонов"
            subtitle={"автосалонов"}
            img="https://thumb.tildacdn.com/tild3765-3937-4239-b432-376663646337/-/format/webp/_0.png"
         />
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "Автосалон — это по-настоящему сложный объект, где нужно выполнять большой спектр услуг: клининг офисных помещений и демонстрационного зала, поддержание чистоты на прилегающей территории, поддержание в чистоте парковочных зон и стоянок автомобилей, а также мойка автомобилей и комплексная базовая уборка салонов."
               }
               extraDesc="Мойка автосалона нужна не только для внешней чистоты. Автосалон — место с большим количеством посетителей. Чистота помещений и прилегающих зон необходима для: Поддержки имиджа, Соблюдения санитарных норм."
            />
            <div className={descContainer}>
               <ImageDescForServicePages
                  desc="Чистое помещение — одна из составляющих успешного бизнеса. Поддержание чистоты точечно менеджерами — не решение проблемы. Здесь нужен комплексный подход и профессиональное обслуживание."
                  img={
                     "https://thumb.tildacdn.com/tild6666-3866-4166-b235-633564323633/-/cover/436x231/center/center/-/format/webp/medium-shot-of-two-b.jpg"
                  }
                  background={"#e8fafa"}
               />
            </div>

            <div className={complexContainer}>
               <div className={`container ${fullWidthContainer}`}>
                  <p className={mainTitle}>
                     <strong>Что мы делаем:</strong> В перечень обязательных
                     работ по ежедневной уборке входят:
                  </p>
                  <ListOfFacilityServices
                     arr={[
                        {
                           img: "https://thumb.tildacdn.com/tild6463-3936-4665-a233-666266393038/-/cover/142x142/center/center/-/format/webp/original_4fc5c9393c7.jpg",
                           title: "Ежедневная забота о том, чтобы входная группа, окна и зона для клиентов всегда были чистыми",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3337-3764-4738-a230-386139306432/-/cover/142x142/center/center/-/format/webp/avtosalon_3.jpg",
                           title: "Тщательная уборка офисных помещений",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6365-3265-4931-a537-376562643730/-/cover/142x142/center/center/-/format/webp/xr_amq0rif1pidfack0g.png",
                           title: "Интенсивный и постоянный уход за демонстрационным залом, где автомобили выставлены на продажу",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3334-3831-4665-b339-313466333333/-/cover/142x142/center/center/-/format/webp/photo_5.jpg",
                           title: "Поддержание чистоты на парковках и стоянках машин",
                           color: "#fff",
                           border: "none",
                        },
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

export default CarShowroomPage;
