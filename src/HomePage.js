import React from 'react'
import  "./HomePage.style.scss";
import MenuItem from './Component/MenuItem';

const HomePage = () => {
    
    const items = [
        {
        title: 'Hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
    },
    {
        title: 'Jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
    },
    {   
        title: 'Sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
    },  
    {
        title: 'Womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
    },
    {
        title: 'Mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
        size: 'large',
        id: 5,
    }   
]

  return (
    <div className='homepage'>
        <div className='directory-menu'>
                 {items.map(({title, imageUrl, id, size}) => {
                    return (
                       <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    );
                }
                )}  
        </div>
    </div>
  )
}

export default HomePage;