import { createContext, useContext, useState } from "react";

const OrderPopupContext = createContext();
export const useOrderPopup = () => {
   return useContext(OrderPopupContext);
};
export const OrderPopupProvider = ({ children }) => {
   const [open, setIsOpen] = useState(false);
   const [openPrice , setIsOpenPrice] = useState(false)
   const [openPrivacyPolicy , setOpenPrivacyPolicy] = useState(false)
   return (
      <OrderPopupContext.Provider
         value={{
            open: open,
            setIsOpen: setIsOpen,
            openPrice : openPrice,
            setIsOpenPrice : setIsOpenPrice,
            openPrivacyPolicy : openPrivacyPolicy,
            setOpenPrivacyPolicy : setOpenPrivacyPolicy
         }}
      >
         {children}
      </OrderPopupContext.Provider>
   );
};
