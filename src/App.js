import Card from "./components/Card"
import Header from "./components/Header";
import Slider from "./components/Slider";
import Drawer from "./components/Drawer";
import React from "react";


function App() {
  const[items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(() => {
    fetch('https://628fbfb2dc47852365461d83.mockapi.io/items').then(res =>{
      return res.json();
    }).then(
      json=>{
        setItems(json);
      }
    );
  }, []);
  return (
    <div className="wrapper clear">
      { cartOpened && <Drawer onClose={() => setCartOpened(false)}/> }
      <Header onClickCart={ () => setCartOpened(true)} />
      <Slider/>
        <section className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
              <h1>
                Католог товарів
              </h1>
              <div className="content__search-block d-flex">
                <img src="/img/search.svg" alt="Search"/>
                <input placeholder="Пошук..."/>
              </div>
            </div>
              <div className="products d-flex m-w1400">
              {items.map((obj) =>(
                <Card
              title = {obj.title}
              price = {obj.price}
              imgageUrl={obj.imgageUrl}
              onPlus = {0}
              />
              ))}
              </div>

        </section> 
      </div>
  );
}

export default App;
