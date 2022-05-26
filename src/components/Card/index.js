import styles from "./Card.module.scss"
import React from 'react'

function Card(props){
const [isAdded, setIsAdded] = React.useState(false);

const handleClick = ()=>{
  setIsAdded(!isAdded);
}
return(
<div className={styles.card}>
            <div className={styles.card_favorite}>
              <img src="/img/unliked.svg" alt="unliked" />
            </div>
                <img width={250} height={250} src={props.imgageUrl} alt="product" className="mb-15"></img>
                  <div className={styles.product_name}>{props.title}</div>
                  <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                      <span>
                        Ціна:
                      </span>
                      <b>{props.price}грн.</b>
                    </div>

                      <img className={styles.plus} onClick={handleClick} src={isAdded? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" /> 
                  </div>
            </div>
        );
    }

    export default Card;