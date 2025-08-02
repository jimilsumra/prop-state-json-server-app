import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'


function App() {
 
  const [products,setProducts] = useState([]);

  useEffect(()=>{

    fetch('http://localhost:5000/Products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
    .catch((error)=>console.log(error));
  },[]); //[] used to run only once this effect.....



  return (
    <>
      <Products data={products} isSale={true} />
    </>
  )
}

export default App
