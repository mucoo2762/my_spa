import React, { Component } from 'react';
import './css/Skill.css';
import './css/MainInfo.css';

// ============================================================


class Skill extends Component{
  state = {
    
  };

  render(){
    return(
        <div className="Skill-skillDiv flx-row">
            <h1 className="flx-row flx-center">Skills</h1>
            <span className="Skill-titleSpan flx-row flx-center">Can handle Skill</span>
            <div className="Skill-canHandleDiv flx-row">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
            </div>
            <span className="Skill-titleSpan flx-row flx-center">Handled Skill</span>
            <div className="Skill-handledSkillDiv flx-row">
                <span>React</span>
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



