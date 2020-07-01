import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/fonts.css';
import MainInfo from './MainInfo';
import Skill from './Skill.js';
import Project from './Project.js';
import About from './About.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MainInfo />
    <Skill />
    <Project />
    <About />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
