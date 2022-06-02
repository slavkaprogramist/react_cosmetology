
import axios from 'axios'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {Routes,Route} from 'react-router-dom'
import React from "react";
import Home from "./pages/Home";
import Favorite from './pages/Favorite';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);


    React.useEffect(() => {
    // fetch('https://628fbfb2dc47852365461d83.mockapi.io/items').then(res =>{
    //   return res.json();
    // }).then(
    //   json=>{
    //     setItems(json);
    //   }
    // );
      axios.get('https://628fbfb2dc47852365461d83.mockapi.io/items').then(res =>{
      setItems(res.data)
    });
      axios.get('https://628fbfb2dc47852365461d83.mockapi.io/cart').then(res =>{
      setCartItems(res.data);
    });
    axios.get('https://628fbfb2dc47852365461d83.mockapi.io/favorite').then(res =>{
      setFavorites(res.data);
    });
  }, []);


  const onAddToCart = (obj)=> {
    axios.post('https://628fbfb2dc47852365461d83.mockapi.io/cart',obj);
    setCartItems((prev) =>[...prev,obj]);
  }

  const onRemoveItem =(id) =>{
    axios.delete(`https://628fbfb2dc47852365461d83.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
 
  const onAddToFavorite =(obj) =>{
    axios.post(`https://628fbfb2dc47852365461d83.mockapi.io/favorite`,obj);
    setFavorites((prev) =>[...prev,obj]);
  }
  const onChangeSearchInput = (event)=>{
    setSearchValue(event.target.value);
  }
  const setNullSearchValue =()=>{
    setSearchValue('');
  }
  const filterBySearchTittle = (obj) =>{
    return(
    obj.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase()))
    )
  }



  return (
    <div className="wrapper clear">
      { cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> }
      <Header onClickCart={ () => setCartOpened(true)} />

      <Routes>
      <Route path="/" element={
        
         <Home 
         items ={items}
         searchValue={searchValue}
         filterBySearchTittle={filterBySearchTittle}
         setSearchValue={setSearchValue}
         onChangeSearchInput={onChangeSearchInput}
         onAddToFavorite={onAddToFavorite}
         onAddToCart={onAddToCart}
         setNullSearchValue = {setNullSearchValue}
         />}/>
      <Route 
      path="/favorite" 
      element={
        <Favorite
        items={favorites}/>}/>
      </Routes>
      </div>
  );
}

export default App;
