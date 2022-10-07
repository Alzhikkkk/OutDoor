import logo from '../assets/logo.png'

function Footer(){
    return(
         <footer className="footer container">
              <img src={logo} alt="Logo" />
              <div className='footer-info'>
                 <span className='footer-lists'>
                     <ul>
                        <h3>Pages</h3>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Categories</li>
                        <li>Buyer's guide</li>
                        <li>404</li>
                        <li>Password</li>
                     </ul>

                     <ul>
                        <h3>Gear Categories</h3>
                        <li>Hiking Gear</li>
                        <li>Climbing Gear</li>
                        <li>Jackets</li>
                        <li>Accessories</li>
                        <li>Apparel</li>
                        <li>Headwear</li>
                     </ul>

                     <ul>
                        <h3>Company</h3>
                        <li>About us</li>
                        <li>Our Team</li>
                        <li>Contact</li>
                        <li>Terms and Conditions</li>
                        <li>Style Guide</li>
                        <li>Licenses</li>

                     </ul>
                 </span>

                 <span className='footer-contact'>
                    <h3>Newsletter</h3>
                    <p>Subscribe to our (infrequent) newsletter where we share news about upcoming listings and projects.</p>
                    <span>
                        <input type="text" placeholder="Email"/>
                        <button>Submit</button>
                    </span>
                 </span>
              </div>
              <div className='footer-sites'>
                   <p>© Outdoor Exploration, LLC. All rights reserved. Powered by</p>
              </div>
         </footer>
    )
}

export default Footer;