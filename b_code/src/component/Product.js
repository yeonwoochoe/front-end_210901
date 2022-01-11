// Product.js

import React, { useState, useEffect } from 'react';
import ProductContent from './ProductContent';
import '../style/Product.scss';
import axios from 'axios';

export default function Product() {
  // const num = 0, const setNum = (i)=>{ num = i }
  const [num, setNum] = useState(0);
  // ------------------------------------------
  const [menuData, setMenuData] = useState([]);

useEffect(()=>{
  axios.get('./data/menuData.json')
  .then(res=> setMenuData (res.data) )
},[])



  let prCon = menuData[num];
  const fnTab = (e, i)=>{
    e.preventDefault();
    setNum(i);
    prCon = menuData[num];
  }

  // ------------------------------------------
  return (
    <div className='product_area'>
      <div className="btn_part">
        <button type="button" onClick={(e)=> fnTab(e, 0) }>Coffee</button>
        <button type="button" onClick={(e)=> fnTab(e, 1) }>Drink</button>
      </div>
      {/* <ProductContent data={prCon} />       */}
    </div>
  )}



