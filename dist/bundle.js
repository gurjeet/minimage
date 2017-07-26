!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=2)}([function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e){var t=document.createElement("canvas");t.width=t.height=1;var n=t.getContext("2d");return n.clearRect(0,0,1,1),n.fillStyle=e,n.fillRect(0,0,1,1),[].concat(o(n.getImageData(0,0,1,1).data)).slice(0,3)}function r(e){return i(e).reduce(function(e,t){return e+t},0)/3}Object.defineProperty(t,"__esModule",{value:!0}),t.colorToRGB=i,t.luminance=r},function(e,t,n){"use strict";function o(e,t){function n(e){var t=a+"-minimage-"+u+".png";this.href=i(r,o).toDataURL("image/png",.5),this.download=t,u++}var o=t.OrginalImage,r=t.canvas,a=t.originalFileName,u=0;e.addEventListener("click",n,!1)}function i(e,t){var n=e.getContext("2d"),o=n.globalCompositeOperation;return n.globalCompositeOperation="destination-over",n.drawImage(t,0,0,e.width,e.height),n.globalCompositeOperation=o,e}Object.defineProperty(t,"__esModule",{value:!0}),t.makeDownloadLink=o,t.mergeCanvasAndImage=i},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){function t(e){"eraser"==e?E():w(e)}b=e,L();var n=y("drawzone"),o=y("drawzoneWrapper");o.appendChild(e),y("inputForAFile").style.display="none",y("drawAndDownload").style.display="";var i=Math.max(window.innerHeight,window.innerWidth),r=Math.max(e.width/i,e.height/i,1);e.width=n.width=e.width/r,e.height=n.height=e.height/r,o.style.maxWidth=e.width,o.style.maxHeight=e.height;var u=(n.getContext("2d"),!1),d=y("topbar").classList,c=y("background"),s=(0,a.default)(y("pensizePreview"),{canvasForCursor:n,onColorChange:t,elementToContrastWith:c}),m=s.setColorDotSize,p=s.refreshColorPreviewBorder,h=(0,f.default)(n,{onMouseDown:function(){n.getClientRects()[0].height+140>window.innerHeight&&d.add("drawInProgress")},onMouseUp:function(){u||(u=!0,download.classList.add("usable")),d.remove("drawInProgress")},OrginalImage:b}),w=h.drawWithColor,E=h.drawWithEraser,k=h.setPencilSize;(0,l.default)(c,{onChange:p}),(0,g.default)(y("pensize"),{onChange:function(e){m(e),k(e)}}),(0,v.makeDownloadLink)(y("download"),{OrginalImage:b,originalFileName:C,canvas:n})}n(4);var r=n(5),a=o(r),u=n(7),d=o(u),c=n(9),l=o(c),s=n(10),f=o(s),v=n(1),m=n(11),g=o(m),p=n(12),h=o(p),w=n(13),y=document.getElementById.bind(document);(0,w.checkRunWithinWebview)();var C=void 0,b=void 0;(0,d.default)({fileinput:y("fileinput"),onImageCreated:function(e,t){C=t,i(e)}});var E=(0,h.default)(y("welcome")),L=E.stopAnim,k=E.bgColor;y("fileInputWrapper").style.color=k},function(e,t){},function(e,t,n){"use strict";function o(e,t){if("eraser"==e)return"transparent";var n=(0,c.luminance)(t),o=(0,c.luminance)(e);return n>125&&o>200?"black":n<125&&o<25?"white":"transparent"}function i(e){return(0,c.luminance)(e)>127.5?"rgba(0,0,0,0.8)":"rgba(255,255,255,0.8)"}function r(e,t){function n(e){o(),t(e)}function o(){r.classList.add("closing"),setTimeout(function(){return document.body.removeChild(r)},300)}var r=document.createElement("div");r.classList.add("modal"),document.body.appendChild(r),l.paletteColors.forEach(function(t){var o=document.createElement("button");o.classList.add("colorbutton"),t===e&&(o.classList.add("active"),o.innerHTML="Selected",o.style.color=i(t)),o.style.backgroundColor=t.toLowerCase(),o.addEventListener("click",function(){return n(t)}),r.appendChild(o)});var a=document.createElement("button");a.classList.add("eraser"),a.addEventListener("click",function(){return n("eraser")}),a.innerHTML='<img src="/images/eraser-color.svg"/><span class="imagelabel">'+("eraser"===e?"Eraser selected":"Eraser")+"</span>",r.appendChild(a)}function a(e,t,n){var o=t<4?4:t,i=document.createElement("canvas");i.width=i.height=o;var r=i.getContext("2d");"eraser"==n?d(r,o):u(r,o,n);var a=i.toDataURL("image/png");e.style.cursor="url("+a+") "+o/2+" "+o/2+",auto"}function u(e,t,n){e.beginPath(),e.arc(t/2,t/2,t/2,0,2*Math.PI,!1),e.fillStyle=n,e.fill()}function d(e,t){e.fillStyle="#da502d",e.fillRect(0,0,2*t/3,t),e.fillStyle="#6584a5",e.fillRect(2*t/3-1,0,t,t),e.globalCompositeOperation="destination-in",u(e,t,"white")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(){f.style.border="1px solid "+o(v,c.style.backgroundColor)}function i(e){v=e,a(l,m,v),"eraser"==e?(f.style.background="",f.classList.add("eraser")):(f.classList.remove("eraser"),f.style.background=e,localStorage.setItem("color",e),n()),d(e)}function u(e){m=e,a(l,m,v),f.style.transform="scale("+e/10+")"}var d=t.onColorChange,c=t.elementToContrastWith,l=t.canvasForCursor,f=e.children[0],v=void 0;e.addEventListener("click",function(){return r(v,i)});var m=void 0;return setTimeout(function(){return i(localStorage.getItem("color")||s)}),{setColorDotSize:u,refreshColorPreviewBorder:n}};var c=n(0),l=n(6),s="#2b76ce"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.paletteColors="#000000,#FFFFFF,#F44336,#E91E63,#9C27B0,#673AB7,#3F51B5,#2196F3,#03A9F4,#00BCD4,#009688,#4CAF50,#8BC34A,#CDDC39,#FFEB3B,#FFC107,#FF9800,#FF5722,#795548,#9E9E9E,#607D8B".split(",")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(e){(0,o.startTask)();var t=new FileReader;t.onload=function(){n(t.result),(0,o.endTask)()},t.onerror=o.endTask,t.readAsDataURL(e)}function n(e){if((0,o.startTask)(),d){var t=new Image;t.onload=function(){d=!1,r(t,u),(0,o.endTask)()},t.onerror=o.endTask,t.src=e}}function i(e){var o=Array.prototype.find.call(e,function(e){return"file"==e.kind&&e.type.match("image")});if(u="pasted-image",o)return void t(o.getAsFile());var i=Array.prototype.find.call(e,function(e){return"string"==e.kind});i&&i.getAsString(function(e){return n(e)})}var r=e.onImageCreated,a=e.fileinput,u="pasted-image",d=!0;!function(){function e(n){a.removeEventListener("change",e),u=a.value.split("\\").pop().split(".")[0]||"image",t(n.target.files[0])}a.addEventListener("change",e)}(),window.addEventListener("paste",function(e){i(e.clipboardData.items)}),document.body.addEventListener("dragover",function(e){e.preventDefault(),e.stopPropagation()}),document.body.addEventListener("drop",function(e){e.preventDefault(),e.stopPropagation(),i(e.dataTransfer.items)})};var o=n(8)},function(e,t,n){"use strict";function o(){a++,r()}function i(){a--,setTimeout(r)}function r(){spinners.classList[a?"remove":"add"]("hidden")}Object.defineProperty(t,"__esModule",{value:!0}),t.startTask=o,t.endTask=i,t.updateLook=r;var a=0;document.addEventListener("DOMContentLoaded",r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(){a++,localStorage.setItem("background",a),o()}function o(){var t=["#DDD","#333"],n=a%t.length;e.style.backgroundColor=t[n],i(n);var o=document.body.classList;t.forEach(function(e,t){return o.remove("background_n_"+t)}),o.add("background_n_"+n),r<8?(console.log(0==n?"jour !":"nuit !"),r++):console.log("Monsieur Jacquouille, je vous en prie, à la longue, ça devient casse-pied !")}var i=t.onChange,r=0,a=localStorage.getItem("background")||0;o(),e.addEventListener("click",n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(){m=e.getBoundingClientRect(),v=m.width/e.width,g&&p&&(p.lineWidth=g/v)}function i(e){return{x:(e.clientX-m.left)/v,y:(e.clientY-m.top)/v}}function r(){y||(y=!0,p.beginPath(),u())}function a(){y&&s(),y=!1}function u(){y&&(window.requestAnimationFrame(u),d())}function d(){p.moveTo(w.x,w.y),p.lineTo(h.x,h.y),p.stroke(),w=h}function c(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;e.addEventListener(t,function(e){e.preventDefault();var t=e.touches[0]||{},i=t.clientX,r=t.clientY,a=new MouseEvent(n,{clientX:i,clientY:r});o.dispatchEvent(a)},!1)}var l=t.onMouseDown,s=t.onMouseUp,f=t.OrginalImage,v=void 0,m=void 0,g=void 0;n(),window.addEventListener("resize",n);var p=e.getContext("2d");p.lineCap="round";var h={x:0,y:0},w=h;e.addEventListener("mousedown",function(t){if(3==t.which)return void(0,o.mergeCanvasAndImage)(e,f);h=w=i(t),r(),l()},!1),document.addEventListener("copy",function(t){t.preventDefault(),(0,o.mergeCanvasAndImage)(e,f),t.clipboardData.setData("text/html",'<img src="'+e.toDataURL()+'"/>')}),document.addEventListener("mouseup",a,!1),e.addEventListener("mousemove",function(e){h=i(e)},!1);var y=!1;return c("touchstart","mousedown"),c("touchend","mouseup",document),c("touchmove","mousemove"),{drawWithEraser:function(){p.globalCompositeOperation="destination-out"},drawWithColor:function(e){p.globalCompositeOperation="source-over",p.strokeStyle=e},setPencilSize:function(e){g=e,p.lineWidth=e/v}}};var o=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(t){e.value=t,localStorage.setItem("pensize",t),o(t)}var o=t.onChange;e.addEventListener("input",function(e){return n(e.target.value)}),n(parseInt(localStorage.getItem("pensize"))||DEFAULTSIZE)}},function(e,t,n){"use strict";function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.filter(function(e){return e!=t});return n[Math.floor(Math.random()*(n.length+.99))]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(){s=e.width=window.innerWidth,f=e.height=window.innerHeight,l=e.getContext("2d"),l.fillStyle=v,l.fillRect(0,0,s,f),l.lineCap="round",n()}function n(){m={x:s/2,y:f/2},g={x:10*Math.random()-5,y:10*Math.random()-5},p={x:10*Math.random()-5,y:10*Math.random()-5},l.strokeStyle=o(r,v),l.lineWidth=20+40*Math.random(),l.beginPath(),l.moveTo(m.x,m.y)}function i(){p={x:2*Math.random()-1,y:2*Math.random()-1},h=setTimeout(i,100+200*Math.random())}function u(){l.moveTo(m.x,m.y),g.x*=.95,g.y*=.95,g.x+=p.x,g.y+=p.y,m.x+=g.x,m.y+=g.y,l.lineTo(m.x,m.y),l.stroke(),(m.x<-50||m.x>s+50||m.y<-50||m.y>f+50)&&n()}function d(){w&&(window.requestAnimationFrame(d),u())}function c(){w=!1,clearTimeout(h),window.removeEventListener("resize",t)}var l=void 0,s=void 0,f=void 0,v=o(a),m=void 0,g=void 0,p=void 0,h=void 0;t(),window.addEventListener("resize",t),i();var w=!0;return d(),{stopAnim:c,bgColor:v}};var i=n(0),r="#F44336,#E91E63,#9C27B0,#673AB7,#3F51B5,#2196F3,#03A9F4,#00BCD4,#009688,#4CAF50,#8BC34A,#CDDC39,#FFEB3B,#FFC107,#FF9800,#FF5722".split(","),a=r.filter(function(e){return(0,i.luminance)(e)<150})},function(e,t,n){"use strict";function o(){if(navigator.userAgent.match(/Android/i)){var e=document.createElement("script");e.src="https://iswebview.herokuapp.com/?callback=JSONPcallback",document.body.appendChild(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.checkRunWithinWebview=o,window.JSONPcallback=function(e){e.isWebView&&(document.body.classList.add("runningWithinWebview"),document.body.innerHTML='\n      Please open minimage.tk with chrome,\n       it cannot work within another app.\n\n        There may be an option in the menu above the page,\n         something like "Open in Chrome".\n\n         ')}}]);
//# sourceMappingURL=bundle.js.map