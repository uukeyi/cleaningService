import React from "react";
import styles from "./HomePage.module.css";
import HomePageMainDesc from "../../components/HomePageMainDesc/HomePageMainDesc";
import TypesOfCleaningHomePage from "../../components/TypesOfCleaningHomePage/TypesOfCleaningHomePage";
import CalculatePrice from "../../components/CalculatePrice/CalculatePrice";
import FactsAboutCompany from "../../components/FactsAboutCompany/FactsAboutCompany";
import OrderGeneralCleaning from "../../components/OrderGeneralCleaning/OrderGeneralCleaning";
import Faq from "../../components/Faq/Faq";
import FeedbackFooter from "../../components/FeedbackFooter/FeedbackFooter";
const HomePage = () => {
   const {
      background,
      homePageContainer,
      backgroundSofa,
      circleBgContainer,
      whatWeUseContainer,
     titleStrong,
      cardContainer,
   } = styles;
   return (
      <>
         <div className={homePageContainer}>
            <div className="container">
               <HomePageMainDesc />
               <div className={background}>
                  <img
                     className={backgroundSofa}
                     src="https://thumb.tildacdn.com/tild6162-3566-4063-a665-623865326566/-/format/webp/97d94515-bc70-417d-a.png"
                     alt="@"
                  />
                  <div className={circleBgContainer}>
                     <div>
                        <p>ОТ</p>
                        <p>2500 р</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <TypesOfCleaningHomePage />
         <CalculatePrice />
         <FactsAboutCompany />
         <OrderGeneralCleaning />
         <section className={whatWeUseContainer}>
            <div className="container">
               <p className={titleStrong}>
                  Мы используем &nbsp;
                  <strong>
                     безопасные моющие средства и профессиональное оборудование
                  </strong>
               </p>
               <div className={cardContainer}>
                  {[
                     "https://thumb.tildacdn.com/tild3836-3564-4161-b461-653332326332/-/cover/289x211/center/center/-/format/webp/photo.png",
                     "https://thumb.tildacdn.com/tild3830-3130-4165-a335-366236363066/-/cover/288x211/center/center/-/format/webp/_59.png",
                     "https://thumb.tildacdn.com/tild3035-3437-4130-b662-343035643335/-/cover/289x211/center/center/-/format/webp/_60.png",
                     "https://thumb.tildacdn.com/tild6663-3766-4933-b833-363964656461/-/cover/289x212/center/center/-/format/webp/_61.png",
                     "https://thumb.tildacdn.com/tild6538-3362-4335-b734-653063323538/-/cover/288x211/center/center/-/format/webp/_62.png",
                  ].map((img , index) => {
                     return <img key={index} src={img} alt="#" />;
                  })}
               </div>
            </div>
         </section>
         <Faq/>
       <FeedbackFooter/>

      </>
   );
};

export default HomePage;
