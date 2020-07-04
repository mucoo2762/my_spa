import React, { Component } from 'react';
import './css/Project.css';
import './css/MainInfo.css';

import pjt_clock_clone from './images/pjt_clock_clone.PNG';
import pjt_clock_custom from './images/pjt_clock_custom.PNG';
import pjt_movieApp_custom from './images/pjt_movieApp_custom.PNG';
import pjt_web_clone from './images/pjt_web_clone.PNG';
import chat_login from './images/chat_login.PNG';
import chat_roomList from './images/chat_roomList.PNG';
import chat_room from './images/chat_room.PNG';

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// ============================================================

class Project extends Component{

    state = {
        num_pjtImg: 1,
        totalNum_pjtImg: 5,
    };

    componentDidMount(){
        this.putImgForPjt(this.state.num_pjtImg);
    }

    putImgForPjt(num){
        const imgTargetDiv = document.querySelector(".Pj-pjtImgDiv");
        const curr_img = imgTargetDiv.querySelector(`.block`) ? imgTargetDiv.querySelector(`.block`) : null;
        const new_img = imgTargetDiv.querySelector(`#img0${num}`) ? imgTargetDiv.querySelector(`#img0${num}`) : null;

        const infoTargetDiv = document.querySelector(".Pj-pjtInfoDiv");
        const curr_info = infoTargetDiv.querySelector(`.block`) ? infoTargetDiv.querySelector(`.block`) : null;
        const new_info = infoTargetDiv.querySelector(`#pjtInfo0${num}`) ? infoTargetDiv.querySelector(`#pjtInfo0${num}`) : null;

        const dots = document.querySelector(".Pj-dots");
        const curr_dot = dots.querySelector(`.Pj-selectedDot`) ? dots.querySelector(`.Pj-selectedDot`) : null;
        const new_dot = dots.querySelector(`#dot0${num}`) ? dots.querySelector(`#dot0${num}`) : null;

        curr_img.classList.replace("block", "none");
        new_img.classList.replace("none", "block");
        curr_info.classList.replace("block", "none");
        new_info.classList.replace("none", "block");
        curr_dot.classList.replace("Pj-selectedDot", "Pj-unselectedDot");
        new_dot.classList.replace("Pj-unselectedDot", "Pj-selectedDot");

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

    handlerOpenImgModal(clickedImgSrc){
        const modalDiv = document.querySelector(".Pj-modalDiv");
        const modalImg = document.querySelector(".Pj-modalImgDiv > img");

        modalImg.src = clickedImgSrc;
        modalDiv.classList.remove("none");
    }

    handlerCloseModal(){
        const modalDiv = document.querySelector(".Pj-modalDiv");
        modalDiv.classList.add("none");
    }
    
    handlerGoToAddress(url){
        window.open(url);
    }




    render(){
        return(
            <div className="Pj-pjtDiv flx-row flx-center">
                <h1 className="flx-row flx-center">Project</h1>
                <li className="Pj-dots flx-row flx-center" onClick={(event) => this.handlerDotClick(event)}>
                    <span id="dot01" className="Pj-selectedDot"></span>
                    <span id="dot02" className="Pj-unselectedDot"></span>
                    <span id="dot03" className="Pj-unselectedDot"></span>
                    <span id="dot04" className="Pj-unselectedDot"></span>
                    <span id="dot05" className="Pj-unselectedDot"></span>
                </li>
                <div className="Pj-pjtContDiv flx-row">
                    <div className="Pj-arrowDiv flx-row flx-center" onClick={() => this.handlerArrowClick('left')}>
                        &lt;
                    </div>
                    <div className="Pj-pjtListDiv">
                        <div className="Pj-pjtInfoDiv">
                            <div id="pjtInfo01" className="block fade">
                                <button className="Pj-openPageBtn" onClick={() => this.handlerGoToAddress("https://mucoo2762.github.io/Clock_Weather/")}>
                                    <span className="Pj-colorWhilte">Open</span> This Page</button>
                                <div>
                                    <h3>[ React로 만든 SPA ]</h3>현재 시각, 현재 위치의 날씨, 내 할 일 리스트를 볼 수 있다.<br></br><br></br>- 오늘의 날짜와 시간, 현재 위치의 날씨 출력<br></br>- 이름을 입력하면 localStrage에 저장 후, 이름 출력<br></br>- 오른쪽에는 나의 할 일을 불러와서 출력<br></br>- 할 일 리스트는 추가/삭제 가능
                                </div>
                                <button id="pjtSource01" className="Pj-gitSourceBtn" onClick={() => this.handlerGoToAddress("https://github.com/mucoo2762/Clock_Weather")}>github source</button>
                            </div>
                            <div id="pjtInfo02" className="none fade">
                                <button className="Pj-openPageBtn" onClick={() => this.handlerGoToAddress("https://mucoo2762.github.io/cloncoding_2/")}>
                                    <span className="Pj-colorWhilte">Open</span> This Page</button>
                                <div>
                                    <h3>[ JS로 만든 SPA ]</h3>앞의 React SPA와 같은 내용이며, HTML/CSS/JS로 만들었다.<br></br><br></br>- 오늘의 날짜와 시간, 현재 위치의 날씨 출력<br></br>- 이름을 입력하면 localStrage에 저장 후, 이름 출력<br></br>- 오른쪽에는 나의 할 일을 불러와서 출력<br></br>- 할 일 리스트는 추가/삭제 가능
                                </div>
                                <button id="pjtSource01" className="Pj-gitSourceBtn" onClick={() => this.handlerGoToAddress("https://github.com/mucoo2762/cloncoding_2")}>github source</button>
                            </div>
                            <div id="pjtInfo03" className="none fade">
                                <button className="Pj-openPageBtn" onClick={() => this.handlerGoToAddress("https://mucoo2762.github.io/cloncoding_1/")}>
                                    <span className="Pj-colorWhilte">Open</span> This Page</button>
                                <div>
                                    <h3>[ 반응형 웹페이지 클론 코딩 ]</h3>HTML과 CSS를 연습하기 위한 클론 코딩 웹 페이지.<br></br>HTML과 CSS만을 이용해서 1페이지의 반응형 웹을 따라서 코딩해보았다.<br></br><br></br>
                                    <a href="https://www.templatemonsterpreview.com/demo/81610.html?_ga=2.75471377.2010955138.1593693441-150001979.1592492468" target="_blank"><span className="Pj-colorBlue"> -&gt; Original Page 보기</span></a>
                                </div>
                                <button id="pjtSource01" className="Pj-gitSourceBtn" onClick={() => this.handlerGoToAddress("https://github.com/mucoo2762/cloncoding_1")}>github source</button>
                            </div>
                            <div id="pjtInfo04" className="none fade">
                                <button className="Pj-openPageBtn" onClick={() => this.handlerGoToAddress("https://mucoo2762.github.io/Movie_app/")}>
                                    <span className="Pj-colorWhilte">Open</span> This Page</button>
                                <div>
                                    <h3>[ React로 만든 SPA ]</h3>영화 순위 정보를 카테고리별로 선택해서 볼 수 있다.<br></br><br></br>- API로 영화 순위 정보들을 가져옴<br></br>- 다운로드 수, 이름, 평점 등 순위 종류 선택 가능<br></br>- 상위 20개의 데이터를 출력
                                </div>
                                <button id="pjtSource01" className="Pj-gitSourceBtn" onClick={() => this.handlerGoToAddress("https://github.com/mucoo2762/Movie_app")}>github source</button>
                            </div>
                            <div id="pjtInfo05" className="none fade">
                                <div>
                                    <h3>[ Node.js + MySql 채팅 웹어플리케이션 ]</h3>kakaoTalk을 참고한 간단한 채팅 웹어플리케이션.<br></br><br></br>- 로그인 페이지, 채팅방 목록 페이지, 채팅방 페이지로 구성<br></br>- 로그인 정보는 sessionStorage에 저장<br></br>- 채팅 데이터와 사용자 정보는 MySql에 저장<br></br>- 로그아웃하면 로그인페이지로 돌아갈 수 있음<br></br>- 채팅방에서 채팅을 입력하면 바로 채팅을 볼 수 있음<br></br>- 채팅방에서 내용 검색 가능
                                </div>
                                <button id="pjtSource01" className="Pj-gitSourceBtn" onClick={() => this.handlerGoToAddress("https://github.com/mucoo2762/Chat_Talk")}>github source</button>
                            </div>
                        </div>
                        <div className="Pj-pjtImgDiv pjtImg_01">
                            <img src={pjt_clock_custom} id="img01" className="size-100_80pc block fade" alt=""/>
                            <img src={pjt_clock_clone} id="img02" className="size-100_80pc none fade" alt=""/>
                            <img src={pjt_web_clone} id="img03" className="size-100_80pc none fade" alt=""/>
                            <img src={pjt_movieApp_custom} id="img04" className="size-100_80pc none fade" alt=""/>
                            <div id="img05" className="none fade">
                                <img src={chat_login} className="size-30pc" alt="" onClick={() => this.handlerOpenImgModal(chat_login)}/>
                                <img src={chat_roomList} className="size-30pc" alt="" onClick={() => this.handlerOpenImgModal(chat_roomList)}/>
                                <img src={chat_room}  className="size-30pc" alt="" onClick={() => this.handlerOpenImgModal(chat_room)}/><br></br>
                                <span className="flx-row flx-center">If you want to see a big size picture,<br></br>Please Click Image!!</span>
                            </div>
                        </div>
                    </div>
                    <div className="Pj-arrowDiv flx-row flx-center" onClick={() => this.handlerArrowClick('right')}>
                        &gt;
                    </div>
                </div>

                <div className="Pj-modalDiv flx-Clmn none">
                    <button className="Pj-modalCancleBtn flx-row flx-center" onClick={() => this.handlerCloseModal()}>X</button>
                    <div className="Pj-modalImgDiv flx-row">
                        <img src="" alt="" id="modalImg"/>
                    </div>
                    <div className="Pj-modalInfoDiv flx-row flx-center">
                        Hello! This is image's Info Div.<br></br>Check the information Please..!
                    </div>
                </div>
            </div>
        );
    };
}


export default Project;



