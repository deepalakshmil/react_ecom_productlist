import ProductItem from "./ProductItem";

/* To start the product list function using the props {allproducts} */
function ProductList({ allProducts }) {

    /* using the map function to get the one product item */
    return (
        <div className="proudcts-container">
            {allProducts.map((product) => (
                <ProductItem key={product.id} oneProduct={product} />
            ))}
        </div>
    );
}
export default ProductList;