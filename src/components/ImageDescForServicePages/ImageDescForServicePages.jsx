import React from "react";
import styles from "./ImageDescForServicePages.module.css";
const ImageDescForServicePages = ({ desc, img , background }) => {
   const { mainContainer , mainBlock , fullWidthContainer } = styles;
   return (
      <div style={{background : background}} className={mainBlock} >
         <div className={`container ${fullWidthContainer}`}>
            <div className={mainContainer}>
               <p>{desc}</p>
               <img src={img} alt="" />
            </div>
         </div>
      </div>
   );
};

export default ImageDescForServicePages;
