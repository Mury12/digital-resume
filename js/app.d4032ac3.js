(function(e){function t(t){for(var i,r,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03a6":function(e,t,n){e.exports=n.p+"img/scrum.a5c44d83.png"},"0f69":function(e,t,n){e.exports=n.p+"img/java.8a06434f.webp"},"15e2":function(e,t,n){e.exports=n.p+"img/funny.c737f4f4.png"},"1eb8":function(e,t,n){e.exports=n.p+"img/csharp.0e18550b.png"},"1f80":function(e,t,n){e.exports=n.p+"img/communication.e8b02a01.png"},"27e6":function(e,t,n){e.exports=n.p+"img/botpress.02c31bca.png"},"2afa":function(e,t,n){},"2b67":function(e,t,n){e.exports=n.p+"img/arduino.7c27041a.png"},"2b8f":function(e,t,n){e.exports=n.p+"img/sass.2ca68cea.png"},"2cf1":function(e,t,n){e.exports=n.p+"img/trello.b4207086.png"},"302d":function(e,t,n){e.exports=n.p+"img/mysql.af0dad0a.webp"},"346c":function(e,t,n){},"37b8":function(e,t,n){},"3cdd":function(e,t,n){},4331:function(e,t,n){"use strict";n.r(t);var i={NODE_ENV:"production",VERSION:"v0.0.1-alpha",NAME:"Vue Start",VUE_SESSION_TIMEOUT:60,WS:{URL:"http://localhost/fake-api/login.js",USER:{BASE:"user/",LOGIN:"login"},BP:{SESSIONS:"sessions/"}}};t["default"]=i},"444d":function(e,t,n){e.exports=n.p+"img/findme.8b1c7d8b.jpg"},"4f0b":function(e,t,n){"use strict";n("8c13")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=n("5f5b"),o=n("3a60"),r=n.n(o),s=n("0628"),l=n.n(s),c=n("f13c"),u=n.n(c),d=n("2909"),p=n("1da1"),m=(n("99af"),n("ac1f"),n("1276"),n("96cf"),n("bc3a")),f=n.n(m),h=n("4331").default,g={install:function(e){e.prototype.$http={post:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post(t,n);case 3:return i=e.sent,e.abrupt("return",i.data);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,n){return e.apply(this,arguments)}return t}(),put:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.put(t,n);case 3:return i=e.sent,e.abrupt("return",i.data);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,n){return e.apply(this,arguments)}return t}(),get:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,i,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.prev=1,e.next=4,f.a.get(t,{params:n});case 4:return i=e.sent,e.abrupt("return",i.data);case 8:return e.prev=8,e.t0=e["catch"](1),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}(),del:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,i,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.prev=1,e.next=4,f.a.delete(t,{params:n});case 4:return i=e.sent,e.abrupt("return",i.data);case 8:return e.prev=8,e.t0=e["catch"](1),e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}(),patch:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.patch(t,n);case 3:return i=e.sent,e.abrupt("return",i.data);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,n){return e.apply(this,arguments)}return t}(),ws:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"BASE",n=arguments.length>2?arguments[2]:void 0;if(e=e.toUpperCase(),t=t.toUpperCase()||"","BASE"===e)return h.WS.URL;if(n&&n.length){var i=h.WS[e][t];if("function"===typeof i)return h.WS.URL+i.apply(void 0,Object(d["a"])(n))}return h.WS.URL+h.WS[e][t]},setCookie:function(e,t){document.cookie="".concat(e,"=").concat(t)},getCookie:function(e){var t=document.cookie,n=t.split(e)[1];return!!n&&(n=n.split(";")[0].split("="),n[1])},unsetCookie:function(e){document.cookie="".concat(e,"=",null)}}}},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"justify-content-center align-items-center text-center mx-0"},[n("b-col",{attrs:{xs:"12",lg:"12"}},[e.h1?n("h1",[e._v(e._s(e.title))]):e.h2?n("h2",[e._v(e._s(e.title))]):e.h3?n("h3",[e._v(e._s(e.title))]):e.h4?n("h4",[e._v(e._s(e.title))]):e._e(),e.divisor?n("div",{staticClass:"divisor",class:e.divisorClass}):e._e()])],1)},v=[],w={data:function(){return{divisorClass:"w-50"}},props:{title:{type:String,default:"Page Title"},h1:{type:Boolean,default:!1},h2:{type:Boolean,default:!0},h3:{type:Boolean,default:!1},h4:{type:Boolean,default:!1},divisor:{type:Boolean,default:!0},divisorWidth:{type:String,default:"50"}},created:function(){this.h1?this.h2=this.h3=this.h4=!1:this.h2?this.h3=this.h4=!1:this.h3&&(this.h4=!1),this.divisorClass="w-".concat(this.divisorWidth)}},y=w,B=(n("f7bc"),n("2877")),I=Object(B["a"])(y,b,v,!1,null,"6d2443e6",null),k=I.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{mode:"out-in",name:"fade"}},[e.isShowing?n("div",{staticClass:"overlayer"},[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("b-spinner"),n("p",[e._v("Carregando..")])],1)],1)],1):e._e()])},A=[],M={name:"Overlayer",data:function(){return{isShowing:!1}},props:{show:{type:Boolean,default:!1}},watch:{show:{handler:function(){var e=this;this.isShowing=this.show,setTimeout((function(){e.show&&(e.isShowing=!1)}),1e4)}}}},S=M,N=(n("6981"),Object(B["a"])(S,x,A,!1,null,"3ce0a55a",null)),j=N.exports,C=n("ecee"),W=n("c074"),G=n("ad3d");n("4989"),n("ab8b"),n("2dd8"),n("346c");i["default"].use(l.a,{persist:!0}).use(g).use(r.a).use(a["a"]).use(u.a,{container:"body",duration:500,easing:"ease",offset:-100,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),i["default"].component("page-title",k),C["c"].add(W["a"]),i["default"].component("fas",G["a"]),i["default"].component("PageTitle",k),i["default"].component("Overlayer",j),i["default"].config.productionTip=!1;var P=i["default"],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"app",class:{hide:e.hide},attrs:{id:"app"}},[n("div",{staticClass:"background-mask"}),n("div",{staticClass:"page-body"},[n("page-header"),n("div",{staticClass:"px-3 px-md-5",style:{minWidth:e.minAppWidth+"px",transform:"translate("+e.translated+"px)"},attrs:{id:"main"}},[n("transition",{attrs:{mode:"out-in",name:"shrink-fade"}},[n("router-view",{key:e.$route.name})],1)],1)],1),e.buttons.left?n("div",{staticClass:"scrollleft-icon pointer"},[n("fas",{staticClass:"fa-3x",attrs:{icon:"chevron-left"},on:{click:function(t){return e.scroll("right")}}})],1):e._e(),e.buttons.right?n("div",{staticClass:"scrollright-icon pointer"},[n("fas",{staticClass:"fa-3x",attrs:{icon:"chevron-right"},on:{click:function(t){return e.scroll("left")}}})],1):e._e()])])},Y=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"m-0 w-100",attrs:{id:"page-header"}},[n("page-title",{attrs:{title:e.$route.name,divisor:!1}}),n("div",{staticClass:"user-info px-3"},[n("b-row",{staticClass:"h-100 align-items-center"})],1)],1)},F=[],V={name:"PageHeader",data:function(){return{}},components:{},methods:{}},H=V,D=(n("f704"),Object(B["a"])(H,T,F,!1,null,"07c9c42c",null)),z=D.exports,_={name:"App",data:function(){return{navbarIsOpen:!1,hide:!1,minAppWidth:0,windowWidth:window.innerWidth,translated:0,buttons:{right:!1,left:!1}}},components:{PageHeader:z},methods:{scroll:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right",n=-(this.minAppWidth-this.windowWidth),i=2;if("left"===t)for(var a=0;a<100;a++)this.buttons.left=!0,setTimeout((function(){e.translated-i>=n?e.translated-=i:e.translated-1>=n?e.translated-=1:e.buttons.right=!1}),50+a);else if("right"===t)for(var o=0;o<100;o++)this.buttons.right=!0,setTimeout((function(){e.translated+i<=0?e.translated+=i:e.translated+1<=0?e.translated+=1:e.buttons.left=!1}),50+o)},toggler:function(e){this.navbarIsOpen=e},closePage:function(){var e=this;this.hide=!0,window.location="/",setTimeout((function(){}),200),setTimeout((function(){e.hide=!1}),1e3)}},watch:{$route:{handler:function(){document.title=(this.$route.meta.title||"")+" | Andre Mury"}}},beforeCreate:function(){clearInterval(this.iv),this.$session.start(),document.title=(this.$route.meta.title||"")+" | Andre Mury"},mounted:function(){var e=this;this.$nextTick((function(){window.innerWidth<992?(e.minAppWidth=window.innerWidth,e.$root.isMobile=!0):(e.minAppWidth=1450,e.$root.isMobile=!1),window.onresize=function(t){e.windowWidth=t.target.innerWidth,e.windowWidth<992?(e.minAppWidth=e.windowWidth,e.$root.isMobile=!0):(e.minAppWidth=1450,e.$root.isMobile=!1),e.buttons={right:e.windowWidth<e.minAppWidth,left:e.translated>0}},e.buttons={right:e.windowWidth<e.minAppWidth,left:e.translated>0}}))}},X=_,J=(n("e511"),Object(B["a"])(X,O,Y,!1,null,"f5d5def8",null)),L=J.exports,E=n("8c4f"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"skills-wrapper"},[e._l(e.skills,(function(t,i){return n("b-col",{key:i,staticClass:"skill-set-wrapper h-100",class:{pointer:e.selected!==i},attrs:{cols:"12",lg:e.selected===i?"7":e.colSize},on:{click:function(t){!e.selected!==i&&(e.selected=i)}}},[n("div",{staticClass:"skill-set-background-mask",class:{hoverable:e.selected!==i},style:{background:"url("+e.getBackground(t.background)+")"}}),n("skill-set",{attrs:{skill:t,selected:e.selected,position:i},on:{select:function(t){e.selected=i},modal:e.openModal}})],1)})),n("b-col",{staticClass:"position-relative",attrs:{hidden:""}},[n("b-modal",{attrs:{id:"description-modal",title:e.modal.title,"hide-footer":"","body-class":"border-none","header-class":"border-none","content-class":"border-none"}},[n("div",{staticClass:"modal-content",domProps:{innerHTML:e._s(e.modal.content)}})])],1)],2)},Q=[],R=(n("25eb"),n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("keep-alive",[n("div",{staticClass:"skill-set d-flex align-items-center justify-content-center h-100 w-100",staticStyle:{"padding-top":"85px"},style:{height:e.currentElementHeight,minHeight:e.selected===e.position?"90vh":"auto"}},[n("b-container",{attrs:{id:"container__"+e.position}},[n("transition",{attrs:{mode:"out-in",name:"slide-fade"}},[n("div",{key:e.title,style:{marginLeft:e.selected!==e.position?"-10px":0},domProps:{innerHTML:e._s(e.title)}})]),-1===e.selected&&0===e.position?n("small",{staticClass:"text-secondary"},[e._v("Click to open")]):e._e(),n("div",{ref:"scrollable",staticClass:"skill-content",style:{height:e.contentHeight,opacity:e.opacity,transitionDelay:e.transitionDelay}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.selected===e.position?n("div",[n("div",{domProps:{innerHTML:e._s(e.skill.description)}}),e.skill.abilities&&e.skill.abilities.length?n("div",[n("h4",{staticClass:"mt-5"},[e._v("Skills and levels")]),n("div",{staticClass:"w-100 text-left pl-2"},[n("b-button",{staticClass:"mt-4",attrs:{type:"button",variant:"info"},on:{click:e.order}},[e._v(" Order by "+e._s(0===e.orderBy?"Proefficiency":"Prefference")+" ")])],1),n("transition",{attrs:{mode:"out-in",name:"slide-fade"}},[n("b-row",{key:e.orderBy,ref:"scrollableContent",staticClass:"mt-1 pb-4"},e._l(e.abilities,(function(t,i){return n("ability-description",{key:i,attrs:{ability:t},on:{modal:function(t){return e.$emit("modal",t)}}})})),1)],1)],1):e._e()]):e._e()])],1)],1)],1)])}),Z=[],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-col",{staticClass:"ability-wrapper p-3",attrs:{md:"6",lg:"4"}},[n("b-row",{staticClass:"ability-content default-transition m-2 h-100 pt-2 rounded",class:{pointer:e.extendDescription},on:{click:e.openDescription}},[n("b-col",{attrs:{cols:"12"}},[n("p",{staticClass:"h4"},[e._v(e._s(e.ability.name))])]),n("b-col",{staticClass:"text-center",staticStyle:{height:"120px"}},[n("div",{staticClass:"round d-flex justify-content-center align-items-center w-100",staticStyle:{height:"100%"}},[n("img",{staticClass:"lazy",style:{filter:e.imageFilter},attrs:{src:e.picture,height:"100"}})])]),n("b-col",{attrs:{cols:"12"}},[e._v(" Proefficiency "),n("ability-chart",{attrs:{level:e.ability.level||0}})],1),n("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("p",{staticClass:"description pt-3"},[e._v(" "+e._s(e.abstract)+" "),e.extendDescription?n("b-button",{attrs:{type:"button",variant:"link"},on:{click:e.openDescription}},[e._v(" See more ")]):e._e()],1)])],1)],1)},K=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-content-center"},e._l(e.items,(function(e,t){return n("div",{key:t,staticClass:"level-box border",style:{backgroundColor:e}})})),0)},ee=[],te=i["default"].extend({name:"AbilityChart",props:["level"],methods:{bindColor:function(e){const t=Math.floor(e);switch(t){case 1:return"#00C227";case 2:return"#35E600";case 3:return"#F2EA00";case 4:return"#F09C00";case 5:return"#E64201"}}},computed:{items(){const e=[];for(let t=1;t<=5;t+=.5)e.push(t<=this.level?this.bindColor(Math.floor(t)):"black");return e}}}),ne=te,ie=(n("e2a8"),Object(B["a"])(ne,$,ee,!1,null,"7fd83571",null)),ae=ie.exports,oe=i["default"].extend({name:"AbilityDescription",components:{AbilityChart:ae},props:["ability"],methods:{openDescription:function(){this.ability.description&&this.extendDescription&&this.$emit("modal",{title:this.ability.name,content:this.ability.description})}},computed:{extendDescription(){return this.ability.description&&this.ability.description.length>=30},picture(){return this.ability.image.length?n("7584")("./"+this.ability.image):""},abstract(){return this.ability.description&&this.ability.description.length>30?String(this.ability.description.replace(/<.+>/gim,"").substring(0,30)).trim()+"...":this.ability.description||""},imageFilter(){return this.ability.imageFilter||""}}}),re=oe,se=(n("92c0"),Object(B["a"])(re,q,K,!1,null,"1c48310e",null)),le=se.exports,ce=i["default"].extend({components:{AbilityDescription:le},name:"SkillSet",data(){return{transitionDelay:"0ms",offset:85,orderBy:0,original:[],abilities:[]}},props:["skill","selected","position"],methods:{order:function(){if(0===this.orderBy){this.original=JSON.parse(JSON.stringify(this.abilities));const e=this.abilities.sort((e,t)=>e.level>t.level?-1:1);this.orderBy=1,this.abilities=e}else this.orderBy=0,this.abilities=JSON.parse(JSON.stringify(this.original))},scroll(e="down"){const t="down"===e?1:-1;for(let n=0;n<100;n++)setTimeout(()=>{this.$refs["scrollable"].scrollTop+=t},50+2*n)},currentElementHeight(){if(this.$root.isMobile&&this.$refs["scrollable"]){const e=this.$refs["scrollable"].childNodes;if(Array.isArray(e)){let t=0;return e.forEach(e=>{t+=e.clientHeight+10}),t+"px"}}return"100%"}},watch:{selected(e,t){t===this.position?this.transitionDelay="0ms":(e===this.position&&this.$root.isMobile&&setTimeout(()=>{this.$scrollTo("#container__"+this.position),console.log("#container__"+this.position)},1e3),this.transitionDelay="650ms")}},computed:{minimumOffsetToMove(){return window.innerHeight-(window.innerHeight-85)/3},currentlySelected(){return this.selected===this.position},contentHeight(){return this.$root.isMobile?this.currentlySelected?this.currentElementHeight():"0":this.currentlySelected?"86.5vh":"0"},opacity(){return this.currentlySelected?1:0},title(){return this.skill.title?-1!==this.selected&&this.selected!==this.position?`<h5>${this.skill.little}</h5>`:`<h2>${this.skill.title}</h2>`:""}},mounted(){this.abilities=this.skill.abilities,this.$refs["scrollable"]&&this.$refs["scrollable"].addEventListener("wheel",e=>{e.deltaY>0?this.scroll("down"):this.scroll("up")})}}),ue=ce,de=(n("732d"),Object(B["a"])(ue,R,Z,!1,null,"2fa92069",null)),pe=de.exports,me=[{title:"Self Presentation",little:"I am ...",description:'<p>I\'m Andre Mury, a software engineer graduated in Information Systems and currently Master\'s candidate by Federal University of Itajuba, Brazil. I have started \n      in this industry around 2014 when I joined the graduation, and I\'m working as a freelancer since then. In the meantime I have worked in some small companies and startups as a developer\n      and always brought something good.</p>\n      <p>I have developed this digital resumé in order to facilitate an overview of my professional abilities and I hope you feel good with this view :) Thank you for visiting.</p>\n      <mark>Note that page scrolls are disabled but if something is bigger than your screen, scroll arrows will appear in the sides of the window.</mark>\n      <h5 class="mt-4">Please check <a target="_blank" href="https://linkedin.com/in/andremury">Linkedin</a> for professional information.</h5>\n      ',background:"atlantic-city.webp",abilities:[{name:"Team work",image:"teamwork.png",imageFilter:"invert(1)",level:4,description:"I love teamwork. This is the best way to achieve our goals inside any workspace and either in life. it’s no coincidence that parrots have lifelong partners and wolves flock!\n            To avoid being pretentious, the only issue I have about teams lives where members of it don't strive like everyone and the team becomes unbalanced."},{name:"Communication",image:"communication.png",level:4,description:"Communication is one of the most important skills you can ever have. People communicate with each other in order to accomplish something and it is\n          the only way we can move the world on. As a professional musician 🎸, I have learned very well how to communicate to others in order to deliver some mood or feeling.\n          As a team worker and team leader, I have developed the ability to deliver knowledge and confidence to my co-workers."},{name:"Dedicated",image:"dedication.png",imageFilter:"invert(1)",level:4.5,description:"If I do believe in the cause, you can count on me till the end."},{name:"English",image:"language.png",imageFilter:"invert(1)",level:3,description:"Very good listening, good writing and medium speaking. I am trying to improve this skill the best I can :)"},{name:"Portuguese",image:"language.png",imageFilter:"invert(1)",level:5,description:"Well, I'm a native speaker so I have no problem speaking portuguese."},{name:"Sincerity",image:"sincerity.png",imageFilter:"invert(1)",level:4.5,description:"I'm very sincere.."},{name:"Funny",image:"funny.png",imageFilter:"invert(1)",level:4.5,description:"And also very funny :D"},{name:"Methodical",image:"methodical.png",imageFilter:"invert(1) brightness(2)",level:4.5,description:"Step by step. If protocols exists why should we do the wrong way?"}]},{title:"Back-end Engineer",little:"Back end",description:"I have made my choices about back-end development a long time ago. PHP inserted me into this world and I've dedicated time learning it, and doing my best to keep the good pratices.\n        As the time passes, I have learned other technologies such as NodeJS and Docker to improve my skills. In the PHP case, I always preferred to work with the vanilla version, without a huge\n        framework behind the project and I ended creating my own API environment model that helped me in almost all my small and medium size projects. Now I have decided to learn a framework\n        and made my choice for Symfony. I have tried Laravel but it is too big for most projects and Zend/Laminas are in my TODO list. For now, let's focus on Symfony.",background:"backend.png",abilities:[{name:"PHP",image:"php.png",description:'<p>5+ years working with vanilla PHP, writting websites and back-end APIs from scratch. \n          I have created myself a tool to improve my work efficiency by abstracting most boilerplates needed in a project.\n          </p><p>The reason I haven\'t really used a framework like Laravel, Slim, Laminas, or Symfony is that I like to learn things from scratch.\n          I have used some of these frameworks for experimenting but never in a big project. \n          You can check a my api template tool <a target="_blank" href="http://github.com/mury12/mm-ws">here</a> on GitHub.</p>',libs:[],level:4.5},{name:"MariaDB/MySQL",image:"database.png",description:"Relational databases are something that I particularly like. It seems like a totally different part of the project that involves a lot of effort.\n                 I'm experienced from database modeling to administration and optimization.\n                 My best knowledge is about MariaDB/MySQL but I also have had a few experiences with SQL Server and HannaDB (SAP).",libs:[],level:4},{name:"NodeJS",image:"nodejs.png",description:"2 years of experience working with NodeJS including more common back-end frameworks such as Express, Fastify, and Sequelize.",libs:[],level:3},{name:"Typescript",image:"typescript.png",description:"I would consider my Typescript skills very much like JavaScript.\n           I have been working with this technology since 2020 and have discovered a new life to the NodeJS platform that \n           I was very disappointed using it. MVC and other OOP implementations are possible with no difficulties and it makes me feel very trust about NodeJS Framework 😁",libs:[],level:3.5},{name:"MongoDB",image:"mongodb.png",description:"MongoDB is my main activity-log database. I really only use it as a giant notepad but I still know how to handle it.\n                Normally I like to use NodeJS backend to communicate because it is easier but I have also developed PHP backends alongside MongoDB.",libs:[],level:2},{name:"Docker",image:"docker.png",description:"1 year working with docker. I have got it a little later but I'm learning a lot and almost getting in touch with Swarm.",libs:[],level:2}]},{title:"Front-end Engineer",little:"Front end",description:"",background:"frontend.png",abilities:[{name:"VueJS",image:"logo.png",description:"<p>I have been working with VueJS since 2018 and I fell in love as soon as I met this framework, and since then I'm learning and using Vue in most projects as I can.\n                Currently, I use Vue 2 but I'm starting a new path to get in touch with Vue 3. </p>\n                <p>I usually use the most common VueJS packages such as BootstrapVue, VueTheMask, VueRouter, VueSession, and others that come as it is needed. \n                I also have basic knowledge about Vuex and NuxtJs</p>",libs:[],level:4},{name:"Bootstrap",image:"bootstrap.png",description:"The Bootstrap Framework is the most overused framework for web development. I've chosen this framework since version 2 instead of Material or any other because of its flexibility. \n                    It is really easy to create and modify components. Although, Bootstrap classes are very useful overall the project.",libs:[],level:4.5},{name:"JavaScript",image:"js.png",description:"I have started using JavaScript a little after PHP, around 6 years ago. In the beginning, I wasn't really sure to be a front-end developer and only used JS for those things\n                    I couldn't do with css. But time passes and I have developed a passion for front-end development so I started to learn JavaScript and, of course, the father of all jQuery.\n                    Today, JavaScript is part of my all-day development for both front-end and backend.",libs:[],level:4},{name:"jQuery",image:"jquery.png",description:"jQuery was the first JS lib I have ever used and it was very, very useful. In early 2010's, there weren't much more than the hyped jQuery and its Ajax requests. It was beautiful.\n                    But then, another frameworks came and jQuery is being ignored :/. I still consider to use it for non-reactive development.",libs:[],level:3},{name:"HTML5",image:"html5.png",libs:[],level:3.5},{name:"CSS3",image:"css3.png",libs:[],level:3.5},{name:"Sass",image:"sass.png",libs:[],level:3.5},{name:"React",image:"react.svg",description:"I have used React for a few projects in one of the companies I've worked and I should say that this is not my favorite, but still counts.",libs:[],level:2}]},{title:"General Tools and Frameworks",little:"Other tools",description:"",background:"database.png",abilities:[{name:"Linux",image:"linux.png",libs:[],level:3.5},{name:"Wordpress",image:"wordpress.png",libs:[],level:4},{name:"Woocommerce",image:"woocom.png",imageFilter:"",libs:[],level:3},{name:"Botpress",image:"botpress.png",libs:[],level:2},{name:"Solidity",image:"solidity.png",imageFilter:"invert(1)",libs:[],level:2},{name:"Java",image:"java.webp",libs:[],level:3},{name:"Trello",image:"trello.png",libs:[],level:3.5},{name:"Scrum",image:"scrum.png",libs:[],level:2.5},{name:"Arduino",image:"arduino.png",libs:[],level:2},{name:"C",image:"c.png",libs:[],level:2.5},{name:"C#",image:"csharp.png",libs:[],level:2},{name:"Python",image:"python.png",libs:[],level:2},{name:"Unity3d",image:"unity.webp",libs:[],level:2},{name:"Ms Office",image:"msoffice.png",libs:[],level:4},{name:"Open Office",image:"openoffice.png",libs:[],level:4},{name:"Photoshop",image:"photoshop.png",libs:[],level:3.5},{name:"After FX",image:"afterfx.png",libs:[],level:2.5},{name:"Premiere",image:"premiere.png",libs:[],level:3}]},{title:"Musician",little:"Music",description:"",background:"findme.jpg",abilities:[]},{title:"Where you can find me",little:"Find me",description:'\n        <p>You can find me in:</p>\n        <ul class="m-0 p-0" style="list-style-type: none">\n        <li><a target="_blank" href="https://www.linkedin.com/in/andremury">Linkedin</a></li>\n        <li><a target="_blank" href="https://github.com/mury12">Github</a></li>\n        <li><a target="_blank" href="https://github.com/mury12">Gitlab</a></li>\n        <li><a target="_blank" href="https://instagram.com/andmury.music">Instagram</a></li>\n        <li><a target="_blank" href="https://open.spotify.com/artist/5aw5ZuQB4ElCVsrPkSvtLn?si=d747c21cd41b463b">Spotify</a></li>\n        <li><a target="_blank" href="http://barbdebode.com">Barba de Bode</a></li>\n        <li><a target="_blank" href="https://soundcloud.com/andremury">Soundcloud</a></li>\n        </ul>\n        And you can also <a href ="mailto:mury63@gmail.com">mail me</a><br/>\n        Thanks for your visit.\n        ',background:"music.jpg",abilities:[]}],fe={name:"Home",components:{SkillSet:pe},data:function(){return{selected:-1,modal:{content:"",title:""},skills:me}},methods:{openModal:function(e){this.modal=e,this.$bvModal.show("description-modal")},getBackground:function(e){return e?n("7584")("./".concat(e)):""},select:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next";"next"===e&&this.selected<this.skills.length-1?this.selected++:"prev"===e&&this.selected>-1&&this.selected--}},computed:{colSize:function(){return-1===this.selected?Number.parseInt(12/this.skills.length):Number.parseInt(5/(this.skills.length-1))}},mounted:function(){var e=this;this.$nextTick((function(){document.body.addEventListener("keyup",(function(t){"ArrowRight"===t.key?e.select("next"):"ArrowLeft"===t.key&&e.select("prev")}))})),setTimeout((function(){}),500)}},he=fe,ge=(n("4f0b"),Object(B["a"])(he,U,Q,!1,null,"43dfdcd6",null)),be=ge.exports,ve=[{path:"/",name:"André Mury, 27, full-stack developer, Brazil",component:be,meta:{protected:!0,title:"Início"}},{path:"*",component:be,name:"Other",meta:{title:"Home"}}];P.use(E["a"]);var we=new E["a"]({routes:ve,mode:"history"}),ye=we;new P({data:{isMobile:!1},router:ye,render:function(e){return e(L)}}).$mount("#app")},"578c":function(e,t,n){e.exports=n.p+"img/openoffice.9c90bac9.png"},"5ac0":function(e,t,n){e.exports=n.p+"img/linux.acda6504.png"},6161:function(e,t,n){e.exports=n.p+"img/nodejs.d42672d4.png"},"61fa":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAACLlBMVEVMaXFBuINBuIM8enI/nnxBuINBuINBuIM8enJBuIM8enJBuINBuINBuIM8enJBuIM8enJBuINBuIM7eXFBuINBuIM8eXFBuINBuIM8eHFBuIM8eXFBuIM8eHBBuIM8eHBBuIM8d3BBuINBuIM8d3BBuINBuINBuIM8dnBBuINBuIM8dnBBuINBuIM7dXBBuINBuIM8dG9BuINBuIM8dG9BuIM8dG9BuINBuIM8c29BuINBuIM7cm5BuINBuIM7cW5BuIM7cW9BuINBuINBuIM7cW5BuINBuINBuIM7b21BuINBuIM6b21BuIM7bm1BuINBuIM7bW1BuINBuIM6bGxBuINBuIM6a2xBuIM6a2xBuINBuIM6amxBuIM6aWtBuINBuIM6aGpBuINBuIM6ZmpBuINBuIM5ZGlBuIM5Y2lBuINBuIM5YWhBuINBuIM5YGdBuIM4XmdBuINBuIM4XGZBuINBuIM4WmVBuIM3WGRBuIM3V2RBuINBuIM3VGNBuIM2UmI2UGFBuIM1TWA1SV41Sl41S141TF81TWA2T2A2UWE2U2I3VWM3WGQ4W2U4Xmc5YGc5YWg5ZGk6Zmo6Z2o6aGo6a2w7bW07bm07cG48c287dnA7eHA8enI8fHI9fnM8gXM9g3Q9hnU9iXY+i3c+jHc+j3g+kXk+lHo/l3o/mXs+m3s/nnw/oH0/o31Apn5BqH5Aqn9BrH9BroBBr4BCsYBBs4FBtoJCt4JBuIP7mHZoAAAAhHRSTlMAAQICAwQHCAgLDQ4QEhIVFhcaGh4hIiUoKissLzEzNDc4Oj4/QERFRkhLTVBTVldaXV5iYmZnaW1vcHV3eHx8gIGDhIeJio+Sk5aZm52foaWmqKyusLS1t7m6u7y/wMLHx8zP0NPW1trc3uLi5Obn6urt7+/y8/T29vf4+vv7/P39/v7L5yYnAAAKeElEQVR42uzBgQAAAADDoPtTH2TVAAAAAAAAAAAAAMg6NfegXmu6BVG4tm3btm3btm1bM3bOtm17Xt1pu5OlkfT3v7cxnqp1zio0SFovlZleaQYp/O6odWp90VGv0wxyWGXmsEHSXjvqYmtplrNuGGWKysgUo9xw1ixJ9Q456kOWQc7WVJmoedYgWR8cdaieJI101gOjrFCZWGGU+84aqZ9U2eqob3kGudRG4rW5ZJC8b47aWkU/6+Gs50bZIfF2GOW5s3roV0ud9T+jDBZusFGKnbVUv2l22lFv0w1yrJJglY4ZJP2to0430++mOuuWUWYLNtsot5w1VX+otd9Rn3MMcr6RUI3OGyT7s6P219KfDHLWI6NsEGqDUR45a5D+rOJGR33LN0hGZ4E6Zxgk/5ujNlbUX3R01kuj7BNon1FeOquj/ma+s64aZbQwo41y1Vnz9XcNjzvqfaZBTlUXpPopg2S+d9TxhvqHsc66a5TFgiw2yl1njdU/VdvpqK+5BslqKkTTLIPkfnHUzmr6F32c9dQo24TYZpSnzuqjf7XGWUUGSesrQN80gxQ5a43+XetzjnoTVs0Nttuea60SzIx+zY1it52pktSBa+5HrubWVYrqct32I9xt66hEw4OtuauVotVGeeCs4SpZuDU3s51S0i4z1G67pYpK0S3YmrtbKdkdbLftqlItcdZlowxVCoYa5bKzlqh0TeCa+y7DICeqKGlVThgk4x3cbZsohsnOum2UuUraXKPcdtZkxVJrL1xzsw1yoZGS1OhCqN12bw3FNDA6NTf63XagYquw3lHfCwyS3l1J6Z5ukILvjlpfQXFo76xXRjmgpBwwyitntVdc5jnrmlHGKQnjjHLNWfMUn4ZHAxgoADWX7rZZcLc92lBxGuOse3zN/S+67T1njVG8qoZbc1soQS24bvsV7rZVFbfeznrG19zod9veSsAqZxXzNbe8u22xs1YqES3DrbmVlIBKXLd9A3fblkrIdGfdNMoMJWCGUW46a7oSU+egoz5lG+R8XcWtLjc++OSog3WUoGHB1ty1itvaYLvtMCWqypZgBwodFKcOwY4PtlRWwro460X519zdRnnhrC5KwiJnXTHKCMVlhFGuOGuRktHkZLRrbrjd9mQTJWWSs+4YZYHisCDYbjtRyamxx1FfcrCa21QxNcW6bc4XR+2poST1d9Zjo2xWTJuN8thZ/ZW44GtuL8XQK+Rum7S2wd7NHSi3bpsGd9uLbZWCOc66bpQJKtUEo1x31hylosGRaN7NhXsad6SBUjLKWfeNskylWBZstx2l1FTdDtfcPINktVKJWmUZJA/utturKkU9g625O8rjNO6Zs3oqZcuDrbkDVIIBwXbb5Upd8zNRu5sL9zTuTHMBpgV7Nzcjat12mgi19wdbc+vrX9QPttvuryXEEGc9LNuBwgajPHTWEDEqborS3Vy4p3GbKgrSKUp3c7uDPY3rJMzCYO/mRkSn2y4Up/FxuubSAwV+fEB32+ONBRoffs2lu+0dZ40XqdouR32B7+bCP43bVU2ofs56wtdctts+cVY/sX5g7w4wAoECKIoaALPuwRACIZIgEATR7trEw/ndf7fxeOcPjof52Nc4Hg/zsa9tPB7mY1/bfDzMx76m+XiYj31t8/EwH/ua5uNhPva1zMfDfOxrmY+H+djXNB8POwP7WjfHw3Zrro99TfPxMB/7mubjYT72tc3Hw3zsa5uPh/nY1zQfD/Oxr20+HuZjX9N8PMzHvrb5eJiPfU3z8TAf+9rm42E+9rXNx8N87Guaj4f52Nc2Hw/zsa/AmtvabX08zMe+9vl4mI997fPxMB/7muXjYT72NcjHw1jsa7/bHoyH+djXPvpuzj+N2+bjYT72tc3Hw3zsa5qPh/nY1zYfD/Oxr2k+HuZjX9t8PMzHvqb5eJiPfW3z8TAf+9rm42E+9jXKx8N87GuQj4f52NcgHw/zsa9BPh4GY19AAB7mYF9AAB4GYV9AAB7mYF9AAB4GYV9AAB6GY193zQ3sthIeBmNfQAAe5mBfQAAeBmFfQAAe5mBfQAAeBmFfQAAe5mBfQAAe5mBfQAAeBmFfQAAe5mBfQAAeBmFfQAAe5mBfQAAeBmFfQAAe5mBfQAAe5mBfQAAeBmFfQAAe5mBfQAAeBmFfQAAepmNfg3w8bNDjN459hfCwM7CvEh52AvaVwsNOwb58PGzWG4V93bs5/zSuhYf52FcLD/Oxrxge5mNfLTzMx75ieJiPfbXwMB/7iuFhPvbVwsN87KuFh/nYVwwP87GvFh7mY18xPOzhy8e+UniYj3218DAf+2rhYT72FcPDfOyrhYf52FcAD0Owr7vm3t3Wx8N87KuFh/nYVwsP87GvGB7mY18tPMzHvgJ4mIt93bs5/zQuhof52FcLD/OxrxYe9v/Tx75SeJiPfbXwMB/7+j142HsO+/LxsBj25eNhNezLx8Ni2JePh9WwLx8Pi2FfPh5Ww758PKyGffl4WAz78vGw87GvCB724mNfATwsgH35eJiGfd019+62Ph7278PHvlJ4mI99ZfCwAPbl42GvNezLx8Nq2JePh9WwLx8Pi2FfPh7Wwr58POzZxr78/u7xsBj25eNhMezLx8Ni2JePhx2IfQXwsCcf+0rhYT72FcPDfOyrhYf52FcMD8OxL781HuZjXzE8zMe+aniYj33F8DAf+yrhYRj2de/m7mmciIf52FcND/Oxrxge5mNfDTwMw77umnt3WxcP87GvGB7mY181PMzHvkp4mI99BfCwn/bu6UoSAACi6CqPtW2NbZtxdnaTRON93JdGnVMX9tXCw2BfMTwM9tXCw2BfLTwM9hXDw2BfLTwM9hXDw2BfUTwM9pVec+22Q+jVYAjFsC94WAv7gofFsC94WAv7gofFsC94WAD7cjfnNK6Ch8G+WngY7CuGh8G+WngY7CuJh/WxL3gY7GvYXQyGUAD7gofBvgJ4GOyrhof1sS94GOxr2D0aAh4WwL7gYbCvBh7Wx77gYbCvYbcwGEIB7AseFsC+4GGwr8Caa7dt4GGwrxYeBvuK4WGwrxYeBvuK4WGwrxYeBvtq4WGwrxgeBvuq4WGwr8DdnNO4Kh4G+4rhYbCvFh4G+2rhYbCvHh7Wx77gYX3sCx7Wx77gYbCvYXcL+6rhYS3sS5uwrzAeFsC+9K+Gfbmba53G6W0M+9IJ7KuGh7WwL63UsC9rbmu31XfYVw0Pa2FfehbDvrRXw77gYS3sSzM17Ase1sK+9DGGfem6hn3Bw1rYlzZq2Bc8rIV96U8Y+7Lm2m0DvYphXzquYV/wsBb2paUa9gUPa2Ff+hbGvtzNOY0L9AT2FWsX9hXGw2BfgaZhX2E8DPYV6APsK9YF7CuMh8G+Aq3BvsJ4GOwr0G/YVxgPg30Fegn7inUI+wrjYbCvQAuwrzAeBvsK9AX21V9z7bYZPAz2FWgb9hXGw2Bfgf7DvsJ4GOwr0DvYV6wz2FcXD4N9FVqFfVXv5pzGNfrZxL7gYbCvSs9hX7EOetgXPAz2VWquhn3Bw2BfrT7DviRJkiRJkiRJkiRJkiRJkiQNszucKAuToL+DiQAAAABJRU5ErkJggg=="},"680e":function(e,t,n){e.exports=n.p+"img/unity.8369127e.webp"},"686e":function(e,t,n){e.exports=n.p+"img/music.c4810d8e.jpg"},6981:function(e,t,n){"use strict";n("3cdd")},"732d":function(e,t,n){"use strict";n("e276")},7584:function(e,t,n){var i={"./afterfx.png":"f3b1","./arduino.png":"2b67","./atlantic-city.webp":"77fc","./backend.png":"bd76","./bootstrap.png":"e896","./botpress.png":"27e6","./c.png":"781f","./communication.png":"1f80","./csharp.png":"1eb8","./css3.png":"7de7","./database.png":"d31d","./dedication.png":"9c9e","./docker.png":"d0c8","./findme.jpg":"444d","./frontend.png":"8de2","./funny.png":"15e2","./html5.png":"8308","./java.webp":"0f69","./jquery.png":"f183","./js.png":"f2da","./language.png":"75f2","./linux.png":"5ac0","./logo.png":"9d64","./methodical.png":"fade","./mongodb.png":"9973","./msoffice.png":"d98c","./music.jpg":"686e","./mysql.webp":"302d","./nodejs.png":"6161","./openoffice.png":"578c","./photoshop.png":"ddf3","./php.png":"c891","./premiere.png":"afb5","./python.png":"b466","./react.svg":"830e","./sass.png":"2b8f","./scrum.png":"03a6","./sincerity.png":"c9d1","./solidity.png":"fedb","./teamwork.png":"8ae9","./trello.png":"2cf1","./typescript.png":"b6d2","./unity.webp":"680e","./vuejs.png":"61fa","./woocom.png":"7b31","./wordpress.png":"bdf2"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=o,e.exports=a,a.id="7584"},"75f2":function(e,t,n){e.exports=n.p+"img/language.2825184f.png"},"77fc":function(e,t,n){e.exports=n.p+"img/atlantic-city.3f3047ef.webp"},"781f":function(e,t,n){e.exports=n.p+"img/c.623f8181.png"},"7b31":function(e,t,n){e.exports=n.p+"img/woocom.c97e165d.png"},"7de7":function(e,t,n){e.exports=n.p+"img/css3.c26a73b4.png"},8308:function(e,t,n){e.exports=n.p+"img/html5.e0787e40.png"},"830e":function(e,t,n){e.exports=n.p+"img/react.4009eef3.svg"},8644:function(e,t,n){},"8ae9":function(e,t,n){e.exports=n.p+"img/teamwork.673f2cd0.png"},"8c13":function(e,t,n){},"8de2":function(e,t,n){e.exports=n.p+"img/frontend.1a6a44ab.png"},"92c0":function(e,t,n){"use strict";n("db46")},9973:function(e,t,n){e.exports=n.p+"img/mongodb.60605a1a.png"},"9c9e":function(e,t,n){e.exports=n.p+"img/dedication.eb34e1a1.png"},"9d64":function(e,t,n){e.exports=n.p+"img/logo.5a5cf3f6.png"},aeea:function(e,t,n){},afb5:function(e,t,n){e.exports=n.p+"img/premiere.bf5999b3.png"},b466:function(e,t,n){e.exports=n.p+"img/python.9591ed82.png"},b6d2:function(e,t,n){e.exports=n.p+"img/typescript.ff20dd3e.png"},bd76:function(e,t,n){e.exports=n.p+"img/backend.abdf5b01.png"},bdf2:function(e,t,n){e.exports=n.p+"img/wordpress.7188d9b6.png"},c891:function(e,t,n){e.exports=n.p+"img/php.6a7c1a1f.png"},c9d1:function(e,t,n){e.exports=n.p+"img/sincerity.90ceb736.png"},d0c8:function(e,t,n){e.exports=n.p+"img/docker.7bcbbab5.png"},d31d:function(e,t,n){e.exports=n.p+"img/database.0376a5c9.png"},d98c:function(e,t,n){e.exports=n.p+"img/msoffice.8a7db427.png"},db46:function(e,t,n){},ddf3:function(e,t,n){e.exports=n.p+"img/photoshop.b8c25091.png"},e276:function(e,t,n){},e2a8:function(e,t,n){"use strict";n("37b8")},e511:function(e,t,n){"use strict";n("2afa")},e896:function(e,t,n){e.exports=n.p+"img/bootstrap.584d9f32.png"},f183:function(e,t,n){e.exports=n.p+"img/jquery.b34e848e.png"},f2da:function(e,t,n){e.exports=n.p+"img/js.0e4fdce8.png"},f3b1:function(e,t,n){e.exports=n.p+"img/afterfx.37768ba2.png"},f704:function(e,t,n){"use strict";n("aeea")},f7bc:function(e,t,n){"use strict";n("8644")},fade:function(e,t,n){e.exports=n.p+"img/methodical.124d5edd.png"},fedb:function(e,t,n){e.exports=n.p+"img/solidity.7937b514.png"}});
//# sourceMappingURL=app.d4032ac3.js.map