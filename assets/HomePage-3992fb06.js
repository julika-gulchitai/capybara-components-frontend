import{g as Xt,r as C,b as hf,_ as Di,o as Da,j as h,P as mf,c as Ht,d as ka,e as Na,f as vf,h as gf,i as yf,k as bf,l as wf,R as we,m as j,n as fr,p as Ie,q as sc,u as _,t as Kt,v as ne,a as xe,w as xf,s as Me,B as uc,x as Sr,M as An,y as cc,z as Ra,C as lc,D as fc,E as Of,F as Ia,G as La,H as Wa,I as Cf,J as Pf,K as pc,N as Sf,O as Ef,Q as Tf,S as _f,T as Fa,U as Mf,V as $f,W as jf,X as Af,Y as Df,Z as kf,A as Nf}from"./index-9ec36a90.js";var dc={exports:{}},Rf="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",If=Rf,Lf=If;function hc(){}function mc(){}mc.resetWarningCache=hc;var Wf=function(){function e(r,o,i,a,s,u){if(u!==Lf){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:mc,resetWarningCache:hc};return n.PropTypes=n,n};dc.exports=Wf();var Ff=dc.exports;const f=Xt(Ff),Bf={disableDefaultClasses:!1},Hf=C.createContext(Bf);function Vf(e){const{disableDefaultClasses:t}=C.useContext(Hf);return n=>t?"":e(n)}const vc="base";function zf(e){return`${vc}--${e}`}function Uf(e,t){return`${vc}-${e}-${t}`}function gc(e,t){const n=hf[t];return n?zf(n):Uf(e,t)}function Yf(e,t){const n={};return t.forEach(r=>{n[r]=gc(e,r)}),n}var ie="top",ge="bottom",ye="right",ae="left",ki="auto",Dn=[ie,ge,ye,ae],Vt="start",Cn="end",Gf="clippingParents",yc="viewport",un="popper",qf="reference",Ba=Dn.reduce(function(e,t){return e.concat([t+"-"+Vt,t+"-"+Cn])},[]),bc=[].concat(Dn,[ki]).reduce(function(e,t){return e.concat([t,t+"-"+Vt,t+"-"+Cn])},[]),Xf="beforeRead",Kf="read",Zf="afterRead",Qf="beforeMain",Jf="main",ep="afterMain",tp="beforeWrite",np="write",rp="afterWrite",op=[Xf,Kf,Zf,Qf,Jf,ep,tp,np,rp];function $e(e){return e?(e.nodeName||"").toLowerCase():null}function le(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function mt(e){var t=le(e).Element;return e instanceof t||e instanceof Element}function ve(e){var t=le(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ni(e){if(typeof ShadowRoot>"u")return!1;var t=le(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function ip(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!ve(i)||!$e(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function ap(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(u,c){return u[c]="",u},{});!ve(o)||!$e(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(u){o.removeAttribute(u)}))})}}const sp={name:"applyStyles",enabled:!0,phase:"write",fn:ip,effect:ap,requires:["computeStyles"]};function _e(e){return e.split("-")[0]}var dt=Math.max,vr=Math.min,zt=Math.round;function Uo(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function wc(){return!/^((?!chrome|android).)*safari/i.test(Uo())}function Ut(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&ve(e)&&(o=e.offsetWidth>0&&zt(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&zt(r.height)/e.offsetHeight||1);var a=mt(e)?le(e):window,s=a.visualViewport,u=!wc()&&n,c=(r.left+(u&&s?s.offsetLeft:0))/o,l=(r.top+(u&&s?s.offsetTop:0))/i,p=r.width/o,d=r.height/i;return{width:p,height:d,top:l,right:c+p,bottom:l+d,left:c,x:c,y:l}}function Ri(e){var t=Ut(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function xc(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Ni(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Le(e){return le(e).getComputedStyle(e)}function up(e){return["table","td","th"].indexOf($e(e))>=0}function Ze(e){return((mt(e)?e.ownerDocument:e.document)||window.document).documentElement}function Er(e){return $e(e)==="html"?e:e.assignedSlot||e.parentNode||(Ni(e)?e.host:null)||Ze(e)}function Ha(e){return!ve(e)||Le(e).position==="fixed"?null:e.offsetParent}function cp(e){var t=/firefox/i.test(Uo()),n=/Trident/i.test(Uo());if(n&&ve(e)){var r=Le(e);if(r.position==="fixed")return null}var o=Er(e);for(Ni(o)&&(o=o.host);ve(o)&&["html","body"].indexOf($e(o))<0;){var i=Le(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function kn(e){for(var t=le(e),n=Ha(e);n&&up(n)&&Le(n).position==="static";)n=Ha(n);return n&&($e(n)==="html"||$e(n)==="body"&&Le(n).position==="static")?t:n||cp(e)||t}function Ii(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function yn(e,t,n){return dt(e,vr(t,n))}function lp(e,t,n){var r=yn(e,t,n);return r>n?n:r}function Oc(){return{top:0,right:0,bottom:0,left:0}}function Cc(e){return Object.assign({},Oc(),e)}function Pc(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var fp=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Cc(typeof t!="number"?t:Pc(t,Dn))};function pp(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=_e(n.placement),u=Ii(s),c=[ae,ye].indexOf(s)>=0,l=c?"height":"width";if(!(!i||!a)){var p=fp(o.padding,n),d=Ri(i),m=u==="y"?ie:ae,b=u==="y"?ge:ye,g=n.rects.reference[l]+n.rects.reference[u]-a[u]-n.rects.popper[l],y=a[u]-n.rects.reference[u],v=kn(i),w=v?u==="y"?v.clientHeight||0:v.clientWidth||0:0,O=g/2-y/2,S=p[m],T=w-d[l]-p[b],P=w/2-d[l]/2+O,E=yn(S,P,T),D=u;n.modifiersData[r]=(t={},t[D]=E,t.centerOffset=E-P,t)}}function dp(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||xc(t.elements.popper,o)&&(t.elements.arrow=o))}const hp={name:"arrow",enabled:!0,phase:"main",fn:pp,effect:dp,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Yt(e){return e.split("-")[1]}var mp={top:"auto",right:"auto",bottom:"auto",left:"auto"};function vp(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:zt(n*o)/o||0,y:zt(r*o)/o||0}}function Va(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,u=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,p=e.isFixed,d=a.x,m=d===void 0?0:d,b=a.y,g=b===void 0?0:b,y=typeof l=="function"?l({x:m,y:g}):{x:m,y:g};m=y.x,g=y.y;var v=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),O=ae,S=ie,T=window;if(c){var P=kn(n),E="clientHeight",D="clientWidth";if(P===le(n)&&(P=Ze(n),Le(P).position!=="static"&&s==="absolute"&&(E="scrollHeight",D="scrollWidth")),P=P,o===ie||(o===ae||o===ye)&&i===Cn){S=ge;var k=p&&P===T&&T.visualViewport?T.visualViewport.height:P[E];g-=k-r.height,g*=u?1:-1}if(o===ae||(o===ie||o===ge)&&i===Cn){O=ye;var R=p&&P===T&&T.visualViewport?T.visualViewport.width:P[D];m-=R-r.width,m*=u?1:-1}}var F=Object.assign({position:s},c&&mp),X=l===!0?vp({x:m,y:g},le(n)):{x:m,y:g};if(m=X.x,g=X.y,u){var L;return Object.assign({},F,(L={},L[S]=w?"0":"",L[O]=v?"0":"",L.transform=(T.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",L))}return Object.assign({},F,(t={},t[S]=w?g+"px":"",t[O]=v?m+"px":"",t.transform="",t))}function gp(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,u=s===void 0?!0:s,c={placement:_e(t.placement),variation:Yt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Va(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Va(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const yp={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:gp,data:{}};var Yn={passive:!0};function bp(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,u=le(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(l){l.addEventListener("scroll",n.update,Yn)}),s&&u.addEventListener("resize",n.update,Yn),function(){i&&c.forEach(function(l){l.removeEventListener("scroll",n.update,Yn)}),s&&u.removeEventListener("resize",n.update,Yn)}}const wp={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:bp,data:{}};var xp={left:"right",right:"left",bottom:"top",top:"bottom"};function pr(e){return e.replace(/left|right|bottom|top/g,function(t){return xp[t]})}var Op={start:"end",end:"start"};function za(e){return e.replace(/start|end/g,function(t){return Op[t]})}function Li(e){var t=le(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Wi(e){return Ut(Ze(e)).left+Li(e).scrollLeft}function Cp(e,t){var n=le(e),r=Ze(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,u=0;if(o){i=o.width,a=o.height;var c=wc();(c||!c&&t==="fixed")&&(s=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:s+Wi(e),y:u}}function Pp(e){var t,n=Ze(e),r=Li(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=dt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=dt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Wi(e),u=-r.scrollTop;return Le(o||n).direction==="rtl"&&(s+=dt(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:u}}function Fi(e){var t=Le(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Sc(e){return["html","body","#document"].indexOf($e(e))>=0?e.ownerDocument.body:ve(e)&&Fi(e)?e:Sc(Er(e))}function bn(e,t){var n;t===void 0&&(t=[]);var r=Sc(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=le(r),a=o?[i].concat(i.visualViewport||[],Fi(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(bn(Er(a)))}function Yo(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Sp(e,t){var n=Ut(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ua(e,t,n){return t===yc?Yo(Cp(e,n)):mt(t)?Sp(t,n):Yo(Pp(Ze(e)))}function Ep(e){var t=bn(Er(e)),n=["absolute","fixed"].indexOf(Le(e).position)>=0,r=n&&ve(e)?kn(e):e;return mt(r)?t.filter(function(o){return mt(o)&&xc(o,r)&&$e(o)!=="body"}):[]}function Tp(e,t,n,r){var o=t==="clippingParents"?Ep(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(u,c){var l=Ua(e,c,r);return u.top=dt(l.top,u.top),u.right=vr(l.right,u.right),u.bottom=vr(l.bottom,u.bottom),u.left=dt(l.left,u.left),u},Ua(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ec(e){var t=e.reference,n=e.element,r=e.placement,o=r?_e(r):null,i=r?Yt(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,u;switch(o){case ie:u={x:a,y:t.y-n.height};break;case ge:u={x:a,y:t.y+t.height};break;case ye:u={x:t.x+t.width,y:s};break;case ae:u={x:t.x-n.width,y:s};break;default:u={x:t.x,y:t.y}}var c=o?Ii(o):null;if(c!=null){var l=c==="y"?"height":"width";switch(i){case Vt:u[c]=u[c]-(t[l]/2-n[l]/2);break;case Cn:u[c]=u[c]+(t[l]/2-n[l]/2);break}}return u}function Pn(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,u=s===void 0?Gf:s,c=n.rootBoundary,l=c===void 0?yc:c,p=n.elementContext,d=p===void 0?un:p,m=n.altBoundary,b=m===void 0?!1:m,g=n.padding,y=g===void 0?0:g,v=Cc(typeof y!="number"?y:Pc(y,Dn)),w=d===un?qf:un,O=e.rects.popper,S=e.elements[b?w:d],T=Tp(mt(S)?S:S.contextElement||Ze(e.elements.popper),u,l,a),P=Ut(e.elements.reference),E=Ec({reference:P,element:O,strategy:"absolute",placement:o}),D=Yo(Object.assign({},O,E)),k=d===un?D:P,R={top:T.top-k.top+v.top,bottom:k.bottom-T.bottom+v.bottom,left:T.left-k.left+v.left,right:k.right-T.right+v.right},F=e.modifiersData.offset;if(d===un&&F){var X=F[o];Object.keys(R).forEach(function(L){var K=[ye,ge].indexOf(L)>=0?1:-1,re=[ie,ge].indexOf(L)>=0?"y":"x";R[L]+=X[re]*K})}return R}function _p(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,c=u===void 0?bc:u,l=Yt(r),p=l?s?Ba:Ba.filter(function(b){return Yt(b)===l}):Dn,d=p.filter(function(b){return c.indexOf(b)>=0});d.length===0&&(d=p);var m=d.reduce(function(b,g){return b[g]=Pn(e,{placement:g,boundary:o,rootBoundary:i,padding:a})[_e(g)],b},{});return Object.keys(m).sort(function(b,g){return m[b]-m[g]})}function Mp(e){if(_e(e)===ki)return[];var t=pr(e);return[za(e),t,za(t)]}function $p(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,u=n.fallbackPlacements,c=n.padding,l=n.boundary,p=n.rootBoundary,d=n.altBoundary,m=n.flipVariations,b=m===void 0?!0:m,g=n.allowedAutoPlacements,y=t.options.placement,v=_e(y),w=v===y,O=u||(w||!b?[pr(y)]:Mp(y)),S=[y].concat(O).reduce(function(Oe,ee){return Oe.concat(_e(ee)===ki?_p(t,{placement:ee,boundary:l,rootBoundary:p,padding:c,flipVariations:b,allowedAutoPlacements:g}):ee)},[]),T=t.rects.reference,P=t.rects.popper,E=new Map,D=!0,k=S[0],R=0;R<S.length;R++){var F=S[R],X=_e(F),L=Yt(F)===Vt,K=[ie,ge].indexOf(X)>=0,re=K?"width":"height",V=Pn(t,{placement:F,boundary:l,rootBoundary:p,altBoundary:d,padding:c}),Y=K?L?ye:ae:L?ge:ie;T[re]>P[re]&&(Y=pr(Y));var J=pr(Y),ue=[];if(i&&ue.push(V[X]<=0),s&&ue.push(V[Y]<=0,V[J]<=0),ue.every(function(Oe){return Oe})){k=F,D=!1;break}E.set(F,ue)}if(D)for(var nt=b?3:1,Be=function(ee){var He=S.find(function(Ve){var Ce=E.get(Ve);if(Ce)return Ce.slice(0,ee).every(function(Mt){return Mt})});if(He)return k=He,"break"},pe=nt;pe>0;pe--){var rt=Be(pe);if(rt==="break")break}t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}}const jp={name:"flip",enabled:!0,phase:"main",fn:$p,requiresIfExists:["offset"],data:{_skip:!1}};function Ya(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ga(e){return[ie,ye,ge,ae].some(function(t){return e[t]>=0})}function Ap(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Pn(t,{elementContext:"reference"}),s=Pn(t,{altBoundary:!0}),u=Ya(a,r),c=Ya(s,o,i),l=Ga(u),p=Ga(c);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":p})}const Dp={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ap};function kp(e,t,n){var r=_e(e),o=[ae,ie].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[ae,ye].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function Np(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=bc.reduce(function(l,p){return l[p]=kp(p,t.rects,i),l},{}),s=a[t.placement],u=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}const Rp={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Np};function Ip(e){var t=e.state,n=e.name;t.modifiersData[n]=Ec({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Lp={name:"popperOffsets",enabled:!0,phase:"read",fn:Ip,data:{}};function Wp(e){return e==="x"?"y":"x"}function Fp(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,u=n.boundary,c=n.rootBoundary,l=n.altBoundary,p=n.padding,d=n.tether,m=d===void 0?!0:d,b=n.tetherOffset,g=b===void 0?0:b,y=Pn(t,{boundary:u,rootBoundary:c,padding:p,altBoundary:l}),v=_e(t.placement),w=Yt(t.placement),O=!w,S=Ii(v),T=Wp(S),P=t.modifiersData.popperOffsets,E=t.rects.reference,D=t.rects.popper,k=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,R=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),F=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,X={x:0,y:0};if(P){if(i){var L,K=S==="y"?ie:ae,re=S==="y"?ge:ye,V=S==="y"?"height":"width",Y=P[S],J=Y+y[K],ue=Y-y[re],nt=m?-D[V]/2:0,Be=w===Vt?E[V]:D[V],pe=w===Vt?-D[V]:-E[V],rt=t.elements.arrow,Oe=m&&rt?Ri(rt):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Oc(),He=ee[K],Ve=ee[re],Ce=yn(0,E[V],Oe[V]),Mt=O?E[V]/2-nt-Ce-He-R.mainAxis:Be-Ce-He-R.mainAxis,Vn=O?-E[V]/2+nt+Ce+Ve+R.mainAxis:pe+Ce+Ve+R.mainAxis,ot=t.elements.arrow&&kn(t.elements.arrow),Qr=ot?S==="y"?ot.clientTop||0:ot.clientLeft||0:0,an=(L=F==null?void 0:F[S])!=null?L:0,Jr=Y+Mt-an-Qr,eo=Y+Vn-an,zn=yn(m?vr(J,Jr):J,Y,m?dt(ue,eo):ue);P[S]=zn,X[S]=zn-Y}if(s){var Un,to=S==="x"?ie:ae,sn=S==="x"?ge:ye,Ae=P[T],$t=T==="y"?"height":"width",x=Ae+y[to],M=Ae-y[sn],$=[ie,ae].indexOf(v)!==-1,A=(Un=F==null?void 0:F[T])!=null?Un:0,I=$?x:Ae-E[$t]-D[$t]-A+R.altAxis,W=$?Ae+E[$t]+D[$t]-A-R.altAxis:M,U=m&&$?lp(I,Ae,W):yn(m?I:x,Ae,m?W:M);P[T]=U,X[T]=U-Ae}t.modifiersData[r]=X}}const Bp={name:"preventOverflow",enabled:!0,phase:"main",fn:Fp,requiresIfExists:["offset"]};function Hp(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Vp(e){return e===le(e)||!ve(e)?Li(e):Hp(e)}function zp(e){var t=e.getBoundingClientRect(),n=zt(t.width)/e.offsetWidth||1,r=zt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Up(e,t,n){n===void 0&&(n=!1);var r=ve(t),o=ve(t)&&zp(t),i=Ze(t),a=Ut(e,o,n),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!n)&&(($e(t)!=="body"||Fi(i))&&(s=Vp(t)),ve(t)?(u=Ut(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=Wi(i))),{x:a.left+s.scrollLeft-u.x,y:a.top+s.scrollTop-u.y,width:a.width,height:a.height}}function Yp(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var u=t.get(s);u&&o(u)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function Gp(e){var t=Yp(e);return op.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function qp(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Xp(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var qa={placement:"bottom",modifiers:[],strategy:"absolute"};function Xa(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Kp(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?qa:o;return function(s,u,c){c===void 0&&(c=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},qa,i),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},p=[],d=!1,m={state:l,setOptions:function(v){var w=typeof v=="function"?v(l.options):v;g(),l.options=Object.assign({},i,l.options,w),l.scrollParents={reference:mt(s)?bn(s):s.contextElement?bn(s.contextElement):[],popper:bn(u)};var O=Gp(Xp([].concat(r,l.options.modifiers)));return l.orderedModifiers=O.filter(function(S){return S.enabled}),b(),m.update()},forceUpdate:function(){if(!d){var v=l.elements,w=v.reference,O=v.popper;if(Xa(w,O)){l.rects={reference:Up(w,kn(O),l.options.strategy==="fixed"),popper:Ri(O)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var S=0;S<l.orderedModifiers.length;S++){if(l.reset===!0){l.reset=!1,S=-1;continue}var T=l.orderedModifiers[S],P=T.fn,E=T.options,D=E===void 0?{}:E,k=T.name;typeof P=="function"&&(l=P({state:l,options:D,name:k,instance:m})||l)}}}},update:qp(function(){return new Promise(function(y){m.forceUpdate(),y(l)})}),destroy:function(){g(),d=!0}};if(!Xa(s,u))return m;m.setOptions(c).then(function(y){!d&&c.onFirstUpdate&&c.onFirstUpdate(y)});function b(){l.orderedModifiers.forEach(function(y){var v=y.name,w=y.options,O=w===void 0?{}:w,S=y.effect;if(typeof S=="function"){var T=S({state:l,name:v,instance:m,options:O}),P=function(){};p.push(T||P)}})}function g(){p.forEach(function(y){return y()}),p=[]}return m}}var Zp=[wp,Lp,yp,sp,Rp,jp,Bp,hp,Dp],Qp=Kp({defaultModifiers:Zp});const Tc="Popper";function Jp(e){return gc(Tc,e)}Yf(Tc,["root"]);const ed=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],td=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function nd(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Go(e){return typeof e=="function"?e():e}function rd(e){return e.nodeType!==void 0}const od=()=>gf({root:["root"]},Vf(Jp)),id={},ad=C.forwardRef(function(t,n){var r;const{anchorEl:o,children:i,direction:a,disablePortal:s,modifiers:u,open:c,placement:l,popperOptions:p,popperRef:d,slotProps:m={},slots:b={},TransitionProps:g}=t,y=Di(t,ed),v=C.useRef(null),w=ka(v,n),O=C.useRef(null),S=ka(O,d),T=C.useRef(S);Na(()=>{T.current=S},[S]),C.useImperativeHandle(d,()=>O.current,[]);const P=nd(l,a),[E,D]=C.useState(P),[k,R]=C.useState(Go(o));C.useEffect(()=>{O.current&&O.current.forceUpdate()}),C.useEffect(()=>{o&&R(Go(o))},[o]),Na(()=>{if(!k||!c)return;const re=J=>{D(J.placement)};let V=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:J})=>{re(J)}}];u!=null&&(V=V.concat(u)),p&&p.modifiers!=null&&(V=V.concat(p.modifiers));const Y=Qp(k,v.current,Ht({placement:P},p,{modifiers:V}));return T.current(Y),()=>{Y.destroy(),T.current(null)}},[k,s,u,c,p,P]);const F={placement:E};g!==null&&(F.TransitionProps=g);const X=od(),L=(r=b.root)!=null?r:"div",K=vf({elementType:L,externalSlotProps:m.root,externalForwardedProps:y,additionalProps:{role:"tooltip",ref:w},ownerState:t,className:X.root});return h.jsx(L,Ht({},K,{children:typeof i=="function"?i(F):i}))}),sd=C.forwardRef(function(t,n){const{anchorEl:r,children:o,container:i,direction:a="ltr",disablePortal:s=!1,keepMounted:u=!1,modifiers:c,open:l,placement:p="bottom",popperOptions:d=id,popperRef:m,style:b,transition:g=!1,slotProps:y={},slots:v={}}=t,w=Di(t,td),[O,S]=C.useState(!0),T=()=>{S(!1)},P=()=>{S(!0)};if(!u&&!l&&(!g||O))return null;let E;if(i)E=i;else if(r){const R=Go(r);E=R&&rd(R)?Da(R).body:Da(null).body}const D=!l&&u&&(!g||O)?"none":void 0,k=g?{in:l,onEnter:T,onExited:P}:void 0;return h.jsx(mf,{disablePortal:s,container:E,children:h.jsx(ad,Ht({anchorEl:r,direction:a,disablePortal:s,modifiers:c,ref:n,open:g?!O:l,placement:p,popperOptions:d,popperRef:m,slotProps:y,slots:v},w,{style:Ht({position:"fixed",top:0,left:0,display:D},b),TransitionProps:k,children:o}))})});var Bi={};Object.defineProperty(Bi,"__esModule",{value:!0});var _c=Bi.default=void 0,ud=ld(C),cd=yf;function Mc(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Mc=function(r){return r?n:t})(e)}function ld(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Mc(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function fd(e){return Object.keys(e).length===0}function pd(e=null){const t=ud.useContext(cd.ThemeContext);return!t||fd(t)?e:t}_c=Bi.default=pd;const dd=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],hd=bf(sd,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),md=C.forwardRef(function(t,n){var r;const o=_c(),i=wf({props:t,name:"MuiPopper"}),{anchorEl:a,component:s,components:u,componentsProps:c,container:l,disablePortal:p,keepMounted:d,modifiers:m,open:b,placement:g,popperOptions:y,popperRef:v,transition:w,slots:O,slotProps:S}=i,T=Di(i,dd),P=(r=O==null?void 0:O.root)!=null?r:u==null?void 0:u.Root,E=Ht({anchorEl:a,container:l,disablePortal:p,keepMounted:d,modifiers:m,open:b,placement:g,popperOptions:y,popperRef:v,transition:w},T);return h.jsx(hd,Ht({as:s,direction:o==null?void 0:o.direction,slots:{root:P},slotProps:S??c},E,{ref:n}))}),vd=md,Hi=e=>e.water.waterVolumes,gd=e=>e.water.waterVolumeSum,yd=e=>e.water.stats,Tr=e=>e.water.selectedCalendar;var bd=function(t){return wd(t)&&!xd(t)};function wd(e){return!!e&&typeof e=="object"}function xd(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Pd(e)}var Od=typeof Symbol=="function"&&Symbol.for,Cd=Od?Symbol.for("react.element"):60103;function Pd(e){return e.$$typeof===Cd}function Sd(e){return Array.isArray(e)?[]:{}}function gr(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Sn(Sd(e),e,t):e}function Ed(e,t,n){return e.concat(t).map(function(r){return gr(r,n)})}function Td(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(o){r[o]=gr(e[o],n)}),Object.keys(t).forEach(function(o){!n.isMergeableObject(t[o])||!e[o]?r[o]=gr(t[o],n):r[o]=Sn(e[o],t[o],n)}),r}function Sn(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||Ed,n.isMergeableObject=n.isMergeableObject||bd;var r=Array.isArray(t),o=Array.isArray(e),i=r===o;return i?r?n.arrayMerge(e,t,n):Td(e,t,n):gr(t,n)}Sn.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,o){return Sn(r,o,n)},{})};var qo=Sn,_d=typeof global=="object"&&global&&global.Object===Object&&global;const $c=_d;var Md=typeof self=="object"&&self&&self.Object===Object&&self,$d=$c||Md||Function("return this")();const je=$d;var jd=je.Symbol;const qe=jd;var jc=Object.prototype,Ad=jc.hasOwnProperty,Dd=jc.toString,cn=qe?qe.toStringTag:void 0;function kd(e){var t=Ad.call(e,cn),n=e[cn];try{e[cn]=void 0;var r=!0}catch{}var o=Dd.call(e);return r&&(t?e[cn]=n:delete e[cn]),o}var Nd=Object.prototype,Rd=Nd.toString;function Id(e){return Rd.call(e)}var Ld="[object Null]",Wd="[object Undefined]",Ka=qe?qe.toStringTag:void 0;function xt(e){return e==null?e===void 0?Wd:Ld:Ka&&Ka in Object(e)?kd(e):Id(e)}function Ac(e,t){return function(n){return e(t(n))}}var Fd=Ac(Object.getPrototypeOf,Object);const Vi=Fd;function Ot(e){return e!=null&&typeof e=="object"}var Bd="[object Object]",Hd=Function.prototype,Vd=Object.prototype,Dc=Hd.toString,zd=Vd.hasOwnProperty,Ud=Dc.call(Object);function Za(e){if(!Ot(e)||xt(e)!=Bd)return!1;var t=Vi(e);if(t===null)return!0;var n=zd.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Dc.call(n)==Ud}var Qa=Array.isArray,Ja=Object.keys,Yd=Object.prototype.hasOwnProperty,Gd=typeof Element<"u";function Xo(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Qa(e),r=Qa(t),o,i,a;if(n&&r){if(i=e.length,i!=t.length)return!1;for(o=i;o--!==0;)if(!Xo(e[o],t[o]))return!1;return!0}if(n!=r)return!1;var s=e instanceof Date,u=t instanceof Date;if(s!=u)return!1;if(s&&u)return e.getTime()==t.getTime();var c=e instanceof RegExp,l=t instanceof RegExp;if(c!=l)return!1;if(c&&l)return e.toString()==t.toString();var p=Ja(e);if(i=p.length,i!==Ja(t).length)return!1;for(o=i;o--!==0;)if(!Yd.call(t,p[o]))return!1;if(Gd&&e instanceof Element&&t instanceof Element)return e===t;for(o=i;o--!==0;)if(a=p[o],!(a==="_owner"&&e.$$typeof)&&!Xo(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var qd=function(t,n){try{return Xo(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const ct=Xt(qd);var Xd=!0;function Kd(e,t){if(!Xd){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function Zd(){this.__data__=[],this.size=0}function kc(e,t){return e===t||e!==e&&t!==t}function _r(e,t){for(var n=e.length;n--;)if(kc(e[n][0],t))return n;return-1}var Qd=Array.prototype,Jd=Qd.splice;function eh(e){var t=this.__data__,n=_r(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Jd.call(t,n,1),--this.size,!0}function th(e){var t=this.__data__,n=_r(t,e);return n<0?void 0:t[n][1]}function nh(e){return _r(this.__data__,e)>-1}function rh(e,t){var n=this.__data__,r=_r(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Fe(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fe.prototype.clear=Zd;Fe.prototype.delete=eh;Fe.prototype.get=th;Fe.prototype.has=nh;Fe.prototype.set=rh;function oh(){this.__data__=new Fe,this.size=0}function ih(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function ah(e){return this.__data__.get(e)}function sh(e){return this.__data__.has(e)}function Nn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var uh="[object AsyncFunction]",ch="[object Function]",lh="[object GeneratorFunction]",fh="[object Proxy]";function Nc(e){if(!Nn(e))return!1;var t=xt(e);return t==ch||t==lh||t==uh||t==fh}var ph=je["__core-js_shared__"];const oo=ph;var es=function(){var e=/[^.]+$/.exec(oo&&oo.keys&&oo.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function dh(e){return!!es&&es in e}var hh=Function.prototype,mh=hh.toString;function Ct(e){if(e!=null){try{return mh.call(e)}catch{}try{return e+""}catch{}}return""}var vh=/[\\^$.*+?()[\]{}|]/g,gh=/^\[object .+?Constructor\]$/,yh=Function.prototype,bh=Object.prototype,wh=yh.toString,xh=bh.hasOwnProperty,Oh=RegExp("^"+wh.call(xh).replace(vh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ch(e){if(!Nn(e)||dh(e))return!1;var t=Nc(e)?Oh:gh;return t.test(Ct(e))}function Ph(e,t){return e==null?void 0:e[t]}function Pt(e,t){var n=Ph(e,t);return Ch(n)?n:void 0}var Sh=Pt(je,"Map");const En=Sh;var Eh=Pt(Object,"create");const Tn=Eh;function Th(){this.__data__=Tn?Tn(null):{},this.size=0}function _h(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Mh="__lodash_hash_undefined__",$h=Object.prototype,jh=$h.hasOwnProperty;function Ah(e){var t=this.__data__;if(Tn){var n=t[e];return n===Mh?void 0:n}return jh.call(t,e)?t[e]:void 0}var Dh=Object.prototype,kh=Dh.hasOwnProperty;function Nh(e){var t=this.__data__;return Tn?t[e]!==void 0:kh.call(t,e)}var Rh="__lodash_hash_undefined__";function Ih(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Tn&&t===void 0?Rh:t,this}function vt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vt.prototype.clear=Th;vt.prototype.delete=_h;vt.prototype.get=Ah;vt.prototype.has=Nh;vt.prototype.set=Ih;function Lh(){this.size=0,this.__data__={hash:new vt,map:new(En||Fe),string:new vt}}function Wh(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Mr(e,t){var n=e.__data__;return Wh(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Fh(e){var t=Mr(this,e).delete(e);return this.size-=t?1:0,t}function Bh(e){return Mr(this,e).get(e)}function Hh(e){return Mr(this,e).has(e)}function Vh(e,t){var n=Mr(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Qe(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Lh;Qe.prototype.delete=Fh;Qe.prototype.get=Bh;Qe.prototype.has=Hh;Qe.prototype.set=Vh;var zh=200;function Uh(e,t){var n=this.__data__;if(n instanceof Fe){var r=n.__data__;if(!En||r.length<zh-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Qe(r)}return n.set(e,t),this.size=n.size,this}function Zt(e){var t=this.__data__=new Fe(e);this.size=t.size}Zt.prototype.clear=oh;Zt.prototype.delete=ih;Zt.prototype.get=ah;Zt.prototype.has=sh;Zt.prototype.set=Uh;function Yh(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Gh=function(){try{var e=Pt(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ts=Gh;function Rc(e,t,n){t=="__proto__"&&ts?ts(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var qh=Object.prototype,Xh=qh.hasOwnProperty;function Ic(e,t,n){var r=e[t];(!(Xh.call(e,t)&&kc(r,n))||n===void 0&&!(t in e))&&Rc(e,t,n)}function $r(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var s=t[i],u=r?r(n[s],e[s],s,n,e):void 0;u===void 0&&(u=e[s]),o?Rc(n,s,u):Ic(n,s,u)}return n}function Kh(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Zh="[object Arguments]";function ns(e){return Ot(e)&&xt(e)==Zh}var Lc=Object.prototype,Qh=Lc.hasOwnProperty,Jh=Lc.propertyIsEnumerable,em=ns(function(){return arguments}())?ns:function(e){return Ot(e)&&Qh.call(e,"callee")&&!Jh.call(e,"callee")};const tm=em;var nm=Array.isArray;const Rn=nm;function rm(){return!1}var Wc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,rs=Wc&&typeof module=="object"&&module&&!module.nodeType&&module,om=rs&&rs.exports===Wc,os=om?je.Buffer:void 0,im=os?os.isBuffer:void 0,am=im||rm;const Fc=am;var sm=9007199254740991,um=/^(?:0|[1-9]\d*)$/;function cm(e,t){var n=typeof e;return t=t??sm,!!t&&(n=="number"||n!="symbol"&&um.test(e))&&e>-1&&e%1==0&&e<t}var lm=9007199254740991;function Bc(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=lm}var fm="[object Arguments]",pm="[object Array]",dm="[object Boolean]",hm="[object Date]",mm="[object Error]",vm="[object Function]",gm="[object Map]",ym="[object Number]",bm="[object Object]",wm="[object RegExp]",xm="[object Set]",Om="[object String]",Cm="[object WeakMap]",Pm="[object ArrayBuffer]",Sm="[object DataView]",Em="[object Float32Array]",Tm="[object Float64Array]",_m="[object Int8Array]",Mm="[object Int16Array]",$m="[object Int32Array]",jm="[object Uint8Array]",Am="[object Uint8ClampedArray]",Dm="[object Uint16Array]",km="[object Uint32Array]",z={};z[Em]=z[Tm]=z[_m]=z[Mm]=z[$m]=z[jm]=z[Am]=z[Dm]=z[km]=!0;z[fm]=z[pm]=z[Pm]=z[dm]=z[Sm]=z[hm]=z[mm]=z[vm]=z[gm]=z[ym]=z[bm]=z[wm]=z[xm]=z[Om]=z[Cm]=!1;function Nm(e){return Ot(e)&&Bc(e.length)&&!!z[xt(e)]}function zi(e){return function(t){return e(t)}}var Hc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wn=Hc&&typeof module=="object"&&module&&!module.nodeType&&module,Rm=wn&&wn.exports===Hc,io=Rm&&$c.process,Im=function(){try{var e=wn&&wn.require&&wn.require("util").types;return e||io&&io.binding&&io.binding("util")}catch{}}();const Gt=Im;var is=Gt&&Gt.isTypedArray,Lm=is?zi(is):Nm;const Wm=Lm;var Fm=Object.prototype,Bm=Fm.hasOwnProperty;function Vc(e,t){var n=Rn(e),r=!n&&tm(e),o=!n&&!r&&Fc(e),i=!n&&!r&&!o&&Wm(e),a=n||r||o||i,s=a?Kh(e.length,String):[],u=s.length;for(var c in e)(t||Bm.call(e,c))&&!(a&&(c=="length"||o&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||cm(c,u)))&&s.push(c);return s}var Hm=Object.prototype;function Ui(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Hm;return e===n}var Vm=Ac(Object.keys,Object);const zm=Vm;var Um=Object.prototype,Ym=Um.hasOwnProperty;function Gm(e){if(!Ui(e))return zm(e);var t=[];for(var n in Object(e))Ym.call(e,n)&&n!="constructor"&&t.push(n);return t}function zc(e){return e!=null&&Bc(e.length)&&!Nc(e)}function Yi(e){return zc(e)?Vc(e):Gm(e)}function qm(e,t){return e&&$r(t,Yi(t),e)}function Xm(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Km=Object.prototype,Zm=Km.hasOwnProperty;function Qm(e){if(!Nn(e))return Xm(e);var t=Ui(e),n=[];for(var r in e)r=="constructor"&&(t||!Zm.call(e,r))||n.push(r);return n}function Gi(e){return zc(e)?Vc(e,!0):Qm(e)}function Jm(e,t){return e&&$r(t,Gi(t),e)}var Uc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,as=Uc&&typeof module=="object"&&module&&!module.nodeType&&module,ev=as&&as.exports===Uc,ss=ev?je.Buffer:void 0,us=ss?ss.allocUnsafe:void 0;function tv(e,t){if(t)return e.slice();var n=e.length,r=us?us(n):new e.constructor(n);return e.copy(r),r}function Yc(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function nv(e,t){for(var n=-1,r=e==null?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function Gc(){return[]}var rv=Object.prototype,ov=rv.propertyIsEnumerable,cs=Object.getOwnPropertySymbols,iv=cs?function(e){return e==null?[]:(e=Object(e),nv(cs(e),function(t){return ov.call(e,t)}))}:Gc;const qi=iv;function av(e,t){return $r(e,qi(e),t)}function qc(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}var sv=Object.getOwnPropertySymbols,uv=sv?function(e){for(var t=[];e;)qc(t,qi(e)),e=Vi(e);return t}:Gc;const Xc=uv;function cv(e,t){return $r(e,Xc(e),t)}function Kc(e,t,n){var r=t(e);return Rn(e)?r:qc(r,n(e))}function lv(e){return Kc(e,Yi,qi)}function fv(e){return Kc(e,Gi,Xc)}var pv=Pt(je,"DataView");const Ko=pv;var dv=Pt(je,"Promise");const Zo=dv;var hv=Pt(je,"Set");const Qo=hv;var mv=Pt(je,"WeakMap");const Jo=mv;var ls="[object Map]",vv="[object Object]",fs="[object Promise]",ps="[object Set]",ds="[object WeakMap]",hs="[object DataView]",gv=Ct(Ko),yv=Ct(En),bv=Ct(Zo),wv=Ct(Qo),xv=Ct(Jo),lt=xt;(Ko&&lt(new Ko(new ArrayBuffer(1)))!=hs||En&&lt(new En)!=ls||Zo&&lt(Zo.resolve())!=fs||Qo&&lt(new Qo)!=ps||Jo&&lt(new Jo)!=ds)&&(lt=function(e){var t=xt(e),n=t==vv?e.constructor:void 0,r=n?Ct(n):"";if(r)switch(r){case gv:return hs;case yv:return ls;case bv:return fs;case wv:return ps;case xv:return ds}return t});const Xi=lt;var Ov=Object.prototype,Cv=Ov.hasOwnProperty;function Pv(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&Cv.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var Sv=je.Uint8Array;const ms=Sv;function Ki(e){var t=new e.constructor(e.byteLength);return new ms(t).set(new ms(e)),t}function Ev(e,t){var n=t?Ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Tv=/\w*$/;function _v(e){var t=new e.constructor(e.source,Tv.exec(e));return t.lastIndex=e.lastIndex,t}var vs=qe?qe.prototype:void 0,gs=vs?vs.valueOf:void 0;function Mv(e){return gs?Object(gs.call(e)):{}}function $v(e,t){var n=t?Ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var jv="[object Boolean]",Av="[object Date]",Dv="[object Map]",kv="[object Number]",Nv="[object RegExp]",Rv="[object Set]",Iv="[object String]",Lv="[object Symbol]",Wv="[object ArrayBuffer]",Fv="[object DataView]",Bv="[object Float32Array]",Hv="[object Float64Array]",Vv="[object Int8Array]",zv="[object Int16Array]",Uv="[object Int32Array]",Yv="[object Uint8Array]",Gv="[object Uint8ClampedArray]",qv="[object Uint16Array]",Xv="[object Uint32Array]";function Kv(e,t,n){var r=e.constructor;switch(t){case Wv:return Ki(e);case jv:case Av:return new r(+e);case Fv:return Ev(e,n);case Bv:case Hv:case Vv:case zv:case Uv:case Yv:case Gv:case qv:case Xv:return $v(e,n);case Dv:return new r;case kv:case Iv:return new r(e);case Nv:return _v(e);case Rv:return new r;case Lv:return Mv(e)}}var ys=Object.create,Zv=function(){function e(){}return function(t){if(!Nn(t))return{};if(ys)return ys(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const Qv=Zv;function Jv(e){return typeof e.constructor=="function"&&!Ui(e)?Qv(Vi(e)):{}}var eg="[object Map]";function tg(e){return Ot(e)&&Xi(e)==eg}var bs=Gt&&Gt.isMap,ng=bs?zi(bs):tg;const rg=ng;var og="[object Set]";function ig(e){return Ot(e)&&Xi(e)==og}var ws=Gt&&Gt.isSet,ag=ws?zi(ws):ig;const sg=ag;var ug=1,cg=2,lg=4,Zc="[object Arguments]",fg="[object Array]",pg="[object Boolean]",dg="[object Date]",hg="[object Error]",Qc="[object Function]",mg="[object GeneratorFunction]",vg="[object Map]",gg="[object Number]",Jc="[object Object]",yg="[object RegExp]",bg="[object Set]",wg="[object String]",xg="[object Symbol]",Og="[object WeakMap]",Cg="[object ArrayBuffer]",Pg="[object DataView]",Sg="[object Float32Array]",Eg="[object Float64Array]",Tg="[object Int8Array]",_g="[object Int16Array]",Mg="[object Int32Array]",$g="[object Uint8Array]",jg="[object Uint8ClampedArray]",Ag="[object Uint16Array]",Dg="[object Uint32Array]",H={};H[Zc]=H[fg]=H[Cg]=H[Pg]=H[pg]=H[dg]=H[Sg]=H[Eg]=H[Tg]=H[_g]=H[Mg]=H[vg]=H[gg]=H[Jc]=H[yg]=H[bg]=H[wg]=H[xg]=H[$g]=H[jg]=H[Ag]=H[Dg]=!0;H[hg]=H[Qc]=H[Og]=!1;function dr(e,t,n,r,o,i){var a,s=t&ug,u=t&cg,c=t&lg;if(n&&(a=o?n(e,r,o,i):n(e)),a!==void 0)return a;if(!Nn(e))return e;var l=Rn(e);if(l){if(a=Pv(e),!s)return Yc(e,a)}else{var p=Xi(e),d=p==Qc||p==mg;if(Fc(e))return tv(e,s);if(p==Jc||p==Zc||d&&!o){if(a=u||d?{}:Jv(e),!s)return u?cv(e,Jm(a,e)):av(e,qm(a,e))}else{if(!H[p])return o?e:{};a=Kv(e,p,s)}}i||(i=new Zt);var m=i.get(e);if(m)return m;i.set(e,a),sg(e)?e.forEach(function(y){a.add(dr(y,t,n,y,e,i))}):rg(e)&&e.forEach(function(y,v){a.set(v,dr(y,t,n,v,e,i))});var b=c?u?fv:lv:u?Gi:Yi,g=l?void 0:b(e);return Yh(g||e,function(y,v){g&&(v=y,y=e[v]),Ic(a,v,dr(y,t,n,v,e,i))}),a}var kg=4;function xs(e){return dr(e,kg)}function el(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var Ng="[object Symbol]";function Zi(e){return typeof e=="symbol"||Ot(e)&&xt(e)==Ng}var Rg="Expected a function";function Qi(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Rg);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Qi.Cache||Qe),n}Qi.Cache=Qe;var Ig=500;function Lg(e){var t=Qi(e,function(r){return n.size===Ig&&n.clear(),r}),n=t.cache;return t}var Wg=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fg=/\\(\\)?/g,Bg=Lg(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Wg,function(n,r,o,i){t.push(o?i.replace(Fg,"$1"):r||n)}),t});const Hg=Bg;var Vg=1/0;function zg(e){if(typeof e=="string"||Zi(e))return e;var t=e+"";return t=="0"&&1/e==-Vg?"-0":t}var Ug=1/0,Os=qe?qe.prototype:void 0,Cs=Os?Os.toString:void 0;function tl(e){if(typeof e=="string")return e;if(Rn(e))return el(e,tl)+"";if(Zi(e))return Cs?Cs.call(e):"";var t=e+"";return t=="0"&&1/e==-Ug?"-0":t}function Yg(e){return e==null?"":tl(e)}function nl(e){return Rn(e)?el(e,zg):Zi(e)?[e]:Yc(Hg(Yg(e)))}function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function rl(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var jr=C.createContext(void 0);jr.displayName="FormikContext";jr.Provider;jr.Consumer;function Gg(){var e=C.useContext(jr);return e||Kd(!1),e}var be=function(t){return typeof t=="function"},Ar=function(t){return t!==null&&typeof t=="object"},qg=function(t){return String(Math.floor(Number(t)))===t},ao=function(t){return Object.prototype.toString.call(t)==="[object String]"},so=function(t){return Ar(t)&&be(t.then)};function ce(e,t,n,r){r===void 0&&(r=0);for(var o=nl(t);e&&r<o.length;)e=e[o[r++]];return r!==o.length&&!e||e===void 0?n:e}function ht(e,t,n){for(var r=xs(e),o=r,i=0,a=nl(t);i<a.length-1;i++){var s=a[i],u=ce(e,a.slice(0,i+1));if(u&&(Ar(u)||Array.isArray(u)))o=o[s]=xs(u);else{var c=a[i+1];o=o[s]=qg(c)&&Number(c)>=0?[]:{}}}return(i===0?e:o)[a[i]]===n?e:(n===void 0?delete o[a[i]]:o[a[i]]=n,i===0&&n===void 0&&delete r[a[i]],r)}function ol(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var o=0,i=Object.keys(e);o<i.length;o++){var a=i[o],s=e[a];Ar(s)?n.get(s)||(n.set(s,!0),r[a]=Array.isArray(s)?[]:{},ol(s,t,n,r[a])):r[a]=t}return r}function Xg(e,t){switch(t.type){case"SET_VALUES":return G({},e,{values:t.payload});case"SET_TOUCHED":return G({},e,{touched:t.payload});case"SET_ERRORS":return ct(e.errors,t.payload)?e:G({},e,{errors:t.payload});case"SET_STATUS":return G({},e,{status:t.payload});case"SET_ISSUBMITTING":return G({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return G({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return G({},e,{values:ht(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return G({},e,{touched:ht(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return G({},e,{errors:ht(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return G({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return G({},e,{touched:ol(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return G({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return G({},e,{isSubmitting:!1});default:return e}}var it={},Gn={};function il(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,o=r===void 0?!0:r,i=e.validateOnMount,a=i===void 0?!1:i,s=e.isInitialValid,u=e.enableReinitialize,c=u===void 0?!1:u,l=e.onSubmit,p=rl(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=G({validateOnChange:n,validateOnBlur:o,validateOnMount:a,onSubmit:l},p),m=C.useRef(d.initialValues),b=C.useRef(d.initialErrors||it),g=C.useRef(d.initialTouched||Gn),y=C.useRef(d.initialStatus),v=C.useRef(!1),w=C.useRef({});C.useEffect(function(){return v.current=!0,function(){v.current=!1}},[]);var O=C.useState(0),S=O[1],T=C.useRef({values:d.initialValues,errors:d.initialErrors||it,touched:d.initialTouched||Gn,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),P=T.current,E=C.useCallback(function(x){var M=T.current;T.current=Xg(M,x),M!==T.current&&S(function($){return $+1})},[]),D=C.useCallback(function(x,M){return new Promise(function($,A){var I=d.validate(x,M);I==null?$(it):so(I)?I.then(function(W){$(W||it)},function(W){A(W)}):$(I)})},[d.validate]),k=C.useCallback(function(x,M){var $=d.validationSchema,A=be($)?$(M):$,I=M&&A.validateAt?A.validateAt(M,x):Zg(x,A);return new Promise(function(W,U){I.then(function(){W(it)},function(De){De.name==="ValidationError"?W(Kg(De)):U(De)})})},[d.validationSchema]),R=C.useCallback(function(x,M){return new Promise(function($){return $(w.current[x].validate(M))})},[]),F=C.useCallback(function(x){var M=Object.keys(w.current).filter(function(A){return be(w.current[A].validate)}),$=M.length>0?M.map(function(A){return R(A,ce(x,A))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all($).then(function(A){return A.reduce(function(I,W,U){return W==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||W&&(I=ht(I,M[U],W)),I},{})})},[R]),X=C.useCallback(function(x){return Promise.all([F(x),d.validationSchema?k(x):{},d.validate?D(x):{}]).then(function(M){var $=M[0],A=M[1],I=M[2],W=qo.all([$,A,I],{arrayMerge:Qg});return W})},[d.validate,d.validationSchema,F,D,k]),L=de(function(x){return x===void 0&&(x=P.values),E({type:"SET_ISVALIDATING",payload:!0}),X(x).then(function(M){return v.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:M})),M})});C.useEffect(function(){a&&v.current===!0&&ct(m.current,d.initialValues)&&L(m.current)},[a,L]);var K=C.useCallback(function(x){var M=x&&x.values?x.values:m.current,$=x&&x.errors?x.errors:b.current?b.current:d.initialErrors||{},A=x&&x.touched?x.touched:g.current?g.current:d.initialTouched||{},I=x&&x.status?x.status:y.current?y.current:d.initialStatus;m.current=M,b.current=$,g.current=A,y.current=I;var W=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!x&&!!x.isSubmitting,errors:$,touched:A,status:I,values:M,isValidating:!!x&&!!x.isValidating,submitCount:x&&x.submitCount&&typeof x.submitCount=="number"?x.submitCount:0}})};if(d.onReset){var U=d.onReset(P.values,an);so(U)?U.then(W):W()}else W()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);C.useEffect(function(){v.current===!0&&!ct(m.current,d.initialValues)&&c&&(m.current=d.initialValues,K(),a&&L(m.current))},[c,d.initialValues,K,a,L]),C.useEffect(function(){c&&v.current===!0&&!ct(b.current,d.initialErrors)&&(b.current=d.initialErrors||it,E({type:"SET_ERRORS",payload:d.initialErrors||it}))},[c,d.initialErrors]),C.useEffect(function(){c&&v.current===!0&&!ct(g.current,d.initialTouched)&&(g.current=d.initialTouched||Gn,E({type:"SET_TOUCHED",payload:d.initialTouched||Gn}))},[c,d.initialTouched]),C.useEffect(function(){c&&v.current===!0&&!ct(y.current,d.initialStatus)&&(y.current=d.initialStatus,E({type:"SET_STATUS",payload:d.initialStatus}))},[c,d.initialStatus,d.initialTouched]);var re=de(function(x){if(w.current[x]&&be(w.current[x].validate)){var M=ce(P.values,x),$=w.current[x].validate(M);return so($)?(E({type:"SET_ISVALIDATING",payload:!0}),$.then(function(A){return A}).then(function(A){E({type:"SET_FIELD_ERROR",payload:{field:x,value:A}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:x,value:$}}),Promise.resolve($))}else if(d.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),k(P.values,x).then(function(A){return A}).then(function(A){E({type:"SET_FIELD_ERROR",payload:{field:x,value:ce(A,x)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),V=C.useCallback(function(x,M){var $=M.validate;w.current[x]={validate:$}},[]),Y=C.useCallback(function(x){delete w.current[x]},[]),J=de(function(x,M){E({type:"SET_TOUCHED",payload:x});var $=M===void 0?o:M;return $?L(P.values):Promise.resolve()}),ue=C.useCallback(function(x){E({type:"SET_ERRORS",payload:x})},[]),nt=de(function(x,M){var $=be(x)?x(P.values):x;E({type:"SET_VALUES",payload:$});var A=M===void 0?n:M;return A?L($):Promise.resolve()}),Be=C.useCallback(function(x,M){E({type:"SET_FIELD_ERROR",payload:{field:x,value:M}})},[]),pe=de(function(x,M,$){E({type:"SET_FIELD_VALUE",payload:{field:x,value:M}});var A=$===void 0?n:$;return A?L(ht(P.values,x,M)):Promise.resolve()}),rt=C.useCallback(function(x,M){var $=M,A=x,I;if(!ao(x)){x.persist&&x.persist();var W=x.target?x.target:x.currentTarget,U=W.type,De=W.name,no=W.id,ro=W.value,pf=W.checked,YO=W.outerHTML,Aa=W.options,df=W.multiple;$=M||De||no,A=/number|range/.test(U)?(I=parseFloat(ro),isNaN(I)?"":I):/checkbox/.test(U)?e1(ce(P.values,$),pf,ro):Aa&&df?Jg(Aa):ro}$&&pe($,A)},[pe,P.values]),Oe=de(function(x){if(ao(x))return function(M){return rt(M,x)};rt(x)}),ee=de(function(x,M,$){M===void 0&&(M=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:x,value:M}});var A=$===void 0?o:$;return A?L(P.values):Promise.resolve()}),He=C.useCallback(function(x,M){x.persist&&x.persist();var $=x.target,A=$.name,I=$.id,W=$.outerHTML,U=M||A||I;ee(U,!0)},[ee]),Ve=de(function(x){if(ao(x))return function(M){return He(M,x)};He(x)}),Ce=C.useCallback(function(x){be(x)?E({type:"SET_FORMIK_STATE",payload:x}):E({type:"SET_FORMIK_STATE",payload:function(){return x}})},[]),Mt=C.useCallback(function(x){E({type:"SET_STATUS",payload:x})},[]),Vn=C.useCallback(function(x){E({type:"SET_ISSUBMITTING",payload:x})},[]),ot=de(function(){return E({type:"SUBMIT_ATTEMPT"}),L().then(function(x){var M=x instanceof Error,$=!M&&Object.keys(x).length===0;if($){var A;try{if(A=Jr(),A===void 0)return}catch(I){throw I}return Promise.resolve(A).then(function(I){return v.current&&E({type:"SUBMIT_SUCCESS"}),I}).catch(function(I){if(v.current)throw E({type:"SUBMIT_FAILURE"}),I})}else if(v.current&&(E({type:"SUBMIT_FAILURE"}),M))throw x})}),Qr=de(function(x){x&&x.preventDefault&&be(x.preventDefault)&&x.preventDefault(),x&&x.stopPropagation&&be(x.stopPropagation)&&x.stopPropagation(),ot().catch(function(M){console.warn("Warning: An unhandled error was caught from submitForm()",M)})}),an={resetForm:K,validateForm:L,validateField:re,setErrors:ue,setFieldError:Be,setFieldTouched:ee,setFieldValue:pe,setStatus:Mt,setSubmitting:Vn,setTouched:J,setValues:nt,setFormikState:Ce,submitForm:ot},Jr=de(function(){return l(P.values,an)}),eo=de(function(x){x&&x.preventDefault&&be(x.preventDefault)&&x.preventDefault(),x&&x.stopPropagation&&be(x.stopPropagation)&&x.stopPropagation(),K()}),zn=C.useCallback(function(x){return{value:ce(P.values,x),error:ce(P.errors,x),touched:!!ce(P.touched,x),initialValue:ce(m.current,x),initialTouched:!!ce(g.current,x),initialError:ce(b.current,x)}},[P.errors,P.touched,P.values]),Un=C.useCallback(function(x){return{setValue:function($,A){return pe(x,$,A)},setTouched:function($,A){return ee(x,$,A)},setError:function($){return Be(x,$)}}},[pe,ee,Be]),to=C.useCallback(function(x){var M=Ar(x),$=M?x.name:x,A=ce(P.values,$),I={name:$,value:A,onChange:Oe,onBlur:Ve};if(M){var W=x.type,U=x.value,De=x.as,no=x.multiple;W==="checkbox"?U===void 0?I.checked=!!A:(I.checked=!!(Array.isArray(A)&&~A.indexOf(U)),I.value=U):W==="radio"?(I.checked=A===U,I.value=U):De==="select"&&no&&(I.value=I.value||[],I.multiple=!0)}return I},[Ve,Oe,P.values]),sn=C.useMemo(function(){return!ct(m.current,P.values)},[m.current,P.values]),Ae=C.useMemo(function(){return typeof s<"u"?sn?P.errors&&Object.keys(P.errors).length===0:s!==!1&&be(s)?s(d):s:P.errors&&Object.keys(P.errors).length===0},[s,sn,P.errors,d]),$t=G({},P,{initialValues:m.current,initialErrors:b.current,initialTouched:g.current,initialStatus:y.current,handleBlur:Ve,handleChange:Oe,handleReset:eo,handleSubmit:Qr,resetForm:K,setErrors:ue,setFormikState:Ce,setFieldTouched:ee,setFieldValue:pe,setFieldError:Be,setStatus:Mt,setSubmitting:Vn,setTouched:J,setValues:nt,submitForm:ot,validateForm:L,validateField:re,isValid:Ae,dirty:sn,unregisterField:Y,registerField:V,getFieldProps:to,getFieldMeta:zn,getFieldHelpers:Un,validateOnBlur:o,validateOnChange:n,validateOnMount:a});return $t}function Kg(e){var t={};if(e.inner){if(e.inner.length===0)return ht(t,e.path,e.message);for(var o=e.inner,n=Array.isArray(o),r=0,o=n?o:o[Symbol.iterator]();;){var i;if(n){if(r>=o.length)break;i=o[r++]}else{if(r=o.next(),r.done)break;i=r.value}var a=i;ce(t,a.path)||(t=ht(t,a.path,a.message))}}return t}function Zg(e,t,n,r){n===void 0&&(n=!1);var o=ei(e);return t[n?"validateSync":"validate"](o,{abortEarly:!1,context:r||o})}function ei(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(o){return Array.isArray(o)===!0||Za(o)?ei(o):o!==""?o:void 0}):Za(e[r])?t[r]=ei(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function Qg(e,t,n){var r=e.slice();return t.forEach(function(i,a){if(typeof r[a]>"u"){var s=n.clone!==!1,u=s&&n.isMergeableObject(i);r[a]=u?qo(Array.isArray(i)?[]:{},i,n):i}else n.isMergeableObject(i)?r[a]=qo(e[a],i,n):e.indexOf(i)===-1&&r.push(i)}),r}function Jg(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function e1(e,t,n){if(typeof e=="boolean")return!!t;var r=[],o=!1,i=-1;if(Array.isArray(e))r=e,i=e.indexOf(n),o=i>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!o?r.concat(n):o?r.slice(0,i).concat(r.slice(i+1)):r}var t1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?C.useLayoutEffect:C.useEffect;function de(e){var t=C.useRef(e);return t1(function(){t.current=e}),C.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current.apply(void 0,r)},[])}var n1=C.forwardRef(function(e,t){var n=e.action,r=rl(e,["action"]),o=n??"#",i=Gg(),a=i.handleReset,s=i.handleSubmit;return C.createElement("form",G({onSubmit:s,ref:t,onReset:a,action:o},r))});n1.displayName="Form";var al={exports:{}},r1=al.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=r1);var St=al.exports,sl={exports:{}},o1=sl.exports={version:"2.6.12"};typeof __e=="number"&&(__e=o1);var Je=sl.exports,i1=function(e){if(typeof e!="function")throw TypeError(e+" is not a function!");return e},a1=i1,ul=function(e,t,n){if(a1(e),t===void 0)return e;switch(n){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,i){return e.call(t,r,o,i)}}return function(){return e.apply(t,arguments)}},et={},Qt=function(e){return typeof e=="object"?e!==null:typeof e=="function"},s1=Qt,In=function(e){if(!s1(e))throw TypeError(e+" is not an object!");return e},Ln=function(e){try{return!!e()}catch{return!0}},tt=!Ln(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),uo,Ps;function cl(){if(Ps)return uo;Ps=1;var e=Qt,t=St.document,n=e(t)&&e(t.createElement);return uo=function(r){return n?t.createElement(r):{}},uo}var ll=!tt&&!Ln(function(){return Object.defineProperty(cl()("div"),"a",{get:function(){return 7}}).a!=7}),qn=Qt,Ji=function(e,t){if(!qn(e))return e;var n,r;if(t&&typeof(n=e.toString)=="function"&&!qn(r=n.call(e))||typeof(n=e.valueOf)=="function"&&!qn(r=n.call(e))||!t&&typeof(n=e.toString)=="function"&&!qn(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},Ss=In,u1=ll,c1=Ji,l1=Object.defineProperty;et.f=tt?Object.defineProperty:function(t,n,r){if(Ss(t),n=c1(n,!0),Ss(r),u1)try{return l1(t,n,r)}catch{}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t};var Dr=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},f1=et,p1=Dr,Jt=tt?function(e,t,n){return f1.f(e,t,p1(1,n))}:function(e,t,n){return e[t]=n,e},d1={}.hasOwnProperty,Et=function(e,t){return d1.call(e,t)},Xn=St,co=Je,Es=ul,h1=Jt,m1=Et,Kn="prototype",Z=function(e,t,n){var r=e&Z.F,o=e&Z.G,i=e&Z.S,a=e&Z.P,s=e&Z.B,u=e&Z.W,c=o?co:co[t]||(co[t]={}),l=c[Kn],p=o?Xn:i?Xn[t]:(Xn[t]||{})[Kn],d,m,b;o&&(n=t);for(d in n)m=!r&&p&&p[d]!==void 0,!(m&&m1(c,d))&&(b=m?p[d]:n[d],c[d]=o&&typeof p[d]!="function"?n[d]:s&&m?Es(b,Xn):u&&p[d]==b?function(g){var y=function(v,w,O){if(this instanceof g){switch(arguments.length){case 0:return new g;case 1:return new g(v);case 2:return new g(v,w)}return new g(v,w,O)}return g.apply(this,arguments)};return y[Kn]=g[Kn],y}(b):a&&typeof b=="function"?Es(Function.call,b):b,a&&((c.virtual||(c.virtual={}))[d]=b,e&Z.R&&l&&!l[d]&&h1(l,d,b)))};Z.F=1;Z.G=2;Z.S=4;Z.P=8;Z.B=16;Z.W=32;Z.U=64;Z.R=128;var en=Z,v1={}.toString,fl=function(e){return v1.call(e).slice(8,-1)},lo,Ts;function pl(){if(Ts)return lo;Ts=1;var e=fl;return lo=Object("z").propertyIsEnumerable(0)?Object:function(t){return e(t)=="String"?t.split(""):Object(t)},lo}var ea=function(e){if(e==null)throw TypeError("Can't call method on  "+e);return e},g1=pl(),y1=ea,tn=function(e){return g1(y1(e))},b1=Math.ceil,w1=Math.floor,ta=function(e){return isNaN(e=+e)?0:(e>0?w1:b1)(e)},x1=ta,O1=Math.min,C1=function(e){return e>0?O1(x1(e),9007199254740991):0},P1=ta,S1=Math.max,E1=Math.min,T1=function(e,t){return e=P1(e),e<0?S1(e+t,0):E1(e,t)},_1=tn,M1=C1,$1=T1,j1=function(e){return function(t,n,r){var o=_1(t),i=M1(o.length),a=$1(r,i),s;if(e&&n!=n){for(;i>a;)if(s=o[a++],s!=s)return!0}else for(;i>a;a++)if((e||a in o)&&o[a]===n)return e||a||0;return!e&&-1}},dl={exports:{}},A1=!0,D1=Je,_s=St,Ms="__core-js_shared__",$s=_s[Ms]||(_s[Ms]={});(dl.exports=function(e,t){return $s[e]||($s[e]=t!==void 0?t:{})})("versions",[]).push({version:D1.version,mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});var na=dl.exports,k1=0,N1=Math.random(),kr=function(e){return"Symbol(".concat(e===void 0?"":e,")_",(++k1+N1).toString(36))},fo,js;function ra(){if(js)return fo;js=1;var e=na("keys"),t=kr;return fo=function(n){return e[n]||(e[n]=t(n))},fo}var As=Et,R1=tn,I1=j1(!1),L1=ra()("IE_PROTO"),hl=function(e,t){var n=R1(e),r=0,o=[],i;for(i in n)i!=L1&&As(n,i)&&o.push(i);for(;t.length>r;)As(n,i=t[r++])&&(~I1(o,i)||o.push(i));return o},oa="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),W1=hl,F1=oa,Nr=Object.keys||function(t){return W1(t,F1)},Rr={};Rr.f=Object.getOwnPropertySymbols;var po={},Ds;function Ir(){return Ds||(Ds=1,po.f={}.propertyIsEnumerable),po}var B1=ea,ia=function(e){return Object(B1(e))},ho,ks;function H1(){if(ks)return ho;ks=1;var e=tt,t=Nr,n=Rr,r=Ir(),o=ia,i=pl(),a=Object.assign;return ho=!a||Ln(function(){var s={},u={},c=Symbol(),l="abcdefghijklmnopqrst";return s[c]=7,l.split("").forEach(function(p){u[p]=p}),a({},s)[c]!=7||Object.keys(a({},u)).join("")!=l})?function(u,c){for(var l=o(u),p=arguments.length,d=1,m=n.f,b=r.f;p>d;)for(var g=i(arguments[d++]),y=m?t(g).concat(m(g)):t(g),v=y.length,w=0,O;v>w;)O=y[w++],(!e||b.call(g,O))&&(l[O]=g[O]);return l}:a,ho}var mo=en;mo(mo.S+mo.F,"Object",{assign:H1()});var V1=Je.Object.assign,z1={default:V1,__esModule:!0},U1=z1,Y1=G1(U1);function G1(e){return e&&e.__esModule?e:{default:e}}var It=Y1.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Lr={},q1=ta,X1=ea,K1=function(e){return function(t,n){var r=String(X1(t)),o=q1(n),i=r.length,a,s;return o<0||o>=i?e?"":void 0:(a=r.charCodeAt(o),a<55296||a>56319||o+1===i||(s=r.charCodeAt(o+1))<56320||s>57343?e?r.charAt(o):a:e?r.slice(o,o+2):(a-55296<<10)+(s-56320)+65536)}},ml=Jt,aa={},vo,Ns;function Z1(){if(Ns)return vo;Ns=1;var e=et,t=In,n=Nr;return vo=tt?Object.defineProperties:function(o,i){t(o);for(var a=n(i),s=a.length,u=0,c;s>u;)e.f(o,c=a[u++],i[c]);return o},vo}var go,Rs;function Q1(){if(Rs)return go;Rs=1;var e=St.document;return go=e&&e.documentElement,go}var yo,Is;function sa(){if(Is)return yo;Is=1;var e=In,t=Z1(),n=oa,r=ra()("IE_PROTO"),o=function(){},i="prototype",a=function(){var s=cl()("iframe"),u=n.length,c="<",l=">",p;for(s.style.display="none",Q1().appendChild(s),s.src="javascript:",p=s.contentWindow.document,p.open(),p.write(c+"script"+l+"document.F=Object"+c+"/script"+l),p.close(),a=p.F;u--;)delete a[i][n[u]];return a()};return yo=Object.create||function(u,c){var l;return u!==null?(o[i]=e(u),l=new o,o[i]=null,l[r]=u):l=a(),c===void 0?l:t(l,c)},yo}var vl={exports:{}},ti=na("wks"),J1=kr,ni=St.Symbol,Ls=typeof ni=="function",ey=vl.exports=function(e){return ti[e]||(ti[e]=Ls&&ni[e]||(Ls?ni:J1)("Symbol."+e))};ey.store=ti;var nn=vl.exports,ty=et.f,ny=Et,Ws=nn("toStringTag"),ua=function(e,t,n){e&&!ny(e=n?e:e.prototype,Ws)&&ty(e,Ws,{configurable:!0,value:t})},ry=sa(),oy=Dr,iy=ua,gl={};Jt(gl,nn("iterator"),function(){return this});var ay=function(e,t,n){e.prototype=ry(gl,{next:oy(1,n)}),iy(e,t+" Iterator")},sy=Et,uy=ia,Fs=ra()("IE_PROTO"),cy=Object.prototype,ly=Object.getPrototypeOf||function(e){return e=uy(e),sy(e,Fs)?e[Fs]:typeof e.constructor=="function"&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?cy:null},bo=en,fy=ml,py=Jt,Bs=aa,dy=ay,hy=ua,my=ly,wo=nn("iterator"),xo=!([].keys&&"next"in[].keys()),vy="@@iterator",Hs="keys",Zn="values",gy=function(){return this},yl=function(e,t,n,r,o,i,a){dy(n,t,r);var s=function(O){if(!xo&&O in p)return p[O];switch(O){case Hs:return function(){return new n(this,O)};case Zn:return function(){return new n(this,O)}}return function(){return new n(this,O)}},u=t+" Iterator",c=o==Zn,l=!1,p=e.prototype,d=p[wo]||p[vy]||o&&p[o],m=d||s(o),b=o?c?s("entries"):m:void 0,g=t=="Array"&&p.entries||d,y,v,w;if(g&&(w=my(g.call(new e)),w!==Object.prototype&&w.next&&hy(w,u,!0)),c&&d&&d.name!==Zn&&(l=!0,m=function(){return d.call(this)}),a&&(xo||l||!p[wo])&&py(p,wo,m),Bs[t]=m,Bs[u]=gy,o)if(y={values:c?m:s(Zn),keys:i?m:s(Hs),entries:b},a)for(v in y)v in p||fy(p,v,y[v]);else bo(bo.P+bo.F*(xo||l),t,y);return y},yy=K1(!0);yl(String,"String",function(e){this._t=String(e),this._i=0},function(){var e=this._t,t=this._i,n;return t>=e.length?{value:void 0,done:!0}:(n=yy(e,t),this._i+=n.length,{value:n,done:!1})});var by=function(e,t){return{value:t,done:!!e}},Qn=by,Vs=aa,wy=tn;yl(Array,"Array",function(e,t){this._t=wy(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,Qn(1)):t=="keys"?Qn(0,n):t=="values"?Qn(0,e[n]):Qn(0,[n,e[n]])},"values");Vs.Arguments=Vs.Array;var xy=St,Oy=Jt,zs=aa,Us=nn("toStringTag"),Ys="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");for(var Oo=0;Oo<Ys.length;Oo++){var Co=Ys[Oo],Gs=xy[Co],Po=Gs&&Gs.prototype;Po&&!Po[Us]&&Oy(Po,Us,Co),zs[Co]=zs.Array}var Wr={};Wr.f=nn;var Cy=Wr.f("iterator"),Py={default:Cy,__esModule:!0},bl={exports:{}},gt=kr("meta"),Sy=Qt,ca=Et,Ey=et.f,Ty=0,Fr=Object.isExtensible||function(){return!0},_y=!Ln(function(){return Fr(Object.preventExtensions({}))}),la=function(e){Ey(e,gt,{value:{i:"O"+ ++Ty,w:{}}})},My=function(e,t){if(!Sy(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ca(e,gt)){if(!Fr(e))return"F";if(!t)return"E";la(e)}return e[gt].i},$y=function(e,t){if(!ca(e,gt)){if(!Fr(e))return!0;if(!t)return!1;la(e)}return e[gt].w},jy=function(e){return _y&&Ay.NEED&&Fr(e)&&!ca(e,gt)&&la(e),e},Ay=bl.exports={KEY:gt,NEED:!1,fastKey:My,getWeak:$y,onFreeze:jy},Dy=bl.exports,qs=Je,ky=Wr,Ny=et.f,fa=function(e){var t=qs.Symbol||(qs.Symbol={});e.charAt(0)!="_"&&!(e in t)&&Ny(t,e,{value:ky.f(e)})},Ry=Nr,Iy=Rr,Ly=Ir(),Wy=function(e){var t=Ry(e),n=Iy.f;if(n)for(var r=n(e),o=Ly.f,i=0,a;r.length>i;)o.call(e,a=r[i++])&&t.push(a);return t},Fy=fl,By=Array.isArray||function(t){return Fy(t)=="Array"},wl={},pa={},Hy=hl,Vy=oa.concat("length","prototype");pa.f=Object.getOwnPropertyNames||function(t){return Hy(t,Vy)};var zy=tn,xl=pa.f,Uy={}.toString,Ol=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Yy=function(e){try{return xl(e)}catch{return Ol.slice()}};wl.f=function(t){return Ol&&Uy.call(t)=="[object Window]"?Yy(t):xl(zy(t))};var da={},Gy=Ir(),qy=Dr,Xy=tn,Ky=Ji,Zy=Et,Qy=ll,Xs=Object.getOwnPropertyDescriptor;da.f=tt?Xs:function(t,n){if(t=Xy(t),n=Ky(n,!0),Qy)try{return Xs(t,n)}catch{}if(Zy(t,n))return qy(!Gy.f.call(t,n),t[n])};var Br=St,q=Et,ri=tt,Q=en,Ks=ml,Jy=Dy.KEY,ha=Ln,ma=na,va=ua,eb=kr,Wn=nn,tb=Wr,nb=fa,rb=Wy,ob=By,oi=In,ib=Qt,ab=ia,Hr=tn,ga=Ji,ii=Dr,_n=sa(),Cl=wl,Pl=da,Vr=Rr,Sl=et,sb=Nr,El=Pl.f,pt=Sl.f,Tl=Cl.f,se=Br.Symbol,yr=Br.JSON,Jn=yr&&yr.stringify,Ge="prototype",oe=Wn("_hidden"),Zs=Wn("toPrimitive"),ub={}.propertyIsEnumerable,ln=ma("symbol-registry"),We=ma("symbols"),Fn=ma("op-symbols"),me=Object[Ge],rn=typeof se=="function"&&!!Vr.f,So=Br.QObject,ai=!So||!So[Ge]||!So[Ge].findChild,si=ri&&ha(function(){return _n(pt({},"a",{get:function(){return pt(this,"a",{value:7}).a}})).a!=7})?function(e,t,n){var r=El(me,t);r&&delete me[t],pt(e,t,n),r&&e!==me&&pt(me,t,r)}:pt,Qs=function(e){var t=We[e]=_n(se[Ge]);return t._k=e,t},ui=rn&&typeof se.iterator=="symbol"?function(e){return typeof e=="symbol"}:function(e){return e instanceof se},zr=function(t,n,r){return t===me&&zr(Fn,n,r),oi(t),n=ga(n,!0),oi(r),q(We,n)?(r.enumerable?(q(t,oe)&&t[oe][n]&&(t[oe][n]=!1),r=_n(r,{enumerable:ii(0,!1)})):(q(t,oe)||pt(t,oe,ii(1,{})),t[oe][n]=!0),si(t,n,r)):pt(t,n,r)},_l=function(t,n){oi(t);for(var r=rb(n=Hr(n)),o=0,i=r.length,a;i>o;)zr(t,a=r[o++],n[a]);return t},cb=function(t,n){return n===void 0?_n(t):_l(_n(t),n)},Js=function(t){var n=ub.call(this,t=ga(t,!0));return this===me&&q(We,t)&&!q(Fn,t)?!1:n||!q(this,t)||!q(We,t)||q(this,oe)&&this[oe][t]?n:!0},Ml=function(t,n){if(t=Hr(t),n=ga(n,!0),!(t===me&&q(We,n)&&!q(Fn,n))){var r=El(t,n);return r&&q(We,n)&&!(q(t,oe)&&t[oe][n])&&(r.enumerable=!0),r}},$l=function(t){for(var n=Tl(Hr(t)),r=[],o=0,i;n.length>o;)!q(We,i=n[o++])&&i!=oe&&i!=Jy&&r.push(i);return r},jl=function(t){for(var n=t===me,r=Tl(n?Fn:Hr(t)),o=[],i=0,a;r.length>i;)q(We,a=r[i++])&&(!n||q(me,a))&&o.push(We[a]);return o};rn||(se=function(){if(this instanceof se)throw TypeError("Symbol is not a constructor!");var t=eb(arguments.length>0?arguments[0]:void 0),n=function(r){this===me&&n.call(Fn,r),q(this,oe)&&q(this[oe],t)&&(this[oe][t]=!1),si(this,t,ii(1,r))};return ri&&ai&&si(me,t,{configurable:!0,set:n}),Qs(t)},Ks(se[Ge],"toString",function(){return this._k}),Pl.f=Ml,Sl.f=zr,pa.f=Cl.f=$l,Ir().f=Js,Vr.f=jl,ri&&!A1&&Ks(me,"propertyIsEnumerable",Js),tb.f=function(e){return Qs(Wn(e))});Q(Q.G+Q.W+Q.F*!rn,{Symbol:se});for(var eu="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tu=0;eu.length>tu;)Wn(eu[tu++]);for(var nu=sb(Wn.store),ru=0;nu.length>ru;)nb(nu[ru++]);Q(Q.S+Q.F*!rn,"Symbol",{for:function(e){return q(ln,e+="")?ln[e]:ln[e]=se(e)},keyFor:function(t){if(!ui(t))throw TypeError(t+" is not a symbol!");for(var n in ln)if(ln[n]===t)return n},useSetter:function(){ai=!0},useSimple:function(){ai=!1}});Q(Q.S+Q.F*!rn,"Object",{create:cb,defineProperty:zr,defineProperties:_l,getOwnPropertyDescriptor:Ml,getOwnPropertyNames:$l,getOwnPropertySymbols:jl});var lb=ha(function(){Vr.f(1)});Q(Q.S+Q.F*lb,"Object",{getOwnPropertySymbols:function(t){return Vr.f(ab(t))}});yr&&Q(Q.S+Q.F*(!rn||ha(function(){var e=se();return Jn([e])!="[null]"||Jn({a:e})!="{}"||Jn(Object(e))!="{}"})),"JSON",{stringify:function(t){for(var n=[t],r=1,o,i;arguments.length>r;)n.push(arguments[r++]);if(i=o=n[1],!(!ib(o)&&t===void 0||ui(t)))return ob(o)||(o=function(a,s){if(typeof i=="function"&&(s=i.call(this,a,s)),!ui(s))return s}),n[1]=o,Jn.apply(yr,n)}});se[Ge][Zs]||Jt(se[Ge],Zs,se[Ge].valueOf);va(se,"Symbol");va(Math,"Math",!0);va(Br.JSON,"JSON",!0);fa("asyncIterator");fa("observable");var fb=Je.Symbol,pb={default:fb,__esModule:!0};Lr.__esModule=!0;var db=Py,Al=Dl(db),hb=pb,Ye=Dl(hb),Eo=typeof Ye.default=="function"&&typeof Al.default=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Ye.default=="function"&&e.constructor===Ye.default&&e!==Ye.default.prototype?"symbol":typeof e};function Dl(e){return e&&e.__esModule?e:{default:e}}var mb=Lr.default=typeof Ye.default=="function"&&Eo(Al.default)==="symbol"?function(e){return typeof e>"u"?"undefined":Eo(e)}:function(e){return e&&typeof Ye.default=="function"&&e.constructor===Ye.default&&e!==Ye.default.prototype?"symbol":typeof e>"u"?"undefined":Eo(e)},vb=Lr,gb=yb(vb);function yb(e){return e&&e.__esModule?e:{default:e}}var Xe=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&((typeof t>"u"?"undefined":(0,gb.default)(t))==="object"||typeof t=="function")?t:e},To,ou;function bb(){if(ou)return To;ou=1;var e=Qt,t=In,n=function(r,o){if(t(r),!e(o)&&o!==null)throw TypeError(o+": can't set as prototype!")};return To={set:Object.setPrototypeOf||("__proto__"in{}?function(r,o,i){try{i=ul(Function.call,da.f(Object.prototype,"__proto__").set,2),i(r,[]),o=!(r instanceof Array)}catch{o=!0}return function(s,u){return n(s,u),o?s.__proto__=u:i(s,u),s}}({},!1):void 0),check:n},To}var iu=en;iu(iu.S,"Object",{setPrototypeOf:bb().set});var wb=Je.Object.setPrototypeOf,xb={default:wb,__esModule:!0},au=en;au(au.S,"Object",{create:sa()});var Ob=Je.Object,Cb=function(t,n){return Ob.create(t,n)},Pb={default:Cb,__esModule:!0},Sb=xb,su=ya(Sb),Eb=Pb,Tb=ya(Eb),_b=Lr,Mb=ya(_b);function ya(e){return e&&e.__esModule?e:{default:e}}var _t=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+(typeof t>"u"?"undefined":(0,Mb.default)(t)));e.prototype=(0,Tb.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(su.default?(0,su.default)(e,t):e.__proto__=t)};function kl(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Nl(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Rl(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}kl.__suppressDeprecationWarning=!0;Nl.__suppressDeprecationWarning=!0;Rl.__suppressDeprecationWarning=!0;function ba(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,o=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?o="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),n!==null||r!==null||o!==null){var i=e.displayName||e.name,a=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+a+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=kl,t.componentWillReceiveProps=Nl),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Rl;var s=t.componentDidUpdate;t.componentDidUpdate=function(c,l,p){var d=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:p;s.call(this,c,l,d)}}return e}function ci(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}var li={exports:{}},fi={exports:{}},pi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(){return!1}function r(){return!0}function o(){this.timeStamp=Date.now(),this.target=void 0,this.currentTarget=void 0}o.prototype={isEventObject:1,constructor:o,isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){this.isDefaultPrevented=r},stopPropagation:function(){this.isPropagationStopped=r},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=r,this.stopPropagation()},halt:function(a){a?this.stopImmediatePropagation():this.stopPropagation(),this.preventDefault()}},t.default=o,e.exports=t.default})(pi,pi.exports);var $b=pi.exports;/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var uu=Object.getOwnPropertySymbols,jb=Object.prototype.hasOwnProperty,Ab=Object.prototype.propertyIsEnumerable;function Db(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function kb(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Nb=kb()?Object.assign:function(e,t){for(var n,r=Db(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)jb.call(n,a)&&(r[a]=n[a]);if(uu){o=uu(n);for(var s=0;s<o.length;s++)Ab.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(y){return y&&y.__esModule?y:{default:y}}var r=$b,o=n(r),i=Nb,a=n(i),s=!0,u=!1,c=["altKey","bubbles","cancelable","ctrlKey","currentTarget","eventPhase","metaKey","shiftKey","target","timeStamp","view","type"];function l(y){return y==null}var p=[{reg:/^key/,props:["char","charCode","key","keyCode","which"],fix:function(v,w){l(v.which)&&(v.which=l(w.charCode)?w.keyCode:w.charCode),v.metaKey===void 0&&(v.metaKey=v.ctrlKey)}},{reg:/^touch/,props:["touches","changedTouches","targetTouches"]},{reg:/^hashchange$/,props:["newURL","oldURL"]},{reg:/^gesturechange$/i,props:["rotation","scale"]},{reg:/^(mousewheel|DOMMouseScroll)$/,props:[],fix:function(v,w){var O=void 0,S=void 0,T=void 0,P=w.wheelDelta,E=w.axis,D=w.wheelDeltaY,k=w.wheelDeltaX,R=w.detail;P&&(T=P/120),R&&(T=0-(R%3===0?R/3:R)),E!==void 0&&(E===v.HORIZONTAL_AXIS?(S=0,O=0-T):E===v.VERTICAL_AXIS&&(O=0,S=T)),D!==void 0&&(S=D/120),k!==void 0&&(O=-1*k/120),!O&&!S&&(S=T),O!==void 0&&(v.deltaX=O),S!==void 0&&(v.deltaY=S),T!==void 0&&(v.delta=T)}},{reg:/^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,props:["buttons","clientX","clientY","button","offsetX","relatedTarget","which","fromElement","toElement","offsetY","pageX","pageY","screenX","screenY"],fix:function(v,w){var O=void 0,S=void 0,T=void 0,P=v.target,E=w.button;return P&&l(v.pageX)&&!l(w.clientX)&&(O=P.ownerDocument||document,S=O.documentElement,T=O.body,v.pageX=w.clientX+(S&&S.scrollLeft||T&&T.scrollLeft||0)-(S&&S.clientLeft||T&&T.clientLeft||0),v.pageY=w.clientY+(S&&S.scrollTop||T&&T.scrollTop||0)-(S&&S.clientTop||T&&T.clientTop||0)),!v.which&&E!==void 0&&(E&1?v.which=1:E&2?v.which=3:E&4?v.which=2:v.which=0),!v.relatedTarget&&v.fromElement&&(v.relatedTarget=v.fromElement===P?v.toElement:v.fromElement),v}}];function d(){return s}function m(){return u}function b(y){var v=y.type,w=typeof y.stopPropagation=="function"||typeof y.cancelBubble=="boolean";o.default.call(this),this.nativeEvent=y;var O=m;"defaultPrevented"in y?O=y.defaultPrevented?d:m:"getPreventDefault"in y?O=y.getPreventDefault()?d:m:"returnValue"in y&&(O=y.returnValue===u?d:m),this.isDefaultPrevented=O;var S=[],T=void 0,P=void 0,E=void 0,D=c.concat();for(p.forEach(function(k){v.match(k.reg)&&(D=D.concat(k.props),k.fix&&S.push(k.fix))}),P=D.length;P;)E=D[--P],this[E]=y[E];for(!this.target&&w&&(this.target=y.srcElement||document),this.target&&this.target.nodeType===3&&(this.target=this.target.parentNode),P=S.length;P;)T=S[--P],T(this,y);this.timeStamp=y.timeStamp||Date.now()}var g=o.default.prototype;(0,a.default)(b.prototype,g,{constructor:b,preventDefault:function(){var v=this.nativeEvent;v.preventDefault?v.preventDefault():v.returnValue=u,g.preventDefault.call(this)},stopPropagation:function(){var v=this.nativeEvent;v.stopPropagation?v.stopPropagation():v.cancelBubble=s,g.stopPropagation.call(this)}}),t.default=b,e.exports=t.default})(fi,fi.exports);var Rb=fi.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;function n(a){return a&&a.__esModule?a:{default:a}}var r=Rb,o=n(r);function i(a,s,u,c){function l(d){var m=new o.default(d);u.call(a,m)}if(a.addEventListener){var p=function(){var d=!1;return typeof c=="object"?d=c.capture||!1:typeof c=="boolean"&&(d=c),a.addEventListener(s,l,c||!1),{v:{remove:function(){a.removeEventListener(s,l,d)}}}}();if(typeof p=="object")return p.v}else if(a.attachEvent)return a.attachEvent("on"+s,l),{remove:function(){a.detachEvent("on"+s,l)}}}e.exports=t.default})(li,li.exports);var Ib=li.exports;const Lb=Xt(Ib);function hn(e,t,n,r){var o=we.unstable_batchedUpdates?function(a){we.unstable_batchedUpdates(n,a)}:n;return Lb(e,t,o,r)}function hr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hr=function(n){return typeof n}:hr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hr(e)}function Wb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fb(e,t,n){return t&&cu(e.prototype,t),n&&cu(e,n),e}function Bb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&di(e,t)}function di(e,t){return di=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},di(e,t)}function Hb(e){var t=Ub();return function(){var r=br(e),o;if(t){var i=br(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Vb(this,o)}}function Vb(e,t){return t&&(hr(t)==="object"||typeof t=="function")?t:zb(e)}function zb(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ub(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function br(e){return br=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},br(e)}var wa=function(e){Bb(n,e);var t=Hb(n);function n(){var r;Wb(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=t.call.apply(t,[this].concat(i)),r.removeContainer=function(){r.container&&(we.unmountComponentAtNode(r.container),r.container.parentNode.removeChild(r.container),r.container=null)},r.renderComponent=function(s,u){var c=r.props,l=c.visible,p=c.getComponent,d=c.forceRender,m=c.getContainer,b=c.parent;(l||b._component||d)&&(r.container||(r.container=m()),we.unstable_renderSubtreeIntoContainer(b,p(s),r.container,function(){u&&u.call(this)}))},r}return Fb(n,[{key:"componentDidMount",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentDidUpdate",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentWillUnmount",value:function(){this.props.autoDestroy&&this.removeContainer()}},{key:"render",value:function(){return this.props.children({renderComponent:this.renderComponent,removeContainer:this.removeContainer})}}]),n}(j.Component);wa.propTypes={autoMount:f.bool,autoDestroy:f.bool,visible:f.bool,forceRender:f.bool,parent:f.any,getComponent:f.func.isRequired,getContainer:f.func.isRequired,children:f.func.isRequired};wa.defaultProps={autoMount:!0,autoDestroy:!0,forceRender:!1};function mr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?mr=function(n){return typeof n}:mr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},mr(e)}function Yb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gb(e,t,n){return t&&lu(e.prototype,t),n&&lu(e,n),e}function qb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&hi(e,t)}function hi(e,t){return hi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},hi(e,t)}function Xb(e){var t=Qb();return function(){var r=wr(e),o;if(t){var i=wr(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Kb(this,o)}}function Kb(e,t){return t&&(mr(t)==="object"||typeof t=="function")?t:Zb(e)}function Zb(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function wr(e){return wr=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},wr(e)}var Il=function(e){qb(n,e);var t=Xb(n);function n(){return Yb(this,n),t.apply(this,arguments)}return Gb(n,[{key:"componentDidMount",value:function(){this.createContainer()}},{key:"componentDidUpdate",value:function(o){var i=this.props.didUpdate;i&&i(o)}},{key:"componentWillUnmount",value:function(){this.removeContainer()}},{key:"createContainer",value:function(){this._container=this.props.getContainer(),this.forceUpdate()}},{key:"removeContainer",value:function(){this._container&&this._container.parentNode.removeChild(this._container)}},{key:"render",value:function(){return this._container?we.createPortal(this.props.children,this._container):null}}]),n}(j.Component);Il.propTypes={getContainer:f.func.isRequired,children:f.node.isRequired,didUpdate:f.func};var Ll={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(i=o(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var s in i)t.call(i,s)&&i[s]&&(a=o(a,s));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ll);var Jb=Ll.exports;const yt=Xt(Jb);function ew(e,t,n){return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function tw(e,t,n){var r=e[t]||{};return It({},r,n)}function nw(e,t,n,r){var o=n.points;for(var i in e)if(e.hasOwnProperty(i)&&ew(e[i].points,o,r))return t+"-placement-"+i;return""}function fu(e,t){this[e]=t}var _o=en;_o(_o.S+_o.F*!tt,"Object",{defineProperty:et.f});var rw=Je.Object,ow=function(t,n,r){return rw.defineProperty(t,n,r)},Wl={default:ow,__esModule:!0},iw=Wl,aw=sw(iw);function sw(e){return e&&e.__esModule?e:{default:e}}var xa=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,aw.default)(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function pu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function du(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pu(Object(n),!0).forEach(function(r){uw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mi(e){"@babel/helpers - typeof";return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mi(e)}function uw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fn,cw={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function xr(){if(fn!==void 0)return fn;fn="";var e=document.createElement("p").style,t="Transform";for(var n in cw)n+t in e&&(fn=n);return fn}function Fl(){return xr()?"".concat(xr(),"TransitionProperty"):"transitionProperty"}function Ur(){return xr()?"".concat(xr(),"Transform"):"transform"}function hu(e,t){var n=Fl();n&&(e.style[n]=t,n!=="transitionProperty"&&(e.style.transitionProperty=t))}function Mo(e,t){var n=Ur();n&&(e.style[n]=t,n!=="transform"&&(e.style.transform=t))}function lw(e){return e.style.transitionProperty||e.style[Fl()]}function fw(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("transform")||t.getPropertyValue(Ur());if(n&&n!=="none"){var r=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(r[12]||r[4],0),y:parseFloat(r[13]||r[5],0)}}return{x:0,y:0}}var pw=/matrix\((.*)\)/,dw=/matrix3d\((.*)\)/;function hw(e,t){var n=window.getComputedStyle(e,null),r=n.getPropertyValue("transform")||n.getPropertyValue(Ur());if(r&&r!=="none"){var o,i=r.match(pw);if(i)i=i[1],o=i.split(",").map(function(s){return parseFloat(s,10)}),o[4]=t.x,o[5]=t.y,Mo(e,"matrix(".concat(o.join(","),")"));else{var a=r.match(dw)[1];o=a.split(",").map(function(s){return parseFloat(s,10)}),o[12]=t.x,o[13]=t.y,Mo(e,"matrix3d(".concat(o.join(","),")"))}}else Mo(e,"translateX(".concat(t.x,"px) translateY(").concat(t.y,"px) translateZ(0)"))}var mw=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,Bn;function mu(e){var t=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=t}function Lt(e,t,n){var r=n;if(mi(t)==="object"){for(var o in t)t.hasOwnProperty(o)&&Lt(e,o,t[o]);return}if(typeof r<"u"){typeof r=="number"&&(r="".concat(r,"px")),e.style[t]=r;return}return Bn(e,t)}function vw(e){var t,n,r,o=e.ownerDocument,i=o.body,a=o&&o.documentElement;return t=e.getBoundingClientRect(),n=Math.floor(t.left),r=Math.floor(t.top),n-=a.clientLeft||i.clientLeft||0,r-=a.clientTop||i.clientTop||0,{left:n,top:r}}function Bl(e,t){var n=e["page".concat(t?"Y":"X","Offset")],r="scroll".concat(t?"Top":"Left");if(typeof n!="number"){var o=e.document;n=o.documentElement[r],typeof n!="number"&&(n=o.body[r])}return n}function Hl(e){return Bl(e)}function Vl(e){return Bl(e,!0)}function Mn(e){var t=vw(e),n=e.ownerDocument,r=n.defaultView||n.parentWindow;return t.left+=Hl(r),t.top+=Vl(r),t}function Oa(e){return e!=null&&e==e.window}function zl(e){return Oa(e)?e.document:e.nodeType===9?e:e.ownerDocument}function gw(e,t,n){var r=n,o="",i=zl(e);return r=r||i.defaultView.getComputedStyle(e,null),r&&(o=r.getPropertyValue(t)||r[t]),o}var yw=new RegExp("^(".concat(mw,")(?!px)[a-z%]+$"),"i"),bw=/^(top|right|bottom|left)$/,$o="currentStyle",jo="runtimeStyle",at="left",ww="px";function xw(e,t){var n=e[$o]&&e[$o][t];if(yw.test(n)&&!bw.test(t)){var r=e.style,o=r[at],i=e[jo][at];e[jo][at]=e[$o][at],r[at]=t==="fontSize"?"1em":n||0,n=r.pixelLeft+ww,r[at]=o,e[jo][at]=i}return n===""?"auto":n}typeof window<"u"&&(Bn=window.getComputedStyle?gw:xw);function er(e,t){return e==="left"?t.useCssRight?"right":e:t.useCssBottom?"bottom":e}function vu(e){if(e==="left")return"right";if(e==="right")return"left";if(e==="top")return"bottom";if(e==="bottom")return"top"}function gu(e,t,n){Lt(e,"position")==="static"&&(e.style.position="relative");var r=-999,o=-999,i=er("left",n),a=er("top",n),s=vu(i),u=vu(a);i!=="left"&&(r=999),a!=="top"&&(o=999);var c="",l=Mn(e);("left"in t||"top"in t)&&(c=lw(e)||"",hu(e,"none")),"left"in t&&(e.style[s]="",e.style[i]="".concat(r,"px")),"top"in t&&(e.style[u]="",e.style[a]="".concat(o,"px")),mu(e);var p=Mn(e),d={};for(var m in t)if(t.hasOwnProperty(m)){var b=er(m,n),g=m==="left"?r:o,y=l[m]-p[m];b===m?d[b]=g+y:d[b]=g-y}Lt(e,d),mu(e),("left"in t||"top"in t)&&hu(e,c);var v={};for(var w in t)if(t.hasOwnProperty(w)){var O=er(w,n),S=t[w]-l[w];w===O?v[O]=d[O]+S:v[O]=d[O]-S}Lt(e,v)}function Ow(e,t){var n=Mn(e),r=fw(e),o={x:r.x,y:r.y};"left"in t&&(o.x=r.x+t.left-n.left),"top"in t&&(o.y=r.y+t.top-n.top),hw(e,o)}function Cw(e,t,n){if(n.ignoreShake){var r=Mn(e),o=r.left.toFixed(0),i=r.top.toFixed(0),a=t.left.toFixed(0),s=t.top.toFixed(0);if(o===a&&i===s)return}n.useCssRight||n.useCssBottom?gu(e,t,n):n.useCssTransform&&Ur()in document.body.style?Ow(e,t):gu(e,t,n)}function Ca(e,t){for(var n=0;n<e.length;n++)t(e[n])}function Ul(e){return Bn(e,"boxSizing")==="border-box"}var Pw=["margin","border","padding"],vi=-1,Sw=2,gi=1,Ew=0;function Tw(e,t,n){var r={},o=e.style,i;for(i in t)t.hasOwnProperty(i)&&(r[i]=o[i],o[i]=t[i]);n.call(e);for(i in t)t.hasOwnProperty(i)&&(o[i]=r[i])}function mn(e,t,n){var r=0,o,i,a;for(i=0;i<t.length;i++)if(o=t[i],o)for(a=0;a<n.length;a++){var s=void 0;o==="border"?s="".concat(o).concat(n[a],"Width"):s=o+n[a],r+=parseFloat(Bn(e,s))||0}return r}var Te={getParent:function(t){var n=t;do n.nodeType===11&&n.host?n=n.host:n=n.parentNode;while(n&&n.nodeType!==1&&n.nodeType!==9);return n}};Ca(["Width","Height"],function(e){Te["doc".concat(e)]=function(t){var n=t.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],Te["viewport".concat(e)](n))},Te["viewport".concat(e)]=function(t){var n="client".concat(e),r=t.document,o=r.body,i=r.documentElement,a=i[n];return r.compatMode==="CSS1Compat"&&a||o&&o[n]||a}});function yu(e,t,n){var r=n;if(Oa(e))return t==="width"?Te.viewportWidth(e):Te.viewportHeight(e);if(e.nodeType===9)return t==="width"?Te.docWidth(e):Te.docHeight(e);var o=t==="width"?["Left","Right"]:["Top","Bottom"],i=Math.floor(t==="width"?e.getBoundingClientRect().width:e.getBoundingClientRect().height),a=Ul(e),s=0;(i==null||i<=0)&&(i=void 0,s=Bn(e,t),(s==null||Number(s)<0)&&(s=e.style[t]||0),s=Math.floor(parseFloat(s))||0),r===void 0&&(r=a?gi:vi);var u=i!==void 0||a,c=i||s;return r===vi?u?c-mn(e,["border","padding"],o):s:u?r===gi?c:c+(r===Sw?-mn(e,["border"],o):mn(e,["margin"],o)):s+mn(e,Pw.slice(r),o)}var _w={position:"absolute",visibility:"hidden",display:"block"};function bu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,o=t[0];return o.offsetWidth!==0?r=yu.apply(void 0,t):Tw(o,_w,function(){r=yu.apply(void 0,t)}),r}Ca(["width","height"],function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);Te["outer".concat(t)]=function(r,o){return r&&bu(r,e,o?Ew:gi)};var n=e==="width"?["Left","Right"]:["Top","Bottom"];Te[e]=function(r,o){var i=o;if(i!==void 0){if(r){var a=Ul(r);return a&&(i+=mn(r,["padding","border"],n)),Lt(r,e,i)}return}return r&&bu(r,e,vi)}});function Yl(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var N={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var n=t.ownerDocument||t;return n.defaultView||n.parentWindow},getDocument:zl,offset:function(t,n,r){if(typeof n<"u")Cw(t,n,r||{});else return Mn(t)},isWindow:Oa,each:Ca,css:Lt,clone:function(t){var n,r={};for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);var o=t.overflow;if(o)for(n in t)t.hasOwnProperty(n)&&(r.overflow[n]=t.overflow[n]);return r},mix:Yl,getWindowScrollLeft:function(t){return Hl(t)},getWindowScrollTop:function(t){return Vl(t)},merge:function(){for(var t={},n=0;n<arguments.length;n++)N.mix(t,n<0||arguments.length<=n?void 0:arguments[n]);return t},viewportWidth:0,viewportHeight:0};Yl(N,Te);var Ao=N.getParent;function yi(e){if(N.isWindow(e)||e.nodeType===9)return null;var t=N.getDocument(e),n=t.body,r,o=N.css(e,"position"),i=o==="fixed"||o==="absolute";if(!i)return e.nodeName.toLowerCase()==="html"?null:Ao(e);for(r=Ao(e);r&&r!==n&&r.nodeType!==9;r=Ao(r))if(o=N.css(r,"position"),o!=="static")return r;return null}var wu=N.getParent;function Mw(e){if(N.isWindow(e)||e.nodeType===9)return!1;var t=N.getDocument(e),n=t.body,r=null;for(r=wu(e);r&&r!==n&&r!==t;r=wu(r)){var o=N.css(r,"position");if(o==="fixed")return!0}return!1}function Pa(e,t){for(var n={left:0,right:1/0,top:0,bottom:1/0},r=yi(e),o=N.getDocument(e),i=o.defaultView||o.parentWindow,a=o.body,s=o.documentElement;r;){if((navigator.userAgent.indexOf("MSIE")===-1||r.clientWidth!==0)&&r!==a&&r!==s&&N.css(r,"overflow")!=="visible"){var u=N.offset(r);u.left+=r.clientLeft,u.top+=r.clientTop,n.top=Math.max(n.top,u.top),n.right=Math.min(n.right,u.left+r.clientWidth),n.bottom=Math.min(n.bottom,u.top+r.clientHeight),n.left=Math.max(n.left,u.left)}else if(r===a||r===s)break;r=yi(r)}var c=null;if(!N.isWindow(e)&&e.nodeType!==9){c=e.style.position;var l=N.css(e,"position");l==="absolute"&&(e.style.position="fixed")}var p=N.getWindowScrollLeft(i),d=N.getWindowScrollTop(i),m=N.viewportWidth(i),b=N.viewportHeight(i),g=s.scrollWidth,y=s.scrollHeight,v=window.getComputedStyle(a);if(v.overflowX==="hidden"&&(g=i.innerWidth),v.overflowY==="hidden"&&(y=i.innerHeight),e.style&&(e.style.position=c),t||Mw(e))n.left=Math.max(n.left,p),n.top=Math.max(n.top,d),n.right=Math.min(n.right,p+m),n.bottom=Math.min(n.bottom,d+b);else{var w=Math.max(g,p+m);n.right=Math.min(n.right,w);var O=Math.max(y,d+b);n.bottom=Math.min(n.bottom,O)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function $w(e,t,n,r){var o=N.clone(e),i={width:t.width,height:t.height};return r.adjustX&&o.left<n.left&&(o.left=n.left),r.resizeWidth&&o.left>=n.left&&o.left+i.width>n.right&&(i.width-=o.left+i.width-n.right),r.adjustX&&o.left+i.width>n.right&&(o.left=Math.max(n.right-i.width,n.left)),r.adjustY&&o.top<n.top&&(o.top=n.top),r.resizeHeight&&o.top>=n.top&&o.top+i.height>n.bottom&&(i.height-=o.top+i.height-n.bottom),r.adjustY&&o.top+i.height>n.bottom&&(o.top=Math.max(n.bottom-i.height,n.top)),N.mix(o,i)}function Sa(e){var t,n,r;if(!N.isWindow(e)&&e.nodeType!==9)t=N.offset(e),n=N.outerWidth(e),r=N.outerHeight(e);else{var o=N.getWindow(e);t={left:N.getWindowScrollLeft(o),top:N.getWindowScrollTop(o)},n=N.viewportWidth(o),r=N.viewportHeight(o)}return t.width=n,t.height=r,t}function xu(e,t){var n=t.charAt(0),r=t.charAt(1),o=e.width,i=e.height,a=e.left,s=e.top;return n==="c"?s+=i/2:n==="b"&&(s+=i),r==="c"?a+=o/2:r==="r"&&(a+=o),{left:a,top:s}}function tr(e,t,n,r,o){var i=xu(t,n[1]),a=xu(e,n[0]),s=[a.left-i.left,a.top-i.top];return{left:Math.round(e.left-s[0]+r[0]-o[0]),top:Math.round(e.top-s[1]+r[1]-o[1])}}function Ou(e,t,n){return e.left<n.left||e.left+t.width>n.right}function Cu(e,t,n){return e.top<n.top||e.top+t.height>n.bottom}function jw(e,t,n){return e.left>n.right||e.left+t.width<n.left}function Aw(e,t,n){return e.top>n.bottom||e.top+t.height<n.top}function nr(e,t,n){var r=[];return N.each(e,function(o){r.push(o.replace(t,function(i){return n[i]}))}),r}function rr(e,t){return e[t]=-e[t],e}function Pu(e,t){var n;return/%$/.test(e)?n=parseInt(e.substring(0,e.length-1),10)/100*t:n=parseInt(e,10),n||0}function Su(e,t){e[0]=Pu(e[0],t.width),e[1]=Pu(e[1],t.height)}function Gl(e,t,n,r){var o=n.points,i=n.offset||[0,0],a=n.targetOffset||[0,0],s=n.overflow,u=n.source||e;i=[].concat(i),a=[].concat(a),s=s||{};var c={},l=0,p=!!(s&&s.alwaysByViewport),d=Pa(u,p),m=Sa(u);Su(i,m),Su(a,t);var b=tr(m,t,o,i,a),g=N.merge(m,b);if(d&&(s.adjustX||s.adjustY)&&r){if(s.adjustX&&Ou(b,m,d)){var y=nr(o,/[lr]/gi,{l:"r",r:"l"}),v=rr(i,0),w=rr(a,0),O=tr(m,t,y,v,w);jw(O,m,d)||(l=1,o=y,i=v,a=w)}if(s.adjustY&&Cu(b,m,d)){var S=nr(o,/[tb]/gi,{t:"b",b:"t"}),T=rr(i,1),P=rr(a,1),E=tr(m,t,S,T,P);Aw(E,m,d)||(l=1,o=S,i=T,a=P)}l&&(b=tr(m,t,o,i,a),N.mix(g,b));var D=Ou(b,m,d),k=Cu(b,m,d);if(D||k){var R=o;D&&(R=nr(o,/[lr]/gi,{l:"r",r:"l"})),k&&(R=nr(o,/[tb]/gi,{t:"b",b:"t"})),o=R,i=n.offset||[0,0],a=n.targetOffset||[0,0]}c.adjustX=s.adjustX&&D,c.adjustY=s.adjustY&&k,(c.adjustX||c.adjustY)&&(g=$w(b,m,d,c))}return g.width!==m.width&&N.css(u,"width",N.width(u)+g.width-m.width),g.height!==m.height&&N.css(u,"height",N.height(u)+g.height-m.height),N.offset(u,{left:g.left,top:g.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:o,offset:i,targetOffset:a,overflow:c}}function Dw(e,t){var n=Pa(e,t),r=Sa(e);return!n||r.left+r.width<=n.left||r.top+r.height<=n.top||r.left>=n.right||r.top>=n.bottom}function Ea(e,t,n){var r=n.target||t,o=Sa(r),i=!Dw(r,n.overflow&&n.overflow.alwaysByViewport);return Gl(e,o,n,i)}Ea.__getOffsetParent=yi;Ea.__getVisibleRectForElement=Pa;function kw(e,t,n){var r,o,i=N.getDocument(e),a=i.defaultView||i.parentWindow,s=N.getWindowScrollLeft(a),u=N.getWindowScrollTop(a),c=N.viewportWidth(a),l=N.viewportHeight(a);"pageX"in t?r=t.pageX:r=s+t.clientX,"pageY"in t?o=t.pageY:o=u+t.clientY;var p={left:r,top:o,width:0,height:0},d=r>=0&&r<=s+c&&o>=0&&o<=u+l,m=[n.points[0],"cc"];return Gl(e,p,du(du({},n),{},{points:m}),d)}function Nw(e,t){var n=void 0;function r(){n&&(clearTimeout(n),n=null)}function o(){r(),n=setTimeout(e,t)}return o.clear=r,o}function Rw(e,t){return e===t?!0:!e||!t?!1:"pageX"in t&&"pageY"in t?e.pageX===t.pageX&&e.pageY===t.pageY:"clientX"in t&&"clientY"in t?e.clientX===t.clientX&&e.clientY===t.clientY:!1}function Eu(e){return e&&typeof e=="object"&&e.window===e}function Tu(e,t){var n=Math.floor(e),r=Math.floor(t);return Math.abs(n-r)<=1}function Iw(e,t){e!==document.activeElement&&ci(t,e)&&e.focus()}function Do(e){return typeof e!="function"||!e?null:e()}function ko(e){return typeof e!="object"||!e?null:e}var Or=function(e){_t(t,e);function t(){var n,r,o,i;Tt(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return i=(r=(o=Xe(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),o),o.forceAlign=function(){var c=o.props,l=c.disabled,p=c.target,d=c.align,m=c.onAlign;if(!l&&p){var b=we.findDOMNode(o),g=void 0,y=Do(p),v=ko(p),w=document.activeElement;y?g=Ea(b,y,d):v&&(g=kw(b,v,d)),Iw(w,b),m&&m(b,g)}},r),Xe(o,i)}return xa(t,[{key:"componentDidMount",value:function(){var r=this.props;this.forceAlign(),!r.disabled&&r.monitorWindowResize&&this.startMonitorWindowResize()}},{key:"componentDidUpdate",value:function(r){var o=!1,i=this.props;if(!i.disabled){var a=we.findDOMNode(this),s=a?a.getBoundingClientRect():null;if(r.disabled)o=!0;else{var u=Do(r.target),c=Do(i.target),l=ko(r.target),p=ko(i.target);Eu(u)&&Eu(c)?o=!1:(u!==c||u&&!c&&p||l&&p&&c||p&&!Rw(l,p))&&(o=!0);var d=this.sourceRect||{};!o&&a&&(!Tu(d.width,s.width)||!Tu(d.height,s.height))&&(o=!0)}this.sourceRect=s}o&&this.forceAlign(),i.monitorWindowResize&&!i.disabled?this.startMonitorWindowResize():this.stopMonitorWindowResize()}},{key:"componentWillUnmount",value:function(){this.stopMonitorWindowResize()}},{key:"startMonitorWindowResize",value:function(){this.resizeHandler||(this.bufferMonitor=Nw(this.forceAlign,this.props.monitorBufferTime),this.resizeHandler=hn(window,"resize",this.bufferMonitor))}},{key:"stopMonitorWindowResize",value:function(){this.resizeHandler&&(this.bufferMonitor.clear(),this.resizeHandler.remove(),this.resizeHandler=null)}},{key:"render",value:function(){var r=this,o=this.props,i=o.childrenProps,a=o.children,s=j.Children.only(a);if(i){var u={},c=Object.keys(i);return c.forEach(function(l){u[l]=r.props[i[l]]}),j.cloneElement(s,u)}return s}}]),t}(C.Component);Or.propTypes={childrenProps:f.object,align:f.object.isRequired,target:f.oneOfType([f.func,f.shape({clientX:f.number,clientY:f.number,pageX:f.number,pageY:f.number})]),onAlign:f.func,monitorBufferTime:f.number,monitorWindowResize:f.bool,disabled:f.bool,children:f.any};Or.defaultProps={target:function(){return window},monitorBufferTime:50,monitorWindowResize:!1,disabled:!1};var Lw=Wl,Ww=Fw(Lw);function Fw(e){return e&&e.__esModule?e:{default:e}}var Bw=function(e,t,n){return t in e?(0,Ww.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Hw=function(t){var n=t.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");return typeof n.componentWillReceiveProps!="function"||!j.Profiler||(n.UNSAFE_componentWillReceiveProps=n.componentWillReceiveProps,delete n.componentWillReceiveProps),t};function xn(e){var t=[];return j.Children.forEach(e,function(n){t.push(n)}),t}function At(e,t){var n=null;return e&&e.forEach(function(r){n||r&&r.key===t&&(n=r)}),n}function No(e,t,n){var r=null;return e&&e.forEach(function(o){if(o&&o.key===t&&o.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=o}}),r}function Vw(e,t,n){var r=e.length===t.length;return r&&e.forEach(function(o,i){var a=t[i];o&&a&&(o&&!a||!o&&a||o.key!==a.key||n&&o.props[n]!==a.props[n])&&(r=!1)}),r}function zw(e,t){var n=[],r={},o=[];return e.forEach(function(i){i&&At(t,i.key)?o.length&&(r[i.key]=o,o=[]):o.push(i)}),t.forEach(function(i){i&&Object.prototype.hasOwnProperty.call(r,i.key)&&(n=n.concat(r[i.key])),n.push(i)}),n=n.concat(o),n}var Ro={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},Io={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},Dt=[],kt=[];function Uw(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||(delete Ro.animationstart.animation,delete Io.animationend.animation),"TransitionEvent"in window||(delete Ro.transitionstart.transition,delete Io.transitionend.transition);function n(r,o){for(var i in r)if(r.hasOwnProperty(i)){var a=r[i];for(var s in a)if(s in t){o.push(a[s]);break}}}n(Ro,Dt),n(Io,kt)}typeof window<"u"&&typeof document<"u"&&Uw();function _u(e,t,n){e.addEventListener(t,n,!1)}function Mu(e,t,n){e.removeEventListener(t,n,!1)}var $n={startEvents:Dt,addStartEventListener:function(t,n){if(Dt.length===0){window.setTimeout(n,0);return}Dt.forEach(function(r){_u(t,r,n)})},removeStartEventListener:function(t,n){Dt.length!==0&&Dt.forEach(function(r){Mu(t,r,n)})},endEvents:kt,addEndEventListener:function(t,n){if(kt.length===0){window.setTimeout(n,0);return}kt.forEach(function(r){_u(t,r,n)})},removeEndEventListener:function(t,n){kt.length!==0&&kt.forEach(function(r){Mu(t,r,n)})}},Lo,$u;function ju(){return $u||($u=1,Lo=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}),Lo}try{var Yr=ju()}catch{var Yr=ju()}var Yw=/\s+/,Gw=Object.prototype.toString,qw=function(e){return new Ke(e)};function Ke(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}Ke.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array(),n=Yr(t,e);return~n||t.push(e),this.el.className=t.join(" "),this};Ke.prototype.remove=function(e){if(Gw.call(e)=="[object RegExp]")return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),n=Yr(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this};Ke.prototype.removeMatching=function(e){for(var t=this.array(),n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this};Ke.prototype.toggle=function(e,t){return this.list?(typeof t<"u"?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(typeof t<"u"?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)};Ke.prototype.array=function(){var e=this.el.getAttribute("class")||"",t=e.replace(/^\s+|\s+$/g,""),n=t.split(Yw);return n[0]===""&&n.shift(),n};Ke.prototype.has=Ke.prototype.contains=function(e){return this.list?this.list.contains(e):!!~Yr(this.array(),e)};const Xw=Xt(qw);var Ta=$n.endEvents.length!==0,Kw=["Webkit","Moz","O","ms"],Au=["-webkit-","-moz-","-o-","ms-",""];function or(e,t){for(var n=window.getComputedStyle(e,null),r="",o=0;o<Au.length&&(r=n.getPropertyValue(Au[o]+t),!r);o++);return r}function ql(e){if(Ta){var t=parseFloat(or(e,"transition-delay"))||0,n=parseFloat(or(e,"transition-duration"))||0,r=parseFloat(or(e,"animation-delay"))||0,o=parseFloat(or(e,"animation-duration"))||0,i=Math.max(n+t,o+r);e.rcEndAnimTimeout=setTimeout(function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()},i*1e3+200)}}function Xl(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}var Gr=function(t,n,r){var o=(typeof n>"u"?"undefined":mb(n))==="object",i=o?n.name:n,a=o?n.active:n+"-active",s=r,u=void 0,c=void 0,l=Xw(t);return r&&Object.prototype.toString.call(r)==="[object Object]"&&(s=r.end,u=r.start,c=r.active),t.rcEndListener&&t.rcEndListener(),t.rcEndListener=function(p){p&&p.target!==t||(t.rcAnimTimeout&&(clearTimeout(t.rcAnimTimeout),t.rcAnimTimeout=null),Xl(t),l.remove(i),l.remove(a),$n.removeEndEventListener(t,t.rcEndListener),t.rcEndListener=null,s&&s())},$n.addEndEventListener(t,t.rcEndListener),u&&u(),l.add(i),t.rcAnimTimeout=setTimeout(function(){t.rcAnimTimeout=null,l.add(a),c&&setTimeout(c,0),ql(t)},30),{stop:function(){t.rcEndListener&&t.rcEndListener()}}};Gr.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(r){r&&r.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),Xl(e),$n.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},$n.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout(function(){for(var r in t)t.hasOwnProperty(r)&&(e.style[r]=t[r]);e.rcAnimTimeout=null,ql(e)},0)};Gr.setTransition=function(e,t,n){var r=t,o=n;n===void 0&&(o=r,r=""),r=r||"",Kw.forEach(function(i){e.style[i+"Transition"+r]=o})};Gr.isCssAnimationSupported=Ta;var Wt={isAppearSupported:function(t){return t.transitionName&&t.transitionAppear||t.animation.appear},isEnterSupported:function(t){return t.transitionName&&t.transitionEnter||t.animation.enter},isLeaveSupported:function(t){return t.transitionName&&t.transitionLeave||t.animation.leave},allowAppearCallback:function(t){return t.transitionAppear||t.animation.appear},allowEnterCallback:function(t){return t.transitionEnter||t.animation.enter},allowLeaveCallback:function(t){return t.transitionLeave||t.animation.leave}},Zw={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},Kl=function(e){_t(t,e);function t(){return Tt(this,t),Xe(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return xa(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(r){Wt.isEnterSupported(this.props)?this.transition("enter",r):r()}},{key:"componentWillAppear",value:function(r){Wt.isAppearSupported(this.props)?this.transition("appear",r):r()}},{key:"componentWillLeave",value:function(r){Wt.isLeaveSupported(this.props)?this.transition("leave",r):r()}},{key:"transition",value:function(r,o){var i=this,a=we.findDOMNode(this),s=this.props,u=s.transitionName,c=typeof u=="object";this.stop();var l=function(){i.stopper=null,o()};if((Ta||!s.animation[r])&&u&&s[Zw[r]]){var p=c?u[r]:u+"-"+r,d=p+"-active";c&&u[r+"Active"]&&(d=u[r+"Active"]),this.stopper=Gr(a,{name:p,active:d},l)}else this.stopper=s.animation[r](a,l)}},{key:"stop",value:function(){var r=this.stopper;r&&(this.stopper=null,r.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(j.Component);Kl.propTypes={children:f.any,animation:f.any,transitionName:f.any};var Qw="rc_animate_"+Date.now();function On(e){var t=e.children;return j.isValidElement(t)&&!t.key?j.cloneElement(t,{key:Qw}):t}function ir(){}var qr=function(e){_t(t,e);function t(n){Tt(this,t);var r=Xe(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return Jw.call(r),r.currentlyAnimatingKeys={},r.keysToEnter=[],r.keysToLeave=[],r.state={children:xn(On(n))},r.childrenRefs={},r}return xa(t,[{key:"componentDidMount",value:function(){var r=this,o=this.props.showProp,i=this.state.children;o&&(i=i.filter(function(a){return!!a.props[o]})),i.forEach(function(a){a&&r.performAppear(a.key)})}},{key:"componentWillReceiveProps",value:function(r){var o=this;this.nextProps=r;var i=xn(On(r)),a=this.props;a.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach(function(p){o.stop(p)});var s=a.showProp,u=this.currentlyAnimatingKeys,c=a.exclusive?xn(On(a)):this.state.children,l=[];s?(c.forEach(function(p){var d=p&&At(i,p.key),m=void 0;(!d||!d.props[s])&&p.props[s]?m=j.cloneElement(d||p,Bw({},s,!0)):m=d,m&&l.push(m)}),i.forEach(function(p){(!p||!At(c,p.key))&&l.push(p)})):l=zw(c,i),this.setState({children:l}),i.forEach(function(p){var d=p&&p.key;if(!(p&&u[d])){var m=p&&At(c,d);if(s){var b=p.props[s];if(m){var g=No(c,d,s);!g&&b&&o.keysToEnter.push(d)}else b&&o.keysToEnter.push(d)}else m||o.keysToEnter.push(d)}}),c.forEach(function(p){var d=p&&p.key;if(!(p&&u[d])){var m=p&&At(i,d);if(s){var b=p.props[s];if(m){var g=No(i,d,s);!g&&b&&o.keysToLeave.push(d)}else b&&o.keysToLeave.push(d)}else m||o.keysToLeave.push(d)}})}},{key:"componentDidUpdate",value:function(){var r=this.keysToEnter;this.keysToEnter=[],r.forEach(this.performEnter);var o=this.keysToLeave;this.keysToLeave=[],o.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(r,o){var i=this.props.showProp;return i?No(r,o,i):At(r,o)}},{key:"stop",value:function(r){delete this.currentlyAnimatingKeys[r];var o=this.childrenRefs[r];o&&o.stop()}},{key:"render",value:function(){var r=this,o=this.props;this.nextProps=o;var i=this.state.children,a=null;i&&(a=i.map(function(c){if(c==null)return c;if(!c.key)throw new Error("must set key for <rc-animate> children");return j.createElement(Kl,{key:c.key,ref:function(p){r.childrenRefs[c.key]=p},animation:o.animation,transitionName:o.transitionName,transitionEnter:o.transitionEnter,transitionAppear:o.transitionAppear,transitionLeave:o.transitionLeave},c)}));var s=o.component;if(s){var u=o;return typeof s=="string"&&(u=It({className:o.className,style:o.style},o.componentProps)),j.createElement(s,u,a)}return a[0]||null}}]),t}(j.Component);qr.isAnimate=!0;qr.propTypes={className:f.string,style:f.object,component:f.any,componentProps:f.object,animation:f.object,transitionName:f.oneOfType([f.string,f.object]),transitionEnter:f.bool,transitionAppear:f.bool,exclusive:f.bool,transitionLeave:f.bool,onEnd:f.func,onEnter:f.func,onLeave:f.func,onAppear:f.func,showProp:f.string,children:f.node};qr.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:ir,onEnter:ir,onLeave:ir,onAppear:ir};var Jw=function(){var t=this;this.performEnter=function(n){t.childrenRefs[n]&&(t.currentlyAnimatingKeys[n]=!0,t.childrenRefs[n].componentWillEnter(t.handleDoneAdding.bind(t,n,"enter")))},this.performAppear=function(n){t.childrenRefs[n]&&(t.currentlyAnimatingKeys[n]=!0,t.childrenRefs[n].componentWillAppear(t.handleDoneAdding.bind(t,n,"appear")))},this.handleDoneAdding=function(n,r){var o=t.props;if(delete t.currentlyAnimatingKeys[n],!(o.exclusive&&o!==t.nextProps)){var i=xn(On(o));t.isValidChildByKey(i,n)?r==="appear"?Wt.allowAppearCallback(o)&&(o.onAppear(n),o.onEnd(n,!0)):Wt.allowEnterCallback(o)&&(o.onEnter(n),o.onEnd(n,!0)):t.performLeave(n)}},this.performLeave=function(n){t.childrenRefs[n]&&(t.currentlyAnimatingKeys[n]=!0,t.childrenRefs[n].componentWillLeave(t.handleDoneLeaving.bind(t,n)))},this.handleDoneLeaving=function(n){var r=t.props;if(delete t.currentlyAnimatingKeys[n],!(r.exclusive&&r!==t.nextProps)){var o=xn(On(r));if(t.isValidChildByKey(o,n))t.performEnter(n);else{var i=function(){Wt.allowLeaveCallback(r)&&(r.onLeave(n),r.onEnd(n,!1))};Vw(t.state.children,o,r.showProp)?i():t.setState({children:o},i)}}}};const Wo=Hw(qr);var ex=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},_a=function(e){_t(t,e);function t(){return Tt(this,t),Xe(this,e.apply(this,arguments))}return t.prototype.shouldComponentUpdate=function(r){return r.hiddenClassName||r.visible},t.prototype.render=function(){var r=this.props,o=r.hiddenClassName,i=r.visible,a=ex(r,["hiddenClassName","visible"]);return o||j.Children.count(a.children)>1?(!i&&o&&(a.className+=" "+o),j.createElement("div",a)):j.Children.only(a.children)},t}(C.Component);_a.propTypes={children:f.any,className:f.string,visible:f.bool,hiddenClassName:f.string};var bi=function(e){_t(t,e);function t(){return Tt(this,t),Xe(this,e.apply(this,arguments))}return t.prototype.render=function(){var r=this.props,o=r.className;return r.visible||(o+=" "+r.hiddenClassName),j.createElement("div",{className:o,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,onMouseDown:r.onMouseDown,onTouchStart:r.onTouchStart,style:r.style},j.createElement(_a,{className:r.prefixCls+"-content",visible:r.visible},r.children))},t}(C.Component);bi.propTypes={hiddenClassName:f.string,className:f.string,prefixCls:f.string,onMouseEnter:f.func,onMouseLeave:f.func,onMouseDown:f.func,onTouchStart:f.func,children:f.any};var Zl=function(e){_t(t,e);function t(n){Tt(this,t);var r=Xe(this,e.call(this,n));return tx.call(r),r.state={stretchChecked:!1,targetWidth:void 0,targetHeight:void 0},r.savePopupRef=fu.bind(r,"popupInstance"),r.saveAlignRef=fu.bind(r,"alignInstance"),r}return t.prototype.componentDidMount=function(){this.rootNode=this.getPopupDomNode(),this.setStretchSize()},t.prototype.componentDidUpdate=function(){this.setStretchSize()},t.prototype.getPopupDomNode=function(){return we.findDOMNode(this.popupInstance)},t.prototype.getMaskTransitionName=function(){var r=this.props,o=r.maskTransitionName,i=r.maskAnimation;return!o&&i&&(o=r.prefixCls+"-"+i),o},t.prototype.getTransitionName=function(){var r=this.props,o=r.transitionName;return!o&&r.animation&&(o=r.prefixCls+"-"+r.animation),o},t.prototype.getClassName=function(r){return this.props.prefixCls+" "+this.props.className+" "+r},t.prototype.getPopupElement=function(){var r=this,o=this.savePopupRef,i=this.state,a=i.stretchChecked,s=i.targetHeight,u=i.targetWidth,c=this.props,l=c.align,p=c.visible,d=c.prefixCls,m=c.style,b=c.getClassNameFromAlign,g=c.destroyPopupOnHide,y=c.stretch,v=c.children,w=c.onMouseEnter,O=c.onMouseLeave,S=c.onMouseDown,T=c.onTouchStart,P=this.getClassName(this.currentAlignClassName||b(l)),E=d+"-hidden";p||(this.currentAlignClassName=null);var D={};y&&(y.indexOf("height")!==-1?D.height=s:y.indexOf("minHeight")!==-1&&(D.minHeight=s),y.indexOf("width")!==-1?D.width=u:y.indexOf("minWidth")!==-1&&(D.minWidth=u),a||(D.visibility="hidden",setTimeout(function(){r.alignInstance&&r.alignInstance.forceAlign()},0)));var k=It({},D,m,this.getZIndexStyle()),R={className:P,prefixCls:d,ref:o,onMouseEnter:w,onMouseLeave:O,onMouseDown:S,onTouchStart:T,style:k};return g?j.createElement(Wo,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName()},p?j.createElement(Or,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,align:l,onAlign:this.onAlign},j.createElement(bi,It({visible:!0},R),v)):null):j.createElement(Wo,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName(),showProp:"xVisible"},j.createElement(Or,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,xVisible:p,childrenProps:{visible:"xVisible"},disabled:!p,align:l,onAlign:this.onAlign},j.createElement(bi,It({hiddenClassName:E},R),v)))},t.prototype.getZIndexStyle=function(){var r={},o=this.props;return o.zIndex!==void 0&&(r.zIndex=o.zIndex),r},t.prototype.getMaskElement=function(){var r=this.props,o=void 0;if(r.mask){var i=this.getMaskTransitionName();o=j.createElement(_a,{style:this.getZIndexStyle(),key:"mask",className:r.prefixCls+"-mask",hiddenClassName:r.prefixCls+"-mask-hidden",visible:r.visible}),i&&(o=j.createElement(Wo,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:i},o))}return o},t.prototype.render=function(){return j.createElement("div",null,this.getMaskElement(),this.getPopupElement())},t}(C.Component);Zl.propTypes={visible:f.bool,style:f.object,getClassNameFromAlign:f.func,onAlign:f.func,getRootDomNode:f.func,align:f.any,destroyPopupOnHide:f.bool,className:f.string,prefixCls:f.string,onMouseEnter:f.func,onMouseLeave:f.func,onMouseDown:f.func,onTouchStart:f.func,stretch:f.string,children:f.node,point:f.shape({pageX:f.number,pageY:f.number})};var tx=function(){var t=this;this.onAlign=function(n,r){var o=t.props,i=o.getClassNameFromAlign(r);t.currentAlignClassName!==i&&(t.currentAlignClassName=i,n.className=t.getClassName(i)),o.onAlign(n,r)},this.setStretchSize=function(){var n=t.props,r=n.stretch,o=n.getRootDomNode,i=n.visible,a=t.state,s=a.stretchChecked,u=a.targetHeight,c=a.targetWidth;if(!r||!i){s&&t.setState({stretchChecked:!1});return}var l=o();if(l){var p=l.offsetHeight,d=l.offsetWidth;(u!==p||c!==d||!s)&&t.setState({stretchChecked:!0,targetHeight:p,targetWidth:d})}},this.getTargetElement=function(){return t.props.getRootDomNode()},this.getAlignTarget=function(){var n=t.props.point;return n||t.getTargetElement}};function Fo(){}function nx(){return""}function rx(){return window.document}var ox=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"],Du=!!fr.createPortal,Ql={rcTrigger:f.shape({onPopupMouseDown:f.func})},on=function(e){_t(t,e);function t(n){Tt(this,t);var r=Xe(this,e.call(this,n));ix.call(r);var o=void 0;return"popupVisible"in n?o=!!n.popupVisible:o=!!n.defaultPopupVisible,r.state={prevPopupVisible:o,popupVisible:o},ox.forEach(function(i){r["fire"+i]=function(a){r.fireEvents(i,a)}}),r}return t.prototype.getChildContext=function(){return{rcTrigger:{onPopupMouseDown:this.onPopupMouseDown}}},t.prototype.componentDidMount=function(){this.componentDidUpdate({},{popupVisible:this.state.popupVisible})},t.prototype.componentDidUpdate=function(r,o){var i=this.props,a=this.state,s=function(){o.popupVisible!==a.popupVisible&&i.afterPopupVisibleChange(a.popupVisible)};if(Du||this.renderComponent(null,s),a.popupVisible){var u=void 0;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(u=i.getDocument(),this.clickOutsideHandler=hn(u,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(u=u||i.getDocument(),this.touchOutsideHandler=hn(u,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(u=u||i.getDocument(),this.contextMenuOutsideHandler1=hn(u,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=hn(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()},t.prototype.componentWillUnmount=function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout)},t.getDerivedStateFromProps=function(r,o){var i=r.popupVisible,a={};return i!==void 0&&o.popupVisible!==i&&(a.popupVisible=i,a.prevPopupVisible=o.popupVisible),a},t.prototype.getPopupDomNode=function(){return this._component&&this._component.getPopupDomNode?this._component.getPopupDomNode():null},t.prototype.getPopupAlign=function(){var r=this.props,o=r.popupPlacement,i=r.popupAlign,a=r.builtinPlacements;return o&&a?tw(a,o,i):i},t.prototype.setPopupVisible=function(r,o){var i=this.props.alignPoint,a=this.state.popupVisible;this.clearDelayTimer(),a!==r&&("popupVisible"in this.props||this.setState({popupVisible:r,prevPopupVisible:a}),this.props.onPopupVisibleChange(r)),i&&o&&this.setPoint(o)},t.prototype.delaySetPopupVisible=function(r,o,i){var a=this,s=o*1e3;if(this.clearDelayTimer(),s){var u=i?{pageX:i.pageX,pageY:i.pageY}:null;this.delayTimer=setTimeout(function(){a.setPopupVisible(r,u),a.clearDelayTimer()},s)}else this.setPopupVisible(r,i)},t.prototype.clearDelayTimer=function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)},t.prototype.clearOutsideHandler=function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},t.prototype.createTwoChains=function(r){var o=this.props.children.props,i=this.props;return o[r]&&i[r]?this["fire"+r]:o[r]||i[r]},t.prototype.isClickToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("click")!==-1||i.indexOf("click")!==-1},t.prototype.isContextMenuToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("contextMenu")!==-1||i.indexOf("contextMenu")!==-1},t.prototype.isClickToHide=function(){var r=this.props,o=r.action,i=r.hideAction;return o.indexOf("click")!==-1||i.indexOf("click")!==-1},t.prototype.isMouseEnterToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("hover")!==-1||i.indexOf("mouseEnter")!==-1},t.prototype.isMouseLeaveToHide=function(){var r=this.props,o=r.action,i=r.hideAction;return o.indexOf("hover")!==-1||i.indexOf("mouseLeave")!==-1},t.prototype.isFocusToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("focus")!==-1||i.indexOf("focus")!==-1},t.prototype.isBlurToHide=function(){var r=this.props,o=r.action,i=r.hideAction;return o.indexOf("focus")!==-1||i.indexOf("blur")!==-1},t.prototype.forcePopupAlign=function(){this.state.popupVisible&&this._component&&this._component.alignInstance&&this._component.alignInstance.forceAlign()},t.prototype.fireEvents=function(r,o){var i=this.props.children.props[r];i&&i(o);var a=this.props[r];a&&a(o)},t.prototype.close=function(){this.setPopupVisible(!1)},t.prototype.render=function(){var r=this,o=this.state.popupVisible,i=this.props,a=i.children,s=i.forceRender,u=i.alignPoint,c=i.className,l=j.Children.only(a),p={key:"trigger"};this.isContextMenuToShow()?p.onContextMenu=this.onContextMenu:p.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(p.onClick=this.onClick,p.onMouseDown=this.onMouseDown,p.onTouchStart=this.onTouchStart):(p.onClick=this.createTwoChains("onClick"),p.onMouseDown=this.createTwoChains("onMouseDown"),p.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(p.onMouseEnter=this.onMouseEnter,u&&(p.onMouseMove=this.onMouseMove)):p.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?p.onMouseLeave=this.onMouseLeave:p.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(p.onFocus=this.onFocus,p.onBlur=this.onBlur):(p.onFocus=this.createTwoChains("onFocus"),p.onBlur=this.createTwoChains("onBlur"));var d=yt(l&&l.props&&l.props.className,c);d&&(p.className=d);var m=j.cloneElement(l,p);if(!Du)return j.createElement(wa,{parent:this,visible:o,autoMount:!1,forceRender:s,getComponent:this.getComponent,getContainer:this.getContainer},function(g){var y=g.renderComponent;return r.renderComponent=y,m});var b=void 0;return(o||this._component||s)&&(b=j.createElement(Il,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),[m,b]},t}(j.Component);on.propTypes={children:f.any,action:f.oneOfType([f.string,f.arrayOf(f.string)]),showAction:f.any,hideAction:f.any,getPopupClassNameFromAlign:f.any,onPopupVisibleChange:f.func,afterPopupVisibleChange:f.func,popup:f.oneOfType([f.node,f.func]).isRequired,popupStyle:f.object,prefixCls:f.string,popupClassName:f.string,className:f.string,popupPlacement:f.string,builtinPlacements:f.object,popupTransitionName:f.oneOfType([f.string,f.object]),popupAnimation:f.any,mouseEnterDelay:f.number,mouseLeaveDelay:f.number,zIndex:f.number,focusDelay:f.number,blurDelay:f.number,getPopupContainer:f.func,getDocument:f.func,forceRender:f.bool,destroyPopupOnHide:f.bool,mask:f.bool,maskClosable:f.bool,onPopupAlign:f.func,popupAlign:f.object,popupVisible:f.bool,defaultPopupVisible:f.bool,maskTransitionName:f.oneOfType([f.string,f.object]),maskAnimation:f.string,stretch:f.string,alignPoint:f.bool};on.contextTypes=Ql;on.childContextTypes=Ql;on.defaultProps={prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:nx,getDocument:rx,onPopupVisibleChange:Fo,afterPopupVisibleChange:Fo,onPopupAlign:Fo,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[]};var ix=function(){var t=this;this.onMouseEnter=function(n){var r=t.props.mouseEnterDelay;t.fireEvents("onMouseEnter",n),t.delaySetPopupVisible(!0,r,r?null:n)},this.onMouseMove=function(n){t.fireEvents("onMouseMove",n),t.setPoint(n)},this.onMouseLeave=function(n){t.fireEvents("onMouseLeave",n),t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)},this.onPopupMouseEnter=function(){t.clearDelayTimer()},this.onPopupMouseLeave=function(n){n.relatedTarget&&!n.relatedTarget.setTimeout&&t._component&&t._component.getPopupDomNode&&ci(t._component.getPopupDomNode(),n.relatedTarget)||t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)},this.onFocus=function(n){t.fireEvents("onFocus",n),t.clearDelayTimer(),t.isFocusToShow()&&(t.focusTime=Date.now(),t.delaySetPopupVisible(!0,t.props.focusDelay))},this.onMouseDown=function(n){t.fireEvents("onMouseDown",n),t.preClickTime=Date.now()},this.onTouchStart=function(n){t.fireEvents("onTouchStart",n),t.preTouchTime=Date.now()},this.onBlur=function(n){t.fireEvents("onBlur",n),t.clearDelayTimer(),t.isBlurToHide()&&t.delaySetPopupVisible(!1,t.props.blurDelay)},this.onContextMenu=function(n){n.preventDefault(),t.fireEvents("onContextMenu",n),t.setPopupVisible(!0,n)},this.onContextMenuClose=function(){t.isContextMenuToShow()&&t.close()},this.onClick=function(n){if(t.fireEvents("onClick",n),t.focusTime){var r=void 0;if(t.preClickTime&&t.preTouchTime?r=Math.min(t.preClickTime,t.preTouchTime):t.preClickTime?r=t.preClickTime:t.preTouchTime&&(r=t.preTouchTime),Math.abs(r-t.focusTime)<20)return;t.focusTime=0}t.preClickTime=0,t.preTouchTime=0,t.isClickToShow()&&(t.isClickToHide()||t.isBlurToHide())&&n&&n.preventDefault&&n.preventDefault();var o=!t.state.popupVisible;(t.isClickToHide()&&!o||o&&t.isClickToShow())&&t.setPopupVisible(!t.state.popupVisible,n)},this.onPopupMouseDown=function(){var n=t.context.rcTrigger,r=n===void 0?{}:n;t.hasPopupMouseDown=!0,clearTimeout(t.mouseDownTimeout),t.mouseDownTimeout=setTimeout(function(){t.hasPopupMouseDown=!1},0),r.onPopupMouseDown&&r.onPopupMouseDown.apply(r,arguments)},this.onDocumentClick=function(n){if(!(t.props.mask&&!t.props.maskClosable)){var r=n.target,o=fr.findDOMNode(t);!ci(o,r)&&!t.hasPopupMouseDown&&t.close()}},this.getRootDomNode=function(){return fr.findDOMNode(t)},this.getPopupClassNameFromAlign=function(n){var r=[],o=t.props,i=o.popupPlacement,a=o.builtinPlacements,s=o.prefixCls,u=o.alignPoint,c=o.getPopupClassNameFromAlign;return i&&a&&r.push(nw(a,s,n,u)),c&&r.push(c(n)),r.join(" ")},this.getComponent=function(){var n=t.props,r=n.prefixCls,o=n.destroyPopupOnHide,i=n.popupClassName,a=n.action,s=n.onPopupAlign,u=n.popupAnimation,c=n.popupTransitionName,l=n.popupStyle,p=n.mask,d=n.maskAnimation,m=n.maskTransitionName,b=n.zIndex,g=n.popup,y=n.stretch,v=n.alignPoint,w=t.state,O=w.popupVisible,S=w.point,T=t.getPopupAlign(),P={};return t.isMouseEnterToShow()&&(P.onMouseEnter=t.onPopupMouseEnter),t.isMouseLeaveToHide()&&(P.onMouseLeave=t.onPopupMouseLeave),P.onMouseDown=t.onPopupMouseDown,P.onTouchStart=t.onPopupMouseDown,j.createElement(Zl,It({prefixCls:r,destroyPopupOnHide:o,visible:O,point:v&&S,className:i,action:a,align:T,onAlign:s,animation:u,getClassNameFromAlign:t.getPopupClassNameFromAlign},P,{stretch:y,getRootDomNode:t.getRootDomNode,style:l,mask:p,zIndex:b,transitionName:c,maskAnimation:d,maskTransitionName:m,ref:t.savePopup}),typeof g=="function"?g():g)},this.getContainer=function(){var n=t.props,r=document.createElement("div");r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%";var o=n.getPopupContainer?n.getPopupContainer(fr.findDOMNode(t)):n.getDocument().body;return o.appendChild(r),r},this.setPoint=function(n){var r=t.props.alignPoint;!r||!n||t.setState({point:{pageX:n.pageX,pageY:n.pageY}})},this.handlePortalUpdate=function(){t.state.prevPopupVisible!==t.state.popupVisible&&t.props.afterPopupVisibleChange(t.state.popupVisible)},this.savePopup=function(n){t._component=n}};ba(on);function ax(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ku(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sx(e,t,n){return t&&ku(e.prototype,t),n&&ku(e,n),e}function ux(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:xi(e)}function wi(e){return wi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},wi(e)}function xi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oi(e,t)}function Oi(e,t){return Oi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Oi(e,t)}function Cr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ma=function(e){cx(t,e);function t(n){var r;ax(this,t),r=ux(this,wi(t).call(this,n)),Cr(xi(r),"onInputChange",function(a){var s=a.target.value;r.setState({str:s});var u=r.props,c=u.format,l=u.hourOptions,p=u.minuteOptions,d=u.secondOptions,m=u.disabledHours,b=u.disabledMinutes,g=u.disabledSeconds,y=u.onChange;if(s){var v=r.props.value,w=r.getProtoValue().clone(),O=Ie(s,c,!0);if(!O.isValid()){r.setState({invalid:!0});return}if(w.hour(O.hour()).minute(O.minute()).second(O.second()),l.indexOf(w.hour())<0||p.indexOf(w.minute())<0||d.indexOf(w.second())<0){r.setState({invalid:!0});return}var S=m(),T=b(w.hour()),P=g(w.hour(),w.minute());if(S&&S.indexOf(w.hour())>=0||T&&T.indexOf(w.minute())>=0||P&&P.indexOf(w.second())>=0){r.setState({invalid:!0});return}if(v){if(v.hour()!==w.hour()||v.minute()!==w.minute()||v.second()!==w.second()){var E=v.clone();E.hour(w.hour()),E.minute(w.minute()),E.second(w.second()),y(E)}}else v!==w&&y(w)}else y(null);r.setState({invalid:!1})}),Cr(xi(r),"onKeyDown",function(a){var s=r.props,u=s.onEsc,c=s.onKeyDown;a.keyCode===27&&u(),c(a)});var o=n.value,i=n.format;return r.state={str:o&&o.format(i)||"",invalid:!1},r}return sx(t,[{key:"componentDidMount",value:function(){var r=this,o=this.props.focusOnOpen;if(o){var i=window.requestAnimationFrame||window.setTimeout;i(function(){r.refInput.focus(),r.refInput.select()})}}},{key:"componentDidUpdate",value:function(r){var o=this.props,i=o.value,a=o.format;i!==r.value&&this.setState({str:i&&i.format(a)||"",invalid:!1})}},{key:"getProtoValue",value:function(){var r=this.props,o=r.value,i=r.defaultOpenValue;return o||i}},{key:"getInput",value:function(){var r=this,o=this.props,i=o.prefixCls,a=o.placeholder,s=o.inputReadOnly,u=this.state,c=u.invalid,l=u.str,p=c?"".concat(i,"-input-invalid"):"";return j.createElement("input",{className:yt("".concat(i,"-input"),p),ref:function(m){r.refInput=m},onKeyDown:this.onKeyDown,value:l,placeholder:a,onChange:this.onInputChange,readOnly:!!s})}},{key:"render",value:function(){var r=this.props.prefixCls;return j.createElement("div",{className:"".concat(r,"-input-wrap")},this.getInput())}}]),t}(C.Component);Cr(Ma,"propTypes",{format:f.string,prefixCls:f.string,disabledDate:f.func,placeholder:f.string,clearText:f.string,value:f.object,inputReadOnly:f.bool,hourOptions:f.array,minuteOptions:f.array,secondOptions:f.array,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,onChange:f.func,onEsc:f.func,defaultOpenValue:f.object,currentSelectPanel:f.string,focusOnOpen:f.bool,onKeyDown:f.func,clearIcon:f.node});Cr(Ma,"defaultProps",{inputReadOnly:!1});var Xr={exports:{}},vn={exports:{}};(function(){var e,t,n,r,o,i;typeof performance<"u"&&performance!==null&&performance.now?vn.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(vn.exports=function(){return(e()-o)/1e6},t=process.hrtime,e=function(){var a;return a=t(),a[0]*1e9+a[1]},r=e(),i=process.uptime()*1e9,o=r-i):Date.now?(vn.exports=function(){return Date.now()-n},n=Date.now()):(vn.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(sc);var lx=vn.exports,fx=lx,Re=typeof window>"u"?sc:window,ar=["moz","webkit"],Ft="AnimationFrame",qt=Re["request"+Ft],jn=Re["cancel"+Ft]||Re["cancelRequest"+Ft];for(var pn=0;!qt&&pn<ar.length;pn++)qt=Re[ar[pn]+"Request"+Ft],jn=Re[ar[pn]+"Cancel"+Ft]||Re[ar[pn]+"CancelRequest"+Ft];if(!qt||!jn){var Bo=0,Nu=0,st=[],px=1e3/60;qt=function(e){if(st.length===0){var t=fx(),n=Math.max(0,px-(t-Bo));Bo=n+t,setTimeout(function(){var r=st.slice(0);st.length=0;for(var o=0;o<r.length;o++)if(!r[o].cancelled)try{r[o].callback(Bo)}catch(i){setTimeout(function(){throw i},0)}},Math.round(n))}return st.push({handle:++Nu,callback:e,cancelled:!1}),Nu},jn=function(e){for(var t=0;t<st.length;t++)st[t].handle===e&&(st[t].cancelled=!0)}}Xr.exports=function(e){return qt.call(Re,e)};Xr.exports.cancel=function(){jn.apply(Re,arguments)};Xr.exports.polyfill=function(e){e||(e=Re),e.requestAnimationFrame=qt,e.cancelAnimationFrame=jn};var dx=Xr.exports;const Ru=Xt(dx);function hx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Iu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function mx(e,t,n){return t&&Iu(e.prototype,t),n&&Iu(e,n),e}function vx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Nt(e)}function Ci(e){return Ci=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ci(e)}function Nt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pi(e,t)}function Pi(e,t){return Pi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Pi(e,t)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var yx=function e(t,n,r){if(r<=0){Ru(function(){t.scrollTop=n});return}var o=n-t.scrollTop,i=o/r*10;Ru(function(){t.scrollTop+=i,t.scrollTop!==n&&e(t,n,r-10)})},gn=function(e){gx(t,e);function t(){var n,r;hx(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=vx(this,(n=Ci(t)).call.apply(n,[this].concat(i))),ke(Nt(r),"state",{active:!1}),ke(Nt(r),"onSelect",function(s){var u=r.props,c=u.onSelect,l=u.type;c(l,s)}),ke(Nt(r),"handleMouseEnter",function(s){var u=r.props.onMouseEnter;r.setState({active:!0}),u(s)}),ke(Nt(r),"handleMouseLeave",function(){r.setState({active:!1})}),ke(Nt(r),"saveList",function(s){r.list=s}),r}return mx(t,[{key:"componentDidMount",value:function(){this.scrollToSelected(0)}},{key:"componentDidUpdate",value:function(r){var o=this.props.selectedIndex;r.selectedIndex!==o&&this.scrollToSelected(120)}},{key:"getOptions",value:function(){var r=this,o=this.props,i=o.options,a=o.selectedIndex,s=o.prefixCls,u=o.onEsc;return i.map(function(c,l){var p,d=yt((p={},ke(p,"".concat(s,"-select-option-selected"),a===l),ke(p,"".concat(s,"-select-option-disabled"),c.disabled),p)),m=c.disabled?void 0:function(){r.onSelect(c.value)},b=function(y){y.keyCode===13?m():y.keyCode===27&&u()};return j.createElement("li",{role:"button",onClick:m,className:d,key:l,disabled:c.disabled,tabIndex:"0",onKeyDown:b},c.value)})}},{key:"scrollToSelected",value:function(r){var o=this.props.selectedIndex,i=we.findDOMNode(this),a=we.findDOMNode(this.list);if(a){var s=o;s<0&&(s=0);var u=a.children[s],c=u.offsetTop;yx(i,c,r)}}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.options,a=this.state.active;if(i.length===0)return null;var s=yt("".concat(o,"-select"),ke({},"".concat(o,"-select-active"),a));return j.createElement("div",{className:s,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},j.createElement("ul",{ref:this.saveList},this.getOptions()))}}]),t}(C.Component);ke(gn,"propTypes",{prefixCls:f.string,options:f.array,selectedIndex:f.number,type:f.string,onSelect:f.func,onMouseEnter:f.func,onEsc:f.func});function bx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wx(e,t,n){return t&&Lu(e.prototype,t),n&&Lu(e,n),e}function xx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Ei(e)}function Si(e){return Si=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Si(e)}function Ei(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ox(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ti(e,t)}function Ti(e,t){return Ti=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Ti(e,t)}function _i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ho=function(t,n){var r="".concat(t);t<10&&(r="0".concat(t));var o=!1;return n&&n.indexOf(t)>=0&&(o=!0),{value:r,disabled:o}},Jl=function(e){Ox(t,e);function t(){var n,r;bx(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=xx(this,(n=Si(t)).call.apply(n,[this].concat(i))),_i(Ei(r),"onItemChange",function(s,u){var c=r.props,l=c.onChange,p=c.defaultOpenValue,d=c.use12Hours,m=c.value,b=c.isAM,g=c.onAmPmChange,y=(m||p).clone();if(s==="hour")d?b?y.hour(+u%12):y.hour(+u%12+12):y.hour(+u);else if(s==="minute")y.minute(+u);else if(s==="ampm"){var v=u.toUpperCase();d&&(v==="PM"&&y.hour()<12&&y.hour(y.hour()%12+12),v==="AM"&&y.hour()>=12&&y.hour(y.hour()-12)),g(v)}else y.second(+u);l(y)}),_i(Ei(r),"onEnterSelectPanel",function(s){var u=r.props.onCurrentSelectPanelChange;u(s)}),r}return wx(t,[{key:"getHourSelect",value:function(r){var o=this,i=this.props,a=i.prefixCls,s=i.hourOptions,u=i.disabledHours,c=i.showHour,l=i.use12Hours,p=i.onEsc;if(!c)return null;var d=u(),m,b;return l?(m=[12].concat(s.filter(function(g){return g<12&&g>0})),b=r%12||12):(m=s,b=r),j.createElement(gn,{prefixCls:a,options:m.map(function(g){return Ho(g,d)}),selectedIndex:m.indexOf(b),type:"hour",onSelect:this.onItemChange,onMouseEnter:function(){return o.onEnterSelectPanel("hour")},onEsc:p})}},{key:"getMinuteSelect",value:function(r){var o=this,i=this.props,a=i.prefixCls,s=i.minuteOptions,u=i.disabledMinutes,c=i.defaultOpenValue,l=i.showMinute,p=i.value,d=i.onEsc;if(!l)return null;var m=p||c,b=u(m.hour());return j.createElement(gn,{prefixCls:a,options:s.map(function(g){return Ho(g,b)}),selectedIndex:s.indexOf(r),type:"minute",onSelect:this.onItemChange,onMouseEnter:function(){return o.onEnterSelectPanel("minute")},onEsc:d})}},{key:"getSecondSelect",value:function(r){var o=this,i=this.props,a=i.prefixCls,s=i.secondOptions,u=i.disabledSeconds,c=i.showSecond,l=i.defaultOpenValue,p=i.value,d=i.onEsc;if(!c)return null;var m=p||l,b=u(m.hour(),m.minute());return j.createElement(gn,{prefixCls:a,options:s.map(function(g){return Ho(g,b)}),selectedIndex:s.indexOf(r),type:"second",onSelect:this.onItemChange,onMouseEnter:function(){return o.onEnterSelectPanel("second")},onEsc:d})}},{key:"getAMPMSelect",value:function(){var r=this,o=this.props,i=o.prefixCls,a=o.use12Hours,s=o.format,u=o.isAM,c=o.onEsc;if(!a)return null;var l=["am","pm"].map(function(d){return s.match(/\sA/)?d.toUpperCase():d}).map(function(d){return{value:d}}),p=u?0:1;return j.createElement(gn,{prefixCls:i,options:l,selectedIndex:p,type:"ampm",onSelect:this.onItemChange,onMouseEnter:function(){return r.onEnterSelectPanel("ampm")},onEsc:c})}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.defaultOpenValue,a=r.value,s=a||i;return j.createElement("div",{className:"".concat(o,"-combobox")},this.getHourSelect(s.hour()),this.getMinuteSelect(s.minute()),this.getSecondSelect(s.second()),this.getAMPMSelect(s.hour()))}}]),t}(C.Component);_i(Jl,"propTypes",{format:f.string,defaultOpenValue:f.object,prefixCls:f.string,value:f.object,onChange:f.func,onAmPmChange:f.func,showHour:f.bool,showMinute:f.bool,showSecond:f.bool,hourOptions:f.array,minuteOptions:f.array,secondOptions:f.array,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,onCurrentSelectPanelChange:f.func,use12Hours:f.bool,onEsc:f.func,isAM:f.bool});function Wu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Cx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wu(Object(n),!0).forEach(function(r){Ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Px(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Sx(e,t,n){return t&&Fu(e.prototype,t),n&&Fu(e,n),e}function Ex(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Rt(e)}function Mi(e){return Mi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Mi(e)}function Rt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Tx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$i(e,t)}function $i(e,t){return $i=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},$i(e,t)}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ut(){}function Vo(e,t,n){for(var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,o=[],i=0;i<e;i+=r)(!t||t.indexOf(i)<0||!n)&&o.push(i);return o}function _x(e,t,n,r){var o=t.slice().sort(function(s,u){return Math.abs(e.hour()-s)-Math.abs(e.hour()-u)})[0],i=n.slice().sort(function(s,u){return Math.abs(e.minute()-s)-Math.abs(e.minute()-u)})[0],a=r.slice().sort(function(s,u){return Math.abs(e.second()-s)-Math.abs(e.second()-u)})[0];return Ie("".concat(o,":").concat(i,":").concat(a),"HH:mm:ss")}var Kr=function(e){Tx(t,e);function t(){var n,r;Px(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=Ex(this,(n=Mi(t)).call.apply(n,[this].concat(i))),Ue(Rt(r),"state",{}),Ue(Rt(r),"onChange",function(s){var u=r.props.onChange;r.setState({value:s}),u(s)}),Ue(Rt(r),"onAmPmChange",function(s){var u=r.props.onAmPmChange;u(s)}),Ue(Rt(r),"onCurrentSelectPanelChange",function(s){r.setState({currentSelectPanel:s})}),Ue(Rt(r),"disabledHours",function(){var s=r.props,u=s.use12Hours,c=s.disabledHours,l=c();return u&&Array.isArray(l)&&(r.isAM()?l=l.filter(function(p){return p<12}).map(function(p){return p===0?12:p}):l=l.map(function(p){return p===12?12:p-12})),l}),r}return Sx(t,[{key:"close",value:function(){var r=this.props.onEsc;r()}},{key:"isAM",value:function(){var r=this.props.defaultOpenValue,o=this.state.value,i=o||r;return i.hour()>=0&&i.hour()<12}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.className,a=r.placeholder,s=r.disabledMinutes,u=r.disabledSeconds,c=r.hideDisabledOptions,l=r.showHour,p=r.showMinute,d=r.showSecond,m=r.format,b=r.defaultOpenValue,g=r.clearText,y=r.onEsc,v=r.addon,w=r.use12Hours,O=r.focusOnOpen,S=r.onKeyDown,T=r.hourStep,P=r.minuteStep,E=r.secondStep,D=r.inputReadOnly,k=r.clearIcon,R=this.state,F=R.value,X=R.currentSelectPanel,L=this.disabledHours(),K=s(F?F.hour():null),re=u(F?F.hour():null,F?F.minute():null),V=Vo(24,L,c,T),Y=Vo(60,K,c,P),J=Vo(60,re,c,E),ue=_x(b,V,Y,J);return j.createElement("div",{className:yt(i,"".concat(o,"-inner"))},j.createElement(Ma,{clearText:g,prefixCls:o,defaultOpenValue:ue,value:F,currentSelectPanel:X,onEsc:y,format:m,placeholder:a,hourOptions:V,minuteOptions:Y,secondOptions:J,disabledHours:this.disabledHours,disabledMinutes:s,disabledSeconds:u,onChange:this.onChange,focusOnOpen:O,onKeyDown:S,inputReadOnly:D,clearIcon:k}),j.createElement(Jl,{prefixCls:o,value:F,defaultOpenValue:ue,format:m,onChange:this.onChange,onAmPmChange:this.onAmPmChange,showHour:l,showMinute:p,showSecond:d,hourOptions:V,minuteOptions:Y,secondOptions:J,disabledHours:this.disabledHours,disabledMinutes:s,disabledSeconds:u,onCurrentSelectPanelChange:this.onCurrentSelectPanelChange,use12Hours:w,onEsc:y,isAM:this.isAM()}),v(this))}}],[{key:"getDerivedStateFromProps",value:function(r,o){return"value"in r?Cx({},o,{value:r.value}):null}}]),t}(C.Component);Ue(Kr,"propTypes",{clearText:f.string,prefixCls:f.string,className:f.string,defaultOpenValue:f.object,value:f.object,placeholder:f.string,format:f.string,inputReadOnly:f.bool,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,hideDisabledOptions:f.bool,onChange:f.func,onAmPmChange:f.func,onEsc:f.func,showHour:f.bool,showMinute:f.bool,showSecond:f.bool,use12Hours:f.bool,hourStep:f.number,minuteStep:f.number,secondStep:f.number,addon:f.func,focusOnOpen:f.bool,onKeyDown:f.func,clearIcon:f.node});Ue(Kr,"defaultProps",{prefixCls:"rc-time-picker-panel",onChange:ut,disabledHours:ut,disabledMinutes:ut,disabledSeconds:ut,defaultOpenValue:Ie(),use12Hours:!1,addon:ut,onKeyDown:ut,onAmPmChange:ut,inputReadOnly:!1});ba(Kr);var sr={adjustX:1,adjustY:1},ur=[0,0],Mx={bottomLeft:{points:["tl","tl"],overflow:sr,offset:[0,-3],targetOffset:ur},bottomRight:{points:["tr","tr"],overflow:sr,offset:[0,-3],targetOffset:ur},topRight:{points:["br","br"],overflow:sr,offset:[0,3],targetOffset:ur},topLeft:{points:["bl","bl"],overflow:sr,offset:[0,3],targetOffset:ur}};function Bu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function $x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bu(Object(n),!0).forEach(function(r){Pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ax(e,t,n){return t&&Hu(e.prototype,t),n&&Hu(e,n),e}function Dx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Ne(e)}function ji(e){return ji=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ji(e)}function Ne(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function kx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ai(e,t)}function Ai(e,t){return Ai=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Ai(e,t)}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(){}function Vu(e,t){this[e]=t}var Hn=function(e){kx(t,e);function t(n){var r;jx(this,t),r=Dx(this,ji(t).call(this,n)),Pe(Ne(r),"onPanelChange",function(l){r.setValue(l)}),Pe(Ne(r),"onAmPmChange",function(l){var p=r.props.onAmPmChange;p(l)}),Pe(Ne(r),"onClear",function(l){l.stopPropagation(),r.setValue(null),r.setOpen(!1)}),Pe(Ne(r),"onVisibleChange",function(l){r.setOpen(l)}),Pe(Ne(r),"onEsc",function(){r.setOpen(!1),r.focus()}),Pe(Ne(r),"onKeyDown",function(l){l.keyCode===40&&r.setOpen(!0)}),r.saveInputRef=Vu.bind(Ne(r),"picker"),r.savePanelRef=Vu.bind(Ne(r),"panelInstance");var o=n.defaultOpen,i=n.defaultValue,a=n.open,s=a===void 0?o:a,u=n.value,c=u===void 0?i:u;return r.state={open:s,value:c},r}return Ax(t,[{key:"setValue",value:function(r){var o=this.props.onChange;"value"in this.props||this.setState({value:r}),o(r)}},{key:"getFormat",value:function(){var r=this.props,o=r.format,i=r.showHour,a=r.showMinute,s=r.showSecond,u=r.use12Hours;if(o)return o;if(u){var c=[i?"h":"",a?"mm":"",s?"ss":""].filter(function(l){return!!l}).join(":");return c.concat(" a")}return[i?"HH":"",a?"mm":"",s?"ss":""].filter(function(l){return!!l}).join(":")}},{key:"getPanelElement",value:function(){var r=this.props,o=r.prefixCls,i=r.placeholder,a=r.disabledHours,s=r.disabledMinutes,u=r.disabledSeconds,c=r.hideDisabledOptions,l=r.inputReadOnly,p=r.showHour,d=r.showMinute,m=r.showSecond,b=r.defaultOpenValue,g=r.clearText,y=r.addon,v=r.use12Hours,w=r.focusOnOpen,O=r.onKeyDown,S=r.hourStep,T=r.minuteStep,P=r.secondStep,E=r.clearIcon,D=this.state.value;return j.createElement(Kr,{clearText:g,prefixCls:"".concat(o,"-panel"),ref:this.savePanelRef,value:D,inputReadOnly:l,onChange:this.onPanelChange,onAmPmChange:this.onAmPmChange,defaultOpenValue:b,showHour:p,showMinute:d,showSecond:m,onEsc:this.onEsc,format:this.getFormat(),placeholder:i,disabledHours:a,disabledMinutes:s,disabledSeconds:u,hideDisabledOptions:c,use12Hours:v,hourStep:S,minuteStep:T,secondStep:P,addon:y,focusOnOpen:w,onKeyDown:O,clearIcon:E})}},{key:"getPopupClassName",value:function(){var r=this.props,o=r.showHour,i=r.showMinute,a=r.showSecond,s=r.use12Hours,u=r.prefixCls,c=r.popupClassName,l=0;return o&&(l+=1),i&&(l+=1),a&&(l+=1),s&&(l+=1),yt(c,Pe({},"".concat(u,"-panel-narrow"),(!o||!i||!a)&&!s),"".concat(u,"-panel-column-").concat(l))}},{key:"setOpen",value:function(r){var o=this.props,i=o.onOpen,a=o.onClose,s=this.state.open;s!==r&&("open"in this.props||this.setState({open:r}),r?i({open:r}):a({open:r}))}},{key:"focus",value:function(){this.picker.focus()}},{key:"blur",value:function(){this.picker.blur()}},{key:"renderClearButton",value:function(){var r=this,o=this.state.value,i=this.props,a=i.prefixCls,s=i.allowEmpty,u=i.clearIcon,c=i.clearText,l=i.disabled;if(!s||!o||l)return null;if(j.isValidElement(u)){var p=u.props||{},d=p.onClick;return j.cloneElement(u,{onClick:function(){d&&d.apply(void 0,arguments),r.onClear.apply(r,arguments)}})}return j.createElement("a",{role:"button",className:"".concat(a,"-clear"),title:c,onClick:this.onClear,tabIndex:0},u||j.createElement("i",{className:"".concat(a,"-clear-icon")}))}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.placeholder,a=r.placement,s=r.align,u=r.id,c=r.disabled,l=r.transitionName,p=r.style,d=r.className,m=r.getPopupContainer,b=r.name,g=r.autoComplete,y=r.onFocus,v=r.onBlur,w=r.autoFocus,O=r.inputReadOnly,S=r.inputIcon,T=r.popupStyle,P=this.state,E=P.open,D=P.value,k=this.getPopupClassName();return j.createElement(on,{prefixCls:"".concat(o,"-panel"),popupClassName:k,popupStyle:T,popup:this.getPanelElement(),popupAlign:s,builtinPlacements:Mx,popupPlacement:a,action:c?[]:["click"],destroyPopupOnHide:!0,getPopupContainer:m,popupTransitionName:l,popupVisible:E,onPopupVisibleChange:this.onVisibleChange},j.createElement("span",{className:yt(o,d),style:p},j.createElement("input",{className:"".concat(o,"-input"),ref:this.saveInputRef,type:"text",placeholder:i,name:b,onKeyDown:this.onKeyDown,disabled:c,value:D&&D.format(this.getFormat())||"",autoComplete:g,onFocus:y,onBlur:v,autoFocus:w,onChange:he,readOnly:!!O,id:u}),S||j.createElement("span",{className:"".concat(o,"-icon")}),this.renderClearButton()))}}],[{key:"getDerivedStateFromProps",value:function(r,o){var i={};return"value"in r&&(i.value=r.value),r.open!==void 0&&(i.open=r.open),Object.keys(i).length>0?$x({},o,{},i):null}}]),t}(C.Component);Pe(Hn,"propTypes",{prefixCls:f.string,clearText:f.string,value:f.object,defaultOpenValue:f.object,inputReadOnly:f.bool,disabled:f.bool,allowEmpty:f.bool,defaultValue:f.object,open:f.bool,defaultOpen:f.bool,align:f.object,placement:f.any,transitionName:f.string,getPopupContainer:f.func,placeholder:f.string,format:f.string,showHour:f.bool,showMinute:f.bool,showSecond:f.bool,style:f.object,className:f.string,popupClassName:f.string,popupStyle:f.object,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,hideDisabledOptions:f.bool,onChange:f.func,onAmPmChange:f.func,onOpen:f.func,onClose:f.func,onFocus:f.func,onBlur:f.func,addon:f.func,name:f.string,autoComplete:f.string,use12Hours:f.bool,hourStep:f.number,minuteStep:f.number,secondStep:f.number,focusOnOpen:f.bool,onKeyDown:f.func,autoFocus:f.bool,id:f.string,inputIcon:f.node,clearIcon:f.node});Pe(Hn,"defaultProps",{clearText:"clear",prefixCls:"rc-time-picker",defaultOpen:!1,inputReadOnly:!1,style:{},className:"",popupClassName:"",popupStyle:{},align:{},defaultOpenValue:Ie(),allowEmpty:!0,showHour:!0,showMinute:!0,showSecond:!0,disabledHours:he,disabledMinutes:he,disabledSeconds:he,hideDisabledOptions:!1,placement:"bottomLeft",onChange:he,onAmPmChange:he,onOpen:he,onClose:he,onFocus:he,onBlur:he,addon:he,use12Hours:!1,focusOnOpen:!1,onKeyDown:he});ba(Hn);const Nx=_.div`
  @media only screen and (min-width: 768px) {
    width: 656px;
  }

  @media only screen and (min-width: 1440px) {
    width: auto;
  }
`,Rx=_.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  margin-bottom: 24px;
`,Ix=_.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
`,Lx=_.div`
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
`,Wx=_.form`
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
`,Fx=_.div`
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
`,Bx=_.p`
  color: ${e=>e.theme.colors.textColor};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
  margin-bottom: 12px;
`,Hx=_(Hn)`
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
`;function $a(e){return e.year===new Date().getFullYear()&&e.month===new Date().getMonth()}const zu=50,ef=({onClose:e})=>{const t=Kt(),n=ne(Tr),{t:r}=xe(),[o,i]=C.useState(250),{handleSubmit:a,values:{date:s,waterAmount:u},errors:c,setFieldValue:l}=il({initialValues:{waterAmount:"250",date:Ie().format("HH:mm")},onSubmit:g=>{t(xf({credentials:g,shouldUpdateMonth:$a(n)})).unwrap().then(()=>{e()})}}),p=()=>{l("waterAmount",o?o.toString():"0")},d=()=>{const g=Number.parseInt(u)+zu;l("waterAmount",g.toString()),i(g)},m=()=>{const g=Number.parseInt(u)-zu;l("waterAmount",g<=0?"0":g.toString()),i(g<=0?0:g)};function b(g){i(Number.parseInt(isNaN(Number.parseInt(g))?0:g))}return h.jsxs(Nx,{onSubmit:a,children:[h.jsx(Rx,{children:r("addWater")}),h.jsx(Ix,{children:r("addModal.Choose a value")}),h.jsxs(Bx,{children:[r("addModal.Amount of water"),":"]}),h.jsxs(Lx,{children:[h.jsx("button",{onClick:m,name:"minus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-minus`})})}),h.jsxs("span",{className:"water-amount-value",children:[u,r("ml")]}),h.jsx("button",{onClick:d,name:"plus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-plus`})})})]}),h.jsxs(Wx,{children:[h.jsxs("label",{children:[r("addModal.Recording time"),":",h.jsx(Hx,{defaultValue:Ie(s,"HH:mm"),showSecond:!1,minuteStep:5,onChange:g=>{l("date",g&&g.format("HH:mm"))}}),c.date?h.jsx("div",{children:c.date}):null]}),h.jsxs("label",{children:[r("addModal.Enter the value of the water used"),":",h.jsx("input",{name:"number",value:o,onBlur:p,onChange:({target:{value:g}})=>b(g)}),c.waterAmount?h.jsx("div",{children:c.waterAmount}):null]}),h.jsxs(Fx,{children:[h.jsxs("p",{children:[u,r("ml")]}),h.jsx("button",{disabled:Object.keys(c).length>0,type:"submit",children:r("save")})]})]})]})},Vx=_.div`
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
`,zx=_.div`
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
`,Ux=_.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Yx=_.input`
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
`,Gx=_.div`
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
`,qx=_(uc)`
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
`,Xx=()=>{const[e,t]=C.useState(0),[n,r]=C.useState(!1),[o,i]=C.useState(!1),{t:a}=xe(),{waterRate:s}=ne(Sr),u=ne(gd),c=p=>{r(!0),i(!1),p.stopPropagation()};C.useEffect(()=>{t(Math.round(u/s*100))},[s,u]);const l=()=>{r(!1)};return h.jsxs(Vx,{children:[h.jsxs(zx,{children:[h.jsx(Ux,{children:a("today")}),h.jsx(Yx,{type:"range",min:"0",max:"100",value:e,disabled:!0}),h.jsxs(Gx,{$rater:e,children:[h.jsx("span",{children:"0%"}),h.jsx("span",{children:"50%"}),h.jsx("span",{children:"100%"})]})]}),h.jsxs(qx,{onClick:p=>c(p),children:[h.jsx("svg",{width:24,height:24,children:h.jsx("use",{href:`${Me}#icon-plus-in-circle`})}),a("addWater")]}),n&&h.jsx(An,{$position:"center",open:n,onClose:l,children:h.jsx(ef,{onClose:l,isEditing:o})})]})},Kx=_.div`
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
`,Zx=_.div`
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
`,Qx=_.p`
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
`,Jx=_.div`
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
`,e2=_.div`
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
`,t2=_.div`
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
`,n2=_.div`
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
`;const r2=_.p`
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
`,o2=()=>{const{gender:e}=ne(Sr),[t,n]=C.useState("0"),[r,o]=C.useState("0"),[i,a]=C.useState("1.8"),[s,u]=C.useState(()=>m()),{t:c}=xe(),l=cc({weight:Ra().typeError(c("normaModal.Weight must be a number")).min(3,c("normaModal.Weight must be more than 3kg")).max(300,c("normaModal.Weight must be less than 300kg")),sports:Ra().typeError(c("normaModal.Time must be a number")).positive(c("normaModal.Time must be more than 0"))}),{control:p,formState:{errors:d}}=lc({mode:"onChange",resolver:fc(l),defaultValues:{weight:"",sports:""}});C.useEffect(()=>{if(s&&t>0){const g=t*.03+r*.4;a(g.toFixed(1))}if(!s&&t>0){const g=t*.04+r*.6;a(g.toFixed(1))}},[t,r,s,a]);function m(){return e==="female"||e===null}function b(){return e==="female"||e===null?"female":"male"}return h.jsxs(h.Fragment,{children:[h.jsxs("form",{children:[h.jsxs(Of,{defaultValue:b(),name:"radio-buttons-group",row:!0,sx:{marginBottom:"16px"},children:[h.jsx(Ia,{value:"female",control:h.jsx(La,{}),label:c("normaModal.For woman"),onChange:()=>u(!0),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25,letterSpacing:"0"},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}}),h.jsx(Ia,{value:"male",control:h.jsx(La,{}),label:c("normaModal.For man"),onChange:()=>u(!1),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}})]}),h.jsxs(e2,{children:[h.jsxs(Uu,{children:[h.jsxs("label",{htmlFor:"weight",children:[c("normaModal.Your weight in kilograms"),":"]}),h.jsx(Wa,{name:"weight",control:p,render:({field:{onChange:g,...y}})=>h.jsx("input",{id:"weight",...y,onChange:({target:{value:v}})=>{g(v),n(v)},placeholder:"0",onFocus:v=>v.target.placeholder="",onBlur:v=>v.target.placeholder="0",onInput:v=>{v.target.value=v.target.value.replace(/(\.\d{1})\d+/,"$1"),v.target.value=v.target.value.replace(",",".")},autoComplete:"off"})}),d.weight&&t!==""&&h.jsx(Yu,{children:d.weight.message})]}),h.jsxs(Uu,{children:[h.jsxs("label",{htmlFor:"sports",children:[c("normaModal.The time of active participation in sports or other activities with a high physical load in hours"),":"]}),h.jsx(Wa,{name:"sports",control:p,render:({field:{onChange:g,...y}})=>h.jsx("input",{id:"sports",...y,onChange:({target:{value:v}})=>{g(v),o(v)},placeholder:"0",onFocus:v=>v.target.placeholder="",onBlur:v=>v.target.placeholder="0",onInput:v=>{v.target.value=v.target.value.replace(/(\.\d{1})\d+/,"$1"),v.target.value=v.target.value.replace(",",".")},autoComplete:"off"})}),d.sports&&r!==""&&h.jsx(Yu,{children:d.sports.message})]})]})]}),h.jsxs(Jx,{children:[h.jsxs("p",{children:[c("normaModal.The required amount of water in liters per day"),":"]}),h.jsx("p",{children:h.jsxs("span",{children:[i," ",c("normaModal.L")]})})]})]})},i2=({onClose:e})=>{const t=Kt(),n=ne(Tr),{waterRate:r}=ne(Sr),{t:o}=xe(),i=cc({norma:Cf().matches(/^(0\.1|[1-9](\.\d)?|1[0-4](\.\d)?|15)$/,o("normaModal.normaError")).required()}),{register:a,handleSubmit:s,formState:{errors:u}}=lc({defaultValues:{norma:r/1e3},mode:"onChange",resolver:fc(i)});async function c(l){const d={waterRate:(l.norma*1e3).toString()};t(Pf(d)).unwrap().then(()=>{t(pc({year:n.year,month:n.month+1})),e()}).catch(m=>{Sf.Notify.failure(m.message,Ef)})}return h.jsxs(Kx,{children:[h.jsx("h2",{children:o("normaModal.My daily norma")}),h.jsxs(Zx,{children:[h.jsxs("p",{children:[o("normaModal.formulaGenderF"),": ",h.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),h.jsxs("p",{children:[o("normaModal.formulaGenderM"),": ",h.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),h.jsxs(Qx,{children:[h.jsx("span",{children:"*"})," ",o("normaModal.explanation")]}),h.jsxs("h3",{children:[o("normaModal.Calculate your rate"),":"]}),h.jsx(o2,{}),h.jsxs("form",{action:"",onSubmit:s(c),children:[h.jsxs(t2,{children:[h.jsxs("label",{htmlFor:"norma",children:[o("normaModal. Write down how much water you will drink"),":"]}),h.jsx("input",{type:"text",...a("norma",{max:15}),name:"norma",id:"norma",placeholder:"0",onFocus:l=>l.target.placeholder="",onBlur:l=>l.target.placeholder="0",onInput:l=>{l.target.value=l.target.value.replace(/(\.\d{1})\d+/,"$1"),l.target.value=l.target.value.replace(",",".")},autoComplete:"off"}),u.norma&&h.jsx(r2,{children:u.norma.message})]}),h.jsx(n2,{children:h.jsx(uc,{type:"submit",children:o("save")})})]})]})},a2=_.div`
  width: 198px;
`,s2=_.div`
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
`,qu=_.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,u2=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),{waterRate:o}=ne(Sr),i=ne(Tf),{t:a}=xe();C.useEffect(()=>{r(i==="uk")},[i]);const s=o/1e3;return h.jsxs(h.Fragment,{children:[n?h.jsx(a2,{children:h.jsxs(Gu,{children:[h.jsx("h2",{children:a("normaModal.My daily norma")}),h.jsxs(qu,{children:[h.jsxs("p",{children:[s," ",a("normaModal.L")]}),h.jsx("button",{onClick:()=>t(!0),children:a("edit")})]})]})}):h.jsx(s2,{children:h.jsxs(Gu,{children:[h.jsx("h2",{children:a("normaModal.My daily norma")}),h.jsxs(qu,{children:[h.jsxs("p",{children:[s," ",a("normaModal.L")]}),h.jsx("button",{onClick:()=>t(!0),children:a("edit")})]})]})}),e&&h.jsx(An,{open:e,onClose:()=>t(!1),children:h.jsx(i2,{onClose:()=>t(!1)})})]})};function fe(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function bt(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const tf=6048e5,c2=864e5;let l2={};function Zr(){return l2}function wt(e,t){var s,u,c,l;const n=Zr(),r=(t==null?void 0:t.weekStartsOn)??((u=(s=t==null?void 0:t.locale)==null?void 0:s.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((l=(c=n.locale)==null?void 0:c.options)==null?void 0:l.weekStartsOn)??0,o=fe(e),i=o.getDay(),a=(i<r?7:0)+i-r;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}function Pr(e){return wt(e,{weekStartsOn:1})}function nf(e){const t=fe(e),n=t.getFullYear(),r=bt(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Pr(r),i=bt(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const a=Pr(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}function Xu(e){const t=fe(e);return t.setHours(0,0,0,0),t}function Ku(e){const t=fe(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function f2(e,t){const n=Xu(e),r=Xu(t),o=+n-Ku(n),i=+r-Ku(r);return Math.round((o-i)/c2)}function p2(e){const t=nf(e),n=bt(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Pr(n)}function d2(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function h2(e){if(!d2(e)&&typeof e!="number")return!1;const t=fe(e);return!isNaN(Number(t))}function m2(e){const t=fe(e),n=bt(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const v2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},g2=(e,t,n)=>{let r;const o=v2[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Bt(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const y2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},b2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},w2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},x2={date:Bt({formats:y2,defaultWidth:"full"}),time:Bt({formats:b2,defaultWidth:"full"}),dateTime:Bt({formats:w2,defaultWidth:"full"})},O2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},C2=(e,t,n,r)=>O2[e];function Se(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,s=n!=null&&n.width?String(n.width):a;o=e.formattingValues[s]||e.formattingValues[a]}else{const a=e.defaultWidth,s=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[s]||e.values[a]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const P2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},S2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},E2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},T2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},_2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},M2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},$2=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},j2={ordinalNumber:$2,era:Se({values:P2,defaultWidth:"wide"}),quarter:Se({values:S2,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Se({values:E2,defaultWidth:"wide"}),day:Se({values:T2,defaultWidth:"wide"}),dayPeriod:Se({values:_2,defaultWidth:"wide",formattingValues:M2,defaultFormattingWidth:"wide"})};function Ee(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const a=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?D2(s,p=>p.test(a)):A2(s,p=>p.test(a));let c;c=e.valueCallback?e.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;const l=t.slice(a.length);return{value:c,rest:l}}}function A2(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function D2(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function rf(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;const s=t.slice(o.length);return{value:a,rest:s}}}const k2=/^(\d+)(th|st|nd|rd)?/i,N2=/\d+/i,R2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},I2={any:[/^b/i,/^(a|c)/i]},L2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},W2={any:[/1/i,/2/i,/3/i,/4/i]},F2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},B2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},H2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},V2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},z2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},U2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Y2={ordinalNumber:rf({matchPattern:k2,parsePattern:N2,valueCallback:e=>parseInt(e,10)}),era:Ee({matchPatterns:R2,defaultMatchWidth:"wide",parsePatterns:I2,defaultParseWidth:"any"}),quarter:Ee({matchPatterns:L2,defaultMatchWidth:"wide",parsePatterns:W2,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ee({matchPatterns:F2,defaultMatchWidth:"wide",parsePatterns:B2,defaultParseWidth:"any"}),day:Ee({matchPatterns:H2,defaultMatchWidth:"wide",parsePatterns:V2,defaultParseWidth:"any"}),dayPeriod:Ee({matchPatterns:z2,defaultMatchWidth:"any",parsePatterns:U2,defaultParseWidth:"any"})},of={code:"en-US",formatDistance:g2,formatLong:x2,formatRelative:C2,localize:j2,match:Y2,options:{weekStartsOn:0,firstWeekContainsDate:1}},Zu=of;function G2(e){const t=fe(e);return f2(t,m2(t))+1}function q2(e){const t=fe(e),n=+Pr(t)-+p2(t);return Math.round(n/tf)+1}function af(e,t){var l,p,d,m;const n=fe(e),r=n.getFullYear(),o=Zr(),i=(t==null?void 0:t.firstWeekContainsDate)??((p=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:p.firstWeekContainsDate)??o.firstWeekContainsDate??((m=(d=o.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,a=bt(e,0);a.setFullYear(r+1,0,i),a.setHours(0,0,0,0);const s=wt(a,t),u=bt(e,0);u.setFullYear(r,0,i),u.setHours(0,0,0,0);const c=wt(u,t);return n.getTime()>=s.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function X2(e,t){var s,u,c,l;const n=Zr(),r=(t==null?void 0:t.firstWeekContainsDate)??((u=(s=t==null?void 0:t.locale)==null?void 0:s.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((l=(c=n.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??1,o=af(e,t),i=bt(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),wt(i,t)}function K2(e,t){const n=fe(e),r=+wt(n,t)-+X2(n,t);return Math.round(r/tf)+1}function B(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const ze={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return B(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):B(n+1,2)},d(e,t){return B(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return B(e.getHours()%12||12,t.length)},H(e,t){return B(e.getHours(),t.length)},m(e,t){return B(e.getMinutes(),t.length)},s(e,t){return B(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return B(o,t.length)}},jt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Qu={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return ze.y(e,t)},Y:function(e,t,n,r){const o=af(e,r),i=o>0?o:1-o;if(t==="YY"){const a=i%100;return B(a,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):B(i,t.length)},R:function(e,t){const n=nf(e);return B(n,t.length)},u:function(e,t){const n=e.getFullYear();return B(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return B(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return B(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return ze.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return B(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=K2(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):B(o,t.length)},I:function(e,t,n){const r=q2(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):B(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):ze.d(e,t)},D:function(e,t,n){const r=G2(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):B(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return B(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return B(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return B(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=jt.noon:r===0?o=jt.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=jt.evening:r>=12?o=jt.afternoon:r>=4?o=jt.morning:o=jt.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return ze.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):ze.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):B(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):B(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):ze.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):ze.s(e,t)},S:function(e,t){return ze.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return ec(r);case"XXXX":case"XX":return ft(r);case"XXXXX":case"XXX":default:return ft(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return ec(r);case"xxxx":case"xx":return ft(r);case"xxxxx":case"xxx":default:return ft(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Ju(r,":");case"OOOO":default:return"GMT"+ft(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Ju(r,":");case"zzzz":default:return"GMT"+ft(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return B(r,t.length)},T:function(e,t,n){const r=e.getTime();return B(r,t.length)}};function Ju(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+B(i,2)}function ec(e,t){return e%60===0?(e>0?"-":"+")+B(Math.abs(e)/60,2):ft(e,t)}function ft(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=B(Math.trunc(r/60),2),i=B(r%60,2);return n+o+t+i}const tc=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},sf=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Z2=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return tc(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",tc(r,t)).replace("{{time}}",sf(o,t))},Q2={p:sf,P:Z2},J2=/^D+$/,e0=/^Y+$/,t0=["D","DD","YY","YYYY"];function n0(e){return J2.test(e)}function r0(e){return e0.test(e)}function o0(e,t,n){const r=i0(e,t,n);if(console.warn(r),t0.includes(e))throw new RangeError(r)}function i0(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const a0=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,s0=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,u0=/^'([^]*?)'?$/,c0=/''/g,l0=/[a-zA-Z]/;function nc(e,t,n){var l,p,d,m,b,g,y,v;const r=Zr(),o=(n==null?void 0:n.locale)??r.locale??of,i=(n==null?void 0:n.firstWeekContainsDate)??((p=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,a=(n==null?void 0:n.weekStartsOn)??((g=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:g.weekStartsOn)??r.weekStartsOn??((v=(y=r.locale)==null?void 0:y.options)==null?void 0:v.weekStartsOn)??0,s=fe(e);if(!h2(s))throw new RangeError("Invalid time value");let u=t.match(s0).map(w=>{const O=w[0];if(O==="p"||O==="P"){const S=Q2[O];return S(w,o.formatLong)}return w}).join("").match(a0).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const O=w[0];if(O==="'")return{isToken:!1,value:f0(w)};if(Qu[O])return{isToken:!0,value:w};if(O.match(l0))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:w}});o.localize.preprocessor&&(u=o.localize.preprocessor(s,u));const c={firstWeekContainsDate:i,weekStartsOn:a,locale:o};return u.map(w=>{if(!w.isToken)return w.value;const O=w.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&r0(O)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&n0(O))&&o0(O,t,String(e));const S=Qu[O[0]];return S(s,O,o.localize,c)}).join("")}function f0(e){const t=e.match(u0);return t?t[1].replace(c0,"'"):e}function uf(e,t,n){const r=wt(e,n),o=wt(t,n);return+r==+o}function dn(e,t){if(e.one!==void 0&&t===1)return e.one;const n=t%10,r=t%100;return n===1&&r!==11?e.singularNominative.replace("{{count}}",String(t)):n>=2&&n<=4&&(r<10||r>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function te(e){return(t,n)=>n&&n.addSuffix?n.comparison&&n.comparison>0?e.future?dn(e.future,t):"за "+dn(e.regular,t):e.past?dn(e.past,t):dn(e.regular,t)+" тому":dn(e.regular,t)}const p0=(e,t)=>t&&t.addSuffix?t.comparison&&t.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",d0={lessThanXSeconds:te({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:te({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:p0,lessThanXMinutes:te({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:te({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:te({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:te({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:te({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:te({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:te({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:te({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:te({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:te({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:te({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:te({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:te({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},h0=(e,t,n)=>(n=n||{},d0[e](t,n)),m0={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},v0={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},g0={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},y0={date:Bt({formats:m0,defaultWidth:"full"}),time:Bt({formats:v0,defaultWidth:"full"}),dateTime:Bt({formats:g0,defaultWidth:"full"})},ja=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function b0(e){const t=ja[e];switch(e){case 0:case 3:case 5:case 6:return"'у минулу "+t+" о' p";case 1:case 2:case 4:return"'у минулий "+t+" о' p"}}function cf(e){return"'у "+ja[e]+" о' p"}function w0(e){const t=ja[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступну "+t+" о' p";case 1:case 2:case 4:return"'у наступний "+t+" о' p"}}const x0=(e,t,n)=>{const r=fe(e),o=r.getDay();return uf(r,t,n)?cf(o):b0(o)},O0=(e,t,n)=>{const r=fe(e),o=r.getDay();return uf(r,t,n)?cf(o):w0(o)},C0={lastWeek:x0,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:O0,other:"P"},P0=(e,t,n,r)=>{const o=C0[e];return typeof o=="function"?o(t,n,r):o},S0={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},E0={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},T0={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},_0={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},M0={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},$0={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},j0={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},A0=(e,t)=>{const n=String(t==null?void 0:t.unit),r=Number(e);let o;return n==="date"?r===3||r===23?o="-є":o="-е":n==="minute"||n==="second"||n==="hour"?o="-а":o="-й",r+o},D0={ordinalNumber:A0,era:Se({values:S0,defaultWidth:"wide"}),quarter:Se({values:E0,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Se({values:T0,defaultWidth:"wide",formattingValues:_0,defaultFormattingWidth:"wide"}),day:Se({values:M0,defaultWidth:"wide"}),dayPeriod:Se({values:$0,defaultWidth:"any",formattingValues:j0,defaultFormattingWidth:"wide"})},k0=/^(\d+)(-?(е|й|є|а|я))?/i,N0=/\d+/i,R0={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},I0={any:[/^д/i,/^н/i]},L0={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},W0={any:[/1/i,/2/i,/3/i,/4/i]},F0={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},B0={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},H0={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},V0={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},z0={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},U0={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},Y0={ordinalNumber:rf({matchPattern:k0,parsePattern:N0,valueCallback:e=>parseInt(e,10)}),era:Ee({matchPatterns:R0,defaultMatchWidth:"wide",parsePatterns:I0,defaultParseWidth:"any"}),quarter:Ee({matchPatterns:L0,defaultMatchWidth:"wide",parsePatterns:W0,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ee({matchPatterns:F0,defaultMatchWidth:"wide",parsePatterns:B0,defaultParseWidth:"any"}),day:Ee({matchPatterns:H0,defaultMatchWidth:"wide",parsePatterns:V0,defaultParseWidth:"any"}),dayPeriod:Ee({matchPatterns:z0,defaultMatchWidth:"wide",parsePatterns:U0,defaultParseWidth:"any"})},G0={code:"uk",formatDistance:h0,formatLong:y0,formatRelative:P0,localize:D0,match:Y0,options:{weekStartsOn:1,firstWeekContainsDate:1}},rc=G0,q0=(e,t)=>Array.from({length:e},(n,r)=>({date:`${r+1}, ${t}`,portions:0,waterVolumePercentage:0,dailyNorma:0})),X0=(e,t)=>new Date(t,e+1,0).getDate(),K0=navigator.language,lf=(e,t="HH:mm")=>Ie.utc(e).locale(K0).format(t),Z0=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],oc=e=>{const t=e==null?void 0:e.split(", ");return parseInt((t==null?void 0:t[0])??0)},Q0=_.span`
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
`,J0=({item:e,index:t,monthName:n})=>{const{waterVolumePercentage:r,dailyNorma:o,portions:i}=e,a=Math.min(100,r),{t:s}=xe();return h.jsxs(Q0,{children:[h.jsx(cr,{children:h.jsxs(lr,{children:[t+1,", ",n]})}),h.jsxs(cr,{children:[s("dayStatistics.Daily norma"),": ",h.jsx(lr,{children:o})]}),h.jsxs(cr,{children:[s("dayStatistics.Fulfillment of the daily norm"),":"," ",h.jsxs(lr,{children:[a,"%"]})]}),h.jsxs(cr,{children:[s("dayStatistics.How many servings of water"),":"," ",h.jsx(lr,{children:i})]})]})},eO=_.li`
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
`,tO=_.span`
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
`;const nO=_.span`
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
`,rO=({item:e,index:t,monthName:n})=>{const[r,o]=C.useState(null),{waterVolumePercentage:i}=e,a=b=>{o(i===0||r?null:b.currentTarget)},s=!!r,u=s?"simple-popper":void 0,c=i,l=r&&r.getBoundingClientRect().left>window.innerWidth/2,p=ne(_f),[d,m]=C.useState(Fa);return C.useEffect(()=>{m(p==="dark"?Mf:Fa)},[p,d]),h.jsxs(eO,{children:[h.jsx(nO,{"aria-describedby":u,onMouseEnter:a,onMouseLeave:a,style:{borderWidth:c===0?0:1,borderStyle:"solid",borderColor:c>=100?"transparent":d.colors.secondaryOrange},children:t+1}),h.jsxs(tO,{children:[c,"%"]}),h.jsx(vd,{id:u,open:s,anchorEl:r,placement:l?"right-start":"left-start",modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!0,padding:8}},{name:"flip",enabled:!0,options:{fallbackPlacements:["top"]}}],children:({TransitionProps:b})=>h.jsx($f,{component:"div",sx:{p:2,minWidth:"292px",minHeight:"188px",padding:"24px 16px",borderRadius:"10px",background:d.colors.mainBg,boxShadow:d.shadows.calendarShadow},onMouseLeave:a,...b,children:h.jsx(J0,{item:e,index:t,monthName:n})})})]})},oO=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,iO=_.div`
  display: flex;
  gap: 12px;

  span {
    color: ${e=>e.theme.colors.primaryBlue};
    font-size: 16px;
    line-height: 1.25;
    width: 120px;
    text-align: center;
  }
`,aO=_.ul`
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
`,sO=_.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,ic=_.button`
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
`,zo=new Date,uO=()=>{const e=ne(yd),[t,n]=C.useState(zo.getMonth()),[r,o]=C.useState(zo.getFullYear()),i=Kt(),{i18n:a}=xe(),s=Z0(t),u=X0(t,r),c=q0(u,s),l=c==null?void 0:c.map(m=>Object.values(e).find(g=>oc(g.date)===oc(m.date))||m);C.useEffect(()=>{i(pc({year:r,month:t+1})),i(jf({year:r,month:t}))},[i,r,t]);const p=({currentTarget:m})=>{t===0?(o(b=>b-1),n(11)):n(b=>b-1),m.blur()},d=({currentTarget:m})=>{t===11?(o(b=>b+1),n(0)):n(b=>b+1),m.blur()};return h.jsxs(h.Fragment,{children:[h.jsxs(oO,{children:[h.jsx(sO,{children:a.t("month")}),h.jsxs(iO,{children:[h.jsx(ic,{onClick:p,children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-arrow-left`})})}),h.jsxs("span",{style:{textTransform:"capitalize"},children:[nc(new Date(r,t,1),"LLLL",{locale:a.language==="uk"?rc:Zu}),", ",r]}),h.jsx(ic,{onClick:d,disabled:zo<new Date(r,t+1),children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-arrow-right`})})})]})]}),h.jsx(aO,{children:l.map((m,b)=>{const g=nc(new Date(r,t,b+1),"LLLL",{locale:a.language==="uk"?rc:Zu});return h.jsx(rO,{item:m,index:b,monthName:g},b)})})]})},cO=_.div`
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
`,lO=({onClose:e,id:t})=>{const n=Kt(),{t:r}=xe(),o=ne(Tr);function i(){n(Af({portionId:t,shouldUpdateMonth:$a(o)})).unwrap().then(()=>e())}return h.jsxs(cO,{children:[h.jsx("h2",{children:r("deleteModal.Delete entry")}),h.jsx("p",{className:"text",children:r("deleteModal.Are you sure you want to delete the entry?")}),h.jsxs("div",{className:"wrapper-btn",children:[h.jsx("button",{onClick:e,className:"cancel-btn",children:r("deleteModal.Cancel")}),h.jsx("button",{onClick:i,className:"delete-btn",children:r("deleteModal.Delete")})]})]})},fO=_.button`
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
`;function pO({id:e}){const[t,n]=C.useState(!1);function r(){n(!0)}return h.jsxs(h.Fragment,{children:[h.jsx(fO,{onClick:r,children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-trash`})})}),t&&h.jsx(An,{onClose:()=>n(!1),children:h.jsx(lO,{id:e,onClose:()=>n(!1)})})]})}const ff=e=>C.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M6.26099 3.13043L8.39972 32.7888V32.8696H26.8122L28.9509 3.22275V3.13043H6.26099ZM26.0557 32.0387H9.16193L7.55788 9.82376H8.43954L9.89002 29.4017C9.89851 29.5048 9.94461 29.601 10.0193 29.6714C10.094 29.7418 10.1919 29.7815 10.2939 29.7826H10.328C10.3811 29.7789 10.4329 29.7646 10.4806 29.7406C10.5282 29.7165 10.5707 29.6832 10.6056 29.6424C10.6404 29.6017 10.667 29.5544 10.6838 29.5031C10.7006 29.4519 10.7073 29.3979 10.7034 29.344L9.25294 9.82376H27.6597L26.0557 32.0387ZM27.7166 8.99286H9.19037L8.87184 4.66528C8.86183 4.5597 8.81293 4.46184 8.7349 4.39125C8.65687 4.32065 8.55546 4.28251 8.45092 4.28445C8.34378 4.29473 8.24477 4.34679 8.17474 4.42968C8.1047 4.51256 8.06913 4.61978 8.0755 4.72875L8.39404 8.99863H7.501L7.13696 3.95556H28.0807L27.7166 8.99286Z",fill:"#407BFF"}),C.createElement("path",{d:"M12.7797 13.9321C13.0452 13.9321 13.3047 13.8522 13.5255 13.7026C13.7462 13.553 13.9183 13.3403 14.0199 13.0914C14.1215 12.8426 14.1481 12.5688 14.0963 12.3047C14.0445 12.0405 13.9166 11.7979 13.7289 11.6074C13.5411 11.417 13.3019 11.2873 13.0415 11.2348C12.7811 11.1822 12.5112 11.2092 12.2659 11.3122C12.0206 11.4153 11.811 11.5898 11.6635 11.8138C11.516 12.0377 11.4373 12.301 11.4373 12.5703C11.4373 12.9315 11.5787 13.2779 11.8304 13.5332C12.0822 13.7886 12.4236 13.9321 12.7797 13.9321ZM12.7797 12.0337C12.8843 12.0337 12.9866 12.0652 13.0735 12.1241C13.1605 12.1831 13.2283 12.2669 13.2684 12.365C13.3084 12.463 13.3189 12.5709 13.2985 12.675C13.2781 12.7791 13.2277 12.8747 13.1537 12.9498C13.0797 13.0248 12.9855 13.0759 12.8829 13.0966C12.7802 13.1173 12.6739 13.1067 12.5772 13.0661C12.4806 13.0255 12.3979 12.9567 12.3398 12.8685C12.2817 12.7802 12.2507 12.6765 12.2507 12.5703C12.2507 12.428 12.3064 12.2915 12.4056 12.1909C12.5048 12.0902 12.6394 12.0337 12.7797 12.0337Z",fill:"#407BFF"}),C.createElement("path",{d:"M12.7738 18.3578C12.7772 18.6266 12.8589 18.8883 13.0087 19.1101C13.1585 19.3319 13.3696 19.5037 13.6155 19.604C13.8614 19.7042 14.1311 19.7284 14.3905 19.6734C14.6499 19.6185 14.8875 19.4869 15.0733 19.2952C15.2591 19.1035 15.3848 18.8603 15.4346 18.5962C15.4844 18.3322 15.456 18.0591 15.353 17.8114C15.2501 17.5637 15.0772 17.3524 14.856 17.2042C14.6349 17.0561 14.3755 16.9776 14.1105 16.9787C13.9332 16.9794 13.7579 17.0158 13.5946 17.0856C13.4312 17.1555 13.2832 17.2575 13.1589 17.3857C13.0346 17.5139 12.9366 17.6658 12.8705 17.8327C12.8044 17.9995 12.7715 18.178 12.7738 18.3578ZM14.6395 18.3578C14.6395 18.4639 14.6085 18.5676 14.5503 18.6559C14.4922 18.7441 14.4096 18.8129 14.3129 18.8535C14.2163 18.8941 14.1099 18.9048 14.0073 18.8841C13.9047 18.8634 13.8104 18.8122 13.7364 18.7372C13.6625 18.6622 13.6121 18.5665 13.5917 18.4624C13.5713 18.3583 13.5817 18.2505 13.6218 18.1524C13.6618 18.0543 13.7296 17.9705 13.8166 17.9116C13.9036 17.8526 14.0059 17.8211 14.1105 17.8211C14.2508 17.8211 14.3854 17.8777 14.4846 17.9783C14.5838 18.0789 14.6395 18.2154 14.6395 18.3578Z",fill:"#407BFF"}),C.createElement("path",{d:"M22.3129 18.3924C22.5784 18.3924 22.8379 18.3125 23.0587 18.1629C23.2794 18.0132 23.4515 17.8006 23.5531 17.5517C23.6547 17.3029 23.6813 17.0291 23.6295 16.765C23.5777 16.5008 23.4498 16.2582 23.2621 16.0677C23.0743 15.8773 22.8351 15.7476 22.5747 15.6951C22.3143 15.6425 22.0444 15.6695 21.7991 15.7725C21.5539 15.8756 21.3442 16.0501 21.1967 16.2741C21.0492 16.498 20.9705 16.7613 20.9705 17.0306C20.9705 17.3918 21.1119 17.7382 21.3636 17.9935C21.6154 18.2489 21.9568 18.3924 22.3129 18.3924ZM22.3129 16.4998C22.4177 16.4998 22.5202 16.5314 22.6073 16.5906C22.6944 16.6499 22.7622 16.734 22.8021 16.8324C22.842 16.9308 22.8521 17.039 22.8312 17.1432C22.8104 17.2475 22.7594 17.3431 22.6849 17.4179C22.6103 17.4927 22.5155 17.5434 22.4125 17.5634C22.3095 17.5835 22.203 17.572 22.1064 17.5305C22.0099 17.489 21.9277 17.4193 21.8702 17.3303C21.8128 17.2413 21.7827 17.137 21.7839 17.0306C21.7854 16.8893 21.8418 16.7543 21.9408 16.6549C22.0398 16.5555 22.1735 16.4998 22.3129 16.4998Z",fill:"#407BFF"}),C.createElement("path",{d:"M17.6373 15.8247C17.9028 15.8247 18.1624 15.7448 18.3831 15.5952C18.6039 15.4455 18.7759 15.2329 18.8775 14.984C18.9791 14.7352 19.0057 14.4614 18.9539 14.1972C18.9021 13.9331 18.7743 13.6905 18.5865 13.5C18.3988 13.3096 18.1596 13.1799 17.8992 13.1273C17.6388 13.0748 17.3689 13.1018 17.1236 13.2048C16.8783 13.3079 16.6687 13.4824 16.5212 13.7064C16.3737 13.9303 16.2949 14.1936 16.2949 14.4629C16.2949 14.8241 16.4364 15.1704 16.6881 15.4258C16.9399 15.6812 17.2813 15.8247 17.6373 15.8247ZM17.6373 13.9263C17.7419 13.9263 17.8442 13.9578 17.9312 14.0167C18.0182 14.0757 18.086 14.1595 18.126 14.2576C18.1661 14.3556 18.1766 14.4635 18.1562 14.5676C18.1357 14.6717 18.0854 14.7673 18.0114 14.8424C17.9374 14.9174 17.8431 14.9685 17.7405 14.9892C17.6379 15.0099 17.5315 14.9993 17.4349 14.9587C17.3382 14.9181 17.2556 14.8493 17.1975 14.761C17.1394 14.6728 17.1083 14.569 17.1083 14.4629C17.1045 14.3901 17.1153 14.3172 17.1401 14.2487C17.165 14.1802 17.2033 14.1176 17.2528 14.0647C17.3024 14.0117 17.362 13.9696 17.4281 13.9409C17.4942 13.9121 17.5654 13.8973 17.6373 13.8974V13.9263Z",fill:"#407BFF"}),C.createElement("path",{d:"M15.0776 23.5451C15.0832 23.7663 15.153 23.9809 15.2782 24.1621C15.4035 24.3433 15.5786 24.483 15.7817 24.5638C15.9848 24.6446 16.2069 24.6628 16.4201 24.6161C16.6334 24.5695 16.8283 24.4602 16.9806 24.3017C17.1329 24.1433 17.2358 23.9428 17.2763 23.7253C17.3169 23.5079 17.2933 23.2832 17.2086 23.0792C17.1239 22.8753 16.9817 22.7013 16.8 22.5789C16.6183 22.4564 16.405 22.3911 16.1868 22.3911C15.8901 22.3986 15.608 22.5235 15.4007 22.7391C15.1935 22.9547 15.0775 23.2439 15.0776 23.5451ZM16.1868 23.245C16.2453 23.245 16.3025 23.2626 16.3512 23.2956C16.3998 23.3286 16.4377 23.3754 16.4601 23.4302C16.4825 23.4851 16.4883 23.5454 16.4769 23.6036C16.4655 23.6618 16.4373 23.7153 16.396 23.7572C16.3546 23.7992 16.3019 23.8278 16.2445 23.8394C16.1872 23.8509 16.1277 23.845 16.0736 23.8223C16.0196 23.7996 15.9734 23.7611 15.9409 23.7118C15.9084 23.6624 15.891 23.6044 15.891 23.5451C15.891 23.4655 15.9222 23.3892 15.9777 23.3329C16.0331 23.2766 16.1084 23.245 16.1868 23.245Z",fill:"#407BFF"}),C.createElement("path",{d:"M20.4414 22.2929C20.6691 22.301 20.894 22.2394 21.0868 22.1163C21.2797 21.9932 21.4317 21.8142 21.523 21.6024C21.6144 21.3907 21.641 21.1559 21.5994 20.9287C21.5577 20.7014 21.4497 20.4921 21.2894 20.3278C21.1292 20.1635 20.9239 20.0519 20.7003 20.0073C20.4767 19.9627 20.2451 19.9872 20.0354 20.0777C19.8258 20.1682 19.6477 20.3205 19.5244 20.5149C19.401 20.7092 19.338 20.9367 19.3436 21.1678C19.3507 21.4619 19.4683 21.7423 19.6723 21.9514C19.8764 22.1606 20.1515 22.2827 20.4414 22.2929ZM20.4414 20.8677C20.5199 20.8677 20.5951 20.8993 20.6506 20.9556C20.706 21.0119 20.7372 21.0882 20.7372 21.1678C20.7372 21.2474 20.706 21.3237 20.6506 21.3799C20.5951 21.4362 20.5199 21.4678 20.4414 21.4678C20.3624 21.4678 20.2866 21.4364 20.2302 21.3803C20.1738 21.3242 20.1414 21.2479 20.1399 21.1678C20.1399 21.1279 20.1478 21.0884 20.163 21.0516C20.1782 21.0148 20.2005 20.9815 20.2286 20.9535C20.2566 20.9256 20.2899 20.9036 20.3265 20.8889C20.363 20.8742 20.4021 20.867 20.4414 20.8677Z",fill:"#407BFF"}),C.createElement("path",{d:"M22.7851 12.98C23.0101 12.98 23.23 12.9123 23.4171 12.7855C23.6042 12.6587 23.75 12.4785 23.8361 12.2676C23.9222 12.0567 23.9448 11.8247 23.9009 11.6008C23.857 11.377 23.7486 11.1714 23.5895 11.01C23.4304 10.8486 23.2277 10.7387 23.007 10.6941C22.7863 10.6496 22.5576 10.6725 22.3497 10.7598C22.1419 10.8472 21.9642 10.9951 21.8392 11.1848C21.7142 11.3746 21.6475 11.5977 21.6475 11.826C21.6475 12.1321 21.7673 12.4256 21.9807 12.642C22.194 12.8584 22.4834 12.98 22.7851 12.98ZM22.7851 11.5548C22.8291 11.542 22.8754 11.5398 22.9205 11.5483C22.9655 11.5568 23.0079 11.5758 23.0445 11.6038C23.081 11.6317 23.1107 11.6679 23.1311 11.7095C23.1515 11.7511 23.1621 11.7969 23.1621 11.8433C23.1621 11.8897 23.1515 11.9355 23.1311 11.9771C23.1107 12.0187 23.081 12.0549 23.0445 12.0828C23.0079 12.1108 22.9655 12.1298 22.9205 12.1383C22.8754 12.1468 22.8291 12.1446 22.7851 12.1318C22.7411 12.1446 22.6947 12.1468 22.6497 12.1383C22.6047 12.1298 22.5623 12.1108 22.5257 12.0828C22.4892 12.0549 22.4595 12.0187 22.4391 11.9771C22.4187 11.9355 22.4081 11.8897 22.4081 11.8433C22.4081 11.7969 22.4187 11.7511 22.4391 11.7095C22.4595 11.6679 22.4892 11.6317 22.5257 11.6038C22.5623 11.5758 22.6047 11.5568 22.6497 11.5483C22.6947 11.5398 22.7411 11.542 22.7851 11.5548Z",fill:"#407BFF"}),C.createElement("path",{d:"M11.6646 30.5904C11.6136 30.6142 11.568 30.6485 11.5306 30.691C11.4931 30.7335 11.4647 30.7834 11.4471 30.8375C11.4295 30.8916 11.4231 30.9488 11.4282 31.0056C11.4333 31.0623 11.4499 31.1174 11.4769 31.1674C11.5119 31.2348 11.5642 31.2913 11.6283 31.3309C11.6924 31.3705 11.7659 31.3918 11.841 31.3924C11.904 31.3942 11.9665 31.3803 12.023 31.352C13.7609 30.4488 15.6845 29.9744 17.6372 29.9672C19.7037 29.9977 21.7414 30.4634 23.6211 31.3347C23.6955 31.3741 23.78 31.3894 23.8632 31.3785C23.9464 31.3675 24.0243 31.331 24.0863 31.2737C24.1484 31.2164 24.1916 31.1412 24.2101 31.0582C24.2286 30.9752 24.2216 30.8884 24.1899 30.8096C24.1499 30.7073 24.0724 30.6246 23.9738 30.5788C21.9837 29.6554 19.8254 29.164 17.6372 29.1363C15.5614 29.1381 13.5152 29.6363 11.6646 30.5904Z",fill:"#407BFF"})),dO=_.div`
  @media only screen and (min-width: 768px) {
    width: 656px;
  }

  @media only screen and (min-width: 1440px) {
    width: auto;
  }
`,hO=_.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;

  margin-bottom: 24px;
`,mO=_.div`
  font-size: 18px;
  line-height: 1.1;
  margin-bottom: 16px;
  font-weight: 500;
`,vO=_(ff)`
  width: 36px;
  height: 36px;
`,gO=_.div`
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
`,yO=_.form`
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
`,bO=_.div`
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
`,wO=_.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: ${e=>e.theme.colors.secondaryBg};
  margin-bottom: 24px;
`,xO=_.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`,OO=_.p`
  color: ${e=>e.theme.colors.textColor};
  font-size: 12px;
  line-height: 2;
`,CO=_.p`
  color: ${e=>e.theme.colors.textColor};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
  margin-bottom: 12px;
`,PO=_(Hn)`
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
`,ac=50,SO=({onClose:e,id:t})=>{const{t:n}=xe(),r=Kt(),o=ne(Tr),a=ne(Hi).find(w=>w._id===t),[s,u]=C.useState(a.waterAmount),{handleSubmit:c,values:{date:l,waterAmount:p},errors:d,setFieldValue:m}=il({initialValues:{waterAmount:a.waterAmount.toString(),date:`${lf(a.date)}`},onSubmit:w=>{r(Df({portionId:t,credentials:w,shouldUpdateMonth:$a(o)})).unwrap().then(()=>{e()})}}),b=()=>{m("waterAmount",s?s.toString():"0")},g=()=>{const w=Number.parseInt(p)+ac;m("waterAmount",w.toString()),u(w)},y=()=>{const w=Number.parseInt(p)-ac;m("waterAmount",w<=0?"0":w.toString()),u(w<=0?0:w)};function v(w){u(Number.parseInt(isNaN(Number.parseInt(w))?0:w))}return h.jsxs(dO,{onSubmit:c,children:[h.jsx(hO,{children:n("editModal.Edit the entered amount of water")}),h.jsxs(wO,{children:[h.jsx(vO,{}),h.jsxs(xO,{children:[a.waterAmount,n("ml")]}),h.jsxs(OO,{children:[" ",Ie(a.date).subtract(2,"hours").format("HH:mm")]})]}),h.jsx(mO,{children:n("editModal.Correct entered data")}),h.jsxs(CO,{children:[n("addModal.Amount of water"),":"]}),h.jsxs(gO,{children:[h.jsx("button",{onClick:y,name:"minus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-minus`})})}),h.jsxs("span",{className:"water-amount-value",children:[p,n("ml")]}),h.jsx("button",{onClick:g,name:"plus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-plus`})})})]}),h.jsxs(yO,{children:[h.jsxs("label",{children:[n("addModal.Recording time"),":",h.jsx(PO,{defaultValue:Ie(l,"HH:mm"),showSecond:!1,minuteStep:5,onChange:w=>{m("date",w&&w.format("HH:mm"))}}),d.date?h.jsx("div",{children:d.date}):null]}),h.jsxs("label",{children:[n("addModal.Enter the value of the water used"),":",h.jsx("input",{name:"number",value:s,onBlur:b,onChange:({target:{value:w}})=>v(w)}),d.waterAmount?h.jsx("div",{children:d.waterAmount}):null]}),h.jsxs(bO,{children:[h.jsxs("p",{children:[p,n("ml")]}),h.jsx("button",{disabled:Object.keys(d).length>0,type:"submit",children:n("save")})]})]})]})},EO=_.button`
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
`;function TO({id:e}){const[t,n]=C.useState(!1);function r(){n(!0)}return h.jsxs(h.Fragment,{children:[h.jsx(EO,{onClick:r,children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-edit`})})}),t&&h.jsx(An,{onClose:()=>n(!1),children:h.jsx(SO,{id:e,onClose:()=>n(!1)})})]})}const _O=_.div`
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
`,MO=_.ul`
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
`,$O=_.li`
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
`,jO=_.span`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.33;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`,AO=_.span`
  font-size: 12px;
  line-height: 2;
  color: ${e=>e.theme.colors.textColor};
`,DO=_.div`
  margin-left: auto;
  margin-right: 4px;

  button:first-child {
    margin-right: 18px;
  }
`,kO=_.button`
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
`,NO=()=>{const e=ne(Hi),[t,n]=C.useState(!1),[r,o]=C.useState(!1),{t:i}=xe(),a=c=>{o(!0),n(!1),c.stopPropagation()},s=()=>{o(!1)},u=[...e].sort((c,l)=>{const p=new Date(c.date);return new Date(l.date)-p});return h.jsxs(_O,{children:[u.length>0&&h.jsx(MO,{children:u==null?void 0:u.map(c=>h.jsxs($O,{children:[h.jsx(ff,{className:"glass"}),h.jsxs(jO,{children:[`${c.waterAmount} ${i("ml")}`," "]}),h.jsx(AO,{children:lf(c.date)}),h.jsxs(DO,{children:[h.jsx(TO,{id:c._id}),h.jsx(pO,{id:c._id})]})]},c._id))}),h.jsxs(kO,{onClick:c=>a(c),children:[h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-plus`})}),i("addWater")]}),r&&h.jsx(An,{$position:"center",open:r,onClose:s,children:h.jsx(ef,{onClose:s,isEditing:t})})]})},RO=_.div`
  margin-bottom: 24px;
`,IO=_.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,LO=_.p`
font-size: 18px;
 color: ${e=>e.theme.colors.secondaryBlue};
 margin-bottom: 16px;
`,WO=()=>{const e=Kt(),t=ne(Hi),[n,r]=C.useState(!1),{t:o}=xe();return C.useEffect(()=>{e(kf())},[e]),C.useEffect(()=>{t.length===0?r(!0):r(!1)},[t]),h.jsxs(RO,{children:[h.jsx(IO,{children:o("today")}),n&&h.jsx(LO,{children:"No notes yet"}),h.jsx(NO,{})]})},FO=_.div`
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
`,BO=()=>h.jsxs(FO,{children:[h.jsx(WO,{}),h.jsx(uO,{})]}),HO=_(Nf)`
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
`,VO=_.div`
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
`,zO=_.div`
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
  }
`,UO=_.div`
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
`,qO=()=>h.jsx(UO,{id:"beckground",children:h.jsxs(HO,{children:[h.jsxs(VO,{children:[h.jsx(u2,{}),h.jsx(Xx,{})]}),h.jsx(zO,{children:h.jsx(BO,{})})]})});export{qO as default};
