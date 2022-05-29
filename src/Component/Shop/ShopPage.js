import React from 'react'
import SHOP_DATA from "./Shopdata";
import Preview from './Preview';

const ShopPage = () => {

   const datas = SHOP_DATA;
   
  return (
    <div style={{padding : "0% 5%"}}>
        <h1>SHOP PAGE</h1>
        {
          datas.map(({id,...balancedata})=>{
             return( <Preview key={id} {...balancedata} />);
           })
        }
    </div>
  )
}

export default ShopPage