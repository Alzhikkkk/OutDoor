import arrow from '../assets/Path.svg';
function Card() {
    return (
      <section className='promise container'>
           <span className='promise-title'>
                <h3>Meet the family</h3>
                <h2>What we have in store for you.</h2>
                <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
           </span>

           <div className='card-lists'>
                <span className='card-lists--item'>
                    <h2>Accessories</h2>
                    <p>Accessories you didn't know you needed.</p>
                    <i>View Accessories <img src={arrow} alt="Arrow"/></i>
                </span>
                <span className='card-lists--item'>
                    <h2>Apparel</h2>
                    <p>Check out our line of non-hiking clothes.</p>
                    <i>View Apparel <img src={arrow} alt="Arrow"/></i>
                </span>
                <span className='card-lists--item'>
                    <h2>Climbing Gear</h2>
                    <p>Climbing gear for every occasion.</p>
                    <i>View Climbing Gear <img src={arrow} alt="Arrow"/></i>
                </span>
                <span className='card-lists--item'>
                    <h2>Headwear</h2>
                    <p>Our beanies are so comfy you won't believe it.</p>
                    <i>View Headwear <img src={arrow} alt="Arrow"/></i>
                </span>
                <span className='card-lists--item'>
                    <h2>Hiking Gear</h2>
                    <p>Desert or mountain? Doesn't matter.</p>
                    <i>View Hiking Gear <img src={arrow} alt="Arrow"/></i>
                </span>
                <span className='card-lists--item'>
                    <h2>Jackets</h2>
                    <p>Our jackets are perfect for every season.</p>
                    <i>View Jackets<img src={arrow} alt="Arrow"/></i>
                </span>
           </div>
           <i className='show'>Show All Categories<img src={arrow} alt="Arrow"/></i>
      </section>
    );
  }
  
  export default Card;