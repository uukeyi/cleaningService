import React from "react";
import styles from "./InfoBlockCleaningType.module.css";
const InfoBlockCleaningType = ({
   price,
   priceDesc,
   services,
   minPrice,
   minPriceDesc,
  stylesForPriceDesc
}) => {
   const { container, serviceDesc, serviceSubTitle, priceTitle } = styles;
   return (
      <div className={container}>
         <div>
            <p className={priceTitle}>{price}</p>
            {priceDesc ? <p className={serviceSubTitle} style={stylesForPriceDesc} >{priceDesc}</p> : null}
         </div>
         <div className={serviceDesc}>
            {services.text.map((service, index) => {
               return <p key={index}>{service}</p>;
            })}
            {services.subtitle ? (
               <p className={serviceSubTitle}>{services.subtitle}</p>
            ) : null}
         </div>
         <div className={serviceDesc}>
            <p className={priceTitle}>{minPrice}</p>
            <p className={serviceSubTitle}>{minPriceDesc}</p>
         </div>
      </div>
   );
};

export default InfoBlockCleaningType;
