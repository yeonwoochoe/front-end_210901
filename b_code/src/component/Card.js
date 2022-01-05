//Card.js
import { useState } from 'react';
import { MdFavorite } from 'react-icons/md';
export default function Card({data}){

  const btnStyleArr = [
    {color:'#555', fontWeight:700, backgroundColor:'#fff', border: '1px solid #777'},
    {color:'#555', fontWeight:700, backgroundColor:'#afa'},
    ]

  const styleArr = [
    {color: '#333'},
    {color: '#f33'}
  ]
  const [ckN, setCkN] = useState(0);
  const fnCheck = ()=>{ setCkN( ()=> ckN === 0 ? 1 : 0 )};
  return (
    <li>
    <div  className="img_set" 
          style={ {backgroundColor:data.imgUrl} }> {data.imgAlt}
    </div>
    <dl>
      <dt>{data.title}</dt>
      <dd>{data.content}</dd>
    </dl>
    <div className="btns">
      <form className="blind">

      <input type="checkbox" 
            id={data.id} 
            name={data.id} 
            value="좋아요 체크" /> 

      <label type="button" 
              onClick={fnCheck} style={btnStyleArr[ckN]} >  좋아요 <MdFavorite style={styleArr[ckN]}/></label>

      </form>
      <a className="link" href={data.detailLInk}>상세보기</a>
    </div>
  </li>
  )
}