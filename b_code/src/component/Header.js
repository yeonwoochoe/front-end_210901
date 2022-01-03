//Header.js
// const props = {
//   site : 'yeonwoo',
//   url : 'http://naver.com'

import Gnb from "./Gnb"

// }
export default function Header({site,url}){
  const h1Sytle = {color:'#f50', textTransform:'upperscase'}
  return(
    <header id="headBox">
    <h1 style={h1Sytle}>
    <a 
      href={url}>
      {site}</a>
      </h1>
    <Gnb/>

    </header>
  )
}

Header.defaultProps = {
  site  : 'yeonwoomon'
}



//방법1
// function Header() {}
// export default Header();

//방법2
//export default function Header(){}

//방법3
// const Header =function(){}
// export default Header;