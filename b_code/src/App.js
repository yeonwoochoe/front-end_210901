import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import CardList from './component/CardList';
import Review from './component/Review';
import Footer from './component/Footer';
import './App.css';

function App() {
  const title = 'site';

  return (
    <div className="App">
      <BrowserRouter>
      <Header heading={title} />
      <Routes>
        <Route path="/" element=   {<Main/>} />
        <Route path="/review" element=   {<Review/>} />
        <Route path="/cardList" element=   {<CardList/>} />
      </Routes>
 
      <Footer heading={title} />
      </BrowserRouter>
    </div>
  );
}

export default App;
