import ProductItem from "./ProductItem";


function ProductList({allProducts}){
  
    return(
        
        <div className="proudcts-container">
            
        {allProducts.map((product)=> (
           <ProductItem key={product.id} oneProduct={product}/>
        ))}     
        </div>
    );
}
export default ProductList;