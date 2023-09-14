import React from 'react'
import './Cart.scss'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Cart() {

    const data = [
        {
            id : 1,
            title: 'cloth and hodi',
            img:'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
            img2:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
            isNew : true,
            desc: 'i just need a long text .. ',
            oldPrice : 39,
            price:19
        },
        {
            id : 2,
            title: 'cloth and hodi',
            img:'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
            img2:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
            isNew : true,
            desc: 'i just need a long text .. ',
            oldPrice : 39,
            price:19
        },
    ]
  return (
    <div className='cart'>
        <h1> Product in Your cart </h1>
        {data?.map(item=> (
            <div className="item" key={item.id} >
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p> {item.desc.substring(0,100)}</p>
                        <div className="price">
                            1 * ${item.price} 
                        </div>
                    </div>
                    <DeleteOutlineIcon className='delete' />
            </div>
        ))}

        <div className="total">
            <span> SUBTOTAL </span>
            <span> $199 </span>
        </div>
        <button> proceed to checkout </button>
        <span className='reset'> reset cart</span>
    </div>
  )
}

export default Cart