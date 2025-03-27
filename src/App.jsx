import { useState } from 'react'
import ProductList from './Components/ProductList';
import './App.css'

function App() {


  let defaultProduct = [
    { id: 1, name: "iPhone 16 Pro Max", price: "$1300", description: "Newest Apple Phone on the market", category: "Electronics", url: "./src/assets/iphone.png" },
    { id: 2, name: "Laptop", price: "$1200", description: "High performance laptop", category: "Electronics", url: "./src/assets/laptop.jpg"},
    { id: 3, name: "Xbox", price: "$600", description: "Microsoft Gaming System", category: "Electronics", url: "./src/assets/xbox.jpg" },
    { id: 4, name: "Playstation 5", price: "$600", description: "High performance gaming system", category: "Electronics", url: "./src/assets/playstation.jpg" },
    { id: 5, name: "Bluetooth-Headphones", price: "$300", description: "Noise-canceling headphones", category: "Electronics", url: "./src/assets/headphones.jpg" },
    { id: 6, name: "Chairs", price: "$50", description: "From elegant dining setups to modern office spaces", category: "Furniture", url: "./src/assets/chair.jpg"},
    { id: 7, name: "Dining Table", price: "$550", description: "Collection of high-quality table chair", category: "Furniture", url: "./src/assets/diningtable.jpg" },
    { id: 8, name: "Sofa", price: "$1130", description: "Modern orange textile sofa", category: "Furniture", url: "./src/assets/sofa.jpg" },
    { id: 9, name: "Dog Food", price: "$10", description: "Pet treats showcases a variety of flavors and shapes, perfect", category: "Pet Supply", url: "./src/assets/dogfood.jpg" },
    { id: 10, name: "Pet Supplies", price: "$50", description: "Pet supplies and High quailty", category: "Pet Supply", url: "./src/assets/dogfood1.jpg" },
    { id: 11, name: "Kids Book", price: "$20", description: "Fun Book for learning", category: "Books", url: "./src/assets/kidsbook.jpg" },
    { id: 12, name: "Cooking Book", price: "$20", description: "Yummy tasty food preperation", category: "Books", url: "./src/assets/cookbook.jpg" },
    { id: 13, name: "Washer Dryer", price: "$600", description: "Heavy Load Washer and Dryer", category: "Home Applicances", url: "./src/assets/washerdryer.jpg" },
    { id: 14, name: "Refrigerator", price: "$1300", description: "Insta cool Refrigerator", category: "Home Applicances", url: "./src/assets/refrigerator.jpg" },

  ]

  let [products, setProduct] = useState(defaultProduct);


  let filterProduct = () => {
    setProduct(() => {
      products = defaultProduct;
      if(document.getElementById("mySelect").value!="Select Option")
      {
        products = defaultProduct.filter(product => product.category == document.getElementById("mySelect").value)
      }
      return products;
    });
  };
  return (
    <div>
      <h1>Product List Information</h1>
      <div>
        <select id="mySelect" onChange={filterProduct}>
          <option value="Select Option">Select Option</option>
          <option value="Electronics">Electronics</option>
          <option value="Home Applicances">Home Applicances</option>
          <option value="Furniture">Furniture</option>
          <option value="Pet Supply">Pet Supply</option>
          <option value="Books">Books</option>
        </select>
      </div>
      <div className="main-container">
        <ProductList allProducts={products} />
      </div>
    </div>
  );
}

export default App
