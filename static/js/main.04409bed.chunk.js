(this.webpackJsonpmy_spa=this.webpackJsonpmy_spa||[]).push([[0],[,,,,,,,function(e,t,a){},,,function(e,t,a){},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/bg.a05471b2.jpg"},function(e,t,a){e.exports=a.p+"static/media/pjt_01.880fbe19.PNG"},function(e,t,a){e.exports=a.p+"static/media/pjt_02.5f5596b4.PNG"},function(e,t,a){e.exports=a.p+"static/media/pjt_03.2e1befc3.PNG"},,,,,,function(e,t,a){e.exports=a(55)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Email.ef7f75f8.png"},function(e,t,a){e.exports=a.p+"static/media/Phone.172a2672.png"},,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),s=(a(34),a(10),a(2)),o=a(1),i=a(4),m=a(3),u=(a(7),a(20)),p=a.n(u),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"topDiv"},l.a.createElement("header",{className:"flx-row"},l.a.createElement("li",{className:"liOdd"},"Skill"),l.a.createElement("li",{className:"liEven"},"Project"),l.a.createElement("li",{className:"liOdd"},"About"),l.a.createElement("li",{className:"liEven"},"Contact")),l.a.createElement("img",{src:p.a,className:"background",alt:""}),l.a.createElement("div",{className:"mainTextDiv flx-Clmn flx-center"},l.a.createElement("span",{className:"colorSpan flx-row"},"Front-End\xa0",l.a.createElement("span",{className:"whiteSpan"},"Developer")),l.a.createElement("span",{className:"whiteSpan"},"Portfolio"),l.a.createElement("span",{className:"colorSpan"},"\uc11c\uc740\uacb0")))}}]),a}(n.Component),f=(a(35),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"skillDiv flx-row"},l.a.createElement("h1",{className:"flx-row flx-center"},"Skills"),l.a.createElement("span",{className:"titleAboutSkill flx-row flx-center"},"Can handle Skill"),l.a.createElement("div",{className:"majorSkillDiv flx-row"},l.a.createElement("span",null,"HTML"),l.a.createElement("span",null,"CSS"),l.a.createElement("span",null,"JS"),l.a.createElement("span",null,"React")),l.a.createElement("span",{className:"titleAboutSkill flx-row flx-center"},"Handled Skill"),l.a.createElement("div",{className:"handledSkillDiv flx-row"},l.a.createElement("span",null,"Node"),l.a.createElement("span",null,"DB"),l.a.createElement("span",null,"JSP"),l.a.createElement("span",null,"jQuery")))}}]),a}(n.Component)),h=(a(36),a(21)),b=a.n(h),v=a(22),g=a.n(v),E=a(23),w=a.n(E),j=(a(37),a(38),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={num_pjtImg:1,totalNum_pjtImg:3},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.putImgForPjt(this.state.num_pjtImg)}},{key:"putImgForPjt",value:function(e){var t=document.querySelector(".pjtImgDiv"),a=t.querySelector(".block")?t.querySelector(".block"):null,n=t.querySelector("#img0".concat(e))?t.querySelector("#img0".concat(e)):null,l=document.querySelector(".pjtInfoDiv"),r=l.querySelector(".block")?l.querySelector(".block"):null,c=l.querySelector("#pjtInfo0".concat(e))?l.querySelector("#pjtInfo0".concat(e)):null,s=document.querySelector(".dots"),o=s.querySelector(".selectedDot")?s.querySelector(".selectedDot"):null,i=s.querySelector("#dot0".concat(e))?s.querySelector("#dot0".concat(e)):null;a.classList.replace("block","none"),n.classList.replace("none","block"),r.classList.replace("block","none"),c.classList.replace("none","block"),o.classList.replace("selectedDot","unselectedDot"),i.classList.replace("unselectedDot","selectedDot")}},{key:"handlerDotClick",value:function(e){var t=String(e.target.id).substring(4);null!==t&&""!==t&&(this.setState({num_pjtImg:parseInt(t)}),this.putImgForPjt(parseInt(t)))}},{key:"handlerArrowClick",value:function(e){var t=this.state.num_pjtImg;"left"===e&&parseInt(t)>1?(this.setState({num_pjtImg:parseInt(t)-1}),this.putImgForPjt(parseInt(t)-1)):"left"===e&&1===parseInt(t)?(this.setState({num_pjtImg:this.state.totalNum_pjtImg}),this.putImgForPjt(parseInt(this.state.totalNum_pjtImg))):"right"===e&&parseInt(t)<parseInt(this.state.totalNum_pjtImg)?(this.setState({num_pjtImg:parseInt(t)+1}),this.putImgForPjt(parseInt(t)+1)):"right"===e&&parseInt(t)===parseInt(this.state.totalNum_pjtImg)&&(this.setState({num_pjtImg:1}),this.putImgForPjt(1))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"pjtDiv flx-row flx-center"},l.a.createElement("h1",{className:"flx-row flx-center"},"Project"),l.a.createElement("li",{className:"dots flx-row flx-center",onClick:function(t){return e.handlerDotClick(t)}},l.a.createElement("span",{id:"dot01",className:"selectedDot"}),l.a.createElement("span",{id:"dot02",className:"unselectedDot"}),l.a.createElement("span",{id:"dot03",className:"unselectedDot"})),l.a.createElement("div",{className:"pjtContDiv flx-row"},l.a.createElement("div",{className:"arrowDiv flx-row flx-center",onClick:function(){return e.handlerArrowClick("left")}},"<"),l.a.createElement("div",{className:"pjtListDiv flx-row"},l.a.createElement("div",{className:"pjtInfoDiv"},l.a.createElement("span",{id:"pjtInfo01",className:"block fade"},l.a.createElement("a",{href:"https://mucoo2762.github.io/Clock_Weather/",target:"_blank"},"https://mucoo2762.github.io/Clock_Weather/"),l.a.createElement("br",null),"[  Title  ] As its official tagline states, React is a library for building user interfaces. React is not a framework \u2013 it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications; React 360 can be used to build virtual reality applications; and there are other possibilities besides.",l.a.createElement("br",null),'To build for the web, developers use React in tandem with ReactDOM. React and ReactDOM are often discussed in the same spaces as, and utilized to solve the same problems as, other true web development frameworks. When we refer to React as a "framework", we\u2019re working with that colloquial understanding.'),l.a.createElement("span",{id:"pjtInfo02",className:"none fade"},l.a.createElement("a",{href:"https://mucoo2762.github.io/cloncoding_2/",target:"_blank"},"https://mucoo2762.github.io/cloncoding_2/"),l.a.createElement("br",null),"[pjtImg_02] As its official tagline states, React is a library for building user interfaces. React is not a framework \u2013 it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications; React 360 can be used to build virtual reality applications; and there are other possibilities besides.",l.a.createElement("br",null),'To build for the web, developers use React in tandem with ReactDOM. React and ReactDOM are often discussed in the same spaces as, and utilized to solve the same problems as, other true web development frameworks. When we refer to React as a "framework", we\u2019re working with that colloquial understanding.'),l.a.createElement("span",{id:"pjtInfo03",className:"none fade"},l.a.createElement("a",{href:"https://mucoo2762.github.io/cloncoding_1/",target:"_blank"},"https://mucoo2762.github.io/cloncoding_1/"),l.a.createElement("br",null),"[pjtImg_03] As its official tagline states, React is a library for building user interfaces. React is not a framework \u2013 it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications; React 360 can be used to build virtual reality applications; and there are other possibilities besides.",l.a.createElement("br",null),'To build for the web, developers use React in tandem with ReactDOM. React and ReactDOM are often discussed in the same spaces as, and utilized to solve the same problems as, other true web development frameworks. When we refer to React as a "framework", we\u2019re working with that colloquial understanding.')),l.a.createElement("div",{className:"pjtImgDiv pjtImg_01"},l.a.createElement("img",{src:b.a,id:"img01",className:"size-100pc block fade",alt:""}),l.a.createElement("img",{src:g.a,id:"img02",className:"size-100pc none fade",alt:""}),l.a.createElement("img",{src:w.a,id:"img03",className:"size-100pc none fade",alt:""}))),l.a.createElement("div",{className:"arrowDiv flx-row flx-center",onClick:function(){return e.handlerArrowClick("right")}},">")))}}]),a}(n.Component)),N=(a(46),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),a}(n.Component)),k=(a(47),a(48),a(49),a(24)),x=a.n(k),y=a(26),I=a.n(y),S=a(27),D=a.n(S),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"contactDiv flx-row"},l.a.createElement("h1",{className:"flx-row flx-center"},"Contact"),l.a.createElement("div",{className:"flx-Clmn"},l.a.createElement("span",{className:"flx-row flx-center"},l.a.createElement(x.a,null),"\xa0\xa0Name"),l.a.createElement("span",{className:"flx-row flx-center"},"\uc11c\uc740\uacb0 (Seo EunGyeol)")),l.a.createElement("div",{className:"flx-Clmn"},l.a.createElement("span",{className:"flx-row flx-center"},l.a.createElement(I.a,null),"\xa0\xa0Phone"),l.a.createElement("span",{className:"flx-row flx-center"},"010-4877-2762")),l.a.createElement("div",{className:"flx-Clmn"},l.a.createElement("span",{className:"flx-row flx-center"},l.a.createElement(D.a,null),"\xa0\xa0E-mail"),l.a.createElement("span",{className:"flx-row flx-center"},"dmsruf2762@gmail.com")))}}]),a}(n.Component),_=(a(53),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{className:"flx-row flx-center"},"Copyright \u24d2 2020.\xa0",l.a.createElement("strong",null,"Seo Eungyeol."),"\xa0All rights reserved.")}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null),l.a.createElement(f,null),l.a.createElement(j,null),l.a.createElement(N,null),l.a.createElement(O,null),l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.04409bed.chunk.js.map