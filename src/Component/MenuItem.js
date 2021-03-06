import React from 'react'

import "./MenuItem.style.scss";


const MenuItem = ({title,imageUrl,size}) => {
  return (
    <div  className= { `${size} menu-item`} >
    <div className="image" style ={{backgroundImage : `url(${imageUrl})`}} />
         <div className='content'>
             <h1 className='title'>{title}</h1>
             <span className='subtitle'>Shop Now</span>
         </div>
 </div>
  )
}

export default MenuItem