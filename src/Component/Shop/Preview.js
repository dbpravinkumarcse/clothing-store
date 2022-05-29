import React from 'react'
import "./Preview.style.scss";
import CollectionItem from './CollectionItem';

const Preview = ({title, items}) => {
  return (
    <div className='collection-preview'>
        <div className='title'>{title.toUpperCase()}</div>
        <div className='preview'>
        {
            items.filter((item,idx)=>idx<4).map(item=>{
                return(<CollectionItem key={item.id} {...item} />);
            })
        }
        </div>
    </div>
  )
}

export default Preview
