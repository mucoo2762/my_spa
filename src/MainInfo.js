import React, { Component } from 'react';
import './css/MainInfo.css';
import bgImg from './images/bg.jpg';

// ============================================================


class MainInfo extends Component{
  state = {
    
  };

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  handlerClickMenu = (ss) => {
    switch(ss){
      case 'skill' : 
        window.scrollTo({top:480, left:0, behavior:'smooth'});
        break;
      case 'project' : 
        window.scrollTo({top:980, left:0, behavior:'smooth'});
        break;
      case 'about' : 
        window.scrollTo({top:1630, left:0, behavior:'smooth'});
        break;
      case 'contact' : 
        window.scrollTo({top:2180, left:0, behavior:'smooth'});
        break;
    }
  }


  render(){
    return(
      <div className="MainInfo-topDiv">
        <header className="flx-row">
          <li className="MainInfo-liOdd" onClick={() => this.handlerClickMenu('skill')}>Skill</li>
          <li className="MainInfo-liEven" onClick={() => this.handlerClickMenu('project')}>Project</li>
          <li className="MainInfo-liOdd" onClick={() => this.handlerClickMenu('about')}>About</li>
          <li className="MainInfo-liEven" onClick={() => this.handlerClickMenu('contact')}>Contact</li>
        </header>
        <img src={bgImg} className="MainInfo-background" alt=""/>
        <div className="MainInfo-mainTextDiv flx-Clmn flx-center">
          <span className="MainInfo-colorSpan flx-row">Front-End&nbsp;<span className="MainInfo-whiteSpan">Developer</span></span>
          <span className="MainInfo-whiteSpan">Portfolio</span>
          <span className="MainInfo-colorSpan">서은결</span>
        </div>
        {/* <div className="bgImgDiv">
          <img src={bgImg} alt=""/>
        </div> */}
      </div>
    );
  };
}


export default MainInfo;



