import Card from "./components/Card"
import Header from "./components/Header";
import Slider from "./components/Slider";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
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
            <Card/>
            <Card/>
            </div>
      </section>
        </div>
  );
}

export default App;
