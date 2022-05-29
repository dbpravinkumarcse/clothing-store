import React from 'react'
import { ReactComponent as Logo } from "./Logo.svg";
import { Link } from 'react-router-dom';
import "./Header.style.scss";
import {auth} from "./firebase";
import {connect} from 'react-redux';



const Header = ({currentuser}) => {

 
  return (
    <div className='header'>
    <Link to="/">
        <Logo className='logo' />
    </Link>
    <div className="options">
        <Link className="option" to="/shop" style={{textDecoration : "none"}}>SHOP</Link>
        <Link className="option" to="/contact" style={{textDecoration : "none"}}>CONTACT</Link>
    {
      currentuser ?
      <div className='option' style={{textDecoration : "none"}} onClick={()=> auth.signOut()}>SIGN OUT</div>
      :
      <Link className="option" to="/signin" style={{textDecoration : "none"}}>SIGN IN</Link>
    }
    </div>
    </div>
  )
}


export default Header;