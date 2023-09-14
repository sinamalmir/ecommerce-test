import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'

import "./Navbar.scss"
import Cart from '../Cart/Cart';

function Navbar() {


  const [open , setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span> USD </span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
              <Link className="link" to='/products/1'> Women </Link>
          </div>
          <div className="item">
              <Link className="link" to='/products/1'> Men </Link>
          </div>
          <div className="item">
              <Link className="link" to='/products/1'> Children </Link>
          </div>

        </div>
        <div className="center">
          <Link className="link" to='/'> SINASTORE </Link>
        </div>
        <div className="right">
        <div className="item">
              <Link className="link" to='/products/1'> Homepage </Link>
          </div>
          <div className="item">
              <Link className="link" to='/products/1'> About </Link>
          </div>
          <div className="item">
              <Link className="link" to='/products/1'> contact </Link>
          </div>
          <div className="item">
              <Link className="link" to='/products/1'> shop </Link>
          </div>
          <div className="icon">
            <SearchIcon />
            <PersonOutlineIcon/>
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)} >
              <ShoppingCartOutlinedIcon   />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart /> }
    </div>
  )
}

export default Navbar