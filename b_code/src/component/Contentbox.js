export default function Contentbox({name}){
  return(
    <article id="contentBox">
    <p style={ {color:'#f50',fontSize:'1.2rem'}}>{name}가 이제 리액트 시작혀~</p>
    <dl>
      <dt>{name} 리액트 시작</dt>
      <dd>{name} 어려워~~</dd>
    </dl>
    </article>
  )
}

