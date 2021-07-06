import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import {auth} from '../firebase'

const Navbar = () => {
    const [{basket,user}]=useStateValue();

    const login=()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="navbar">
            <Link to="/login">
                <img className="navbar__logo" src="https://www.esyon.de/wp-content/uploads/2016/11/Amazon-Logo-wei%C3%9F.png" alt="logo" />
            </Link>
            <div className="navbar__loc">
                <LocationOnOutlinedIcon className="navbar__locIcon"/>
                <div className="navbar__loc__text">
                    <p>Hello</p>
                    <h4>Select your address</h4>
                </div>
            </div>
            <div className="navbar__search">
                <select name="categories">
                    <option value="all">All</option>
                    <option value="game">game</option>
                    <option value="books">books</option>
                    <option value="movies">movies</option>
                    <option value="mobiles">mobiles</option>
                    <option value="laptops">laptops</option>
                    <option value="headphones">headphones</option>
                </select>
                <input className="navbar__searchBar" type="text" />
                <SearchIcon className="navbar__searchIcon"/>
            </div>
            <div className="navbar__nav">
                <Link to={!user && "/login"} className="navbar__link" onClick={login} >
                    <p><span>Hello, {user?.email}</span></p>
                    <h3><span>{user? 'Sign Out' :'Sign In'}</span></h3>
                </Link>
                <Link to="/" className="navbar__link">
                    <p><span>Return</span></p>
                    <h3><span>& Orders</span></h3>
                </Link>
                <Link to="/" className="navbar__link">
                    <p><span>Your</span></p>
                    <h3><span>Prime</span></h3>
                </Link>
                <Link to="/checkout" className="navbar__basket">
                    <ShoppingCartIcon/>
                    <span>{basket?.length}</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
