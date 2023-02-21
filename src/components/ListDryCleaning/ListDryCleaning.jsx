import React from "react";
import styles from "./ListDryCleaning.module.css";
const ListDryCleaning = ({ title, arr , id }) => {
   const { mainTitle, mainList } = styles;
   return (
      <div id={id}>
         <p className={mainTitle}>
            <span>{title}</span>
            <span>Цена</span>
         </p>
         <ul className={mainList}>
            {arr.map((item, index) => {
               return (
                  <li
                     style={{
                        background: index % 2 !== 0 ? "#d9d9d9" : "white",
                     }}
                     key={index}
                  >
                     <span>{item.title}</span>
                     <span>{item.price}</span>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default ListDryCleaning;
