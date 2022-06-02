import Card from "../components/Card"
import Slider from "../components/Slider";
function Home({
    items,
    searchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    filterBySearchTittle,
    setNullSearchValue
  })
  {
    function returnCards(obj){
        if (filterBySearchTittle(obj).length>0){
          return(
            filterBySearchTittle(obj).map((item,index) =>(
              // по item.id сделать !!! уник ключ в самом масиве
              <Card
                key={index}
                title = {item.title}
                price = {item.price}
                imgageUrl={item.imgageUrl}
                onPlus = {obj => onAddToCart(obj)}
                onFavorite={obj => onAddToFavorite(obj)}
                type = {item.type}
            />
            ))
          )
        } return(<div>Нажаль, нічого не знайдено</div>)
      }
    return(
        <div>
            <Slider/>
        <section className="content p-40"> 
        
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue?`Пошук по запиту: "${searchValue}"`: "Католог товарів"}
          </h1>
          <div className="content__search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук..."/>
            {searchValue && <div onClick={setNullSearchValue} class="content__close"></div>}
          </div>
        </div>
          <div className="products d-flex m-w1400">
          {
              returnCards(items)
          }
          </div>

    </section> 
    </div>
    )
}
export default Home