import './App.css';
import React, { useState } from 'react';
import cookie from './cookie.png';



const App = () => {

  const [cookiescount, setCookiesCount] = useState(0);
  const [cookiesPerClick, setCookiesPerClick] = useState(1);
  const [boughtUpgrade0, setBoughtUpgrade0] = useState(0);
  const [boughtUpgrade1, setBoughtUpgrade1] = useState(0);
  const [boughtUpgrade2, setBoughtUpgrade2] = useState(0);
  const [boughtUpgrade3, setBoughtUpgrade3] = useState(0);

  const clickCookie = () => {

    setCookiesCount(cookiescount+cookiesPerClick);

  }

  const upgrade0 = () => {

    if (cookiescount >= 20){
    setCookiesCount(cookiescount-20);
    setCookiesPerClick(cookiesPerClick + 1);
    setBoughtUpgrade0(boughtUpgrade0+1);
    }

  }

  const upgrade1 = () => {

    if (cookiescount >= 35){
      setCookiesCount(cookiescount-35);
      setCookiesPerClick(cookiesPerClick + 3);
      setBoughtUpgrade1(boughtUpgrade1+1);
    }

  }
  const upgrade2 = () => {

    if (cookiescount >= 75){
      setCookiesCount(cookiescount-75);
      setCookiesPerClick(cookiesPerClick + 5);
      setBoughtUpgrade2(boughtUpgrade2+1);
    }

  }

  const upgrade3 = () => {

    if (cookiescount >= 125){
      setCookiesCount(cookiescount-125);
      setCookiesPerClick(cookiesPerClick + 20);
      setBoughtUpgrade3(boughtUpgrade3+1);
    }

  }



  return (
    <div className='page'>
      <div className='clicker'>
        <h1> Masz zebrane {cookiescount} ciasteczek</h1>
        <img src={cookie} className='cookie-image' onClick={clickCookie}></img> 
      </div>
      <div className='shop'>
        <div className='products' onClick={upgrade0}>
          <h1>+1 ciasteczko/kliknięcie</h1>
          <h1>Cena: 20</h1>
          <h1>Kupiono: {boughtUpgrade0}</h1>
        </div>
        <div className='products' onClick={upgrade1}>
          <h1>+3 ciasteczka/kliknięcie</h1>
          <h1>Cena: 35</h1>
          <h1>Kupiono: {boughtUpgrade1}</h1>
        </div>
        <div className='products' onClick={upgrade2}>
          <h1>+5 ciasteczek/kliknięcie</h1>
          <h1>Cena: 75</h1>
          <h1>Kupiono: {boughtUpgrade2}</h1>
        </div>
        <div className='products' onClick={upgrade3}>
          <h1>+20 ciasteczek/kliknięcie</h1>
          <h1>Cena: 125</h1>
          <h1>Kupiono: {boughtUpgrade3}</h1>
        </div>
      </div>
    </div>
  )
}

export default App;
