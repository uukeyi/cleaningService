import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ListOfFacilityServices.module.css'
const ListOfFacilityServices = ({arr  ,classNameCard , classNameContainer}) => {
    const {mainContainer , mainCard , bgSpot } = styles
    const navigate = useNavigate()
    return (
        <div className={`${mainContainer} ${classNameContainer}`} >
           {
            arr.map((card, index) => {
                return (
                    <div  onClick={() => {
                        navigate(`/${card.path}`)
                    }} key={index} style={{background : card.color , border : card.border , cursor : 'pointer'}} className={`${mainCard} ${classNameCard}`} >
                        <img src={card.img} alt="#" />
                        <p>
                            {card.title}
                        </p>
                        </div>
                )
            })
           }
           <img className={bgSpot} src="https://thumb.tildacdn.com/tild3337-3363-4263-a133-313231343435/-/resize/596x/-/format/webp/Ellipse_83.png" alt="#" />
        </div>
    )
}

export default ListOfFacilityServices;