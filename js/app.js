// Em plugins, baixamos o ng-Sanitize e o Editor de Wysiwyg

// sanitize
/*
 AngularJS v1.6.2
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,g){'use strict';function H(g){var l=[];t(l,A).chars(g);return l.join("")}var B=g.$$minErr("$sanitize"),C,l,D,E,q,A,F,t;g.module("ngSanitize",[]).provider("$sanitize",function(){function k(a,e){var b={},c=a.split(","),h;for(h=0;h<c.length;h++)b[e?q(c[h]):c[h]]=!0;return b}function I(a){for(var e={},b=0,c=a.length;b<c;b++){var h=a[b];e[h.name]=h.value}return e}function G(a){return a.replace(/&/g,"&amp;").replace(J,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(K,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function x(a){for(;a;){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,b=0,c=e.length;b<c;b++){var h=e[b],d=h.name.toLowerCase();if("xmlns:ns1"===d||0===d.lastIndexOf("ns1:",0))a.removeAttributeNode(h),b--,c--}(e=a.firstChild)&&x(e);a=a.nextSibling}}var u=!1;this.$get=["$$sanitizeUri",function(a){u&&l(v,w);return function(e){var b=[];F(e,t(b,function(b,h){return!/^unsafe:/.test(a(b,
h))}));return b.join("")}}];this.enableSvg=function(a){return E(a)?(u=a,this):u};C=g.bind;l=g.extend;D=g.forEach;E=g.isDefined;q=g.lowercase;A=g.noop;F=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);f.innerHTML=a;var b=5;do{if(0===b)throw B("uinput");b--;s.document.documentMode&&x(f);a=f.innerHTML;f.innerHTML=a}while(a!==f.innerHTML);for(b=f.firstChild;b;){switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),I(b.attributes));break;case 3:e.chars(b.textContent)}var c;if(!(c=
b.firstChild)&&(1===b.nodeType&&e.end(b.nodeName.toLowerCase()),c=b.nextSibling,!c))for(;null==c;){b=b.parentNode;if(b===f)break;c=b.nextSibling;1===b.nodeType&&e.end(b.nodeName.toLowerCase())}b=c}for(;b=f.firstChild;)f.removeChild(b)};t=function(a,e){var b=!1,c=C(a,a.push);return{start:function(a,d){a=q(a);!b&&z[a]&&(b=a);b||!0!==v[a]||(c("<"),c(a),D(d,function(b,d){var f=q(d),g="img"===a&&"src"===f||"background"===f;!0!==m[f]||!0===n[f]&&!e(b,g)||(c(" "),c(d),c('="'),c(G(b)),c('"'))}),c(">"))},
end:function(a){a=q(a);b||!0!==v[a]||!0===y[a]||(c("</"),c(a),c(">"));a==b&&(b=!1)},chars:function(a){b||c(G(a))}}};var J=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,K=/([^#-~ |!])/g,y=k("area,br,col,hr,img,wbr"),d=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),r=k("rp,rt"),p=l({},r,d),d=l({},d,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),r=l({},r,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
w=k("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),z=k("script,style"),v=l({},y,d,r,p),n=k("background,cite,href,longdesc,src,xlink:href"),p=k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
r=k("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),m=l({},n,r,p),f;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw B("noinert");var e=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===e.length?f=e[0]:(e=a.createElement("html"),f=a.createElement("body"),e.appendChild(f),a.appendChild(e))})(s)});g.module("ngSanitize").filter("linky",["$sanitize",function(k){var l=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
q=/^mailto:/i,x=g.$$minErr("linky"),u=g.isDefined,s=g.isFunction,t=g.isObject,y=g.isString;return function(d,g,p){function w(a){a&&m.push(H(a))}function z(a,b){var c,d=v(a);m.push("<a ");for(c in d)m.push(c+'="'+d[c]+'" ');!u(g)||"target"in d||m.push('target="',g,'" ');m.push('href="',a.replace(/"/g,"&quot;"),'">');w(b);m.push("</a>")}if(null==d||""===d)return d;if(!y(d))throw x("notstring",d);for(var v=s(p)?p:t(p)?function(){return p}:function(){return{}},n=d,m=[],f,a;d=n.match(l);)f=d[0],d[2]||
d[4]||(f=(d[3]?"http://":"mailto:")+f),a=d.index,w(n.substr(0,a)),z(f,d[0].replace(q,"")),n=n.substring(a+d[0].length);w(n);return k(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

// editor de html
!function(e,t){"object"==typeof exports?module.exports=t(require("angular")):"function"==typeof define&&define.amd?define(["angular"],t):t(e.angular)}(this,function(e){"use strict";e.module("ngWYSIWYG",["ngSanitize"]),e.module("ngWYSIWYG").config(["$provide",function(e){e.decorator("$sanitize",["$delegate","$log",function(e,t){return function(t,n){var o=e(t,n);return o}}])}]),e.module("ngWYSIWYG").constant("NGP_EVENTS",{ELEMENT_CLICKED:"ngp-element-clicked",CLICK_AWAY:"ngp-click-away"}),e.module("ngWYSIWYG").directive("ngpColorsGrid",["NGP_EVENTS",function(e){var t=function(t,n){t.$on(e.CLICK_AWAY,function(){t.$apply(function(){t.show=!1})}),n.parent().bind("click",function(e){e.stopPropagation()}),t.colors=["#000000","#993300","#333300","#003300","#003366","#000080","#333399","#333333","#800000","#FF6600","#808000","#008000","#008080","#0000FF","#666699","#808080","#FF0000","#FF9900","#99CC00","#339966","#33CCCC","#3366FF","#800080","#999999","#FF00FF","#FFCC00","#FFFF00","#00FF00","#00FFFF","#00CCFF","#993366","#C0C0C0","#FF99CC","#FFCC99","#FFFF99","#CCFFCC","#CCFFFF","#99CCFF","#CC99FF","#FFFFFF"],t.pick=function(e){t.onPick({color:e})},n.ready(function(){function e(t){1==t.nodeType&&(t.setAttribute("unselectable","on"),t.unselectable="on");for(var n=t.firstChild;n;)e(n),n=n.nextSibling}for(var t=0;t<document.getElementsByClassName("ngp-colors-grid").length;t+=1)e(document.getElementsByClassName("ngp-colors-grid")[t])})};return{link:t,scope:{show:"=",onPick:"&"},restrict:"AE",template:'<ul ng-show="show" class="ngp-colors-grid"><li ng-style="{\'background-color\': color}" title: "{{color}}" ng-repeat="color in colors" unselectable="on" ng-click="pick(color)"></li></ul>'}}]),e.module("ngWYSIWYG").directive("ngpSymbolsGrid",["NGP_EVENTS",function(e){var t=function(t,n){t.$on(e.CLICK_AWAY,function(){t.$apply(function(){t.show=!1})}),n.parent().bind("click",function(e){e.stopPropagation()}),t.symbols=["&iexcl;","&iquest;","&ndash;","&mdash;","&raquo;","&laquo;","&copy;","&divide;","&micro;","&para;","&plusmn;","&cent;","&euro;","&pound;","&reg;","&sect;","&trade;","&yen;","&deg;","&forall;","&part;","&exist;","&empty;","&nabla;","&isin;","&notin;","&ni;","&prod;","&sum;","&uarr;","&rarr;","&darr;","&spades;","&clubs;","&hearts;","&diams;","&aacute;","&agrave;","&acirc;","&aring;","&atilde;","&auml;","&aelig;","&ccedil;","&eacute;","&egrave;","&ecirc;","&euml;","&iacute;","&igrave;","&icirc;","&iuml;","&ntilde;","&oacute;","&ograve;","&ocirc;","&oslash;","&otilde;","&ouml;","&szlig;","&uacute;","&ugrave;","&ucirc;","&uuml;","&yuml;"],t.pick=function(e){t.onPick({symbol:e})},n.ready(function(){function e(t){1==t.nodeType&&(t.setAttribute("unselectable","on"),t.unselectable="on");for(var n=t.firstChild;n;)e(n),n=n.nextSibling}for(var t=0;t<document.getElementsByClassName("ngp-symbols-grid").length;t+=1)e(document.getElementsByClassName("ngp-symbols-grid")[t])})};return{link:t,scope:{show:"=",onPick:"&"},restrict:"AE",template:'<ul ng-show="show" class="ngp-symbols-grid"><li ng-repeat="symbol in symbols" unselectable="on" ng-click="pick(symbol)" ng-bind-html="symbol"></li></ul>'}}]),e.module("ngWYSIWYG").service("ngpImageResizer",["NGP_EVENTS",function(e){function t(e){e.preventDefault()}function n(e){e.preventDefault(),e.stopPropagation(),v.style.height="",v.style.width="",l()}function o(e){e.preventDefault(),e.stopPropagation(),v.style.width="100%",v.style.height="",l()}function i(e){return e.target!=y?(c.removeEventListener("mousemove",r),void(h=!1)):(e.stopPropagation(),e.preventDefault(),c.addEventListener("mousemove",r),void(h=!0))}function r(e){e.stopPropagation(),e.preventDefault();var t=e.pageY,n=t-(v.getBoundingClientRect().top+d.pageYOffset);v.style.height=n+"px",v.style.width="",g&&e.clientY>g&&d.innerHeight-e.clientY<=45&&d.scrollTo(0,d.innerHeight),g=e.clientY,l()}function a(e,t){return t==p||h?void c.removeEventListener("mousemove",r):"IMG"!==t.tagName?s():(p.parentNode||u.appendChild(p),v=t,void l())}function l(){var e=d.getComputedStyle(v);p.style.height=e.getPropertyValue("height"),p.style.width=e.getPropertyValue("width"),p.style.top=v.getBoundingClientRect().top+d.pageYOffset+"px",p.style.left=v.getBoundingClientRect().left+d.pageXOffset+"px",p.style.display="block"}function s(e){p.parentNode&&(e&&"IMG"===e.target.tagName||(p.style.display="none",g=null))}var c,d,u,p,g,m,y,f,h,v,b=this;b.setup=function(r,l){d=l.defaultView,c=l,u=c.querySelector("body"),m=r,p=c.createElement("div"),p.className="ngp-image-resizer",p.style.position="absolute",p.style.border="1px dashed black",p.style.display="none",p.setAttribute("contenteditable",!1),y=c.createElement("div"),y.style.position="absolute",y.style.height="10px",y.style.width="10px",y.style.bottom="-5px",y.style.right="-5px",y.style.border="1px solid black",y.style.backgroundColor="#fff",y.style.cursor="se-resize",y.setAttribute("contenteditable",!1),p.appendChild(y),f=c.createElement("div"),f.style.position="absolute",f.style.height="30px",f.style.width="150px",f.style.bottom="-30px",f.style.left="0",p.appendChild(f);var g=c.createElement("button");g.addEventListener("click",n),g.innerHTML="Auto",f.appendChild(g);var h=c.createElement("button");h.addEventListener("click",o),h.innerHTML="100%",f.appendChild(h),c.addEventListener("mousedown",i),c.addEventListener("mouseup",i),d.parent.document.addEventListener("mouseup",i),u.addEventListener("mscontrolselect",t),m.$on(e.ELEMENT_CLICKED,a),m.$on(e.CLICK_AWAY,s)}}]);var t='<div class="tinyeditor"><div class="tinyeditor-header" ng-hide="editMode">{toolbar}<div style="clear: both;"></div></div><div class="sizer" ngp-resizable><textarea data-placeholder-attr="" style="-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; resize: none; width: 100%; height: 100%;" ng-show="editMode" ng-model="content"></textarea><iframe style="-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; width: 100%; height: 100%;" ng-hide="editMode" ngp-content-frame="{sanitize: config.sanitize}" content-style="{contentStyle}" ng-model="content"></iframe></div><div class="tinyeditor-footer"><div ng-switch="editMode" ng-click="editMode = !editMode" class="toggle"><span ng-switch-when="true">wysiwyg</span><span ng-switch-default>source</span></div></div></div>';return e.module("ngWYSIWYG").directive("wysiwygEdit",["ngpUtils","NGP_EVENTS","$rootScope","$compile","$timeout","$q",function(n,o,i,r,a,l){var s=function(a,s,c,d){function u(){null==m&&(m=document.querySelector("wysiwyg-edit").querySelector("iframe"),y=m.contentDocument,f=y.defaultView)}function p(e){a.$broadcast("insertElement",e)}function g(e){var t="<"+e.type;if(t+=' class="'+e["class"],h&&(t+=" tinyeditor-control-fa"),t+='" ',"div"==e.type){if(e.title&&(t+='title="'+e.title+'" '),e.backgroundPos&&!h&&(t+='style="background-position: '+e.backgroundPos+'; position: relative;" '),e.pressed&&(t+="ng-class=\"{'pressed': cursorStyle."+e.pressed+'}" '),e.command){var n="'"+e.command+"'";e.commandParameter&&(n+=", '"+e.commandParameter+"'"),t+='ng-click="execCommand('+n+')" '}else e.specialCommand&&(t+='ng-click="'+e.specialCommand+'" ');t+=">",e.faIcon&&h&&"-"!=e.faIcon&&(t+='<i class="fa fa-'+e.faIcon+'"></i>'),e.faIcon&&h&&"-"==e.faIcon&&(t+='<div class="hr"></div>'),e.inner&&(t+=e.inner)}else"select"==e.type&&(t+='ng-model="'+e.model+'" ',t+='ng-options="'+e.options+'" ',t+='ng-change="'+e.change+'" ',t+='<option value="">'+e.title+"</option>");return t+="</"+e.type+">"}a.editMode=!1,a.cursorStyle={},document.addEventListener("click",function(){i.$broadcast(o.CLICK_AWAY)});var m=null,y=null,f=null;a.panelButtons={"-":{type:"div","class":"tinyeditor-divider"},bold:{type:"div",title:"Bold","class":"tinyeditor-control",faIcon:"bold",backgroundPos:"34px -120px",pressed:"bold",command:"bold"},italic:{type:"div",title:"Italic","class":"tinyeditor-control",faIcon:"italic",backgroundPos:"34px -150px",pressed:"italic",command:"italic"},underline:{type:"div",title:"Underline","class":"tinyeditor-control",faIcon:"underline",backgroundPos:"34px -180px",pressed:"underline",command:"underline"},strikethrough:{type:"div",title:"Strikethrough","class":"tinyeditor-control",faIcon:"strikethrough",backgroundPos:"34px -210px",pressed:"strikethrough",command:"strikethrough"},subscript:{type:"div",title:"Subscript","class":"tinyeditor-control",faIcon:"subscript",backgroundPos:"34px -240px",pressed:"sub",command:"subscript"},superscript:{type:"div",title:"Superscript","class":"tinyeditor-control",faIcon:"superscript",backgroundPos:"34px -270px",pressed:"super",command:"superscript"},leftAlign:{type:"div",title:"Left Align","class":"tinyeditor-control",faIcon:"align-left",backgroundPos:"34px -420px",pressed:"alignmet == 'left'",command:"justifyleft"},centerAlign:{type:"div",title:"Center Align","class":"tinyeditor-control",faIcon:"align-center",backgroundPos:"34px -450px",pressed:"alignment == 'center'",command:"justifycenter"},rightAlign:{type:"div",title:"Right Align","class":"tinyeditor-control",faIcon:"align-right",backgroundPos:"34px -480px",pressed:"alignment == 'right'",command:"justifyright"},blockJustify:{type:"div",title:"Block Justify","class":"tinyeditor-control",faIcon:"align-justify",backgroundPos:"34px -510px",pressed:"alignment == 'justify'",command:"justifyfull"},orderedList:{type:"div",title:"Insert Ordered List","class":"tinyeditor-control",faIcon:"list-ol",backgroundPos:"34px -300px",command:"insertorderedlist"},unorderedList:{type:"div",title:"Insert Unordered List","class":"tinyeditor-control",faIcon:"list-ul",backgroundPos:"34px -330px",command:"insertunorderedlist"},outdent:{type:"div",title:"Outdent","class":"tinyeditor-control",faIcon:"outdent",backgroundPos:"34px -360px",command:"outdent"},indent:{type:"div",title:"Indent","class":"tinyeditor-control",faIcon:"indent",backgroundPos:"34px -390px",command:"indent"},removeFormatting:{type:"div",title:"Remove Formatting","class":"tinyeditor-control",faIcon:"eraser",backgroundPos:"34px -720px",command:"removeformat"},undo:{type:"div",title:"Undo","class":"tinyeditor-control",faIcon:"undo",backgroundPos:"34px -540px",command:"undo"},redo:{type:"div",title:"Redo","class":"tinyeditor-control",faIcon:"repeat",backgroundPos:"34px -570px",command:"redo"},fontColor:{type:"div",title:"Font Color","class":"tinyeditor-control",faIcon:"font",backgroundPos:"34px -779px",specialCommand:"showFontColors = !showFontColors",inner:'<ngp-colors-grid show="showFontColors" on-pick="setFontColor(color)"><ngp-colors-grid>'},backgroundColor:{type:"div",title:"Background Color","class":"tinyeditor-control",faIcon:"paint-brush",backgroundPos:"34px -808px",specialCommand:"showBgColors = !showBgColors",inner:'<ngp-colors-grid show="showBgColors" on-pick="setBgColor(color)"><ngp-colors-grid>'},image:{type:"div",title:"Insert Image","class":"tinyeditor-control",faIcon:"picture-o",backgroundPos:"34px -600px",specialCommand:"insertImage()"},hr:{type:"div",title:"Insert Horizontal Rule","class":"tinyeditor-control",faIcon:"-",backgroundPos:"34px -630px",command:"inserthorizontalrule"},symbols:{type:"div",title:"Insert Special Symbol","class":"tinyeditor-control",faIcon:"cny",backgroundPos:"34px -838px",specialCommand:"showSpecChars = !showSpecChars",inner:'<ngp-symbols-grid show="showSpecChars" on-pick="insertSpecChar(symbol)"><ngp-symbols-grid>'},link:{type:"div",title:"Insert Hyperlink","class":"tinyeditor-control",faIcon:"link",backgroundPos:"34px -660px",specialCommand:"insertLink()"},unlink:{type:"div",title:"Remove Hyperlink","class":"tinyeditor-control",faIcon:"chain-broken",backgroundPos:"34px -690px",command:"unlink"},print:{type:"div",title:"Print","class":"tinyeditor-control",faIcon:"print",backgroundPos:"34px -750px",command:"print"},font:{type:"select",title:"Font","class":"tinyeditor-font",model:"font",options:"a as a for a in fonts",change:"fontChange()"},size:{type:"select",title:"Size","class":"tinyeditor-size",model:"fontsize",options:"a.key as a.name for a in fontsizes",change:"sizeChange()"},format:{type:"select",title:"Style","class":"tinyeditor-size",model:"textstyle",options:"s.key as s.name for s in styles",change:"styleChange()"}};var h=a.config&&a.config.fontAwesome;a.toolbar=a.config&&a.config.toolbar?a.config.toolbar:[{name:"basicStyling",items:["bold","italic","underline","strikethrough","subscript","superscript","leftAlign","centerAlign","rightAlign","blockJustify","-"]},{name:"paragraph",items:["orderedList","unorderedList","outdent","indent","-"]},{name:"doers",items:["removeFormatting","undo","redo","-"]},{name:"colors",items:["fontColor","backgroundColor","-"]},{name:"links",items:["image","hr","symbols","link","unlink","-"]},{name:"tools",items:["print","-"]},{name:"styling",items:["font","size","format"]}];var v=[];e.forEach(a.toolbar,function(t,n){var o=[];e.forEach(t.items,function(e,t){var n=a.panelButtons[e];n||(n=a.config.buttons[e]),this.push(g(n))},o),this.push('<div class="tinyeditor-buttons-group">'+o.join("")+"</div>")},v);var b=t.replace("{toolbar}",v.join(""));b=b.replace("{contentStyle}",c.contentStyle||""),s.html(b),r(s.contents())(a),a.execCommand=function(e,t){switch(e){case"bold":a.cursorStyle.bold=!a.cursorStyle.bold;break;case"italic":a.cursorStyle.italic=!a.cursorStyle.italic;break;case"underline":a.cursorStyle.underline=!a.cursorStyle.underline;break;case"strikethrough":a.cursorStyle.strikethrough=!a.cursorStyle.strikethrough;break;case"subscript":a.cursorStyle.sub=!a.cursorStyle.sub;break;case"superscript":a.cursorStyle["super"]=!a.cursorStyle["super"];break;case"justifyleft":a.cursorStyle.alignment="left";break;case"justifycenter":a.cursorStyle.alignment="center";break;case"justifyright":a.cursorStyle.alignment="right";break;case"justifyfull":a.cursorStyle.alignment="justify"}a.$broadcast("execCommand",{command:e,arg:t})},a.fonts=["Verdana","Arial","Arial Black","Arial Narrow","Courier New","Century Gothic","Comic Sans MS","Georgia","Impact","Tahoma","Times","Times New Roman","Webdings","Trebuchet MS"],a.fontChange=function(){a.execCommand("fontname",a.font)},a.fontsizes=[{key:1,name:"x-small"},{key:2,name:"small"},{key:3,name:"normal"},{key:4,name:"large"},{key:5,name:"x-large"},{key:6,name:"xx-large"},{key:7,name:"xxx-large"}],a.mapFontSize={10:1,13:2,16:3,18:4,24:5,32:6,48:7},a.sizeChange=function(){a.execCommand("fontsize",a.fontsize)},a.styles=[{name:"Paragraph",key:"<p>"},{name:"Header 1",key:"<h1>"},{name:"Header 2",key:"<h2>"},{name:"Header 3",key:"<h3>"},{name:"Header 4",key:"<h4>"},{name:"Header 5",key:"<h5>"},{name:"Header 6",key:"<h6>"}],a.styleChange=function(){a.execCommand("formatblock",a.textstyle)},a.showFontColors=!1,a.setFontColor=function(e){a.execCommand("foreColor",e)},a.showBgColors=!1,a.setBgColor=function(e){a.execCommand("hiliteColor",e)},a.showSpecChars=!1,a.insertSpecChar=function(e){p(e)},a.insertLink=function(){if(u(),null!=f.getSelection().focusNode){var t=n.getSelectionBoundaryElement(f,!0),o="http://";if(t&&"A"==t.nodeName){o=t.href;var i=y.createRange();i.setStart(t.firstChild,0),i.setEnd(t.firstChild,t.firstChild.length);var r=f.getSelection();r.removeAllRanges(),r.addRange(i)}var s;s=a.api&&a.api.insertLink&&e.isFunction(a.api.insertLink)?a.api.insertLink.apply(a.api.scope||null,[o]):prompt("Please enter the URL","http://"),l.when(s).then(function(e){a.execCommand("createlink",e)})}},a.insertImage=function(){var t;a.api&&a.api.insertImage&&e.isFunction(a.api.insertImage)?t=a.api.insertImage.apply(a.api.scope||null):(t=prompt("Please enter the picture URL","http://"),t='<img src="'+t+'">'),l.when(t).then(function(e){p(e)})},s.ready(function(){function e(t){1==t.nodeType&&(t.setAttribute("unselectable","on"),t.unselectable="on");for(var n=t.firstChild;n;)e(n),n=n.nextSibling}for(var t=0;t<document.getElementsByClassName("tinyeditor-header").length;t+=1)e(document.getElementsByClassName("tinyeditor-header")[t])}),a.$on("cursor-position",function(e,t){a.cursorStyle=t,a.font=t.font.replace(/(')/g,""),a.fontsize=a.mapFontSize[t.size]?a.mapFontSize[t.size]:0})};return{link:s,scope:{content:"=",api:"=",config:"="},restrict:"AE",replace:!0}}]),e.module("ngWYSIWYG").directive("ngpContentFrame",["ngpImageResizer","ngpUtils","NGP_EVENTS","$compile","$timeout","$sanitize",function(t,n,o,i,r,a){var l=function(i,l,s,c){var d=l[0].contentDocument;d.open(),d.write('<!DOCTYPE html><html><head></head><body contenteditable="true"></body></html>'),d.close(),d.designMode="On",t.setup(i,d);var u=e.element(l[0].contentDocument.body),p=e.element(l[0].contentDocument.head);u.attr("contenteditable","true"),d.addEventListener("click",function(e){"HTML"===e.target.tagName&&e.target.querySelector("body").focus(),i.$emit(o.ELEMENT_CLICKED,e.target)}),s.contentStyle&&p.append('<link rel="stylesheet" type="text/css" href="'+s.contentStyle+'">'),c.$render=function(){u[0].innerHTML=c.$viewValue?i.config&&i.config.sanitize?a(c.$viewValue):c.$viewValue:""},i.sync=function(){i.$evalAsync(function(e){c.$setViewValue(u.html())})};var g=null;u.bind("click keyup change paste",function(){g&&r.cancel(g),g=r(function(){var e=u[0].ownerDocument,t=e.querySelector(".ngp-image-resizer"),o=u[0].innerHTML;t&&(o=o.replace(t.outerHTML,"")),c.$setViewValue(o);var r=n.getSelectionBoundaryElement(l[0].contentWindow,!0);if(r){var a=l[0].contentWindow.getComputedStyle(r),s={bold:"bold"==a.getPropertyValue("font-weight")||parseInt(a.getPropertyValue("font-weight"))>=700,italic:"italic"==a.getPropertyValue("font-style"),underline:"underline"==a.getPropertyValue("text-decoration"),strikethrough:"line-through"==a.getPropertyValue("text-decoration"),font:a.getPropertyValue("font-family"),size:parseInt(a.getPropertyValue("font-size")),color:a.getPropertyValue("color"),sub:"sub"==a.getPropertyValue("vertical-align"),"super":"super"==a.getPropertyValue("vertical-align"),background:a.getPropertyValue("background-color"),alignment:a.getPropertyValue("text-align")};i.$emit("cursor-position",s)}},100,!0)}),i.range=null,i.getSelection=function(){if(d.getSelection){var e=d.getSelection();e.getRangeAt&&e.rangeCount&&(i.range=e.getRangeAt(0))}},i.restoreSelection=function(){if(i.range&&d.getSelection){var e=d.getSelection();e.removeAllRanges(),e.addRange(i.range)}},i.$on("execCommand",function(e,t){console.log("execCommand: "),console.log(t),l[0].contentDocument.body.focus();var n=d.selection;if(n){var o=n.createRange();d.execCommand(t.command,0,t.arg),o.collapse(!1),o.select()}else d.execCommand(t.command,0,t.arg);d.body.focus(),i.sync()}),i.$on("insertElement",function(e,t){var n,o;if(d.defaultView.getSelection){if(n=d.defaultView.getSelection(),n.getRangeAt&&n.rangeCount){o=n.getRangeAt(0),o.deleteContents();var r=d.createElement("div");r.innerHTML=t;for(var a,l,s=d.createDocumentFragment();a=r.firstChild;)l=s.appendChild(a);s.firstChild;o.insertNode(s),l&&(o=o.cloneRange(),o.setStartAfter(l),o.collapse(!0),n.removeAllRanges(),n.addRange(o))}}else d.selection&&"Control"!=d.selection.type&&d.selection.createRange().pasteHTML(t);i.sync()}),i.$on("$destroy",function(){});try{d.execCommand("styleWithCSS",0,0),d.execCommand("enableObjectResizing",!1,"false"),d.execCommand("contentReadOnly",0,"false")}catch(m){try{d.execCommand("useCSS",0,1)}catch(m){}}};return{link:l,require:"ngModel",scope:{config:"=ngpContentFrame"},replace:!0,restrict:"AE"}}]),e.module("ngWYSIWYG").directive("ngpResizable",["$document",function(e){return function(t,n){var o=e[0],i=n[0],r=o.createElement("span");r.className="resizer",i.appendChild(r),r.addEventListener("mousedown",function(){function e(e){e.preventDefault();var t=e.pageY;e.view!=o.defaultView&&(t=e.pageY+e.view.frameElement.getBoundingClientRect().top+o.defaultView.pageYOffset);var n=t-(i.getBoundingClientRect().top+o.defaultView.pageYOffset),r=i.style.height.replace("px","");r&&n>r&&window.innerHeight-e.clientY<=45&&o.defaultView.scrollBy(0,n-r),i.style.height=n+"px"}function t(){o.removeEventListener("mousemove",e),o.removeEventListener("mouseup",t);for(var n=o.querySelectorAll("iframe"),i=0;i<n.length;i++)n[i].contentWindow.document.removeEventListener("mouseup",t),n[i].contentWindow.document.removeEventListener("mousemove",e)}o.addEventListener("mousemove",e),o.addEventListener("mouseup",t);for(var n=o.querySelectorAll("iframe"),r=0;r<n.length;r++)n[r].contentWindow.document.addEventListener("mouseup",t),n[r].contentWindow.document.addEventListener("mousemove",e)})}}]),e.module("ngWYSIWYG").service("ngpUtils",[function(){var e=this;e.getSelectionBoundaryElement=function(e,t){var n,o,i=null,r=e.document;return r.selection?(n=r.selection.createRange(),n.collapse(t),n.parentElement()):(r.getSelection?(o=r.getSelection(),o.rangeCount>0&&(n=o.getRangeAt(0),i=n[t?"startContainer":"endContainer"],3===i.nodeType&&(i=i.parentNode))):e.getSelection&&(o=e.getSelection(),o.rangeCount>0&&(n=o.getRangeAt(0),i=n[t?"startContainer":"endContainer"],3===i.nodeType&&(i=i.parentNode))),i)}}]),"ngWYSIWYG"});
var app = angular.module('app', ['ngWYSIWYG']);
app.controller('appCtrl', ['$scope', '$timeout', '$http', '$location', function($scope, $timeout, $http, $location){

	// todas as variáveis que utilizamos neste projeto

	// em dashboard, utilizamos a variavel dados para printar os dados na tela.
	$scope.dados = [];


	// send fica responsável pelo processamento de requisições dentro do dashboard
	$scope.send = {};
	$scope.send.page = 0; // página atual
	$scope.send.model = ''; // qual model ele irá buscar. neste caso, é tickets
	$scope.send.pages = 0; // quantidade de páginas no total
	$scope.send.total = 0; // total de registros salvos no banco
	$scope.send.text = ""; // todas as consultas vão mandar o texto de busca
	$scope.send.loading = true;

	// form fica responsável pelo processamento das requisições de POST em new e na respostas dos tickets
	$scope.form = {};
	$scope.form.title = "";
	$scope.form.submit = "";
	$scope.form.open = false;
	$scope.form.id = 0;
	$scope.form.data = {};
	$scope.form.status = 0;
	$scope.form.loading = false;
	$scope.form.success = false;

	// mesmo enviando apenas 1 arquivo por vez, criamos um array vazio para o salvamento dos arquivos.
	$scope.files = [];

	// ordenamento do site. Ele inicia pela chave ID.
	$scope.order = 'id';
	$scope.reverse = true;

	// a variavel using filter entra em ação a partir do momento que o usuário processa a filtragem. A filtragem é realizada por ajax.
	$scope.usingfilter = false;

	// a variavel error executa apenas no login, retornando os erros de acesso
	$scope.error = [];

	// filtragem dos resultados
	$scope.filtersubmit = function($event){
		$event.preventDefault();
		if(!($scope.send.category) && !($scope.send.product)){
			var url = 'model/'+$scope.send.model+'/get';
			$scope.usingfilter = false;
		}else{

			var url = 'model/'+$scope.send.model+'/filter';
			$scope.usingfilter = true;
		}
		$scope.processfilter(url);
	};

	// limpando a consulta
	$scope.filterclear = function(){
		$scope.send.category = "";
		$scope.send.product = "";
		var url = 'model/'+$scope.send.model+'/get';
		$scope.usingfilter = false;
		$scope.processfilter(url);
	};

	// executando a função de filtragem
	$scope.processfilter = function(url, push){
		$scope.send.page = 0;
		$http.post(url, $scope.send).then(function success(response){
			$scope.send.loading = false;
			if(push){
				// $scope.dados.push(response.data.data);
				var size = response.data.data.length;
				for (var i = 0; i < size; i++) {
					$scope.dados.push(response.data.data[i]);
				}
			}else{
				$scope.dados = response.data.data;
			}
			$scope.send.pages = response.data.pages;
			$scope.send.total = response.data.total;
		});
	}

	// executando a paginação de resultados
	$scope.page = function(model){
		$scope.send.page = $scope.send.page + 1;
		if($scope.usingfilter){
			$scope.processfilter('model/'+$scope.send.model+'/filter', true);
		}else{
			$scope.getdados($scope.send.page);
		}
	};

	// executando o login
	
	$scope.loginsubmit = function($event){
		$event.preventDefault();
		$http.post('model/login', $scope.form).then(function success(response){
			if(parseInt(response.data.data.status, 10) === 0){
				window.location.href = "dashboard";
			}else{
				$scope.error.title = response.data.data.title;
				$scope.error.text = response.data.data.text;
				$scope.error.class = true;
			}	
		});
	};

	// aplicando o editor ngWysiwyg
	$scope.editorConfig = {
		sanitize: false,
		toolbar: [
			{ name: 'basicStyling', items: ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '-', 'leftAlign', 'centerAlign', 'rightAlign', 'blockJustify', '-'] },
			{ name: 'paragraph', items: ['orderedList', 'unorderedList', 'outdent', 'indent', '-'] },
			{ name: 'doers', items: ['removeFormatting', 'undo', 'redo', '-'] },
			{ name: 'links', items: ['link', 'unlink']}
		]
	};

	// limpa o input de arquivo após o download
	$scope.resetfile = function(){
		if(document.getElementById('file')){
			document.getElementById('file').value = "";
		}
	};

	// realiza a busca dos dados no banco
	$scope.getdados = function(page, refresh){
		$scope.send.loading = true;
		$scope.send.page = page;
		$http.post('model/'+$scope.send.model+'/get', $scope.send).then(function success(response){
			if(response.data.total > 0){
				$timeout(function(){
					if(refresh){
						$scope.dados = response.data.data;
					}else{
						var qtd = response.data.data.length;
						for (var i = 0; i < qtd; i++) {
							$scope.dados.push(response.data.data[i]);
						}
					}
					
					$scope.send.pages = response.data.pages;
					$scope.send.total = response.data.total;
					$scope.send.loading = false;
				}, 500);
			}else{
				$scope.send.pages = response.data.pages;
				$scope.send.total = response.data.total;
				$scope.send.loading = false;
			}
		});
	};

	// salvar os formulários no banco
	$scope.save = function($event){
		$event.preventDefault();
		$scope.form.loading = true;
		var _url = "";
		if($scope.send.action == 'add'){
			_url = $scope.form.data.url+'model/'+$scope.send.model+'/save';
		}else{
			_url = $scope.form.data.url+'model/'+$scope.send.model+'/update';
		}
		$http({
			method: 'POST',
			url: _url,
			withCredentials: true,
			transformRequest: angular.identity,
			headers: {
				'Content-type': undefined
			},
			transformRequest: function(data){
				var formId = document.getElementById('form-save');
				var formData = new FormData(formId);
				formData.append('form', angular.toJson(data.form));
				if($scope.form.data.file){
					formData.append('file', $scope.form.data.file);
				}
				return formData;
			},
			data: { form: $scope.form, files: $scope.files }
		}).then(function success(response){
			if(response.data.status === 1){
				$scope.form.status = 1;
				if($scope.form.id === 0){
					$scope.form.data = {};
					$scope.ticketform.$setPristine();
					$scope.ticketform.$setUntouched();
					$scope.resetfile();
				}
				$scope.form.success = true;
				$scope.form.loading = false;
			}
		});
	};

	// recarrega a página
	$scope.reloadpage = function($event){
		$event.preventDefault();
		window.location.reload();
	};

	// fechar ticket
	$scope.closeticket = {};
	$scope.closeticket.confirm = false;
	$scope.closeticket.id = 0;
	$scope.closeticket.open = function(id){
		$scope.closeticket.id = id;
		$scope.closeticket.confirm = true;
	};
	$scope.closeticket.send = function($event){
		$http.post($scope.form.data.url+'model/'+$scope.send.model+'/update-status', {id: $scope.closeticket.id}).then(function success(response){
			console.log(response);
			window.location.reload();
		});
	};
}]);

