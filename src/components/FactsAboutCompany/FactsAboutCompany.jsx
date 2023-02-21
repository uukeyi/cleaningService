import React from "react";
import styles from "./FactsAboutCompany.module.css";
const FactsAboutCompany = () => {
   const { container, titleContainer, cardContainer, bg } = styles;
   return (
      <section className={container}>
         <div className="container">
            <div className={titleContainer}>
               <p>8</p>
               <p>
                  <span>фактов &nbsp;</span>
                  <br />
                  <span> о нашей компании</span>
               </p>
            </div>
            <div className={cardContainer}>
               {[
                  {
                     title: "7 лет опыта",
                     desc: "Более тысячи выполненных уборок",
                     bgColor: "#fff",
                     duration : "900"
                  },
                  {
                     title: "Опытные клинеры",
                     desc: "Строгий отбор и профессиональный инструктаж",
                     bgColor: "#b7e3ea",
                     duration : "800"

                  },
                  {
                     title: "Гарантия качества",
                     desc: "Если понадобится, мы сразу исправим недочёты",
                     bgColor: "#fff",
                     duration : "700"

                  },
                  {
                     title: "Избранный клинер",
                     desc: "Один и тот же клинер для всех ваших уборок",
                     bgColor: "#b7e3ea",
                     duration : "600"

                  },
                  {
                     title: "Надежность",
                     desc: "Компенсация или ремонт, если что-то пойдёт не так",
                     bgColor: "#b7e3ea",
                     duration : "500"

                  },
                  {
                     title: "Скидки",
                     desc: "Скидки 10% на первый заказ",
                     bgColor: "#fff",
                     duration : "400"

                  },
                  {
                     title: "Честная цена",
                     desc: "Платите за метры, а не за количество комнат",
                     bgColor: "#b7e3ea",
                     duration : "300"

                  },
                  {
                     title: "Профессиональные моющие средства",
                     desc: "И профессиональное оборудование",
                     bgColor: "#fff",
                     duration : "200"
                  },
               ].map((card, index) => {
                  return (
                     <div data-aos = "fade-down" data-aos-duration = {card.duration} style={{ backgroundColor: card.bgColor }} key={index}>
                        <p>{card.title}</p>
                        <p>{card.desc}</p>
                     </div>
                  );
               })}
               <img
                  style={{ transform: "rotate(-180deg)", top: "0", left: "0" }}
                  className={bg}
                  src="https://thumb.tildacdn.com/tild3034-6530-4430-a261-316533353761/-/resize/879x/-/format/webp/Ellipse_83.png"
                  alt="#"
               />
               <img
                  className={bg}
                  style={{ top: "150px", right: "0px" }}
                  src="https://thumb.tildacdn.com/tild3034-6530-4430-a261-316533353761/-/format/webp/Ellipse_83.png"
                  alt="#"
               />
               <img className={bg}  style={{top : '650px' , right : '0'}} src="https://thumb.tildacdn.com/tild3337-6566-4335-a561-366338323336/-/resize/240x/-/format/webp/_27.png" alt="#" />
            </div>
         </div>
      </section>
   );
};

export default FactsAboutCompany;
