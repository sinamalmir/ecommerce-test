import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1> Castegory </h1>
          <span> Women </span>
          <span> Men </span>
          <span> Children </span>
          <span> Shoes </span>
          <span> New Arrivals </span>
        </div>
        <div className="item">
          <h1> Link </h1>
          <span> FAQ </span>
          <span> Men </span>
          <span> Children </span>
          <span> Shoes </span>
        </div>
        <div className="item">
          <h1> About </h1>
          <span> Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Iusto, voluptate perferendis
             autem quibusdam unde eius ipsa veritatis totam 
             delectus! Dolor voluptatem voluptatibus velit
              quas facilis similique, placeat culpa
               doloribus necessitatibus.
          </span>

        </div>
        <div className="item">
        <h1> Contact </h1>
          <span> Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Iusto, voluptate perferendis
             autem quibusdam unde eius ipsa veritatis totam 
             delectus! Dolor voluptatem voluptatibus velit
              quas facilis similique, placeat culpa
               doloribus necessitatibus.
          </span>
        </div>
      </div>
      
      <div className="bottom">
        <div className="left">
          <span className="logo">SINASTORE</span>
          <div className="copyRight">
            @ Copyright 2023. All rights Reserved
          </div>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer