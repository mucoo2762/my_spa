import React, { Component } from 'react';
import './css/Project.css';
import './css/MainInfo.css';
import './css/fonts.css';
import pjtImg_01 from './images/pjt_01.PNG';
import pjtImg_02 from './images/pjt_02.PNG';
import pjtImg_03 from './images/pjt_03.PNG';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// ============================================================

class Project extends Component{

    state = {
        num_pjtImg: 1,
        totalNum_pjtImg: 3
    };

    componentDidMount(){
        this.putImgForPjt(this.state.num_pjtImg);
    }

    putImgForPjt(num){
        const imgTargetDiv = document.querySelector(".pjtImgDiv");
        const curr_img = imgTargetDiv.querySelector(`.block`) ? imgTargetDiv.querySelector(`.block`) : null;
        const new_img = imgTargetDiv.querySelector(`#img0${num}`) ? imgTargetDiv.querySelector(`#img0${num}`) : null;

        const infoTargetDiv = document.querySelector(".pjtInfoDiv");
        const curr_info = infoTargetDiv.querySelector(`.block`) ? infoTargetDiv.querySelector(`.block`) : null;
        const new_info = infoTargetDiv.querySelector(`#pjtInfo0${num}`) ? infoTargetDiv.querySelector(`#pjtInfo0${num}`) : null;

        const dots = document.querySelector(".dots");
        const curr_dot = dots.querySelector(`.selectedDot`) ? dots.querySelector(`.selectedDot`) : null;
        const new_dot = dots.querySelector(`#dot0${num}`) ? dots.querySelector(`#dot0${num}`) : null;

        curr_img.classList.replace("block", "none");
        new_img.classList.replace("none", "block");
        curr_info.classList.replace("block", "none");
        new_info.classList.replace("none", "block");
        curr_dot.classList.replace("selectedDot", "unselectedDot");
        new_dot.classList.replace("unselectedDot", "selectedDot");

    }

    handlerDotClick(event){
        const target_id = ((String)(event.target.id).substring(4));
        
        if(target_id !== null && target_id !== ""){
            this.setState({
                num_pjtImg: parseInt(target_id)
            });

            this.putImgForPjt(parseInt(target_id));
        }
    }

    handlerArrowClick(direction){
        const curr_num = this.state.num_pjtImg;

        if(direction === 'left' && parseInt(curr_num) > 1){
            this.setState({
                num_pjtImg: parseInt(curr_num) - 1
            });

            this.putImgForPjt(parseInt(curr_num) - 1);
        }else if(direction === 'left' && parseInt(curr_num) === 1){
            this.setState({
                num_pjtImg: this.state.totalNum_pjtImg
            });

            this.putImgForPjt(parseInt(this.state.totalNum_pjtImg));
        }else if(direction === 'right' && parseInt(curr_num) < parseInt(this.state.totalNum_pjtImg)){
            this.setState({
                num_pjtImg: parseInt(curr_num) + 1
            });

            this.putImgForPjt(parseInt(curr_num) + 1);
        }else if(direction === 'right' && parseInt(curr_num) === parseInt(this.state.totalNum_pjtImg)){
            this.setState({
                num_pjtImg: 1
            });

            this.putImgForPjt(1);
        }
    }


    render(){
        return(
            <div className="pjtDiv flx-row flx-center">
                <h1 className="flx-row flx-center">Project</h1>
                <li className="dots flx-row flx-center" onClick={(event) => this.handlerDotClick(event)}>
                    <span id="dot01" className="selectedDot"></span>
                    <span id="dot02" className="unselectedDot"></span>
                    <span id="dot03" className="unselectedDot"></span>
                </li>
                <div className="pjtContDiv flx-row">
                    <div className="arrowDiv flx-row flx-center" onClick={() => this.handlerArrowClick('left')}>&lt;</div>
                    <div className="pjtListDiv flx-row">
                        <div className="pjtInfoDiv">
                            <span id="pjtInfo01" className="block fade">
                                <a href="https://mucoo2762.github.io/Clock_Weather/" target="_blank">https://mucoo2762.github.io/Clock_Weather/</a><br></br>
                                [  Title  ] As its official tagline states, React is a library for building user interfaces. React is not a framework – it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications; React 360 can be used to build virtual reality applications; and there are other possibilities besides.<br></br>To build for the web, developers use React in tandem with ReactDOM. React and ReactDOM are often discussed in the same spaces as, and utilized to solve the same problems as, other true web development frameworks. When we refer to React as a "framework", we’re working with that colloquial understanding.</span>
                            <span id="pjtInfo02" className="none fade">
                                <a href="https://mucoo2762.github.io/cloncoding_2/" target="_blank">https://mucoo2762.github.io/cloncoding_2/</a><br></br>
                                [pjtImg_02] As its official tagline states, React is a library for building user interfaces. React is not a framework – it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications; React 360 can be used to build virtual reality applications; and there are other possibilities besides.<br></br>To build for the web, developers use React in tandem with ReactDOM. React and ReactDOM are often discussed in the same spaces as, and utilized to solve the same problems as, other true web development frameworks. When we refer to React as a "framework", we’re working with that colloquial understanding.</span>
                            <span id="pjtInfo03" className="none fade">
                                <a href="https://mucoo2762.github.io/cloncoding_1/" target="_blank">https://mucoo2762.github.io/cloncoding_1/</a><br></br>
                                [pjtImg_03] As its official tagline states, React is a library for building user interfaces. React is not a framework – it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications; React 360 can be used to build virtual reality applications; and there are other possibilities besides.<br></br>To build for the web, developers use React in tandem with ReactDOM. React and ReactDOM are often discussed in the same spaces as, and utilized to solve the same problems as, other true web development frameworks. When we refer to React as a "framework", we’re working with that colloquial understanding.</span>
                        </div>
                        <div className="pjtImgDiv pjtImg_01">
                            <img src={pjtImg_01} id="img01" className="size-100pc block fade" alt=""/>
                            <img src={pjtImg_02} id="img02" className="size-100pc none fade" alt=""/>
                            <img src={pjtImg_03} id="img03" className="size-100pc none fade" alt=""/>
                        </div>
                    </div>
                    <div className="arrowDiv flx-row flx-center" onClick={() => this.handlerArrowClick('right')}>&gt;</div>
                </div>
            </div>
        );
    };
}


export default Project;



