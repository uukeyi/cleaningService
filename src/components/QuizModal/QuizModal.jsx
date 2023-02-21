import React, { useState, useEffect } from "react";
import styles from "./QuizModal.module.css";
import FormQuestion from "./QuizQuestions/FormQuestion/FormQuestion";
import ImageQuestion from "./QuizQuestions/ImageQuestion/ImageQuestion";
import InputTextQuestion from "./QuizQuestions/InputTextQuestion/InputTextQuestion";
import RangeInput from "./QuizQuestions/RangeInput/RangeInput";
import TypeCleaning from "./QuizQuestions/TypeCleaning/TypeCleaning";
const QuizModal = ({ open, setIsOpen }) => {
   const {
      textContainer,
      headerTitleContainer,
      mainTitle,
      contentContainer,
      contentImgContainer,
      popup,
      popupTextContainer,
      mainSubtitle,
      mainBtn,
      popupBg,
      headerQuestion,
      footerQuestion,
      progressBar,
      mainQuestion,
      questionContainer,
      progressBarText,
      questionBtnContainer,
      progressBarContainer,
   } = styles;
   const [index, setIndex] = useState(-1);
   const [progress, setProgress] = useState(0);
   const [indexElement, setIndexElement] = useState(null);
   const [answers, setAnswers] = useState([
      {
         id: "roomType",
         title: "Тип помещения",
         answer: "",
      },
      {
         id: "typeCleaning",
         title: "Тип уборки",
         answer: "",
      },
      {
         id: "rangeInput",
         title: "Квадратных метров для уборки",
         answer: "",
      },
      {
         id: "presenceFurniture",
         title: "Наличие мебели",
         answer: "",
      },
      {
         id: "windowCleaning",
         title: "Мытье окон",
         answer: "",
      },
      {
         id: "adress",
         title: "Адрес",
         answer: "",
      },
      {
         id: "prize",
         title: "Подарок",
         answer: "",
      },
 
   ]);
   useEffect(() => {
      setIndexElement(null);
   }, [index]);
   const questions = [
      <ImageQuestion
         arr={[
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/fipqbkvjhd59m3j4nwjk.jpg",
               title: "Квартира",
            },
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/rdksjz71gxbsrsnssjee.jpg",
               title: "Частный дом",
            },
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/ea5ir8rcb8sfjr3ffmgb.png",
               title: "Коммерческое помещение",
            },
         ]}
         indexElement={indexElement}
         setIndexElement={setIndexElement}
         setData={setAnswers}
         data={answers}
         prefix="roomType"
      />,
      <TypeCleaning
         data={answers}
         setData={setAnswers}
         prefix="typeCleaning"
         setIndexElement={setIndexElement}
      />,
      <RangeInput
         data={answers}
         setData={setAnswers}
         prefix="rangeInput"
         setIndexElement={setIndexElement}
      />,
      <ImageQuestion
         arr={[
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/rgfdus4nymolblombobi.jpg",
               title: "Да",
            },
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/nx6hdmlv8cture119ezw.jpg",
               title: "Минимум мебели",
            },
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/jevl0fdohxrrpjhdnkjm.jpg",
               title: "Нет",
            },
         ]}
         indexElement={indexElement}
         setIndexElement={setIndexElement}
         setData={setAnswers}
         data={answers}
         prefix={"presenceFurniture"}
      />,
      <ImageQuestion
         arr={[
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/ncpuogqj64il3jdq9ze0.png",
               title: "Да!",
            },
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/kxs17arvgclrtmyrcxlt.png",
               title: "В другой раз",
            },
         ]}
         indexElement={indexElement}
         setIndexElement={setIndexElement}
         setData={setAnswers}
         data={answers}
         prefix={"windowCleaning"}
      />,
      <InputTextQuestion
         data={answers}
         setData={setAnswers}
         setIndexElement={setIndexElement}
         prefix={"adress"}
      />,
      <ImageQuestion
         arr={[
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/acgjwiml5miewjrwdeeh.png",
               title: "Постоянная скидка 5%  на все услуги",
            },
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/ndz5qfepodsqy0ivvpji.png",
               title: "Дезинфицирующее средство в подарок",
            },
            {
               img: "https://hgwipn3sa-res.cloudinary.com/image/upload/w_420,f_auto,q_auto,g_auto,c_fill,h_420,dpr_1/wbxlcfdezx2ejwujvvn4.png",
               title: "Мойка створки бесплатно",
            },
         ]}
         indexElement={indexElement}
         setIndexElement={setIndexElement}
         setData={setAnswers}
         data={answers}
         prefix={"prize"}
      />,
   ];
   const handleClick = (e) => {
      if (e.target.classList[0] === "popup-bg") {
         setIsOpen(false);
         document.body.style.overflow = "auto";
      }
   };
   useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
         document.addEventListener("click", handleClick);
      };
   }, [open]);

   return (
      <div className={open ? `popup-bg active ${popupBg}` : "popup-bg"}>
         <div className={open ? `popup active ${popup}` : "popup"}>
            {index !== -1 ? (
               <>
                  {index !== 7 ? (
                     <div className={questionContainer}>
                        <div className={headerQuestion}>
                           Профессиональный клининг жилых и коммерческих
                           помещений
                           <svg
                              onClick={() => {
                                 document.body.style.overflow = "auto";
                                 setIsOpen(false);
                              }}
                              role="presentation"
                              width="23px"
                              height="23px"
                              viewBox="0 0 23 23"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xlink="http://www.w3.org/1999/xlink"
                              style={{
                                 cursor: "pointer",
                                 position: "absolute",
                                 top: "10px",
                                 float: "right",
                                 right: "10px",
                                 display: open ? "block" : "none",
                                 width: "18px",
                                 height: "18px",
                              }}
                           >
                              <g
                                 stroke="none"
                                 strokeWidth="1"
                                 fill="#292929"
                                 fillRule="evenodd"
                              >
                                 <rect
                                    transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
                                    x="10.3137085"
                                    y="-3.6862915"
                                    width="2"
                                    height="30"
                                 ></rect>
                                 <rect
                                    transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
                                    x="10.3137085"
                                    y="-3.6862915"
                                    width="2"
                                    height="30"
                                 ></rect>
                              </g>
                           </svg>
                        </div>
                        <div className={mainQuestion}>{questions[index]}</div>

                        <div className={footerQuestion}>
                           <div className={progressBarContainer}>
                              <p className={progressBarText}>
                                 Готово : <span>{progress}%</span>
                              </p>
                              <div className={progressBar}>
                                 <div style={{ width: `${progress}%` }}></div>
                              </div>
                           </div>
                           <div className={questionBtnContainer}>
                              <button
                                 style={{
                                    cursor:
                                       index === 0 ? "not-allowed" : "pointer",
                                 }}
                                 type="button"
                                 disabled={index === 0 ? true : false}
                                 onClick={() => {
                                    if (index === answers.length - 1) {
                                       setProgress((prev) => prev - 28);
                                       setIndex(index - 1);
                                    } else {
                                       setProgress((prev) => prev - 12);
                                       setIndex(index - 1);
                                    }
                                 }}
                              >
                                 Назад
                              </button>
                              <button
                                 style={{
                                    cursor:
                                       indexElement === null
                                          ? "not-allowed"
                                          : "pointer",
                                 }}
                                 disabled={indexElement === null ? true : false}
                                 onClick={() => {
                                    if (index === answers.length - 2) {
                                       setProgress((prev) => prev + 28);
                                       setIndex(index + 1);
                                    } else {
                                       setProgress((prev) => prev + 12);
                                       setIndex(index + 1);
                                    }
                                 }}
                              >
                              Далее
                              </button>
                           </div>
                        </div>
                     </div>
                  ) : (
                     <>
                        <FormQuestion data = {answers} open = {open} setIsOpen = {setIsOpen} />
                     </>
                  )}
               </>
            ) : (
               <div className={contentContainer}>
                  <svg
                     onClick={() => {
                        document.body.style.overflow = "auto";
                        setIsOpen(false);
                     }}
                     role="presentation"
                     width="23px"
                     height="23px"
                     viewBox="0 0 23 23"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     xlink="http://www.w3.org/1999/xlink"
                     style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "10px",
                        float: "right",
                        right: "10px",
                        display: open ? "block" : "none",
                     }}
                  >
                     <g
                        stroke="none"
                        strokeWidth="1"
                        fill="#292929"
                        fillRule="evenodd"
                     >
                        <rect
                           transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
                           x="10.3137085"
                           y="-3.6862915"
                           width="2"
                           height="30"
                        ></rect>
                        <rect
                           transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
                           x="10.3137085"
                           y="-3.6862915"
                           width="2"
                           height="30"
                        ></rect>
                     </g>
                  </svg>
                  <div className={textContainer}>
                     <div className={headerTitleContainer}>
                        <img
                           src="https://hgwipn3sa-res.cloudinary.com/image/upload/w_auto,f_auto,q_auto,g_auto,c_fill,h_37,dpr_1/zpcjahos4ubuu6zvzm3x.png"
                           alt="#"
                        />
                     </div>
                     <div className={popupTextContainer}>
                        <p className={mainTitle}>
                           Профессиональная <br /> уборка жилых и <br />{" "}
                           коммерческих помещений
                        </p>
                        <p className={mainSubtitle}>
                           Рассчитайте стоимость уборки с точностью 95% и
                           выберите себе подарок
                        </p>
                        <button
                           onClick={() => {
                              setIndex(index + 1);
                           }}
                           className={mainBtn}
                        >
                           Пройти тест
                        </button>
                     </div>
                     <a
                        style={{ textDecoration: "underline" }}
                        href="tel:+79654066644"
                     >
                        +7 (965) 406-66-44
                     </a>
                  </div>
                  <div className={contentImgContainer}>
                     <img
                        src="https://hgwipn3sa-res.cloudinary.com/image/upload/w_823,f_auto,q_auto,g_auto,c_fill,dpr_1/aqvq0mlanx4dbtxctcfc.png"
                        alt="#"
                     />
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default QuizModal;
