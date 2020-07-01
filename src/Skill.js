import React, { Component } from 'react';
import './css/Skill.css';
import './css/MainInfo.css';
import './css/fonts.css';

// ============================================================


class Skill extends Component{
  state = {
    
  };

  render(){
    return(
        <div className="skillDiv flx-row">
            <h1 className="flx-row flx-center">Skills</h1>
            <span className="titleAboutSkill flx-row flx-center">Can handle Skill</span>
            <div className="majorSkillDiv flx-row">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
                <span>React</span>
            </div>
            <span className="titleAboutSkill flx-row flx-center">Handled Skill</span>
            <div className="handledSkillDiv flx-row">
                <span>Node</span> 
                <span>DB</span>
                <span>JSP</span>
                <span>jQuery</span>
            </div>
        </div>
    );
  };
}


export default Skill;



