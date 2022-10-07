import leave from '../assets/leave.svg'
import protect from '../assets/protect.svg'
import mountain from '../assets/mountain.svg'
import book from '../assets/book.svg'
import measure from '../assets/measure.svg'
import loop from '../assets/loop.svg'
function Promise() {
    return (
      <section className='promise container'>
           <span className='promise-title'>
                <h3>OUR PROMISE</h3>
                <h2>Setting the bar for our products.</h2>
                <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
           </span>

           <div className='promise-lists'>
                <span className='promise-lists--item'>
                    <img src={leave} alt="Leave"/>
                    <h2>Sustainable sourcing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </span>
                <span className='promise-lists--item'>
                    <img src={protect} alt="Protect"/>
                    <h2>Lifetime warranty</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </span>
                <span className='promise-lists--item'>
                    <img src={mountain} alt="Mountain"/>
                    <h2>All-terrain tested</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </span>
                <span className='promise-lists--item'>
                    <img src={book} alt="Book"/>
                    <h2>Premium materials</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </span>
                <span className='promise-lists--item'>
                    <img src={measure} alt="Measure"/>
                    <h2>Designed by you</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </span>
                <span className='promise-lists--item'>
                    <img src={loop} alt="Loop"/>
                    <h2>Quality assured</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </span>
           </div>
      </section>
    );
  }
  
  export default Promise;