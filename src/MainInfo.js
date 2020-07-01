import React, { Component } from 'react';
import './css/fonts.css';
import './css/MainInfo.css';
import bgImg from './images/bg.jpg';

// ============================================================


class MainInfo extends Component{
  state = {
    
  };


  render(){
    return(
      <div className="topDiv">
        <header className="flx-row">
          <li className="liOdd">Skill</li>
          <li className="liEven">Project</li>
          <li className="liOdd">About</li>
          <li className="liEven">Contact</li>
        </header>
        <img src={bgImg} className="background" alt=""/>
        <div className="mainTextDiv flx-Clmn flx-center">
          <span className="colorSpan flx-row">Front-End&nbsp;<span className="whiteSpan">Developer</span></span>
          <span className="whiteSpan">Portfolio</span>
          <span className="colorSpan">서은결</span>
        </div>
        {/* <div className="bgImgDiv">
          <img src={bgImg} alt=""/>
        </div> */}
      </div>
    );
  };
}


export default MainInfo;



