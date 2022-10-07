import cart from '../assets/Vector.svg'
import person from '../assets/person.svg'
import plane from '../assets/plane.svg'
import photo from '../assets/photo.svg' 
import { Button } from './header';
function Shop() {
    return (
      <section className='shop'>
          <div className='shop-info'>
               <ul className='shop-info--item'>
                   <li><img src={cart} alt="Cart"/> First Aid Kit  Banger Bottle</li> 
                   <li><img src={photo} alt="Photo"/>Brian Schultz</li> 
                   <li><img src={person} alt="Person"/>Leah Staff</li> 
                   <li><img src={plane} alt="Plane"/>Catalina, California </li> 
               </ul>
          </div>

          <div className='shop-check'>
               <h4>Shop</h4>
               <h2>Check out our products</h2>
               <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
               <Button>Visit Shop</Button>
          </div>
      </section>
    );
  }
  
  export default Shop;