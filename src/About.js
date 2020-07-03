import React, { Component } from 'react';
import './css/MainInfo.css';
import './css/About.css';

import School from "@material-ui/icons/School";
import MenuBook from "@material-ui/icons/MenuBook";
import LaptopWindows from "@material-ui/icons/LaptopWindows";
// ============================================================

class About extends Component{
    state = {

    };


    render(){
        return(
            <div className="About-aboutDiv flx-Clmn">
                <h1 className="flx-row flx-center">About Me</h1>
                <div className="About-contDiv flx-row">
                    <div className="About-aboutLeftDiv flx-Clmn">
                        <span className="About-aboutTitle flx-row flx-center">
                            <School fontSize="large"/>
                            &nbsp;Education
                        </span>
                        <span className="About-aboutContTxt">한경대학교 컴퓨터공학과</span>
                        <span className="colorGray">2013.03 ~ 2017.08</span>
                        <span className="About-aboutContTxt">우성고등학교</span>
                        <span className="colorGray">2010.03 ~ 2013.02</span>
                        <span className="About-aboutTitle flx-row flx-center">
                            <MenuBook fontSize="large"/>
                            &nbsp;Certification
                        </span>
                        <span className="About-aboutContTxt">정보처리기사 자격증</span>
                        <span className="colorGray">2016.07.15</span>
                    </div>
                    <div className="About-aboutRightDiv flx-Clmn">
                        <span className="About-aboutTitle flx-row flx-center">
                            <LaptopWindows fontSize="large"/>
                            &nbsp;Work Experience
                        </span>
                        <span className="About-aboutContTxt">Back-End / Front-End</span>
                        <span className="colorGray">2017.05 ~ 2019.12</span>
                        <br></br>
                        <span className="About-aboutContTxt">Front-End <span className="colorYlw">( HTML, JavaScript, JSP, jQuery )</span></span>
                        <pre className="colorGray"> : 기존 웹 솔루션 유지보수 및 수정</pre>
                        <span className="About-aboutContTxt">Back-End ( Java, Spring MVC, Servlet, DB )</span>
                        <pre className="colorGray"> : 솔루션 유지보수 및 추가/수정</pre>
                        <span className="About-aboutContTxt">ETC ( ElasticSearch, Coherence )</span>
                        <pre className="colorGray"> : Data를 다루기 위한 오픈소스  / 솔루션</pre>
                    </div>
                </div>
            </div>
        );
    }
}



export default About;