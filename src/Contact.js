import React, { Component } from 'react';
import './css/MainInfo.css';
import './css/Contact.css';

import contactImg from "./images/contact.jpg";
import Person from "@material-ui/icons/Person";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";

// ============================================================

class Contact extends Component{
    state = {

    };


    render(){
        return(
            <div className="Ctt-contactDiv flx-Clmn">
                <img src={contactImg} alt="" />
                <h1 className="flx-row flx-center">Contact</h1>
                <div className="Ctt-RightDiv flx-Clmn">
                    <div className="flx-row flx-center">
                        <span className="flx-row">
                            <Person />
                            &nbsp;&nbsp;Name
                        </span>
                        <span className="flx-row">서은결 (Seo Eungyeol)</span>
                    </div>
                    <div className="flx-row flx-center">
                        <span className="flx-row">
                            <Phone />
                            &nbsp;&nbsp;Phone
                        </span>
                        <span className="flx-row">010-4877-2762</span>
                    </div>
                    <div className="flx-row flx-center">
                        <span className="flx-row">
                            <Email />
                            &nbsp;&nbsp;E-mail
                        </span>
                        <span className="flx-row">dmsruf2762@gmail.com</span>
                    </div>
                </div>
            </div>      
        );
    }
}


export default Contact;