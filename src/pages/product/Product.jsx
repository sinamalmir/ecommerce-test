import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

function Product() {
   const [selectedImage , setSelectedImage] = useState(0)

   const [quantity , setQuantity] = useState(1)

  const image = [
    'https://images.pexels.com/photos/1261572/pexels-photo-1261572.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2366008/pexels-photo-2366008.jpeg?auto=compress&cs=tinysrgb&w=800'
  ]

  return (
    <div className='product'>
      <div className="left">
          <div className="images">
            <img src={image[0]} alt=""  onClick={e => setSelectedImage(0)} />
            <img src={image[1]} alt=""  onClick={e => setSelectedImage(1)} />
          </div>
          <div className="mainImg">
            <img src={image[selectedImage]} alt="" />
          </div>
      </div>
      <div className="right">

          <h1> some title </h1>

          <span className='price' > $199 </span>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, nulla molestiae minus ab, hic voluptate quas maxime enim quidem exercitationem vel doloremque commodi nostrum dolore. Tempore distinctio hic dicta molestias.         
          </p>

          <div className="quantity">
            <button onClick={()=> setQuantity(prev => prev === 1 ? 1 : prev - 1)} >-</button>
            {quantity}
            <button  onClick={()=> setQuantity(prev => prev + 1)} >+</button>
          </div>

          <button className='add'>
              <AddShoppingCartIcon />    ADD TO CART
          </button>

          <div className="links">
            <div className="item">
              <FavoriteBorderIcon />  ADD TO WISHLIST
            </div>
            <div className="item">
                <BalanceIcon />    ADD TO COMPARE
            </div>
          </div>
      </div>
    </div>
  )
}

export default Product