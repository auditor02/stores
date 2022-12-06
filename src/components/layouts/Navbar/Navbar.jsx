import './Navbar.css';
import { FaDollarSign, FaShoppingCart, icons } from "react-icons/fa";
import {Link} from "react-router-dom";

function Navbar() {
  
  return (

    <div className="Navbar">
    <nav className="items">
      <Link to='/Women' className='link'>Women</Link>
      <Link to='/Men' className='link' >Men</Link>
      <Link to='/Kids' className='link' >Kids</Link>
    </nav>
    <nav className="items icons">
      <div className="link">
       <FaDollarSign />
      </div>
      <div className="link">
       <FaShoppingCart />
      </div>
    </nav>
  </div>

    );
  }

  export default Navbar;


  <span className='Fad'>
  <FaDollarSign />
  <FaShoppingCart />
  </span>