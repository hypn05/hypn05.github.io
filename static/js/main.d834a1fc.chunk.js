(this.webpackJsonpAbbas_Ali=this.webpackJsonpAbbas_Ali||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),o=n.n(r),l=(n(16),n(10)),s=n(7),c=n(1),u=n(2),p=n(4),m=n(3),d=n(5),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={id:n.props.line.id,value:n.props.line.value,displayInput:n.props.line.displayInput},n.focusInput=function(e){e&&e.focus()},n.handleChange=function(e){n.setState({value:e.target.value})},n.handelEnter=function(e){"Enter"===e.key&&n.props.handelWhatever(e.target.value,n.state.id)},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:this.badgeChange()},this.props.displayInput&&i.a.createElement("input",{type:"text",className:"here",ref:this.focusInput,value:this.state.value,onChange:this.handleChange,onKeyDown:this.handelEnter,autoFocus:!0}),this.state.value))}},{key:"badgeChange",value:function(){var e="prompt ";return e+=this.props.displayInput?"output new-output":""}}]),t}(a.Component),h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={type:n.props.line.type,value:n.props.line.value},n.style={listStyleType:"none"},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"prompt"}," ",this.props.line.type," "),i.a.createElement("ul",{style:this.style},this.props.subDir.map((function(e){return i.a.createElement("li",{key:e.id,className:"result"},e.type)}))))}}]),t}(a.Component),g=n(6),f=n.n(g),b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={type:n.props.line.type,value:n.props.line.value},n.style={align:"middle"},n.information={about:"I'm an enthusiastic information security practitioner with experience in penetration testing, application security, application development, and blockchain security. I'm committed to remaining on top of the current threat landscape and developing efficient countermeasures to protect systems and detect malicious behavior quickly. Furthermore, I am skilled at communicating risks to a variety of audiences, ensuring that the impact is fully understood so that well-informed decisions can be made.",education:[{school:"University of Maryland, College Park",degree:"Master of Engineering",field:"Cyber Security",startDate:"2018",endDate:"2020",coursework:["Penetration Testing","Embedded System Hacking and Security","Security Tools for Information Security","Digital Forensics and Incidence Response","Reverse Engineering","Network Security","Secure Operating Systems"]},{school:"Ujjain Engineering College, Ujjain",degree:"Bachelor of Engineering",field:"Computer Science and Engineering",startDate:"2012",endDate:"2016",coursework:["Business Information System ","Analysis & Design of Algorithm","Computer Organization & Architecture","Theory of Computation","Operating System","Database Management System","Data Communication","Computer Networks and Management","Compiler Design","Network & Web Security","Wireless Network"]}],experience:[{companyName:"Tesla",city:"Austin, Texas, United States",companyDetails:[{position:"Application Security Engineer",startDate:"Jul 2021",endDate:"Present",term:"",description:["Job functions include threat modeling, bug bounty triage, pentest coordination, vulnerability tracking, security reviews of internal and external products.","Build out Application Security program (SAST, DAST, SCA, Developer Education, & Policies)","Setup and Manage container security tooling","Collaborate frequently with different engineering teams to identify and address security issues"]}]},{companyName:"Synopsys Inc",city:"Bloomington, Indiana, United States",companyDetails:[{position:"Security Consultant",startDate:"Jun 2020",endDate:"Jul 2021",term:"1 yr 2 mos",description:["Translating client security requirements & conducting penetration testing and vulnerability assessments of web applications and web services.","Reporting detailed results of the analysis back to the client as deliverables.","Writing scripts to automate various steps in testing."]}]},{companyName:"Okta, Inc.",city:"San Francisco Bay Area, United States",companyDetails:[{position:"Application Security Engineer Intern",startDate:"Jun 2019",endDate:"Aug 2019",term:"3 mos",description:["Automate scanning of Okta products on weekly basis using Burp.","Design review: Evaluate design against the specified requirements to identify issues before product release.","Code review: Consciously and systematically convening code for CVE\u2019s.","Penetration testing: Identify and report security weaknesses in the features."]}]},{companyName:"Techracers Inc",city:"Indore, India",companyDetails:[{position:"Blockchain developer",startDate:"Aug 2017",endDate:"Jun 2018",term:"11 mos",description:["Blockchain Proof of Concept: Solidifying feasibility and functionality of application in blockchain environment.","Test the business logics and securing all the application transaction on the blockchain.","Develop solidity smart contract, covering user test-cases writing in Mocha testing framework using truffle suite."]},{position:"Solutions Architect",startDate:"Aug 2016",endDate:"Jul 2017",term:"1 yr",description:["Application Diagnostics: Diagnose and fix bugs and performance bottlenecks for performance to provide a native experience.","Code review of the application to check for possible exploits.","Modules: Create React-Native modules including Video chat module, boilerplate, text-fields, buttons and more."]}]}],social:[{platform:"Github",link:""},{platform:"Github",link:""}]},n.handelCd=function(){var e=n.state.value.split(" ")[1];if(e){var t=e.toLowerCase();return"about"===t?i.a.createElement("p",{className:"result"},n.information.about):"education"===t?i.a.createElement(i.a.Fragment,null,n.information.education.map((function(e){return i.a.createElement("p",{className:"result"},i.a.createElement("table",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"degreeInformation"},e.degree," | ",e.field),i.a.createElement("td",null,e.startDate," - ",e.endDate)),i.a.createElement("tr",null,i.a.createElement("td",{className:"schoolInformation"},e.school))),"Coursework: ",i.a.createElement("br",null),i.a.createElement("ul",null,e.coursework.map((function(e){return i.a.createElement("li",{className:"coursework"},e)}))))}))):"experience"===t?i.a.createElement(i.a.Fragment,null,n.information.experience.map((function(e){return i.a.createElement("p",{className:"result"},i.a.createElement("table",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"degreeInformation"},e.companyName)),i.a.createElement("tr",null,i.a.createElement("td",{className:"schoolInformation"},e.city))),e.companyDetails.map((function(e){return i.a.createElement("div",null,i.a.createElement("table",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"degreeInformation coursework"},e.position),i.a.createElement("td",{className:"coursework"},e.startDate," - ",e.endDate," . ",e.term))),i.a.createElement("ul",null,e.description.map((function(e){return i.a.createElement("li",null,e)}))))})))}))):"socials"===t||"social"===t||"contact me"===t||"contactme"===t||"contact_me"===t?i.a.createElement(i.a.Fragment,null,n.information.social.map((function(e){return i.a.createElement("p",{className:"result"},i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.platform),i.a.createElement("a",{href:"https://github.com/shloksomani",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:f.a,alt:"GithubLink to Code"})))}))):i.a.createElement("p",{className:"result"},"Opps wrong input")}return i.a.createElement("p",{className:"result"},"Opps wrong input")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"prompt"}," ",this.props.line.value," "),this.handelCd())}}]),t}(a.Component),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={type:n.props.line.type,value:n.props.line.value},n.style={align:"middle"},n.handelCd=function(){return i.a.createElement("p",{className:"result"},"> Opps, You might have entered the wrong command.",i.a.createElement("br",null),"  Please try again.")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"prompt"}," ",this.props.line.value," "),this.handelCd())}}]),t}(a.Component);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={numberOfLine:0,displayEverything:[{value:"",id:0,displayInput:!0,type:"line"}]},n.information={name:"Abbas Ali",commands:[{id:10,type:"ls"},{id:11,type:"cat"},{id:12,type:"clear"},{id:13,type:"cmd"}],subDir:[{id:14,type:"About"},{id:15,type:"Education"},{id:16,type:"Experience"},{id:17,type:"Socials"},{id:18,type:"Contact_Me"}]},n.handelWhatever=function(e,t){var a=e.split(" ");"clear"===a[0]?n.setState({numberOfLine:0,displayEverything:[{value:"",id:0,displayInput:!0,type:"line"}]}):n.setState({displayEverything:[].concat(Object(s.a)(n.state.displayEverything.filter((function(e){return e.id!==t}))),[A({},n.state.displayEverything.find((function(e){return e.id===t})),{value:e,type:a[0]})])},(function(){return n.handleClick()}))},n.handleClick=function(e){var t=n.state.displayEverything.length+1;n.setState({numberOfLine:n.state.numberOfLine+1,displayEverything:[].concat(Object(s.a)(n.state.displayEverything),[{value:"",id:t,displayInput:!0,type:"line"}])})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.el.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"terminal"},i.a.createElement("p",{className:"prompt"},i.a.createElement("text",{className:"highlight"},"Hey there! This is a portfolio website for ",this.information.name,".",i.a.createElement("br",null),"For basic commands type:")," cmd"),this.state.displayEverything.map((function(t){return"line"===t.type?i.a.createElement(y,{key:t.id,handelWhatever:e.handelWhatever,line:t,displayInput:t.displayInput}):"ls"===t.type?i.a.createElement(h,{key:t.id,line:t,subDir:e.information.subDir}):"cmd"===t.type?i.a.createElement(h,{key:t.id,line:t,subDir:e.information.commands}):"cat"===t.type?i.a.createElement(b,{key:t.id,line:t}):i.a.createElement(E,{key:t.id,line:t})}))),i.a.createElement("div",{ref:function(t){e.el=t}}))}}]),t}(a.Component);o.a.render(i.a.createElement(k,null),document.getElementById("root"))},6:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII="}},[[11,1,2]]]);
//# sourceMappingURL=main.d834a1fc.chunk.js.map