import{g as qt,r as P,b as ff,_ as Ai,o as ka,j as h,P as pf,c as Ht,d as Na,e as Ra,f as df,h as hf,i as mf,k as vf,l as gf,R as we,m as j,n as fr,p as Ie,q as ac,u as _,t as Kt,v as le,a as xe,w as yf,s as Me,B as sc,x as Di,M as An,y as uc,z as Ia,C as cc,D as lc,E as bf,F as La,G as Wa,H as Fa,I as wf,J as xf,K as Of,N as Pf,O as Cf,Q as Sf,S as Ba,T as Ef,U as Tf,V as _f,W as Mf,X as $f,Y as jf,Z as Af,A as Df}from"./index-c697766b.js";var fc={exports:{}},kf="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Nf=kf,Rf=Nf;function pc(){}function dc(){}dc.resetWarningCache=pc;var If=function(){function e(r,o,i,a,s,u){if(u!==Rf){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:dc,resetWarningCache:pc};return n.PropTypes=n,n};fc.exports=If();var Lf=fc.exports;const f=qt(Lf),Wf={disableDefaultClasses:!1},Ff=P.createContext(Wf);function Bf(e){const{disableDefaultClasses:t}=P.useContext(Ff);return n=>t?"":e(n)}const hc="base";function Hf(e){return`${hc}--${e}`}function Vf(e,t){return`${hc}-${e}-${t}`}function mc(e,t){const n=ff[t];return n?Hf(n):Vf(e,t)}function zf(e,t){const n={};return t.forEach(r=>{n[r]=mc(e,r)}),n}var oe="top",ge="bottom",ye="right",ie="left",ki="auto",Dn=[oe,ge,ye,ie],Vt="start",Pn="end",Uf="clippingParents",vc="viewport",un="popper",Yf="reference",Ha=Dn.reduce(function(e,t){return e.concat([t+"-"+Vt,t+"-"+Pn])},[]),gc=[].concat(Dn,[ki]).reduce(function(e,t){return e.concat([t,t+"-"+Vt,t+"-"+Pn])},[]),Gf="beforeRead",Xf="read",qf="afterRead",Kf="beforeMain",Zf="main",Qf="afterMain",Jf="beforeWrite",ep="write",tp="afterWrite",np=[Gf,Xf,qf,Kf,Zf,Qf,Jf,ep,tp];function $e(e){return e?(e.nodeName||"").toLowerCase():null}function fe(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function vt(e){var t=fe(e).Element;return e instanceof t||e instanceof Element}function ve(e){var t=fe(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ni(e){if(typeof ShadowRoot>"u")return!1;var t=fe(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function rp(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!ve(i)||!$e(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function op(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(u,c){return u[c]="",u},{});!ve(o)||!$e(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(u){o.removeAttribute(u)}))})}}const ip={name:"applyStyles",enabled:!0,phase:"write",fn:rp,effect:op,requires:["computeStyles"]};function _e(e){return e.split("-")[0]}var ht=Math.max,gr=Math.min,zt=Math.round;function Ho(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function yc(){return!/^((?!chrome|android).)*safari/i.test(Ho())}function Ut(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&ve(e)&&(o=e.offsetWidth>0&&zt(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&zt(r.height)/e.offsetHeight||1);var a=vt(e)?fe(e):window,s=a.visualViewport,u=!yc()&&n,c=(r.left+(u&&s?s.offsetLeft:0))/o,l=(r.top+(u&&s?s.offsetTop:0))/i,d=r.width/o,p=r.height/i;return{width:d,height:p,top:l,right:c+d,bottom:l+p,left:c,x:c,y:l}}function Ri(e){var t=Ut(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function bc(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Ni(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Le(e){return fe(e).getComputedStyle(e)}function ap(e){return["table","td","th"].indexOf($e(e))>=0}function Qe(e){return((vt(e)?e.ownerDocument:e.document)||window.document).documentElement}function Er(e){return $e(e)==="html"?e:e.assignedSlot||e.parentNode||(Ni(e)?e.host:null)||Qe(e)}function Va(e){return!ve(e)||Le(e).position==="fixed"?null:e.offsetParent}function sp(e){var t=/firefox/i.test(Ho()),n=/Trident/i.test(Ho());if(n&&ve(e)){var r=Le(e);if(r.position==="fixed")return null}var o=Er(e);for(Ni(o)&&(o=o.host);ve(o)&&["html","body"].indexOf($e(o))<0;){var i=Le(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function kn(e){for(var t=fe(e),n=Va(e);n&&ap(n)&&Le(n).position==="static";)n=Va(n);return n&&($e(n)==="html"||$e(n)==="body"&&Le(n).position==="static")?t:n||sp(e)||t}function Ii(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function yn(e,t,n){return ht(e,gr(t,n))}function up(e,t,n){var r=yn(e,t,n);return r>n?n:r}function wc(){return{top:0,right:0,bottom:0,left:0}}function xc(e){return Object.assign({},wc(),e)}function Oc(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var cp=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,xc(typeof t!="number"?t:Oc(t,Dn))};function lp(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=_e(n.placement),u=Ii(s),c=[ie,ye].indexOf(s)>=0,l=c?"height":"width";if(!(!i||!a)){var d=cp(o.padding,n),p=Ri(i),m=u==="y"?oe:ie,x=u==="y"?ge:ye,g=n.rects.reference[l]+n.rects.reference[u]-a[u]-n.rects.popper[l],y=a[u]-n.rects.reference[u],v=kn(i),b=v?u==="y"?v.clientHeight||0:v.clientWidth||0:0,O=g/2-y/2,S=d[m],T=b-p[l]-d[x],C=b/2-p[l]/2+O,E=yn(S,C,T),D=u;n.modifiersData[r]=(t={},t[D]=E,t.centerOffset=E-C,t)}}function fp(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||bc(t.elements.popper,o)&&(t.elements.arrow=o))}const pp={name:"arrow",enabled:!0,phase:"main",fn:lp,effect:fp,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Yt(e){return e.split("-")[1]}var dp={top:"auto",right:"auto",bottom:"auto",left:"auto"};function hp(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:zt(n*o)/o||0,y:zt(r*o)/o||0}}function za(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,u=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,d=e.isFixed,p=a.x,m=p===void 0?0:p,x=a.y,g=x===void 0?0:x,y=typeof l=="function"?l({x:m,y:g}):{x:m,y:g};m=y.x,g=y.y;var v=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),O=ie,S=oe,T=window;if(c){var C=kn(n),E="clientHeight",D="clientWidth";if(C===fe(n)&&(C=Qe(n),Le(C).position!=="static"&&s==="absolute"&&(E="scrollHeight",D="scrollWidth")),C=C,o===oe||(o===ie||o===ye)&&i===Pn){S=ge;var k=d&&C===T&&T.visualViewport?T.visualViewport.height:C[E];g-=k-r.height,g*=u?1:-1}if(o===ie||(o===oe||o===ge)&&i===Pn){O=ye;var R=d&&C===T&&T.visualViewport?T.visualViewport.width:C[D];m-=R-r.width,m*=u?1:-1}}var F=Object.assign({position:s},c&&dp),q=l===!0?hp({x:m,y:g},fe(n)):{x:m,y:g};if(m=q.x,g=q.y,u){var L;return Object.assign({},F,(L={},L[S]=b?"0":"",L[O]=v?"0":"",L.transform=(T.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",L))}return Object.assign({},F,(t={},t[S]=b?g+"px":"",t[O]=v?m+"px":"",t.transform="",t))}function mp(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,u=s===void 0?!0:s,c={placement:_e(t.placement),variation:Yt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,za(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,za(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const vp={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mp,data:{}};var Yn={passive:!0};function gp(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,u=fe(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(l){l.addEventListener("scroll",n.update,Yn)}),s&&u.addEventListener("resize",n.update,Yn),function(){i&&c.forEach(function(l){l.removeEventListener("scroll",n.update,Yn)}),s&&u.removeEventListener("resize",n.update,Yn)}}const yp={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gp,data:{}};var bp={left:"right",right:"left",bottom:"top",top:"bottom"};function pr(e){return e.replace(/left|right|bottom|top/g,function(t){return bp[t]})}var wp={start:"end",end:"start"};function Ua(e){return e.replace(/start|end/g,function(t){return wp[t]})}function Li(e){var t=fe(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Wi(e){return Ut(Qe(e)).left+Li(e).scrollLeft}function xp(e,t){var n=fe(e),r=Qe(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,u=0;if(o){i=o.width,a=o.height;var c=yc();(c||!c&&t==="fixed")&&(s=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:s+Wi(e),y:u}}function Op(e){var t,n=Qe(e),r=Li(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=ht(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=ht(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Wi(e),u=-r.scrollTop;return Le(o||n).direction==="rtl"&&(s+=ht(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:u}}function Fi(e){var t=Le(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Pc(e){return["html","body","#document"].indexOf($e(e))>=0?e.ownerDocument.body:ve(e)&&Fi(e)?e:Pc(Er(e))}function bn(e,t){var n;t===void 0&&(t=[]);var r=Pc(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=fe(r),a=o?[i].concat(i.visualViewport||[],Fi(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(bn(Er(a)))}function Vo(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Pp(e,t){var n=Ut(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ya(e,t,n){return t===vc?Vo(xp(e,n)):vt(t)?Pp(t,n):Vo(Op(Qe(e)))}function Cp(e){var t=bn(Er(e)),n=["absolute","fixed"].indexOf(Le(e).position)>=0,r=n&&ve(e)?kn(e):e;return vt(r)?t.filter(function(o){return vt(o)&&bc(o,r)&&$e(o)!=="body"}):[]}function Sp(e,t,n,r){var o=t==="clippingParents"?Cp(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(u,c){var l=Ya(e,c,r);return u.top=ht(l.top,u.top),u.right=gr(l.right,u.right),u.bottom=gr(l.bottom,u.bottom),u.left=ht(l.left,u.left),u},Ya(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Cc(e){var t=e.reference,n=e.element,r=e.placement,o=r?_e(r):null,i=r?Yt(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,u;switch(o){case oe:u={x:a,y:t.y-n.height};break;case ge:u={x:a,y:t.y+t.height};break;case ye:u={x:t.x+t.width,y:s};break;case ie:u={x:t.x-n.width,y:s};break;default:u={x:t.x,y:t.y}}var c=o?Ii(o):null;if(c!=null){var l=c==="y"?"height":"width";switch(i){case Vt:u[c]=u[c]-(t[l]/2-n[l]/2);break;case Pn:u[c]=u[c]+(t[l]/2-n[l]/2);break}}return u}function Cn(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,u=s===void 0?Uf:s,c=n.rootBoundary,l=c===void 0?vc:c,d=n.elementContext,p=d===void 0?un:d,m=n.altBoundary,x=m===void 0?!1:m,g=n.padding,y=g===void 0?0:g,v=xc(typeof y!="number"?y:Oc(y,Dn)),b=p===un?Yf:un,O=e.rects.popper,S=e.elements[x?b:p],T=Sp(vt(S)?S:S.contextElement||Qe(e.elements.popper),u,l,a),C=Ut(e.elements.reference),E=Cc({reference:C,element:O,strategy:"absolute",placement:o}),D=Vo(Object.assign({},O,E)),k=p===un?D:C,R={top:T.top-k.top+v.top,bottom:k.bottom-T.bottom+v.bottom,left:T.left-k.left+v.left,right:k.right-T.right+v.right},F=e.modifiersData.offset;if(p===un&&F){var q=F[o];Object.keys(R).forEach(function(L){var K=[ye,ge].indexOf(L)>=0?1:-1,ne=[oe,ge].indexOf(L)>=0?"y":"x";R[L]+=q[ne]*K})}return R}function Ep(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,c=u===void 0?gc:u,l=Yt(r),d=l?s?Ha:Ha.filter(function(x){return Yt(x)===l}):Dn,p=d.filter(function(x){return c.indexOf(x)>=0});p.length===0&&(p=d);var m=p.reduce(function(x,g){return x[g]=Cn(e,{placement:g,boundary:o,rootBoundary:i,padding:a})[_e(g)],x},{});return Object.keys(m).sort(function(x,g){return m[x]-m[g]})}function Tp(e){if(_e(e)===ki)return[];var t=pr(e);return[Ua(e),t,Ua(t)]}function _p(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,u=n.fallbackPlacements,c=n.padding,l=n.boundary,d=n.rootBoundary,p=n.altBoundary,m=n.flipVariations,x=m===void 0?!0:m,g=n.allowedAutoPlacements,y=t.options.placement,v=_e(y),b=v===y,O=u||(b||!x?[pr(y)]:Tp(y)),S=[y].concat(O).reduce(function(Oe,ee){return Oe.concat(_e(ee)===ki?Ep(t,{placement:ee,boundary:l,rootBoundary:d,padding:c,flipVariations:x,allowedAutoPlacements:g}):ee)},[]),T=t.rects.reference,C=t.rects.popper,E=new Map,D=!0,k=S[0],R=0;R<S.length;R++){var F=S[R],q=_e(F),L=Yt(F)===Vt,K=[oe,ge].indexOf(q)>=0,ne=K?"width":"height",V=Cn(t,{placement:F,boundary:l,rootBoundary:d,altBoundary:p,padding:c}),Y=K?L?ye:ie:L?ge:oe;T[ne]>C[ne]&&(Y=pr(Y));var J=pr(Y),ue=[];if(i&&ue.push(V[q]<=0),s&&ue.push(V[Y]<=0,V[J]<=0),ue.every(function(Oe){return Oe})){k=F,D=!1;break}E.set(F,ue)}if(D)for(var rt=x?3:1,Be=function(ee){var He=S.find(function(Ve){var Pe=E.get(Ve);if(Pe)return Pe.slice(0,ee).every(function(Mt){return Mt})});if(He)return k=He,"break"},pe=rt;pe>0;pe--){var ot=Be(pe);if(ot==="break")break}t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}}const Mp={name:"flip",enabled:!0,phase:"main",fn:_p,requiresIfExists:["offset"],data:{_skip:!1}};function Ga(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Xa(e){return[oe,ye,ge,ie].some(function(t){return e[t]>=0})}function $p(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Cn(t,{elementContext:"reference"}),s=Cn(t,{altBoundary:!0}),u=Ga(a,r),c=Ga(s,o,i),l=Xa(u),d=Xa(c);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}const jp={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$p};function Ap(e,t,n){var r=_e(e),o=[ie,oe].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[ie,ye].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function Dp(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=gc.reduce(function(l,d){return l[d]=Ap(d,t.rects,i),l},{}),s=a[t.placement],u=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}const kp={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Dp};function Np(e){var t=e.state,n=e.name;t.modifiersData[n]=Cc({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Rp={name:"popperOffsets",enabled:!0,phase:"read",fn:Np,data:{}};function Ip(e){return e==="x"?"y":"x"}function Lp(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,u=n.boundary,c=n.rootBoundary,l=n.altBoundary,d=n.padding,p=n.tether,m=p===void 0?!0:p,x=n.tetherOffset,g=x===void 0?0:x,y=Cn(t,{boundary:u,rootBoundary:c,padding:d,altBoundary:l}),v=_e(t.placement),b=Yt(t.placement),O=!b,S=Ii(v),T=Ip(S),C=t.modifiersData.popperOffsets,E=t.rects.reference,D=t.rects.popper,k=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,R=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),F=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(C){if(i){var L,K=S==="y"?oe:ie,ne=S==="y"?ge:ye,V=S==="y"?"height":"width",Y=C[S],J=Y+y[K],ue=Y-y[ne],rt=m?-D[V]/2:0,Be=b===Vt?E[V]:D[V],pe=b===Vt?-D[V]:-E[V],ot=t.elements.arrow,Oe=m&&ot?Ri(ot):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:wc(),He=ee[K],Ve=ee[ne],Pe=yn(0,E[V],Oe[V]),Mt=O?E[V]/2-rt-Pe-He-R.mainAxis:Be-Pe-He-R.mainAxis,Vn=O?-E[V]/2+rt+Pe+Ve+R.mainAxis:pe+Pe+Ve+R.mainAxis,it=t.elements.arrow&&kn(t.elements.arrow),Zr=it?S==="y"?it.clientTop||0:it.clientLeft||0:0,an=(L=F==null?void 0:F[S])!=null?L:0,Qr=Y+Mt-an-Zr,Jr=Y+Vn-an,zn=yn(m?gr(J,Qr):J,Y,m?ht(ue,Jr):ue);C[S]=zn,q[S]=zn-Y}if(s){var Un,eo=S==="x"?oe:ie,sn=S==="x"?ge:ye,Ae=C[T],$t=T==="y"?"height":"width",w=Ae+y[eo],M=Ae-y[sn],$=[oe,ie].indexOf(v)!==-1,A=(Un=F==null?void 0:F[T])!=null?Un:0,I=$?w:Ae-E[$t]-D[$t]-A+R.altAxis,W=$?Ae+E[$t]+D[$t]-A-R.altAxis:M,U=m&&$?up(I,Ae,W):yn(m?I:w,Ae,m?W:M);C[T]=U,q[T]=U-Ae}t.modifiersData[r]=q}}const Wp={name:"preventOverflow",enabled:!0,phase:"main",fn:Lp,requiresIfExists:["offset"]};function Fp(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Bp(e){return e===fe(e)||!ve(e)?Li(e):Fp(e)}function Hp(e){var t=e.getBoundingClientRect(),n=zt(t.width)/e.offsetWidth||1,r=zt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Vp(e,t,n){n===void 0&&(n=!1);var r=ve(t),o=ve(t)&&Hp(t),i=Qe(t),a=Ut(e,o,n),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!n)&&(($e(t)!=="body"||Fi(i))&&(s=Bp(t)),ve(t)?(u=Ut(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=Wi(i))),{x:a.left+s.scrollLeft-u.x,y:a.top+s.scrollTop-u.y,width:a.width,height:a.height}}function zp(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var u=t.get(s);u&&o(u)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function Up(e){var t=zp(e);return np.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Yp(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Gp(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var qa={placement:"bottom",modifiers:[],strategy:"absolute"};function Ka(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Xp(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?qa:o;return function(s,u,c){c===void 0&&(c=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},qa,i),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},d=[],p=!1,m={state:l,setOptions:function(v){var b=typeof v=="function"?v(l.options):v;g(),l.options=Object.assign({},i,l.options,b),l.scrollParents={reference:vt(s)?bn(s):s.contextElement?bn(s.contextElement):[],popper:bn(u)};var O=Up(Gp([].concat(r,l.options.modifiers)));return l.orderedModifiers=O.filter(function(S){return S.enabled}),x(),m.update()},forceUpdate:function(){if(!p){var v=l.elements,b=v.reference,O=v.popper;if(Ka(b,O)){l.rects={reference:Vp(b,kn(O),l.options.strategy==="fixed"),popper:Ri(O)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var S=0;S<l.orderedModifiers.length;S++){if(l.reset===!0){l.reset=!1,S=-1;continue}var T=l.orderedModifiers[S],C=T.fn,E=T.options,D=E===void 0?{}:E,k=T.name;typeof C=="function"&&(l=C({state:l,options:D,name:k,instance:m})||l)}}}},update:Yp(function(){return new Promise(function(y){m.forceUpdate(),y(l)})}),destroy:function(){g(),p=!0}};if(!Ka(s,u))return m;m.setOptions(c).then(function(y){!p&&c.onFirstUpdate&&c.onFirstUpdate(y)});function x(){l.orderedModifiers.forEach(function(y){var v=y.name,b=y.options,O=b===void 0?{}:b,S=y.effect;if(typeof S=="function"){var T=S({state:l,name:v,instance:m,options:O}),C=function(){};d.push(T||C)}})}function g(){d.forEach(function(y){return y()}),d=[]}return m}}var qp=[yp,Rp,vp,ip,kp,Mp,Wp,pp,jp],Kp=Xp({defaultModifiers:qp});const Sc="Popper";function Zp(e){return mc(Sc,e)}zf(Sc,["root"]);const Qp=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Jp=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function ed(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function zo(e){return typeof e=="function"?e():e}function td(e){return e.nodeType!==void 0}const nd=()=>hf({root:["root"]},Bf(Zp)),rd={},od=P.forwardRef(function(t,n){var r;const{anchorEl:o,children:i,direction:a,disablePortal:s,modifiers:u,open:c,placement:l,popperOptions:d,popperRef:p,slotProps:m={},slots:x={},TransitionProps:g}=t,y=Ai(t,Qp),v=P.useRef(null),b=Na(v,n),O=P.useRef(null),S=Na(O,p),T=P.useRef(S);Ra(()=>{T.current=S},[S]),P.useImperativeHandle(p,()=>O.current,[]);const C=ed(l,a),[E,D]=P.useState(C),[k,R]=P.useState(zo(o));P.useEffect(()=>{O.current&&O.current.forceUpdate()}),P.useEffect(()=>{o&&R(zo(o))},[o]),Ra(()=>{if(!k||!c)return;const ne=J=>{D(J.placement)};let V=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:J})=>{ne(J)}}];u!=null&&(V=V.concat(u)),d&&d.modifiers!=null&&(V=V.concat(d.modifiers));const Y=Kp(k,v.current,Ht({placement:C},d,{modifiers:V}));return T.current(Y),()=>{Y.destroy(),T.current(null)}},[k,s,u,c,d,C]);const F={placement:E};g!==null&&(F.TransitionProps=g);const q=nd(),L=(r=x.root)!=null?r:"div",K=df({elementType:L,externalSlotProps:m.root,externalForwardedProps:y,additionalProps:{role:"tooltip",ref:b},ownerState:t,className:q.root});return h.jsx(L,Ht({},K,{children:typeof i=="function"?i(F):i}))}),id=P.forwardRef(function(t,n){const{anchorEl:r,children:o,container:i,direction:a="ltr",disablePortal:s=!1,keepMounted:u=!1,modifiers:c,open:l,placement:d="bottom",popperOptions:p=rd,popperRef:m,style:x,transition:g=!1,slotProps:y={},slots:v={}}=t,b=Ai(t,Jp),[O,S]=P.useState(!0),T=()=>{S(!1)},C=()=>{S(!0)};if(!u&&!l&&(!g||O))return null;let E;if(i)E=i;else if(r){const R=zo(r);E=R&&td(R)?ka(R).body:ka(null).body}const D=!l&&u&&(!g||O)?"none":void 0,k=g?{in:l,onEnter:T,onExited:C}:void 0;return h.jsx(pf,{disablePortal:s,container:E,children:h.jsx(od,Ht({anchorEl:r,direction:a,disablePortal:s,modifiers:c,ref:n,open:g?!O:l,placement:d,popperOptions:p,popperRef:m,slotProps:y,slots:v},b,{style:Ht({position:"fixed",top:0,left:0,display:D},x),TransitionProps:k,children:o}))})});var Bi={};Object.defineProperty(Bi,"__esModule",{value:!0});var Ec=Bi.default=void 0,ad=ud(P),sd=mf;function Tc(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Tc=function(r){return r?n:t})(e)}function ud(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Tc(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function cd(e){return Object.keys(e).length===0}function ld(e=null){const t=ad.useContext(sd.ThemeContext);return!t||cd(t)?e:t}Ec=Bi.default=ld;const fd=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],pd=vf(id,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),dd=P.forwardRef(function(t,n){var r;const o=Ec(),i=gf({props:t,name:"MuiPopper"}),{anchorEl:a,component:s,components:u,componentsProps:c,container:l,disablePortal:d,keepMounted:p,modifiers:m,open:x,placement:g,popperOptions:y,popperRef:v,transition:b,slots:O,slotProps:S}=i,T=Ai(i,fd),C=(r=O==null?void 0:O.root)!=null?r:u==null?void 0:u.Root,E=Ht({anchorEl:a,container:l,disablePortal:d,keepMounted:p,modifiers:m,open:x,placement:g,popperOptions:y,popperRef:v,transition:b},T);return h.jsx(pd,Ht({as:s,direction:o==null?void 0:o.direction,slots:{root:C},slotProps:S??c},E,{ref:n}))}),hd=dd,Hi=e=>e.water.waterVolumes,md=e=>e.water.waterVolumeSum,vd=e=>e.water.stats,Vi=e=>e.water.selectedCalendar;var gd=function(t){return yd(t)&&!bd(t)};function yd(e){return!!e&&typeof e=="object"}function bd(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Od(e)}var wd=typeof Symbol=="function"&&Symbol.for,xd=wd?Symbol.for("react.element"):60103;function Od(e){return e.$$typeof===xd}function Pd(e){return Array.isArray(e)?[]:{}}function yr(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Sn(Pd(e),e,t):e}function Cd(e,t,n){return e.concat(t).map(function(r){return yr(r,n)})}function Sd(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(o){r[o]=yr(e[o],n)}),Object.keys(t).forEach(function(o){!n.isMergeableObject(t[o])||!e[o]?r[o]=yr(t[o],n):r[o]=Sn(e[o],t[o],n)}),r}function Sn(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||Cd,n.isMergeableObject=n.isMergeableObject||gd;var r=Array.isArray(t),o=Array.isArray(e),i=r===o;return i?r?n.arrayMerge(e,t,n):Sd(e,t,n):yr(t,n)}Sn.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,o){return Sn(r,o,n)},{})};var Uo=Sn,Ed=typeof global=="object"&&global&&global.Object===Object&&global;const _c=Ed;var Td=typeof self=="object"&&self&&self.Object===Object&&self,_d=_c||Td||Function("return this")();const je=_d;var Md=je.Symbol;const Xe=Md;var Mc=Object.prototype,$d=Mc.hasOwnProperty,jd=Mc.toString,cn=Xe?Xe.toStringTag:void 0;function Ad(e){var t=$d.call(e,cn),n=e[cn];try{e[cn]=void 0;var r=!0}catch{}var o=jd.call(e);return r&&(t?e[cn]=n:delete e[cn]),o}var Dd=Object.prototype,kd=Dd.toString;function Nd(e){return kd.call(e)}var Rd="[object Null]",Id="[object Undefined]",Za=Xe?Xe.toStringTag:void 0;function xt(e){return e==null?e===void 0?Id:Rd:Za&&Za in Object(e)?Ad(e):Nd(e)}function $c(e,t){return function(n){return e(t(n))}}var Ld=$c(Object.getPrototypeOf,Object);const zi=Ld;function Ot(e){return e!=null&&typeof e=="object"}var Wd="[object Object]",Fd=Function.prototype,Bd=Object.prototype,jc=Fd.toString,Hd=Bd.hasOwnProperty,Vd=jc.call(Object);function Qa(e){if(!Ot(e)||xt(e)!=Wd)return!1;var t=zi(e);if(t===null)return!0;var n=Hd.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&jc.call(n)==Vd}var Ja=Array.isArray,es=Object.keys,zd=Object.prototype.hasOwnProperty,Ud=typeof Element<"u";function Yo(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Ja(e),r=Ja(t),o,i,a;if(n&&r){if(i=e.length,i!=t.length)return!1;for(o=i;o--!==0;)if(!Yo(e[o],t[o]))return!1;return!0}if(n!=r)return!1;var s=e instanceof Date,u=t instanceof Date;if(s!=u)return!1;if(s&&u)return e.getTime()==t.getTime();var c=e instanceof RegExp,l=t instanceof RegExp;if(c!=l)return!1;if(c&&l)return e.toString()==t.toString();var d=es(e);if(i=d.length,i!==es(t).length)return!1;for(o=i;o--!==0;)if(!zd.call(t,d[o]))return!1;if(Ud&&e instanceof Element&&t instanceof Element)return e===t;for(o=i;o--!==0;)if(a=d[o],!(a==="_owner"&&e.$$typeof)&&!Yo(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var Yd=function(t,n){try{return Yo(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const lt=qt(Yd);var Gd=!0;function Xd(e,t){if(!Gd){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function qd(){this.__data__=[],this.size=0}function Ac(e,t){return e===t||e!==e&&t!==t}function Tr(e,t){for(var n=e.length;n--;)if(Ac(e[n][0],t))return n;return-1}var Kd=Array.prototype,Zd=Kd.splice;function Qd(e){var t=this.__data__,n=Tr(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Zd.call(t,n,1),--this.size,!0}function Jd(e){var t=this.__data__,n=Tr(t,e);return n<0?void 0:t[n][1]}function eh(e){return Tr(this.__data__,e)>-1}function th(e,t){var n=this.__data__,r=Tr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Fe(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fe.prototype.clear=qd;Fe.prototype.delete=Qd;Fe.prototype.get=Jd;Fe.prototype.has=eh;Fe.prototype.set=th;function nh(){this.__data__=new Fe,this.size=0}function rh(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function oh(e){return this.__data__.get(e)}function ih(e){return this.__data__.has(e)}function Nn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ah="[object AsyncFunction]",sh="[object Function]",uh="[object GeneratorFunction]",ch="[object Proxy]";function Dc(e){if(!Nn(e))return!1;var t=xt(e);return t==sh||t==uh||t==ah||t==ch}var lh=je["__core-js_shared__"];const ro=lh;var ts=function(){var e=/[^.]+$/.exec(ro&&ro.keys&&ro.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function fh(e){return!!ts&&ts in e}var ph=Function.prototype,dh=ph.toString;function Pt(e){if(e!=null){try{return dh.call(e)}catch{}try{return e+""}catch{}}return""}var hh=/[\\^$.*+?()[\]{}|]/g,mh=/^\[object .+?Constructor\]$/,vh=Function.prototype,gh=Object.prototype,yh=vh.toString,bh=gh.hasOwnProperty,wh=RegExp("^"+yh.call(bh).replace(hh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function xh(e){if(!Nn(e)||fh(e))return!1;var t=Dc(e)?wh:mh;return t.test(Pt(e))}function Oh(e,t){return e==null?void 0:e[t]}function Ct(e,t){var n=Oh(e,t);return xh(n)?n:void 0}var Ph=Ct(je,"Map");const En=Ph;var Ch=Ct(Object,"create");const Tn=Ch;function Sh(){this.__data__=Tn?Tn(null):{},this.size=0}function Eh(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Th="__lodash_hash_undefined__",_h=Object.prototype,Mh=_h.hasOwnProperty;function $h(e){var t=this.__data__;if(Tn){var n=t[e];return n===Th?void 0:n}return Mh.call(t,e)?t[e]:void 0}var jh=Object.prototype,Ah=jh.hasOwnProperty;function Dh(e){var t=this.__data__;return Tn?t[e]!==void 0:Ah.call(t,e)}var kh="__lodash_hash_undefined__";function Nh(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Tn&&t===void 0?kh:t,this}function gt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}gt.prototype.clear=Sh;gt.prototype.delete=Eh;gt.prototype.get=$h;gt.prototype.has=Dh;gt.prototype.set=Nh;function Rh(){this.size=0,this.__data__={hash:new gt,map:new(En||Fe),string:new gt}}function Ih(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function _r(e,t){var n=e.__data__;return Ih(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Lh(e){var t=_r(this,e).delete(e);return this.size-=t?1:0,t}function Wh(e){return _r(this,e).get(e)}function Fh(e){return _r(this,e).has(e)}function Bh(e,t){var n=_r(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Je(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Je.prototype.clear=Rh;Je.prototype.delete=Lh;Je.prototype.get=Wh;Je.prototype.has=Fh;Je.prototype.set=Bh;var Hh=200;function Vh(e,t){var n=this.__data__;if(n instanceof Fe){var r=n.__data__;if(!En||r.length<Hh-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Je(r)}return n.set(e,t),this.size=n.size,this}function Zt(e){var t=this.__data__=new Fe(e);this.size=t.size}Zt.prototype.clear=nh;Zt.prototype.delete=rh;Zt.prototype.get=oh;Zt.prototype.has=ih;Zt.prototype.set=Vh;function zh(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Uh=function(){try{var e=Ct(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ns=Uh;function kc(e,t,n){t=="__proto__"&&ns?ns(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Yh=Object.prototype,Gh=Yh.hasOwnProperty;function Nc(e,t,n){var r=e[t];(!(Gh.call(e,t)&&Ac(r,n))||n===void 0&&!(t in e))&&kc(e,t,n)}function Mr(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var s=t[i],u=r?r(n[s],e[s],s,n,e):void 0;u===void 0&&(u=e[s]),o?kc(n,s,u):Nc(n,s,u)}return n}function Xh(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var qh="[object Arguments]";function rs(e){return Ot(e)&&xt(e)==qh}var Rc=Object.prototype,Kh=Rc.hasOwnProperty,Zh=Rc.propertyIsEnumerable,Qh=rs(function(){return arguments}())?rs:function(e){return Ot(e)&&Kh.call(e,"callee")&&!Zh.call(e,"callee")};const Jh=Qh;var em=Array.isArray;const Rn=em;function tm(){return!1}var Ic=typeof exports=="object"&&exports&&!exports.nodeType&&exports,os=Ic&&typeof module=="object"&&module&&!module.nodeType&&module,nm=os&&os.exports===Ic,is=nm?je.Buffer:void 0,rm=is?is.isBuffer:void 0,om=rm||tm;const Lc=om;var im=9007199254740991,am=/^(?:0|[1-9]\d*)$/;function sm(e,t){var n=typeof e;return t=t??im,!!t&&(n=="number"||n!="symbol"&&am.test(e))&&e>-1&&e%1==0&&e<t}var um=9007199254740991;function Wc(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=um}var cm="[object Arguments]",lm="[object Array]",fm="[object Boolean]",pm="[object Date]",dm="[object Error]",hm="[object Function]",mm="[object Map]",vm="[object Number]",gm="[object Object]",ym="[object RegExp]",bm="[object Set]",wm="[object String]",xm="[object WeakMap]",Om="[object ArrayBuffer]",Pm="[object DataView]",Cm="[object Float32Array]",Sm="[object Float64Array]",Em="[object Int8Array]",Tm="[object Int16Array]",_m="[object Int32Array]",Mm="[object Uint8Array]",$m="[object Uint8ClampedArray]",jm="[object Uint16Array]",Am="[object Uint32Array]",z={};z[Cm]=z[Sm]=z[Em]=z[Tm]=z[_m]=z[Mm]=z[$m]=z[jm]=z[Am]=!0;z[cm]=z[lm]=z[Om]=z[fm]=z[Pm]=z[pm]=z[dm]=z[hm]=z[mm]=z[vm]=z[gm]=z[ym]=z[bm]=z[wm]=z[xm]=!1;function Dm(e){return Ot(e)&&Wc(e.length)&&!!z[xt(e)]}function Ui(e){return function(t){return e(t)}}var Fc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wn=Fc&&typeof module=="object"&&module&&!module.nodeType&&module,km=wn&&wn.exports===Fc,oo=km&&_c.process,Nm=function(){try{var e=wn&&wn.require&&wn.require("util").types;return e||oo&&oo.binding&&oo.binding("util")}catch{}}();const Gt=Nm;var as=Gt&&Gt.isTypedArray,Rm=as?Ui(as):Dm;const Im=Rm;var Lm=Object.prototype,Wm=Lm.hasOwnProperty;function Bc(e,t){var n=Rn(e),r=!n&&Jh(e),o=!n&&!r&&Lc(e),i=!n&&!r&&!o&&Im(e),a=n||r||o||i,s=a?Xh(e.length,String):[],u=s.length;for(var c in e)(t||Wm.call(e,c))&&!(a&&(c=="length"||o&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||sm(c,u)))&&s.push(c);return s}var Fm=Object.prototype;function Yi(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Fm;return e===n}var Bm=$c(Object.keys,Object);const Hm=Bm;var Vm=Object.prototype,zm=Vm.hasOwnProperty;function Um(e){if(!Yi(e))return Hm(e);var t=[];for(var n in Object(e))zm.call(e,n)&&n!="constructor"&&t.push(n);return t}function Hc(e){return e!=null&&Wc(e.length)&&!Dc(e)}function Gi(e){return Hc(e)?Bc(e):Um(e)}function Ym(e,t){return e&&Mr(t,Gi(t),e)}function Gm(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Xm=Object.prototype,qm=Xm.hasOwnProperty;function Km(e){if(!Nn(e))return Gm(e);var t=Yi(e),n=[];for(var r in e)r=="constructor"&&(t||!qm.call(e,r))||n.push(r);return n}function Xi(e){return Hc(e)?Bc(e,!0):Km(e)}function Zm(e,t){return e&&Mr(t,Xi(t),e)}var Vc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ss=Vc&&typeof module=="object"&&module&&!module.nodeType&&module,Qm=ss&&ss.exports===Vc,us=Qm?je.Buffer:void 0,cs=us?us.allocUnsafe:void 0;function Jm(e,t){if(t)return e.slice();var n=e.length,r=cs?cs(n):new e.constructor(n);return e.copy(r),r}function zc(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function ev(e,t){for(var n=-1,r=e==null?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function Uc(){return[]}var tv=Object.prototype,nv=tv.propertyIsEnumerable,ls=Object.getOwnPropertySymbols,rv=ls?function(e){return e==null?[]:(e=Object(e),ev(ls(e),function(t){return nv.call(e,t)}))}:Uc;const qi=rv;function ov(e,t){return Mr(e,qi(e),t)}function Yc(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}var iv=Object.getOwnPropertySymbols,av=iv?function(e){for(var t=[];e;)Yc(t,qi(e)),e=zi(e);return t}:Uc;const Gc=av;function sv(e,t){return Mr(e,Gc(e),t)}function Xc(e,t,n){var r=t(e);return Rn(e)?r:Yc(r,n(e))}function uv(e){return Xc(e,Gi,qi)}function cv(e){return Xc(e,Xi,Gc)}var lv=Ct(je,"DataView");const Go=lv;var fv=Ct(je,"Promise");const Xo=fv;var pv=Ct(je,"Set");const qo=pv;var dv=Ct(je,"WeakMap");const Ko=dv;var fs="[object Map]",hv="[object Object]",ps="[object Promise]",ds="[object Set]",hs="[object WeakMap]",ms="[object DataView]",mv=Pt(Go),vv=Pt(En),gv=Pt(Xo),yv=Pt(qo),bv=Pt(Ko),ft=xt;(Go&&ft(new Go(new ArrayBuffer(1)))!=ms||En&&ft(new En)!=fs||Xo&&ft(Xo.resolve())!=ps||qo&&ft(new qo)!=ds||Ko&&ft(new Ko)!=hs)&&(ft=function(e){var t=xt(e),n=t==hv?e.constructor:void 0,r=n?Pt(n):"";if(r)switch(r){case mv:return ms;case vv:return fs;case gv:return ps;case yv:return ds;case bv:return hs}return t});const Ki=ft;var wv=Object.prototype,xv=wv.hasOwnProperty;function Ov(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&xv.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var Pv=je.Uint8Array;const vs=Pv;function Zi(e){var t=new e.constructor(e.byteLength);return new vs(t).set(new vs(e)),t}function Cv(e,t){var n=t?Zi(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Sv=/\w*$/;function Ev(e){var t=new e.constructor(e.source,Sv.exec(e));return t.lastIndex=e.lastIndex,t}var gs=Xe?Xe.prototype:void 0,ys=gs?gs.valueOf:void 0;function Tv(e){return ys?Object(ys.call(e)):{}}function _v(e,t){var n=t?Zi(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Mv="[object Boolean]",$v="[object Date]",jv="[object Map]",Av="[object Number]",Dv="[object RegExp]",kv="[object Set]",Nv="[object String]",Rv="[object Symbol]",Iv="[object ArrayBuffer]",Lv="[object DataView]",Wv="[object Float32Array]",Fv="[object Float64Array]",Bv="[object Int8Array]",Hv="[object Int16Array]",Vv="[object Int32Array]",zv="[object Uint8Array]",Uv="[object Uint8ClampedArray]",Yv="[object Uint16Array]",Gv="[object Uint32Array]";function Xv(e,t,n){var r=e.constructor;switch(t){case Iv:return Zi(e);case Mv:case $v:return new r(+e);case Lv:return Cv(e,n);case Wv:case Fv:case Bv:case Hv:case Vv:case zv:case Uv:case Yv:case Gv:return _v(e,n);case jv:return new r;case Av:case Nv:return new r(e);case Dv:return Ev(e);case kv:return new r;case Rv:return Tv(e)}}var bs=Object.create,qv=function(){function e(){}return function(t){if(!Nn(t))return{};if(bs)return bs(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const Kv=qv;function Zv(e){return typeof e.constructor=="function"&&!Yi(e)?Kv(zi(e)):{}}var Qv="[object Map]";function Jv(e){return Ot(e)&&Ki(e)==Qv}var ws=Gt&&Gt.isMap,eg=ws?Ui(ws):Jv;const tg=eg;var ng="[object Set]";function rg(e){return Ot(e)&&Ki(e)==ng}var xs=Gt&&Gt.isSet,og=xs?Ui(xs):rg;const ig=og;var ag=1,sg=2,ug=4,qc="[object Arguments]",cg="[object Array]",lg="[object Boolean]",fg="[object Date]",pg="[object Error]",Kc="[object Function]",dg="[object GeneratorFunction]",hg="[object Map]",mg="[object Number]",Zc="[object Object]",vg="[object RegExp]",gg="[object Set]",yg="[object String]",bg="[object Symbol]",wg="[object WeakMap]",xg="[object ArrayBuffer]",Og="[object DataView]",Pg="[object Float32Array]",Cg="[object Float64Array]",Sg="[object Int8Array]",Eg="[object Int16Array]",Tg="[object Int32Array]",_g="[object Uint8Array]",Mg="[object Uint8ClampedArray]",$g="[object Uint16Array]",jg="[object Uint32Array]",H={};H[qc]=H[cg]=H[xg]=H[Og]=H[lg]=H[fg]=H[Pg]=H[Cg]=H[Sg]=H[Eg]=H[Tg]=H[hg]=H[mg]=H[Zc]=H[vg]=H[gg]=H[yg]=H[bg]=H[_g]=H[Mg]=H[$g]=H[jg]=!0;H[pg]=H[Kc]=H[wg]=!1;function dr(e,t,n,r,o,i){var a,s=t&ag,u=t&sg,c=t&ug;if(n&&(a=o?n(e,r,o,i):n(e)),a!==void 0)return a;if(!Nn(e))return e;var l=Rn(e);if(l){if(a=Ov(e),!s)return zc(e,a)}else{var d=Ki(e),p=d==Kc||d==dg;if(Lc(e))return Jm(e,s);if(d==Zc||d==qc||p&&!o){if(a=u||p?{}:Zv(e),!s)return u?sv(e,Zm(a,e)):ov(e,Ym(a,e))}else{if(!H[d])return o?e:{};a=Xv(e,d,s)}}i||(i=new Zt);var m=i.get(e);if(m)return m;i.set(e,a),ig(e)?e.forEach(function(y){a.add(dr(y,t,n,y,e,i))}):tg(e)&&e.forEach(function(y,v){a.set(v,dr(y,t,n,v,e,i))});var x=c?u?cv:uv:u?Xi:Gi,g=l?void 0:x(e);return zh(g||e,function(y,v){g&&(v=y,y=e[v]),Nc(a,v,dr(y,t,n,v,e,i))}),a}var Ag=4;function Os(e){return dr(e,Ag)}function Qc(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var Dg="[object Symbol]";function Qi(e){return typeof e=="symbol"||Ot(e)&&xt(e)==Dg}var kg="Expected a function";function Ji(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(kg);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Ji.Cache||Je),n}Ji.Cache=Je;var Ng=500;function Rg(e){var t=Ji(e,function(r){return n.size===Ng&&n.clear(),r}),n=t.cache;return t}var Ig=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lg=/\\(\\)?/g,Wg=Rg(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ig,function(n,r,o,i){t.push(o?i.replace(Lg,"$1"):r||n)}),t});const Fg=Wg;var Bg=1/0;function Hg(e){if(typeof e=="string"||Qi(e))return e;var t=e+"";return t=="0"&&1/e==-Bg?"-0":t}var Vg=1/0,Ps=Xe?Xe.prototype:void 0,Cs=Ps?Ps.toString:void 0;function Jc(e){if(typeof e=="string")return e;if(Rn(e))return Qc(e,Jc)+"";if(Qi(e))return Cs?Cs.call(e):"";var t=e+"";return t=="0"&&1/e==-Vg?"-0":t}function zg(e){return e==null?"":Jc(e)}function el(e){return Rn(e)?Qc(e,Hg):Qi(e)?[e]:zc(Fg(zg(e)))}function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function tl(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var $r=P.createContext(void 0);$r.displayName="FormikContext";$r.Provider;$r.Consumer;function Ug(){var e=P.useContext($r);return e||Xd(!1),e}var be=function(t){return typeof t=="function"},jr=function(t){return t!==null&&typeof t=="object"},Yg=function(t){return String(Math.floor(Number(t)))===t},io=function(t){return Object.prototype.toString.call(t)==="[object String]"},ao=function(t){return jr(t)&&be(t.then)};function ce(e,t,n,r){r===void 0&&(r=0);for(var o=el(t);e&&r<o.length;)e=e[o[r++]];return r!==o.length&&!e||e===void 0?n:e}function mt(e,t,n){for(var r=Os(e),o=r,i=0,a=el(t);i<a.length-1;i++){var s=a[i],u=ce(e,a.slice(0,i+1));if(u&&(jr(u)||Array.isArray(u)))o=o[s]=Os(u);else{var c=a[i+1];o=o[s]=Yg(c)&&Number(c)>=0?[]:{}}}return(i===0?e:o)[a[i]]===n?e:(n===void 0?delete o[a[i]]:o[a[i]]=n,i===0&&n===void 0&&delete r[a[i]],r)}function nl(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var o=0,i=Object.keys(e);o<i.length;o++){var a=i[o],s=e[a];jr(s)?n.get(s)||(n.set(s,!0),r[a]=Array.isArray(s)?[]:{},nl(s,t,n,r[a])):r[a]=t}return r}function Gg(e,t){switch(t.type){case"SET_VALUES":return G({},e,{values:t.payload});case"SET_TOUCHED":return G({},e,{touched:t.payload});case"SET_ERRORS":return lt(e.errors,t.payload)?e:G({},e,{errors:t.payload});case"SET_STATUS":return G({},e,{status:t.payload});case"SET_ISSUBMITTING":return G({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return G({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return G({},e,{values:mt(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return G({},e,{touched:mt(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return G({},e,{errors:mt(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return G({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return G({},e,{touched:nl(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return G({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return G({},e,{isSubmitting:!1});default:return e}}var at={},Gn={};function rl(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,o=r===void 0?!0:r,i=e.validateOnMount,a=i===void 0?!1:i,s=e.isInitialValid,u=e.enableReinitialize,c=u===void 0?!1:u,l=e.onSubmit,d=tl(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=G({validateOnChange:n,validateOnBlur:o,validateOnMount:a,onSubmit:l},d),m=P.useRef(p.initialValues),x=P.useRef(p.initialErrors||at),g=P.useRef(p.initialTouched||Gn),y=P.useRef(p.initialStatus),v=P.useRef(!1),b=P.useRef({});P.useEffect(function(){return v.current=!0,function(){v.current=!1}},[]);var O=P.useState(0),S=O[1],T=P.useRef({values:p.initialValues,errors:p.initialErrors||at,touched:p.initialTouched||Gn,status:p.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),C=T.current,E=P.useCallback(function(w){var M=T.current;T.current=Gg(M,w),M!==T.current&&S(function($){return $+1})},[]),D=P.useCallback(function(w,M){return new Promise(function($,A){var I=p.validate(w,M);I==null?$(at):ao(I)?I.then(function(W){$(W||at)},function(W){A(W)}):$(I)})},[p.validate]),k=P.useCallback(function(w,M){var $=p.validationSchema,A=be($)?$(M):$,I=M&&A.validateAt?A.validateAt(M,w):qg(w,A);return new Promise(function(W,U){I.then(function(){W(at)},function(De){De.name==="ValidationError"?W(Xg(De)):U(De)})})},[p.validationSchema]),R=P.useCallback(function(w,M){return new Promise(function($){return $(b.current[w].validate(M))})},[]),F=P.useCallback(function(w){var M=Object.keys(b.current).filter(function(A){return be(b.current[A].validate)}),$=M.length>0?M.map(function(A){return R(A,ce(w,A))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all($).then(function(A){return A.reduce(function(I,W,U){return W==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||W&&(I=mt(I,M[U],W)),I},{})})},[R]),q=P.useCallback(function(w){return Promise.all([F(w),p.validationSchema?k(w):{},p.validate?D(w):{}]).then(function(M){var $=M[0],A=M[1],I=M[2],W=Uo.all([$,A,I],{arrayMerge:Kg});return W})},[p.validate,p.validationSchema,F,D,k]),L=de(function(w){return w===void 0&&(w=C.values),E({type:"SET_ISVALIDATING",payload:!0}),q(w).then(function(M){return v.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:M})),M})});P.useEffect(function(){a&&v.current===!0&&lt(m.current,p.initialValues)&&L(m.current)},[a,L]);var K=P.useCallback(function(w){var M=w&&w.values?w.values:m.current,$=w&&w.errors?w.errors:x.current?x.current:p.initialErrors||{},A=w&&w.touched?w.touched:g.current?g.current:p.initialTouched||{},I=w&&w.status?w.status:y.current?y.current:p.initialStatus;m.current=M,x.current=$,g.current=A,y.current=I;var W=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!w&&!!w.isSubmitting,errors:$,touched:A,status:I,values:M,isValidating:!!w&&!!w.isValidating,submitCount:w&&w.submitCount&&typeof w.submitCount=="number"?w.submitCount:0}})};if(p.onReset){var U=p.onReset(C.values,an);ao(U)?U.then(W):W()}else W()},[p.initialErrors,p.initialStatus,p.initialTouched,p.onReset]);P.useEffect(function(){v.current===!0&&!lt(m.current,p.initialValues)&&c&&(m.current=p.initialValues,K(),a&&L(m.current))},[c,p.initialValues,K,a,L]),P.useEffect(function(){c&&v.current===!0&&!lt(x.current,p.initialErrors)&&(x.current=p.initialErrors||at,E({type:"SET_ERRORS",payload:p.initialErrors||at}))},[c,p.initialErrors]),P.useEffect(function(){c&&v.current===!0&&!lt(g.current,p.initialTouched)&&(g.current=p.initialTouched||Gn,E({type:"SET_TOUCHED",payload:p.initialTouched||Gn}))},[c,p.initialTouched]),P.useEffect(function(){c&&v.current===!0&&!lt(y.current,p.initialStatus)&&(y.current=p.initialStatus,E({type:"SET_STATUS",payload:p.initialStatus}))},[c,p.initialStatus,p.initialTouched]);var ne=de(function(w){if(b.current[w]&&be(b.current[w].validate)){var M=ce(C.values,w),$=b.current[w].validate(M);return ao($)?(E({type:"SET_ISVALIDATING",payload:!0}),$.then(function(A){return A}).then(function(A){E({type:"SET_FIELD_ERROR",payload:{field:w,value:A}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:w,value:$}}),Promise.resolve($))}else if(p.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),k(C.values,w).then(function(A){return A}).then(function(A){E({type:"SET_FIELD_ERROR",payload:{field:w,value:ce(A,w)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),V=P.useCallback(function(w,M){var $=M.validate;b.current[w]={validate:$}},[]),Y=P.useCallback(function(w){delete b.current[w]},[]),J=de(function(w,M){E({type:"SET_TOUCHED",payload:w});var $=M===void 0?o:M;return $?L(C.values):Promise.resolve()}),ue=P.useCallback(function(w){E({type:"SET_ERRORS",payload:w})},[]),rt=de(function(w,M){var $=be(w)?w(C.values):w;E({type:"SET_VALUES",payload:$});var A=M===void 0?n:M;return A?L($):Promise.resolve()}),Be=P.useCallback(function(w,M){E({type:"SET_FIELD_ERROR",payload:{field:w,value:M}})},[]),pe=de(function(w,M,$){E({type:"SET_FIELD_VALUE",payload:{field:w,value:M}});var A=$===void 0?n:$;return A?L(mt(C.values,w,M)):Promise.resolve()}),ot=P.useCallback(function(w,M){var $=M,A=w,I;if(!io(w)){w.persist&&w.persist();var W=w.target?w.target:w.currentTarget,U=W.type,De=W.name,to=W.id,no=W.value,cf=W.checked,nP=W.outerHTML,Da=W.options,lf=W.multiple;$=M||De||to,A=/number|range/.test(U)?(I=parseFloat(no),isNaN(I)?"":I):/checkbox/.test(U)?Qg(ce(C.values,$),cf,no):Da&&lf?Zg(Da):no}$&&pe($,A)},[pe,C.values]),Oe=de(function(w){if(io(w))return function(M){return ot(M,w)};ot(w)}),ee=de(function(w,M,$){M===void 0&&(M=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:w,value:M}});var A=$===void 0?o:$;return A?L(C.values):Promise.resolve()}),He=P.useCallback(function(w,M){w.persist&&w.persist();var $=w.target,A=$.name,I=$.id,W=$.outerHTML,U=M||A||I;ee(U,!0)},[ee]),Ve=de(function(w){if(io(w))return function(M){return He(M,w)};He(w)}),Pe=P.useCallback(function(w){be(w)?E({type:"SET_FORMIK_STATE",payload:w}):E({type:"SET_FORMIK_STATE",payload:function(){return w}})},[]),Mt=P.useCallback(function(w){E({type:"SET_STATUS",payload:w})},[]),Vn=P.useCallback(function(w){E({type:"SET_ISSUBMITTING",payload:w})},[]),it=de(function(){return E({type:"SUBMIT_ATTEMPT"}),L().then(function(w){var M=w instanceof Error,$=!M&&Object.keys(w).length===0;if($){var A;try{if(A=Qr(),A===void 0)return}catch(I){throw I}return Promise.resolve(A).then(function(I){return v.current&&E({type:"SUBMIT_SUCCESS"}),I}).catch(function(I){if(v.current)throw E({type:"SUBMIT_FAILURE"}),I})}else if(v.current&&(E({type:"SUBMIT_FAILURE"}),M))throw w})}),Zr=de(function(w){w&&w.preventDefault&&be(w.preventDefault)&&w.preventDefault(),w&&w.stopPropagation&&be(w.stopPropagation)&&w.stopPropagation(),it().catch(function(M){console.warn("Warning: An unhandled error was caught from submitForm()",M)})}),an={resetForm:K,validateForm:L,validateField:ne,setErrors:ue,setFieldError:Be,setFieldTouched:ee,setFieldValue:pe,setStatus:Mt,setSubmitting:Vn,setTouched:J,setValues:rt,setFormikState:Pe,submitForm:it},Qr=de(function(){return l(C.values,an)}),Jr=de(function(w){w&&w.preventDefault&&be(w.preventDefault)&&w.preventDefault(),w&&w.stopPropagation&&be(w.stopPropagation)&&w.stopPropagation(),K()}),zn=P.useCallback(function(w){return{value:ce(C.values,w),error:ce(C.errors,w),touched:!!ce(C.touched,w),initialValue:ce(m.current,w),initialTouched:!!ce(g.current,w),initialError:ce(x.current,w)}},[C.errors,C.touched,C.values]),Un=P.useCallback(function(w){return{setValue:function($,A){return pe(w,$,A)},setTouched:function($,A){return ee(w,$,A)},setError:function($){return Be(w,$)}}},[pe,ee,Be]),eo=P.useCallback(function(w){var M=jr(w),$=M?w.name:w,A=ce(C.values,$),I={name:$,value:A,onChange:Oe,onBlur:Ve};if(M){var W=w.type,U=w.value,De=w.as,to=w.multiple;W==="checkbox"?U===void 0?I.checked=!!A:(I.checked=!!(Array.isArray(A)&&~A.indexOf(U)),I.value=U):W==="radio"?(I.checked=A===U,I.value=U):De==="select"&&to&&(I.value=I.value||[],I.multiple=!0)}return I},[Ve,Oe,C.values]),sn=P.useMemo(function(){return!lt(m.current,C.values)},[m.current,C.values]),Ae=P.useMemo(function(){return typeof s<"u"?sn?C.errors&&Object.keys(C.errors).length===0:s!==!1&&be(s)?s(p):s:C.errors&&Object.keys(C.errors).length===0},[s,sn,C.errors,p]),$t=G({},C,{initialValues:m.current,initialErrors:x.current,initialTouched:g.current,initialStatus:y.current,handleBlur:Ve,handleChange:Oe,handleReset:Jr,handleSubmit:Zr,resetForm:K,setErrors:ue,setFormikState:Pe,setFieldTouched:ee,setFieldValue:pe,setFieldError:Be,setStatus:Mt,setSubmitting:Vn,setTouched:J,setValues:rt,submitForm:it,validateForm:L,validateField:ne,isValid:Ae,dirty:sn,unregisterField:Y,registerField:V,getFieldProps:eo,getFieldMeta:zn,getFieldHelpers:Un,validateOnBlur:o,validateOnChange:n,validateOnMount:a});return $t}function Xg(e){var t={};if(e.inner){if(e.inner.length===0)return mt(t,e.path,e.message);for(var o=e.inner,n=Array.isArray(o),r=0,o=n?o:o[Symbol.iterator]();;){var i;if(n){if(r>=o.length)break;i=o[r++]}else{if(r=o.next(),r.done)break;i=r.value}var a=i;ce(t,a.path)||(t=mt(t,a.path,a.message))}}return t}function qg(e,t,n,r){n===void 0&&(n=!1);var o=Zo(e);return t[n?"validateSync":"validate"](o,{abortEarly:!1,context:r||o})}function Zo(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(o){return Array.isArray(o)===!0||Qa(o)?Zo(o):o!==""?o:void 0}):Qa(e[r])?t[r]=Zo(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function Kg(e,t,n){var r=e.slice();return t.forEach(function(i,a){if(typeof r[a]>"u"){var s=n.clone!==!1,u=s&&n.isMergeableObject(i);r[a]=u?Uo(Array.isArray(i)?[]:{},i,n):i}else n.isMergeableObject(i)?r[a]=Uo(e[a],i,n):e.indexOf(i)===-1&&r.push(i)}),r}function Zg(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Qg(e,t,n){if(typeof e=="boolean")return!!t;var r=[],o=!1,i=-1;if(Array.isArray(e))r=e,i=e.indexOf(n),o=i>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!o?r.concat(n):o?r.slice(0,i).concat(r.slice(i+1)):r}var Jg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?P.useLayoutEffect:P.useEffect;function de(e){var t=P.useRef(e);return Jg(function(){t.current=e}),P.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current.apply(void 0,r)},[])}var e1=P.forwardRef(function(e,t){var n=e.action,r=tl(e,["action"]),o=n??"#",i=Ug(),a=i.handleReset,s=i.handleSubmit;return P.createElement("form",G({onSubmit:s,ref:t,onReset:a,action:o},r))});e1.displayName="Form";var ol={exports:{}},t1=ol.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=t1);var St=ol.exports,il={exports:{}},n1=il.exports={version:"2.6.12"};typeof __e=="number"&&(__e=n1);var et=il.exports,r1=function(e){if(typeof e!="function")throw TypeError(e+" is not a function!");return e},o1=r1,al=function(e,t,n){if(o1(e),t===void 0)return e;switch(n){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,i){return e.call(t,r,o,i)}}return function(){return e.apply(t,arguments)}},tt={},Qt=function(e){return typeof e=="object"?e!==null:typeof e=="function"},i1=Qt,In=function(e){if(!i1(e))throw TypeError(e+" is not an object!");return e},Ln=function(e){try{return!!e()}catch{return!0}},nt=!Ln(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),so,Ss;function sl(){if(Ss)return so;Ss=1;var e=Qt,t=St.document,n=e(t)&&e(t.createElement);return so=function(r){return n?t.createElement(r):{}},so}var ul=!nt&&!Ln(function(){return Object.defineProperty(sl()("div"),"a",{get:function(){return 7}}).a!=7}),Xn=Qt,ea=function(e,t){if(!Xn(e))return e;var n,r;if(t&&typeof(n=e.toString)=="function"&&!Xn(r=n.call(e))||typeof(n=e.valueOf)=="function"&&!Xn(r=n.call(e))||!t&&typeof(n=e.toString)=="function"&&!Xn(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},Es=In,a1=ul,s1=ea,u1=Object.defineProperty;tt.f=nt?Object.defineProperty:function(t,n,r){if(Es(t),n=s1(n,!0),Es(r),a1)try{return u1(t,n,r)}catch{}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t};var Ar=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},c1=tt,l1=Ar,Jt=nt?function(e,t,n){return c1.f(e,t,l1(1,n))}:function(e,t,n){return e[t]=n,e},f1={}.hasOwnProperty,Et=function(e,t){return f1.call(e,t)},qn=St,uo=et,Ts=al,p1=Jt,d1=Et,Kn="prototype",Z=function(e,t,n){var r=e&Z.F,o=e&Z.G,i=e&Z.S,a=e&Z.P,s=e&Z.B,u=e&Z.W,c=o?uo:uo[t]||(uo[t]={}),l=c[Kn],d=o?qn:i?qn[t]:(qn[t]||{})[Kn],p,m,x;o&&(n=t);for(p in n)m=!r&&d&&d[p]!==void 0,!(m&&d1(c,p))&&(x=m?d[p]:n[p],c[p]=o&&typeof d[p]!="function"?n[p]:s&&m?Ts(x,qn):u&&d[p]==x?function(g){var y=function(v,b,O){if(this instanceof g){switch(arguments.length){case 0:return new g;case 1:return new g(v);case 2:return new g(v,b)}return new g(v,b,O)}return g.apply(this,arguments)};return y[Kn]=g[Kn],y}(x):a&&typeof x=="function"?Ts(Function.call,x):x,a&&((c.virtual||(c.virtual={}))[p]=x,e&Z.R&&l&&!l[p]&&p1(l,p,x)))};Z.F=1;Z.G=2;Z.S=4;Z.P=8;Z.B=16;Z.W=32;Z.U=64;Z.R=128;var en=Z,h1={}.toString,cl=function(e){return h1.call(e).slice(8,-1)},co,_s;function ll(){if(_s)return co;_s=1;var e=cl;return co=Object("z").propertyIsEnumerable(0)?Object:function(t){return e(t)=="String"?t.split(""):Object(t)},co}var ta=function(e){if(e==null)throw TypeError("Can't call method on  "+e);return e},m1=ll(),v1=ta,tn=function(e){return m1(v1(e))},g1=Math.ceil,y1=Math.floor,na=function(e){return isNaN(e=+e)?0:(e>0?y1:g1)(e)},b1=na,w1=Math.min,x1=function(e){return e>0?w1(b1(e),9007199254740991):0},O1=na,P1=Math.max,C1=Math.min,S1=function(e,t){return e=O1(e),e<0?P1(e+t,0):C1(e,t)},E1=tn,T1=x1,_1=S1,M1=function(e){return function(t,n,r){var o=E1(t),i=T1(o.length),a=_1(r,i),s;if(e&&n!=n){for(;i>a;)if(s=o[a++],s!=s)return!0}else for(;i>a;a++)if((e||a in o)&&o[a]===n)return e||a||0;return!e&&-1}},fl={exports:{}},$1=!0,j1=et,Ms=St,$s="__core-js_shared__",js=Ms[$s]||(Ms[$s]={});(fl.exports=function(e,t){return js[e]||(js[e]=t!==void 0?t:{})})("versions",[]).push({version:j1.version,mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});var ra=fl.exports,A1=0,D1=Math.random(),Dr=function(e){return"Symbol(".concat(e===void 0?"":e,")_",(++A1+D1).toString(36))},As=ra("keys"),k1=Dr,oa=function(e){return As[e]||(As[e]=k1(e))},Ds=Et,N1=tn,R1=M1(!1),I1=oa("IE_PROTO"),pl=function(e,t){var n=N1(e),r=0,o=[],i;for(i in n)i!=I1&&Ds(n,i)&&o.push(i);for(;t.length>r;)Ds(n,i=t[r++])&&(~R1(o,i)||o.push(i));return o},ia="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),L1=pl,W1=ia,kr=Object.keys||function(t){return L1(t,W1)},Nr={};Nr.f=Object.getOwnPropertySymbols;var lo={},ks;function Rr(){return ks||(ks=1,lo.f={}.propertyIsEnumerable),lo}var F1=ta,aa=function(e){return Object(F1(e))},fo,Ns;function B1(){if(Ns)return fo;Ns=1;var e=nt,t=kr,n=Nr,r=Rr(),o=aa,i=ll(),a=Object.assign;return fo=!a||Ln(function(){var s={},u={},c=Symbol(),l="abcdefghijklmnopqrst";return s[c]=7,l.split("").forEach(function(d){u[d]=d}),a({},s)[c]!=7||Object.keys(a({},u)).join("")!=l})?function(u,c){for(var l=o(u),d=arguments.length,p=1,m=n.f,x=r.f;d>p;)for(var g=i(arguments[p++]),y=m?t(g).concat(m(g)):t(g),v=y.length,b=0,O;v>b;)O=y[b++],(!e||x.call(g,O))&&(l[O]=g[O]);return l}:a,fo}var po=en;po(po.S+po.F,"Object",{assign:B1()});var H1=et.Object.assign,V1={default:H1,__esModule:!0},z1=V1,U1=Y1(z1);function Y1(e){return e&&e.__esModule?e:{default:e}}var It=U1.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ir={},G1=na,X1=ta,q1=function(e){return function(t,n){var r=String(X1(t)),o=G1(n),i=r.length,a,s;return o<0||o>=i?e?"":void 0:(a=r.charCodeAt(o),a<55296||a>56319||o+1===i||(s=r.charCodeAt(o+1))<56320||s>57343?e?r.charAt(o):a:e?r.slice(o,o+2):(a-55296<<10)+(s-56320)+65536)}},dl=Jt,sa={},K1=tt,Z1=In,Q1=kr,J1=nt?Object.defineProperties:function(t,n){Z1(t);for(var r=Q1(n),o=r.length,i=0,a;o>i;)K1.f(t,a=r[i++],n[a]);return t},ho,Rs;function ey(){if(Rs)return ho;Rs=1;var e=St.document;return ho=e&&e.documentElement,ho}var ty=In,ny=J1,Is=ia,ry=oa("IE_PROTO"),mo=function(){},Qo="prototype",hr=function(){var e=sl()("iframe"),t=Is.length,n="<",r=">",o;for(e.style.display="none",ey().appendChild(e),e.src="javascript:",o=e.contentWindow.document,o.open(),o.write(n+"script"+r+"document.F=Object"+n+"/script"+r),o.close(),hr=o.F;t--;)delete hr[Qo][Is[t]];return hr()},ua=Object.create||function(t,n){var r;return t!==null?(mo[Qo]=ty(t),r=new mo,mo[Qo]=null,r[ry]=t):r=hr(),n===void 0?r:ny(r,n)},hl={exports:{}},Jo=ra("wks"),oy=Dr,ei=St.Symbol,Ls=typeof ei=="function",iy=hl.exports=function(e){return Jo[e]||(Jo[e]=Ls&&ei[e]||(Ls?ei:oy)("Symbol."+e))};iy.store=Jo;var nn=hl.exports,ay=tt.f,sy=Et,Ws=nn("toStringTag"),ca=function(e,t,n){e&&!sy(e=n?e:e.prototype,Ws)&&ay(e,Ws,{configurable:!0,value:t})},uy=ua,cy=Ar,ly=ca,ml={};Jt(ml,nn("iterator"),function(){return this});var fy=function(e,t,n){e.prototype=uy(ml,{next:cy(1,n)}),ly(e,t+" Iterator")},py=Et,dy=aa,Fs=oa("IE_PROTO"),hy=Object.prototype,my=Object.getPrototypeOf||function(e){return e=dy(e),py(e,Fs)?e[Fs]:typeof e.constructor=="function"&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?hy:null},vo=en,vy=dl,gy=Jt,Bs=sa,yy=fy,by=ca,wy=my,go=nn("iterator"),yo=!([].keys&&"next"in[].keys()),xy="@@iterator",Hs="keys",Zn="values",Oy=function(){return this},vl=function(e,t,n,r,o,i,a){yy(n,t,r);var s=function(O){if(!yo&&O in d)return d[O];switch(O){case Hs:return function(){return new n(this,O)};case Zn:return function(){return new n(this,O)}}return function(){return new n(this,O)}},u=t+" Iterator",c=o==Zn,l=!1,d=e.prototype,p=d[go]||d[xy]||o&&d[o],m=p||s(o),x=o?c?s("entries"):m:void 0,g=t=="Array"&&d.entries||p,y,v,b;if(g&&(b=wy(g.call(new e)),b!==Object.prototype&&b.next&&by(b,u,!0)),c&&p&&p.name!==Zn&&(l=!0,m=function(){return p.call(this)}),a&&(yo||l||!d[go])&&gy(d,go,m),Bs[t]=m,Bs[u]=Oy,o)if(y={values:c?m:s(Zn),keys:i?m:s(Hs),entries:x},a)for(v in y)v in d||vy(d,v,y[v]);else vo(vo.P+vo.F*(yo||l),t,y);return y},Py=q1(!0);vl(String,"String",function(e){this._t=String(e),this._i=0},function(){var e=this._t,t=this._i,n;return t>=e.length?{value:void 0,done:!0}:(n=Py(e,t),this._i+=n.length,{value:n,done:!1})});var Cy=function(e,t){return{value:t,done:!!e}},Qn=Cy,Vs=sa,Sy=tn;vl(Array,"Array",function(e,t){this._t=Sy(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,Qn(1)):t=="keys"?Qn(0,n):t=="values"?Qn(0,e[n]):Qn(0,[n,e[n]])},"values");Vs.Arguments=Vs.Array;var Ey=St,Ty=Jt,zs=sa,Us=nn("toStringTag"),Ys="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");for(var bo=0;bo<Ys.length;bo++){var wo=Ys[bo],Gs=Ey[wo],xo=Gs&&Gs.prototype;xo&&!xo[Us]&&Ty(xo,Us,wo),zs[wo]=zs.Array}var Lr={};Lr.f=nn;var _y=Lr.f("iterator"),My={default:_y,__esModule:!0},gl={exports:{}},yt=Dr("meta"),$y=Qt,la=Et,jy=tt.f,Ay=0,Wr=Object.isExtensible||function(){return!0},Dy=!Ln(function(){return Wr(Object.preventExtensions({}))}),fa=function(e){jy(e,yt,{value:{i:"O"+ ++Ay,w:{}}})},ky=function(e,t){if(!$y(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!la(e,yt)){if(!Wr(e))return"F";if(!t)return"E";fa(e)}return e[yt].i},Ny=function(e,t){if(!la(e,yt)){if(!Wr(e))return!0;if(!t)return!1;fa(e)}return e[yt].w},Ry=function(e){return Dy&&Iy.NEED&&Wr(e)&&!la(e,yt)&&fa(e),e},Iy=gl.exports={KEY:yt,NEED:!1,fastKey:ky,getWeak:Ny,onFreeze:Ry},Ly=gl.exports,Xs=et,Wy=Lr,Fy=tt.f,pa=function(e){var t=Xs.Symbol||(Xs.Symbol={});e.charAt(0)!="_"&&!(e in t)&&Fy(t,e,{value:Wy.f(e)})},By=kr,Hy=Nr,Vy=Rr(),zy=function(e){var t=By(e),n=Hy.f;if(n)for(var r=n(e),o=Vy.f,i=0,a;r.length>i;)o.call(e,a=r[i++])&&t.push(a);return t},Uy=cl,Yy=Array.isArray||function(t){return Uy(t)=="Array"},yl={},da={},Gy=pl,Xy=ia.concat("length","prototype");da.f=Object.getOwnPropertyNames||function(t){return Gy(t,Xy)};var qy=tn,bl=da.f,Ky={}.toString,wl=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Zy=function(e){try{return bl(e)}catch{return wl.slice()}};yl.f=function(t){return wl&&Ky.call(t)=="[object Window]"?Zy(t):bl(qy(t))};var ha={},Qy=Rr(),Jy=Ar,eb=tn,tb=ea,nb=Et,rb=ul,qs=Object.getOwnPropertyDescriptor;ha.f=nt?qs:function(t,n){if(t=eb(t),n=tb(n,!0),rb)try{return qs(t,n)}catch{}if(nb(t,n))return Jy(!Qy.f.call(t,n),t[n])};var Fr=St,X=Et,ti=nt,Q=en,Ks=dl,ob=Ly.KEY,ma=Ln,va=ra,ga=ca,ib=Dr,Wn=nn,ab=Lr,sb=pa,ub=zy,cb=Yy,ni=In,lb=Qt,fb=aa,Br=tn,ya=ea,ri=Ar,_n=ua,xl=yl,Ol=ha,Hr=Nr,Pl=tt,pb=kr,Cl=Ol.f,dt=Pl.f,Sl=xl.f,ae=Fr.Symbol,br=Fr.JSON,Jn=br&&br.stringify,Ge="prototype",re=Wn("_hidden"),Zs=Wn("toPrimitive"),db={}.propertyIsEnumerable,ln=va("symbol-registry"),We=va("symbols"),Fn=va("op-symbols"),me=Object[Ge],rn=typeof ae=="function"&&!!Hr.f,Oo=Fr.QObject,oi=!Oo||!Oo[Ge]||!Oo[Ge].findChild,ii=ti&&ma(function(){return _n(dt({},"a",{get:function(){return dt(this,"a",{value:7}).a}})).a!=7})?function(e,t,n){var r=Cl(me,t);r&&delete me[t],dt(e,t,n),r&&e!==me&&dt(me,t,r)}:dt,Qs=function(e){var t=We[e]=_n(ae[Ge]);return t._k=e,t},ai=rn&&typeof ae.iterator=="symbol"?function(e){return typeof e=="symbol"}:function(e){return e instanceof ae},Vr=function(t,n,r){return t===me&&Vr(Fn,n,r),ni(t),n=ya(n,!0),ni(r),X(We,n)?(r.enumerable?(X(t,re)&&t[re][n]&&(t[re][n]=!1),r=_n(r,{enumerable:ri(0,!1)})):(X(t,re)||dt(t,re,ri(1,{})),t[re][n]=!0),ii(t,n,r)):dt(t,n,r)},El=function(t,n){ni(t);for(var r=ub(n=Br(n)),o=0,i=r.length,a;i>o;)Vr(t,a=r[o++],n[a]);return t},hb=function(t,n){return n===void 0?_n(t):El(_n(t),n)},Js=function(t){var n=db.call(this,t=ya(t,!0));return this===me&&X(We,t)&&!X(Fn,t)?!1:n||!X(this,t)||!X(We,t)||X(this,re)&&this[re][t]?n:!0},Tl=function(t,n){if(t=Br(t),n=ya(n,!0),!(t===me&&X(We,n)&&!X(Fn,n))){var r=Cl(t,n);return r&&X(We,n)&&!(X(t,re)&&t[re][n])&&(r.enumerable=!0),r}},_l=function(t){for(var n=Sl(Br(t)),r=[],o=0,i;n.length>o;)!X(We,i=n[o++])&&i!=re&&i!=ob&&r.push(i);return r},Ml=function(t){for(var n=t===me,r=Sl(n?Fn:Br(t)),o=[],i=0,a;r.length>i;)X(We,a=r[i++])&&(!n||X(me,a))&&o.push(We[a]);return o};rn||(ae=function(){if(this instanceof ae)throw TypeError("Symbol is not a constructor!");var t=ib(arguments.length>0?arguments[0]:void 0),n=function(r){this===me&&n.call(Fn,r),X(this,re)&&X(this[re],t)&&(this[re][t]=!1),ii(this,t,ri(1,r))};return ti&&oi&&ii(me,t,{configurable:!0,set:n}),Qs(t)},Ks(ae[Ge],"toString",function(){return this._k}),Ol.f=Tl,Pl.f=Vr,da.f=xl.f=_l,Rr().f=Js,Hr.f=Ml,ti&&!$1&&Ks(me,"propertyIsEnumerable",Js),ab.f=function(e){return Qs(Wn(e))});Q(Q.G+Q.W+Q.F*!rn,{Symbol:ae});for(var eu="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tu=0;eu.length>tu;)Wn(eu[tu++]);for(var nu=pb(Wn.store),ru=0;nu.length>ru;)sb(nu[ru++]);Q(Q.S+Q.F*!rn,"Symbol",{for:function(e){return X(ln,e+="")?ln[e]:ln[e]=ae(e)},keyFor:function(t){if(!ai(t))throw TypeError(t+" is not a symbol!");for(var n in ln)if(ln[n]===t)return n},useSetter:function(){oi=!0},useSimple:function(){oi=!1}});Q(Q.S+Q.F*!rn,"Object",{create:hb,defineProperty:Vr,defineProperties:El,getOwnPropertyDescriptor:Tl,getOwnPropertyNames:_l,getOwnPropertySymbols:Ml});var mb=ma(function(){Hr.f(1)});Q(Q.S+Q.F*mb,"Object",{getOwnPropertySymbols:function(t){return Hr.f(fb(t))}});br&&Q(Q.S+Q.F*(!rn||ma(function(){var e=ae();return Jn([e])!="[null]"||Jn({a:e})!="{}"||Jn(Object(e))!="{}"})),"JSON",{stringify:function(t){for(var n=[t],r=1,o,i;arguments.length>r;)n.push(arguments[r++]);if(i=o=n[1],!(!lb(o)&&t===void 0||ai(t)))return cb(o)||(o=function(a,s){if(typeof i=="function"&&(s=i.call(this,a,s)),!ai(s))return s}),n[1]=o,Jn.apply(br,n)}});ae[Ge][Zs]||Jt(ae[Ge],Zs,ae[Ge].valueOf);ga(ae,"Symbol");ga(Math,"Math",!0);ga(Fr.JSON,"JSON",!0);pa("asyncIterator");pa("observable");var vb=et.Symbol,gb={default:vb,__esModule:!0};Ir.__esModule=!0;var yb=My,$l=jl(yb),bb=gb,Ye=jl(bb),Po=typeof Ye.default=="function"&&typeof $l.default=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Ye.default=="function"&&e.constructor===Ye.default&&e!==Ye.default.prototype?"symbol":typeof e};function jl(e){return e&&e.__esModule?e:{default:e}}var wb=Ir.default=typeof Ye.default=="function"&&Po($l.default)==="symbol"?function(e){return typeof e>"u"?"undefined":Po(e)}:function(e){return e&&typeof Ye.default=="function"&&e.constructor===Ye.default&&e!==Ye.default.prototype?"symbol":typeof e>"u"?"undefined":Po(e)},xb=Ir,Ob=Pb(xb);function Pb(e){return e&&e.__esModule?e:{default:e}}var qe=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&((typeof t>"u"?"undefined":(0,Ob.default)(t))==="object"||typeof t=="function")?t:e},Co,ou;function Cb(){if(ou)return Co;ou=1;var e=Qt,t=In,n=function(r,o){if(t(r),!e(o)&&o!==null)throw TypeError(o+": can't set as prototype!")};return Co={set:Object.setPrototypeOf||("__proto__"in{}?function(r,o,i){try{i=al(Function.call,ha.f(Object.prototype,"__proto__").set,2),i(r,[]),o=!(r instanceof Array)}catch{o=!0}return function(s,u){return n(s,u),o?s.__proto__=u:i(s,u),s}}({},!1):void 0),check:n},Co}var iu=en;iu(iu.S,"Object",{setPrototypeOf:Cb().set});var Sb=et.Object.setPrototypeOf,Eb={default:Sb,__esModule:!0},au=en;au(au.S,"Object",{create:ua});var Tb=et.Object,_b=function(t,n){return Tb.create(t,n)},Mb={default:_b,__esModule:!0},$b=Eb,su=ba($b),jb=Mb,Ab=ba(jb),Db=Ir,kb=ba(Db);function ba(e){return e&&e.__esModule?e:{default:e}}var _t=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+(typeof t>"u"?"undefined":(0,kb.default)(t)));e.prototype=(0,Ab.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(su.default?(0,su.default)(e,t):e.__proto__=t)};function Al(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Dl(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function kl(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Al.__suppressDeprecationWarning=!0;Dl.__suppressDeprecationWarning=!0;kl.__suppressDeprecationWarning=!0;function wa(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,o=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?o="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),n!==null||r!==null||o!==null){var i=e.displayName||e.name,a=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+a+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Al,t.componentWillReceiveProps=Dl),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=kl;var s=t.componentDidUpdate;t.componentDidUpdate=function(c,l,d){var p=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;s.call(this,c,l,p)}}return e}function si(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}var ui={exports:{}},ci={exports:{}},li={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(){return!1}function r(){return!0}function o(){this.timeStamp=Date.now(),this.target=void 0,this.currentTarget=void 0}o.prototype={isEventObject:1,constructor:o,isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){this.isDefaultPrevented=r},stopPropagation:function(){this.isPropagationStopped=r},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=r,this.stopPropagation()},halt:function(a){a?this.stopImmediatePropagation():this.stopPropagation(),this.preventDefault()}},t.default=o,e.exports=t.default})(li,li.exports);var Nb=li.exports;/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var uu=Object.getOwnPropertySymbols,Rb=Object.prototype.hasOwnProperty,Ib=Object.prototype.propertyIsEnumerable;function Lb(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Wb(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Fb=Wb()?Object.assign:function(e,t){for(var n,r=Lb(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)Rb.call(n,a)&&(r[a]=n[a]);if(uu){o=uu(n);for(var s=0;s<o.length;s++)Ib.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(y){return y&&y.__esModule?y:{default:y}}var r=Nb,o=n(r),i=Fb,a=n(i),s=!0,u=!1,c=["altKey","bubbles","cancelable","ctrlKey","currentTarget","eventPhase","metaKey","shiftKey","target","timeStamp","view","type"];function l(y){return y==null}var d=[{reg:/^key/,props:["char","charCode","key","keyCode","which"],fix:function(v,b){l(v.which)&&(v.which=l(b.charCode)?b.keyCode:b.charCode),v.metaKey===void 0&&(v.metaKey=v.ctrlKey)}},{reg:/^touch/,props:["touches","changedTouches","targetTouches"]},{reg:/^hashchange$/,props:["newURL","oldURL"]},{reg:/^gesturechange$/i,props:["rotation","scale"]},{reg:/^(mousewheel|DOMMouseScroll)$/,props:[],fix:function(v,b){var O=void 0,S=void 0,T=void 0,C=b.wheelDelta,E=b.axis,D=b.wheelDeltaY,k=b.wheelDeltaX,R=b.detail;C&&(T=C/120),R&&(T=0-(R%3===0?R/3:R)),E!==void 0&&(E===v.HORIZONTAL_AXIS?(S=0,O=0-T):E===v.VERTICAL_AXIS&&(O=0,S=T)),D!==void 0&&(S=D/120),k!==void 0&&(O=-1*k/120),!O&&!S&&(S=T),O!==void 0&&(v.deltaX=O),S!==void 0&&(v.deltaY=S),T!==void 0&&(v.delta=T)}},{reg:/^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,props:["buttons","clientX","clientY","button","offsetX","relatedTarget","which","fromElement","toElement","offsetY","pageX","pageY","screenX","screenY"],fix:function(v,b){var O=void 0,S=void 0,T=void 0,C=v.target,E=b.button;return C&&l(v.pageX)&&!l(b.clientX)&&(O=C.ownerDocument||document,S=O.documentElement,T=O.body,v.pageX=b.clientX+(S&&S.scrollLeft||T&&T.scrollLeft||0)-(S&&S.clientLeft||T&&T.clientLeft||0),v.pageY=b.clientY+(S&&S.scrollTop||T&&T.scrollTop||0)-(S&&S.clientTop||T&&T.clientTop||0)),!v.which&&E!==void 0&&(E&1?v.which=1:E&2?v.which=3:E&4?v.which=2:v.which=0),!v.relatedTarget&&v.fromElement&&(v.relatedTarget=v.fromElement===C?v.toElement:v.fromElement),v}}];function p(){return s}function m(){return u}function x(y){var v=y.type,b=typeof y.stopPropagation=="function"||typeof y.cancelBubble=="boolean";o.default.call(this),this.nativeEvent=y;var O=m;"defaultPrevented"in y?O=y.defaultPrevented?p:m:"getPreventDefault"in y?O=y.getPreventDefault()?p:m:"returnValue"in y&&(O=y.returnValue===u?p:m),this.isDefaultPrevented=O;var S=[],T=void 0,C=void 0,E=void 0,D=c.concat();for(d.forEach(function(k){v.match(k.reg)&&(D=D.concat(k.props),k.fix&&S.push(k.fix))}),C=D.length;C;)E=D[--C],this[E]=y[E];for(!this.target&&b&&(this.target=y.srcElement||document),this.target&&this.target.nodeType===3&&(this.target=this.target.parentNode),C=S.length;C;)T=S[--C],T(this,y);this.timeStamp=y.timeStamp||Date.now()}var g=o.default.prototype;(0,a.default)(x.prototype,g,{constructor:x,preventDefault:function(){var v=this.nativeEvent;v.preventDefault?v.preventDefault():v.returnValue=u,g.preventDefault.call(this)},stopPropagation:function(){var v=this.nativeEvent;v.stopPropagation?v.stopPropagation():v.cancelBubble=s,g.stopPropagation.call(this)}}),t.default=x,e.exports=t.default})(ci,ci.exports);var Bb=ci.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;function n(a){return a&&a.__esModule?a:{default:a}}var r=Bb,o=n(r);function i(a,s,u,c){function l(p){var m=new o.default(p);u.call(a,m)}if(a.addEventListener){var d=function(){var p=!1;return typeof c=="object"?p=c.capture||!1:typeof c=="boolean"&&(p=c),a.addEventListener(s,l,c||!1),{v:{remove:function(){a.removeEventListener(s,l,p)}}}}();if(typeof d=="object")return d.v}else if(a.attachEvent)return a.attachEvent("on"+s,l),{remove:function(){a.detachEvent("on"+s,l)}}}e.exports=t.default})(ui,ui.exports);var Hb=ui.exports;const Vb=qt(Hb);function hn(e,t,n,r){var o=we.unstable_batchedUpdates?function(a){we.unstable_batchedUpdates(n,a)}:n;return Vb(e,t,o,r)}function mr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?mr=function(n){return typeof n}:mr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},mr(e)}function zb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ub(e,t,n){return t&&cu(e.prototype,t),n&&cu(e,n),e}function Yb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fi(e,t)}function fi(e,t){return fi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},fi(e,t)}function Gb(e){var t=Kb();return function(){var r=wr(e),o;if(t){var i=wr(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Xb(this,o)}}function Xb(e,t){return t&&(mr(t)==="object"||typeof t=="function")?t:qb(e)}function qb(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Kb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function wr(e){return wr=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},wr(e)}var xa=function(e){Yb(n,e);var t=Gb(n);function n(){var r;zb(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=t.call.apply(t,[this].concat(i)),r.removeContainer=function(){r.container&&(we.unmountComponentAtNode(r.container),r.container.parentNode.removeChild(r.container),r.container=null)},r.renderComponent=function(s,u){var c=r.props,l=c.visible,d=c.getComponent,p=c.forceRender,m=c.getContainer,x=c.parent;(l||x._component||p)&&(r.container||(r.container=m()),we.unstable_renderSubtreeIntoContainer(x,d(s),r.container,function(){u&&u.call(this)}))},r}return Ub(n,[{key:"componentDidMount",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentDidUpdate",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentWillUnmount",value:function(){this.props.autoDestroy&&this.removeContainer()}},{key:"render",value:function(){return this.props.children({renderComponent:this.renderComponent,removeContainer:this.removeContainer})}}]),n}(j.Component);xa.propTypes={autoMount:f.bool,autoDestroy:f.bool,visible:f.bool,forceRender:f.bool,parent:f.any,getComponent:f.func.isRequired,getContainer:f.func.isRequired,children:f.func.isRequired};xa.defaultProps={autoMount:!0,autoDestroy:!0,forceRender:!1};function vr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?vr=function(n){return typeof n}:vr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vr(e)}function Zb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Qb(e,t,n){return t&&lu(e.prototype,t),n&&lu(e,n),e}function Jb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pi(e,t)}function pi(e,t){return pi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},pi(e,t)}function ew(e){var t=rw();return function(){var r=xr(e),o;if(t){var i=xr(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return tw(this,o)}}function tw(e,t){return t&&(vr(t)==="object"||typeof t=="function")?t:nw(e)}function nw(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function xr(e){return xr=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xr(e)}var Nl=function(e){Jb(n,e);var t=ew(n);function n(){return Zb(this,n),t.apply(this,arguments)}return Qb(n,[{key:"componentDidMount",value:function(){this.createContainer()}},{key:"componentDidUpdate",value:function(o){var i=this.props.didUpdate;i&&i(o)}},{key:"componentWillUnmount",value:function(){this.removeContainer()}},{key:"createContainer",value:function(){this._container=this.props.getContainer(),this.forceUpdate()}},{key:"removeContainer",value:function(){this._container&&this._container.parentNode.removeChild(this._container)}},{key:"render",value:function(){return this._container?we.createPortal(this.props.children,this._container):null}}]),n}(j.Component);Nl.propTypes={getContainer:f.func.isRequired,children:f.node.isRequired,didUpdate:f.func};var Rl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(i=o(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var s in i)t.call(i,s)&&i[s]&&(a=o(a,s));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Rl);var ow=Rl.exports;const bt=qt(ow);function iw(e,t,n){return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function aw(e,t,n){var r=e[t]||{};return It({},r,n)}function sw(e,t,n,r){var o=n.points;for(var i in e)if(e.hasOwnProperty(i)&&iw(e[i].points,o,r))return t+"-placement-"+i;return""}function fu(e,t){this[e]=t}var So=en;So(So.S+So.F*!nt,"Object",{defineProperty:tt.f});var uw=et.Object,cw=function(t,n,r){return uw.defineProperty(t,n,r)},Il={default:cw,__esModule:!0},lw=Il,fw=pw(lw);function pw(e){return e&&e.__esModule?e:{default:e}}var Oa=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,fw.default)(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function pu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function du(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pu(Object(n),!0).forEach(function(r){dw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function di(e){"@babel/helpers - typeof";return di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},di(e)}function dw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fn,hw={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function Or(){if(fn!==void 0)return fn;fn="";var e=document.createElement("p").style,t="Transform";for(var n in hw)n+t in e&&(fn=n);return fn}function Ll(){return Or()?"".concat(Or(),"TransitionProperty"):"transitionProperty"}function zr(){return Or()?"".concat(Or(),"Transform"):"transform"}function hu(e,t){var n=Ll();n&&(e.style[n]=t,n!=="transitionProperty"&&(e.style.transitionProperty=t))}function Eo(e,t){var n=zr();n&&(e.style[n]=t,n!=="transform"&&(e.style.transform=t))}function mw(e){return e.style.transitionProperty||e.style[Ll()]}function vw(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("transform")||t.getPropertyValue(zr());if(n&&n!=="none"){var r=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(r[12]||r[4],0),y:parseFloat(r[13]||r[5],0)}}return{x:0,y:0}}var gw=/matrix\((.*)\)/,yw=/matrix3d\((.*)\)/;function bw(e,t){var n=window.getComputedStyle(e,null),r=n.getPropertyValue("transform")||n.getPropertyValue(zr());if(r&&r!=="none"){var o,i=r.match(gw);if(i)i=i[1],o=i.split(",").map(function(s){return parseFloat(s,10)}),o[4]=t.x,o[5]=t.y,Eo(e,"matrix(".concat(o.join(","),")"));else{var a=r.match(yw)[1];o=a.split(",").map(function(s){return parseFloat(s,10)}),o[12]=t.x,o[13]=t.y,Eo(e,"matrix3d(".concat(o.join(","),")"))}}else Eo(e,"translateX(".concat(t.x,"px) translateY(").concat(t.y,"px) translateZ(0)"))}var ww=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,Bn;function mu(e){var t=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=t}function Lt(e,t,n){var r=n;if(di(t)==="object"){for(var o in t)t.hasOwnProperty(o)&&Lt(e,o,t[o]);return}if(typeof r<"u"){typeof r=="number"&&(r="".concat(r,"px")),e.style[t]=r;return}return Bn(e,t)}function xw(e){var t,n,r,o=e.ownerDocument,i=o.body,a=o&&o.documentElement;return t=e.getBoundingClientRect(),n=Math.floor(t.left),r=Math.floor(t.top),n-=a.clientLeft||i.clientLeft||0,r-=a.clientTop||i.clientTop||0,{left:n,top:r}}function Wl(e,t){var n=e["page".concat(t?"Y":"X","Offset")],r="scroll".concat(t?"Top":"Left");if(typeof n!="number"){var o=e.document;n=o.documentElement[r],typeof n!="number"&&(n=o.body[r])}return n}function Fl(e){return Wl(e)}function Bl(e){return Wl(e,!0)}function Mn(e){var t=xw(e),n=e.ownerDocument,r=n.defaultView||n.parentWindow;return t.left+=Fl(r),t.top+=Bl(r),t}function Pa(e){return e!=null&&e==e.window}function Hl(e){return Pa(e)?e.document:e.nodeType===9?e:e.ownerDocument}function Ow(e,t,n){var r=n,o="",i=Hl(e);return r=r||i.defaultView.getComputedStyle(e,null),r&&(o=r.getPropertyValue(t)||r[t]),o}var Pw=new RegExp("^(".concat(ww,")(?!px)[a-z%]+$"),"i"),Cw=/^(top|right|bottom|left)$/,To="currentStyle",_o="runtimeStyle",st="left",Sw="px";function Ew(e,t){var n=e[To]&&e[To][t];if(Pw.test(n)&&!Cw.test(t)){var r=e.style,o=r[st],i=e[_o][st];e[_o][st]=e[To][st],r[st]=t==="fontSize"?"1em":n||0,n=r.pixelLeft+Sw,r[st]=o,e[_o][st]=i}return n===""?"auto":n}typeof window<"u"&&(Bn=window.getComputedStyle?Ow:Ew);function er(e,t){return e==="left"?t.useCssRight?"right":e:t.useCssBottom?"bottom":e}function vu(e){if(e==="left")return"right";if(e==="right")return"left";if(e==="top")return"bottom";if(e==="bottom")return"top"}function gu(e,t,n){Lt(e,"position")==="static"&&(e.style.position="relative");var r=-999,o=-999,i=er("left",n),a=er("top",n),s=vu(i),u=vu(a);i!=="left"&&(r=999),a!=="top"&&(o=999);var c="",l=Mn(e);("left"in t||"top"in t)&&(c=mw(e)||"",hu(e,"none")),"left"in t&&(e.style[s]="",e.style[i]="".concat(r,"px")),"top"in t&&(e.style[u]="",e.style[a]="".concat(o,"px")),mu(e);var d=Mn(e),p={};for(var m in t)if(t.hasOwnProperty(m)){var x=er(m,n),g=m==="left"?r:o,y=l[m]-d[m];x===m?p[x]=g+y:p[x]=g-y}Lt(e,p),mu(e),("left"in t||"top"in t)&&hu(e,c);var v={};for(var b in t)if(t.hasOwnProperty(b)){var O=er(b,n),S=t[b]-l[b];b===O?v[O]=p[O]+S:v[O]=p[O]-S}Lt(e,v)}function Tw(e,t){var n=Mn(e),r=vw(e),o={x:r.x,y:r.y};"left"in t&&(o.x=r.x+t.left-n.left),"top"in t&&(o.y=r.y+t.top-n.top),bw(e,o)}function _w(e,t,n){if(n.ignoreShake){var r=Mn(e),o=r.left.toFixed(0),i=r.top.toFixed(0),a=t.left.toFixed(0),s=t.top.toFixed(0);if(o===a&&i===s)return}n.useCssRight||n.useCssBottom?gu(e,t,n):n.useCssTransform&&zr()in document.body.style?Tw(e,t):gu(e,t,n)}function Ca(e,t){for(var n=0;n<e.length;n++)t(e[n])}function Vl(e){return Bn(e,"boxSizing")==="border-box"}var Mw=["margin","border","padding"],hi=-1,$w=2,mi=1,jw=0;function Aw(e,t,n){var r={},o=e.style,i;for(i in t)t.hasOwnProperty(i)&&(r[i]=o[i],o[i]=t[i]);n.call(e);for(i in t)t.hasOwnProperty(i)&&(o[i]=r[i])}function mn(e,t,n){var r=0,o,i,a;for(i=0;i<t.length;i++)if(o=t[i],o)for(a=0;a<n.length;a++){var s=void 0;o==="border"?s="".concat(o).concat(n[a],"Width"):s=o+n[a],r+=parseFloat(Bn(e,s))||0}return r}var Te={getParent:function(t){var n=t;do n.nodeType===11&&n.host?n=n.host:n=n.parentNode;while(n&&n.nodeType!==1&&n.nodeType!==9);return n}};Ca(["Width","Height"],function(e){Te["doc".concat(e)]=function(t){var n=t.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],Te["viewport".concat(e)](n))},Te["viewport".concat(e)]=function(t){var n="client".concat(e),r=t.document,o=r.body,i=r.documentElement,a=i[n];return r.compatMode==="CSS1Compat"&&a||o&&o[n]||a}});function yu(e,t,n){var r=n;if(Pa(e))return t==="width"?Te.viewportWidth(e):Te.viewportHeight(e);if(e.nodeType===9)return t==="width"?Te.docWidth(e):Te.docHeight(e);var o=t==="width"?["Left","Right"]:["Top","Bottom"],i=Math.floor(t==="width"?e.getBoundingClientRect().width:e.getBoundingClientRect().height),a=Vl(e),s=0;(i==null||i<=0)&&(i=void 0,s=Bn(e,t),(s==null||Number(s)<0)&&(s=e.style[t]||0),s=Math.floor(parseFloat(s))||0),r===void 0&&(r=a?mi:hi);var u=i!==void 0||a,c=i||s;return r===hi?u?c-mn(e,["border","padding"],o):s:u?r===mi?c:c+(r===$w?-mn(e,["border"],o):mn(e,["margin"],o)):s+mn(e,Mw.slice(r),o)}var Dw={position:"absolute",visibility:"hidden",display:"block"};function bu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,o=t[0];return o.offsetWidth!==0?r=yu.apply(void 0,t):Aw(o,Dw,function(){r=yu.apply(void 0,t)}),r}Ca(["width","height"],function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);Te["outer".concat(t)]=function(r,o){return r&&bu(r,e,o?jw:mi)};var n=e==="width"?["Left","Right"]:["Top","Bottom"];Te[e]=function(r,o){var i=o;if(i!==void 0){if(r){var a=Vl(r);return a&&(i+=mn(r,["padding","border"],n)),Lt(r,e,i)}return}return r&&bu(r,e,hi)}});function zl(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var N={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var n=t.ownerDocument||t;return n.defaultView||n.parentWindow},getDocument:Hl,offset:function(t,n,r){if(typeof n<"u")_w(t,n,r||{});else return Mn(t)},isWindow:Pa,each:Ca,css:Lt,clone:function(t){var n,r={};for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);var o=t.overflow;if(o)for(n in t)t.hasOwnProperty(n)&&(r.overflow[n]=t.overflow[n]);return r},mix:zl,getWindowScrollLeft:function(t){return Fl(t)},getWindowScrollTop:function(t){return Bl(t)},merge:function(){for(var t={},n=0;n<arguments.length;n++)N.mix(t,n<0||arguments.length<=n?void 0:arguments[n]);return t},viewportWidth:0,viewportHeight:0};zl(N,Te);var Mo=N.getParent;function vi(e){if(N.isWindow(e)||e.nodeType===9)return null;var t=N.getDocument(e),n=t.body,r,o=N.css(e,"position"),i=o==="fixed"||o==="absolute";if(!i)return e.nodeName.toLowerCase()==="html"?null:Mo(e);for(r=Mo(e);r&&r!==n&&r.nodeType!==9;r=Mo(r))if(o=N.css(r,"position"),o!=="static")return r;return null}var wu=N.getParent;function kw(e){if(N.isWindow(e)||e.nodeType===9)return!1;var t=N.getDocument(e),n=t.body,r=null;for(r=wu(e);r&&r!==n&&r!==t;r=wu(r)){var o=N.css(r,"position");if(o==="fixed")return!0}return!1}function Sa(e,t){for(var n={left:0,right:1/0,top:0,bottom:1/0},r=vi(e),o=N.getDocument(e),i=o.defaultView||o.parentWindow,a=o.body,s=o.documentElement;r;){if((navigator.userAgent.indexOf("MSIE")===-1||r.clientWidth!==0)&&r!==a&&r!==s&&N.css(r,"overflow")!=="visible"){var u=N.offset(r);u.left+=r.clientLeft,u.top+=r.clientTop,n.top=Math.max(n.top,u.top),n.right=Math.min(n.right,u.left+r.clientWidth),n.bottom=Math.min(n.bottom,u.top+r.clientHeight),n.left=Math.max(n.left,u.left)}else if(r===a||r===s)break;r=vi(r)}var c=null;if(!N.isWindow(e)&&e.nodeType!==9){c=e.style.position;var l=N.css(e,"position");l==="absolute"&&(e.style.position="fixed")}var d=N.getWindowScrollLeft(i),p=N.getWindowScrollTop(i),m=N.viewportWidth(i),x=N.viewportHeight(i),g=s.scrollWidth,y=s.scrollHeight,v=window.getComputedStyle(a);if(v.overflowX==="hidden"&&(g=i.innerWidth),v.overflowY==="hidden"&&(y=i.innerHeight),e.style&&(e.style.position=c),t||kw(e))n.left=Math.max(n.left,d),n.top=Math.max(n.top,p),n.right=Math.min(n.right,d+m),n.bottom=Math.min(n.bottom,p+x);else{var b=Math.max(g,d+m);n.right=Math.min(n.right,b);var O=Math.max(y,p+x);n.bottom=Math.min(n.bottom,O)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function Nw(e,t,n,r){var o=N.clone(e),i={width:t.width,height:t.height};return r.adjustX&&o.left<n.left&&(o.left=n.left),r.resizeWidth&&o.left>=n.left&&o.left+i.width>n.right&&(i.width-=o.left+i.width-n.right),r.adjustX&&o.left+i.width>n.right&&(o.left=Math.max(n.right-i.width,n.left)),r.adjustY&&o.top<n.top&&(o.top=n.top),r.resizeHeight&&o.top>=n.top&&o.top+i.height>n.bottom&&(i.height-=o.top+i.height-n.bottom),r.adjustY&&o.top+i.height>n.bottom&&(o.top=Math.max(n.bottom-i.height,n.top)),N.mix(o,i)}function Ea(e){var t,n,r;if(!N.isWindow(e)&&e.nodeType!==9)t=N.offset(e),n=N.outerWidth(e),r=N.outerHeight(e);else{var o=N.getWindow(e);t={left:N.getWindowScrollLeft(o),top:N.getWindowScrollTop(o)},n=N.viewportWidth(o),r=N.viewportHeight(o)}return t.width=n,t.height=r,t}function xu(e,t){var n=t.charAt(0),r=t.charAt(1),o=e.width,i=e.height,a=e.left,s=e.top;return n==="c"?s+=i/2:n==="b"&&(s+=i),r==="c"?a+=o/2:r==="r"&&(a+=o),{left:a,top:s}}function tr(e,t,n,r,o){var i=xu(t,n[1]),a=xu(e,n[0]),s=[a.left-i.left,a.top-i.top];return{left:Math.round(e.left-s[0]+r[0]-o[0]),top:Math.round(e.top-s[1]+r[1]-o[1])}}function Ou(e,t,n){return e.left<n.left||e.left+t.width>n.right}function Pu(e,t,n){return e.top<n.top||e.top+t.height>n.bottom}function Rw(e,t,n){return e.left>n.right||e.left+t.width<n.left}function Iw(e,t,n){return e.top>n.bottom||e.top+t.height<n.top}function nr(e,t,n){var r=[];return N.each(e,function(o){r.push(o.replace(t,function(i){return n[i]}))}),r}function rr(e,t){return e[t]=-e[t],e}function Cu(e,t){var n;return/%$/.test(e)?n=parseInt(e.substring(0,e.length-1),10)/100*t:n=parseInt(e,10),n||0}function Su(e,t){e[0]=Cu(e[0],t.width),e[1]=Cu(e[1],t.height)}function Ul(e,t,n,r){var o=n.points,i=n.offset||[0,0],a=n.targetOffset||[0,0],s=n.overflow,u=n.source||e;i=[].concat(i),a=[].concat(a),s=s||{};var c={},l=0,d=!!(s&&s.alwaysByViewport),p=Sa(u,d),m=Ea(u);Su(i,m),Su(a,t);var x=tr(m,t,o,i,a),g=N.merge(m,x);if(p&&(s.adjustX||s.adjustY)&&r){if(s.adjustX&&Ou(x,m,p)){var y=nr(o,/[lr]/gi,{l:"r",r:"l"}),v=rr(i,0),b=rr(a,0),O=tr(m,t,y,v,b);Rw(O,m,p)||(l=1,o=y,i=v,a=b)}if(s.adjustY&&Pu(x,m,p)){var S=nr(o,/[tb]/gi,{t:"b",b:"t"}),T=rr(i,1),C=rr(a,1),E=tr(m,t,S,T,C);Iw(E,m,p)||(l=1,o=S,i=T,a=C)}l&&(x=tr(m,t,o,i,a),N.mix(g,x));var D=Ou(x,m,p),k=Pu(x,m,p);if(D||k){var R=o;D&&(R=nr(o,/[lr]/gi,{l:"r",r:"l"})),k&&(R=nr(o,/[tb]/gi,{t:"b",b:"t"})),o=R,i=n.offset||[0,0],a=n.targetOffset||[0,0]}c.adjustX=s.adjustX&&D,c.adjustY=s.adjustY&&k,(c.adjustX||c.adjustY)&&(g=Nw(x,m,p,c))}return g.width!==m.width&&N.css(u,"width",N.width(u)+g.width-m.width),g.height!==m.height&&N.css(u,"height",N.height(u)+g.height-m.height),N.offset(u,{left:g.left,top:g.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:o,offset:i,targetOffset:a,overflow:c}}function Lw(e,t){var n=Sa(e,t),r=Ea(e);return!n||r.left+r.width<=n.left||r.top+r.height<=n.top||r.left>=n.right||r.top>=n.bottom}function Ta(e,t,n){var r=n.target||t,o=Ea(r),i=!Lw(r,n.overflow&&n.overflow.alwaysByViewport);return Ul(e,o,n,i)}Ta.__getOffsetParent=vi;Ta.__getVisibleRectForElement=Sa;function Ww(e,t,n){var r,o,i=N.getDocument(e),a=i.defaultView||i.parentWindow,s=N.getWindowScrollLeft(a),u=N.getWindowScrollTop(a),c=N.viewportWidth(a),l=N.viewportHeight(a);"pageX"in t?r=t.pageX:r=s+t.clientX,"pageY"in t?o=t.pageY:o=u+t.clientY;var d={left:r,top:o,width:0,height:0},p=r>=0&&r<=s+c&&o>=0&&o<=u+l,m=[n.points[0],"cc"];return Ul(e,d,du(du({},n),{},{points:m}),p)}function Fw(e,t){var n=void 0;function r(){n&&(clearTimeout(n),n=null)}function o(){r(),n=setTimeout(e,t)}return o.clear=r,o}function Bw(e,t){return e===t?!0:!e||!t?!1:"pageX"in t&&"pageY"in t?e.pageX===t.pageX&&e.pageY===t.pageY:"clientX"in t&&"clientY"in t?e.clientX===t.clientX&&e.clientY===t.clientY:!1}function Eu(e){return e&&typeof e=="object"&&e.window===e}function Tu(e,t){var n=Math.floor(e),r=Math.floor(t);return Math.abs(n-r)<=1}function Hw(e,t){e!==document.activeElement&&si(t,e)&&e.focus()}function $o(e){return typeof e!="function"||!e?null:e()}function jo(e){return typeof e!="object"||!e?null:e}var Pr=function(e){_t(t,e);function t(){var n,r,o,i;Tt(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return i=(r=(o=qe(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),o),o.forceAlign=function(){var c=o.props,l=c.disabled,d=c.target,p=c.align,m=c.onAlign;if(!l&&d){var x=we.findDOMNode(o),g=void 0,y=$o(d),v=jo(d),b=document.activeElement;y?g=Ta(x,y,p):v&&(g=Ww(x,v,p)),Hw(b,x),m&&m(x,g)}},r),qe(o,i)}return Oa(t,[{key:"componentDidMount",value:function(){var r=this.props;this.forceAlign(),!r.disabled&&r.monitorWindowResize&&this.startMonitorWindowResize()}},{key:"componentDidUpdate",value:function(r){var o=!1,i=this.props;if(!i.disabled){var a=we.findDOMNode(this),s=a?a.getBoundingClientRect():null;if(r.disabled)o=!0;else{var u=$o(r.target),c=$o(i.target),l=jo(r.target),d=jo(i.target);Eu(u)&&Eu(c)?o=!1:(u!==c||u&&!c&&d||l&&d&&c||d&&!Bw(l,d))&&(o=!0);var p=this.sourceRect||{};!o&&a&&(!Tu(p.width,s.width)||!Tu(p.height,s.height))&&(o=!0)}this.sourceRect=s}o&&this.forceAlign(),i.monitorWindowResize&&!i.disabled?this.startMonitorWindowResize():this.stopMonitorWindowResize()}},{key:"componentWillUnmount",value:function(){this.stopMonitorWindowResize()}},{key:"startMonitorWindowResize",value:function(){this.resizeHandler||(this.bufferMonitor=Fw(this.forceAlign,this.props.monitorBufferTime),this.resizeHandler=hn(window,"resize",this.bufferMonitor))}},{key:"stopMonitorWindowResize",value:function(){this.resizeHandler&&(this.bufferMonitor.clear(),this.resizeHandler.remove(),this.resizeHandler=null)}},{key:"render",value:function(){var r=this,o=this.props,i=o.childrenProps,a=o.children,s=j.Children.only(a);if(i){var u={},c=Object.keys(i);return c.forEach(function(l){u[l]=r.props[i[l]]}),j.cloneElement(s,u)}return s}}]),t}(P.Component);Pr.propTypes={childrenProps:f.object,align:f.object.isRequired,target:f.oneOfType([f.func,f.shape({clientX:f.number,clientY:f.number,pageX:f.number,pageY:f.number})]),onAlign:f.func,monitorBufferTime:f.number,monitorWindowResize:f.bool,disabled:f.bool,children:f.any};Pr.defaultProps={target:function(){return window},monitorBufferTime:50,monitorWindowResize:!1,disabled:!1};var Vw=Il,zw=Uw(Vw);function Uw(e){return e&&e.__esModule?e:{default:e}}var Yw=function(e,t,n){return t in e?(0,zw.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Gw=function(t){var n=t.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");return typeof n.componentWillReceiveProps!="function"||!j.Profiler||(n.UNSAFE_componentWillReceiveProps=n.componentWillReceiveProps,delete n.componentWillReceiveProps),t};function xn(e){var t=[];return j.Children.forEach(e,function(n){t.push(n)}),t}function At(e,t){var n=null;return e&&e.forEach(function(r){n||r&&r.key===t&&(n=r)}),n}function Ao(e,t,n){var r=null;return e&&e.forEach(function(o){if(o&&o.key===t&&o.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=o}}),r}function Xw(e,t,n){var r=e.length===t.length;return r&&e.forEach(function(o,i){var a=t[i];o&&a&&(o&&!a||!o&&a||o.key!==a.key||n&&o.props[n]!==a.props[n])&&(r=!1)}),r}function qw(e,t){var n=[],r={},o=[];return e.forEach(function(i){i&&At(t,i.key)?o.length&&(r[i.key]=o,o=[]):o.push(i)}),t.forEach(function(i){i&&Object.prototype.hasOwnProperty.call(r,i.key)&&(n=n.concat(r[i.key])),n.push(i)}),n=n.concat(o),n}var Do={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},ko={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},Dt=[],kt=[];function Kw(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||(delete Do.animationstart.animation,delete ko.animationend.animation),"TransitionEvent"in window||(delete Do.transitionstart.transition,delete ko.transitionend.transition);function n(r,o){for(var i in r)if(r.hasOwnProperty(i)){var a=r[i];for(var s in a)if(s in t){o.push(a[s]);break}}}n(Do,Dt),n(ko,kt)}typeof window<"u"&&typeof document<"u"&&Kw();function _u(e,t,n){e.addEventListener(t,n,!1)}function Mu(e,t,n){e.removeEventListener(t,n,!1)}var $n={startEvents:Dt,addStartEventListener:function(t,n){if(Dt.length===0){window.setTimeout(n,0);return}Dt.forEach(function(r){_u(t,r,n)})},removeStartEventListener:function(t,n){Dt.length!==0&&Dt.forEach(function(r){Mu(t,r,n)})},endEvents:kt,addEndEventListener:function(t,n){if(kt.length===0){window.setTimeout(n,0);return}kt.forEach(function(r){_u(t,r,n)})},removeEndEventListener:function(t,n){kt.length!==0&&kt.forEach(function(r){Mu(t,r,n)})}},No,$u;function ju(){return $u||($u=1,No=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}),No}try{var Ur=ju()}catch{var Ur=ju()}var Zw=/\s+/,Qw=Object.prototype.toString,Jw=function(e){return new Ke(e)};function Ke(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}Ke.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array(),n=Ur(t,e);return~n||t.push(e),this.el.className=t.join(" "),this};Ke.prototype.remove=function(e){if(Qw.call(e)=="[object RegExp]")return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),n=Ur(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this};Ke.prototype.removeMatching=function(e){for(var t=this.array(),n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this};Ke.prototype.toggle=function(e,t){return this.list?(typeof t<"u"?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(typeof t<"u"?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)};Ke.prototype.array=function(){var e=this.el.getAttribute("class")||"",t=e.replace(/^\s+|\s+$/g,""),n=t.split(Zw);return n[0]===""&&n.shift(),n};Ke.prototype.has=Ke.prototype.contains=function(e){return this.list?this.list.contains(e):!!~Ur(this.array(),e)};const ex=qt(Jw);var _a=$n.endEvents.length!==0,tx=["Webkit","Moz","O","ms"],Au=["-webkit-","-moz-","-o-","ms-",""];function or(e,t){for(var n=window.getComputedStyle(e,null),r="",o=0;o<Au.length&&(r=n.getPropertyValue(Au[o]+t),!r);o++);return r}function Yl(e){if(_a){var t=parseFloat(or(e,"transition-delay"))||0,n=parseFloat(or(e,"transition-duration"))||0,r=parseFloat(or(e,"animation-delay"))||0,o=parseFloat(or(e,"animation-duration"))||0,i=Math.max(n+t,o+r);e.rcEndAnimTimeout=setTimeout(function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()},i*1e3+200)}}function Gl(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}var Yr=function(t,n,r){var o=(typeof n>"u"?"undefined":wb(n))==="object",i=o?n.name:n,a=o?n.active:n+"-active",s=r,u=void 0,c=void 0,l=ex(t);return r&&Object.prototype.toString.call(r)==="[object Object]"&&(s=r.end,u=r.start,c=r.active),t.rcEndListener&&t.rcEndListener(),t.rcEndListener=function(d){d&&d.target!==t||(t.rcAnimTimeout&&(clearTimeout(t.rcAnimTimeout),t.rcAnimTimeout=null),Gl(t),l.remove(i),l.remove(a),$n.removeEndEventListener(t,t.rcEndListener),t.rcEndListener=null,s&&s())},$n.addEndEventListener(t,t.rcEndListener),u&&u(),l.add(i),t.rcAnimTimeout=setTimeout(function(){t.rcAnimTimeout=null,l.add(a),c&&setTimeout(c,0),Yl(t)},30),{stop:function(){t.rcEndListener&&t.rcEndListener()}}};Yr.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(r){r&&r.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),Gl(e),$n.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},$n.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout(function(){for(var r in t)t.hasOwnProperty(r)&&(e.style[r]=t[r]);e.rcAnimTimeout=null,Yl(e)},0)};Yr.setTransition=function(e,t,n){var r=t,o=n;n===void 0&&(o=r,r=""),r=r||"",tx.forEach(function(i){e.style[i+"Transition"+r]=o})};Yr.isCssAnimationSupported=_a;var Wt={isAppearSupported:function(t){return t.transitionName&&t.transitionAppear||t.animation.appear},isEnterSupported:function(t){return t.transitionName&&t.transitionEnter||t.animation.enter},isLeaveSupported:function(t){return t.transitionName&&t.transitionLeave||t.animation.leave},allowAppearCallback:function(t){return t.transitionAppear||t.animation.appear},allowEnterCallback:function(t){return t.transitionEnter||t.animation.enter},allowLeaveCallback:function(t){return t.transitionLeave||t.animation.leave}},nx={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},Xl=function(e){_t(t,e);function t(){return Tt(this,t),qe(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Oa(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(r){Wt.isEnterSupported(this.props)?this.transition("enter",r):r()}},{key:"componentWillAppear",value:function(r){Wt.isAppearSupported(this.props)?this.transition("appear",r):r()}},{key:"componentWillLeave",value:function(r){Wt.isLeaveSupported(this.props)?this.transition("leave",r):r()}},{key:"transition",value:function(r,o){var i=this,a=we.findDOMNode(this),s=this.props,u=s.transitionName,c=typeof u=="object";this.stop();var l=function(){i.stopper=null,o()};if((_a||!s.animation[r])&&u&&s[nx[r]]){var d=c?u[r]:u+"-"+r,p=d+"-active";c&&u[r+"Active"]&&(p=u[r+"Active"]),this.stopper=Yr(a,{name:d,active:p},l)}else this.stopper=s.animation[r](a,l)}},{key:"stop",value:function(){var r=this.stopper;r&&(this.stopper=null,r.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(j.Component);Xl.propTypes={children:f.any,animation:f.any,transitionName:f.any};var rx="rc_animate_"+Date.now();function On(e){var t=e.children;return j.isValidElement(t)&&!t.key?j.cloneElement(t,{key:rx}):t}function ir(){}var Gr=function(e){_t(t,e);function t(n){Tt(this,t);var r=qe(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return ox.call(r),r.currentlyAnimatingKeys={},r.keysToEnter=[],r.keysToLeave=[],r.state={children:xn(On(n))},r.childrenRefs={},r}return Oa(t,[{key:"componentDidMount",value:function(){var r=this,o=this.props.showProp,i=this.state.children;o&&(i=i.filter(function(a){return!!a.props[o]})),i.forEach(function(a){a&&r.performAppear(a.key)})}},{key:"componentWillReceiveProps",value:function(r){var o=this;this.nextProps=r;var i=xn(On(r)),a=this.props;a.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach(function(d){o.stop(d)});var s=a.showProp,u=this.currentlyAnimatingKeys,c=a.exclusive?xn(On(a)):this.state.children,l=[];s?(c.forEach(function(d){var p=d&&At(i,d.key),m=void 0;(!p||!p.props[s])&&d.props[s]?m=j.cloneElement(p||d,Yw({},s,!0)):m=p,m&&l.push(m)}),i.forEach(function(d){(!d||!At(c,d.key))&&l.push(d)})):l=qw(c,i),this.setState({children:l}),i.forEach(function(d){var p=d&&d.key;if(!(d&&u[p])){var m=d&&At(c,p);if(s){var x=d.props[s];if(m){var g=Ao(c,p,s);!g&&x&&o.keysToEnter.push(p)}else x&&o.keysToEnter.push(p)}else m||o.keysToEnter.push(p)}}),c.forEach(function(d){var p=d&&d.key;if(!(d&&u[p])){var m=d&&At(i,p);if(s){var x=d.props[s];if(m){var g=Ao(i,p,s);!g&&x&&o.keysToLeave.push(p)}else x&&o.keysToLeave.push(p)}else m||o.keysToLeave.push(p)}})}},{key:"componentDidUpdate",value:function(){var r=this.keysToEnter;this.keysToEnter=[],r.forEach(this.performEnter);var o=this.keysToLeave;this.keysToLeave=[],o.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(r,o){var i=this.props.showProp;return i?Ao(r,o,i):At(r,o)}},{key:"stop",value:function(r){delete this.currentlyAnimatingKeys[r];var o=this.childrenRefs[r];o&&o.stop()}},{key:"render",value:function(){var r=this,o=this.props;this.nextProps=o;var i=this.state.children,a=null;i&&(a=i.map(function(c){if(c==null)return c;if(!c.key)throw new Error("must set key for <rc-animate> children");return j.createElement(Xl,{key:c.key,ref:function(d){r.childrenRefs[c.key]=d},animation:o.animation,transitionName:o.transitionName,transitionEnter:o.transitionEnter,transitionAppear:o.transitionAppear,transitionLeave:o.transitionLeave},c)}));var s=o.component;if(s){var u=o;return typeof s=="string"&&(u=It({className:o.className,style:o.style},o.componentProps)),j.createElement(s,u,a)}return a[0]||null}}]),t}(j.Component);Gr.isAnimate=!0;Gr.propTypes={className:f.string,style:f.object,component:f.any,componentProps:f.object,animation:f.object,transitionName:f.oneOfType([f.string,f.object]),transitionEnter:f.bool,transitionAppear:f.bool,exclusive:f.bool,transitionLeave:f.bool,onEnd:f.func,onEnter:f.func,onLeave:f.func,onAppear:f.func,showProp:f.string,children:f.node};Gr.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:ir,onEnter:ir,onLeave:ir,onAppear:ir};var ox=function(){var t=this;this.performEnter=function(n){t.childrenRefs[n]&&(t.currentlyAnimatingKeys[n]=!0,t.childrenRefs[n].componentWillEnter(t.handleDoneAdding.bind(t,n,"enter")))},this.performAppear=function(n){t.childrenRefs[n]&&(t.currentlyAnimatingKeys[n]=!0,t.childrenRefs[n].componentWillAppear(t.handleDoneAdding.bind(t,n,"appear")))},this.handleDoneAdding=function(n,r){var o=t.props;if(delete t.currentlyAnimatingKeys[n],!(o.exclusive&&o!==t.nextProps)){var i=xn(On(o));t.isValidChildByKey(i,n)?r==="appear"?Wt.allowAppearCallback(o)&&(o.onAppear(n),o.onEnd(n,!0)):Wt.allowEnterCallback(o)&&(o.onEnter(n),o.onEnd(n,!0)):t.performLeave(n)}},this.performLeave=function(n){t.childrenRefs[n]&&(t.currentlyAnimatingKeys[n]=!0,t.childrenRefs[n].componentWillLeave(t.handleDoneLeaving.bind(t,n)))},this.handleDoneLeaving=function(n){var r=t.props;if(delete t.currentlyAnimatingKeys[n],!(r.exclusive&&r!==t.nextProps)){var o=xn(On(r));if(t.isValidChildByKey(o,n))t.performEnter(n);else{var i=function(){Wt.allowLeaveCallback(r)&&(r.onLeave(n),r.onEnd(n,!1))};Xw(t.state.children,o,r.showProp)?i():t.setState({children:o},i)}}}};const Ro=Gw(Gr);var ix=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Ma=function(e){_t(t,e);function t(){return Tt(this,t),qe(this,e.apply(this,arguments))}return t.prototype.shouldComponentUpdate=function(r){return r.hiddenClassName||r.visible},t.prototype.render=function(){var r=this.props,o=r.hiddenClassName,i=r.visible,a=ix(r,["hiddenClassName","visible"]);return o||j.Children.count(a.children)>1?(!i&&o&&(a.className+=" "+o),j.createElement("div",a)):j.Children.only(a.children)},t}(P.Component);Ma.propTypes={children:f.any,className:f.string,visible:f.bool,hiddenClassName:f.string};var gi=function(e){_t(t,e);function t(){return Tt(this,t),qe(this,e.apply(this,arguments))}return t.prototype.render=function(){var r=this.props,o=r.className;return r.visible||(o+=" "+r.hiddenClassName),j.createElement("div",{className:o,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,onMouseDown:r.onMouseDown,onTouchStart:r.onTouchStart,style:r.style},j.createElement(Ma,{className:r.prefixCls+"-content",visible:r.visible},r.children))},t}(P.Component);gi.propTypes={hiddenClassName:f.string,className:f.string,prefixCls:f.string,onMouseEnter:f.func,onMouseLeave:f.func,onMouseDown:f.func,onTouchStart:f.func,children:f.any};var ql=function(e){_t(t,e);function t(n){Tt(this,t);var r=qe(this,e.call(this,n));return ax.call(r),r.state={stretchChecked:!1,targetWidth:void 0,targetHeight:void 0},r.savePopupRef=fu.bind(r,"popupInstance"),r.saveAlignRef=fu.bind(r,"alignInstance"),r}return t.prototype.componentDidMount=function(){this.rootNode=this.getPopupDomNode(),this.setStretchSize()},t.prototype.componentDidUpdate=function(){this.setStretchSize()},t.prototype.getPopupDomNode=function(){return we.findDOMNode(this.popupInstance)},t.prototype.getMaskTransitionName=function(){var r=this.props,o=r.maskTransitionName,i=r.maskAnimation;return!o&&i&&(o=r.prefixCls+"-"+i),o},t.prototype.getTransitionName=function(){var r=this.props,o=r.transitionName;return!o&&r.animation&&(o=r.prefixCls+"-"+r.animation),o},t.prototype.getClassName=function(r){return this.props.prefixCls+" "+this.props.className+" "+r},t.prototype.getPopupElement=function(){var r=this,o=this.savePopupRef,i=this.state,a=i.stretchChecked,s=i.targetHeight,u=i.targetWidth,c=this.props,l=c.align,d=c.visible,p=c.prefixCls,m=c.style,x=c.getClassNameFromAlign,g=c.destroyPopupOnHide,y=c.stretch,v=c.children,b=c.onMouseEnter,O=c.onMouseLeave,S=c.onMouseDown,T=c.onTouchStart,C=this.getClassName(this.currentAlignClassName||x(l)),E=p+"-hidden";d||(this.currentAlignClassName=null);var D={};y&&(y.indexOf("height")!==-1?D.height=s:y.indexOf("minHeight")!==-1&&(D.minHeight=s),y.indexOf("width")!==-1?D.width=u:y.indexOf("minWidth")!==-1&&(D.minWidth=u),a||(D.visibility="hidden",setTimeout(function(){r.alignInstance&&r.alignInstance.forceAlign()},0)));var k=It({},D,m,this.getZIndexStyle()),R={className:C,prefixCls:p,ref:o,onMouseEnter:b,onMouseLeave:O,onMouseDown:S,onTouchStart:T,style:k};return g?j.createElement(Ro,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName()},d?j.createElement(Pr,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,align:l,onAlign:this.onAlign},j.createElement(gi,It({visible:!0},R),v)):null):j.createElement(Ro,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName(),showProp:"xVisible"},j.createElement(Pr,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,xVisible:d,childrenProps:{visible:"xVisible"},disabled:!d,align:l,onAlign:this.onAlign},j.createElement(gi,It({hiddenClassName:E},R),v)))},t.prototype.getZIndexStyle=function(){var r={},o=this.props;return o.zIndex!==void 0&&(r.zIndex=o.zIndex),r},t.prototype.getMaskElement=function(){var r=this.props,o=void 0;if(r.mask){var i=this.getMaskTransitionName();o=j.createElement(Ma,{style:this.getZIndexStyle(),key:"mask",className:r.prefixCls+"-mask",hiddenClassName:r.prefixCls+"-mask-hidden",visible:r.visible}),i&&(o=j.createElement(Ro,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:i},o))}return o},t.prototype.render=function(){return j.createElement("div",null,this.getMaskElement(),this.getPopupElement())},t}(P.Component);ql.propTypes={visible:f.bool,style:f.object,getClassNameFromAlign:f.func,onAlign:f.func,getRootDomNode:f.func,align:f.any,destroyPopupOnHide:f.bool,className:f.string,prefixCls:f.string,onMouseEnter:f.func,onMouseLeave:f.func,onMouseDown:f.func,onTouchStart:f.func,stretch:f.string,children:f.node,point:f.shape({pageX:f.number,pageY:f.number})};var ax=function(){var t=this;this.onAlign=function(n,r){var o=t.props,i=o.getClassNameFromAlign(r);t.currentAlignClassName!==i&&(t.currentAlignClassName=i,n.className=t.getClassName(i)),o.onAlign(n,r)},this.setStretchSize=function(){var n=t.props,r=n.stretch,o=n.getRootDomNode,i=n.visible,a=t.state,s=a.stretchChecked,u=a.targetHeight,c=a.targetWidth;if(!r||!i){s&&t.setState({stretchChecked:!1});return}var l=o();if(l){var d=l.offsetHeight,p=l.offsetWidth;(u!==d||c!==p||!s)&&t.setState({stretchChecked:!0,targetHeight:d,targetWidth:p})}},this.getTargetElement=function(){return t.props.getRootDomNode()},this.getAlignTarget=function(){var n=t.props.point;return n||t.getTargetElement}};function Io(){}function sx(){return""}function ux(){return window.document}var cx=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"],Du=!!fr.createPortal,Kl={rcTrigger:f.shape({onPopupMouseDown:f.func})},on=function(e){_t(t,e);function t(n){Tt(this,t);var r=qe(this,e.call(this,n));lx.call(r);var o=void 0;return"popupVisible"in n?o=!!n.popupVisible:o=!!n.defaultPopupVisible,r.state={prevPopupVisible:o,popupVisible:o},cx.forEach(function(i){r["fire"+i]=function(a){r.fireEvents(i,a)}}),r}return t.prototype.getChildContext=function(){return{rcTrigger:{onPopupMouseDown:this.onPopupMouseDown}}},t.prototype.componentDidMount=function(){this.componentDidUpdate({},{popupVisible:this.state.popupVisible})},t.prototype.componentDidUpdate=function(r,o){var i=this.props,a=this.state,s=function(){o.popupVisible!==a.popupVisible&&i.afterPopupVisibleChange(a.popupVisible)};if(Du||this.renderComponent(null,s),a.popupVisible){var u=void 0;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(u=i.getDocument(),this.clickOutsideHandler=hn(u,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(u=u||i.getDocument(),this.touchOutsideHandler=hn(u,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(u=u||i.getDocument(),this.contextMenuOutsideHandler1=hn(u,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=hn(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()},t.prototype.componentWillUnmount=function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout)},t.getDerivedStateFromProps=function(r,o){var i=r.popupVisible,a={};return i!==void 0&&o.popupVisible!==i&&(a.popupVisible=i,a.prevPopupVisible=o.popupVisible),a},t.prototype.getPopupDomNode=function(){return this._component&&this._component.getPopupDomNode?this._component.getPopupDomNode():null},t.prototype.getPopupAlign=function(){var r=this.props,o=r.popupPlacement,i=r.popupAlign,a=r.builtinPlacements;return o&&a?aw(a,o,i):i},t.prototype.setPopupVisible=function(r,o){var i=this.props.alignPoint,a=this.state.popupVisible;this.clearDelayTimer(),a!==r&&("popupVisible"in this.props||this.setState({popupVisible:r,prevPopupVisible:a}),this.props.onPopupVisibleChange(r)),i&&o&&this.setPoint(o)},t.prototype.delaySetPopupVisible=function(r,o,i){var a=this,s=o*1e3;if(this.clearDelayTimer(),s){var u=i?{pageX:i.pageX,pageY:i.pageY}:null;this.delayTimer=setTimeout(function(){a.setPopupVisible(r,u),a.clearDelayTimer()},s)}else this.setPopupVisible(r,i)},t.prototype.clearDelayTimer=function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)},t.prototype.clearOutsideHandler=function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},t.prototype.createTwoChains=function(r){var o=this.props.children.props,i=this.props;return o[r]&&i[r]?this["fire"+r]:o[r]||i[r]},t.prototype.isClickToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("click")!==-1||i.indexOf("click")!==-1},t.prototype.isContextMenuToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("contextMenu")!==-1||i.indexOf("contextMenu")!==-1},t.prototype.isClickToHide=function(){var r=this.props,o=r.action,i=r.hideAction;return o.indexOf("click")!==-1||i.indexOf("click")!==-1},t.prototype.isMouseEnterToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("hover")!==-1||i.indexOf("mouseEnter")!==-1},t.prototype.isMouseLeaveToHide=function(){var r=this.props,o=r.action,i=r.hideAction;return o.indexOf("hover")!==-1||i.indexOf("mouseLeave")!==-1},t.prototype.isFocusToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("focus")!==-1||i.indexOf("focus")!==-1},t.prototype.isBlurToHide=function(){var r=this.props,o=r.action,i=r.hideAction;return o.indexOf("focus")!==-1||i.indexOf("blur")!==-1},t.prototype.forcePopupAlign=function(){this.state.popupVisible&&this._component&&this._component.alignInstance&&this._component.alignInstance.forceAlign()},t.prototype.fireEvents=function(r,o){var i=this.props.children.props[r];i&&i(o);var a=this.props[r];a&&a(o)},t.prototype.close=function(){this.setPopupVisible(!1)},t.prototype.render=function(){var r=this,o=this.state.popupVisible,i=this.props,a=i.children,s=i.forceRender,u=i.alignPoint,c=i.className,l=j.Children.only(a),d={key:"trigger"};this.isContextMenuToShow()?d.onContextMenu=this.onContextMenu:d.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(d.onClick=this.onClick,d.onMouseDown=this.onMouseDown,d.onTouchStart=this.onTouchStart):(d.onClick=this.createTwoChains("onClick"),d.onMouseDown=this.createTwoChains("onMouseDown"),d.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(d.onMouseEnter=this.onMouseEnter,u&&(d.onMouseMove=this.onMouseMove)):d.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?d.onMouseLeave=this.onMouseLeave:d.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(d.onFocus=this.onFocus,d.onBlur=this.onBlur):(d.onFocus=this.createTwoChains("onFocus"),d.onBlur=this.createTwoChains("onBlur"));var p=bt(l&&l.props&&l.props.className,c);p&&(d.className=p);var m=j.cloneElement(l,d);if(!Du)return j.createElement(xa,{parent:this,visible:o,autoMount:!1,forceRender:s,getComponent:this.getComponent,getContainer:this.getContainer},function(g){var y=g.renderComponent;return r.renderComponent=y,m});var x=void 0;return(o||this._component||s)&&(x=j.createElement(Nl,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),[m,x]},t}(j.Component);on.propTypes={children:f.any,action:f.oneOfType([f.string,f.arrayOf(f.string)]),showAction:f.any,hideAction:f.any,getPopupClassNameFromAlign:f.any,onPopupVisibleChange:f.func,afterPopupVisibleChange:f.func,popup:f.oneOfType([f.node,f.func]).isRequired,popupStyle:f.object,prefixCls:f.string,popupClassName:f.string,className:f.string,popupPlacement:f.string,builtinPlacements:f.object,popupTransitionName:f.oneOfType([f.string,f.object]),popupAnimation:f.any,mouseEnterDelay:f.number,mouseLeaveDelay:f.number,zIndex:f.number,focusDelay:f.number,blurDelay:f.number,getPopupContainer:f.func,getDocument:f.func,forceRender:f.bool,destroyPopupOnHide:f.bool,mask:f.bool,maskClosable:f.bool,onPopupAlign:f.func,popupAlign:f.object,popupVisible:f.bool,defaultPopupVisible:f.bool,maskTransitionName:f.oneOfType([f.string,f.object]),maskAnimation:f.string,stretch:f.string,alignPoint:f.bool};on.contextTypes=Kl;on.childContextTypes=Kl;on.defaultProps={prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:sx,getDocument:ux,onPopupVisibleChange:Io,afterPopupVisibleChange:Io,onPopupAlign:Io,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[]};var lx=function(){var t=this;this.onMouseEnter=function(n){var r=t.props.mouseEnterDelay;t.fireEvents("onMouseEnter",n),t.delaySetPopupVisible(!0,r,r?null:n)},this.onMouseMove=function(n){t.fireEvents("onMouseMove",n),t.setPoint(n)},this.onMouseLeave=function(n){t.fireEvents("onMouseLeave",n),t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)},this.onPopupMouseEnter=function(){t.clearDelayTimer()},this.onPopupMouseLeave=function(n){n.relatedTarget&&!n.relatedTarget.setTimeout&&t._component&&t._component.getPopupDomNode&&si(t._component.getPopupDomNode(),n.relatedTarget)||t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)},this.onFocus=function(n){t.fireEvents("onFocus",n),t.clearDelayTimer(),t.isFocusToShow()&&(t.focusTime=Date.now(),t.delaySetPopupVisible(!0,t.props.focusDelay))},this.onMouseDown=function(n){t.fireEvents("onMouseDown",n),t.preClickTime=Date.now()},this.onTouchStart=function(n){t.fireEvents("onTouchStart",n),t.preTouchTime=Date.now()},this.onBlur=function(n){t.fireEvents("onBlur",n),t.clearDelayTimer(),t.isBlurToHide()&&t.delaySetPopupVisible(!1,t.props.blurDelay)},this.onContextMenu=function(n){n.preventDefault(),t.fireEvents("onContextMenu",n),t.setPopupVisible(!0,n)},this.onContextMenuClose=function(){t.isContextMenuToShow()&&t.close()},this.onClick=function(n){if(t.fireEvents("onClick",n),t.focusTime){var r=void 0;if(t.preClickTime&&t.preTouchTime?r=Math.min(t.preClickTime,t.preTouchTime):t.preClickTime?r=t.preClickTime:t.preTouchTime&&(r=t.preTouchTime),Math.abs(r-t.focusTime)<20)return;t.focusTime=0}t.preClickTime=0,t.preTouchTime=0,t.isClickToShow()&&(t.isClickToHide()||t.isBlurToHide())&&n&&n.preventDefault&&n.preventDefault();var o=!t.state.popupVisible;(t.isClickToHide()&&!o||o&&t.isClickToShow())&&t.setPopupVisible(!t.state.popupVisible,n)},this.onPopupMouseDown=function(){var n=t.context.rcTrigger,r=n===void 0?{}:n;t.hasPopupMouseDown=!0,clearTimeout(t.mouseDownTimeout),t.mouseDownTimeout=setTimeout(function(){t.hasPopupMouseDown=!1},0),r.onPopupMouseDown&&r.onPopupMouseDown.apply(r,arguments)},this.onDocumentClick=function(n){if(!(t.props.mask&&!t.props.maskClosable)){var r=n.target,o=fr.findDOMNode(t);!si(o,r)&&!t.hasPopupMouseDown&&t.close()}},this.getRootDomNode=function(){return fr.findDOMNode(t)},this.getPopupClassNameFromAlign=function(n){var r=[],o=t.props,i=o.popupPlacement,a=o.builtinPlacements,s=o.prefixCls,u=o.alignPoint,c=o.getPopupClassNameFromAlign;return i&&a&&r.push(sw(a,s,n,u)),c&&r.push(c(n)),r.join(" ")},this.getComponent=function(){var n=t.props,r=n.prefixCls,o=n.destroyPopupOnHide,i=n.popupClassName,a=n.action,s=n.onPopupAlign,u=n.popupAnimation,c=n.popupTransitionName,l=n.popupStyle,d=n.mask,p=n.maskAnimation,m=n.maskTransitionName,x=n.zIndex,g=n.popup,y=n.stretch,v=n.alignPoint,b=t.state,O=b.popupVisible,S=b.point,T=t.getPopupAlign(),C={};return t.isMouseEnterToShow()&&(C.onMouseEnter=t.onPopupMouseEnter),t.isMouseLeaveToHide()&&(C.onMouseLeave=t.onPopupMouseLeave),C.onMouseDown=t.onPopupMouseDown,C.onTouchStart=t.onPopupMouseDown,j.createElement(ql,It({prefixCls:r,destroyPopupOnHide:o,visible:O,point:v&&S,className:i,action:a,align:T,onAlign:s,animation:u,getClassNameFromAlign:t.getPopupClassNameFromAlign},C,{stretch:y,getRootDomNode:t.getRootDomNode,style:l,mask:d,zIndex:x,transitionName:c,maskAnimation:p,maskTransitionName:m,ref:t.savePopup}),typeof g=="function"?g():g)},this.getContainer=function(){var n=t.props,r=document.createElement("div");r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%";var o=n.getPopupContainer?n.getPopupContainer(fr.findDOMNode(t)):n.getDocument().body;return o.appendChild(r),r},this.setPoint=function(n){var r=t.props.alignPoint;!r||!n||t.setState({point:{pageX:n.pageX,pageY:n.pageY}})},this.handlePortalUpdate=function(){t.state.prevPopupVisible!==t.state.popupVisible&&t.props.afterPopupVisibleChange(t.state.popupVisible)},this.savePopup=function(n){t._component=n}};wa(on);function fx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ku(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function px(e,t,n){return t&&ku(e.prototype,t),n&&ku(e,n),e}function dx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:bi(e)}function yi(e){return yi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},yi(e)}function bi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&wi(e,t)}function wi(e,t){return wi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},wi(e,t)}function Cr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $a=function(e){hx(t,e);function t(n){var r;fx(this,t),r=dx(this,yi(t).call(this,n)),Cr(bi(r),"onInputChange",function(a){var s=a.target.value;r.setState({str:s});var u=r.props,c=u.format,l=u.hourOptions,d=u.minuteOptions,p=u.secondOptions,m=u.disabledHours,x=u.disabledMinutes,g=u.disabledSeconds,y=u.onChange;if(s){var v=r.props.value,b=r.getProtoValue().clone(),O=Ie(s,c,!0);if(!O.isValid()){r.setState({invalid:!0});return}if(b.hour(O.hour()).minute(O.minute()).second(O.second()),l.indexOf(b.hour())<0||d.indexOf(b.minute())<0||p.indexOf(b.second())<0){r.setState({invalid:!0});return}var S=m(),T=x(b.hour()),C=g(b.hour(),b.minute());if(S&&S.indexOf(b.hour())>=0||T&&T.indexOf(b.minute())>=0||C&&C.indexOf(b.second())>=0){r.setState({invalid:!0});return}if(v){if(v.hour()!==b.hour()||v.minute()!==b.minute()||v.second()!==b.second()){var E=v.clone();E.hour(b.hour()),E.minute(b.minute()),E.second(b.second()),y(E)}}else v!==b&&y(b)}else y(null);r.setState({invalid:!1})}),Cr(bi(r),"onKeyDown",function(a){var s=r.props,u=s.onEsc,c=s.onKeyDown;a.keyCode===27&&u(),c(a)});var o=n.value,i=n.format;return r.state={str:o&&o.format(i)||"",invalid:!1},r}return px(t,[{key:"componentDidMount",value:function(){var r=this,o=this.props.focusOnOpen;if(o){var i=window.requestAnimationFrame||window.setTimeout;i(function(){r.refInput.focus(),r.refInput.select()})}}},{key:"componentDidUpdate",value:function(r){var o=this.props,i=o.value,a=o.format;i!==r.value&&this.setState({str:i&&i.format(a)||"",invalid:!1})}},{key:"getProtoValue",value:function(){var r=this.props,o=r.value,i=r.defaultOpenValue;return o||i}},{key:"getInput",value:function(){var r=this,o=this.props,i=o.prefixCls,a=o.placeholder,s=o.inputReadOnly,u=this.state,c=u.invalid,l=u.str,d=c?"".concat(i,"-input-invalid"):"";return j.createElement("input",{className:bt("".concat(i,"-input"),d),ref:function(m){r.refInput=m},onKeyDown:this.onKeyDown,value:l,placeholder:a,onChange:this.onInputChange,readOnly:!!s})}},{key:"render",value:function(){var r=this.props.prefixCls;return j.createElement("div",{className:"".concat(r,"-input-wrap")},this.getInput())}}]),t}(P.Component);Cr($a,"propTypes",{format:f.string,prefixCls:f.string,disabledDate:f.func,placeholder:f.string,clearText:f.string,value:f.object,inputReadOnly:f.bool,hourOptions:f.array,minuteOptions:f.array,secondOptions:f.array,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,onChange:f.func,onEsc:f.func,defaultOpenValue:f.object,currentSelectPanel:f.string,focusOnOpen:f.bool,onKeyDown:f.func,clearIcon:f.node});Cr($a,"defaultProps",{inputReadOnly:!1});var Xr={exports:{}},vn={exports:{}};(function(){var e,t,n,r,o,i;typeof performance<"u"&&performance!==null&&performance.now?vn.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(vn.exports=function(){return(e()-o)/1e6},t=process.hrtime,e=function(){var a;return a=t(),a[0]*1e9+a[1]},r=e(),i=process.uptime()*1e9,o=r-i):Date.now?(vn.exports=function(){return Date.now()-n},n=Date.now()):(vn.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(ac);var mx=vn.exports,vx=mx,Re=typeof window>"u"?ac:window,ar=["moz","webkit"],Ft="AnimationFrame",Xt=Re["request"+Ft],jn=Re["cancel"+Ft]||Re["cancelRequest"+Ft];for(var pn=0;!Xt&&pn<ar.length;pn++)Xt=Re[ar[pn]+"Request"+Ft],jn=Re[ar[pn]+"Cancel"+Ft]||Re[ar[pn]+"CancelRequest"+Ft];if(!Xt||!jn){var Lo=0,Nu=0,ut=[],gx=1e3/60;Xt=function(e){if(ut.length===0){var t=vx(),n=Math.max(0,gx-(t-Lo));Lo=n+t,setTimeout(function(){var r=ut.slice(0);ut.length=0;for(var o=0;o<r.length;o++)if(!r[o].cancelled)try{r[o].callback(Lo)}catch(i){setTimeout(function(){throw i},0)}},Math.round(n))}return ut.push({handle:++Nu,callback:e,cancelled:!1}),Nu},jn=function(e){for(var t=0;t<ut.length;t++)ut[t].handle===e&&(ut[t].cancelled=!0)}}Xr.exports=function(e){return Xt.call(Re,e)};Xr.exports.cancel=function(){jn.apply(Re,arguments)};Xr.exports.polyfill=function(e){e||(e=Re),e.requestAnimationFrame=Xt,e.cancelAnimationFrame=jn};var yx=Xr.exports;const Ru=qt(yx);function bx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Iu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wx(e,t,n){return t&&Iu(e.prototype,t),n&&Iu(e,n),e}function xx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Nt(e)}function xi(e){return xi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xi(e)}function Nt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ox(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oi(e,t)}function Oi(e,t){return Oi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Oi(e,t)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Px=function e(t,n,r){if(r<=0){Ru(function(){t.scrollTop=n});return}var o=n-t.scrollTop,i=o/r*10;Ru(function(){t.scrollTop+=i,t.scrollTop!==n&&e(t,n,r-10)})},gn=function(e){Ox(t,e);function t(){var n,r;bx(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=xx(this,(n=xi(t)).call.apply(n,[this].concat(i))),ke(Nt(r),"state",{active:!1}),ke(Nt(r),"onSelect",function(s){var u=r.props,c=u.onSelect,l=u.type;c(l,s)}),ke(Nt(r),"handleMouseEnter",function(s){var u=r.props.onMouseEnter;r.setState({active:!0}),u(s)}),ke(Nt(r),"handleMouseLeave",function(){r.setState({active:!1})}),ke(Nt(r),"saveList",function(s){r.list=s}),r}return wx(t,[{key:"componentDidMount",value:function(){this.scrollToSelected(0)}},{key:"componentDidUpdate",value:function(r){var o=this.props.selectedIndex;r.selectedIndex!==o&&this.scrollToSelected(120)}},{key:"getOptions",value:function(){var r=this,o=this.props,i=o.options,a=o.selectedIndex,s=o.prefixCls,u=o.onEsc;return i.map(function(c,l){var d,p=bt((d={},ke(d,"".concat(s,"-select-option-selected"),a===l),ke(d,"".concat(s,"-select-option-disabled"),c.disabled),d)),m=c.disabled?void 0:function(){r.onSelect(c.value)},x=function(y){y.keyCode===13?m():y.keyCode===27&&u()};return j.createElement("li",{role:"button",onClick:m,className:p,key:l,disabled:c.disabled,tabIndex:"0",onKeyDown:x},c.value)})}},{key:"scrollToSelected",value:function(r){var o=this.props.selectedIndex,i=we.findDOMNode(this),a=we.findDOMNode(this.list);if(a){var s=o;s<0&&(s=0);var u=a.children[s],c=u.offsetTop;Px(i,c,r)}}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.options,a=this.state.active;if(i.length===0)return null;var s=bt("".concat(o,"-select"),ke({},"".concat(o,"-select-active"),a));return j.createElement("div",{className:s,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},j.createElement("ul",{ref:this.saveList},this.getOptions()))}}]),t}(P.Component);ke(gn,"propTypes",{prefixCls:f.string,options:f.array,selectedIndex:f.number,type:f.string,onSelect:f.func,onMouseEnter:f.func,onEsc:f.func});function Cx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Sx(e,t,n){return t&&Lu(e.prototype,t),n&&Lu(e,n),e}function Ex(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Ci(e)}function Pi(e){return Pi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Pi(e)}function Ci(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Tx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Si(e,t)}function Si(e,t){return Si=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Si(e,t)}function Ei(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Wo=function(t,n){var r="".concat(t);t<10&&(r="0".concat(t));var o=!1;return n&&n.indexOf(t)>=0&&(o=!0),{value:r,disabled:o}},Zl=function(e){Tx(t,e);function t(){var n,r;Cx(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=Ex(this,(n=Pi(t)).call.apply(n,[this].concat(i))),Ei(Ci(r),"onItemChange",function(s,u){var c=r.props,l=c.onChange,d=c.defaultOpenValue,p=c.use12Hours,m=c.value,x=c.isAM,g=c.onAmPmChange,y=(m||d).clone();if(s==="hour")p?x?y.hour(+u%12):y.hour(+u%12+12):y.hour(+u);else if(s==="minute")y.minute(+u);else if(s==="ampm"){var v=u.toUpperCase();p&&(v==="PM"&&y.hour()<12&&y.hour(y.hour()%12+12),v==="AM"&&y.hour()>=12&&y.hour(y.hour()-12)),g(v)}else y.second(+u);l(y)}),Ei(Ci(r),"onEnterSelectPanel",function(s){var u=r.props.onCurrentSelectPanelChange;u(s)}),r}return Sx(t,[{key:"getHourSelect",value:function(r){var o=this,i=this.props,a=i.prefixCls,s=i.hourOptions,u=i.disabledHours,c=i.showHour,l=i.use12Hours,d=i.onEsc;if(!c)return null;var p=u(),m,x;return l?(m=[12].concat(s.filter(function(g){return g<12&&g>0})),x=r%12||12):(m=s,x=r),j.createElement(gn,{prefixCls:a,options:m.map(function(g){return Wo(g,p)}),selectedIndex:m.indexOf(x),type:"hour",onSelect:this.onItemChange,onMouseEnter:function(){return o.onEnterSelectPanel("hour")},onEsc:d})}},{key:"getMinuteSelect",value:function(r){var o=this,i=this.props,a=i.prefixCls,s=i.minuteOptions,u=i.disabledMinutes,c=i.defaultOpenValue,l=i.showMinute,d=i.value,p=i.onEsc;if(!l)return null;var m=d||c,x=u(m.hour());return j.createElement(gn,{prefixCls:a,options:s.map(function(g){return Wo(g,x)}),selectedIndex:s.indexOf(r),type:"minute",onSelect:this.onItemChange,onMouseEnter:function(){return o.onEnterSelectPanel("minute")},onEsc:p})}},{key:"getSecondSelect",value:function(r){var o=this,i=this.props,a=i.prefixCls,s=i.secondOptions,u=i.disabledSeconds,c=i.showSecond,l=i.defaultOpenValue,d=i.value,p=i.onEsc;if(!c)return null;var m=d||l,x=u(m.hour(),m.minute());return j.createElement(gn,{prefixCls:a,options:s.map(function(g){return Wo(g,x)}),selectedIndex:s.indexOf(r),type:"second",onSelect:this.onItemChange,onMouseEnter:function(){return o.onEnterSelectPanel("second")},onEsc:p})}},{key:"getAMPMSelect",value:function(){var r=this,o=this.props,i=o.prefixCls,a=o.use12Hours,s=o.format,u=o.isAM,c=o.onEsc;if(!a)return null;var l=["am","pm"].map(function(p){return s.match(/\sA/)?p.toUpperCase():p}).map(function(p){return{value:p}}),d=u?0:1;return j.createElement(gn,{prefixCls:i,options:l,selectedIndex:d,type:"ampm",onSelect:this.onItemChange,onMouseEnter:function(){return r.onEnterSelectPanel("ampm")},onEsc:c})}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.defaultOpenValue,a=r.value,s=a||i;return j.createElement("div",{className:"".concat(o,"-combobox")},this.getHourSelect(s.hour()),this.getMinuteSelect(s.minute()),this.getSecondSelect(s.second()),this.getAMPMSelect(s.hour()))}}]),t}(P.Component);Ei(Zl,"propTypes",{format:f.string,defaultOpenValue:f.object,prefixCls:f.string,value:f.object,onChange:f.func,onAmPmChange:f.func,showHour:f.bool,showMinute:f.bool,showSecond:f.bool,hourOptions:f.array,minuteOptions:f.array,secondOptions:f.array,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,onCurrentSelectPanelChange:f.func,use12Hours:f.bool,onEsc:f.func,isAM:f.bool});function Wu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function _x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wu(Object(n),!0).forEach(function(r){Ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $x(e,t,n){return t&&Fu(e.prototype,t),n&&Fu(e,n),e}function jx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Rt(e)}function Ti(e){return Ti=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ti(e)}function Rt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ax(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_i(e,t)}function _i(e,t){return _i=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_i(e,t)}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ct(){}function Fo(e,t,n){for(var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,o=[],i=0;i<e;i+=r)(!t||t.indexOf(i)<0||!n)&&o.push(i);return o}function Dx(e,t,n,r){var o=t.slice().sort(function(s,u){return Math.abs(e.hour()-s)-Math.abs(e.hour()-u)})[0],i=n.slice().sort(function(s,u){return Math.abs(e.minute()-s)-Math.abs(e.minute()-u)})[0],a=r.slice().sort(function(s,u){return Math.abs(e.second()-s)-Math.abs(e.second()-u)})[0];return Ie("".concat(o,":").concat(i,":").concat(a),"HH:mm:ss")}var qr=function(e){Ax(t,e);function t(){var n,r;Mx(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=jx(this,(n=Ti(t)).call.apply(n,[this].concat(i))),Ue(Rt(r),"state",{}),Ue(Rt(r),"onChange",function(s){var u=r.props.onChange;r.setState({value:s}),u(s)}),Ue(Rt(r),"onAmPmChange",function(s){var u=r.props.onAmPmChange;u(s)}),Ue(Rt(r),"onCurrentSelectPanelChange",function(s){r.setState({currentSelectPanel:s})}),Ue(Rt(r),"disabledHours",function(){var s=r.props,u=s.use12Hours,c=s.disabledHours,l=c();return u&&Array.isArray(l)&&(r.isAM()?l=l.filter(function(d){return d<12}).map(function(d){return d===0?12:d}):l=l.map(function(d){return d===12?12:d-12})),l}),r}return $x(t,[{key:"close",value:function(){var r=this.props.onEsc;r()}},{key:"isAM",value:function(){var r=this.props.defaultOpenValue,o=this.state.value,i=o||r;return i.hour()>=0&&i.hour()<12}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.className,a=r.placeholder,s=r.disabledMinutes,u=r.disabledSeconds,c=r.hideDisabledOptions,l=r.showHour,d=r.showMinute,p=r.showSecond,m=r.format,x=r.defaultOpenValue,g=r.clearText,y=r.onEsc,v=r.addon,b=r.use12Hours,O=r.focusOnOpen,S=r.onKeyDown,T=r.hourStep,C=r.minuteStep,E=r.secondStep,D=r.inputReadOnly,k=r.clearIcon,R=this.state,F=R.value,q=R.currentSelectPanel,L=this.disabledHours(),K=s(F?F.hour():null),ne=u(F?F.hour():null,F?F.minute():null),V=Fo(24,L,c,T),Y=Fo(60,K,c,C),J=Fo(60,ne,c,E),ue=Dx(x,V,Y,J);return j.createElement("div",{className:bt(i,"".concat(o,"-inner"))},j.createElement($a,{clearText:g,prefixCls:o,defaultOpenValue:ue,value:F,currentSelectPanel:q,onEsc:y,format:m,placeholder:a,hourOptions:V,minuteOptions:Y,secondOptions:J,disabledHours:this.disabledHours,disabledMinutes:s,disabledSeconds:u,onChange:this.onChange,focusOnOpen:O,onKeyDown:S,inputReadOnly:D,clearIcon:k}),j.createElement(Zl,{prefixCls:o,value:F,defaultOpenValue:ue,format:m,onChange:this.onChange,onAmPmChange:this.onAmPmChange,showHour:l,showMinute:d,showSecond:p,hourOptions:V,minuteOptions:Y,secondOptions:J,disabledHours:this.disabledHours,disabledMinutes:s,disabledSeconds:u,onCurrentSelectPanelChange:this.onCurrentSelectPanelChange,use12Hours:b,onEsc:y,isAM:this.isAM()}),v(this))}}],[{key:"getDerivedStateFromProps",value:function(r,o){return"value"in r?_x({},o,{value:r.value}):null}}]),t}(P.Component);Ue(qr,"propTypes",{clearText:f.string,prefixCls:f.string,className:f.string,defaultOpenValue:f.object,value:f.object,placeholder:f.string,format:f.string,inputReadOnly:f.bool,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,hideDisabledOptions:f.bool,onChange:f.func,onAmPmChange:f.func,onEsc:f.func,showHour:f.bool,showMinute:f.bool,showSecond:f.bool,use12Hours:f.bool,hourStep:f.number,minuteStep:f.number,secondStep:f.number,addon:f.func,focusOnOpen:f.bool,onKeyDown:f.func,clearIcon:f.node});Ue(qr,"defaultProps",{prefixCls:"rc-time-picker-panel",onChange:ct,disabledHours:ct,disabledMinutes:ct,disabledSeconds:ct,defaultOpenValue:Ie(),use12Hours:!1,addon:ct,onKeyDown:ct,onAmPmChange:ct,inputReadOnly:!1});wa(qr);var sr={adjustX:1,adjustY:1},ur=[0,0],kx={bottomLeft:{points:["tl","tl"],overflow:sr,offset:[0,-3],targetOffset:ur},bottomRight:{points:["tr","tr"],overflow:sr,offset:[0,-3],targetOffset:ur},topRight:{points:["br","br"],overflow:sr,offset:[0,3],targetOffset:ur},topLeft:{points:["bl","bl"],overflow:sr,offset:[0,3],targetOffset:ur}};function Bu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Nx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bu(Object(n),!0).forEach(function(r){Ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ix(e,t,n){return t&&Hu(e.prototype,t),n&&Hu(e,n),e}function Lx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Ne(e)}function Mi(e){return Mi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Mi(e)}function Ne(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$i(e,t)}function $i(e,t){return $i=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},$i(e,t)}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(){}function Vu(e,t){this[e]=t}var Hn=function(e){Wx(t,e);function t(n){var r;Rx(this,t),r=Lx(this,Mi(t).call(this,n)),Ce(Ne(r),"onPanelChange",function(l){r.setValue(l)}),Ce(Ne(r),"onAmPmChange",function(l){var d=r.props.onAmPmChange;d(l)}),Ce(Ne(r),"onClear",function(l){l.stopPropagation(),r.setValue(null),r.setOpen(!1)}),Ce(Ne(r),"onVisibleChange",function(l){r.setOpen(l)}),Ce(Ne(r),"onEsc",function(){r.setOpen(!1),r.focus()}),Ce(Ne(r),"onKeyDown",function(l){l.keyCode===40&&r.setOpen(!0)}),r.saveInputRef=Vu.bind(Ne(r),"picker"),r.savePanelRef=Vu.bind(Ne(r),"panelInstance");var o=n.defaultOpen,i=n.defaultValue,a=n.open,s=a===void 0?o:a,u=n.value,c=u===void 0?i:u;return r.state={open:s,value:c},r}return Ix(t,[{key:"setValue",value:function(r){var o=this.props.onChange;"value"in this.props||this.setState({value:r}),o(r)}},{key:"getFormat",value:function(){var r=this.props,o=r.format,i=r.showHour,a=r.showMinute,s=r.showSecond,u=r.use12Hours;if(o)return o;if(u){var c=[i?"h":"",a?"mm":"",s?"ss":""].filter(function(l){return!!l}).join(":");return c.concat(" a")}return[i?"HH":"",a?"mm":"",s?"ss":""].filter(function(l){return!!l}).join(":")}},{key:"getPanelElement",value:function(){var r=this.props,o=r.prefixCls,i=r.placeholder,a=r.disabledHours,s=r.disabledMinutes,u=r.disabledSeconds,c=r.hideDisabledOptions,l=r.inputReadOnly,d=r.showHour,p=r.showMinute,m=r.showSecond,x=r.defaultOpenValue,g=r.clearText,y=r.addon,v=r.use12Hours,b=r.focusOnOpen,O=r.onKeyDown,S=r.hourStep,T=r.minuteStep,C=r.secondStep,E=r.clearIcon,D=this.state.value;return j.createElement(qr,{clearText:g,prefixCls:"".concat(o,"-panel"),ref:this.savePanelRef,value:D,inputReadOnly:l,onChange:this.onPanelChange,onAmPmChange:this.onAmPmChange,defaultOpenValue:x,showHour:d,showMinute:p,showSecond:m,onEsc:this.onEsc,format:this.getFormat(),placeholder:i,disabledHours:a,disabledMinutes:s,disabledSeconds:u,hideDisabledOptions:c,use12Hours:v,hourStep:S,minuteStep:T,secondStep:C,addon:y,focusOnOpen:b,onKeyDown:O,clearIcon:E})}},{key:"getPopupClassName",value:function(){var r=this.props,o=r.showHour,i=r.showMinute,a=r.showSecond,s=r.use12Hours,u=r.prefixCls,c=r.popupClassName,l=0;return o&&(l+=1),i&&(l+=1),a&&(l+=1),s&&(l+=1),bt(c,Ce({},"".concat(u,"-panel-narrow"),(!o||!i||!a)&&!s),"".concat(u,"-panel-column-").concat(l))}},{key:"setOpen",value:function(r){var o=this.props,i=o.onOpen,a=o.onClose,s=this.state.open;s!==r&&("open"in this.props||this.setState({open:r}),r?i({open:r}):a({open:r}))}},{key:"focus",value:function(){this.picker.focus()}},{key:"blur",value:function(){this.picker.blur()}},{key:"renderClearButton",value:function(){var r=this,o=this.state.value,i=this.props,a=i.prefixCls,s=i.allowEmpty,u=i.clearIcon,c=i.clearText,l=i.disabled;if(!s||!o||l)return null;if(j.isValidElement(u)){var d=u.props||{},p=d.onClick;return j.cloneElement(u,{onClick:function(){p&&p.apply(void 0,arguments),r.onClear.apply(r,arguments)}})}return j.createElement("a",{role:"button",className:"".concat(a,"-clear"),title:c,onClick:this.onClear,tabIndex:0},u||j.createElement("i",{className:"".concat(a,"-clear-icon")}))}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.placeholder,a=r.placement,s=r.align,u=r.id,c=r.disabled,l=r.transitionName,d=r.style,p=r.className,m=r.getPopupContainer,x=r.name,g=r.autoComplete,y=r.onFocus,v=r.onBlur,b=r.autoFocus,O=r.inputReadOnly,S=r.inputIcon,T=r.popupStyle,C=this.state,E=C.open,D=C.value,k=this.getPopupClassName();return j.createElement(on,{prefixCls:"".concat(o,"-panel"),popupClassName:k,popupStyle:T,popup:this.getPanelElement(),popupAlign:s,builtinPlacements:kx,popupPlacement:a,action:c?[]:["click"],destroyPopupOnHide:!0,getPopupContainer:m,popupTransitionName:l,popupVisible:E,onPopupVisibleChange:this.onVisibleChange},j.createElement("span",{className:bt(o,p),style:d},j.createElement("input",{className:"".concat(o,"-input"),ref:this.saveInputRef,type:"text",placeholder:i,name:x,onKeyDown:this.onKeyDown,disabled:c,value:D&&D.format(this.getFormat())||"",autoComplete:g,onFocus:y,onBlur:v,autoFocus:b,onChange:he,readOnly:!!O,id:u}),S||j.createElement("span",{className:"".concat(o,"-icon")}),this.renderClearButton()))}}],[{key:"getDerivedStateFromProps",value:function(r,o){var i={};return"value"in r&&(i.value=r.value),r.open!==void 0&&(i.open=r.open),Object.keys(i).length>0?Nx({},o,{},i):null}}]),t}(P.Component);Ce(Hn,"propTypes",{prefixCls:f.string,clearText:f.string,value:f.object,defaultOpenValue:f.object,inputReadOnly:f.bool,disabled:f.bool,allowEmpty:f.bool,defaultValue:f.object,open:f.bool,defaultOpen:f.bool,align:f.object,placement:f.any,transitionName:f.string,getPopupContainer:f.func,placeholder:f.string,format:f.string,showHour:f.bool,showMinute:f.bool,showSecond:f.bool,style:f.object,className:f.string,popupClassName:f.string,popupStyle:f.object,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,hideDisabledOptions:f.bool,onChange:f.func,onAmPmChange:f.func,onOpen:f.func,onClose:f.func,onFocus:f.func,onBlur:f.func,addon:f.func,name:f.string,autoComplete:f.string,use12Hours:f.bool,hourStep:f.number,minuteStep:f.number,secondStep:f.number,focusOnOpen:f.bool,onKeyDown:f.func,autoFocus:f.bool,id:f.string,inputIcon:f.node,clearIcon:f.node});Ce(Hn,"defaultProps",{clearText:"clear",prefixCls:"rc-time-picker",defaultOpen:!1,inputReadOnly:!1,style:{},className:"",popupClassName:"",popupStyle:{},align:{},defaultOpenValue:Ie(),allowEmpty:!0,showHour:!0,showMinute:!0,showSecond:!0,disabledHours:he,disabledMinutes:he,disabledSeconds:he,hideDisabledOptions:!1,placement:"bottomLeft",onChange:he,onAmPmChange:he,onOpen:he,onClose:he,onFocus:he,onBlur:he,addon:he,use12Hours:!1,focusOnOpen:!1,onKeyDown:he});wa(Hn);const Fx=_.div`
  @media only screen and (min-width: 768px) {
    width: 656px;
  }

  @media only screen and (min-width: 1440px) {
    width: auto;
  }
`,Bx=_.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  margin-bottom: 24px;
`,Hx=_.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
`,Vx=_.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  gap: 7px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;
    padding: 10px;

    gap: 10px;

    border-radius: 30px;
    border: 1px solid ${e=>e.theme.colors.secondaryBlue};
    background: ${e=>e.theme.colors.mainBg};
    box-shadow: ${e=>e.theme.shadows.secondaryButtonShadow};
    color: ${e=>e.theme.colors.primaryBlue};

    cursor: pointer;

    transition:
      color 250ms ease-in-out,
      border-color 250ms ease-in-out,
      box-shadow 250ms ease-in-out;

    &:hover,
    &:focus {
      color: ${e=>e.theme.colors.secondaryOrange};
      border-color: ${e=>e.theme.colors.secondaryOrange};
      box-shadow: ${e=>e.theme.shadows.buttonShadow};
    }

    svg {
      fill: currentColor;
      width: 24px;
      height: 24px;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 92px;
    height: 36px;

    padding: 6px 10px;
    gap: 10px;

    border-radius: 40px;
    background: ${e=>e.theme.colors.secondaryLightblue};
    color: ${e=>e.theme.colors.primaryBlue};

    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`,zx=_.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 10px;

    outline: none;
    border-radius: 6px;
    border: 1px solid ${e=>e.theme.colors.secondaryLightblue};
    appearance: none;
    color: ${e=>e.theme.colors.primaryBlue};
    background-color: ${e=>e.theme.colors.mainBg};
    font-size: 16px;
    line-height: 1.25;
    text-align: left;

    @media screen and (min-width: 768px) {
      width: 544px;
    }

    label:nth-child(2) {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.1;
    }
  }
`,Ux=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  p {
    color: ${e=>e.theme.colors.primaryBlue};
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    line-height: 1.33;
  }

  button {
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 10px;
    padding: 10px 30px;

    outline: none;
    border-radius: 10px;
    border: none;

    color: ${e=>e.theme.colors.mainBg};
    background: ${e=>e.theme.colors.primaryBlue};

    box-shadow: ${e=>e.theme.shadows.buttonShadow};

    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    cursor: pointer;

    transition: box-shadow 250ms ease-in-out;

    &:hover,
    &:focus {
      box-shadow: ${e=>e.theme.hovers.buttonShadow};
    }

    &:active {
      box-shadow: none;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;

    justify-content: flex-end;

    button {
      width: 160px;
    }
  }
`,Yx=_.p`
  color: ${e=>e.theme.colors.textColor};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
  margin-bottom: 12px;
`,Gx=_(Hn)`
  &.rc-time-picker {
    max-width: 544px;
  }

  & .rc-time-picker-input {
    height: 44px;
    border: 1px solid ${e=>e.theme.colors.secondaryLightblue};
    border-radius: 6px;
    padding: 12px 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${e=>e.theme.colors.primaryBlue};
  }

  & .rc-time-picker-clear {
    top: 10px;
  }
`;function ja(e){return e.year===new Date().getFullYear()&&e.month===new Date().getMonth()}const zu=50,Ql=({onClose:e})=>{const t=Kt(),n=le(Vi),{t:r}=xe(),[o,i]=P.useState(250),{handleSubmit:a,values:{date:s,waterAmount:u},errors:c,setFieldValue:l}=rl({initialValues:{waterAmount:"250",date:Ie().format("HH:mm")},onSubmit:g=>{t(yf({credentials:g,shouldUpdateMonth:ja(n)})).unwrap().then(()=>{e()})}}),d=()=>{l("waterAmount",o?o.toString():"0")},p=()=>{const g=Number.parseInt(u)+zu;l("waterAmount",g.toString()),i(g)},m=()=>{const g=Number.parseInt(u)-zu;l("waterAmount",g<=0?"0":g.toString()),i(g<=0?0:g)};function x(g){i(Number.parseInt(isNaN(Number.parseInt(g))?0:g))}return h.jsxs(Fx,{onSubmit:a,children:[h.jsx(Bx,{children:r("addWater")}),h.jsx(Hx,{children:r("addModal.Choose a value")}),h.jsxs(Yx,{children:[r("addModal.Amount of water"),":"]}),h.jsxs(Vx,{children:[h.jsx("button",{onClick:m,name:"minus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-minus`})})}),h.jsxs("span",{className:"water-amount-value",children:[u,r("ml")]}),h.jsx("button",{onClick:p,name:"plus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-plus`})})})]}),h.jsxs(zx,{children:[h.jsxs("label",{children:[r("addModal.Recording time"),":",h.jsx(Gx,{defaultValue:Ie(s,"HH:mm"),showSecond:!1,minuteStep:5,onChange:g=>{l("date",g&&g.format("HH:mm"))}}),c.date?h.jsx("div",{children:c.date}):null]}),h.jsxs("label",{children:[r("addModal.Enter the value of the water used"),":",h.jsx("input",{name:"number",value:o,onBlur:d,onChange:({target:{value:g}})=>x(g)}),c.waterAmount?h.jsx("div",{children:c.waterAmount}):null]}),h.jsxs(Ux,{children:[h.jsxs("p",{children:[u,r("ml")]}),h.jsx("button",{disabled:Object.keys(c).length>0,type:"submit",children:r("save")})]})]})]})},Xx=_.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    width: 704px;
    height: 95px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 23px;
    width: 592px;
    height: 90px;
  }
`,qx=_.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 356px;
    height: 95px;
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
    height: 95px;
  }
`,Kx=_.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Zx=_.input`
  &[type='range'] {
    height: 8px;
    border-radius: 8px;
    appearance: none;
    background: linear-gradient(
      to right,
      ${e=>e.theme.colors.secondaryBlue} 0%,
      ${e=>e.theme.colors.secondaryBlue} ${e=>e.value}%,
      ${e=>e.theme.colors.secondaryLightblue} ${e=>e.value}%,
      ${e=>e.theme.colors.secondaryLightblue} 100%
    );
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 4px;
  }
  &[type='range']::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background: ${e=>e.theme.colors.mainBg};
    border-radius: 50%;
    border: solid 1px ${e=>e.theme.colors.primaryBlue};
    appearance: none;
  }
  @media screen and (min-width: 768px) {
    width: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: 360px;
  }
`,Qx=_.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
  }
  span {
    color: ${e=>e.theme.colors.primaryBlue};
    font-size: 12px;
    line-height: 1.3;

    &::before {
      height: 8px;
      content: '|';
      color: ${e=>e.theme.colors.secondaryLightblue};
      margin-top: 4px;
      margin-bottom: 4px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:first-child {
      margin-left: 3px;
      font-size: ${e=>e.$rater===0?"16px":"12px"};
      font-weight: ${e=>e.$rater===0?"500":"400"};
    }

    &:nth-child(2) {
      margin-left: 15px;
      font-size: ${e=>e.$rater>=50&e.$rater<100?"16px":"12px"};
      font-weight: ${e=>e.$rater>=50&e.$rater<100?"500":"400"};
    }
    &:last-child {
      margin-right: 3px;
      width: 40px;
      font-size: ${e=>e.$rater>=100?"16px":"12px"};
      font-weight: ${e=>e.$raterrater>=100?"500":"400"};
      margin-left: 4px;
    }
  }
`,Jx=_(sc)`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 8px;

  svg {
    fill: ${e=>e.theme.colors.mainBg};
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-top: -8px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
    padding: 0;
  }
`,e2=()=>{const[e,t]=P.useState(0),[n,r]=P.useState(!1),[o,i]=P.useState(!1),{t:a}=xe(),{waterRate:s}=le(Di),u=le(md),c=d=>{r(!0),i(!1),d.stopPropagation()};P.useEffect(()=>{t(Math.round(u/s)*100)},[s,u]);const l=()=>{r(!1)};return h.jsxs(Xx,{children:[h.jsxs(qx,{children:[h.jsx(Kx,{children:a("today")}),h.jsx(Zx,{type:"range",min:"0",max:"100",value:e,disabled:!0}),h.jsxs(Qx,{$rater:e,children:[h.jsx("span",{children:"0%"}),h.jsx("span",{children:"50%"}),h.jsx("span",{children:"100%"})]})]}),h.jsxs(Jx,{onClick:d=>c(d),children:[h.jsx("svg",{width:24,height:24,children:h.jsx("use",{href:`${Me}#icon-plus-in-circle`})}),a("addWater")]}),n&&h.jsx(An,{$position:"center",open:n,onClose:l,children:h.jsx(Ql,{onClose:l,isEditing:o})})]})},t2=_.div`
  width: 256px;
  @media (min-width: 768px) {
    width: 656px;
  }
  @media (min-width: 1440px) {
    width: 544px;
  }
  h2 {
    font-weight: 500;
    font-size: 26px;
    color: ${e=>e.theme.colors.textColor};
    line-height: 1.23;
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    color: ${e=>e.theme.colors.textColor};
    margin-bottom: 16px;
  }
  button {
    width: 256px;
    @media (min-width: 768px) {
      width: 160px;
      align-self: flex-end;
    }
  }
  label {
    line-height: 1.25;
  }
  input {
    border: 1px solid ${e=>e.theme.colors.secondaryLightblue};
    border-radius: 6px;
    outline: transparent;
    color: ${e=>e.theme.colors.primaryBlue};
    padding: 12px 10px;

    &::placeholder {
      color: ${e=>e.theme.colors.primaryBlue};
    }
  }
`,n2=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
  P {
    line-height: 1.25;
    color: ${e=>e.theme.colors.textColor};
    margin-bottom: 0;
  }
  span {
    line-height: 1.33;
    font-size: 18px;
    color: ${e=>e.theme.colors.primaryBlue};
  }
`,r2=_.p`
  border: 1px solid ${e=>e.theme.colors.secondaryLightblue};
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  line-height: 1.33;
  color: ${e=>e.theme.colors.secondaryGray};
  margin-bottom: 24px;
  span {
    color: ${e=>e.theme.colors.primaryBlue};
  }
`,o2=_.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;

  @media (min-width: 768px) {
    gap: 6px;
  }
  p {
    max-width: 190px;
    @media (min-width: 768px) {
      max-width: 328px;
    }
  }
  span {
    line-height: 1.33;
    color: ${e=>e.theme.colors.primaryBlue};
    font-weight: 700;
    font-size: 18px;
  }
`,i2=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Uu=_.div`
  position: relative;
  &:last-child {
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;
  input{
    background-color: ${e=>e.theme.colors.mainBg};
  }
`,a2=_.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  label {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
  }
  input{
    background-color: ${e=>e.theme.colors.mainBg};
  }
`,s2=_.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;_.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  input {
    width: auto;
  }
`;const u2=_.p`
  position: absolute;
  bottom: -33px;
  color: ${e=>e.theme.colors.secondaryRed};
  font-size: 14px;
  line-height: 1.29;
  @media (min-width: 768px) {
    bottom: -17px;
  }
`,Yu=_.p`
  color: ${e=>e.theme.colors.secondaryRed};
  font-size: 14px;
  line-height: 1.29;
  position: absolute;
  bottom: -17px;
`,c2=()=>{const{gender:e}=le(Di),[t,n]=P.useState("0"),[r,o]=P.useState("0"),[i,a]=P.useState("1.8"),[s,u]=P.useState(()=>m()),{t:c}=xe(),l=uc({weight:Ia().typeError(c("normaModal.Weight must be a number")).min(3,c("normaModal.Weight must be more than 3kg")).max(300,c("normaModal.Weight must be less than 300kg")),sports:Ia().typeError(c("normaModal.Time must be a number")).positive(c("normaModal.Time must be more than 0"))}),{control:d,formState:{errors:p}}=cc({mode:"onChange",resolver:lc(l),defaultValues:{weight:"",sports:""}});P.useEffect(()=>{if(s&&t>0){const g=t*.03+r*.4;a(g.toFixed(1))}if(!s&&t>0){const g=t*.04+r*.6;a(g.toFixed(1))}},[t,r,s,a]);function m(){return e==="female"||e===null}function x(){return e==="female"||e===null?"female":"male"}return h.jsxs(h.Fragment,{children:[h.jsxs("form",{children:[h.jsxs(bf,{defaultValue:x(),name:"radio-buttons-group",row:!0,sx:{marginBottom:"16px"},children:[h.jsx(La,{value:"female",control:h.jsx(Wa,{}),label:c("normaModal.For woman"),onChange:()=>u(!0),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25,letterSpacing:"0"},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}}),h.jsx(La,{value:"male",control:h.jsx(Wa,{}),label:c("normaModal.For man"),onChange:()=>u(!1),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}})]}),h.jsxs(i2,{children:[h.jsxs(Uu,{children:[h.jsxs("label",{htmlFor:"weight",children:[c("normaModal.Your weight in kilograms"),":"]}),h.jsx(Fa,{name:"weight",control:d,render:({field:{onChange:g,...y}})=>h.jsx("input",{id:"weight",...y,onChange:({target:{value:v}})=>{g(v),n(v)},placeholder:"0",onFocus:v=>v.target.placeholder="",onBlur:v=>v.target.placeholder="0",onInput:v=>{v.target.value=v.target.value.replace(/(\.\d{1})\d+/,"$1"),v.target.value=v.target.value.replace(",",".")},autoComplete:"off"})}),p.weight&&t!==""&&h.jsx(Yu,{children:p.weight.message})]}),h.jsxs(Uu,{children:[h.jsxs("label",{htmlFor:"sports",children:[c("normaModal.The time of active participation in sports or other activities with a high physical load in hours"),":"]}),h.jsx(Fa,{name:"sports",control:d,render:({field:{onChange:g,...y}})=>h.jsx("input",{id:"sports",...y,onChange:({target:{value:v}})=>{g(v),o(v)},placeholder:"0",onFocus:v=>v.target.placeholder="",onBlur:v=>v.target.placeholder="0",onInput:v=>{v.target.value=v.target.value.replace(/(\.\d{1})\d+/,"$1"),v.target.value=v.target.value.replace(",",".")},autoComplete:"off"})}),p.sports&&r!==""&&h.jsx(Yu,{children:p.sports.message})]})]})]}),h.jsxs(o2,{children:[h.jsxs("p",{children:[c("normaModal.The required amount of water in liters per day"),":"]}),h.jsx("p",{children:h.jsxs("span",{children:[i," ",c("normaModal.L")]})})]})]})},l2=({onClose:e})=>{const t=Kt(),{t:n}=xe(),r=uc({norma:wf().matches(/^(0\.1|[1-9](\.\d)?|1[0-4](\.\d)?|15)$/,n("normaModal.normaError")).required()}),{register:o,handleSubmit:i,formState:{errors:a}}=cc({mode:"onChange",resolver:lc(r)});async function s(u){const l={waterRate:(u.norma*1e3).toString()};t(xf(l)).unwrap().then(()=>{e()}).catch(d=>{Of.Notify.failure(d.message,Pf)})}return h.jsxs(t2,{children:[h.jsx("h2",{children:n("normaModal.My daily norma")}),h.jsxs(n2,{children:[h.jsxs("p",{children:[n("normaModal.formulaGenderF"),": ",h.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),h.jsxs("p",{children:[n("normaModal.formulaGenderM"),": ",h.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),h.jsxs(r2,{children:[h.jsx("span",{children:"*"})," ",n("normaModal.explanation")]}),h.jsxs("h3",{children:[n("normaModal.Calculate your rate"),":"]}),h.jsx(c2,{}),h.jsxs("form",{action:"",onSubmit:i(s),children:[h.jsxs(a2,{children:[h.jsxs("label",{htmlFor:"norma",children:[n("normaModal. Write down how much water you will drink"),":"]}),h.jsx("input",{type:"text",...o("norma",{max:15}),name:"norma",id:"norma",placeholder:"0",onFocus:u=>u.target.placeholder="",onBlur:u=>u.target.placeholder="0",onInput:u=>{u.target.value=u.target.value.replace(/(\.\d{1})\d+/,"$1"),u.target.value=u.target.value.replace(",",".")},autoComplete:"off"}),a.norma&&h.jsx(u2,{children:a.norma.message})]}),h.jsx(s2,{children:h.jsx(sc,{type:"submit",children:n("save")})})]})]})},f2=_.div`
  width: 198px;
`,p2=_.div`
  width: 164px;
`,Gu=_.div`
  box-shadow: ${e=>e.theme.shadows.secondaryShadowContainer};
  background-color: ${e=>e.theme.colors.mainBg};
  border: 1px solid ${e=>e.theme.colors.secondaryBg};
  border-radius: 10px;
  padding: 8px 20px;

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: ${e=>e.theme.colors.textColor};
    min-width: 124px;
    margin-bottom: 12px;
  }

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: ${e=>e.theme.colors.primaryBlue};
    margin-bottom: 0;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  button {
    font-family: inherit;
    line-height: 1.25;
    color: #8baeff;
    outline: none;
    border: none;
    background: transparent;
  }
`,Xu=_.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,d2=()=>{const[e,t]=P.useState(!1),[n,r]=P.useState(!1),{waterRate:o}=le(Di),i=le(Cf),{t:a}=xe();P.useEffect(()=>{r(i==="uk")},[i]);const s=o/1e3;return h.jsxs(h.Fragment,{children:[n?h.jsx(f2,{children:h.jsxs(Gu,{children:[h.jsx("h2",{children:a("normaModal.My daily norma")}),h.jsxs(Xu,{children:[h.jsxs("p",{children:[s," ",a("normaModal.L")]}),h.jsx("button",{onClick:()=>t(!0),children:a("edit")})]})]})}):h.jsx(p2,{children:h.jsxs(Gu,{children:[h.jsx("h2",{children:a("normaModal.My daily norma")}),h.jsxs(Xu,{children:[h.jsxs("p",{children:[s," ",a("normaModal.L")]}),h.jsx("button",{onClick:()=>t(!0),children:a("edit")})]})]})}),e&&h.jsx(An,{open:e,onClose:()=>t(!1),children:h.jsx(l2,{onClose:()=>t(!1)})})]})};function se(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function Ze(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function h2(e,t){const n=+se(e);return Ze(e,n+t)}const Jl=6048e5,m2=864e5,v2=36e5;function g2(e,t){return h2(e,t*v2)}let y2={};function Kr(){return y2}function wt(e,t){var s,u,c,l;const n=Kr(),r=(t==null?void 0:t.weekStartsOn)??((u=(s=t==null?void 0:t.locale)==null?void 0:s.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((l=(c=n.locale)==null?void 0:c.options)==null?void 0:l.weekStartsOn)??0,o=se(e),i=o.getDay(),a=(i<r?7:0)+i-r;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}function Sr(e){return wt(e,{weekStartsOn:1})}function ef(e){const t=se(e),n=t.getFullYear(),r=Ze(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Sr(r),i=Ze(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const a=Sr(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}function qu(e){const t=se(e);return t.setHours(0,0,0,0),t}function Ku(e){const t=se(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function b2(e,t){const n=qu(e),r=qu(t),o=+n-Ku(n),i=+r-Ku(r);return Math.round((o-i)/m2)}function w2(e){const t=ef(e),n=Ze(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Sr(n)}function x2(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function O2(e){if(!x2(e)&&typeof e!="number")return!1;const t=se(e);return!isNaN(Number(t))}function P2(e){const t=se(e),n=Ze(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const C2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},S2=(e,t,n)=>{let r;const o=C2[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Bt(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const E2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},T2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},_2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},M2={date:Bt({formats:E2,defaultWidth:"full"}),time:Bt({formats:T2,defaultWidth:"full"}),dateTime:Bt({formats:_2,defaultWidth:"full"})},$2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},j2=(e,t,n,r)=>$2[e];function Se(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,s=n!=null&&n.width?String(n.width):a;o=e.formattingValues[s]||e.formattingValues[a]}else{const a=e.defaultWidth,s=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[s]||e.values[a]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const A2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},D2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},k2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},N2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},R2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},I2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},L2=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},W2={ordinalNumber:L2,era:Se({values:A2,defaultWidth:"wide"}),quarter:Se({values:D2,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Se({values:k2,defaultWidth:"wide"}),day:Se({values:N2,defaultWidth:"wide"}),dayPeriod:Se({values:R2,defaultWidth:"wide",formattingValues:I2,defaultFormattingWidth:"wide"})};function Ee(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const a=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?B2(s,d=>d.test(a)):F2(s,d=>d.test(a));let c;c=e.valueCallback?e.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;const l=t.slice(a.length);return{value:c,rest:l}}}function F2(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function B2(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function tf(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;const s=t.slice(o.length);return{value:a,rest:s}}}const H2=/^(\d+)(th|st|nd|rd)?/i,V2=/\d+/i,z2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},U2={any:[/^b/i,/^(a|c)/i]},Y2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},G2={any:[/1/i,/2/i,/3/i,/4/i]},X2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},q2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},K2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Z2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Q2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},J2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},e0={ordinalNumber:tf({matchPattern:H2,parsePattern:V2,valueCallback:e=>parseInt(e,10)}),era:Ee({matchPatterns:z2,defaultMatchWidth:"wide",parsePatterns:U2,defaultParseWidth:"any"}),quarter:Ee({matchPatterns:Y2,defaultMatchWidth:"wide",parsePatterns:G2,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ee({matchPatterns:X2,defaultMatchWidth:"wide",parsePatterns:q2,defaultParseWidth:"any"}),day:Ee({matchPatterns:K2,defaultMatchWidth:"wide",parsePatterns:Z2,defaultParseWidth:"any"}),dayPeriod:Ee({matchPatterns:Q2,defaultMatchWidth:"any",parsePatterns:J2,defaultParseWidth:"any"})},nf={code:"en-US",formatDistance:S2,formatLong:M2,formatRelative:j2,localize:W2,match:e0,options:{weekStartsOn:0,firstWeekContainsDate:1}},Zu=nf;function t0(e){const t=se(e);return b2(t,P2(t))+1}function n0(e){const t=se(e),n=+Sr(t)-+w2(t);return Math.round(n/Jl)+1}function rf(e,t){var l,d,p,m;const n=se(e),r=n.getFullYear(),o=Kr(),i=(t==null?void 0:t.firstWeekContainsDate)??((d=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??o.firstWeekContainsDate??((m=(p=o.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,a=Ze(e,0);a.setFullYear(r+1,0,i),a.setHours(0,0,0,0);const s=wt(a,t),u=Ze(e,0);u.setFullYear(r,0,i),u.setHours(0,0,0,0);const c=wt(u,t);return n.getTime()>=s.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function r0(e,t){var s,u,c,l;const n=Kr(),r=(t==null?void 0:t.firstWeekContainsDate)??((u=(s=t==null?void 0:t.locale)==null?void 0:s.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((l=(c=n.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??1,o=rf(e,t),i=Ze(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),wt(i,t)}function o0(e,t){const n=se(e),r=+wt(n,t)-+r0(n,t);return Math.round(r/Jl)+1}function B(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const ze={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return B(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):B(n+1,2)},d(e,t){return B(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return B(e.getHours()%12||12,t.length)},H(e,t){return B(e.getHours(),t.length)},m(e,t){return B(e.getMinutes(),t.length)},s(e,t){return B(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return B(o,t.length)}},jt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Qu={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return ze.y(e,t)},Y:function(e,t,n,r){const o=rf(e,r),i=o>0?o:1-o;if(t==="YY"){const a=i%100;return B(a,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):B(i,t.length)},R:function(e,t){const n=ef(e);return B(n,t.length)},u:function(e,t){const n=e.getFullYear();return B(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return B(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return B(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return ze.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return B(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=o0(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):B(o,t.length)},I:function(e,t,n){const r=n0(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):B(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):ze.d(e,t)},D:function(e,t,n){const r=t0(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):B(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return B(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return B(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return B(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=jt.noon:r===0?o=jt.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=jt.evening:r>=12?o=jt.afternoon:r>=4?o=jt.morning:o=jt.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return ze.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):ze.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):B(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):B(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):ze.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):ze.s(e,t)},S:function(e,t){return ze.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return ec(r);case"XXXX":case"XX":return pt(r);case"XXXXX":case"XXX":default:return pt(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return ec(r);case"xxxx":case"xx":return pt(r);case"xxxxx":case"xxx":default:return pt(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Ju(r,":");case"OOOO":default:return"GMT"+pt(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Ju(r,":");case"zzzz":default:return"GMT"+pt(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return B(r,t.length)},T:function(e,t,n){const r=e.getTime();return B(r,t.length)}};function Ju(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+B(i,2)}function ec(e,t){return e%60===0?(e>0?"-":"+")+B(Math.abs(e)/60,2):pt(e,t)}function pt(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=B(Math.trunc(r/60),2),i=B(r%60,2);return n+o+t+i}const tc=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},of=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},i0=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return tc(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",tc(r,t)).replace("{{time}}",of(o,t))},a0={p:of,P:i0},s0=/^D+$/,u0=/^Y+$/,c0=["D","DD","YY","YYYY"];function l0(e){return s0.test(e)}function f0(e){return u0.test(e)}function p0(e,t,n){const r=d0(e,t,n);if(console.warn(r),c0.includes(e))throw new RangeError(r)}function d0(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const h0=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,m0=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,v0=/^'([^]*?)'?$/,g0=/''/g,y0=/[a-zA-Z]/;function ji(e,t,n){var l,d,p,m,x,g,y,v;const r=Kr(),o=(n==null?void 0:n.locale)??r.locale??nf,i=(n==null?void 0:n.firstWeekContainsDate)??((d=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,a=(n==null?void 0:n.weekStartsOn)??((g=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:g.weekStartsOn)??r.weekStartsOn??((v=(y=r.locale)==null?void 0:y.options)==null?void 0:v.weekStartsOn)??0,s=se(e);if(!O2(s))throw new RangeError("Invalid time value");let u=t.match(m0).map(b=>{const O=b[0];if(O==="p"||O==="P"){const S=a0[O];return S(b,o.formatLong)}return b}).join("").match(h0).map(b=>{if(b==="''")return{isToken:!1,value:"'"};const O=b[0];if(O==="'")return{isToken:!1,value:b0(b)};if(Qu[O])return{isToken:!0,value:b};if(O.match(y0))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:b}});o.localize.preprocessor&&(u=o.localize.preprocessor(s,u));const c={firstWeekContainsDate:i,weekStartsOn:a,locale:o};return u.map(b=>{if(!b.isToken)return b.value;const O=b.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&f0(O)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&l0(O))&&p0(O,t,String(e));const S=Qu[O[0]];return S(s,O,o.localize,c)}).join("")}function b0(e){const t=e.match(v0);return t?t[1].replace(g0,"'"):e}function af(e,t,n){const r=wt(e,n),o=wt(t,n);return+r==+o}function w0(e,t){return g2(e,-t)}function dn(e,t){if(e.one!==void 0&&t===1)return e.one;const n=t%10,r=t%100;return n===1&&r!==11?e.singularNominative.replace("{{count}}",String(t)):n>=2&&n<=4&&(r<10||r>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function te(e){return(t,n)=>n&&n.addSuffix?n.comparison&&n.comparison>0?e.future?dn(e.future,t):"за "+dn(e.regular,t):e.past?dn(e.past,t):dn(e.regular,t)+" тому":dn(e.regular,t)}const x0=(e,t)=>t&&t.addSuffix?t.comparison&&t.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",O0={lessThanXSeconds:te({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:te({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:x0,lessThanXMinutes:te({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:te({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:te({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:te({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:te({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:te({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:te({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:te({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:te({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:te({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:te({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:te({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:te({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},P0=(e,t,n)=>(n=n||{},O0[e](t,n)),C0={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},S0={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},E0={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},T0={date:Bt({formats:C0,defaultWidth:"full"}),time:Bt({formats:S0,defaultWidth:"full"}),dateTime:Bt({formats:E0,defaultWidth:"full"})},Aa=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function _0(e){const t=Aa[e];switch(e){case 0:case 3:case 5:case 6:return"'у минулу "+t+" о' p";case 1:case 2:case 4:return"'у минулий "+t+" о' p"}}function sf(e){return"'у "+Aa[e]+" о' p"}function M0(e){const t=Aa[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступну "+t+" о' p";case 1:case 2:case 4:return"'у наступний "+t+" о' p"}}const $0=(e,t,n)=>{const r=se(e),o=r.getDay();return af(r,t,n)?sf(o):_0(o)},j0=(e,t,n)=>{const r=se(e),o=r.getDay();return af(r,t,n)?sf(o):M0(o)},A0={lastWeek:$0,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:j0,other:"P"},D0=(e,t,n,r)=>{const o=A0[e];return typeof o=="function"?o(t,n,r):o},k0={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},N0={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},R0={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},I0={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},L0={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},W0={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},F0={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},B0=(e,t)=>{const n=String(t==null?void 0:t.unit),r=Number(e);let o;return n==="date"?r===3||r===23?o="-є":o="-е":n==="minute"||n==="second"||n==="hour"?o="-а":o="-й",r+o},H0={ordinalNumber:B0,era:Se({values:k0,defaultWidth:"wide"}),quarter:Se({values:N0,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Se({values:R0,defaultWidth:"wide",formattingValues:I0,defaultFormattingWidth:"wide"}),day:Se({values:L0,defaultWidth:"wide"}),dayPeriod:Se({values:W0,defaultWidth:"any",formattingValues:F0,defaultFormattingWidth:"wide"})},V0=/^(\d+)(-?(е|й|є|а|я))?/i,z0=/\d+/i,U0={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},Y0={any:[/^д/i,/^н/i]},G0={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},X0={any:[/1/i,/2/i,/3/i,/4/i]},q0={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},K0={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},Z0={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},Q0={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},J0={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},eO={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},tO={ordinalNumber:tf({matchPattern:V0,parsePattern:z0,valueCallback:e=>parseInt(e,10)}),era:Ee({matchPatterns:U0,defaultMatchWidth:"wide",parsePatterns:Y0,defaultParseWidth:"any"}),quarter:Ee({matchPatterns:G0,defaultMatchWidth:"wide",parsePatterns:X0,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ee({matchPatterns:q0,defaultMatchWidth:"wide",parsePatterns:K0,defaultParseWidth:"any"}),day:Ee({matchPatterns:Z0,defaultMatchWidth:"wide",parsePatterns:Q0,defaultParseWidth:"any"}),dayPeriod:Ee({matchPatterns:J0,defaultMatchWidth:"wide",parsePatterns:eO,defaultParseWidth:"any"})},nO={code:"uk",formatDistance:P0,formatLong:T0,formatRelative:D0,localize:H0,match:tO,options:{weekStartsOn:1,firstWeekContainsDate:1}},nc=nO,rO=(e,t)=>Array.from({length:e},(n,r)=>({date:`${r+1}, ${t}`,portions:0,waterVolumePercentage:0,dailyNorma:0})),oO=(e,t)=>new Date(t,e+1,0).getDate(),iO=navigator.language,aO=(e,t="HH:mm")=>Ie.utc(e).locale(iO).format(t),sO=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],rc=e=>{const t=e==null?void 0:e.split(", ");return parseInt((t==null?void 0:t[0])??0)},uO=_.span`
  display: flex;
  flex-direction: column;
  padding: 13px 24px;
  gap: 16px;
  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    padding: 13px 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 16px 24px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    padding: 16px 24px;
  }
`,cr=_.span`
  color: ${e=>e.theme.colors.textColor};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,lr=_.span`
  color: ${e=>e.theme.colors.primaryBlue};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,cO=({item:e,index:t,monthName:n})=>{const{waterVolumePercentage:r,dailyNorma:o,portions:i}=e,a=Math.min(100,r),{t:s}=xe();return h.jsxs(uO,{children:[h.jsx(cr,{children:h.jsxs(lr,{children:[t+1,", ",n]})}),h.jsxs(cr,{children:[s("dayStatistics.Daily norma"),": ",h.jsx(lr,{children:o})]}),h.jsxs(cr,{children:[s("dayStatistics.Fulfillment of the daily norm"),":"," ",h.jsxs(lr,{children:[a,"%"]})]}),h.jsxs(cr,{children:[s("dayStatistics.How many servings of water"),":"," ",h.jsx(lr,{children:i})]})]})},lO=_.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - 104px) / 5);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: calc((100% - 306px) / 10);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 198px) / 10);
  }
`,fO=_.span`
  color: ${e=>e.theme.colors.secondaryBlue};
  font-size: 10px;
  line-height: 1.6;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 13px;
    line-height: 1.54;
  }

  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;_.button`
  display: flex;
  margin-left: auto;
  border: none;
  background: white;
`;const pO=_.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  min-height: 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: ${e=>e.theme.colors.textColor};
  background-color: ${e=>e.theme.colors.mainBg};
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: ${e=>e.theme.shadows.calendarShadow};
  }

  @media screen and (min-width: 768px) {
    min-width: 34px;
    min-height: 34px;
    font-size: 16px;
    line-height: 1.25;
  }
`,dO=({item:e,index:t,monthName:n})=>{const[r,o]=P.useState(null),{waterVolumePercentage:i}=e,a=x=>{o(i===0||r?null:x.currentTarget)},s=!!r,u=s?"simple-popper":void 0,c=i,l=r&&r.getBoundingClientRect().left>window.innerWidth/2,d=le(Sf),[p,m]=P.useState(Ba);return P.useEffect(()=>{m(d==="dark"?Ef:Ba)},[d,p]),h.jsxs(lO,{children:[h.jsx(pO,{"aria-describedby":u,onMouseEnter:a,onMouseLeave:a,style:{borderWidth:c===0?0:1,borderStyle:"solid",borderColor:c>=100?"transparent":p.colors.secondaryOrange},children:t+1}),h.jsxs(fO,{children:[c,"%"]}),h.jsx(hd,{id:u,open:s,anchorEl:r,placement:l?"right-start":"left-start",modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!0,padding:8}},{name:"flip",enabled:!0,options:{fallbackPlacements:["top"]}}],children:({TransitionProps:x})=>h.jsx(Tf,{component:"div",sx:{p:2,minWidth:"292px",minHeight:"188px",padding:"24px 16px",borderRadius:"10px",background:p.colors.mainBg,boxShadow:p.shadows.calendarShadow},onMouseLeave:a,...x,children:h.jsx(cO,{item:e,index:t,monthName:n})})})]})},hO=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,mO=_.div`
  display: flex;
  gap: 12px;

  span {
    color: ${e=>e.theme.colors.primaryBlue};
    font-size: 16px;
    line-height: 1.25;
    width: 120px;
    text-align: center;
  }
`,vO=_.ul`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 26px;

  width: 264px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    row-gap: 20px;
    column-gap: 34px;

    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 20px;
    column-gap: 22px;
    width: 544px;
    height: 284px;
  }
`,gO=_.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,oc=_.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: ${({disabled:e})=>e?"default":"pointer"};
  color: ${e=>e.disabled?"transparent":e.theme.colors.primaryBlue};


  transition: color 250ms ease-in-out;

  &:hover, &:focus {
    color: ${e=>e.disabled?"transparent":e.theme.colors.secondaryOrange};
  }

  svg{
    fill: currentColor;
    width: 14px;
    height: 14px;
  }
`,Bo=new Date,yO=()=>{const e=le(vd),[t,n]=P.useState(Bo.getMonth()),[r,o]=P.useState(Bo.getFullYear()),i=Kt(),{i18n:a}=xe(),s=sO(t),u=oO(t,r),c=rO(u,s),l=c==null?void 0:c.map(m=>Object.values(e).find(g=>rc(g.date)===rc(m.date))||m);P.useEffect(()=>{i(_f({year:r,month:t+1})),i(Mf({year:r,month:t}))},[i,r,t]);const d=()=>{t===0?(o(m=>m-1),n(11)):n(m=>m-1)},p=()=>{t===11?(o(m=>m+1),n(0)):n(m=>m+1)};return h.jsxs(h.Fragment,{children:[h.jsxs(hO,{children:[h.jsx(gO,{children:a.t("month")}),h.jsxs(mO,{children:[h.jsx(oc,{onClick:d,children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-arrow-left`})})}),h.jsxs("span",{style:{textTransform:"capitalize"},children:[ji(new Date(r,t,1),"LLLL",{locale:a.language==="uk"?nc:Zu}),", ",r]}),h.jsx(oc,{onClick:p,disabled:Bo<new Date(r,t+1),children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-arrow-right`})})})]})]}),h.jsx(vO,{children:l.map((m,x)=>{const g=ji(new Date(r,t,x+1),"LLLL",{locale:a.language==="uk"?nc:Zu});return h.jsx(dO,{item:m,index:x,monthName:g},x)})})]})},bO=_.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 544px;
  }
  
  h2 {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.23;
    color: ${e=>e.theme.colors.textColor};
    margin-bottom: 24px;
  }
  
  .text {
    color: ${e=>e.theme.colors.textColor};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    margin-bottom: 24px;
  }

  .wrapper-btn {
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;

    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 24px;
      justify-content: flex-end;
    }

    @media screen and (min-width: 1440px) {
      float: right;
    }
  }
  .cancel-btn {
    border-radius: 10px;
    background: ${e=>e.theme.colors.secondaryLightblue};
    cursor: pointer;
    border: none;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;

    color: ${e=>e.theme.colors.primaryBlue};
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      box-shadow: ${e=>e.theme.hovers.buttonShadow};
    }

    &:active {
      box-shadow: none;
    }
    @media screen and (min-width: 768px) {
      width: 160px;
      height: 44px;
      padding: 10px 30px;
    }

    @media screen and (min-width: 1440px) {
      float: right;
    }
  }

  .delete-btn {
    border-radius: 10px;
    background: ${e=>e.theme.colors.secondaryRed};
    cursor: pointer;
    border: none;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    box-shadow: ${e=>e.theme.shadows.buttonShadow};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    &:hover {
      box-shadow: ${e=>e.theme.hovers.buttonShadow};
    }

    &:active {
      box-shadow: none;
    }
    @media screen and (min-width: 768px) {
      width: 160px;
      height: 44px;
      padding: 10px 30px;
    }

    @media screen and (min-width: 1440px) {
      float: right;
    }
  }
`,wO=({onClose:e,id:t})=>{const n=Kt(),{t:r}=xe(),o=le(Vi);function i(){n($f({portionId:t,shouldUpdateMonth:ja(o)})).unwrap().then(()=>e())}return h.jsxs(bO,{children:[h.jsx("h2",{children:r("deleteModal.Delete entry")}),h.jsx("p",{className:"text",children:r("deleteModal.Are you sure you want to delete the entry?")}),h.jsxs("div",{className:"wrapper-btn",children:[h.jsx("button",{onClick:e,className:"cancel-btn",children:r("deleteModal.Cancel")}),h.jsx("button",{onClick:i,className:"delete-btn",children:r("deleteModal.Delete")})]})]})},xO=_.button`
  padding: 0;
  border: none;
  background-color: transparent;
  position: relative;
  color: ${e=>e.theme.colors.secondaryRed};
  
  &::after {
    content: '';
    height: 1px;
    width: 0;
    position: absolute;
    bottom: 1px;
    left: 0;
    background-color: currentColor;
    
    transition: width 250ms ease-in-out;
  }

  &:hover::after, 
  &:focus::after {
    width: 16px;
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;function OO({id:e}){const[t,n]=P.useState(!1);function r(){n(!0)}return h.jsxs(h.Fragment,{children:[h.jsx(xO,{onClick:r,children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-trash`})})}),t&&h.jsx(An,{onClose:()=>n(!1),children:h.jsx(wO,{id:e,onClose:()=>n(!1)})})]})}const uf=e=>P.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("path",{d:"M6.26099 3.13043L8.39972 32.7888V32.8696H26.8122L28.9509 3.22275V3.13043H6.26099ZM26.0557 32.0387H9.16193L7.55788 9.82376H8.43954L9.89002 29.4017C9.89851 29.5048 9.94461 29.601 10.0193 29.6714C10.094 29.7418 10.1919 29.7815 10.2939 29.7826H10.328C10.3811 29.7789 10.4329 29.7646 10.4806 29.7406C10.5282 29.7165 10.5707 29.6832 10.6056 29.6424C10.6404 29.6017 10.667 29.5544 10.6838 29.5031C10.7006 29.4519 10.7073 29.3979 10.7034 29.344L9.25294 9.82376H27.6597L26.0557 32.0387ZM27.7166 8.99286H9.19037L8.87184 4.66528C8.86183 4.5597 8.81293 4.46184 8.7349 4.39125C8.65687 4.32065 8.55546 4.28251 8.45092 4.28445C8.34378 4.29473 8.24477 4.34679 8.17474 4.42968C8.1047 4.51256 8.06913 4.61978 8.0755 4.72875L8.39404 8.99863H7.501L7.13696 3.95556H28.0807L27.7166 8.99286Z",fill:"#407BFF"}),P.createElement("path",{d:"M12.7797 13.9321C13.0452 13.9321 13.3047 13.8522 13.5255 13.7026C13.7462 13.553 13.9183 13.3403 14.0199 13.0914C14.1215 12.8426 14.1481 12.5688 14.0963 12.3047C14.0445 12.0405 13.9166 11.7979 13.7289 11.6074C13.5411 11.417 13.3019 11.2873 13.0415 11.2348C12.7811 11.1822 12.5112 11.2092 12.2659 11.3122C12.0206 11.4153 11.811 11.5898 11.6635 11.8138C11.516 12.0377 11.4373 12.301 11.4373 12.5703C11.4373 12.9315 11.5787 13.2779 11.8304 13.5332C12.0822 13.7886 12.4236 13.9321 12.7797 13.9321ZM12.7797 12.0337C12.8843 12.0337 12.9866 12.0652 13.0735 12.1241C13.1605 12.1831 13.2283 12.2669 13.2684 12.365C13.3084 12.463 13.3189 12.5709 13.2985 12.675C13.2781 12.7791 13.2277 12.8747 13.1537 12.9498C13.0797 13.0248 12.9855 13.0759 12.8829 13.0966C12.7802 13.1173 12.6739 13.1067 12.5772 13.0661C12.4806 13.0255 12.3979 12.9567 12.3398 12.8685C12.2817 12.7802 12.2507 12.6765 12.2507 12.5703C12.2507 12.428 12.3064 12.2915 12.4056 12.1909C12.5048 12.0902 12.6394 12.0337 12.7797 12.0337Z",fill:"#407BFF"}),P.createElement("path",{d:"M12.7738 18.3578C12.7772 18.6266 12.8589 18.8883 13.0087 19.1101C13.1585 19.3319 13.3696 19.5037 13.6155 19.604C13.8614 19.7042 14.1311 19.7284 14.3905 19.6734C14.6499 19.6185 14.8875 19.4869 15.0733 19.2952C15.2591 19.1035 15.3848 18.8603 15.4346 18.5962C15.4844 18.3322 15.456 18.0591 15.353 17.8114C15.2501 17.5637 15.0772 17.3524 14.856 17.2042C14.6349 17.0561 14.3755 16.9776 14.1105 16.9787C13.9332 16.9794 13.7579 17.0158 13.5946 17.0856C13.4312 17.1555 13.2832 17.2575 13.1589 17.3857C13.0346 17.5139 12.9366 17.6658 12.8705 17.8327C12.8044 17.9995 12.7715 18.178 12.7738 18.3578ZM14.6395 18.3578C14.6395 18.4639 14.6085 18.5676 14.5503 18.6559C14.4922 18.7441 14.4096 18.8129 14.3129 18.8535C14.2163 18.8941 14.1099 18.9048 14.0073 18.8841C13.9047 18.8634 13.8104 18.8122 13.7364 18.7372C13.6625 18.6622 13.6121 18.5665 13.5917 18.4624C13.5713 18.3583 13.5817 18.2505 13.6218 18.1524C13.6618 18.0543 13.7296 17.9705 13.8166 17.9116C13.9036 17.8526 14.0059 17.8211 14.1105 17.8211C14.2508 17.8211 14.3854 17.8777 14.4846 17.9783C14.5838 18.0789 14.6395 18.2154 14.6395 18.3578Z",fill:"#407BFF"}),P.createElement("path",{d:"M22.3129 18.3924C22.5784 18.3924 22.8379 18.3125 23.0587 18.1629C23.2794 18.0132 23.4515 17.8006 23.5531 17.5517C23.6547 17.3029 23.6813 17.0291 23.6295 16.765C23.5777 16.5008 23.4498 16.2582 23.2621 16.0677C23.0743 15.8773 22.8351 15.7476 22.5747 15.6951C22.3143 15.6425 22.0444 15.6695 21.7991 15.7725C21.5539 15.8756 21.3442 16.0501 21.1967 16.2741C21.0492 16.498 20.9705 16.7613 20.9705 17.0306C20.9705 17.3918 21.1119 17.7382 21.3636 17.9935C21.6154 18.2489 21.9568 18.3924 22.3129 18.3924ZM22.3129 16.4998C22.4177 16.4998 22.5202 16.5314 22.6073 16.5906C22.6944 16.6499 22.7622 16.734 22.8021 16.8324C22.842 16.9308 22.8521 17.039 22.8312 17.1432C22.8104 17.2475 22.7594 17.3431 22.6849 17.4179C22.6103 17.4927 22.5155 17.5434 22.4125 17.5634C22.3095 17.5835 22.203 17.572 22.1064 17.5305C22.0099 17.489 21.9277 17.4193 21.8702 17.3303C21.8128 17.2413 21.7827 17.137 21.7839 17.0306C21.7854 16.8893 21.8418 16.7543 21.9408 16.6549C22.0398 16.5555 22.1735 16.4998 22.3129 16.4998Z",fill:"#407BFF"}),P.createElement("path",{d:"M17.6373 15.8247C17.9028 15.8247 18.1624 15.7448 18.3831 15.5952C18.6039 15.4455 18.7759 15.2329 18.8775 14.984C18.9791 14.7352 19.0057 14.4614 18.9539 14.1972C18.9021 13.9331 18.7743 13.6905 18.5865 13.5C18.3988 13.3096 18.1596 13.1799 17.8992 13.1273C17.6388 13.0748 17.3689 13.1018 17.1236 13.2048C16.8783 13.3079 16.6687 13.4824 16.5212 13.7064C16.3737 13.9303 16.2949 14.1936 16.2949 14.4629C16.2949 14.8241 16.4364 15.1704 16.6881 15.4258C16.9399 15.6812 17.2813 15.8247 17.6373 15.8247ZM17.6373 13.9263C17.7419 13.9263 17.8442 13.9578 17.9312 14.0167C18.0182 14.0757 18.086 14.1595 18.126 14.2576C18.1661 14.3556 18.1766 14.4635 18.1562 14.5676C18.1357 14.6717 18.0854 14.7673 18.0114 14.8424C17.9374 14.9174 17.8431 14.9685 17.7405 14.9892C17.6379 15.0099 17.5315 14.9993 17.4349 14.9587C17.3382 14.9181 17.2556 14.8493 17.1975 14.761C17.1394 14.6728 17.1083 14.569 17.1083 14.4629C17.1045 14.3901 17.1153 14.3172 17.1401 14.2487C17.165 14.1802 17.2033 14.1176 17.2528 14.0647C17.3024 14.0117 17.362 13.9696 17.4281 13.9409C17.4942 13.9121 17.5654 13.8973 17.6373 13.8974V13.9263Z",fill:"#407BFF"}),P.createElement("path",{d:"M15.0776 23.5451C15.0832 23.7663 15.153 23.9809 15.2782 24.1621C15.4035 24.3433 15.5786 24.483 15.7817 24.5638C15.9848 24.6446 16.2069 24.6628 16.4201 24.6161C16.6334 24.5695 16.8283 24.4602 16.9806 24.3017C17.1329 24.1433 17.2358 23.9428 17.2763 23.7253C17.3169 23.5079 17.2933 23.2832 17.2086 23.0792C17.1239 22.8753 16.9817 22.7013 16.8 22.5789C16.6183 22.4564 16.405 22.3911 16.1868 22.3911C15.8901 22.3986 15.608 22.5235 15.4007 22.7391C15.1935 22.9547 15.0775 23.2439 15.0776 23.5451ZM16.1868 23.245C16.2453 23.245 16.3025 23.2626 16.3512 23.2956C16.3998 23.3286 16.4377 23.3754 16.4601 23.4302C16.4825 23.4851 16.4883 23.5454 16.4769 23.6036C16.4655 23.6618 16.4373 23.7153 16.396 23.7572C16.3546 23.7992 16.3019 23.8278 16.2445 23.8394C16.1872 23.8509 16.1277 23.845 16.0736 23.8223C16.0196 23.7996 15.9734 23.7611 15.9409 23.7118C15.9084 23.6624 15.891 23.6044 15.891 23.5451C15.891 23.4655 15.9222 23.3892 15.9777 23.3329C16.0331 23.2766 16.1084 23.245 16.1868 23.245Z",fill:"#407BFF"}),P.createElement("path",{d:"M20.4414 22.2929C20.6691 22.301 20.894 22.2394 21.0868 22.1163C21.2797 21.9932 21.4317 21.8142 21.523 21.6024C21.6144 21.3907 21.641 21.1559 21.5994 20.9287C21.5577 20.7014 21.4497 20.4921 21.2894 20.3278C21.1292 20.1635 20.9239 20.0519 20.7003 20.0073C20.4767 19.9627 20.2451 19.9872 20.0354 20.0777C19.8258 20.1682 19.6477 20.3205 19.5244 20.5149C19.401 20.7092 19.338 20.9367 19.3436 21.1678C19.3507 21.4619 19.4683 21.7423 19.6723 21.9514C19.8764 22.1606 20.1515 22.2827 20.4414 22.2929ZM20.4414 20.8677C20.5199 20.8677 20.5951 20.8993 20.6506 20.9556C20.706 21.0119 20.7372 21.0882 20.7372 21.1678C20.7372 21.2474 20.706 21.3237 20.6506 21.3799C20.5951 21.4362 20.5199 21.4678 20.4414 21.4678C20.3624 21.4678 20.2866 21.4364 20.2302 21.3803C20.1738 21.3242 20.1414 21.2479 20.1399 21.1678C20.1399 21.1279 20.1478 21.0884 20.163 21.0516C20.1782 21.0148 20.2005 20.9815 20.2286 20.9535C20.2566 20.9256 20.2899 20.9036 20.3265 20.8889C20.363 20.8742 20.4021 20.867 20.4414 20.8677Z",fill:"#407BFF"}),P.createElement("path",{d:"M22.7851 12.98C23.0101 12.98 23.23 12.9123 23.4171 12.7855C23.6042 12.6587 23.75 12.4785 23.8361 12.2676C23.9222 12.0567 23.9448 11.8247 23.9009 11.6008C23.857 11.377 23.7486 11.1714 23.5895 11.01C23.4304 10.8486 23.2277 10.7387 23.007 10.6941C22.7863 10.6496 22.5576 10.6725 22.3497 10.7598C22.1419 10.8472 21.9642 10.9951 21.8392 11.1848C21.7142 11.3746 21.6475 11.5977 21.6475 11.826C21.6475 12.1321 21.7673 12.4256 21.9807 12.642C22.194 12.8584 22.4834 12.98 22.7851 12.98ZM22.7851 11.5548C22.8291 11.542 22.8754 11.5398 22.9205 11.5483C22.9655 11.5568 23.0079 11.5758 23.0445 11.6038C23.081 11.6317 23.1107 11.6679 23.1311 11.7095C23.1515 11.7511 23.1621 11.7969 23.1621 11.8433C23.1621 11.8897 23.1515 11.9355 23.1311 11.9771C23.1107 12.0187 23.081 12.0549 23.0445 12.0828C23.0079 12.1108 22.9655 12.1298 22.9205 12.1383C22.8754 12.1468 22.8291 12.1446 22.7851 12.1318C22.7411 12.1446 22.6947 12.1468 22.6497 12.1383C22.6047 12.1298 22.5623 12.1108 22.5257 12.0828C22.4892 12.0549 22.4595 12.0187 22.4391 11.9771C22.4187 11.9355 22.4081 11.8897 22.4081 11.8433C22.4081 11.7969 22.4187 11.7511 22.4391 11.7095C22.4595 11.6679 22.4892 11.6317 22.5257 11.6038C22.5623 11.5758 22.6047 11.5568 22.6497 11.5483C22.6947 11.5398 22.7411 11.542 22.7851 11.5548Z",fill:"#407BFF"}),P.createElement("path",{d:"M11.6646 30.5904C11.6136 30.6142 11.568 30.6485 11.5306 30.691C11.4931 30.7335 11.4647 30.7834 11.4471 30.8375C11.4295 30.8916 11.4231 30.9488 11.4282 31.0056C11.4333 31.0623 11.4499 31.1174 11.4769 31.1674C11.5119 31.2348 11.5642 31.2913 11.6283 31.3309C11.6924 31.3705 11.7659 31.3918 11.841 31.3924C11.904 31.3942 11.9665 31.3803 12.023 31.352C13.7609 30.4488 15.6845 29.9744 17.6372 29.9672C19.7037 29.9977 21.7414 30.4634 23.6211 31.3347C23.6955 31.3741 23.78 31.3894 23.8632 31.3785C23.9464 31.3675 24.0243 31.331 24.0863 31.2737C24.1484 31.2164 24.1916 31.1412 24.2101 31.0582C24.2286 30.9752 24.2216 30.8884 24.1899 30.8096C24.1499 30.7073 24.0724 30.6246 23.9738 30.5788C21.9837 29.6554 19.8254 29.164 17.6372 29.1363C15.5614 29.1381 13.5152 29.6363 11.6646 30.5904Z",fill:"#407BFF"})),PO=_.div`
  @media only screen and (min-width: 768px) {
    width: 656px;
  }

  @media only screen and (min-width: 1440px) {
    width: auto;
  }
`,CO=_.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;

  margin-bottom: 24px;
`,SO=_.div`
  font-size: 18px;
  line-height: 1.1;
  margin-bottom: 16px;
  font-weight: 500;
`,EO=_(uf)`
  width: 36px;
  height: 36px;
`,TO=_.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  gap: 7px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;
    padding: 10px;

    gap: 10px;

    border-radius: 30px;
    border: 1px solid ${e=>e.theme.colors.secondaryBlue};
    background: ${e=>e.theme.colors.mainBg};

    box-shadow: ${e=>e.theme.shadows.secondaryButtonShadow};

    color: ${e=>e.theme.colors.primaryBlue};

    cursor: pointer;

    transition:
      color 250ms ease-in-out,
      border-color 250ms ease-in-out,
      box-shadow 250ms ease-in-out;

    &:hover,
    &:focus {
      color: ${e=>e.theme.colors.secondaryOrange};
      border-color: ${e=>e.theme.colors.secondaryOrange};
      box-shadow: ${e=>e.theme.shadows.buttonShadow};
    }

    svg {
      fill: currentColor;
      width: 24px;
      height: 24px;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 92px;
    height: 36px;

    padding: 6px 10px;
    gap: 10px;

    border-radius: 40px;
    background: ${e=>e.theme.colors.secondaryLightblue};
    color: ${e=>e.theme.colors.primaryBlue};

    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`,_O=_.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 10px;

    outline: none;
    border-radius: 6px;
    border: 1px solid ${e=>e.theme.colors.secondaryLightblue};
    appearance: none;
    color: ${e=>e.theme.colors.primaryBlue};
    background-color: ${e=>e.theme.colors.mainBg};
    font-size: 16px;
    line-height: 1.25;
    text-align: left;

    @media screen and (min-width: 768px) {
      width: 544px;
    }

    label:nth-child(2) {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.1;
    }
  }
`,MO=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  p {
    color: ${e=>e.theme.colors.primaryBlue};
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    line-height: 1.33;
  }

  button {
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 10px;
    padding: 10px 30px;

    outline: none;
    border-radius: 10px;
    border: none;

    color: ${e=>e.theme.colors.mainBg};
    background: ${e=>e.theme.colors.primaryBlue};

    box-shadow: ${e=>e.theme.shadows.buttonShadow};

    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    cursor: pointer;

    transition: box-shadow 250ms ease-in-out;

    &:hover,
    &:focus {
      box-shadow: ${e=>e.theme.hovers.buttonShadow};
    }

    &:active {
      box-shadow: none;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;

    justify-content: flex-end;

    button {
      width: 160px;
    }
  }
`,$O=_.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: ${e=>e.theme.colors.secondaryBg};
  margin-bottom: 24px;
`,jO=_.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`,AO=_.p`
  color: ${e=>e.theme.colors.textColor};
  font-size: 12px;
  line-height: 2;
`,DO=_.p`
  color: ${e=>e.theme.colors.textColor};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
  margin-bottom: 12px;
`,kO=_(Hn)`
  &.rc-time-picker {
    max-width: 544px;
  }

  & .rc-time-picker-input {
    height: 44px;
    border: 1px solid ${e=>e.theme.colors.secondaryLightblue};
    border-radius: 6px;
    padding: 12px 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${e=>e.theme.colors.primaryBlue};
  }

  & .rc-time-picker-clear {
    top: 10px;
  }
`,ic=20,NO=({onClose:e,id:t})=>{const{t:n}=xe(),r=Kt(),o=le(Vi),a=le(Hi).find(b=>b._id===t),[s,u]=P.useState(a.waterAmount),{handleSubmit:c,values:{date:l,waterAmount:d},errors:p,setFieldValue:m}=rl({initialValues:{waterAmount:a.waterAmount.toString(),date:Ie().format("HH:mm")},onSubmit:b=>{r(jf({portionId:t,credentials:b,shouldUpdateMonth:ja(o)})).unwrap().then(()=>{e()})}}),x=()=>{m("waterAmount",s?s.toString():"0")},g=()=>{const b=Number.parseInt(d)+ic;m("waterAmount",b.toString()),u(b)},y=()=>{const b=Number.parseInt(d)-ic;m("waterAmount",b<=0?"0":b.toString()),u(b<=0?0:b)};function v(b){u(Number.parseInt(isNaN(Number.parseInt(b))?0:b))}return h.jsxs(PO,{onSubmit:c,children:[h.jsx(CO,{children:"Edit the entered amount of water"}),h.jsxs($O,{children:[h.jsx(EO,{}),h.jsxs(jO,{children:[a.waterAmount,n("ml")]}),h.jsxs(AO,{children:[" ",ji(w0(a.date,2),"HH:mm")]})]}),h.jsx(SO,{children:"Correct entered data"}),h.jsxs(DO,{children:[n("addModal.Amount of water"),":"]}),h.jsxs(TO,{children:[h.jsx("button",{onClick:y,name:"minus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-minus`})})}),h.jsxs("span",{className:"water-amount-value",children:[d,n("ml")]}),h.jsx("button",{onClick:g,name:"plus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-plus`})})})]}),h.jsxs(_O,{children:[h.jsxs("label",{children:[n("addModal.Recording time"),":",h.jsx(kO,{defaultValue:Ie(l,"HH:mm"),showSecond:!1,minuteStep:5,onChange:b=>{m("date",b&&b.format("HH:mm"))}}),p.date?h.jsx("div",{children:p.date}):null]}),h.jsxs("label",{children:[n("addModal.Enter the value of the water used"),":",h.jsx("input",{name:"number",value:s,onBlur:x,onChange:({target:{value:b}})=>v(b)}),p.waterAmount?h.jsx("div",{children:p.waterAmount}):null]}),h.jsxs(MO,{children:[h.jsxs("p",{children:[d,n("ml")]}),h.jsx("button",{disabled:Object.keys(p).length>0,type:"submit",children:n("save")})]})]})]})},RO=_.button`
  padding: 0;
  border: none;
  background-color: transparent;
  position: relative;
  color: ${e=>e.theme.colors.secondaryBlue};

  &::after {
    content: '';
    height: 1px;
    width: 0;
    position: absolute;
    bottom: 1px;
    left: 0;
    background-color: currentColor;

    transition: width 250ms ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    width: 16px;
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;function IO({id:e}){const[t,n]=P.useState(!1);function r(){n(!0)}return h.jsxs(h.Fragment,{children:[h.jsx(RO,{onClick:r,children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-edit`})})}),t&&h.jsx(An,{onClose:()=>n(!1),children:h.jsx(NO,{id:e,onClose:()=>n(!1)})})]})}const LO=_.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 264px;
  height: 212px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
  }

  .motivation {
    text-align: center;
    font-size: 16px;
    color: ${e=>e.theme.colors.primaryBlue};
  }
`,WO=_.ul`
  max-height: 192px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.secondaryBlue};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.colors.secondaryBlue};
  }

  li {
    padding-bottom: 12px;
  }

  li:not(:first-child) {
    padding-top: 12px;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
`,FO=_.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${e=>e.theme.colors.secondaryLightblue};

  .icon-glass {
    width: 26px;
    height: 26px;
    margin-right: 12px;

    @media screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
`,BO=_.span`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.33;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`,HO=_.span`
  font-size: 12px;
  line-height: 2;
  color: ${e=>e.theme.colors.textColor};
`,VO=_.div`
  margin-left: auto;
  margin-right: 4px;

  button:first-child {
    margin-right: 18px;
  }
`,zO=_.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;

  color: ${e=>e.theme.colors.primaryBlue};
  line-height: 1.25;
  border: none;
  background-color: transparent;

  transition: color 250ms ease-in-out;

  font-size: 16px;
  font-weight: 500;

  &:hover, &:focus {
    color: ${e=>e.theme.colors.secondaryOrange};
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`,UO=()=>{const e=le(Hi),[t,n]=P.useState(!1),[r,o]=P.useState(!1),{t:i}=xe(),a=c=>{o(!0),n(!1),c.stopPropagation()},s=()=>{o(!1)},u=[...e].sort((c,l)=>{const d=new Date(c.date);return new Date(l.date)-d});return h.jsxs(LO,{children:[u.length>0&&h.jsx(WO,{children:u==null?void 0:u.map(c=>h.jsxs(FO,{children:[h.jsx(uf,{className:"glass"}),h.jsxs(BO,{children:[`${c.waterAmount} ${i("ml")}`," "]}),h.jsx(HO,{children:aO(c.date)}),h.jsxs(VO,{children:[h.jsx(IO,{id:c._id}),h.jsx(OO,{id:c._id})]})]},c._id))}),h.jsxs(zO,{onClick:c=>a(c),children:[h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-plus`})}),i("addWater")]}),r&&h.jsx(An,{$position:"center",open:r,onClose:s,children:h.jsx(Ql,{onClose:s,isEditing:t})})]})},YO=_.div`
  margin-bottom: 24px;
`,GO=_.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,XO=_.p`
font-size: 18px;
 color: ${e=>e.theme.colors.secondaryBlue};
 margin-bottom: 16px;
`,qO=()=>{const e=Kt(),t=le(Hi),[n,r]=P.useState(!1),{t:o}=xe();return P.useEffect(()=>{e(Af())},[e]),P.useEffect(()=>{t.length===0?r(!0):r(!1)},[t]),h.jsxs(YO,{children:[h.jsx(GO,{children:o("today")}),n&&h.jsx(XO,{children:"No notes yet"}),h.jsx(UO,{})]})},KO=_.div`
  width: 280px;
  padding: 24px 8px;
  border-radius: 10px;
  background: ${e=>e.theme.colors.secondaryBg};
  box-shadow: ${e=>e.theme.shadows.windowShadowContainer};

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`,ZO=()=>h.jsxs(KO,{children:[h.jsx(qO,{}),h.jsx(yO,{})]}),QO=_(Df)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;
  background-color: transparent;
  padding-top: 16px;

  @media only screen and (min-width: 768px) {
    padding-top: 32px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    padding-top: 8px;
    padding-bottom: 0;
  }
`,JO=_.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  height: 440px;

  @media only screen and (min-width: 768px) {
    height: 492px;
  }

  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
    padding-top: 32px;
    padding-bottom: 16px;
  }
`,eP=_.div`
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
  }
`,tP=_.div`
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);
  background-image: url(${e=>e.theme.backgroundImage.bgHomeMob});
  background-position: calc(50% + 3px) 44px;
  
  @media only screen and (min-width: 768px) {
    min-height: calc(100% - 80px);
    background-image: url(${e=>e.theme.backgroundImage.bgHomeTab});
    background-position: calc(50% + 9px) 8px;
  }

  @media only screen and (min-width: 1440px) {
    min-height: calc(100% - 72px);
    background-image: url(${e=>e.theme.backgroundImage.bgHomeDesktop});
    background-position: calc(50% - 10px) 46px;
  }
`,oP=()=>h.jsx(tP,{id:"beckground",children:h.jsxs(QO,{children:[h.jsxs(JO,{children:[h.jsx(d2,{}),h.jsx(e2,{})]}),h.jsx(eP,{children:h.jsx(ZO,{})})]})});export{oP as default};
