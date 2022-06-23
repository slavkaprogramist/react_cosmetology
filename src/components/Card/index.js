import styles from "./Card.module.scss"
import React from 'react'
import ContentLoader from "react-content-loader";

function Card({
  id,
  imgageUrl,
  onFavorite,
  title,
  price,
  onPlus,
  favorited = false,
  added = false,
  loading =false
}){
const [isAdded, setIsAdded] = React.useState(added);
const [isFavorite, setIsFavorite]= React.useState(favorited);

const handleClick = ()=>{
  onPlus({id,imgageUrl,title,price});
  setIsAdded(!isAdded);
}
const onClickFavorite =()=>{
  onFavorite({id, imgageUrl,title,price});
  setIsFavorite(!isFavorite);
}
return(
<div className={styles.card}>
          {
            loading? <ContentLoader
            speed={2}
            width={250}
            height={300}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          </ContentLoader> :<>
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
          </>
          }

            </div>
        );
    }

    export default Card;