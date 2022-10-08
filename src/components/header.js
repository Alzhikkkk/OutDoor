import logo from '../assets/logo.png'
import cart from '../assets/Vector.svg'
import menu from '../assets/menu.png'
import styled from 'styled-components'

export const Button = styled.button`
    background: #575445;
    border-radius: 6px;
    border:none;
    color: #fff;
    padding: 10px 18px;
    heigh: 45px;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    gap: 10px;

    img{
        width: 14px;
    }
`;

function Header() {
    return (
      <header className="header container">
          <div className="logo">
                <img src={logo} alt="Logo"/>
          </div>

          <div className="list">
            <ul className='list-links'>
                <li><a href=''>Shop</a></li>
                <li><a href=''>About us</a></li>
                <li><a href=''>Our Team</a></li>
                <li><a href=''>Buyer's guide</a></li>
                <li><a href=''>Categories</a></li>
            </ul>
            <span className='list-buttons'>
                <Button>Shop Now</Button>
                <Button><img src={cart} alt="Cart"/>Cart</Button>
            </span>
            
          </div>
          <img src={menu} className="burger" alt="Menu"/>

      </header>
    );
  }
  
  export default Header;