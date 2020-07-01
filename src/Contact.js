import React, { Component } from 'react';
import './css/MainInfo.css';
import './css/Contact.css';

import img_email from './images/Email.png';
import img_phone from './images/Phone.png';
import Person from "@material-ui/icons/Person";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";

// ============================================================

class Contact extends Component{
    state = {

    };


    render(){
        return(
            <div className="contactDiv flx-row">
                <h1 className="flx-row flx-center">Contact</h1>
                <div className="flx-Clmn">
                    <span className="flx-row flx-center">
                        <Person />
                        &nbsp;&nbsp;Name
                    </span>
                    <span className="flx-row flx-center">서은결 (Seo EunGyeol)</span>
                </div>
                <div className="flx-Clmn">
                    <span className="flx-row flx-center">
                        <Phone />
                        &nbsp;&nbsp;Phone
                    </span>
                    <span className="flx-row flx-center">010-4877-2762</span>
                </div>
                <div className="flx-Clmn">
                    <span className="flx-row flx-center">
                        <Email />
                        &nbsp;&nbsp;E-mail
                    </span>
                    <span className="flx-row flx-center">dmsruf2762@gmail.com</span>
                </div>
            </div>      
        );
    }
}


export default Contact;