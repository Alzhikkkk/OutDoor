import about from '../assets/about.png';
import arrow from '../assets/Path.svg';
function About() {
    return (
      <section className='about container'>
           <img src={about} alt="About"/>
           <span className="about-text">
                <h3>Who are we?</h3>
                <h2>A bit about us.</h2>
                <p>We are an outdoor gear company focused on Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et.</p>
                <a>Read more <img src={arrow}/></a>
           </span>
      </section>
    );
  }
  
  export default About;