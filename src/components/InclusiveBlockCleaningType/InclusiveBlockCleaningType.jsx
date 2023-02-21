import React from "react";
import styles from "./InclusiveBlockCleaningType.module.css";
const InclusiveBlockCleaningType = ({ rooms, kitchen, bathroom , classNameList }) => {
   const { container, title , listService } = styles;
   return (
      <div className={container}>
         <div>
         <p className={title}>{rooms.title}</p>
            <ul className={`${listService} ${classNameList}`} >
               {rooms.text.map((service, index) => {
                  return <li key={index}>{service}</li>;
               })}
            </ul>
         </div>
         <div>
         <p className={title}>{kitchen.title}</p>
            <ul className={listService} >
               {kitchen.text.map((service, index) => {
                  return <li key={index}>{service}</li>;
               })}
            </ul>
         </div>
         <div>
         <p className={title}>{bathroom.title}</p>
            <ul className={listService} >
               {bathroom.text.map((service, index) => {
                  return <li key={index}>{service}</li>;
               })}
            </ul>
         </div>
      </div>
   );
};

export default InclusiveBlockCleaningType;
