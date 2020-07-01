import React, { Component } from 'react';
import './css/MainInfo.css';
import './css/Footer.css';

// ============================================================

class Footer extends Component{
    state = {

    };


    render(){
        return(
            <footer className="flx-row flx-center">
                Copyright ⓒ 2020.&nbsp;<strong>Seo Eungyeol.</strong>&nbsp;All rights reserved.
            </footer>        
        );
    }
}


export default Footer;