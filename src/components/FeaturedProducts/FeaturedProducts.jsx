import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

function FeaturedProducts( {type} ) {


    const data = [
        {
            id : 1,
            title: 'cloth and hodi',
            img:'https://jobinja.ir/assets/img/banners/cvbuilder.png',
        },
        {
            id : 2,
            title: 'cloth and hodi',
            img:'https://jobinja.ir/assets/img/banners/cvbuilder.png',
        },
        {
            id : 3,
            title: 'cloth and hodi',
            img:'https://jobinja.ir/assets/img/banners/cvbuilder.png',
        },
        {
            id : 4,
            title: 'cloth and hodi',
            img:'https://jobinja.ir/assets/img/banners/cvbuilder.png',
        },
    ]


  return (
    <div className='featureProducts'>
        <div className="top">
            <h1> {type} products </h1>
            <p>Lorem ipsum dolor sit
                 amet consectetur adipisicing
                  elit. Saepe unde natus vitae 
                  consequatur aliquam, delectus 
                  accusamus nobis quis nihil omnis
                   placeat doloremque reprehenderit
                    voluptatem, hic ducimus similique
                     esse eligendi est.
            </p>
        </div>
        <div className="bottom">
            {data.map(item => (
                <Card  item={item}  key={item.id} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts