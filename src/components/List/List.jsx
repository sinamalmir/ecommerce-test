import React from 'react'
import Card from '../Card/Card'
import './List.scss'

function List() {

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
    {
      id : 5,
      title: 'cloth and hodi',
      img:'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
      img2:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
      isNew : true,
      oldPrice : 39,
      price:19
  },
  {
    id : 6,
    title: 'cloth and hodi',
    img:'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
    img2:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
    isNew : true,
    oldPrice : 39,
    price:19
},
{
  id :7,
  title: 'cloth and hodi',
  img:'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
  img2:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
  isNew : true,
  oldPrice : 39,
  price:19
},
{
  id : 8,
  title: 'cloth and hodi',
  img:'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
  img2:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
  isNew : true,
  oldPrice : 39,
  price:19
},

]

  return (
    <div className='list'>
      {data?.map(item => (
        <Card  item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List