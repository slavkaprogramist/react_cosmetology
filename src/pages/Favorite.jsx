
import Card from "../components/Card"
import React from "react";
import AppContext from '../context';

function Favorite({ onAddToFavorite}){
    const {favorites} = React.useContext(AppContext);


    return(
        <section className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
            <h1> Список побажань</h1>
        </div>
        <div className="products d-flex m-w1400">
          {favorites.map((item,index) =>(
              <Card
                key={index}
                type = {item.type}
                favorited = {true}
                onFavorite = {onAddToFavorite}
                {...item}
            />
            ))}
          </div>

    </section> 
    )
}
export default Favorite