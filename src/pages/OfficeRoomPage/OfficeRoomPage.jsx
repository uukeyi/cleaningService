import React from "react";
import AlertForCleaningPages from "../../components/AlertForCleaningPages/AlertForCleaningPages";
import ForWhatServiceImg from "../../components/ForWhatServiceImg/ForWhatServiceImg";
import ForWhatServiceText from "../../components/ForWhatServiceText/ForWhatServiceText";
import ImageDescForServicePages from "../../components/ImageDescForServicePages/ImageDescForServicePages";
import ListOfFacilityServices from "../../components/ListOfFacilityServices/ListOfFacilityServices";
import RoomPrice from "../../components/RoomPrice/RoomPrice";
import WhyUs from "../../components/WhyUs/WhyUs";
import styles from "./OfficeRoomPage.module.css";

const OfficeRoomPage = () => {
   const {
      mainContainer,
      mainCard,
      mainTitle,
      complexContainer,
      fullWidthContainer,
      mainList,
      descContainer,
      bgCircle,
      bgWomen
   } = styles;
   return (
      <>
         <ForWhatServiceImg
            title="Уборка офисов"
            subtitle={"офисов"}
            img="https://thumb.tildacdn.com/tild3131-6261-4035-b037-366339663137/-/format/webp/_0png.png"
         />
         <div className={mainContainer}>
            <ForWhatServiceText
               desc={
                  "Уборка офисного помещения необходима, как ежедневно, так и разово. Ежедневная уборка офиса может быть утренней и вечерней (до начала рабочего дня или после его окончания). Необходима для поддержания чистоты в офисном помещении и соблюдения санитарных норм. Если офис посещают клиенты — такая уборка необходима, особенно в зимнее время. Разовая генеральная. Приведем помещение в порядок после переезда или ремонта."
               }
            />

            <div className={complexContainer}>
               <div className={`container ${fullWidthContainer}`}>
                  <p className={mainTitle}>
                     <strong>Уборка офиса</strong> может включать:
                  </p>
                  <ListOfFacilityServices
                     arr={[
                        {
                           img: "https://thumb.tildacdn.com/tild3065-3962-4630-b535-353031356638/-/cover/142x142/center/center/-/format/webp/Winter-Cleaning-Imag.jpg",
                           title: "Чистку ковров и ковролина",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3134-6234-4531-b837-366135366337/-/cover/142x142/center/center/-/format/webp/na-czym-polega-konse.jpg",
                           title: "Мытье полов с чистящими средствами",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild6139-3830-4665-b139-306565633262/-/cover/142x142/center/center/-/format/webp/Fotolia_199511179_XS.jpg",
                           title: "Чистку ковровых покрытий",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3938-3734-4736-b663-653837323736/-/cover/142x142/center/center/-/format/webp/180427113431_F.jpg",
                           title: "Мойку наличников, плинтусов, батареей центрального отопления, оконных рам и стекол.",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3162-6664-4462-a366-303139616261/-/cover/142x142/center/center/-/format/webp/8b1a0d62882cfdaf80cc.jpg",
                           title: "Мойку жалюзи",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3936-3461-4566-b933-346238376339/-/cover/142x142/center/center/-/format/webp/himchistka-mebeli-i-.jpg",
                           title: "Удаление загрязнений с мебели, чистку диванов, кресел и т.д.",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://thumb.tildacdn.com/tild3131-3363-4638-b463-353065303938/-/cover/142x142/center/center/-/format/webp/uborka-rabochego-pro.jpg",
                           title: "Чистка поверхностей рабочей оргтехники (компьютеры, принтеры и пр.)",
                           color: "#b7e4ea",
                           border: "none",
                        },
                        {
                           img: "https://static.tildacdn.com/tild3930-6132-4761-b565-616132643866/XXL.jpg",
                           title: "Мытье стен, чистка выключателей, розеток, удаление пыли с плакатов, картин, табличек.",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://static.tildacdn.com/tild6165-6232-4261-a265-353363623166/wc.jpg",
                           title: "Если офис имеет свой санузел — комплексные работы по мытью и дезинфекции.",
                           color: "#fff",
                           border: "none",
                        },
                        {
                           img: "https://static.tildacdn.com/tild3431-3430-4634-b633-646635333035/23080_97109cceab86a9.jpg",
                           title: "Вынос мусора, замена мусорных пакетов и т.д.",
                           color: "#b7e4ea",
                           border: "none",
                        },
                     ]}
                     classNameCard={mainCard}
                     classNameContainer={mainList}
                  />
               </div>
            </div>
            <div className={descContainer}>
               <ImageDescForServicePages
                  desc="Ежедневная и генеральная уборка офиса профессионалами клининговой компании — залог быстроты и качества. Мы работаем, строго соблюдая оговоренное время. Наши специалисты имеют все необходимые инструменты, чистящие средства, средства защиты. Оказываем весь спектр услуг, направленных на поддержание чистоты в офисном помещении."
                  img={
                     "https://thumb.tildacdn.com/tild6534-6239-4366-a635-643833663132/-/cover/431x302/center/center/-/format/webp/noroot.png"
                  }
                  background={"#fff"}
               />
               <AlertForCleaningPages
                  text={
                     "Дополнительные задачи от заказчика, которые не включены в план уборки, оплачиваются отдельно"
                  }
                  background="#fff"
                  classNameCircle={bgCircle}
               />
            </div>

            <RoomPrice
               title={"уборки офиса"}
               subtitle={
                  "Цена уборки офиса зависит от ряда факторов:"
               }
               desc={[
                  "Метража",
                  "Времени уборки",
                  "Сложности и характера уборки (ежедневно или разово)",
                  "Необходимости дополнительных услуг",
               ]}
               footerTitle={
                  "После того, как Вы свяжитесь с нами, мы рассчитаем окончательную стоимость обслуживания вашего помещения."
               }
               bgImageClass = {bgWomen}
            />
            <WhyUs />
         </div>
      </>
   );
};

export default OfficeRoomPage;
