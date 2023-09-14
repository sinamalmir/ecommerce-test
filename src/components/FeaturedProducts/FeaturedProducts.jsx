import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

function FeaturedProducts( {type} ) {


    const data = [
        {
            id : 1,
            title: 'cloth and hodi',
            img:'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
            img2:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
            isNew : true,
            oldPrice : 39,
            price:19
        },

        {
            id : 2,
            title: 'cloth and hodi',
            img:'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
            img2:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
            isNew : true,
            oldPrice : 39,
            price:19
        },
        {
            id : 3,
            title: 'cloth and hodi',
            img:'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
            img2:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
            isNew : false,
            oldPrice : 39,
            price:19
        },
        {
            id : 4,
            title: 'cloth and hodi',
            img:'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
            img2:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
            isNew : true,
            oldPrice : 39,
            price:19
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