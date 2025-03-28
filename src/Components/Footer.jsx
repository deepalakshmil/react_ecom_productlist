import styles from './Footer.module.css';
function Footer(){
    return(
        <div className={styles.footer}>   
           <h3>Contact US</h3>
           <p>1 Cranberry Hill, Lexington, MA 02421-7394 US.</p>
           <h4> 📞 1+ 987-456-2345   </h4>       
         <p>&copy; 2025 Product List Information. All Rights Reserved</p>
        <p>You want More Information visit us at our real site: <a href="https://domains.atom.com/lpd/name/eshopping.com" target="_blank"> www.eshopping.com</a></p>
        </div>
    );

}
export default Footer