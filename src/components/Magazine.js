import magazine from '../assets/Magazine.png'
import arrow from '../assets/Path.svg'
function Magazine() {
    return (
      <section className='about container'>
           <img src={magazine} alt="Magazine"/>
           <span className="about-text">
                <h3>Some light reading</h3>
                <h2>Subscribe to our magazine today.</h2>
                <p>We are an outdoor gear company focused on Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et.</p>
                <a>Read more <img src={arrow}/></a>
           </span>
      </section>
    );
  }
  
  export default Magazine;