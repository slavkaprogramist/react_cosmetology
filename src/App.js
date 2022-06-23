import axios from 'axios'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {Routes,Route} from 'react-router-dom'
import React from "react";
import Home from "./pages/Home";
import Favorite from './pages/Favorite';
import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);


    React.useEffect(() => {
      async function fetchData(){
          
        const cartResponse = await axios.get('https://628fbfb2dc47852365461d83.mockapi.io/cart')
        const favoriteResponse = await axios.get('https://628fbfb2dc47852365461d83.mockapi.io/favorite')
        const itemsResponse = await axios.get('https://628fbfb2dc47852365461d83.mockapi.io/items')

        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavorites(favoriteResponse.data);
        setItems(itemsResponse.data)

        
      }
      fetchData();
  }, []);


  const onAddToCart = (obj)=> {

      if(cartItems.find(item => Number(item.id) === Number(obj.id) )){
        setCartItems(prev => prev.filter((item) => item.id !== obj.id));
        axios.delete(`https://628fbfb2dc47852365461d83.mockapi.io/cart/${obj.id}`);
      }
      else{

        axios.post('https://628fbfb2dc47852365461d83.mockapi.io/cart',obj);
        setCartItems((prev) =>[...prev,obj]);}
      }
    


  const onRemoveItem =(id) =>{
    axios.delete(`https://628fbfb2dc47852365461d83.mockapi.io/cart/${id}`);
    
  }
 
  const onAddToFavorite = async (obj) =>{
    try{
      if(favorites.find(favObj => favObj.id === obj.id )){
        axios.delete(`https://628fbfb2dc47852365461d83.mockapi.io/favorite/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const {data} = await axios.post(`https://628fbfb2dc47852365461d83.mockapi.io/favorite`,obj);
        setFavorites((prev) =>[...prev,data]);
      }
    }
      catch(error){
        alert("не удалось fav")
        console.log(error);
      }

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
  const isItemAddedToCart =(id) =>{
    cartItems.some(obj => Number(obj.id) === Number(id))
  }


  return (
    <AppContext.Provider value ={{ cartItems, favorites, items, isItemAddedToCart}}>
      
    <div className="wrapper clear">
      { cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> }
      <Header onClickCart={ () => setCartOpened(true)} />

      <Routes>
      <Route path="/" element={
        
         <Home 
         items ={items}
         cartItems={cartItems}
         searchValue={searchValue}
         filterBySearchTittle={filterBySearchTittle}
         setSearchValue={setSearchValue}
         onChangeSearchInput={onChangeSearchInput}
         onAddToFavorite={onAddToFavorite}
         onAddToCart={onAddToCart}
         setNullSearchValue = {setNullSearchValue}
         isLoading = {isLoading}
         />}/>
      <Route 
      path="/favorite" 
      element={
        <Favorite
        onAddToFavorite ={onAddToFavorite}/>}/>
      </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
