(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(49)},,,,,,function(e,t,a){},,,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){var n={"./JSCheatSheet.old.png":30,"./JSCheatSheet.png":31,"./blog.png":32,"./fancyCats.old.png":33,"./fancyCats.png":34,"./hiraganaflash.png":35,"./portfolio.old.png":36,"./portfolio.png":37,"./product.old.png":38,"./product.png":39,"./productlaunch.old.png":40,"./productlaunch.png":41,"./shoppinglist.png":42};function o(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=29},function(e,t,a){e.exports=a.p+"static/media/JSCheatSheet.old.45f404fb.png"},function(e,t,a){e.exports=a.p+"static/media/JSCheatSheet.d7823f23.png"},function(e,t,a){e.exports=a.p+"static/media/blog.68825cfa.png"},function(e,t,a){e.exports=a.p+"static/media/fancyCats.old.8616a36b.png"},function(e,t,a){e.exports=a.p+"static/media/fancyCats.56a0e054.png"},function(e,t,a){e.exports=a.p+"static/media/hiraganaflash.ba6c748b.png"},function(e,t,a){e.exports=a.p+"static/media/portfolio.old.a750ee7a.png"},function(e,t,a){e.exports=a.p+"static/media/portfolio.7c8b4371.png"},function(e,t,a){e.exports=a.p+"static/media/product.old.063824ae.png"},function(e,t,a){e.exports=a.p+"static/media/product.6f7e97ce.png"},function(e,t,a){e.exports=a.p+"static/media/productlaunch.old.26ec9618.png"},function(e,t,a){e.exports=a.p+"static/media/productlaunch.f416ad21.png"},function(e,t,a){e.exports=a.p+"static/media/shoppinglist.d3782aea.png"},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(10),c=a.n(i),r=(a(17),a(2)),s=a(3),l=a(6),p=a(4),u=a(5),h=a(1),d=(a(21),a(8),a(24),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){return o.a.createElement("button",{id:"lineButton",className:"bring-up-nav",onMouseDown:this.props.handleMouseDown},o.a.createElement("div",{id:"nav-container"},o.a.createElement("div",{className:"toggle-icon"},o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"}))))}}]),t}(n.Component)),g=(a(26),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){var t="hide";return this.props.menuVisibility&&(t="show"),o.a.createElement("div",{id:"flyoutMenu",onMouseDown:this.props.handleMouseDown,className:t},o.a.createElement("h1",{onMouseDown:this.props.handleMouseDownNav},"Portfolio"),o.a.createElement("h1",null,"About"),o.a.createElement("h1",null,"Contact"))}}]),t}(n.Component)),m=(a(9),function(e){e.id;var t=e.lang,n=e.name,i=e.url,c=e.source,r=e.picPath;return console.log(i),o.a.createElement("div",{id:"card-container"},o.a.createElement("div",{className:"card-top"},o.a.createElement("div",{className:"tut-lang"},o.a.createElement("sup",null,t)),o.a.createElement("hr",null),o.a.createElement("div",{className:"card-title"},n),o.a.createElement("div",{className:"card-ref"},o.a.createElement("a",{href:"".concat(c),title:"Click to view source"},o.a.createElement("i",{className:"fa fa-github"})))),o.a.createElement("div",{className:"card-bottom"},o.a.createElement("a",{href:"".concat(i)},o.a.createElement("img",{src:a(29)("./".concat(r,".png")),alt:"portfolio-site-snapshot"}))))}),f=(a(43),function(e){return e.cardData.map(function(e,t){return o.a.createElement(m,{key:e.id,lang:e.lang.join(" "),name:e.name,url:e.url,source:e.source,picPath:e.picPath})})}),b=(a(45),a(47),function(e){var t=e.searchChange;return o.a.createElement("div",{className:"search-wrap"},o.a.createElement("input",{type:"search",placeholder:"start typing a language",onChange:t}))}),v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){var t="hide";return this.props.portVisibility&&(t="show"),o.a.createElement("div",{id:"portfolio-page",className:t},o.a.createElement(b,{searchChange:this.props.searchChange}),o.a.createElement(f,{cardData:this.props.cardData}))}}]),t}(n.Component),j=[{id:1,lang:["#ReactJS","#JavaScript","#HTML","#CSS Flexbox","#CSS Grid"],name:"Personal Portfolio",url:"https://jayfiled.github.io/joeljames/",source:"https://github.com/jayfiled/joeljames",picPath:"portfolio"},{id:2,lang:["#DOM manip","#JavaScript","#HTML","#CSS Flexbox","#CSS Grid"],name:"Japanese Hiragana Flash Card App",url:"https://github.com/jayfiled/HiraganaFlash",source:"https://github.com/jayfiled/HiraganaFlash",picPath:"hiraganaflash"},{id:3,lang:["#ReactJS","#JavaScript","#tachyons","#HTML","#CSS Flexbox","#JS promises"],name:"React Cats",url:"https://jayfiled.github.io/fancyCats/",source:"https://github.com/jayfiled/fancyCats/tree/master",picPath:"fancyCats"},{id:4,lang:["#JavaScript","#HTML","#CSS"],name:"Javascript Cheat Sheet",url:"https://github.com/jayfiled/JScheat",source:"https://github.com/jayfiled/JScheat",picPath:"JSCheatSheet"},{id:5,lang:["#ReactJS","#GatsbyJS","#JavaScript","#HTML","#CSS"],name:"Personal blog site",url:"https://jaysite.netlify.com/",source:"https://github.com/jayfiled/webSite",picPath:"blog"},{id:6,lang:["#HTML","#CSS Flexbox","#CSS Grid"],name:"Mobile phone product landing page",url:"https://jayfiled.github.io/product-landing-page/",source:"https://jayfiled.github.io/product-landing-page/",picPath:"product"},{id:8,lang:["#DOM manip","#JavaScript","#HTML","#CSS"],name:"DOM 'to-do' shopping list",url:"https://jayfiled.github.io/ZeroToMasteryProjects/projects/shoppingList/index.html",source:"https://github.com/jayfiled/ZeroToMasteryProjects/blob/master/projects/shoppingList",picPath:"shoppinglist"},{id:7,lang:["#HTML","#CSS Flexbox"],name:"Watch product landing page",url:"https://jayfiled.github.io/ZeroToMasteryProjects/projects/productLanding/index.html",source:"https://github.com/jayfiled/ZeroToMasteryProjects/tree/master/projects/productLanding",picPath:"productlaunch"}],S=function(e){function t(e,a){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e,a))).toggleMenu=function(){n.setState({navVisible:!n.state.navVisible,portVisible:!1})},n.togglePort=function(){n.setState({navVisible:!0,portVisible:!n.state.portVisible})},n.onSearchChange=function(e){n.setState({searchField:e.target.value})},n.state={navVisible:!1,portVisible:!1,searchField:""},n.handleMouseDown=n.handleMouseDown.bind(Object(h.a)(Object(h.a)(n))),n.toggleMenu=n.toggleMenu.bind(Object(h.a)(Object(h.a)(n))),n.handleMouseDownNav=n.handleMouseDownNav.bind(Object(h.a)(Object(h.a)(n))),n.togglePort=n.togglePort.bind(Object(h.a)(Object(h.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleMouseDown",value:function(e){this.toggleMenu(),console.log("menu bar clicked"),e.stopPropagation()}},{key:"handleMouseDownNav",value:function(e){this.togglePort(),console.log("portfolio clicked"),e.stopPropagation()}},{key:"render",value:function(){var e=this.state.searchField,t=j.filter(function(t){return t.lang.join(" ").toLowerCase().includes(e.toLowerCase())});return o.a.createElement("div",null,o.a.createElement("div",{id:"land-header"},o.a.createElement("h3",null,"Joel James")),o.a.createElement("div",{id:"land-title"},o.a.createElement("h1",null,"Front End Web Developer")),o.a.createElement(d,{handleMouseDown:this.handleMouseDown}),o.a.createElement(g,{handleMouseDown:this.handleMouseDown,handleMouseDownNav:this.handleMouseDownNav,menuVisibility:this.state.navVisible}),o.a.createElement("p",{className:"location"},"Melbourne"),o.a.createElement(v,{handleMouseDownNav:!0,portVisibility:this.state.portVisible,cardData:t,searchChange:this.onSearchChange}),o.a.createElement("div",{id:"bring-up-nav"},o.a.createElement("span",{id:"slide-right"}),o.a.createElement("i",{className:"fa fa-angle-double-right"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.9349fbec.chunk.js.map