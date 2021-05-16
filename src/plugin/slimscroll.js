/* eslint-disable */
export function slimScroll(e,t){var n={},o=this,i="wrapper",r="scrollBar",s="scrollBarContainer",l="data-slimscroll",a="scrollTop",c="parentElement",u="innerHTML",d="parentNode",p="srcElement",f=function(e){if(o.initInProcess||(o.initDone||o.init(),B(n[i]))){n[i].setAttribute("style","overflow: hidden !important");var t=n.E;n.h=n[s].offsetHeight,n.sH=n[i].scrollHeight,n.sP=n.h/n.sH*100,n.sbh=n.sP*n.h/100,t.sH?n.sP1=t.sH/n.h*100:n.sP1=n.sbh<t.mH?t.mH/n.h*100:n.sP,n.rP1=100-n.sP1,n.x=(n.sH-n.h)*((n.sP1-n.sP)/(100-n.sP)),n.sH1=Math.abs(n.x/n.rP1+n.sH/100),n[r].style.height=n.sP1+"%",n.reposition=H(n[r],n.h)}else E()},v=function(e,t,n){e.setAttribute(t,n)},m=function(e,t){t.length&&(e.className=t)},h=function(e,t,n){var o=document.createElement("div");return m(o,e),o[u]=t,n.appendChild(o),o},g=function(e){var t=(e=e||event).target||event[p],o=t[c]||t[d],l=n.E;if(n&&o!==n[s]){var u=((e.pageY||event.clientY)-T(n[i][c]||n[i][d]))/n.h*100-n.sP1/2;u>n.rP1?u=n.rP1:u<0&&(u=0),n[r].style.top=u+"%",n[i][a]=u*n.sH1,m(n[s],l.S+l.a)}},S=function(e){var t=window.getSelection?window.getSelection():document.selection;t&&(t.removeAllRanges?t.removeAllRanges():t.empty&&t.empty());(e=e||event).currentTarget||e[p];return w("mousemove",document,x),w("mouseup",document,P),n.offsetTop=T(n[i]),n.firstY=e.pageY||event.clientY,n.reposition||(n.reposition=H(n[r],n.h)),!1},H=function(e,t){var n=parseInt(e.style.top.replace("%",""),10)*t/100;return n||0},x=function(e){var e=e||event,t=n.E,o=e.pageY||e.clientY,l=(n.reposition+o-n.firstY)/n.h*100;n.rP1<l&&(l=n.rP1),n.previousTop||(n.previousTop=l+1);var c=l>=0&&n.firstY>n.offsetTop;(n.previousTop>l&&c||c&&n[i][a]+n.h!==n.sH)&&(n[r].style.top=l+"%",n.previousTop=l,n[i][a]=l*n.sH1),m(n[s],t.S)},P=function(e){var e=e||event,t=n.E;b("mousemove",document),b("mouseup",document),n.reposition=0,m(n[s],t.S+t.a)},y=function(e){e=e||event;if(n){var t=n.E;m(n[s],t.S),n[r].style.top=n[i][a]/n.sH1+"%",m(n[s],t.S+t.a)}},w=function(e,t,n){t["on"+e]=n},b=function(e,t){t["on"+e]=null},C=function(e,t,n,o){e.insertRule?e.insertRule(t+"{"+n+"}",o):e.addRule&&e.addRule(t,n,o)},T=function(e){var t=document.documentElement[a];return e.getBoundingClientRect().top+(t||document.body[a])},E=function(){if(e.removeAttribute(l),o.isSlimScrollInserted){var t=e.firstChild.innerHTML;t&&(e.innerHTML=t)}o.isSlimScrollInserted=!1,o.initDone=!1},B=function(t){return t||(t=e),t.offsetHeight<t.scrollHeight},I=function(){if(E(),B()){o.initDone=!0,o.initInProcess=!0,v(e,l,"1"),function(){if(!window.slimScrollStylesApplied){if(o.isSlimScrollInserted)return void(o.initInProcess=!1);var e="["+l+"]",t=" !important",n="position:absolute"+t,i=n+";overflow:auto"+t+";left:0px;top:0px"+t+";right:0px;bottom:0px"+t+";padding-right:8px"+t+";",r=n+";top:0px"+t+";bottom:0px"+t+";right:0px;left:auto;width:5px;cursor:pointer"+t+";padding-right:0px"+t+";",s=n+";background-color:#999;top:0px;left:0px;right:0px;",a=document.createElement("style");try{a.appendChild(document.createTextNode(""))}catch(e){}var c=document.head||document.getElementsByTagName("head")[0];c.insertBefore(a,c.hasChildNodes()?c.childNodes[0]:null);var u=a.sheet;u?(C(u,e+">div",i,0),C(u,e+">div+div",r,0),C(u,"[data-scrollbar]",s,0)):a.styleSheet.cssText=e+">div{"+i+"}"+e+">div+div{"+r+"}"+e+">div+div>div{"+s+"}",o.isSlimScrollInserted=!0,window.slimScrollStylesApplied=!0}}();var a=e[u],c=n.E={};t=t||{},c.w=t.wrapperClass||"",c.s=t.scrollBarClass||"",c.S=t.scrollBarContainerClass||"",c.a=t.scrollBarContainerSpecialClass?" "+t.scrollBarContainerSpecialClass:"",c.mH=t.scrollBarMinHeight||25,c.sH=t.scrollBarFixedHeight,e[u]="",n[i]=h(c.w,a,e),n[s]=h(c.S+c.a,"",e),n[r]=h(c.s,"",n[s]),v(n[r],"data-scrollbar","1"),f(),Y(),t.keepFocus&&(v(n[i],"tabindex","-1"),n[i].focus()),w("mousedown",n[r],S),w("click",n[s],g),w("scroll",n[i],y),o.initInProcess=!1}else E()},Y=function(){n[i].style.overflow="";var e=n[i].offsetWidth-n[i].clientWidth;n[i].style.right=-e+"px",o.isSlimScrollInserted=!0,t.keepFocus&&(v(n[i],"tabindex","-1"),n[i].focus())};return o.resetValues=function(){Object.keys(n).length?(f(),Y()):f()},o.init=I,I(),o};