import './App.scss';
import React, { useState } from 'react';



function App() {
  
  const [open, setOpen] = useState(false);
  const [value,setValue] = useState('어렵다..');
  const displayFlex = {
    display:'flex'
  }
  const handleClick = (e) => {
    e.preventDefault();
    console.log('tlqkf')
    const displayFlex = {
      display:'flex'
    }
  }
  
  return (
    <>
      <div id="skip"><a href="section">Skip to the menu / 본문가기</a></div>
      <header id="wrap_header">
        <div className="header">
          <h1 className="logo"><a href="#"><b>Logo</b></a></h1>
          <div className="gnb">
            <ul>
              <li><a href="#">about Kino</a></li>
              <li><a href="#">Kit Player</a></li>
              <li><a href="#">Album Download</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Notice</a></li>
            </ul>
          </div>
          <a href="" className="btnAll" onClick={handleClick}>
            <h2>메뉴</h2>
          </a>
        </div>
      </header>
      <div className="btnMenu">
        <div className="back"></div>
        <div className="btnright">
          <div className="close">
            <a href="#">X</a>
          </div>
          <ul>
            <h2>about Kino</h2>
            <li><a href="">content1</a></li>
            <li><a href="">content2</a></li>
          </ul>
          <ul>
            <h2>Kit Player</h2>
            <li><a href="">content1</a></li>
            <li><a href="">content2</a></li>
          </ul>
          <ul>
            <h2>Album Download</h2>
            <li><a href="">content1</a></li>
            <li><a href="">content2</a></li>
          </ul>
          <ul>
            <h2>Partners</h2>
            <li><a href="">content1</a></li>
            <li><a href="">content2</a></li>
          </ul>
          <ul>
            <h2>Notice</h2>
            <li><a href="">content1</a></li>
            <li><a href="">content2</a></li>
          </ul>
        </div>
      </div>
      <section id = "container">
        <section>
          <div className="mainViewsual">
            <div className="innerBox">
              <p>WE WILL GIVE YOU THE BEST EXPRIENCE</p>
              <p>스마트한 팬들의<br/>스마트한 선택</p>
              <p>The New Style of<br/> Music &amp; Video, KiT Album</p>
            </div>
          </div>
        </section>
      </section>
    </>        
  );
}

export default App;
