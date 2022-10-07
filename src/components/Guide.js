import hiking from '../assets/hiking.png'
import Alex from '../assets/Alex.png'
import cycling from '../assets/cycling.png'
import Woodie from '../assets/Woodie.png'
function Guide() {
    return (
      <section className='guide container'>
           <span className="guide-text">
                <h3>Buyer's guides</h3>
                <h2>Navigating our offering.</h2>
                <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
           </span>
           <div className="quides">
                <span>
                    <img src={hiking} alt="Alex"/>
                    <p>3 climbing accessories for the climber that has everything</p>
                    <span>
                        <i>
                            <img src={Alex} alt="Alex ava"/>
                            <h2>
                                Alex Jenna
                                <p>QA</p>
                            </h2>
                        </i>

                        <p>October 18, 2021</p>
                    </span>
                </span>    

                <span>
                    <img src={cycling} alt="Cycling"/>
                    <p>Biking accessories for the beaten path</p>
                    <span>
                        <i>
                            <img src={Woodie} alt="Woodie ava"/>
                            <h2>
                                Woodie Brandon
                                <p>Product Designer</p>
                            </h2>
                        </i>

                        <p>October 18, 2021</p>
                    </span>
                </span>     
            </div>
      </section>
    );
  }
  
  export default Guide;