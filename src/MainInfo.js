import React, { Component } from 'react';
import './css/MainInfo.css';
import bgImg from './images/bg.jpg';

import Menu from "@material-ui/icons/Menu";
// ============================================================


class MainInfo extends Component{
  state = {
  };

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  handlerClickMenu = (menu) => {
    const windowWidth = window.innerWidth;
    
    switch(menu){
      case 'skill' : 
        window.scrollTo({top:480, left:0, behavior:'smooth'});
        break;
      case 'project' : 
        if(windowWidth > 780){
          window.scrollTo({top:980, left:0, behavior:'smooth'});
        } else {
          window.scrollTo({top:1010, left:0, behavior:'smooth'}); 
        }
        break;
      case 'about' : 
        if(windowWidth > 980){
          window.scrollTo({top:1630, left:0, behavior:'smooth'});
        } else if(windowWidth <= 980 && windowWidth > 780){
            window.scrollTo({top:2130, left:0, behavior:'smooth'});
        } else {
          window.scrollTo({top:2160, left:0, behavior:'smooth'}); 
        }
        break;
      case 'contact' : 
        if(windowWidth > 980){
          window.scrollTo({top:2180, left:0, behavior:'smooth'});
        } else if(windowWidth <= 980 && windowWidth > 850){
            window.scrollTo({top:2680, left:0, behavior:'smooth'});
        } else if(windowWidth <= 850 && windowWidth > 780){
            window.scrollTo({top:2980, left:0, behavior:'smooth'});
        } else {
          window.scrollTo({top:3010, left:0, behavior:'smooth'}); 
        }
        break;
    }
  }

  handlerOpenMenuList(){
    const menuListDiv = document.querySelector(".menuLi");

    if(menuListDiv.classList.contains("none")){
      menuListDiv.classList.remove("none");
    }else{
      menuListDiv.classList.add("none");
    }
  }


  render(){
    return(
      <div className="MainInfo-topDiv">
        <header className="flx-row">
          <span className="flx-row flx-center menuIcon" onClick={() => this.handlerOpenMenuList()}><Menu className="white-icon" fontSize="large"/></span>
          <div className="menuLi none">
            <li className="MainInfo-liOdd" onClick={() => this.handlerClickMenu('skill')}>Skill</li>
            <li className="MainInfo-liEven" onClick={() => this.handlerClickMenu('project')}>Project</li>
            <li className="MainInfo-liOdd" onClick={() => this.handlerClickMenu('about')}>About</li>
            <li className="MainInfo-liEven" onClick={() => this.handlerClickMenu('contact')}>Contact</li>
          </div>
          <li className="MainInfo-liOdd menuText" onClick={() => this.handlerClickMenu('skill')}>Skill</li>
          <li className="MainInfo-liEven menuText" onClick={() => this.handlerClickMenu('project')}>Project</li>
          <li className="MainInfo-liOdd menuText" onClick={() => this.handlerClickMenu('about')}>About</li>
          <li className="MainInfo-liEven menuText" onClick={() => this.handlerClickMenu('contact')}>Contact</li>
        </header>
        <img src={bgImg} className="MainInfo-background" alt=""/>
        <div className="MainInfo-mainTextDiv flx-row flx-center">
          <span className="MainInfo-colorSpan spanFirst flx-row">Front-End</span>
          <span className="MainInfo-whiteSpan spanFirst flx-row">Developer</span>
          <span className="MainInfo-whiteSpan spanSecond">Portfolio</span>
          <span className="MainInfo-colorSpan spanSecond">서은결</span>
        </div>
      </div>
    );
  };
}


export default MainInfo;



