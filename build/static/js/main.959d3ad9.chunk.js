(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Drew Blood",image:"http://geepeekay.com/gallery/os3/os3_93a.jpg",clicked:"false"},{id:2,name:"Mad Mike",image:"http://geepeekay.com/gallery/os1/os1_33a.jpg",clicked:"false"},{id:3,name:"Losing Faith",image:"http://geepeekay.com/gallery/os4/os4_151a.jpg",clicked:"false"},{id:4,name:"Starin' Darrin",image:"http://geepeekay.com/gallery/os3/os3_114a.jpg",clicked:"false"},{id:5,name:"Smelly Kelly",image:"http://geepeekay.com/gallery/os2/os2_43a.jpg",clicked:"false"},{id:6,name:"Creepy Carol",image:"http://geepeekay.com/gallery/os1/os1_25a.jpg",clicked:"false"},{id:7,name:"Jelly Kelly",image:"http://geepeekay.com/gallery/os3/os3_120b.jpg",clicked:"false"},{id:8,name:"TV Stevie",image:"http://geepeekay.com/gallery/os1/os1_10a.jpg",clicked:"false"},{id:9,name:"Stormy Heather",image:"http://geepeekay.com/gallery/os1/os1_7a.jpg",clicked:"false"},{id:10,name:"Electric Bill",image:"http://geepeekay.com/gallery/os1/os1_4b.jpg",clicked:"false"},{id:11,name:"Up Chuck",image:"http://geepeekay.com/gallery/os1/os1_3a.jpg",clicked:"false"},{id:12,name:"Incomplete Pete",image:"http://geepeekay.com/gallery/os4/os4_149b.jpg",clicked:"false"}]},,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(2),r=t.n(c),s=t(3),o=t(4),i=t(7),m=t(5),d=t(8),p=(t(15),t(6)),g=(t(16),function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("h2",null,"Clicky Game"),n.a.createElement("span",{className:"navbar-text"},"Click all of the images only once to win"),n.a.createElement("h4",null,e.alert),n.a.createElement("ul",{className:"nav text-white nav-fills"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("span",{className:"nav-link"},"  SCORE ",e.score," | TOPSCORE ",e.topScore))))});t(17);var u=function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.selectCard(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image,className:"card"})))},f=(t(18),function(e){return n.a.createElement("main",{className:"wrapper"},e.children)});t(19);var y=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"footer-text"},"Clicky Game 2019 \xa9")))},h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={friends:p,score:0,topScore:0,selectedIds:[],alert:""},t.shuffleCards=function(){var e=t.state.friends.sort(function(){return Math.floor(1*Math.random()-1)});t.setState({friends:e})},t.selectCard=function(e){t.state.selectedIds.includes(e)?(t.state.score>t.state.topScore&&t.setState({topScore:t.state.score}),t.setState({score:0,selectedIds:[],alert:t.state.alert+"Game Over!"})):(t.state.selectedIds.push(e),t.setState({score:t.state.score+1,alert:t.state.alert+"Correct!"})),setTimeout(function(){t.shuffleCards(),t.setState({alert:""})},1e3)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"mainContainer"},n.a.createElement(g,{score:this.state.score,topScore:this.state.topScore,alert:this.state.alert}),n.a.createElement("div",{className:"container"},n.a.createElement(f,null,this.state.friends.map(function(a){return n.a.createElement(u,{selectCard:e.selectCard,id:a.id,key:a.id,name:a.name,image:a.image})}))),n.a.createElement("div",null,n.a.createElement(y,null)))}}]),a}(l.Component);var k=function(){return n.a.createElement(h,null)};r.a.render(n.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.959d3ad9.chunk.js.map