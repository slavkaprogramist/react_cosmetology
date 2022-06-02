import styles from "./Card.module.scss"
import React from 'react'

function Card({imgageUrl,onFavorite,title,price,onPlus}){
const [isAdded, setIsAdded] = React.useState(false);
const [isFavorite, setIsFavorite]= React.useState(false);

const handleClick = ()=>{
  onPlus({imgageUrl,title,price});
  setIsAdded(!isAdded);
}
const onClickFavorite =()=>{
  onFavorite({imgageUrl,title,price});
  setIsFavorite(!isFavorite);
}
return(
<div className={styles.card}>
            <div className={styles.card_favorite} onClick={onClickFavorite}>
              <img src={isFavorite? "/img/liked.svg" : "/img/unliked.svg"} alt="unliked" />
            </div>
                <img width={250} height={250} src={imgageUrl} alt="product" className="mb-15"></img>
                  <div className={styles.product_name}>{title}</div>
                  <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                      <span>
                        Ціна:
                      </span>
                      <b>{price}грн.</b>
                    </div>

                      <img className={styles.plus}
                       onClick={handleClick} 
                       src={isAdded? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" /> 
                  </div>
            </div>
        );
    }

    export default Card;