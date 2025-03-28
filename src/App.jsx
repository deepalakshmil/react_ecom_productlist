import { useState } from 'react'
import ProductList from './Components/ProductList';
import './App.css'
import Footer from './Components/Footer';
import { DEFAULT_PRODUCTS } from './data';

/* To start the App function  */
function App() {
  /*Use state creation by initializing the const DEFAULT_PRODUCTS value from data.js file*/
  let [products, setProduct] = useState(DEFAULT_PRODUCTS);
       /* To select the category using the filter to fatch the product details*/
  let filterProduct = () => {
    setProduct(() => {
      products = DEFAULT_PRODUCTS;
      if (document.getElementById("mySelect").value != "Select Category") {
        products = DEFAULT_PRODUCTS.filter(product => product.category == document.getElementById("mySelect").value)
      }
      return products;
    });
  };
  return (
    <div>
      <h1>Product List Information</h1>
      <div>
        <select id="mySelect" onChange={filterProduct}>
          <option value="Select Category">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Home Applicances">Home Applicances</option>
          <option value="Furniture">Furniture</option>
          <option value="Pet Supply">Pet Supply</option>
          <option value="Books">Books</option>
        </select>
      </div> 
        <ProductList allProducts={products} />
        <Footer/>
      
    </div>
  );
}

export default App
