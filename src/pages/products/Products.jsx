import React, { useState } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import './Products.scss'

function Products() {

  const id  = parseInt(useParams().id)

  const [maxPrice ,setMaxPrice] = useState(1000)

  const [sort , setSort ] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
            <h2> Category products </h2>
            <div className="inputItem">
                <input type="checkbox" id='1' value={1} />
                <label htmlFor="1"> shose </label>
            </div>
            <div className="inputItem">
                <input type="checkbox" id='1' value={1} />
                <label htmlFor="1"> shose </label>
            </div>
            <div className="inputItem">
                <input type="checkbox" id='1' value={1} />
                <label htmlFor="1"> shose </label>
            </div>
        </div>
        <div className="filterItem">
            <h2> Search by filter </h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
              <span>${maxPrice}</span>
            </div>
        </div>
        <div className="filterItem">
            <h2> Sort by  </h2>
            <div className="inputItem">
              <input type="radio" id='asc' name='price'  value='asc' onChange={e=> setSort('asc')} />
              <label htmlFor="asc"> Price (Lowest first) </label>
            </div>
            <div className="inputItem">
              <input type="radio" id='desc' name='price'  value='desc' onChange={e=> setSort('desc')} />
              <label htmlFor="desc"> Price (Highest first) </label>
            </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://images.pexels.com/photos/1202047/pexels-photo-1202047.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <List  id={id} maxPrice={maxPrice} sort={sort}  />
      </div>
    </div>
  )
}

export default Products