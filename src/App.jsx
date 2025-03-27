import { useState } from 'react'
import ProductList from './Components/ProductList';

import './App.css'

function App(){
  const[products]=useState([
                     { id: 1, name:"iPhone 16 Pro Max", price:"$1300", description: "Newest Apple Phone on the market", category:"Electronic", url:"./src/assets/iphone.png"},
                     { id: 2, name:"Laptop", price: "$1200", description: "High performance laptop", category:"Electronic", url:"./src/assets/iphone.png"},
                     { id: 3, name: "Xbox", price: "$600", description: "Microsoft Gaming System", category:"Electronic", url:"./src/assets/iphone.png"},
                     { id: 4, name: "Playstation 5", price: "$600", description: "High performance gaming system", category:"Home applience", url:"./src/assets/iphone.png"},
                     { id: 5, name: "Bluetooth-Headphones", price: "$300", description: "Noise-canceling headphones", category:"Home applience", url:"./src/assets/iphone.png"},
                        ]);

                     
     

  return(
   <div>
    
    <img src="./src/assets/header.jpg" alt="image" width="100%" height="100%"/>
    <h1>Product List Information</h1>
    <div className="main-container">
        
    <ProductList allProducts={products}/>
    
    
    </div>
    
   </div>
  );
}

export default App
