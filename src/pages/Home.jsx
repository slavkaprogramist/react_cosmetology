import Card from "../components/Card"
import Slider from "../components/Slider";
import AppContext from "../context";
import React from "react";

function Home({
    items,
    cartItems,
    searchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    filterBySearchTittle,
    setNullSearchValue,
    isLoading
  })
  {

const {isItemAddedToCart} = React.useContext(AppContext);

    const returnFilteredCards =(obj)=>{

        if (filterBySearchTittle(obj).length ===0){
          return(
            <div>Нажаль, нічого не знайдено</div>)
        } 
      }
        const renderItems =()=>{
          const filtredItems = items.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
          return (isLoading 
            ? Array(10).fill({}): filtredItems).map((item) =>(
        <Card
          key={item.id}
          added = {isItemAddedToCart(item &&item.id)}
          title = {item.title}
          price = {item.price}
          imgageUrl={item.imgageUrl}
          onPlus = {obj => onAddToCart(obj)}
          onFavorite={obj => onAddToFavorite(obj)}
          type = {item.type}
          loading={isLoading}
      />
      ) 
      )
    }
    return(

        <>
                <Slider/>
            <section className="content p-40"> 
            
            <div className="d-flex align-center justify-between mb-40">
              <h1>
                {searchValue?`Пошук по запиту: "${searchValue}"`: "Католог товарів"}
              </h1>
              <div className="content__search-block d-flex">
                <img src="/img/search.svg" alt="Search"/>
                <input onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук..."/>
                {searchValue && <div onClick={setNullSearchValue} className="content__close"></div>}
              </div>
            </div>
              <div className="products d-flex m-w1400">
              {
                renderItems()
                
              }
              {
                returnFilteredCards(items)
              }
              </div>

        </section> 
    </>
    )
}
export default Home