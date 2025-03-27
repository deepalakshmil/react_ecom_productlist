import styles from './ProductItem.module.css';

function ProductItem({oneProduct}){

    return(
      <div className={styles.productitem}>
        <h2>{oneProduct.name}</h2>
        <p><img src={oneProduct.url} alt="product_image" width="300px" height="300px"/></p>
        <h4>Price:${oneProduct.price}</h4>
        <p>{oneProduct.description}</p>
        <p>{oneProduct.category}</p>
        
      </div>

    );
}

export default ProductItem;
