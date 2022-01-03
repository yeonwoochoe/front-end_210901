import Header from './component/Header';
import Contentbox from './component/Contentbox';
import Footer from './component/Footer';
import './App.css';

function App() {
  const myName = 'yeonwoos의 웹'
  return (
    <div className="App">
    <Header name={myName} 
      url="http://naver.com"/>
    <Contentbox name={myName}/>
    <Footer name={myName}/>
    </div>
  );
}

export default App;
