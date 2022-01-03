//Footer.js

export default function Footer({name}){
  const stFoot = {
    width:100+'%',
    height: 'auto',
    borderTop:'1px solid #333'
  }

  const mySet = name.toUpperCase();
  return(
    <footer id="footBox" style={stFoot}>
    <h2>{mySet}information</h2>
    <adress>
      회사주소에 대한 내용 작성
    </adress>
    <dl>
      <dt>
        <ul>
          <li>site_01</li>
          <li>site_02</li>
          <li>site_03</li>
        </ul>
      </dt>
    </dl>
  </footer>
  )
}