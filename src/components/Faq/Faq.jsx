import React, { useState } from "react";
import styles from "./Faq.module.css";
const Faq = () => {
   const {
      container,
      titleContainer,
      accordionContainer,
      cardAccordion,
      accordionDesc,
      contentContainer,
      accordionDescActive,
      reverseIcon,
      fullWidthContainer,
      bgCircle,
      bgCircleRight
   } = styles;
   const [selected, setSelected] = useState(null);
   return (
      <section className={container}>
         <div className={`container ${fullWidthContainer}`}>
            <div className={titleContainer}>
               <p>
                  Часто задаваемые <strong>вопросы</strong>
               </p>
            </div>
            <div className={accordionContainer}>
               {[
                  {
                     title: "Могу ли я оставить клинера одного в квартире?",
                     desc: "Вы можете спокойно оставить клинера в квартире, уйти по делам и вернуться к концу уборки (время заранее обговорите). Так же у нас есть дополнительная опция: клинера можно попросить заехать за ключами от квартиры по любому адресу, а потом вернуть, когда уборка закончится.",
                  },
                  {
                     title: "Обязательно ли присутствовать в момент уборки?",
                     desc: "Вам не обязательно находиться дома! Вы можете встретить сотрудников. Показать им квартиру и озвучить все пожелания к уборке. За час, полтора до окончания уборки, в зависимости от Вашего пожелания вам позвонят. Вы можете спокойно заниматься своими делами, а потом просто принять выполненную работу и наслаждаться чистотой Вашего дома!",
                  },
                  {
                     title: "Сколько времени займет уборка?",
                     desc: "Время уборки напрямую зависит от степени загрязнения квартиры. В среднем на генеральную уборку уходит от 5 до 8 часов.",
                  },
                  {
                     title: "Кто приедет выполнять уборку?",
                     desc: "У нас есть сотрудники граждане РФ и граждане стран СНГ. Все они свободно владеют русским языком. Вежливы и опрятны. Имеют большой опыт работы в клининге на объектах различной сложности. Мы постоянно проводим тренинги для повышения квалификации персонала, внедряем новые более прогрессивные способы уборки и стараемся предусмотреть и исключить возникновение нештатных ситуаций во время проведения работ.",
                  },
               ].map((acc, index) => {
                  return (
                     <div
                        data-id={index}
                        key={index}
                        className={cardAccordion}
                        onClick={() => {
                           if (selected === index) {
                              return setSelected(null);
                           }
                           setSelected(index);
                        }}
                     >
                        <div className={contentContainer}>
                           <p>{acc.title}</p>
                           <div>
                              <img
                                 className={
                                    selected === index ? reverseIcon : ""
                                 }
                                 src="https://cdn-icons-png.flaticon.com/512/2549/2549959.png"
                                 alt="#"
                              />
                           </div>
                        </div>

                        <div
                           className={
                              selected === index
                                 ? accordionDescActive
                                 : accordionDesc
                           }
                        >
                           <p>{acc.desc}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         <img className={bgCircle} src="https://thumb.tildacdn.com/tild6435-3439-4535-b431-613531666566/-/resize/314x/-/format/webp/_19__6png.png" alt="#" />
         <img className={bgCircleRight} src="https://static.tildacdn.com/tild6363-3361-4832-b439-653632373937/_19__7.png" alt="#" />
      </section>
   );
};
export default Faq;
