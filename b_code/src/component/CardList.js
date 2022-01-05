// CardList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import '../style/CardList.scss';

export default function CardList(){
  // ---------------------------------------------
  // const cardListData = ;
  const [cardData, setCardData] = useState([]);
  const dataUrl = './data/cardListData.json'
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(  ()=>{
    axios.get(dataUrl)
     .then(res => setCardData(res.data))
     .catch(console.log)  
  }, [])
  //단순히 순서대로 진행하는 경우느 async/await이용
  // 결과에 대한 에러리를 확인할 필요가 있는 경우 then/catch 절을 이용

  // ---------------------------------------------
  return (
    <div className="card_area">
      <h3>card list</h3>
      <ul className="card_wrap">
        { 
        cardData.map(
          (card) => 
            <Card data={card} 
                  key={card.id} /> 
          )
        }
      </ul>
    </div>
  )
  // ---------------------------------------------
} // CardList


/*
<li>
  <div className="img_set"></div>
  <dl>
    <dt>title</dt>
    <dd>content</dd>
  </dl>
  <div className="btns">
    <button type="button">좋아요 <MdFavorite /></button>
    <a className="link" href="#">상세보기</a>
  </div>
</li>
*/ 