import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useOrderPopup } from "../contexts/orderPopupContext";
import PopupOrder from "../components/PopupOrder/PopupOrder";
import QuizModal from "../components/QuizModal/QuizModal";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
const MainLayout = () => {
   const { open, setIsOpen  , openPrice , setIsOpenPrice , openPrivacyPolicy , setOpenPrivacyPolicy} = useOrderPopup();
   return (
      <>
         <QuizModal
            open={openPrice}
            setIsOpen={setIsOpenPrice}
            title={"Узнать стоимость"}
            text={
               "Оставьте свои контактные данные, мы перезвоним Вам в течении 20 минут для уточнения деталей"
            }
            btnTitle={"Отправить"}
         />
         <PrivacyPolicy
         open = {openPrivacyPolicy}
         setIsOpen = {setOpenPrivacyPolicy}
         
         
         
         />

         <PopupOrder
            open={open}
            setIsOpen={setIsOpen}
            title={"Заказать уборку"}
            text={"Мы перезвоним Вам в течении 20 минут для уточнения деталей"}
            btnTitle={"Заказать уборку"}
         />
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   );
};

export default MainLayout;
