import{g as Xt,r as C,b as pf,_ as Ai,o as Aa,j as h,P as df,c as Ht,d as Da,e as ka,f as hf,h as mf,i as vf,k as gf,l as yf,R as we,m as j,n as pr,p as Ie,q as ic,u as _,t as Kt,v as ne,a as xe,w as bf,s as Me,B as ac,x as Er,M as An,y as sc,z as Na,C as uc,D as cc,E as wf,F as Ra,G as Ia,H as La,I as xf,J as Of,K as lc,N as Cf,O as Pf,Q as Sf,S as Ef,T as Wa,U as Tf,V as _f,W as Mf,X as $f,Y as jf,Z as Af,A as Df}from"./index-adffbc5e.js";var fc={exports:{}},kf="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Nf=kf,Rf=Nf;function pc(){}function dc(){}dc.resetWarningCache=pc;var If=function(){function e(r,o,i,a,s,u){if(u!==Rf){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:dc,resetWarningCache:pc};return n.PropTypes=n,n};fc.exports=If();var Lf=fc.exports;const f=Xt(Lf),Wf={disableDefaultClasses:!1},Ff=C.createContext(Wf);function Bf(e){const{disableDefaultClasses:t}=C.useContext(Ff);return n=>t?"":e(n)}const hc="base";function Hf(e){return`${hc}--${e}`}function Vf(e,t){return`${hc}-${e}-${t}`}function mc(e,t){const n=pf[t];return n?Hf(n):Vf(e,t)}function zf(e,t){const n={};return t.forEach(r=>{n[r]=mc(e,r)}),n}var ie="top",ge="bottom",ye="right",ae="left",Di="auto",Dn=[ie,ge,ye,ae],Vt="start",Cn="end",Uf="clippingParents",vc="viewport",un="popper",Yf="reference",Fa=Dn.reduce(function(e,t){return e.concat([t+"-"+Vt,t+"-"+Cn])},[]),gc=[].concat(Dn,[Di]).reduce(function(e,t){return e.concat([t,t+"-"+Vt,t+"-"+Cn])},[]),Gf="beforeRead",qf="read",Xf="afterRead",Kf="beforeMain",Zf="main",Qf="afterMain",Jf="beforeWrite",ep="write",tp="afterWrite",np=[Gf,qf,Xf,Kf,Zf,Qf,Jf,ep,tp];function $e(e){return e?(e.nodeName||"").toLowerCase():null}function le(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function mt(e){var t=le(e).Element;return e instanceof t||e instanceof Element}function ve(e){var t=le(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ki(e){if(typeof ShadowRoot>"u")return!1;var t=le(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function rp(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!ve(i)||!$e(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function op(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(u,c){return u[c]="",u},{});!ve(o)||!$e(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(u){o.removeAttribute(u)}))})}}const ip={name:"applyStyles",enabled:!0,phase:"write",fn:rp,effect:op,requires:["computeStyles"]};function _e(e){return e.split("-")[0]}var dt=Math.max,gr=Math.min,zt=Math.round;function zo(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function yc(){return!/^((?!chrome|android).)*safari/i.test(zo())}function Ut(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&ve(e)&&(o=e.offsetWidth>0&&zt(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&zt(r.height)/e.offsetHeight||1);var a=mt(e)?le(e):window,s=a.visualViewport,u=!yc()&&n,c=(r.left+(u&&s?s.offsetLeft:0))/o,l=(r.top+(u&&s?s.offsetTop:0))/i,p=r.width/o,d=r.height/i;return{width:p,height:d,top:l,right:c+p,bottom:l+d,left:c,x:c,y:l}}function Ni(e){var t=Ut(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function bc(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&ki(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Le(e){return le(e).getComputedStyle(e)}function ap(e){return["table","td","th"].indexOf($e(e))>=0}function Ze(e){return((mt(e)?e.ownerDocument:e.document)||window.document).documentElement}function Tr(e){return $e(e)==="html"?e:e.assignedSlot||e.parentNode||(ki(e)?e.host:null)||Ze(e)}function Ba(e){return!ve(e)||Le(e).position==="fixed"?null:e.offsetParent}function sp(e){var t=/firefox/i.test(zo()),n=/Trident/i.test(zo());if(n&&ve(e)){var r=Le(e);if(r.position==="fixed")return null}var o=Tr(e);for(ki(o)&&(o=o.host);ve(o)&&["html","body"].indexOf($e(o))<0;){var i=Le(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function kn(e){for(var t=le(e),n=Ba(e);n&&ap(n)&&Le(n).position==="static";)n=Ba(n);return n&&($e(n)==="html"||$e(n)==="body"&&Le(n).position==="static")?t:n||sp(e)||t}function Ri(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function yn(e,t,n){return dt(e,gr(t,n))}function up(e,t,n){var r=yn(e,t,n);return r>n?n:r}function wc(){return{top:0,right:0,bottom:0,left:0}}function xc(e){return Object.assign({},wc(),e)}function Oc(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var cp=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,xc(typeof t!="number"?t:Oc(t,Dn))};function lp(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=_e(n.placement),u=Ri(s),c=[ae,ye].indexOf(s)>=0,l=c?"height":"width";if(!(!i||!a)){var p=cp(o.padding,n),d=Ni(i),m=u==="y"?ie:ae,b=u==="y"?ge:ye,g=n.rects.reference[l]+n.rects.reference[u]-a[u]-n.rects.popper[l],y=a[u]-n.rects.reference[u],v=kn(i),w=v?u==="y"?v.clientHeight||0:v.clientWidth||0:0,O=g/2-y/2,S=p[m],T=w-d[l]-p[b],P=w/2-d[l]/2+O,E=yn(S,P,T),D=u;n.modifiersData[r]=(t={},t[D]=E,t.centerOffset=E-P,t)}}function fp(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||bc(t.elements.popper,o)&&(t.elements.arrow=o))}const pp={name:"arrow",enabled:!0,phase:"main",fn:lp,effect:fp,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Yt(e){return e.split("-")[1]}var dp={top:"auto",right:"auto",bottom:"auto",left:"auto"};function hp(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:zt(n*o)/o||0,y:zt(r*o)/o||0}}function Ha(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,u=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,p=e.isFixed,d=a.x,m=d===void 0?0:d,b=a.y,g=b===void 0?0:b,y=typeof l=="function"?l({x:m,y:g}):{x:m,y:g};m=y.x,g=y.y;var v=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),O=ae,S=ie,T=window;if(c){var P=kn(n),E="clientHeight",D="clientWidth";if(P===le(n)&&(P=Ze(n),Le(P).position!=="static"&&s==="absolute"&&(E="scrollHeight",D="scrollWidth")),P=P,o===ie||(o===ae||o===ye)&&i===Cn){S=ge;var k=p&&P===T&&T.visualViewport?T.visualViewport.height:P[E];g-=k-r.height,g*=u?1:-1}if(o===ae||(o===ie||o===ge)&&i===Cn){O=ye;var R=p&&P===T&&T.visualViewport?T.visualViewport.width:P[D];m-=R-r.width,m*=u?1:-1}}var F=Object.assign({position:s},c&&dp),X=l===!0?hp({x:m,y:g},le(n)):{x:m,y:g};if(m=X.x,g=X.y,u){var L;return Object.assign({},F,(L={},L[S]=w?"0":"",L[O]=v?"0":"",L.transform=(T.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",L))}return Object.assign({},F,(t={},t[S]=w?g+"px":"",t[O]=v?m+"px":"",t.transform="",t))}function mp(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,u=s===void 0?!0:s,c={placement:_e(t.placement),variation:Yt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ha(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ha(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const vp={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mp,data:{}};var Gn={passive:!0};function gp(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,u=le(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(l){l.addEventListener("scroll",n.update,Gn)}),s&&u.addEventListener("resize",n.update,Gn),function(){i&&c.forEach(function(l){l.removeEventListener("scroll",n.update,Gn)}),s&&u.removeEventListener("resize",n.update,Gn)}}const yp={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gp,data:{}};var bp={left:"right",right:"left",bottom:"top",top:"bottom"};function dr(e){return e.replace(/left|right|bottom|top/g,function(t){return bp[t]})}var wp={start:"end",end:"start"};function Va(e){return e.replace(/start|end/g,function(t){return wp[t]})}function Ii(e){var t=le(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Li(e){return Ut(Ze(e)).left+Ii(e).scrollLeft}function xp(e,t){var n=le(e),r=Ze(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,u=0;if(o){i=o.width,a=o.height;var c=yc();(c||!c&&t==="fixed")&&(s=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:s+Li(e),y:u}}function Op(e){var t,n=Ze(e),r=Ii(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=dt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=dt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Li(e),u=-r.scrollTop;return Le(o||n).direction==="rtl"&&(s+=dt(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:u}}function Wi(e){var t=Le(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Cc(e){return["html","body","#document"].indexOf($e(e))>=0?e.ownerDocument.body:ve(e)&&Wi(e)?e:Cc(Tr(e))}function bn(e,t){var n;t===void 0&&(t=[]);var r=Cc(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=le(r),a=o?[i].concat(i.visualViewport||[],Wi(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(bn(Tr(a)))}function Uo(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Cp(e,t){var n=Ut(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function za(e,t,n){return t===vc?Uo(xp(e,n)):mt(t)?Cp(t,n):Uo(Op(Ze(e)))}function Pp(e){var t=bn(Tr(e)),n=["absolute","fixed"].indexOf(Le(e).position)>=0,r=n&&ve(e)?kn(e):e;return mt(r)?t.filter(function(o){return mt(o)&&bc(o,r)&&$e(o)!=="body"}):[]}function Sp(e,t,n,r){var o=t==="clippingParents"?Pp(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(u,c){var l=za(e,c,r);return u.top=dt(l.top,u.top),u.right=gr(l.right,u.right),u.bottom=gr(l.bottom,u.bottom),u.left=dt(l.left,u.left),u},za(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Pc(e){var t=e.reference,n=e.element,r=e.placement,o=r?_e(r):null,i=r?Yt(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,u;switch(o){case ie:u={x:a,y:t.y-n.height};break;case ge:u={x:a,y:t.y+t.height};break;case ye:u={x:t.x+t.width,y:s};break;case ae:u={x:t.x-n.width,y:s};break;default:u={x:t.x,y:t.y}}var c=o?Ri(o):null;if(c!=null){var l=c==="y"?"height":"width";switch(i){case Vt:u[c]=u[c]-(t[l]/2-n[l]/2);break;case Cn:u[c]=u[c]+(t[l]/2-n[l]/2);break}}return u}function Pn(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,u=s===void 0?Uf:s,c=n.rootBoundary,l=c===void 0?vc:c,p=n.elementContext,d=p===void 0?un:p,m=n.altBoundary,b=m===void 0?!1:m,g=n.padding,y=g===void 0?0:g,v=xc(typeof y!="number"?y:Oc(y,Dn)),w=d===un?Yf:un,O=e.rects.popper,S=e.elements[b?w:d],T=Sp(mt(S)?S:S.contextElement||Ze(e.elements.popper),u,l,a),P=Ut(e.elements.reference),E=Pc({reference:P,element:O,strategy:"absolute",placement:o}),D=Uo(Object.assign({},O,E)),k=d===un?D:P,R={top:T.top-k.top+v.top,bottom:k.bottom-T.bottom+v.bottom,left:T.left-k.left+v.left,right:k.right-T.right+v.right},F=e.modifiersData.offset;if(d===un&&F){var X=F[o];Object.keys(R).forEach(function(L){var K=[ye,ge].indexOf(L)>=0?1:-1,re=[ie,ge].indexOf(L)>=0?"y":"x";R[L]+=X[re]*K})}return R}function Ep(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,c=u===void 0?gc:u,l=Yt(r),p=l?s?Fa:Fa.filter(function(b){return Yt(b)===l}):Dn,d=p.filter(function(b){return c.indexOf(b)>=0});d.length===0&&(d=p);var m=d.reduce(function(b,g){return b[g]=Pn(e,{placement:g,boundary:o,rootBoundary:i,padding:a})[_e(g)],b},{});return Object.keys(m).sort(function(b,g){return m[b]-m[g]})}function Tp(e){if(_e(e)===Di)return[];var t=dr(e);return[Va(e),t,Va(t)]}function _p(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,u=n.fallbackPlacements,c=n.padding,l=n.boundary,p=n.rootBoundary,d=n.altBoundary,m=n.flipVariations,b=m===void 0?!0:m,g=n.allowedAutoPlacements,y=t.options.placement,v=_e(y),w=v===y,O=u||(w||!b?[dr(y)]:Tp(y)),S=[y].concat(O).reduce(function(Oe,ee){return Oe.concat(_e(ee)===Di?Ep(t,{placement:ee,boundary:l,rootBoundary:p,padding:c,flipVariations:b,allowedAutoPlacements:g}):ee)},[]),T=t.rects.reference,P=t.rects.popper,E=new Map,D=!0,k=S[0],R=0;R<S.length;R++){var F=S[R],X=_e(F),L=Yt(F)===Vt,K=[ie,ge].indexOf(X)>=0,re=K?"width":"height",V=Pn(t,{placement:F,boundary:l,rootBoundary:p,altBoundary:d,padding:c}),Y=K?L?ye:ae:L?ge:ie;T[re]>P[re]&&(Y=dr(Y));var J=dr(Y),ue=[];if(i&&ue.push(V[X]<=0),s&&ue.push(V[Y]<=0,V[J]<=0),ue.every(function(Oe){return Oe})){k=F,D=!1;break}E.set(F,ue)}if(D)for(var nt=b?3:1,Be=function(ee){var He=S.find(function(Ve){var Ce=E.get(Ve);if(Ce)return Ce.slice(0,ee).every(function(Mt){return Mt})});if(He)return k=He,"break"},pe=nt;pe>0;pe--){var rt=Be(pe);if(rt==="break")break}t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}}const Mp={name:"flip",enabled:!0,phase:"main",fn:_p,requiresIfExists:["offset"],data:{_skip:!1}};function Ua(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ya(e){return[ie,ye,ge,ae].some(function(t){return e[t]>=0})}function $p(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Pn(t,{elementContext:"reference"}),s=Pn(t,{altBoundary:!0}),u=Ua(a,r),c=Ua(s,o,i),l=Ya(u),p=Ya(c);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":p})}const jp={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$p};function Ap(e,t,n){var r=_e(e),o=[ae,ie].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[ae,ye].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function Dp(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=gc.reduce(function(l,p){return l[p]=Ap(p,t.rects,i),l},{}),s=a[t.placement],u=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}const kp={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Dp};function Np(e){var t=e.state,n=e.name;t.modifiersData[n]=Pc({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Rp={name:"popperOffsets",enabled:!0,phase:"read",fn:Np,data:{}};function Ip(e){return e==="x"?"y":"x"}function Lp(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,u=n.boundary,c=n.rootBoundary,l=n.altBoundary,p=n.padding,d=n.tether,m=d===void 0?!0:d,b=n.tetherOffset,g=b===void 0?0:b,y=Pn(t,{boundary:u,rootBoundary:c,padding:p,altBoundary:l}),v=_e(t.placement),w=Yt(t.placement),O=!w,S=Ri(v),T=Ip(S),P=t.modifiersData.popperOffsets,E=t.rects.reference,D=t.rects.popper,k=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,R=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),F=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,X={x:0,y:0};if(P){if(i){var L,K=S==="y"?ie:ae,re=S==="y"?ge:ye,V=S==="y"?"height":"width",Y=P[S],J=Y+y[K],ue=Y-y[re],nt=m?-D[V]/2:0,Be=w===Vt?E[V]:D[V],pe=w===Vt?-D[V]:-E[V],rt=t.elements.arrow,Oe=m&&rt?Ni(rt):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:wc(),He=ee[K],Ve=ee[re],Ce=yn(0,E[V],Oe[V]),Mt=O?E[V]/2-nt-Ce-He-R.mainAxis:Be-Ce-He-R.mainAxis,zn=O?-E[V]/2+nt+Ce+Ve+R.mainAxis:pe+Ce+Ve+R.mainAxis,ot=t.elements.arrow&&kn(t.elements.arrow),Qr=ot?S==="y"?ot.clientTop||0:ot.clientLeft||0:0,an=(L=F==null?void 0:F[S])!=null?L:0,Jr=Y+Mt-an-Qr,eo=Y+zn-an,Un=yn(m?gr(J,Jr):J,Y,m?dt(ue,eo):ue);P[S]=Un,X[S]=Un-Y}if(s){var Yn,to=S==="x"?ie:ae,sn=S==="x"?ge:ye,Ae=P[T],$t=T==="y"?"height":"width",x=Ae+y[to],M=Ae-y[sn],$=[ie,ae].indexOf(v)!==-1,A=(Yn=F==null?void 0:F[T])!=null?Yn:0,I=$?x:Ae-E[$t]-D[$t]-A+R.altAxis,W=$?Ae+E[$t]+D[$t]-A-R.altAxis:M,U=m&&$?up(I,Ae,W):yn(m?I:x,Ae,m?W:M);P[T]=U,X[T]=U-Ae}t.modifiersData[r]=X}}const Wp={name:"preventOverflow",enabled:!0,phase:"main",fn:Lp,requiresIfExists:["offset"]};function Fp(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Bp(e){return e===le(e)||!ve(e)?Ii(e):Fp(e)}function Hp(e){var t=e.getBoundingClientRect(),n=zt(t.width)/e.offsetWidth||1,r=zt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Vp(e,t,n){n===void 0&&(n=!1);var r=ve(t),o=ve(t)&&Hp(t),i=Ze(t),a=Ut(e,o,n),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!n)&&(($e(t)!=="body"||Wi(i))&&(s=Bp(t)),ve(t)?(u=Ut(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=Li(i))),{x:a.left+s.scrollLeft-u.x,y:a.top+s.scrollTop-u.y,width:a.width,height:a.height}}function zp(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var u=t.get(s);u&&o(u)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function Up(e){var t=zp(e);return np.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Yp(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Gp(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Ga={placement:"bottom",modifiers:[],strategy:"absolute"};function qa(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function qp(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?Ga:o;return function(s,u,c){c===void 0&&(c=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ga,i),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},p=[],d=!1,m={state:l,setOptions:function(v){var w=typeof v=="function"?v(l.options):v;g(),l.options=Object.assign({},i,l.options,w),l.scrollParents={reference:mt(s)?bn(s):s.contextElement?bn(s.contextElement):[],popper:bn(u)};var O=Up(Gp([].concat(r,l.options.modifiers)));return l.orderedModifiers=O.filter(function(S){return S.enabled}),b(),m.update()},forceUpdate:function(){if(!d){var v=l.elements,w=v.reference,O=v.popper;if(qa(w,O)){l.rects={reference:Vp(w,kn(O),l.options.strategy==="fixed"),popper:Ni(O)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var S=0;S<l.orderedModifiers.length;S++){if(l.reset===!0){l.reset=!1,S=-1;continue}var T=l.orderedModifiers[S],P=T.fn,E=T.options,D=E===void 0?{}:E,k=T.name;typeof P=="function"&&(l=P({state:l,options:D,name:k,instance:m})||l)}}}},update:Yp(function(){return new Promise(function(y){m.forceUpdate(),y(l)})}),destroy:function(){g(),d=!0}};if(!qa(s,u))return m;m.setOptions(c).then(function(y){!d&&c.onFirstUpdate&&c.onFirstUpdate(y)});function b(){l.orderedModifiers.forEach(function(y){var v=y.name,w=y.options,O=w===void 0?{}:w,S=y.effect;if(typeof S=="function"){var T=S({state:l,name:v,instance:m,options:O}),P=function(){};p.push(T||P)}})}function g(){p.forEach(function(y){return y()}),p=[]}return m}}var Xp=[yp,Rp,vp,ip,kp,Mp,Wp,pp,jp],Kp=qp({defaultModifiers:Xp});const Sc="Popper";function Zp(e){return mc(Sc,e)}zf(Sc,["root"]);const Qp=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Jp=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function ed(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Yo(e){return typeof e=="function"?e():e}function td(e){return e.nodeType!==void 0}const nd=()=>mf({root:["root"]},Bf(Zp)),rd={},od=C.forwardRef(function(t,n){var r;const{anchorEl:o,children:i,direction:a,disablePortal:s,modifiers:u,open:c,placement:l,popperOptions:p,popperRef:d,slotProps:m={},slots:b={},TransitionProps:g}=t,y=Ai(t,Qp),v=C.useRef(null),w=Da(v,n),O=C.useRef(null),S=Da(O,d),T=C.useRef(S);ka(()=>{T.current=S},[S]),C.useImperativeHandle(d,()=>O.current,[]);const P=ed(l,a),[E,D]=C.useState(P),[k,R]=C.useState(Yo(o));C.useEffect(()=>{O.current&&O.current.forceUpdate()}),C.useEffect(()=>{o&&R(Yo(o))},[o]),ka(()=>{if(!k||!c)return;const re=J=>{D(J.placement)};let V=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:J})=>{re(J)}}];u!=null&&(V=V.concat(u)),p&&p.modifiers!=null&&(V=V.concat(p.modifiers));const Y=Kp(k,v.current,Ht({placement:P},p,{modifiers:V}));return T.current(Y),()=>{Y.destroy(),T.current(null)}},[k,s,u,c,p,P]);const F={placement:E};g!==null&&(F.TransitionProps=g);const X=nd(),L=(r=b.root)!=null?r:"div",K=hf({elementType:L,externalSlotProps:m.root,externalForwardedProps:y,additionalProps:{role:"tooltip",ref:w},ownerState:t,className:X.root});return h.jsx(L,Ht({},K,{children:typeof i=="function"?i(F):i}))}),id=C.forwardRef(function(t,n){const{anchorEl:r,children:o,container:i,direction:a="ltr",disablePortal:s=!1,keepMounted:u=!1,modifiers:c,open:l,placement:p="bottom",popperOptions:d=rd,popperRef:m,style:b,transition:g=!1,slotProps:y={},slots:v={}}=t,w=Ai(t,Jp),[O,S]=C.useState(!0),T=()=>{S(!1)},P=()=>{S(!0)};if(!u&&!l&&(!g||O))return null;let E;if(i)E=i;else if(r){const R=Yo(r);E=R&&td(R)?Aa(R).body:Aa(null).body}const D=!l&&u&&(!g||O)?"none":void 0,k=g?{in:l,onEnter:T,onExited:P}:void 0;return h.jsx(df,{disablePortal:s,container:E,children:h.jsx(od,Ht({anchorEl:r,direction:a,disablePortal:s,modifiers:c,ref:n,open:g?!O:l,placement:p,popperOptions:d,popperRef:m,slotProps:y,slots:v},w,{style:Ht({position:"fixed",top:0,left:0,display:D},b),TransitionProps:k,children:o}))})});var Fi={};Object.defineProperty(Fi,"__esModule",{value:!0});var Ec=Fi.default=void 0,ad=ud(C),sd=vf;function Tc(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Tc=function(r){return r?n:t})(e)}function ud(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Tc(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function cd(e){return Object.keys(e).length===0}function ld(e=null){const t=ad.useContext(sd.ThemeContext);return!t||cd(t)?e:t}Ec=Fi.default=ld;const fd=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],pd=gf(id,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),dd=C.forwardRef(function(t,n){var r;const o=Ec(),i=yf({props:t,name:"MuiPopper"}),{anchorEl:a,component:s,components:u,componentsProps:c,container:l,disablePortal:p,keepMounted:d,modifiers:m,open:b,placement:g,popperOptions:y,popperRef:v,transition:w,slots:O,slotProps:S}=i,T=Ai(i,fd),P=(r=O==null?void 0:O.root)!=null?r:u==null?void 0:u.Root,E=Ht({anchorEl:a,container:l,disablePortal:p,keepMounted:d,modifiers:m,open:b,placement:g,popperOptions:y,popperRef:v,transition:w},T);return h.jsx(pd,Ht({as:s,direction:o==null?void 0:o.direction,slots:{root:P},slotProps:S??c},E,{ref:n}))}),hd=dd,Bi=e=>e.water.waterVolumes,md=e=>e.water.waterVolumeSum,vd=e=>e.water.stats,_r=e=>e.water.selectedCalendar;var gd=function(t){return yd(t)&&!bd(t)};function yd(e){return!!e&&typeof e=="object"}function bd(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Od(e)}var wd=typeof Symbol=="function"&&Symbol.for,xd=wd?Symbol.for("react.element"):60103;function Od(e){return e.$$typeof===xd}function Cd(e){return Array.isArray(e)?[]:{}}function yr(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Sn(Cd(e),e,t):e}function Pd(e,t,n){return e.concat(t).map(function(r){return yr(r,n)})}function Sd(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(o){r[o]=yr(e[o],n)}),Object.keys(t).forEach(function(o){!n.isMergeableObject(t[o])||!e[o]?r[o]=yr(t[o],n):r[o]=Sn(e[o],t[o],n)}),r}function Sn(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||Pd,n.isMergeableObject=n.isMergeableObject||gd;var r=Array.isArray(t),o=Array.isArray(e),i=r===o;return i?r?n.arrayMerge(e,t,n):Sd(e,t,n):yr(t,n)}Sn.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,o){return Sn(r,o,n)},{})};var Go=Sn,Ed=typeof global=="object"&&global&&global.Object===Object&&global;const _c=Ed;var Td=typeof self=="object"&&self&&self.Object===Object&&self,_d=_c||Td||Function("return this")();const je=_d;var Md=je.Symbol;const qe=Md;var Mc=Object.prototype,$d=Mc.hasOwnProperty,jd=Mc.toString,cn=qe?qe.toStringTag:void 0;function Ad(e){var t=$d.call(e,cn),n=e[cn];try{e[cn]=void 0;var r=!0}catch{}var o=jd.call(e);return r&&(t?e[cn]=n:delete e[cn]),o}var Dd=Object.prototype,kd=Dd.toString;function Nd(e){return kd.call(e)}var Rd="[object Null]",Id="[object Undefined]",Xa=qe?qe.toStringTag:void 0;function xt(e){return e==null?e===void 0?Id:Rd:Xa&&Xa in Object(e)?Ad(e):Nd(e)}function $c(e,t){return function(n){return e(t(n))}}var Ld=$c(Object.getPrototypeOf,Object);const Hi=Ld;function Ot(e){return e!=null&&typeof e=="object"}var Wd="[object Object]",Fd=Function.prototype,Bd=Object.prototype,jc=Fd.toString,Hd=Bd.hasOwnProperty,Vd=jc.call(Object);function Ka(e){if(!Ot(e)||xt(e)!=Wd)return!1;var t=Hi(e);if(t===null)return!0;var n=Hd.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&jc.call(n)==Vd}var Za=Array.isArray,Qa=Object.keys,zd=Object.prototype.hasOwnProperty,Ud=typeof Element<"u";function qo(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Za(e),r=Za(t),o,i,a;if(n&&r){if(i=e.length,i!=t.length)return!1;for(o=i;o--!==0;)if(!qo(e[o],t[o]))return!1;return!0}if(n!=r)return!1;var s=e instanceof Date,u=t instanceof Date;if(s!=u)return!1;if(s&&u)return e.getTime()==t.getTime();var c=e instanceof RegExp,l=t instanceof RegExp;if(c!=l)return!1;if(c&&l)return e.toString()==t.toString();var p=Qa(e);if(i=p.length,i!==Qa(t).length)return!1;for(o=i;o--!==0;)if(!zd.call(t,p[o]))return!1;if(Ud&&e instanceof Element&&t instanceof Element)return e===t;for(o=i;o--!==0;)if(a=p[o],!(a==="_owner"&&e.$$typeof)&&!qo(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var Yd=function(t,n){try{return qo(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const ct=Xt(Yd);var Gd=!0;function qd(e,t){if(!Gd){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function Xd(){this.__data__=[],this.size=0}function Ac(e,t){return e===t||e!==e&&t!==t}function Mr(e,t){for(var n=e.length;n--;)if(Ac(e[n][0],t))return n;return-1}var Kd=Array.prototype,Zd=Kd.splice;function Qd(e){var t=this.__data__,n=Mr(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Zd.call(t,n,1),--this.size,!0}function Jd(e){var t=this.__data__,n=Mr(t,e);return n<0?void 0:t[n][1]}function eh(e){return Mr(this.__data__,e)>-1}function th(e,t){var n=this.__data__,r=Mr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Fe(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fe.prototype.clear=Xd;Fe.prototype.delete=Qd;Fe.prototype.get=Jd;Fe.prototype.has=eh;Fe.prototype.set=th;function nh(){this.__data__=new Fe,this.size=0}function rh(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function oh(e){return this.__data__.get(e)}function ih(e){return this.__data__.has(e)}function Nn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ah="[object AsyncFunction]",sh="[object Function]",uh="[object GeneratorFunction]",ch="[object Proxy]";function Dc(e){if(!Nn(e))return!1;var t=xt(e);return t==sh||t==uh||t==ah||t==ch}var lh=je["__core-js_shared__"];const oo=lh;var Ja=function(){var e=/[^.]+$/.exec(oo&&oo.keys&&oo.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function fh(e){return!!Ja&&Ja in e}var ph=Function.prototype,dh=ph.toString;function Ct(e){if(e!=null){try{return dh.call(e)}catch{}try{return e+""}catch{}}return""}var hh=/[\\^$.*+?()[\]{}|]/g,mh=/^\[object .+?Constructor\]$/,vh=Function.prototype,gh=Object.prototype,yh=vh.toString,bh=gh.hasOwnProperty,wh=RegExp("^"+yh.call(bh).replace(hh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function xh(e){if(!Nn(e)||fh(e))return!1;var t=Dc(e)?wh:mh;return t.test(Ct(e))}function Oh(e,t){return e==null?void 0:e[t]}function Pt(e,t){var n=Oh(e,t);return xh(n)?n:void 0}var Ch=Pt(je,"Map");const En=Ch;var Ph=Pt(Object,"create");const Tn=Ph;function Sh(){this.__data__=Tn?Tn(null):{},this.size=0}function Eh(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Th="__lodash_hash_undefined__",_h=Object.prototype,Mh=_h.hasOwnProperty;function $h(e){var t=this.__data__;if(Tn){var n=t[e];return n===Th?void 0:n}return Mh.call(t,e)?t[e]:void 0}var jh=Object.prototype,Ah=jh.hasOwnProperty;function Dh(e){var t=this.__data__;return Tn?t[e]!==void 0:Ah.call(t,e)}var kh="__lodash_hash_undefined__";function Nh(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Tn&&t===void 0?kh:t,this}function vt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vt.prototype.clear=Sh;vt.prototype.delete=Eh;vt.prototype.get=$h;vt.prototype.has=Dh;vt.prototype.set=Nh;function Rh(){this.size=0,this.__data__={hash:new vt,map:new(En||Fe),string:new vt}}function Ih(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function $r(e,t){var n=e.__data__;return Ih(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Lh(e){var t=$r(this,e).delete(e);return this.size-=t?1:0,t}function Wh(e){return $r(this,e).get(e)}function Fh(e){return $r(this,e).has(e)}function Bh(e,t){var n=$r(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Qe(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Rh;Qe.prototype.delete=Lh;Qe.prototype.get=Wh;Qe.prototype.has=Fh;Qe.prototype.set=Bh;var Hh=200;function Vh(e,t){var n=this.__data__;if(n instanceof Fe){var r=n.__data__;if(!En||r.length<Hh-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Qe(r)}return n.set(e,t),this.size=n.size,this}function Zt(e){var t=this.__data__=new Fe(e);this.size=t.size}Zt.prototype.clear=nh;Zt.prototype.delete=rh;Zt.prototype.get=oh;Zt.prototype.has=ih;Zt.prototype.set=Vh;function zh(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Uh=function(){try{var e=Pt(Object,"defineProperty");return e({},"",{}),e}catch{}}();const es=Uh;function kc(e,t,n){t=="__proto__"&&es?es(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Yh=Object.prototype,Gh=Yh.hasOwnProperty;function Nc(e,t,n){var r=e[t];(!(Gh.call(e,t)&&Ac(r,n))||n===void 0&&!(t in e))&&kc(e,t,n)}function jr(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var s=t[i],u=r?r(n[s],e[s],s,n,e):void 0;u===void 0&&(u=e[s]),o?kc(n,s,u):Nc(n,s,u)}return n}function qh(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Xh="[object Arguments]";function ts(e){return Ot(e)&&xt(e)==Xh}var Rc=Object.prototype,Kh=Rc.hasOwnProperty,Zh=Rc.propertyIsEnumerable,Qh=ts(function(){return arguments}())?ts:function(e){return Ot(e)&&Kh.call(e,"callee")&&!Zh.call(e,"callee")};const Jh=Qh;var em=Array.isArray;const Rn=em;function tm(){return!1}var Ic=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ns=Ic&&typeof module=="object"&&module&&!module.nodeType&&module,nm=ns&&ns.exports===Ic,rs=nm?je.Buffer:void 0,rm=rs?rs.isBuffer:void 0,om=rm||tm;const Lc=om;var im=9007199254740991,am=/^(?:0|[1-9]\d*)$/;function sm(e,t){var n=typeof e;return t=t??im,!!t&&(n=="number"||n!="symbol"&&am.test(e))&&e>-1&&e%1==0&&e<t}var um=9007199254740991;function Wc(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=um}var cm="[object Arguments]",lm="[object Array]",fm="[object Boolean]",pm="[object Date]",dm="[object Error]",hm="[object Function]",mm="[object Map]",vm="[object Number]",gm="[object Object]",ym="[object RegExp]",bm="[object Set]",wm="[object String]",xm="[object WeakMap]",Om="[object ArrayBuffer]",Cm="[object DataView]",Pm="[object Float32Array]",Sm="[object Float64Array]",Em="[object Int8Array]",Tm="[object Int16Array]",_m="[object Int32Array]",Mm="[object Uint8Array]",$m="[object Uint8ClampedArray]",jm="[object Uint16Array]",Am="[object Uint32Array]",z={};z[Pm]=z[Sm]=z[Em]=z[Tm]=z[_m]=z[Mm]=z[$m]=z[jm]=z[Am]=!0;z[cm]=z[lm]=z[Om]=z[fm]=z[Cm]=z[pm]=z[dm]=z[hm]=z[mm]=z[vm]=z[gm]=z[ym]=z[bm]=z[wm]=z[xm]=!1;function Dm(e){return Ot(e)&&Wc(e.length)&&!!z[xt(e)]}function Vi(e){return function(t){return e(t)}}var Fc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wn=Fc&&typeof module=="object"&&module&&!module.nodeType&&module,km=wn&&wn.exports===Fc,io=km&&_c.process,Nm=function(){try{var e=wn&&wn.require&&wn.require("util").types;return e||io&&io.binding&&io.binding("util")}catch{}}();const Gt=Nm;var os=Gt&&Gt.isTypedArray,Rm=os?Vi(os):Dm;const Im=Rm;var Lm=Object.prototype,Wm=Lm.hasOwnProperty;function Bc(e,t){var n=Rn(e),r=!n&&Jh(e),o=!n&&!r&&Lc(e),i=!n&&!r&&!o&&Im(e),a=n||r||o||i,s=a?qh(e.length,String):[],u=s.length;for(var c in e)(t||Wm.call(e,c))&&!(a&&(c=="length"||o&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||sm(c,u)))&&s.push(c);return s}var Fm=Object.prototype;function zi(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Fm;return e===n}var Bm=$c(Object.keys,Object);const Hm=Bm;var Vm=Object.prototype,zm=Vm.hasOwnProperty;function Um(e){if(!zi(e))return Hm(e);var t=[];for(var n in Object(e))zm.call(e,n)&&n!="constructor"&&t.push(n);return t}function Hc(e){return e!=null&&Wc(e.length)&&!Dc(e)}function Ui(e){return Hc(e)?Bc(e):Um(e)}function Ym(e,t){return e&&jr(t,Ui(t),e)}function Gm(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var qm=Object.prototype,Xm=qm.hasOwnProperty;function Km(e){if(!Nn(e))return Gm(e);var t=zi(e),n=[];for(var r in e)r=="constructor"&&(t||!Xm.call(e,r))||n.push(r);return n}function Yi(e){return Hc(e)?Bc(e,!0):Km(e)}function Zm(e,t){return e&&jr(t,Yi(t),e)}var Vc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,is=Vc&&typeof module=="object"&&module&&!module.nodeType&&module,Qm=is&&is.exports===Vc,as=Qm?je.Buffer:void 0,ss=as?as.allocUnsafe:void 0;function Jm(e,t){if(t)return e.slice();var n=e.length,r=ss?ss(n):new e.constructor(n);return e.copy(r),r}function zc(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function ev(e,t){for(var n=-1,r=e==null?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function Uc(){return[]}var tv=Object.prototype,nv=tv.propertyIsEnumerable,us=Object.getOwnPropertySymbols,rv=us?function(e){return e==null?[]:(e=Object(e),ev(us(e),function(t){return nv.call(e,t)}))}:Uc;const Gi=rv;function ov(e,t){return jr(e,Gi(e),t)}function Yc(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}var iv=Object.getOwnPropertySymbols,av=iv?function(e){for(var t=[];e;)Yc(t,Gi(e)),e=Hi(e);return t}:Uc;const Gc=av;function sv(e,t){return jr(e,Gc(e),t)}function qc(e,t,n){var r=t(e);return Rn(e)?r:Yc(r,n(e))}function uv(e){return qc(e,Ui,Gi)}function cv(e){return qc(e,Yi,Gc)}var lv=Pt(je,"DataView");const Xo=lv;var fv=Pt(je,"Promise");const Ko=fv;var pv=Pt(je,"Set");const Zo=pv;var dv=Pt(je,"WeakMap");const Qo=dv;var cs="[object Map]",hv="[object Object]",ls="[object Promise]",fs="[object Set]",ps="[object WeakMap]",ds="[object DataView]",mv=Ct(Xo),vv=Ct(En),gv=Ct(Ko),yv=Ct(Zo),bv=Ct(Qo),lt=xt;(Xo&&lt(new Xo(new ArrayBuffer(1)))!=ds||En&&lt(new En)!=cs||Ko&&lt(Ko.resolve())!=ls||Zo&&lt(new Zo)!=fs||Qo&&lt(new Qo)!=ps)&&(lt=function(e){var t=xt(e),n=t==hv?e.constructor:void 0,r=n?Ct(n):"";if(r)switch(r){case mv:return ds;case vv:return cs;case gv:return ls;case yv:return fs;case bv:return ps}return t});const qi=lt;var wv=Object.prototype,xv=wv.hasOwnProperty;function Ov(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&xv.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var Cv=je.Uint8Array;const hs=Cv;function Xi(e){var t=new e.constructor(e.byteLength);return new hs(t).set(new hs(e)),t}function Pv(e,t){var n=t?Xi(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Sv=/\w*$/;function Ev(e){var t=new e.constructor(e.source,Sv.exec(e));return t.lastIndex=e.lastIndex,t}var ms=qe?qe.prototype:void 0,vs=ms?ms.valueOf:void 0;function Tv(e){return vs?Object(vs.call(e)):{}}function _v(e,t){var n=t?Xi(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Mv="[object Boolean]",$v="[object Date]",jv="[object Map]",Av="[object Number]",Dv="[object RegExp]",kv="[object Set]",Nv="[object String]",Rv="[object Symbol]",Iv="[object ArrayBuffer]",Lv="[object DataView]",Wv="[object Float32Array]",Fv="[object Float64Array]",Bv="[object Int8Array]",Hv="[object Int16Array]",Vv="[object Int32Array]",zv="[object Uint8Array]",Uv="[object Uint8ClampedArray]",Yv="[object Uint16Array]",Gv="[object Uint32Array]";function qv(e,t,n){var r=e.constructor;switch(t){case Iv:return Xi(e);case Mv:case $v:return new r(+e);case Lv:return Pv(e,n);case Wv:case Fv:case Bv:case Hv:case Vv:case zv:case Uv:case Yv:case Gv:return _v(e,n);case jv:return new r;case Av:case Nv:return new r(e);case Dv:return Ev(e);case kv:return new r;case Rv:return Tv(e)}}var gs=Object.create,Xv=function(){function e(){}return function(t){if(!Nn(t))return{};if(gs)return gs(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const Kv=Xv;function Zv(e){return typeof e.constructor=="function"&&!zi(e)?Kv(Hi(e)):{}}var Qv="[object Map]";function Jv(e){return Ot(e)&&qi(e)==Qv}var ys=Gt&&Gt.isMap,eg=ys?Vi(ys):Jv;const tg=eg;var ng="[object Set]";function rg(e){return Ot(e)&&qi(e)==ng}var bs=Gt&&Gt.isSet,og=bs?Vi(bs):rg;const ig=og;var ag=1,sg=2,ug=4,Xc="[object Arguments]",cg="[object Array]",lg="[object Boolean]",fg="[object Date]",pg="[object Error]",Kc="[object Function]",dg="[object GeneratorFunction]",hg="[object Map]",mg="[object Number]",Zc="[object Object]",vg="[object RegExp]",gg="[object Set]",yg="[object String]",bg="[object Symbol]",wg="[object WeakMap]",xg="[object ArrayBuffer]",Og="[object DataView]",Cg="[object Float32Array]",Pg="[object Float64Array]",Sg="[object Int8Array]",Eg="[object Int16Array]",Tg="[object Int32Array]",_g="[object Uint8Array]",Mg="[object Uint8ClampedArray]",$g="[object Uint16Array]",jg="[object Uint32Array]",H={};H[Xc]=H[cg]=H[xg]=H[Og]=H[lg]=H[fg]=H[Cg]=H[Pg]=H[Sg]=H[Eg]=H[Tg]=H[hg]=H[mg]=H[Zc]=H[vg]=H[gg]=H[yg]=H[bg]=H[_g]=H[Mg]=H[$g]=H[jg]=!0;H[pg]=H[Kc]=H[wg]=!1;function hr(e,t,n,r,o,i){var a,s=t&ag,u=t&sg,c=t&ug;if(n&&(a=o?n(e,r,o,i):n(e)),a!==void 0)return a;if(!Nn(e))return e;var l=Rn(e);if(l){if(a=Ov(e),!s)return zc(e,a)}else{var p=qi(e),d=p==Kc||p==dg;if(Lc(e))return Jm(e,s);if(p==Zc||p==Xc||d&&!o){if(a=u||d?{}:Zv(e),!s)return u?sv(e,Zm(a,e)):ov(e,Ym(a,e))}else{if(!H[p])return o?e:{};a=qv(e,p,s)}}i||(i=new Zt);var m=i.get(e);if(m)return m;i.set(e,a),ig(e)?e.forEach(function(y){a.add(hr(y,t,n,y,e,i))}):tg(e)&&e.forEach(function(y,v){a.set(v,hr(y,t,n,v,e,i))});var b=c?u?cv:uv:u?Yi:Ui,g=l?void 0:b(e);return zh(g||e,function(y,v){g&&(v=y,y=e[v]),Nc(a,v,hr(y,t,n,v,e,i))}),a}var Ag=4;function ws(e){return hr(e,Ag)}function Qc(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var Dg="[object Symbol]";function Ki(e){return typeof e=="symbol"||Ot(e)&&xt(e)==Dg}var kg="Expected a function";function Zi(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(kg);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Zi.Cache||Qe),n}Zi.Cache=Qe;var Ng=500;function Rg(e){var t=Zi(e,function(r){return n.size===Ng&&n.clear(),r}),n=t.cache;return t}var Ig=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lg=/\\(\\)?/g,Wg=Rg(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ig,function(n,r,o,i){t.push(o?i.replace(Lg,"$1"):r||n)}),t});const Fg=Wg;var Bg=1/0;function Hg(e){if(typeof e=="string"||Ki(e))return e;var t=e+"";return t=="0"&&1/e==-Bg?"-0":t}var Vg=1/0,xs=qe?qe.prototype:void 0,Os=xs?xs.toString:void 0;function Jc(e){if(typeof e=="string")return e;if(Rn(e))return Qc(e,Jc)+"";if(Ki(e))return Os?Os.call(e):"";var t=e+"";return t=="0"&&1/e==-Vg?"-0":t}function zg(e){return e==null?"":Jc(e)}function el(e){return Rn(e)?Qc(e,Hg):Ki(e)?[e]:zc(Fg(zg(e)))}function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function tl(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Ar=C.createContext(void 0);Ar.displayName="FormikContext";Ar.Provider;Ar.Consumer;function Ug(){var e=C.useContext(Ar);return e||qd(!1),e}var be=function(t){return typeof t=="function"},Dr=function(t){return t!==null&&typeof t=="object"},Yg=function(t){return String(Math.floor(Number(t)))===t},ao=function(t){return Object.prototype.toString.call(t)==="[object String]"},so=function(t){return Dr(t)&&be(t.then)};function ce(e,t,n,r){r===void 0&&(r=0);for(var o=el(t);e&&r<o.length;)e=e[o[r++]];return r!==o.length&&!e||e===void 0?n:e}function ht(e,t,n){for(var r=ws(e),o=r,i=0,a=el(t);i<a.length-1;i++){var s=a[i],u=ce(e,a.slice(0,i+1));if(u&&(Dr(u)||Array.isArray(u)))o=o[s]=ws(u);else{var c=a[i+1];o=o[s]=Yg(c)&&Number(c)>=0?[]:{}}}return(i===0?e:o)[a[i]]===n?e:(n===void 0?delete o[a[i]]:o[a[i]]=n,i===0&&n===void 0&&delete r[a[i]],r)}function nl(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var o=0,i=Object.keys(e);o<i.length;o++){var a=i[o],s=e[a];Dr(s)?n.get(s)||(n.set(s,!0),r[a]=Array.isArray(s)?[]:{},nl(s,t,n,r[a])):r[a]=t}return r}function Gg(e,t){switch(t.type){case"SET_VALUES":return G({},e,{values:t.payload});case"SET_TOUCHED":return G({},e,{touched:t.payload});case"SET_ERRORS":return ct(e.errors,t.payload)?e:G({},e,{errors:t.payload});case"SET_STATUS":return G({},e,{status:t.payload});case"SET_ISSUBMITTING":return G({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return G({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return G({},e,{values:ht(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return G({},e,{touched:ht(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return G({},e,{errors:ht(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return G({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return G({},e,{touched:nl(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return G({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return G({},e,{isSubmitting:!1});default:return e}}var it={},qn={};function rl(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,o=r===void 0?!0:r,i=e.validateOnMount,a=i===void 0?!1:i,s=e.isInitialValid,u=e.enableReinitialize,c=u===void 0?!1:u,l=e.onSubmit,p=tl(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=G({validateOnChange:n,validateOnBlur:o,validateOnMount:a,onSubmit:l},p),m=C.useRef(d.initialValues),b=C.useRef(d.initialErrors||it),g=C.useRef(d.initialTouched||qn),y=C.useRef(d.initialStatus),v=C.useRef(!1),w=C.useRef({});C.useEffect(function(){return v.current=!0,function(){v.current=!1}},[]);var O=C.useState(0),S=O[1],T=C.useRef({values:d.initialValues,errors:d.initialErrors||it,touched:d.initialTouched||qn,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),P=T.current,E=C.useCallback(function(x){var M=T.current;T.current=Gg(M,x),M!==T.current&&S(function($){return $+1})},[]),D=C.useCallback(function(x,M){return new Promise(function($,A){var I=d.validate(x,M);I==null?$(it):so(I)?I.then(function(W){$(W||it)},function(W){A(W)}):$(I)})},[d.validate]),k=C.useCallback(function(x,M){var $=d.validationSchema,A=be($)?$(M):$,I=M&&A.validateAt?A.validateAt(M,x):Xg(x,A);return new Promise(function(W,U){I.then(function(){W(it)},function(De){De.name==="ValidationError"?W(qg(De)):U(De)})})},[d.validationSchema]),R=C.useCallback(function(x,M){return new Promise(function($){return $(w.current[x].validate(M))})},[]),F=C.useCallback(function(x){var M=Object.keys(w.current).filter(function(A){return be(w.current[A].validate)}),$=M.length>0?M.map(function(A){return R(A,ce(x,A))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all($).then(function(A){return A.reduce(function(I,W,U){return W==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||W&&(I=ht(I,M[U],W)),I},{})})},[R]),X=C.useCallback(function(x){return Promise.all([F(x),d.validationSchema?k(x):{},d.validate?D(x):{}]).then(function(M){var $=M[0],A=M[1],I=M[2],W=Go.all([$,A,I],{arrayMerge:Kg});return W})},[d.validate,d.validationSchema,F,D,k]),L=de(function(x){return x===void 0&&(x=P.values),E({type:"SET_ISVALIDATING",payload:!0}),X(x).then(function(M){return v.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:M})),M})});C.useEffect(function(){a&&v.current===!0&&ct(m.current,d.initialValues)&&L(m.current)},[a,L]);var K=C.useCallback(function(x){var M=x&&x.values?x.values:m.current,$=x&&x.errors?x.errors:b.current?b.current:d.initialErrors||{},A=x&&x.touched?x.touched:g.current?g.current:d.initialTouched||{},I=x&&x.status?x.status:y.current?y.current:d.initialStatus;m.current=M,b.current=$,g.current=A,y.current=I;var W=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!x&&!!x.isSubmitting,errors:$,touched:A,status:I,values:M,isValidating:!!x&&!!x.isValidating,submitCount:x&&x.submitCount&&typeof x.submitCount=="number"?x.submitCount:0}})};if(d.onReset){var U=d.onReset(P.values,an);so(U)?U.then(W):W()}else W()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);C.useEffect(function(){v.current===!0&&!ct(m.current,d.initialValues)&&c&&(m.current=d.initialValues,K(),a&&L(m.current))},[c,d.initialValues,K,a,L]),C.useEffect(function(){c&&v.current===!0&&!ct(b.current,d.initialErrors)&&(b.current=d.initialErrors||it,E({type:"SET_ERRORS",payload:d.initialErrors||it}))},[c,d.initialErrors]),C.useEffect(function(){c&&v.current===!0&&!ct(g.current,d.initialTouched)&&(g.current=d.initialTouched||qn,E({type:"SET_TOUCHED",payload:d.initialTouched||qn}))},[c,d.initialTouched]),C.useEffect(function(){c&&v.current===!0&&!ct(y.current,d.initialStatus)&&(y.current=d.initialStatus,E({type:"SET_STATUS",payload:d.initialStatus}))},[c,d.initialStatus,d.initialTouched]);var re=de(function(x){if(w.current[x]&&be(w.current[x].validate)){var M=ce(P.values,x),$=w.current[x].validate(M);return so($)?(E({type:"SET_ISVALIDATING",payload:!0}),$.then(function(A){return A}).then(function(A){E({type:"SET_FIELD_ERROR",payload:{field:x,value:A}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:x,value:$}}),Promise.resolve($))}else if(d.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),k(P.values,x).then(function(A){return A}).then(function(A){E({type:"SET_FIELD_ERROR",payload:{field:x,value:ce(A,x)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),V=C.useCallback(function(x,M){var $=M.validate;w.current[x]={validate:$}},[]),Y=C.useCallback(function(x){delete w.current[x]},[]),J=de(function(x,M){E({type:"SET_TOUCHED",payload:x});var $=M===void 0?o:M;return $?L(P.values):Promise.resolve()}),ue=C.useCallback(function(x){E({type:"SET_ERRORS",payload:x})},[]),nt=de(function(x,M){var $=be(x)?x(P.values):x;E({type:"SET_VALUES",payload:$});var A=M===void 0?n:M;return A?L($):Promise.resolve()}),Be=C.useCallback(function(x,M){E({type:"SET_FIELD_ERROR",payload:{field:x,value:M}})},[]),pe=de(function(x,M,$){E({type:"SET_FIELD_VALUE",payload:{field:x,value:M}});var A=$===void 0?n:$;return A?L(ht(P.values,x,M)):Promise.resolve()}),rt=C.useCallback(function(x,M){var $=M,A=x,I;if(!ao(x)){x.persist&&x.persist();var W=x.target?x.target:x.currentTarget,U=W.type,De=W.name,no=W.id,ro=W.value,lf=W.checked,zO=W.outerHTML,ja=W.options,ff=W.multiple;$=M||De||no,A=/number|range/.test(U)?(I=parseFloat(ro),isNaN(I)?"":I):/checkbox/.test(U)?Qg(ce(P.values,$),lf,ro):ja&&ff?Zg(ja):ro}$&&pe($,A)},[pe,P.values]),Oe=de(function(x){if(ao(x))return function(M){return rt(M,x)};rt(x)}),ee=de(function(x,M,$){M===void 0&&(M=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:x,value:M}});var A=$===void 0?o:$;return A?L(P.values):Promise.resolve()}),He=C.useCallback(function(x,M){x.persist&&x.persist();var $=x.target,A=$.name,I=$.id,W=$.outerHTML,U=M||A||I;ee(U,!0)},[ee]),Ve=de(function(x){if(ao(x))return function(M){return He(M,x)};He(x)}),Ce=C.useCallback(function(x){be(x)?E({type:"SET_FORMIK_STATE",payload:x}):E({type:"SET_FORMIK_STATE",payload:function(){return x}})},[]),Mt=C.useCallback(function(x){E({type:"SET_STATUS",payload:x})},[]),zn=C.useCallback(function(x){E({type:"SET_ISSUBMITTING",payload:x})},[]),ot=de(function(){return E({type:"SUBMIT_ATTEMPT"}),L().then(function(x){var M=x instanceof Error,$=!M&&Object.keys(x).length===0;if($){var A;try{if(A=Jr(),A===void 0)return}catch(I){throw I}return Promise.resolve(A).then(function(I){return v.current&&E({type:"SUBMIT_SUCCESS"}),I}).catch(function(I){if(v.current)throw E({type:"SUBMIT_FAILURE"}),I})}else if(v.current&&(E({type:"SUBMIT_FAILURE"}),M))throw x})}),Qr=de(function(x){x&&x.preventDefault&&be(x.preventDefault)&&x.preventDefault(),x&&x.stopPropagation&&be(x.stopPropagation)&&x.stopPropagation(),ot().catch(function(M){console.warn("Warning: An unhandled error was caught from submitForm()",M)})}),an={resetForm:K,validateForm:L,validateField:re,setErrors:ue,setFieldError:Be,setFieldTouched:ee,setFieldValue:pe,setStatus:Mt,setSubmitting:zn,setTouched:J,setValues:nt,setFormikState:Ce,submitForm:ot},Jr=de(function(){return l(P.values,an)}),eo=de(function(x){x&&x.preventDefault&&be(x.preventDefault)&&x.preventDefault(),x&&x.stopPropagation&&be(x.stopPropagation)&&x.stopPropagation(),K()}),Un=C.useCallback(function(x){return{value:ce(P.values,x),error:ce(P.errors,x),touched:!!ce(P.touched,x),initialValue:ce(m.current,x),initialTouched:!!ce(g.current,x),initialError:ce(b.current,x)}},[P.errors,P.touched,P.values]),Yn=C.useCallback(function(x){return{setValue:function($,A){return pe(x,$,A)},setTouched:function($,A){return ee(x,$,A)},setError:function($){return Be(x,$)}}},[pe,ee,Be]),to=C.useCallback(function(x){var M=Dr(x),$=M?x.name:x,A=ce(P.values,$),I={name:$,value:A,onChange:Oe,onBlur:Ve};if(M){var W=x.type,U=x.value,De=x.as,no=x.multiple;W==="checkbox"?U===void 0?I.checked=!!A:(I.checked=!!(Array.isArray(A)&&~A.indexOf(U)),I.value=U):W==="radio"?(I.checked=A===U,I.value=U):De==="select"&&no&&(I.value=I.value||[],I.multiple=!0)}return I},[Ve,Oe,P.values]),sn=C.useMemo(function(){return!ct(m.current,P.values)},[m.current,P.values]),Ae=C.useMemo(function(){return typeof s<"u"?sn?P.errors&&Object.keys(P.errors).length===0:s!==!1&&be(s)?s(d):s:P.errors&&Object.keys(P.errors).length===0},[s,sn,P.errors,d]),$t=G({},P,{initialValues:m.current,initialErrors:b.current,initialTouched:g.current,initialStatus:y.current,handleBlur:Ve,handleChange:Oe,handleReset:eo,handleSubmit:Qr,resetForm:K,setErrors:ue,setFormikState:Ce,setFieldTouched:ee,setFieldValue:pe,setFieldError:Be,setStatus:Mt,setSubmitting:zn,setTouched:J,setValues:nt,submitForm:ot,validateForm:L,validateField:re,isValid:Ae,dirty:sn,unregisterField:Y,registerField:V,getFieldProps:to,getFieldMeta:Un,getFieldHelpers:Yn,validateOnBlur:o,validateOnChange:n,validateOnMount:a});return $t}function qg(e){var t={};if(e.inner){if(e.inner.length===0)return ht(t,e.path,e.message);for(var o=e.inner,n=Array.isArray(o),r=0,o=n?o:o[Symbol.iterator]();;){var i;if(n){if(r>=o.length)break;i=o[r++]}else{if(r=o.next(),r.done)break;i=r.value}var a=i;ce(t,a.path)||(t=ht(t,a.path,a.message))}}return t}function Xg(e,t,n,r){n===void 0&&(n=!1);var o=Jo(e);return t[n?"validateSync":"validate"](o,{abortEarly:!1,context:r||o})}function Jo(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(o){return Array.isArray(o)===!0||Ka(o)?Jo(o):o!==""?o:void 0}):Ka(e[r])?t[r]=Jo(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function Kg(e,t,n){var r=e.slice();return t.forEach(function(i,a){if(typeof r[a]>"u"){var s=n.clone!==!1,u=s&&n.isMergeableObject(i);r[a]=u?Go(Array.isArray(i)?[]:{},i,n):i}else n.isMergeableObject(i)?r[a]=Go(e[a],i,n):e.indexOf(i)===-1&&r.push(i)}),r}function Zg(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Qg(e,t,n){if(typeof e=="boolean")return!!t;var r=[],o=!1,i=-1;if(Array.isArray(e))r=e,i=e.indexOf(n),o=i>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!o?r.concat(n):o?r.slice(0,i).concat(r.slice(i+1)):r}var Jg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?C.useLayoutEffect:C.useEffect;function de(e){var t=C.useRef(e);return Jg(function(){t.current=e}),C.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current.apply(void 0,r)},[])}var e1=C.forwardRef(function(e,t){var n=e.action,r=tl(e,["action"]),o=n??"#",i=Ug(),a=i.handleReset,s=i.handleSubmit;return C.createElement("form",G({onSubmit:s,ref:t,onReset:a,action:o},r))});e1.displayName="Form";var ol={exports:{}},t1=ol.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=t1);var St=ol.exports,il={exports:{}},n1=il.exports={version:"2.6.12"};typeof __e=="number"&&(__e=n1);var Je=il.exports,r1=function(e){if(typeof e!="function")throw TypeError(e+" is not a function!");return e},o1=r1,al=function(e,t,n){if(o1(e),t===void 0)return e;switch(n){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,i){return e.call(t,r,o,i)}}return function(){return e.apply(t,arguments)}},et={},Qt=function(e){return typeof e=="object"?e!==null:typeof e=="function"},i1=Qt,In=function(e){if(!i1(e))throw TypeError(e+" is not an object!");return e},Ln=function(e){try{return!!e()}catch{return!0}},tt=!Ln(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),uo,Cs;function sl(){if(Cs)return uo;Cs=1;var e=Qt,t=St.document,n=e(t)&&e(t.createElement);return uo=function(r){return n?t.createElement(r):{}},uo}var ul=!tt&&!Ln(function(){return Object.defineProperty(sl()("div"),"a",{get:function(){return 7}}).a!=7}),Xn=Qt,Qi=function(e,t){if(!Xn(e))return e;var n,r;if(t&&typeof(n=e.toString)=="function"&&!Xn(r=n.call(e))||typeof(n=e.valueOf)=="function"&&!Xn(r=n.call(e))||!t&&typeof(n=e.toString)=="function"&&!Xn(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},Ps=In,a1=ul,s1=Qi,u1=Object.defineProperty;et.f=tt?Object.defineProperty:function(t,n,r){if(Ps(t),n=s1(n,!0),Ps(r),a1)try{return u1(t,n,r)}catch{}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t};var kr=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},c1=et,l1=kr,Jt=tt?function(e,t,n){return c1.f(e,t,l1(1,n))}:function(e,t,n){return e[t]=n,e},f1={}.hasOwnProperty,Et=function(e,t){return f1.call(e,t)},Kn=St,co=Je,Ss=al,p1=Jt,d1=Et,Zn="prototype",Z=function(e,t,n){var r=e&Z.F,o=e&Z.G,i=e&Z.S,a=e&Z.P,s=e&Z.B,u=e&Z.W,c=o?co:co[t]||(co[t]={}),l=c[Zn],p=o?Kn:i?Kn[t]:(Kn[t]||{})[Zn],d,m,b;o&&(n=t);for(d in n)m=!r&&p&&p[d]!==void 0,!(m&&d1(c,d))&&(b=m?p[d]:n[d],c[d]=o&&typeof p[d]!="function"?n[d]:s&&m?Ss(b,Kn):u&&p[d]==b?function(g){var y=function(v,w,O){if(this instanceof g){switch(arguments.length){case 0:return new g;case 1:return new g(v);case 2:return new g(v,w)}return new g(v,w,O)}return g.apply(this,arguments)};return y[Zn]=g[Zn],y}(b):a&&typeof b=="function"?Ss(Function.call,b):b,a&&((c.virtual||(c.virtual={}))[d]=b,e&Z.R&&l&&!l[d]&&p1(l,d,b)))};Z.F=1;Z.G=2;Z.S=4;Z.P=8;Z.B=16;Z.W=32;Z.U=64;Z.R=128;var en=Z,h1={}.toString,cl=function(e){return h1.call(e).slice(8,-1)},lo,Es;function ll(){if(Es)return lo;Es=1;var e=cl;return lo=Object("z").propertyIsEnumerable(0)?Object:function(t){return e(t)=="String"?t.split(""):Object(t)},lo}var Ji=function(e){if(e==null)throw TypeError("Can't call method on  "+e);return e},m1=ll(),v1=Ji,tn=function(e){return m1(v1(e))},g1=Math.ceil,y1=Math.floor,ea=function(e){return isNaN(e=+e)?0:(e>0?y1:g1)(e)},b1=ea,w1=Math.min,x1=function(e){return e>0?w1(b1(e),9007199254740991):0},O1=ea,C1=Math.max,P1=Math.min,S1=function(e,t){return e=O1(e),e<0?C1(e+t,0):P1(e,t)},E1=tn,T1=x1,_1=S1,M1=function(e){return function(t,n,r){var o=E1(t),i=T1(o.length),a=_1(r,i),s;if(e&&n!=n){for(;i>a;)if(s=o[a++],s!=s)return!0}else for(;i>a;a++)if((e||a in o)&&o[a]===n)return e||a||0;return!e&&-1}},fl={exports:{}},$1=!0,j1=Je,Ts=St,_s="__core-js_shared__",Ms=Ts[_s]||(Ts[_s]={});(fl.exports=function(e,t){return Ms[e]||(Ms[e]=t!==void 0?t:{})})("versions",[]).push({version:j1.version,mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});var ta=fl.exports,A1=0,D1=Math.random(),Nr=function(e){return"Symbol(".concat(e===void 0?"":e,")_",(++A1+D1).toString(36))},fo,$s;function na(){if($s)return fo;$s=1;var e=ta("keys"),t=Nr;return fo=function(n){return e[n]||(e[n]=t(n))},fo}var js=Et,k1=tn,N1=M1(!1),R1=na()("IE_PROTO"),pl=function(e,t){var n=k1(e),r=0,o=[],i;for(i in n)i!=R1&&js(n,i)&&o.push(i);for(;t.length>r;)js(n,i=t[r++])&&(~N1(o,i)||o.push(i));return o},ra="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),I1=pl,L1=ra,Rr=Object.keys||function(t){return I1(t,L1)},Ir={};Ir.f=Object.getOwnPropertySymbols;var Wn={};Wn.f={}.propertyIsEnumerable;var W1=Ji,oa=function(e){return Object(W1(e))},po,As;function F1(){if(As)return po;As=1;var e=tt,t=Rr,n=Ir,r=Wn,o=oa,i=ll(),a=Object.assign;return po=!a||Ln(function(){var s={},u={},c=Symbol(),l="abcdefghijklmnopqrst";return s[c]=7,l.split("").forEach(function(p){u[p]=p}),a({},s)[c]!=7||Object.keys(a({},u)).join("")!=l})?function(u,c){for(var l=o(u),p=arguments.length,d=1,m=n.f,b=r.f;p>d;)for(var g=i(arguments[d++]),y=m?t(g).concat(m(g)):t(g),v=y.length,w=0,O;v>w;)O=y[w++],(!e||b.call(g,O))&&(l[O]=g[O]);return l}:a,po}var ho=en;ho(ho.S+ho.F,"Object",{assign:F1()});var B1=Je.Object.assign,H1={default:B1,__esModule:!0},V1=H1,z1=U1(V1);function U1(e){return e&&e.__esModule?e:{default:e}}var It=z1.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Lr={},Y1=ea,G1=Ji,q1=function(e){return function(t,n){var r=String(G1(t)),o=Y1(n),i=r.length,a,s;return o<0||o>=i?e?"":void 0:(a=r.charCodeAt(o),a<55296||a>56319||o+1===i||(s=r.charCodeAt(o+1))<56320||s>57343?e?r.charAt(o):a:e?r.slice(o,o+2):(a-55296<<10)+(s-56320)+65536)}},dl=Jt,ia={},mo,Ds;function X1(){if(Ds)return mo;Ds=1;var e=et,t=In,n=Rr;return mo=tt?Object.defineProperties:function(o,i){t(o);for(var a=n(i),s=a.length,u=0,c;s>u;)e.f(o,c=a[u++],i[c]);return o},mo}var vo,ks;function K1(){if(ks)return vo;ks=1;var e=St.document;return vo=e&&e.documentElement,vo}var go,Ns;function aa(){if(Ns)return go;Ns=1;var e=In,t=X1(),n=ra,r=na()("IE_PROTO"),o=function(){},i="prototype",a=function(){var s=sl()("iframe"),u=n.length,c="<",l=">",p;for(s.style.display="none",K1().appendChild(s),s.src="javascript:",p=s.contentWindow.document,p.open(),p.write(c+"script"+l+"document.F=Object"+c+"/script"+l),p.close(),a=p.F;u--;)delete a[i][n[u]];return a()};return go=Object.create||function(u,c){var l;return u!==null?(o[i]=e(u),l=new o,o[i]=null,l[r]=u):l=a(),c===void 0?l:t(l,c)},go}var hl={exports:{}},ei=ta("wks"),Z1=Nr,ti=St.Symbol,Rs=typeof ti=="function",Q1=hl.exports=function(e){return ei[e]||(ei[e]=Rs&&ti[e]||(Rs?ti:Z1)("Symbol."+e))};Q1.store=ei;var nn=hl.exports,J1=et.f,ey=Et,Is=nn("toStringTag"),sa=function(e,t,n){e&&!ey(e=n?e:e.prototype,Is)&&J1(e,Is,{configurable:!0,value:t})},ty=aa(),ny=kr,ry=sa,ml={};Jt(ml,nn("iterator"),function(){return this});var oy=function(e,t,n){e.prototype=ty(ml,{next:ny(1,n)}),ry(e,t+" Iterator")},iy=Et,ay=oa,Ls=na()("IE_PROTO"),sy=Object.prototype,uy=Object.getPrototypeOf||function(e){return e=ay(e),iy(e,Ls)?e[Ls]:typeof e.constructor=="function"&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?sy:null},yo=en,cy=dl,ly=Jt,Ws=ia,fy=oy,py=sa,dy=uy,bo=nn("iterator"),wo=!([].keys&&"next"in[].keys()),hy="@@iterator",Fs="keys",Qn="values",my=function(){return this},vl=function(e,t,n,r,o,i,a){fy(n,t,r);var s=function(O){if(!wo&&O in p)return p[O];switch(O){case Fs:return function(){return new n(this,O)};case Qn:return function(){return new n(this,O)}}return function(){return new n(this,O)}},u=t+" Iterator",c=o==Qn,l=!1,p=e.prototype,d=p[bo]||p[hy]||o&&p[o],m=d||s(o),b=o?c?s("entries"):m:void 0,g=t=="Array"&&p.entries||d,y,v,w;if(g&&(w=dy(g.call(new e)),w!==Object.prototype&&w.next&&py(w,u,!0)),c&&d&&d.name!==Qn&&(l=!0,m=function(){return d.call(this)}),a&&(wo||l||!p[bo])&&ly(p,bo,m),Ws[t]=m,Ws[u]=my,o)if(y={values:c?m:s(Qn),keys:i?m:s(Fs),entries:b},a)for(v in y)v in p||cy(p,v,y[v]);else yo(yo.P+yo.F*(wo||l),t,y);return y},vy=q1(!0);vl(String,"String",function(e){this._t=String(e),this._i=0},function(){var e=this._t,t=this._i,n;return t>=e.length?{value:void 0,done:!0}:(n=vy(e,t),this._i+=n.length,{value:n,done:!1})});var gy=function(e,t){return{value:t,done:!!e}},Jn=gy,Bs=ia,yy=tn;vl(Array,"Array",function(e,t){this._t=yy(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,Jn(1)):t=="keys"?Jn(0,n):t=="values"?Jn(0,e[n]):Jn(0,[n,e[n]])},"values");Bs.Arguments=Bs.Array;var by=St,wy=Jt,Hs=ia,Vs=nn("toStringTag"),zs="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");for(var xo=0;xo<zs.length;xo++){var Oo=zs[xo],Us=by[Oo],Co=Us&&Us.prototype;Co&&!Co[Vs]&&wy(Co,Vs,Oo),Hs[Oo]=Hs.Array}var Wr={};Wr.f=nn;var xy=Wr.f("iterator"),Oy={default:xy,__esModule:!0},gl={exports:{}},gt=Nr("meta"),Cy=Qt,ua=Et,Py=et.f,Sy=0,Fr=Object.isExtensible||function(){return!0},Ey=!Ln(function(){return Fr(Object.preventExtensions({}))}),ca=function(e){Py(e,gt,{value:{i:"O"+ ++Sy,w:{}}})},Ty=function(e,t){if(!Cy(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ua(e,gt)){if(!Fr(e))return"F";if(!t)return"E";ca(e)}return e[gt].i},_y=function(e,t){if(!ua(e,gt)){if(!Fr(e))return!0;if(!t)return!1;ca(e)}return e[gt].w},My=function(e){return Ey&&$y.NEED&&Fr(e)&&!ua(e,gt)&&ca(e),e},$y=gl.exports={KEY:gt,NEED:!1,fastKey:Ty,getWeak:_y,onFreeze:My},jy=gl.exports,Ys=Je,Ay=Wr,Dy=et.f,la=function(e){var t=Ys.Symbol||(Ys.Symbol={});e.charAt(0)!="_"&&!(e in t)&&Dy(t,e,{value:Ay.f(e)})},ky=Rr,Ny=Ir,Ry=Wn,Iy=function(e){var t=ky(e),n=Ny.f;if(n)for(var r=n(e),o=Ry.f,i=0,a;r.length>i;)o.call(e,a=r[i++])&&t.push(a);return t},Ly=cl,Wy=Array.isArray||function(t){return Ly(t)=="Array"},yl={},fa={},Fy=pl,By=ra.concat("length","prototype");fa.f=Object.getOwnPropertyNames||function(t){return Fy(t,By)};var Hy=tn,bl=fa.f,Vy={}.toString,wl=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],zy=function(e){try{return bl(e)}catch{return wl.slice()}};yl.f=function(t){return wl&&Vy.call(t)=="[object Window]"?zy(t):bl(Hy(t))};var pa={},Uy=Wn,Yy=kr,Gy=tn,qy=Qi,Xy=Et,Ky=ul,Gs=Object.getOwnPropertyDescriptor;pa.f=tt?Gs:function(t,n){if(t=Gy(t),n=qy(n,!0),Ky)try{return Gs(t,n)}catch{}if(Xy(t,n))return Yy(!Uy.f.call(t,n),t[n])};var Br=St,q=Et,ni=tt,Q=en,qs=dl,Zy=jy.KEY,da=Ln,ha=ta,ma=sa,Qy=Nr,Fn=nn,Jy=Wr,eb=la,tb=Iy,nb=Wy,ri=In,rb=Qt,ob=oa,Hr=tn,va=Qi,oi=kr,_n=aa(),xl=yl,Ol=pa,Vr=Ir,Cl=et,ib=Rr,Pl=Ol.f,pt=Cl.f,Sl=xl.f,se=Br.Symbol,br=Br.JSON,er=br&&br.stringify,Ge="prototype",oe=Fn("_hidden"),Xs=Fn("toPrimitive"),ab={}.propertyIsEnumerable,ln=ha("symbol-registry"),We=ha("symbols"),Bn=ha("op-symbols"),me=Object[Ge],rn=typeof se=="function"&&!!Vr.f,Po=Br.QObject,ii=!Po||!Po[Ge]||!Po[Ge].findChild,ai=ni&&da(function(){return _n(pt({},"a",{get:function(){return pt(this,"a",{value:7}).a}})).a!=7})?function(e,t,n){var r=Pl(me,t);r&&delete me[t],pt(e,t,n),r&&e!==me&&pt(me,t,r)}:pt,Ks=function(e){var t=We[e]=_n(se[Ge]);return t._k=e,t},si=rn&&typeof se.iterator=="symbol"?function(e){return typeof e=="symbol"}:function(e){return e instanceof se},zr=function(t,n,r){return t===me&&zr(Bn,n,r),ri(t),n=va(n,!0),ri(r),q(We,n)?(r.enumerable?(q(t,oe)&&t[oe][n]&&(t[oe][n]=!1),r=_n(r,{enumerable:oi(0,!1)})):(q(t,oe)||pt(t,oe,oi(1,{})),t[oe][n]=!0),ai(t,n,r)):pt(t,n,r)},El=function(t,n){ri(t);for(var r=tb(n=Hr(n)),o=0,i=r.length,a;i>o;)zr(t,a=r[o++],n[a]);return t},sb=function(t,n){return n===void 0?_n(t):El(_n(t),n)},Zs=function(t){var n=ab.call(this,t=va(t,!0));return this===me&&q(We,t)&&!q(Bn,t)?!1:n||!q(this,t)||!q(We,t)||q(this,oe)&&this[oe][t]?n:!0},Tl=function(t,n){if(t=Hr(t),n=va(n,!0),!(t===me&&q(We,n)&&!q(Bn,n))){var r=Pl(t,n);return r&&q(We,n)&&!(q(t,oe)&&t[oe][n])&&(r.enumerable=!0),r}},_l=function(t){for(var n=Sl(Hr(t)),r=[],o=0,i;n.length>o;)!q(We,i=n[o++])&&i!=oe&&i!=Zy&&r.push(i);return r},Ml=function(t){for(var n=t===me,r=Sl(n?Bn:Hr(t)),o=[],i=0,a;r.length>i;)q(We,a=r[i++])&&(!n||q(me,a))&&o.push(We[a]);return o};rn||(se=function(){if(this instanceof se)throw TypeError("Symbol is not a constructor!");var t=Qy(arguments.length>0?arguments[0]:void 0),n=function(r){this===me&&n.call(Bn,r),q(this,oe)&&q(this[oe],t)&&(this[oe][t]=!1),ai(this,t,oi(1,r))};return ni&&ii&&ai(me,t,{configurable:!0,set:n}),Ks(t)},qs(se[Ge],"toString",function(){return this._k}),Ol.f=Tl,Cl.f=zr,fa.f=xl.f=_l,Wn.f=Zs,Vr.f=Ml,ni&&!$1&&qs(me,"propertyIsEnumerable",Zs),Jy.f=function(e){return Ks(Fn(e))});Q(Q.G+Q.W+Q.F*!rn,{Symbol:se});for(var Qs="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),Js=0;Qs.length>Js;)Fn(Qs[Js++]);for(var eu=ib(Fn.store),tu=0;eu.length>tu;)eb(eu[tu++]);Q(Q.S+Q.F*!rn,"Symbol",{for:function(e){return q(ln,e+="")?ln[e]:ln[e]=se(e)},keyFor:function(t){if(!si(t))throw TypeError(t+" is not a symbol!");for(var n in ln)if(ln[n]===t)return n},useSetter:function(){ii=!0},useSimple:function(){ii=!1}});Q(Q.S+Q.F*!rn,"Object",{create:sb,defineProperty:zr,defineProperties:El,getOwnPropertyDescriptor:Tl,getOwnPropertyNames:_l,getOwnPropertySymbols:Ml});var ub=da(function(){Vr.f(1)});Q(Q.S+Q.F*ub,"Object",{getOwnPropertySymbols:function(t){return Vr.f(ob(t))}});br&&Q(Q.S+Q.F*(!rn||da(function(){var e=se();return er([e])!="[null]"||er({a:e})!="{}"||er(Object(e))!="{}"})),"JSON",{stringify:function(t){for(var n=[t],r=1,o,i;arguments.length>r;)n.push(arguments[r++]);if(i=o=n[1],!(!rb(o)&&t===void 0||si(t)))return nb(o)||(o=function(a,s){if(typeof i=="function"&&(s=i.call(this,a,s)),!si(s))return s}),n[1]=o,er.apply(br,n)}});se[Ge][Xs]||Jt(se[Ge],Xs,se[Ge].valueOf);ma(se,"Symbol");ma(Math,"Math",!0);ma(Br.JSON,"JSON",!0);la("asyncIterator");la("observable");var cb=Je.Symbol,lb={default:cb,__esModule:!0};Lr.__esModule=!0;var fb=Oy,$l=jl(fb),pb=lb,Ye=jl(pb),So=typeof Ye.default=="function"&&typeof $l.default=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Ye.default=="function"&&e.constructor===Ye.default&&e!==Ye.default.prototype?"symbol":typeof e};function jl(e){return e&&e.__esModule?e:{default:e}}var db=Lr.default=typeof Ye.default=="function"&&So($l.default)==="symbol"?function(e){return typeof e>"u"?"undefined":So(e)}:function(e){return e&&typeof Ye.default=="function"&&e.constructor===Ye.default&&e!==Ye.default.prototype?"symbol":typeof e>"u"?"undefined":So(e)},hb=Lr,mb=vb(hb);function vb(e){return e&&e.__esModule?e:{default:e}}var Xe=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&((typeof t>"u"?"undefined":(0,mb.default)(t))==="object"||typeof t=="function")?t:e},Eo,nu;function gb(){if(nu)return Eo;nu=1;var e=Qt,t=In,n=function(r,o){if(t(r),!e(o)&&o!==null)throw TypeError(o+": can't set as prototype!")};return Eo={set:Object.setPrototypeOf||("__proto__"in{}?function(r,o,i){try{i=al(Function.call,pa.f(Object.prototype,"__proto__").set,2),i(r,[]),o=!(r instanceof Array)}catch{o=!0}return function(s,u){return n(s,u),o?s.__proto__=u:i(s,u),s}}({},!1):void 0),check:n},Eo}var ru=en;ru(ru.S,"Object",{setPrototypeOf:gb().set});var yb=Je.Object.setPrototypeOf,bb={default:yb,__esModule:!0},ou=en;ou(ou.S,"Object",{create:aa()});var wb=Je.Object,xb=function(t,n){return wb.create(t,n)},Ob={default:xb,__esModule:!0},Cb=bb,iu=ga(Cb),Pb=Ob,Sb=ga(Pb),Eb=Lr,Tb=ga(Eb);function ga(e){return e&&e.__esModule?e:{default:e}}var _t=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+(typeof t>"u"?"undefined":(0,Tb.default)(t)));e.prototype=(0,Sb.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(iu.default?(0,iu.default)(e,t):e.__proto__=t)};function Al(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Dl(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function kl(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Al.__suppressDeprecationWarning=!0;Dl.__suppressDeprecationWarning=!0;kl.__suppressDeprecationWarning=!0;function ya(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,o=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?o="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),n!==null||r!==null||o!==null){var i=e.displayName||e.name,a=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+a+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Al,t.componentWillReceiveProps=Dl),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=kl;var s=t.componentDidUpdate;t.componentDidUpdate=function(c,l,p){var d=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:p;s.call(this,c,l,d)}}return e}function ui(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}var ci={exports:{}},li={exports:{}},fi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(){return!1}function r(){return!0}function o(){this.timeStamp=Date.now(),this.target=void 0,this.currentTarget=void 0}o.prototype={isEventObject:1,constructor:o,isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){this.isDefaultPrevented=r},stopPropagation:function(){this.isPropagationStopped=r},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=r,this.stopPropagation()},halt:function(a){a?this.stopImmediatePropagation():this.stopPropagation(),this.preventDefault()}},t.default=o,e.exports=t.default})(fi,fi.exports);var _b=fi.exports;/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var au=Object.getOwnPropertySymbols,Mb=Object.prototype.hasOwnProperty,$b=Object.prototype.propertyIsEnumerable;function jb(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Ab(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Db=Ab()?Object.assign:function(e,t){for(var n,r=jb(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)Mb.call(n,a)&&(r[a]=n[a]);if(au){o=au(n);for(var s=0;s<o.length;s++)$b.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(y){return y&&y.__esModule?y:{default:y}}var r=_b,o=n(r),i=Db,a=n(i),s=!0,u=!1,c=["altKey","bubbles","cancelable","ctrlKey","currentTarget","eventPhase","metaKey","shiftKey","target","timeStamp","view","type"];function l(y){return y==null}var p=[{reg:/^key/,props:["char","charCode","key","keyCode","which"],fix:function(v,w){l(v.which)&&(v.which=l(w.charCode)?w.keyCode:w.charCode),v.metaKey===void 0&&(v.metaKey=v.ctrlKey)}},{reg:/^touch/,props:["touches","changedTouches","targetTouches"]},{reg:/^hashchange$/,props:["newURL","oldURL"]},{reg:/^gesturechange$/i,props:["rotation","scale"]},{reg:/^(mousewheel|DOMMouseScroll)$/,props:[],fix:function(v,w){var O=void 0,S=void 0,T=void 0,P=w.wheelDelta,E=w.axis,D=w.wheelDeltaY,k=w.wheelDeltaX,R=w.detail;P&&(T=P/120),R&&(T=0-(R%3===0?R/3:R)),E!==void 0&&(E===v.HORIZONTAL_AXIS?(S=0,O=0-T):E===v.VERTICAL_AXIS&&(O=0,S=T)),D!==void 0&&(S=D/120),k!==void 0&&(O=-1*k/120),!O&&!S&&(S=T),O!==void 0&&(v.deltaX=O),S!==void 0&&(v.deltaY=S),T!==void 0&&(v.delta=T)}},{reg:/^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,props:["buttons","clientX","clientY","button","offsetX","relatedTarget","which","fromElement","toElement","offsetY","pageX","pageY","screenX","screenY"],fix:function(v,w){var O=void 0,S=void 0,T=void 0,P=v.target,E=w.button;return P&&l(v.pageX)&&!l(w.clientX)&&(O=P.ownerDocument||document,S=O.documentElement,T=O.body,v.pageX=w.clientX+(S&&S.scrollLeft||T&&T.scrollLeft||0)-(S&&S.clientLeft||T&&T.clientLeft||0),v.pageY=w.clientY+(S&&S.scrollTop||T&&T.scrollTop||0)-(S&&S.clientTop||T&&T.clientTop||0)),!v.which&&E!==void 0&&(E&1?v.which=1:E&2?v.which=3:E&4?v.which=2:v.which=0),!v.relatedTarget&&v.fromElement&&(v.relatedTarget=v.fromElement===P?v.toElement:v.fromElement),v}}];function d(){return s}function m(){return u}function b(y){var v=y.type,w=typeof y.stopPropagation=="function"||typeof y.cancelBubble=="boolean";o.default.call(this),this.nativeEvent=y;var O=m;"defaultPrevented"in y?O=y.defaultPrevented?d:m:"getPreventDefault"in y?O=y.getPreventDefault()?d:m:"returnValue"in y&&(O=y.returnValue===u?d:m),this.isDefaultPrevented=O;var S=[],T=void 0,P=void 0,E=void 0,D=c.concat();for(p.forEach(function(k){v.match(k.reg)&&(D=D.concat(k.props),k.fix&&S.push(k.fix))}),P=D.length;P;)E=D[--P],this[E]=y[E];for(!this.target&&w&&(this.target=y.srcElement||document),this.target&&this.target.nodeType===3&&(this.target=this.target.parentNode),P=S.length;P;)T=S[--P],T(this,y);this.timeStamp=y.timeStamp||Date.now()}var g=o.default.prototype;(0,a.default)(b.prototype,g,{constructor:b,preventDefault:function(){var v=this.nativeEvent;v.preventDefault?v.preventDefault():v.returnValue=u,g.preventDefault.call(this)},stopPropagation:function(){var v=this.nativeEvent;v.stopPropagation?v.stopPropagation():v.cancelBubble=s,g.stopPropagation.call(this)}}),t.default=b,e.exports=t.default})(li,li.exports);var kb=li.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;function n(a){return a&&a.__esModule?a:{default:a}}var r=kb,o=n(r);function i(a,s,u,c){function l(d){var m=new o.default(d);u.call(a,m)}if(a.addEventListener){var p=function(){var d=!1;return typeof c=="object"?d=c.capture||!1:typeof c=="boolean"&&(d=c),a.addEventListener(s,l,c||!1),{v:{remove:function(){a.removeEventListener(s,l,d)}}}}();if(typeof p=="object")return p.v}else if(a.attachEvent)return a.attachEvent("on"+s,l),{remove:function(){a.detachEvent("on"+s,l)}}}e.exports=t.default})(ci,ci.exports);var Nb=ci.exports;const Rb=Xt(Nb);function hn(e,t,n,r){var o=we.unstable_batchedUpdates?function(a){we.unstable_batchedUpdates(n,a)}:n;return Rb(e,t,o,r)}function mr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?mr=function(n){return typeof n}:mr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},mr(e)}function Ib(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function su(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Lb(e,t,n){return t&&su(e.prototype,t),n&&su(e,n),e}function Wb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pi(e,t)}function pi(e,t){return pi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},pi(e,t)}function Fb(e){var t=Vb();return function(){var r=wr(e),o;if(t){var i=wr(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Bb(this,o)}}function Bb(e,t){return t&&(mr(t)==="object"||typeof t=="function")?t:Hb(e)}function Hb(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Vb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function wr(e){return wr=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},wr(e)}var ba=function(e){Wb(n,e);var t=Fb(n);function n(){var r;Ib(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=t.call.apply(t,[this].concat(i)),r.removeContainer=function(){r.container&&(we.unmountComponentAtNode(r.container),r.container.parentNode.removeChild(r.container),r.container=null)},r.renderComponent=function(s,u){var c=r.props,l=c.visible,p=c.getComponent,d=c.forceRender,m=c.getContainer,b=c.parent;(l||b._component||d)&&(r.container||(r.container=m()),we.unstable_renderSubtreeIntoContainer(b,p(s),r.container,function(){u&&u.call(this)}))},r}return Lb(n,[{key:"componentDidMount",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentDidUpdate",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentWillUnmount",value:function(){this.props.autoDestroy&&this.removeContainer()}},{key:"render",value:function(){return this.props.children({renderComponent:this.renderComponent,removeContainer:this.removeContainer})}}]),n}(j.Component);ba.propTypes={autoMount:f.bool,autoDestroy:f.bool,visible:f.bool,forceRender:f.bool,parent:f.any,getComponent:f.func.isRequired,getContainer:f.func.isRequired,children:f.func.isRequired};ba.defaultProps={autoMount:!0,autoDestroy:!0,forceRender:!1};function vr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?vr=function(n){return typeof n}:vr=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vr(e)}function zb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function uu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ub(e,t,n){return t&&uu(e.prototype,t),n&&uu(e,n),e}function Yb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&di(e,t)}function di(e,t){return di=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},di(e,t)}function Gb(e){var t=Kb();return function(){var r=xr(e),o;if(t){var i=xr(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return qb(this,o)}}function qb(e,t){return t&&(vr(t)==="object"||typeof t=="function")?t:Xb(e)}function Xb(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Kb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function xr(e){return xr=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xr(e)}var Nl=function(e){Yb(n,e);var t=Gb(n);function n(){return zb(this,n),t.apply(this,arguments)}return Ub(n,[{key:"componentDidMount",value:function(){this.createContainer()}},{key:"componentDidUpdate",value:function(o){var i=this.props.didUpdate;i&&i(o)}},{key:"componentWillUnmount",value:function(){this.removeContainer()}},{key:"createContainer",value:function(){this._container=this.props.getContainer(),this.forceUpdate()}},{key:"removeContainer",value:function(){this._container&&this._container.parentNode.removeChild(this._container)}},{key:"render",value:function(){return this._container?we.createPortal(this.props.children,this._container):null}}]),n}(j.Component);Nl.propTypes={getContainer:f.func.isRequired,children:f.node.isRequired,didUpdate:f.func};var Rl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(i=o(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var s in i)t.call(i,s)&&i[s]&&(a=o(a,s));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Rl);var Zb=Rl.exports;const yt=Xt(Zb);function Qb(e,t,n){return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function Jb(e,t,n){var r=e[t]||{};return It({},r,n)}function ew(e,t,n,r){var o=n.points;for(var i in e)if(e.hasOwnProperty(i)&&Qb(e[i].points,o,r))return t+"-placement-"+i;return""}function cu(e,t){this[e]=t}var To=en;To(To.S+To.F*!tt,"Object",{defineProperty:et.f});var tw=Je.Object,nw=function(t,n,r){return tw.defineProperty(t,n,r)},Il={default:nw,__esModule:!0},rw=Il,ow=iw(rw);function iw(e){return e&&e.__esModule?e:{default:e}}var wa=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,ow.default)(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function lu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function fu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lu(Object(n),!0).forEach(function(r){aw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hi(e){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi(e)}function aw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fn,sw={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function Or(){if(fn!==void 0)return fn;fn="";var e=document.createElement("p").style,t="Transform";for(var n in sw)n+t in e&&(fn=n);return fn}function Ll(){return Or()?"".concat(Or(),"TransitionProperty"):"transitionProperty"}function Ur(){return Or()?"".concat(Or(),"Transform"):"transform"}function pu(e,t){var n=Ll();n&&(e.style[n]=t,n!=="transitionProperty"&&(e.style.transitionProperty=t))}function _o(e,t){var n=Ur();n&&(e.style[n]=t,n!=="transform"&&(e.style.transform=t))}function uw(e){return e.style.transitionProperty||e.style[Ll()]}function cw(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("transform")||t.getPropertyValue(Ur());if(n&&n!=="none"){var r=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(r[12]||r[4],0),y:parseFloat(r[13]||r[5],0)}}return{x:0,y:0}}var lw=/matrix\((.*)\)/,fw=/matrix3d\((.*)\)/;function pw(e,t){var n=window.getComputedStyle(e,null),r=n.getPropertyValue("transform")||n.getPropertyValue(Ur());if(r&&r!=="none"){var o,i=r.match(lw);if(i)i=i[1],o=i.split(",").map(function(s){return parseFloat(s,10)}),o[4]=t.x,o[5]=t.y,_o(e,"matrix(".concat(o.join(","),")"));else{var a=r.match(fw)[1];o=a.split(",").map(function(s){return parseFloat(s,10)}),o[12]=t.x,o[13]=t.y,_o(e,"matrix3d(".concat(o.join(","),")"))}}else _o(e,"translateX(".concat(t.x,"px) translateY(").concat(t.y,"px) translateZ(0)"))}var dw=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,Hn;function du(e){var t=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=t}function Lt(e,t,n){var r=n;if(hi(t)==="object"){for(var o in t)t.hasOwnProperty(o)&&Lt(e,o,t[o]);return}if(typeof r<"u"){typeof r=="number"&&(r="".concat(r,"px")),e.style[t]=r;return}return Hn(e,t)}function hw(e){var t,n,r,o=e.ownerDocument,i=o.body,a=o&&o.documentElement;return t=e.getBoundingClientRect(),n=Math.floor(t.left),r=Math.floor(t.top),n-=a.clientLeft||i.clientLeft||0,r-=a.clientTop||i.clientTop||0,{left:n,top:r}}function Wl(e,t){var n=e["page".concat(t?"Y":"X","Offset")],r="scroll".concat(t?"Top":"Left");if(typeof n!="number"){var o=e.document;n=o.documentElement[r],typeof n!="number"&&(n=o.body[r])}return n}function Fl(e){return Wl(e)}function Bl(e){return Wl(e,!0)}function Mn(e){var t=hw(e),n=e.ownerDocument,r=n.defaultView||n.parentWindow;return t.left+=Fl(r),t.top+=Bl(r),t}function xa(e){return e!=null&&e==e.window}function Hl(e){return xa(e)?e.document:e.nodeType===9?e:e.ownerDocument}function mw(e,t,n){var r=n,o="",i=Hl(e);return r=r||i.defaultView.getComputedStyle(e,null),r&&(o=r.getPropertyValue(t)||r[t]),o}var vw=new RegExp("^(".concat(dw,")(?!px)[a-z%]+$"),"i"),gw=/^(top|right|bottom|left)$/,Mo="currentStyle",$o="runtimeStyle",at="left",yw="px";function bw(e,t){var n=e[Mo]&&e[Mo][t];if(vw.test(n)&&!gw.test(t)){var r=e.style,o=r[at],i=e[$o][at];e[$o][at]=e[Mo][at],r[at]=t==="fontSize"?"1em":n||0,n=r.pixelLeft+yw,r[at]=o,e[$o][at]=i}return n===""?"auto":n}typeof window<"u"&&(Hn=window.getComputedStyle?mw:bw);function tr(e,t){return e==="left"?t.useCssRight?"right":e:t.useCssBottom?"bottom":e}function hu(e){if(e==="left")return"right";if(e==="right")return"left";if(e==="top")return"bottom";if(e==="bottom")return"top"}function mu(e,t,n){Lt(e,"position")==="static"&&(e.style.position="relative");var r=-999,o=-999,i=tr("left",n),a=tr("top",n),s=hu(i),u=hu(a);i!=="left"&&(r=999),a!=="top"&&(o=999);var c="",l=Mn(e);("left"in t||"top"in t)&&(c=uw(e)||"",pu(e,"none")),"left"in t&&(e.style[s]="",e.style[i]="".concat(r,"px")),"top"in t&&(e.style[u]="",e.style[a]="".concat(o,"px")),du(e);var p=Mn(e),d={};for(var m in t)if(t.hasOwnProperty(m)){var b=tr(m,n),g=m==="left"?r:o,y=l[m]-p[m];b===m?d[b]=g+y:d[b]=g-y}Lt(e,d),du(e),("left"in t||"top"in t)&&pu(e,c);var v={};for(var w in t)if(t.hasOwnProperty(w)){var O=tr(w,n),S=t[w]-l[w];w===O?v[O]=d[O]+S:v[O]=d[O]-S}Lt(e,v)}function ww(e,t){var n=Mn(e),r=cw(e),o={x:r.x,y:r.y};"left"in t&&(o.x=r.x+t.left-n.left),"top"in t&&(o.y=r.y+t.top-n.top),pw(e,o)}function xw(e,t,n){if(n.ignoreShake){var r=Mn(e),o=r.left.toFixed(0),i=r.top.toFixed(0),a=t.left.toFixed(0),s=t.top.toFixed(0);if(o===a&&i===s)return}n.useCssRight||n.useCssBottom?mu(e,t,n):n.useCssTransform&&Ur()in document.body.style?ww(e,t):mu(e,t,n)}function Oa(e,t){for(var n=0;n<e.length;n++)t(e[n])}function Vl(e){return Hn(e,"boxSizing")==="border-box"}var Ow=["margin","border","padding"],mi=-1,Cw=2,vi=1,Pw=0;function Sw(e,t,n){var r={},o=e.style,i;for(i in t)t.hasOwnProperty(i)&&(r[i]=o[i],o[i]=t[i]);n.call(e);for(i in t)t.hasOwnProperty(i)&&(o[i]=r[i])}function mn(e,t,n){var r=0,o,i,a;for(i=0;i<t.length;i++)if(o=t[i],o)for(a=0;a<n.length;a++){var s=void 0;o==="border"?s="".concat(o).concat(n[a],"Width"):s=o+n[a],r+=parseFloat(Hn(e,s))||0}return r}var Te={getParent:function(t){var n=t;do n.nodeType===11&&n.host?n=n.host:n=n.parentNode;while(n&&n.nodeType!==1&&n.nodeType!==9);return n}};Oa(["Width","Height"],function(e){Te["doc".concat(e)]=function(t){var n=t.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],Te["viewport".concat(e)](n))},Te["viewport".concat(e)]=function(t){var n="client".concat(e),r=t.document,o=r.body,i=r.documentElement,a=i[n];return r.compatMode==="CSS1Compat"&&a||o&&o[n]||a}});function vu(e,t,n){var r=n;if(xa(e))return t==="width"?Te.viewportWidth(e):Te.viewportHeight(e);if(e.nodeType===9)return t==="width"?Te.docWidth(e):Te.docHeight(e);var o=t==="width"?["Left","Right"]:["Top","Bottom"],i=Math.floor(t==="width"?e.getBoundingClientRect().width:e.getBoundingClientRect().height),a=Vl(e),s=0;(i==null||i<=0)&&(i=void 0,s=Hn(e,t),(s==null||Number(s)<0)&&(s=e.style[t]||0),s=Math.floor(parseFloat(s))||0),r===void 0&&(r=a?vi:mi);var u=i!==void 0||a,c=i||s;return r===mi?u?c-mn(e,["border","padding"],o):s:u?r===vi?c:c+(r===Cw?-mn(e,["border"],o):mn(e,["margin"],o)):s+mn(e,Ow.slice(r),o)}var Ew={position:"absolute",visibility:"hidden",display:"block"};function gu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,o=t[0];return o.offsetWidth!==0?r=vu.apply(void 0,t):Sw(o,Ew,function(){r=vu.apply(void 0,t)}),r}Oa(["width","height"],function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);Te["outer".concat(t)]=function(r,o){return r&&gu(r,e,o?Pw:vi)};var n=e==="width"?["Left","Right"]:["Top","Bottom"];Te[e]=function(r,o){var i=o;if(i!==void 0){if(r){var a=Vl(r);return a&&(i+=mn(r,["padding","border"],n)),Lt(r,e,i)}return}return r&&gu(r,e,mi)}});function zl(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var N={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var n=t.ownerDocument||t;return n.defaultView||n.parentWindow},getDocument:Hl,offset:function(t,n,r){if(typeof n<"u")xw(t,n,r||{});else return Mn(t)},isWindow:xa,each:Oa,css:Lt,clone:function(t){var n,r={};for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);var o=t.overflow;if(o)for(n in t)t.hasOwnProperty(n)&&(r.overflow[n]=t.overflow[n]);return r},mix:zl,getWindowScrollLeft:function(t){return Fl(t)},getWindowScrollTop:function(t){return Bl(t)},merge:function(){for(var t={},n=0;n<arguments.length;n++)N.mix(t,n<0||arguments.length<=n?void 0:arguments[n]);return t},viewportWidth:0,viewportHeight:0};zl(N,Te);var jo=N.getParent;function gi(e){if(N.isWindow(e)||e.nodeType===9)return null;var t=N.getDocument(e),n=t.body,r,o=N.css(e,"position"),i=o==="fixed"||o==="absolute";if(!i)return e.nodeName.toLowerCase()==="html"?null:jo(e);for(r=jo(e);r&&r!==n&&r.nodeType!==9;r=jo(r))if(o=N.css(r,"position"),o!=="static")return r;return null}var yu=N.getParent;function Tw(e){if(N.isWindow(e)||e.nodeType===9)return!1;var t=N.getDocument(e),n=t.body,r=null;for(r=yu(e);r&&r!==n&&r!==t;r=yu(r)){var o=N.css(r,"position");if(o==="fixed")return!0}return!1}function Ca(e,t){for(var n={left:0,right:1/0,top:0,bottom:1/0},r=gi(e),o=N.getDocument(e),i=o.defaultView||o.parentWindow,a=o.body,s=o.documentElement;r;){if((navigator.userAgent.indexOf("MSIE")===-1||r.clientWidth!==0)&&r!==a&&r!==s&&N.css(r,"overflow")!=="visible"){var u=N.offset(r);u.left+=r.clientLeft,u.top+=r.clientTop,n.top=Math.max(n.top,u.top),n.right=Math.min(n.right,u.left+r.clientWidth),n.bottom=Math.min(n.bottom,u.top+r.clientHeight),n.left=Math.max(n.left,u.left)}else if(r===a||r===s)break;r=gi(r)}var c=null;if(!N.isWindow(e)&&e.nodeType!==9){c=e.style.position;var l=N.css(e,"position");l==="absolute"&&(e.style.position="fixed")}var p=N.getWindowScrollLeft(i),d=N.getWindowScrollTop(i),m=N.viewportWidth(i),b=N.viewportHeight(i),g=s.scrollWidth,y=s.scrollHeight,v=window.getComputedStyle(a);if(v.overflowX==="hidden"&&(g=i.innerWidth),v.overflowY==="hidden"&&(y=i.innerHeight),e.style&&(e.style.position=c),t||Tw(e))n.left=Math.max(n.left,p),n.top=Math.max(n.top,d),n.right=Math.min(n.right,p+m),n.bottom=Math.min(n.bottom,d+b);else{var w=Math.max(g,p+m);n.right=Math.min(n.right,w);var O=Math.max(y,d+b);n.bottom=Math.min(n.bottom,O)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function _w(e,t,n,r){var o=N.clone(e),i={width:t.width,height:t.height};return r.adjustX&&o.left<n.left&&(o.left=n.left),r.resizeWidth&&o.left>=n.left&&o.left+i.width>n.right&&(i.width-=o.left+i.width-n.right),r.adjustX&&o.left+i.width>n.right&&(o.left=Math.max(n.right-i.width,n.left)),r.adjustY&&o.top<n.top&&(o.top=n.top),r.resizeHeight&&o.top>=n.top&&o.top+i.height>n.bottom&&(i.height-=o.top+i.height-n.bottom),r.adjustY&&o.top+i.height>n.bottom&&(o.top=Math.max(n.bottom-i.height,n.top)),N.mix(o,i)}function Pa(e){var t,n,r;if(!N.isWindow(e)&&e.nodeType!==9)t=N.offset(e),n=N.outerWidth(e),r=N.outerHeight(e);else{var o=N.getWindow(e);t={left:N.getWindowScrollLeft(o),top:N.getWindowScrollTop(o)},n=N.viewportWidth(o),r=N.viewportHeight(o)}return t.width=n,t.height=r,t}function bu(e,t){var n=t.charAt(0),r=t.charAt(1),o=e.width,i=e.height,a=e.left,s=e.top;return n==="c"?s+=i/2:n==="b"&&(s+=i),r==="c"?a+=o/2:r==="r"&&(a+=o),{left:a,top:s}}function nr(e,t,n,r,o){var i=bu(t,n[1]),a=bu(e,n[0]),s=[a.left-i.left,a.top-i.top];return{left:Math.round(e.left-s[0]+r[0]-o[0]),top:Math.round(e.top-s[1]+r[1]-o[1])}}function wu(e,t,n){return e.left<n.left||e.left+t.width>n.right}function xu(e,t,n){return e.top<n.top||e.top+t.height>n.bottom}function Mw(e,t,n){return e.left>n.right||e.left+t.width<n.left}function $w(e,t,n){return e.top>n.bottom||e.top+t.height<n.top}function rr(e,t,n){var r=[];return N.each(e,function(o){r.push(o.replace(t,function(i){return n[i]}))}),r}function or(e,t){return e[t]=-e[t],e}function Ou(e,t){var n;return/%$/.test(e)?n=parseInt(e.substring(0,e.length-1),10)/100*t:n=parseInt(e,10),n||0}function Cu(e,t){e[0]=Ou(e[0],t.width),e[1]=Ou(e[1],t.height)}function Ul(e,t,n,r){var o=n.points,i=n.offset||[0,0],a=n.targetOffset||[0,0],s=n.overflow,u=n.source||e;i=[].concat(i),a=[].concat(a),s=s||{};var c={},l=0,p=!!(s&&s.alwaysByViewport),d=Ca(u,p),m=Pa(u);Cu(i,m),Cu(a,t);var b=nr(m,t,o,i,a),g=N.merge(m,b);if(d&&(s.adjustX||s.adjustY)&&r){if(s.adjustX&&wu(b,m,d)){var y=rr(o,/[lr]/gi,{l:"r",r:"l"}),v=or(i,0),w=or(a,0),O=nr(m,t,y,v,w);Mw(O,m,d)||(l=1,o=y,i=v,a=w)}if(s.adjustY&&xu(b,m,d)){var S=rr(o,/[tb]/gi,{t:"b",b:"t"}),T=or(i,1),P=or(a,1),E=nr(m,t,S,T,P);$w(E,m,d)||(l=1,o=S,i=T,a=P)}l&&(b=nr(m,t,o,i,a),N.mix(g,b));var D=wu(b,m,d),k=xu(b,m,d);if(D||k){var R=o;D&&(R=rr(o,/[lr]/gi,{l:"r",r:"l"})),k&&(R=rr(o,/[tb]/gi,{t:"b",b:"t"})),o=R,i=n.offset||[0,0],a=n.targetOffset||[0,0]}c.adjustX=s.adjustX&&D,c.adjustY=s.adjustY&&k,(c.adjustX||c.adjustY)&&(g=_w(b,m,d,c))}return g.width!==m.width&&N.css(u,"width",N.width(u)+g.width-m.width),g.height!==m.height&&N.css(u,"height",N.height(u)+g.height-m.height),N.offset(u,{left:g.left,top:g.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:o,offset:i,targetOffset:a,overflow:c}}function jw(e,t){var n=Ca(e,t),r=Pa(e);return!n||r.left+r.width<=n.left||r.top+r.height<=n.top||r.left>=n.right||r.top>=n.bottom}function Sa(e,t,n){var r=n.target||t,o=Pa(r),i=!jw(r,n.overflow&&n.overflow.alwaysByViewport);return Ul(e,o,n,i)}Sa.__getOffsetParent=gi;Sa.__getVisibleRectForElement=Ca;function Aw(e,t,n){var r,o,i=N.getDocument(e),a=i.defaultView||i.parentWindow,s=N.getWindowScrollLeft(a),u=N.getWindowScrollTop(a),c=N.viewportWidth(a),l=N.viewportHeight(a);"pageX"in t?r=t.pageX:r=s+t.clientX,"pageY"in t?o=t.pageY:o=u+t.clientY;var p={left:r,top:o,width:0,height:0},d=r>=0&&r<=s+c&&o>=0&&o<=u+l,m=[n.points[0],"cc"];return Ul(e,p,fu(fu({},n),{},{points:m}),d)}function Dw(e,t){var n=void 0;function r(){n&&(clearTimeout(n),n=null)}function o(){r(),n=setTimeout(e,t)}return o.clear=r,o}function kw(e,t){return e===t?!0:!e||!t?!1:"pageX"in t&&"pageY"in t?e.pageX===t.pageX&&e.pageY===t.pageY:"clientX"in t&&"clientY"in t?e.clientX===t.clientX&&e.clientY===t.clientY:!1}function Pu(e){return e&&typeof e=="object"&&e.window===e}function Su(e,t){var n=Math.floor(e),r=Math.floor(t);return Math.abs(n-r)<=1}function Nw(e,t){e!==document.activeElement&&ui(t,e)&&e.focus()}function Ao(e){return typeof e!="function"||!e?null:e()}function Do(e){return typeof e!="object"||!e?null:e}var Cr=function(e){_t(t,e);function t(){var n,r,o,i;Tt(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return i=(r=(o=Xe(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),o),o.forceAlign=function(){var c=o.props,l=c.disabled,p=c.target,d=c.align,m=c.onAlign;if(!l&&p){var b=we.findDOMNode(o),g=void 0,y=Ao(p),v=Do(p),w=document.activeElement;y?g=Sa(b,y,d):v&&(g=Aw(b,v,d)),Nw(w,b),m&&m(b,g)}},r),Xe(o,i)}return wa(t,[{key:"componentDidMount",value:function(){var r=this.props;this.forceAlign(),!r.disabled&&r.monitorWindowResize&&this.startMonitorWindowResize()}},{key:"componentDidUpdate",value:function(r){var o=!1,i=this.props;if(!i.disabled){var a=we.findDOMNode(this),s=a?a.getBoundingClientRect():null;if(r.disabled)o=!0;else{var u=Ao(r.target),c=Ao(i.target),l=Do(r.target),p=Do(i.target);Pu(u)&&Pu(c)?o=!1:(u!==c||u&&!c&&p||l&&p&&c||p&&!kw(l,p))&&(o=!0);var d=this.sourceRect||{};!o&&a&&(!Su(d.width,s.width)||!Su(d.height,s.height))&&(o=!0)}this.sourceRect=s}o&&this.forceAlign(),i.monitorWindowResize&&!i.disabled?this.startMonitorWindowResize():this.stopMonitorWindowResize()}},{key:"componentWillUnmount",value:function(){this.stopMonitorWindowResize()}},{key:"startMonitorWindowResize",value:function(){this.resizeHandler||(this.bufferMonitor=Dw(this.forceAlign,this.props.monitorBufferTime),this.resizeHandler=hn(window,"resize",this.bufferMonitor))}},{key:"stopMonitorWindowResize",value:function(){this.resizeHandler&&(this.bufferMonitor.clear(),this.resizeHandler.remove(),this.resizeHandler=null)}},{key:"render",value:function(){var r=this,o=this.props,i=o.childrenProps,a=o.children,s=j.Children.only(a);if(i){var u={},c=Object.keys(i);return c.forEach(function(l){u[l]=r.props[i[l]]}),j.cloneElement(s,u)}return s}}]),t}(C.Component);Cr.propTypes={childrenProps:f.object,align:f.object.isRequired,target:f.oneOfType([f.func,f.shape({clientX:f.number,clientY:f.number,pageX:f.number,pageY:f.number})]),onAlign:f.func,monitorBufferTime:f.number,monitorWindowResize:f.bool,disabled:f.bool,children:f.any};Cr.defaultProps={target:function(){return window},monitorBufferTime:50,monitorWindowResize:!1,disabled:!1};var Rw=Il,Iw=Lw(Rw);function Lw(e){return e&&e.__esModule?e:{default:e}}var Ww=function(e,t,n){return t in e?(0,Iw.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Fw=function(t){var n=t.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");return typeof n.componentWillReceiveProps!="function"||!j.Profiler||(n.UNSAFE_componentWillReceiveProps=n.componentWillReceiveProps,delete n.componentWillReceiveProps),t};function xn(e){var t=[];return j.Children.forEach(e,function(n){t.push(n)}),t}function At(e,t){var n=null;return e&&e.forEach(function(r){n||r&&r.key===t&&(n=r)}),n}function ko(e,t,n){var r=null;return e&&e.forEach(function(o){if(o&&o.key===t&&o.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=o}}),r}function Bw(e,t,n){var r=e.length===t.length;return r&&e.forEach(function(o,i){var a=t[i];o&&a&&(o&&!a||!o&&a||o.key!==a.key||n&&o.props[n]!==a.props[n])&&(r=!1)}),r}function Hw(e,t){var n=[],r={},o=[];return e.forEach(function(i){i&&At(t,i.key)?o.length&&(r[i.key]=o,o=[]):o.push(i)}),t.forEach(function(i){i&&Object.prototype.hasOwnProperty.call(r,i.key)&&(n=n.concat(r[i.key])),n.push(i)}),n=n.concat(o),n}var No={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},Ro={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},Dt=[],kt=[];function Vw(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||(delete No.animationstart.animation,delete Ro.animationend.animation),"TransitionEvent"in window||(delete No.transitionstart.transition,delete Ro.transitionend.transition);function n(r,o){for(var i in r)if(r.hasOwnProperty(i)){var a=r[i];for(var s in a)if(s in t){o.push(a[s]);break}}}n(No,Dt),n(Ro,kt)}typeof window<"u"&&typeof document<"u"&&Vw();function Eu(e,t,n){e.addEventListener(t,n,!1)}function Tu(e,t,n){e.removeEventListener(t,n,!1)}var $n={startEvents:Dt,addStartEventListener:function(t,n){if(Dt.length===0){window.setTimeout(n,0);return}Dt.forEach(function(r){Eu(t,r,n)})},removeStartEventListener:function(t,n){Dt.length!==0&&Dt.forEach(function(r){Tu(t,r,n)})},endEvents:kt,addEndEventListener:function(t,n){if(kt.length===0){window.setTimeout(n,0);return}kt.forEach(function(r){Eu(t,r,n)})},removeEndEventListener:function(t,n){kt.length!==0&&kt.forEach(function(r){Tu(t,r,n)})}},Io,_u;function Mu(){return _u||(_u=1,Io=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}),Io}try{var Yr=Mu()}catch{var Yr=Mu()}var zw=/\s+/,Uw=Object.prototype.toString,Yw=function(e){return new Ke(e)};function Ke(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}Ke.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array(),n=Yr(t,e);return~n||t.push(e),this.el.className=t.join(" "),this};Ke.prototype.remove=function(e){if(Uw.call(e)=="[object RegExp]")return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),n=Yr(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this};Ke.prototype.removeMatching=function(e){for(var t=this.array(),n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this};Ke.prototype.toggle=function(e,t){return this.list?(typeof t<"u"?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(typeof t<"u"?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)};Ke.prototype.array=function(){var e=this.el.getAttribute("class")||"",t=e.replace(/^\s+|\s+$/g,""),n=t.split(zw);return n[0]===""&&n.shift(),n};Ke.prototype.has=Ke.prototype.contains=function(e){return this.list?this.list.contains(e):!!~Yr(this.array(),e)};const Gw=Xt(Yw);var Ea=$n.endEvents.length!==0,qw=["Webkit","Moz","O","ms"],$u=["-webkit-","-moz-","-o-","ms-",""];function ir(e,t){for(var n=window.getComputedStyle(e,null),r="",o=0;o<$u.length&&(r=n.getPropertyValue($u[o]+t),!r);o++);return r}function Yl(e){if(Ea){var t=parseFloat(ir(e,"transition-delay"))||0,n=parseFloat(ir(e,"transition-duration"))||0,r=parseFloat(ir(e,"animation-delay"))||0,o=parseFloat(ir(e,"animation-duration"))||0,i=Math.max(n+t,o+r);e.rcEndAnimTimeout=setTimeout(function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()},i*1e3+200)}}function Gl(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}var Gr=function(t,n,r){var o=(typeof n>"u"?"undefined":db(n))==="object",i=o?n.name:n,a=o?n.active:n+"-active",s=r,u=void 0,c=void 0,l=Gw(t);return r&&Object.prototype.toString.call(r)==="[object Object]"&&(s=r.end,u=r.start,c=r.active),t.rcEndListener&&t.rcEndListener(),t.rcEndListener=function(p){p&&p.target!==t||(t.rcAnimTimeout&&(clearTimeout(t.rcAnimTimeout),t.rcAnimTimeout=null),Gl(t),l.remove(i),l.remove(a),$n.removeEndEventListener(t,t.rcEndListener),t.rcEndListener=null,s&&s())},$n.addEndEventListener(t,t.rcEndListener),u&&u(),l.add(i),t.rcAnimTimeout=setTimeout(function(){t.rcAnimTimeout=null,l.add(a),c&&setTimeout(c,0),Yl(t)},30),{stop:function(){t.rcEndListener&&t.rcEndListener()}}};Gr.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(r){r&&r.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),Gl(e),$n.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},$n.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout(function(){for(var r in t)t.hasOwnProperty(r)&&(e.style[r]=t[r]);e.rcAnimTimeout=null,Yl(e)},0)};Gr.setTransition=function(e,t,n){var r=t,o=n;n===void 0&&(o=r,r=""),r=r||"",qw.forEach(function(i){e.style[i+"Transition"+r]=o})};Gr.isCssAnimationSupported=Ea;var Wt={isAppearSupported:function(t){return t.transitionName&&t.transitionAppear||t.animation.appear},isEnterSupported:function(t){return t.transitionName&&t.transitionEnter||t.animation.enter},isLeaveSupported:function(t){return t.transitionName&&t.transitionLeave||t.animation.leave},allowAppearCallback:function(t){return t.transitionAppear||t.animation.appear},allowEnterCallback:function(t){return t.transitionEnter||t.animation.enter},allowLeaveCallback:function(t){return t.transitionLeave||t.animation.leave}},Xw={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},ql=function(e){_t(t,e);function t(){return Tt(this,t),Xe(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return wa(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(r){Wt.isEnterSupported(this.props)?this.transition("enter",r):r()}},{key:"componentWillAppear",value:function(r){Wt.isAppearSupported(this.props)?this.transition("appear",r):r()}},{key:"componentWillLeave",value:function(r){Wt.isLeaveSupported(this.props)?this.transition("leave",r):r()}},{key:"transition",value:function(r,o){var i=this,a=we.findDOMNode(this),s=this.props,u=s.transitionName,c=typeof u=="object";this.stop();var l=function(){i.stopper=null,o()};if((Ea||!s.animation[r])&&u&&s[Xw[r]]){var p=c?u[r]:u+"-"+r,d=p+"-active";c&&u[r+"Active"]&&(d=u[r+"Active"]),this.stopper=Gr(a,{name:p,active:d},l)}else this.stopper=s.animation[r](a,l)}},{key:"stop",value:function(){var r=this.stopper;r&&(this.stopper=null,r.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(j.Component);ql.propTypes={children:f.any,animation:f.any,transitionName:f.any};var Kw="rc_animate_"+Date.now();function On(e){var t=e.children;return j.isValidElement(t)&&!t.key?j.cloneElement(t,{key:Kw}):t}function ar(){}var qr=function(e){_t(t,e);function t(n){Tt(this,t);var r=Xe(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return Zw.call(r),r.currentlyAnimatingKeys={},r.keysToEnter=[],r.keysToLeave=[],r.state={children:xn(On(n))},r.childrenRefs={},r}return wa(t,[{key:"componentDidMount",value:function(){var r=this,o=this.props.showProp,i=this.state.children;o&&(i=i.filter(function(a){return!!a.props[o]})),i.forEach(function(a){a&&r.performAppear(a.key)})}},{key:"componentWillReceiveProps",value:function(r){var o=this;this.nextProps=r;var i=xn(On(r)),a=this.props;a.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach(function(p){o.stop(p)});var s=a.showProp,u=this.currentlyAnimatingKeys,c=a.exclusive?xn(On(a)):this.state.children,l=[];s?(c.forEach(function(p){var d=p&&At(i,p.key),m=void 0;(!d||!d.props[s])&&p.props[s]?m=j.cloneElement(d||p,Ww({},s,!0)):m=d,m&&l.push(m)}),i.forEach(function(p){(!p||!At(c,p.key))&&l.push(p)})):l=Hw(c,i),this.setState({children:l}),i.forEach(function(p){var d=p&&p.key;if(!(p&&u[d])){var m=p&&At(c,d);if(s){var b=p.props[s];if(m){var g=ko(c,d,s);!g&&b&&o.keysToEnter.push(d)}else b&&o.keysToEnter.push(d)}else m||o.keysToEnter.push(d)}}),c.forEach(function(p){var d=p&&p.key;if(!(p&&u[d])){var m=p&&At(i,d);if(s){var b=p.props[s];if(m){var g=ko(i,d,s);!g&&b&&o.keysToLeave.push(d)}else b&&o.keysToLeave.push(d)}else m||o.keysToLeave.push(d)}})}},{key:"componentDidUpdate",value:function(){var r=this.keysToEnter;this.keysToEnter=[],r.forEach(this.performEnter);var o=this.keysToLeave;this.keysToLeave=[],o.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(r,o){var i=this.props.showProp;return i?ko(r,o,i):At(r,o)}},{key:"stop",value:function(r){delete this.currentlyAnimatingKeys[r];var o=this.childrenRefs[r];o&&o.stop()}},{key:"render",value:function(){var r=this,o=this.props;this.nextProps=o;var i=this.state.children,a=null;i&&(a=i.map(function(c){if(c==null)return c;if(!c.key)throw new Error("must set key for <rc-animate> children");return j.createElement(ql,{key:c.key,ref:function(p){r.childrenRefs[c.key]=p},animation:o.animation,transitionName:o.transitionName,transitionEnter:o.transitionEnter,transitionAppear:o.transitionAppear,transitionLeave:o.transitionLeave},c)}));var s=o.component;if(s){var u=o;return typeof s=="string"&&(u=It({className:o.className,style:o.style},o.componentProps)),j.createElement(s,u,a)}return a[0]||null}}]),t}(j.Component);qr.isAnimate=!0;qr.propTypes={className:f.string,style:f.object,component:f.any,componentProps:f.object,animation:f.object,transitionName:f.oneOfType([f.string,f.object]),transitionEnter:f.bool,transitionAppear:f.bool,exclusive:f.bool,transitionLeave:f.bool,onEnd:f.func,onEnter:f.func,onLeave:f.func,onAppear:f.func,showProp:f.string,children:f.node};qr.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:ar,onEnter:ar,onLeave:ar,onAppear:ar};var Zw=function(){var t=this;this.performEnter=function(n){t.childrenRefs[n]&&(t.currentlyAnimatingKeys[n]=!0,t.childrenRefs[n].componentWillEnter(t.handleDoneAdding.bind(t,n,"enter")))},this.performAppear=function(n){t.childrenRefs[n]&&(t.currentlyAnimatingKeys[n]=!0,t.childrenRefs[n].componentWillAppear(t.handleDoneAdding.bind(t,n,"appear")))},this.handleDoneAdding=function(n,r){var o=t.props;if(delete t.currentlyAnimatingKeys[n],!(o.exclusive&&o!==t.nextProps)){var i=xn(On(o));t.isValidChildByKey(i,n)?r==="appear"?Wt.allowAppearCallback(o)&&(o.onAppear(n),o.onEnd(n,!0)):Wt.allowEnterCallback(o)&&(o.onEnter(n),o.onEnd(n,!0)):t.performLeave(n)}},this.performLeave=function(n){t.childrenRefs[n]&&(t.currentlyAnimatingKeys[n]=!0,t.childrenRefs[n].componentWillLeave(t.handleDoneLeaving.bind(t,n)))},this.handleDoneLeaving=function(n){var r=t.props;if(delete t.currentlyAnimatingKeys[n],!(r.exclusive&&r!==t.nextProps)){var o=xn(On(r));if(t.isValidChildByKey(o,n))t.performEnter(n);else{var i=function(){Wt.allowLeaveCallback(r)&&(r.onLeave(n),r.onEnd(n,!1))};Bw(t.state.children,o,r.showProp)?i():t.setState({children:o},i)}}}};const Lo=Fw(qr);var Qw=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Ta=function(e){_t(t,e);function t(){return Tt(this,t),Xe(this,e.apply(this,arguments))}return t.prototype.shouldComponentUpdate=function(r){return r.hiddenClassName||r.visible},t.prototype.render=function(){var r=this.props,o=r.hiddenClassName,i=r.visible,a=Qw(r,["hiddenClassName","visible"]);return o||j.Children.count(a.children)>1?(!i&&o&&(a.className+=" "+o),j.createElement("div",a)):j.Children.only(a.children)},t}(C.Component);Ta.propTypes={children:f.any,className:f.string,visible:f.bool,hiddenClassName:f.string};var yi=function(e){_t(t,e);function t(){return Tt(this,t),Xe(this,e.apply(this,arguments))}return t.prototype.render=function(){var r=this.props,o=r.className;return r.visible||(o+=" "+r.hiddenClassName),j.createElement("div",{className:o,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,onMouseDown:r.onMouseDown,onTouchStart:r.onTouchStart,style:r.style},j.createElement(Ta,{className:r.prefixCls+"-content",visible:r.visible},r.children))},t}(C.Component);yi.propTypes={hiddenClassName:f.string,className:f.string,prefixCls:f.string,onMouseEnter:f.func,onMouseLeave:f.func,onMouseDown:f.func,onTouchStart:f.func,children:f.any};var Xl=function(e){_t(t,e);function t(n){Tt(this,t);var r=Xe(this,e.call(this,n));return Jw.call(r),r.state={stretchChecked:!1,targetWidth:void 0,targetHeight:void 0},r.savePopupRef=cu.bind(r,"popupInstance"),r.saveAlignRef=cu.bind(r,"alignInstance"),r}return t.prototype.componentDidMount=function(){this.rootNode=this.getPopupDomNode(),this.setStretchSize()},t.prototype.componentDidUpdate=function(){this.setStretchSize()},t.prototype.getPopupDomNode=function(){return we.findDOMNode(this.popupInstance)},t.prototype.getMaskTransitionName=function(){var r=this.props,o=r.maskTransitionName,i=r.maskAnimation;return!o&&i&&(o=r.prefixCls+"-"+i),o},t.prototype.getTransitionName=function(){var r=this.props,o=r.transitionName;return!o&&r.animation&&(o=r.prefixCls+"-"+r.animation),o},t.prototype.getClassName=function(r){return this.props.prefixCls+" "+this.props.className+" "+r},t.prototype.getPopupElement=function(){var r=this,o=this.savePopupRef,i=this.state,a=i.stretchChecked,s=i.targetHeight,u=i.targetWidth,c=this.props,l=c.align,p=c.visible,d=c.prefixCls,m=c.style,b=c.getClassNameFromAlign,g=c.destroyPopupOnHide,y=c.stretch,v=c.children,w=c.onMouseEnter,O=c.onMouseLeave,S=c.onMouseDown,T=c.onTouchStart,P=this.getClassName(this.currentAlignClassName||b(l)),E=d+"-hidden";p||(this.currentAlignClassName=null);var D={};y&&(y.indexOf("height")!==-1?D.height=s:y.indexOf("minHeight")!==-1&&(D.minHeight=s),y.indexOf("width")!==-1?D.width=u:y.indexOf("minWidth")!==-1&&(D.minWidth=u),a||(D.visibility="hidden",setTimeout(function(){r.alignInstance&&r.alignInstance.forceAlign()},0)));var k=It({},D,m,this.getZIndexStyle()),R={className:P,prefixCls:d,ref:o,onMouseEnter:w,onMouseLeave:O,onMouseDown:S,onTouchStart:T,style:k};return g?j.createElement(Lo,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName()},p?j.createElement(Cr,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,align:l,onAlign:this.onAlign},j.createElement(yi,It({visible:!0},R),v)):null):j.createElement(Lo,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName(),showProp:"xVisible"},j.createElement(Cr,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,xVisible:p,childrenProps:{visible:"xVisible"},disabled:!p,align:l,onAlign:this.onAlign},j.createElement(yi,It({hiddenClassName:E},R),v)))},t.prototype.getZIndexStyle=function(){var r={},o=this.props;return o.zIndex!==void 0&&(r.zIndex=o.zIndex),r},t.prototype.getMaskElement=function(){var r=this.props,o=void 0;if(r.mask){var i=this.getMaskTransitionName();o=j.createElement(Ta,{style:this.getZIndexStyle(),key:"mask",className:r.prefixCls+"-mask",hiddenClassName:r.prefixCls+"-mask-hidden",visible:r.visible}),i&&(o=j.createElement(Lo,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:i},o))}return o},t.prototype.render=function(){return j.createElement("div",null,this.getMaskElement(),this.getPopupElement())},t}(C.Component);Xl.propTypes={visible:f.bool,style:f.object,getClassNameFromAlign:f.func,onAlign:f.func,getRootDomNode:f.func,align:f.any,destroyPopupOnHide:f.bool,className:f.string,prefixCls:f.string,onMouseEnter:f.func,onMouseLeave:f.func,onMouseDown:f.func,onTouchStart:f.func,stretch:f.string,children:f.node,point:f.shape({pageX:f.number,pageY:f.number})};var Jw=function(){var t=this;this.onAlign=function(n,r){var o=t.props,i=o.getClassNameFromAlign(r);t.currentAlignClassName!==i&&(t.currentAlignClassName=i,n.className=t.getClassName(i)),o.onAlign(n,r)},this.setStretchSize=function(){var n=t.props,r=n.stretch,o=n.getRootDomNode,i=n.visible,a=t.state,s=a.stretchChecked,u=a.targetHeight,c=a.targetWidth;if(!r||!i){s&&t.setState({stretchChecked:!1});return}var l=o();if(l){var p=l.offsetHeight,d=l.offsetWidth;(u!==p||c!==d||!s)&&t.setState({stretchChecked:!0,targetHeight:p,targetWidth:d})}},this.getTargetElement=function(){return t.props.getRootDomNode()},this.getAlignTarget=function(){var n=t.props.point;return n||t.getTargetElement}};function Wo(){}function ex(){return""}function tx(){return window.document}var nx=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"],ju=!!pr.createPortal,Kl={rcTrigger:f.shape({onPopupMouseDown:f.func})},on=function(e){_t(t,e);function t(n){Tt(this,t);var r=Xe(this,e.call(this,n));rx.call(r);var o=void 0;return"popupVisible"in n?o=!!n.popupVisible:o=!!n.defaultPopupVisible,r.state={prevPopupVisible:o,popupVisible:o},nx.forEach(function(i){r["fire"+i]=function(a){r.fireEvents(i,a)}}),r}return t.prototype.getChildContext=function(){return{rcTrigger:{onPopupMouseDown:this.onPopupMouseDown}}},t.prototype.componentDidMount=function(){this.componentDidUpdate({},{popupVisible:this.state.popupVisible})},t.prototype.componentDidUpdate=function(r,o){var i=this.props,a=this.state,s=function(){o.popupVisible!==a.popupVisible&&i.afterPopupVisibleChange(a.popupVisible)};if(ju||this.renderComponent(null,s),a.popupVisible){var u=void 0;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(u=i.getDocument(),this.clickOutsideHandler=hn(u,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(u=u||i.getDocument(),this.touchOutsideHandler=hn(u,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(u=u||i.getDocument(),this.contextMenuOutsideHandler1=hn(u,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=hn(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()},t.prototype.componentWillUnmount=function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout)},t.getDerivedStateFromProps=function(r,o){var i=r.popupVisible,a={};return i!==void 0&&o.popupVisible!==i&&(a.popupVisible=i,a.prevPopupVisible=o.popupVisible),a},t.prototype.getPopupDomNode=function(){return this._component&&this._component.getPopupDomNode?this._component.getPopupDomNode():null},t.prototype.getPopupAlign=function(){var r=this.props,o=r.popupPlacement,i=r.popupAlign,a=r.builtinPlacements;return o&&a?Jb(a,o,i):i},t.prototype.setPopupVisible=function(r,o){var i=this.props.alignPoint,a=this.state.popupVisible;this.clearDelayTimer(),a!==r&&("popupVisible"in this.props||this.setState({popupVisible:r,prevPopupVisible:a}),this.props.onPopupVisibleChange(r)),i&&o&&this.setPoint(o)},t.prototype.delaySetPopupVisible=function(r,o,i){var a=this,s=o*1e3;if(this.clearDelayTimer(),s){var u=i?{pageX:i.pageX,pageY:i.pageY}:null;this.delayTimer=setTimeout(function(){a.setPopupVisible(r,u),a.clearDelayTimer()},s)}else this.setPopupVisible(r,i)},t.prototype.clearDelayTimer=function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)},t.prototype.clearOutsideHandler=function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},t.prototype.createTwoChains=function(r){var o=this.props.children.props,i=this.props;return o[r]&&i[r]?this["fire"+r]:o[r]||i[r]},t.prototype.isClickToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("click")!==-1||i.indexOf("click")!==-1},t.prototype.isContextMenuToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("contextMenu")!==-1||i.indexOf("contextMenu")!==-1},t.prototype.isClickToHide=function(){var r=this.props,o=r.action,i=r.hideAction;return o.indexOf("click")!==-1||i.indexOf("click")!==-1},t.prototype.isMouseEnterToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("hover")!==-1||i.indexOf("mouseEnter")!==-1},t.prototype.isMouseLeaveToHide=function(){var r=this.props,o=r.action,i=r.hideAction;return o.indexOf("hover")!==-1||i.indexOf("mouseLeave")!==-1},t.prototype.isFocusToShow=function(){var r=this.props,o=r.action,i=r.showAction;return o.indexOf("focus")!==-1||i.indexOf("focus")!==-1},t.prototype.isBlurToHide=function(){var r=this.props,o=r.action,i=r.hideAction;return o.indexOf("focus")!==-1||i.indexOf("blur")!==-1},t.prototype.forcePopupAlign=function(){this.state.popupVisible&&this._component&&this._component.alignInstance&&this._component.alignInstance.forceAlign()},t.prototype.fireEvents=function(r,o){var i=this.props.children.props[r];i&&i(o);var a=this.props[r];a&&a(o)},t.prototype.close=function(){this.setPopupVisible(!1)},t.prototype.render=function(){var r=this,o=this.state.popupVisible,i=this.props,a=i.children,s=i.forceRender,u=i.alignPoint,c=i.className,l=j.Children.only(a),p={key:"trigger"};this.isContextMenuToShow()?p.onContextMenu=this.onContextMenu:p.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(p.onClick=this.onClick,p.onMouseDown=this.onMouseDown,p.onTouchStart=this.onTouchStart):(p.onClick=this.createTwoChains("onClick"),p.onMouseDown=this.createTwoChains("onMouseDown"),p.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(p.onMouseEnter=this.onMouseEnter,u&&(p.onMouseMove=this.onMouseMove)):p.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?p.onMouseLeave=this.onMouseLeave:p.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(p.onFocus=this.onFocus,p.onBlur=this.onBlur):(p.onFocus=this.createTwoChains("onFocus"),p.onBlur=this.createTwoChains("onBlur"));var d=yt(l&&l.props&&l.props.className,c);d&&(p.className=d);var m=j.cloneElement(l,p);if(!ju)return j.createElement(ba,{parent:this,visible:o,autoMount:!1,forceRender:s,getComponent:this.getComponent,getContainer:this.getContainer},function(g){var y=g.renderComponent;return r.renderComponent=y,m});var b=void 0;return(o||this._component||s)&&(b=j.createElement(Nl,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),[m,b]},t}(j.Component);on.propTypes={children:f.any,action:f.oneOfType([f.string,f.arrayOf(f.string)]),showAction:f.any,hideAction:f.any,getPopupClassNameFromAlign:f.any,onPopupVisibleChange:f.func,afterPopupVisibleChange:f.func,popup:f.oneOfType([f.node,f.func]).isRequired,popupStyle:f.object,prefixCls:f.string,popupClassName:f.string,className:f.string,popupPlacement:f.string,builtinPlacements:f.object,popupTransitionName:f.oneOfType([f.string,f.object]),popupAnimation:f.any,mouseEnterDelay:f.number,mouseLeaveDelay:f.number,zIndex:f.number,focusDelay:f.number,blurDelay:f.number,getPopupContainer:f.func,getDocument:f.func,forceRender:f.bool,destroyPopupOnHide:f.bool,mask:f.bool,maskClosable:f.bool,onPopupAlign:f.func,popupAlign:f.object,popupVisible:f.bool,defaultPopupVisible:f.bool,maskTransitionName:f.oneOfType([f.string,f.object]),maskAnimation:f.string,stretch:f.string,alignPoint:f.bool};on.contextTypes=Kl;on.childContextTypes=Kl;on.defaultProps={prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:ex,getDocument:tx,onPopupVisibleChange:Wo,afterPopupVisibleChange:Wo,onPopupAlign:Wo,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[]};var rx=function(){var t=this;this.onMouseEnter=function(n){var r=t.props.mouseEnterDelay;t.fireEvents("onMouseEnter",n),t.delaySetPopupVisible(!0,r,r?null:n)},this.onMouseMove=function(n){t.fireEvents("onMouseMove",n),t.setPoint(n)},this.onMouseLeave=function(n){t.fireEvents("onMouseLeave",n),t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)},this.onPopupMouseEnter=function(){t.clearDelayTimer()},this.onPopupMouseLeave=function(n){n.relatedTarget&&!n.relatedTarget.setTimeout&&t._component&&t._component.getPopupDomNode&&ui(t._component.getPopupDomNode(),n.relatedTarget)||t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)},this.onFocus=function(n){t.fireEvents("onFocus",n),t.clearDelayTimer(),t.isFocusToShow()&&(t.focusTime=Date.now(),t.delaySetPopupVisible(!0,t.props.focusDelay))},this.onMouseDown=function(n){t.fireEvents("onMouseDown",n),t.preClickTime=Date.now()},this.onTouchStart=function(n){t.fireEvents("onTouchStart",n),t.preTouchTime=Date.now()},this.onBlur=function(n){t.fireEvents("onBlur",n),t.clearDelayTimer(),t.isBlurToHide()&&t.delaySetPopupVisible(!1,t.props.blurDelay)},this.onContextMenu=function(n){n.preventDefault(),t.fireEvents("onContextMenu",n),t.setPopupVisible(!0,n)},this.onContextMenuClose=function(){t.isContextMenuToShow()&&t.close()},this.onClick=function(n){if(t.fireEvents("onClick",n),t.focusTime){var r=void 0;if(t.preClickTime&&t.preTouchTime?r=Math.min(t.preClickTime,t.preTouchTime):t.preClickTime?r=t.preClickTime:t.preTouchTime&&(r=t.preTouchTime),Math.abs(r-t.focusTime)<20)return;t.focusTime=0}t.preClickTime=0,t.preTouchTime=0,t.isClickToShow()&&(t.isClickToHide()||t.isBlurToHide())&&n&&n.preventDefault&&n.preventDefault();var o=!t.state.popupVisible;(t.isClickToHide()&&!o||o&&t.isClickToShow())&&t.setPopupVisible(!t.state.popupVisible,n)},this.onPopupMouseDown=function(){var n=t.context.rcTrigger,r=n===void 0?{}:n;t.hasPopupMouseDown=!0,clearTimeout(t.mouseDownTimeout),t.mouseDownTimeout=setTimeout(function(){t.hasPopupMouseDown=!1},0),r.onPopupMouseDown&&r.onPopupMouseDown.apply(r,arguments)},this.onDocumentClick=function(n){if(!(t.props.mask&&!t.props.maskClosable)){var r=n.target,o=pr.findDOMNode(t);!ui(o,r)&&!t.hasPopupMouseDown&&t.close()}},this.getRootDomNode=function(){return pr.findDOMNode(t)},this.getPopupClassNameFromAlign=function(n){var r=[],o=t.props,i=o.popupPlacement,a=o.builtinPlacements,s=o.prefixCls,u=o.alignPoint,c=o.getPopupClassNameFromAlign;return i&&a&&r.push(ew(a,s,n,u)),c&&r.push(c(n)),r.join(" ")},this.getComponent=function(){var n=t.props,r=n.prefixCls,o=n.destroyPopupOnHide,i=n.popupClassName,a=n.action,s=n.onPopupAlign,u=n.popupAnimation,c=n.popupTransitionName,l=n.popupStyle,p=n.mask,d=n.maskAnimation,m=n.maskTransitionName,b=n.zIndex,g=n.popup,y=n.stretch,v=n.alignPoint,w=t.state,O=w.popupVisible,S=w.point,T=t.getPopupAlign(),P={};return t.isMouseEnterToShow()&&(P.onMouseEnter=t.onPopupMouseEnter),t.isMouseLeaveToHide()&&(P.onMouseLeave=t.onPopupMouseLeave),P.onMouseDown=t.onPopupMouseDown,P.onTouchStart=t.onPopupMouseDown,j.createElement(Xl,It({prefixCls:r,destroyPopupOnHide:o,visible:O,point:v&&S,className:i,action:a,align:T,onAlign:s,animation:u,getClassNameFromAlign:t.getPopupClassNameFromAlign},P,{stretch:y,getRootDomNode:t.getRootDomNode,style:l,mask:p,zIndex:b,transitionName:c,maskAnimation:d,maskTransitionName:m,ref:t.savePopup}),typeof g=="function"?g():g)},this.getContainer=function(){var n=t.props,r=document.createElement("div");r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%";var o=n.getPopupContainer?n.getPopupContainer(pr.findDOMNode(t)):n.getDocument().body;return o.appendChild(r),r},this.setPoint=function(n){var r=t.props.alignPoint;!r||!n||t.setState({point:{pageX:n.pageX,pageY:n.pageY}})},this.handlePortalUpdate=function(){t.state.prevPopupVisible!==t.state.popupVisible&&t.props.afterPopupVisibleChange(t.state.popupVisible)},this.savePopup=function(n){t._component=n}};ya(on);function ox(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Au(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ix(e,t,n){return t&&Au(e.prototype,t),n&&Au(e,n),e}function ax(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:wi(e)}function bi(e){return bi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},bi(e)}function wi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xi(e,t)}function xi(e,t){return xi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},xi(e,t)}function Pr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _a=function(e){sx(t,e);function t(n){var r;ox(this,t),r=ax(this,bi(t).call(this,n)),Pr(wi(r),"onInputChange",function(a){var s=a.target.value;r.setState({str:s});var u=r.props,c=u.format,l=u.hourOptions,p=u.minuteOptions,d=u.secondOptions,m=u.disabledHours,b=u.disabledMinutes,g=u.disabledSeconds,y=u.onChange;if(s){var v=r.props.value,w=r.getProtoValue().clone(),O=Ie(s,c,!0);if(!O.isValid()){r.setState({invalid:!0});return}if(w.hour(O.hour()).minute(O.minute()).second(O.second()),l.indexOf(w.hour())<0||p.indexOf(w.minute())<0||d.indexOf(w.second())<0){r.setState({invalid:!0});return}var S=m(),T=b(w.hour()),P=g(w.hour(),w.minute());if(S&&S.indexOf(w.hour())>=0||T&&T.indexOf(w.minute())>=0||P&&P.indexOf(w.second())>=0){r.setState({invalid:!0});return}if(v){if(v.hour()!==w.hour()||v.minute()!==w.minute()||v.second()!==w.second()){var E=v.clone();E.hour(w.hour()),E.minute(w.minute()),E.second(w.second()),y(E)}}else v!==w&&y(w)}else y(null);r.setState({invalid:!1})}),Pr(wi(r),"onKeyDown",function(a){var s=r.props,u=s.onEsc,c=s.onKeyDown;a.keyCode===27&&u(),c(a)});var o=n.value,i=n.format;return r.state={str:o&&o.format(i)||"",invalid:!1},r}return ix(t,[{key:"componentDidMount",value:function(){var r=this,o=this.props.focusOnOpen;if(o){var i=window.requestAnimationFrame||window.setTimeout;i(function(){r.refInput.focus(),r.refInput.select()})}}},{key:"componentDidUpdate",value:function(r){var o=this.props,i=o.value,a=o.format;i!==r.value&&this.setState({str:i&&i.format(a)||"",invalid:!1})}},{key:"getProtoValue",value:function(){var r=this.props,o=r.value,i=r.defaultOpenValue;return o||i}},{key:"getInput",value:function(){var r=this,o=this.props,i=o.prefixCls,a=o.placeholder,s=o.inputReadOnly,u=this.state,c=u.invalid,l=u.str,p=c?"".concat(i,"-input-invalid"):"";return j.createElement("input",{className:yt("".concat(i,"-input"),p),ref:function(m){r.refInput=m},onKeyDown:this.onKeyDown,value:l,placeholder:a,onChange:this.onInputChange,readOnly:!!s})}},{key:"render",value:function(){var r=this.props.prefixCls;return j.createElement("div",{className:"".concat(r,"-input-wrap")},this.getInput())}}]),t}(C.Component);Pr(_a,"propTypes",{format:f.string,prefixCls:f.string,disabledDate:f.func,placeholder:f.string,clearText:f.string,value:f.object,inputReadOnly:f.bool,hourOptions:f.array,minuteOptions:f.array,secondOptions:f.array,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,onChange:f.func,onEsc:f.func,defaultOpenValue:f.object,currentSelectPanel:f.string,focusOnOpen:f.bool,onKeyDown:f.func,clearIcon:f.node});Pr(_a,"defaultProps",{inputReadOnly:!1});var Xr={exports:{}},vn={exports:{}};(function(){var e,t,n,r,o,i;typeof performance<"u"&&performance!==null&&performance.now?vn.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(vn.exports=function(){return(e()-o)/1e6},t=process.hrtime,e=function(){var a;return a=t(),a[0]*1e9+a[1]},r=e(),i=process.uptime()*1e9,o=r-i):Date.now?(vn.exports=function(){return Date.now()-n},n=Date.now()):(vn.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(ic);var ux=vn.exports,cx=ux,Re=typeof window>"u"?ic:window,sr=["moz","webkit"],Ft="AnimationFrame",qt=Re["request"+Ft],jn=Re["cancel"+Ft]||Re["cancelRequest"+Ft];for(var pn=0;!qt&&pn<sr.length;pn++)qt=Re[sr[pn]+"Request"+Ft],jn=Re[sr[pn]+"Cancel"+Ft]||Re[sr[pn]+"CancelRequest"+Ft];if(!qt||!jn){var Fo=0,Du=0,st=[],lx=1e3/60;qt=function(e){if(st.length===0){var t=cx(),n=Math.max(0,lx-(t-Fo));Fo=n+t,setTimeout(function(){var r=st.slice(0);st.length=0;for(var o=0;o<r.length;o++)if(!r[o].cancelled)try{r[o].callback(Fo)}catch(i){setTimeout(function(){throw i},0)}},Math.round(n))}return st.push({handle:++Du,callback:e,cancelled:!1}),Du},jn=function(e){for(var t=0;t<st.length;t++)st[t].handle===e&&(st[t].cancelled=!0)}}Xr.exports=function(e){return qt.call(Re,e)};Xr.exports.cancel=function(){jn.apply(Re,arguments)};Xr.exports.polyfill=function(e){e||(e=Re),e.requestAnimationFrame=qt,e.cancelAnimationFrame=jn};var fx=Xr.exports;const ku=Xt(fx);function px(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Nu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function dx(e,t,n){return t&&Nu(e.prototype,t),n&&Nu(e,n),e}function hx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Nt(e)}function Oi(e){return Oi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Oi(e)}function Nt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function mx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ci(e,t)}function Ci(e,t){return Ci=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Ci(e,t)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var vx=function e(t,n,r){if(r<=0){ku(function(){t.scrollTop=n});return}var o=n-t.scrollTop,i=o/r*10;ku(function(){t.scrollTop+=i,t.scrollTop!==n&&e(t,n,r-10)})},gn=function(e){mx(t,e);function t(){var n,r;px(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=hx(this,(n=Oi(t)).call.apply(n,[this].concat(i))),ke(Nt(r),"state",{active:!1}),ke(Nt(r),"onSelect",function(s){var u=r.props,c=u.onSelect,l=u.type;c(l,s)}),ke(Nt(r),"handleMouseEnter",function(s){var u=r.props.onMouseEnter;r.setState({active:!0}),u(s)}),ke(Nt(r),"handleMouseLeave",function(){r.setState({active:!1})}),ke(Nt(r),"saveList",function(s){r.list=s}),r}return dx(t,[{key:"componentDidMount",value:function(){this.scrollToSelected(0)}},{key:"componentDidUpdate",value:function(r){var o=this.props.selectedIndex;r.selectedIndex!==o&&this.scrollToSelected(120)}},{key:"getOptions",value:function(){var r=this,o=this.props,i=o.options,a=o.selectedIndex,s=o.prefixCls,u=o.onEsc;return i.map(function(c,l){var p,d=yt((p={},ke(p,"".concat(s,"-select-option-selected"),a===l),ke(p,"".concat(s,"-select-option-disabled"),c.disabled),p)),m=c.disabled?void 0:function(){r.onSelect(c.value)},b=function(y){y.keyCode===13?m():y.keyCode===27&&u()};return j.createElement("li",{role:"button",onClick:m,className:d,key:l,disabled:c.disabled,tabIndex:"0",onKeyDown:b},c.value)})}},{key:"scrollToSelected",value:function(r){var o=this.props.selectedIndex,i=we.findDOMNode(this),a=we.findDOMNode(this.list);if(a){var s=o;s<0&&(s=0);var u=a.children[s],c=u.offsetTop;vx(i,c,r)}}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.options,a=this.state.active;if(i.length===0)return null;var s=yt("".concat(o,"-select"),ke({},"".concat(o,"-select-active"),a));return j.createElement("div",{className:s,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},j.createElement("ul",{ref:this.saveList},this.getOptions()))}}]),t}(C.Component);ke(gn,"propTypes",{prefixCls:f.string,options:f.array,selectedIndex:f.number,type:f.string,onSelect:f.func,onMouseEnter:f.func,onEsc:f.func});function gx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ru(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function yx(e,t,n){return t&&Ru(e.prototype,t),n&&Ru(e,n),e}function bx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Si(e)}function Pi(e){return Pi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Pi(e)}function Si(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ei(e,t)}function Ei(e,t){return Ei=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Ei(e,t)}function Ti(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Bo=function(t,n){var r="".concat(t);t<10&&(r="0".concat(t));var o=!1;return n&&n.indexOf(t)>=0&&(o=!0),{value:r,disabled:o}},Zl=function(e){wx(t,e);function t(){var n,r;gx(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=bx(this,(n=Pi(t)).call.apply(n,[this].concat(i))),Ti(Si(r),"onItemChange",function(s,u){var c=r.props,l=c.onChange,p=c.defaultOpenValue,d=c.use12Hours,m=c.value,b=c.isAM,g=c.onAmPmChange,y=(m||p).clone();if(s==="hour")d?b?y.hour(+u%12):y.hour(+u%12+12):y.hour(+u);else if(s==="minute")y.minute(+u);else if(s==="ampm"){var v=u.toUpperCase();d&&(v==="PM"&&y.hour()<12&&y.hour(y.hour()%12+12),v==="AM"&&y.hour()>=12&&y.hour(y.hour()-12)),g(v)}else y.second(+u);l(y)}),Ti(Si(r),"onEnterSelectPanel",function(s){var u=r.props.onCurrentSelectPanelChange;u(s)}),r}return yx(t,[{key:"getHourSelect",value:function(r){var o=this,i=this.props,a=i.prefixCls,s=i.hourOptions,u=i.disabledHours,c=i.showHour,l=i.use12Hours,p=i.onEsc;if(!c)return null;var d=u(),m,b;return l?(m=[12].concat(s.filter(function(g){return g<12&&g>0})),b=r%12||12):(m=s,b=r),j.createElement(gn,{prefixCls:a,options:m.map(function(g){return Bo(g,d)}),selectedIndex:m.indexOf(b),type:"hour",onSelect:this.onItemChange,onMouseEnter:function(){return o.onEnterSelectPanel("hour")},onEsc:p})}},{key:"getMinuteSelect",value:function(r){var o=this,i=this.props,a=i.prefixCls,s=i.minuteOptions,u=i.disabledMinutes,c=i.defaultOpenValue,l=i.showMinute,p=i.value,d=i.onEsc;if(!l)return null;var m=p||c,b=u(m.hour());return j.createElement(gn,{prefixCls:a,options:s.map(function(g){return Bo(g,b)}),selectedIndex:s.indexOf(r),type:"minute",onSelect:this.onItemChange,onMouseEnter:function(){return o.onEnterSelectPanel("minute")},onEsc:d})}},{key:"getSecondSelect",value:function(r){var o=this,i=this.props,a=i.prefixCls,s=i.secondOptions,u=i.disabledSeconds,c=i.showSecond,l=i.defaultOpenValue,p=i.value,d=i.onEsc;if(!c)return null;var m=p||l,b=u(m.hour(),m.minute());return j.createElement(gn,{prefixCls:a,options:s.map(function(g){return Bo(g,b)}),selectedIndex:s.indexOf(r),type:"second",onSelect:this.onItemChange,onMouseEnter:function(){return o.onEnterSelectPanel("second")},onEsc:d})}},{key:"getAMPMSelect",value:function(){var r=this,o=this.props,i=o.prefixCls,a=o.use12Hours,s=o.format,u=o.isAM,c=o.onEsc;if(!a)return null;var l=["am","pm"].map(function(d){return s.match(/\sA/)?d.toUpperCase():d}).map(function(d){return{value:d}}),p=u?0:1;return j.createElement(gn,{prefixCls:i,options:l,selectedIndex:p,type:"ampm",onSelect:this.onItemChange,onMouseEnter:function(){return r.onEnterSelectPanel("ampm")},onEsc:c})}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.defaultOpenValue,a=r.value,s=a||i;return j.createElement("div",{className:"".concat(o,"-combobox")},this.getHourSelect(s.hour()),this.getMinuteSelect(s.minute()),this.getSecondSelect(s.second()),this.getAMPMSelect(s.hour()))}}]),t}(C.Component);Ti(Zl,"propTypes",{format:f.string,defaultOpenValue:f.object,prefixCls:f.string,value:f.object,onChange:f.func,onAmPmChange:f.func,showHour:f.bool,showMinute:f.bool,showSecond:f.bool,hourOptions:f.array,minuteOptions:f.array,secondOptions:f.array,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,onCurrentSelectPanelChange:f.func,use12Hours:f.bool,onEsc:f.func,isAM:f.bool});function Iu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function xx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Iu(Object(n),!0).forEach(function(r){Ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Iu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ox(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Cx(e,t,n){return t&&Lu(e.prototype,t),n&&Lu(e,n),e}function Px(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Rt(e)}function _i(e){return _i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_i(e)}function Rt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Sx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Mi(e,t)}function Mi(e,t){return Mi=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Mi(e,t)}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ut(){}function Ho(e,t,n){for(var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,o=[],i=0;i<e;i+=r)(!t||t.indexOf(i)<0||!n)&&o.push(i);return o}function Ex(e,t,n,r){var o=t.slice().sort(function(s,u){return Math.abs(e.hour()-s)-Math.abs(e.hour()-u)})[0],i=n.slice().sort(function(s,u){return Math.abs(e.minute()-s)-Math.abs(e.minute()-u)})[0],a=r.slice().sort(function(s,u){return Math.abs(e.second()-s)-Math.abs(e.second()-u)})[0];return Ie("".concat(o,":").concat(i,":").concat(a),"HH:mm:ss")}var Kr=function(e){Sx(t,e);function t(){var n,r;Ox(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=Px(this,(n=_i(t)).call.apply(n,[this].concat(i))),Ue(Rt(r),"state",{}),Ue(Rt(r),"onChange",function(s){var u=r.props.onChange;r.setState({value:s}),u(s)}),Ue(Rt(r),"onAmPmChange",function(s){var u=r.props.onAmPmChange;u(s)}),Ue(Rt(r),"onCurrentSelectPanelChange",function(s){r.setState({currentSelectPanel:s})}),Ue(Rt(r),"disabledHours",function(){var s=r.props,u=s.use12Hours,c=s.disabledHours,l=c();return u&&Array.isArray(l)&&(r.isAM()?l=l.filter(function(p){return p<12}).map(function(p){return p===0?12:p}):l=l.map(function(p){return p===12?12:p-12})),l}),r}return Cx(t,[{key:"close",value:function(){var r=this.props.onEsc;r()}},{key:"isAM",value:function(){var r=this.props.defaultOpenValue,o=this.state.value,i=o||r;return i.hour()>=0&&i.hour()<12}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.className,a=r.placeholder,s=r.disabledMinutes,u=r.disabledSeconds,c=r.hideDisabledOptions,l=r.showHour,p=r.showMinute,d=r.showSecond,m=r.format,b=r.defaultOpenValue,g=r.clearText,y=r.onEsc,v=r.addon,w=r.use12Hours,O=r.focusOnOpen,S=r.onKeyDown,T=r.hourStep,P=r.minuteStep,E=r.secondStep,D=r.inputReadOnly,k=r.clearIcon,R=this.state,F=R.value,X=R.currentSelectPanel,L=this.disabledHours(),K=s(F?F.hour():null),re=u(F?F.hour():null,F?F.minute():null),V=Ho(24,L,c,T),Y=Ho(60,K,c,P),J=Ho(60,re,c,E),ue=Ex(b,V,Y,J);return j.createElement("div",{className:yt(i,"".concat(o,"-inner"))},j.createElement(_a,{clearText:g,prefixCls:o,defaultOpenValue:ue,value:F,currentSelectPanel:X,onEsc:y,format:m,placeholder:a,hourOptions:V,minuteOptions:Y,secondOptions:J,disabledHours:this.disabledHours,disabledMinutes:s,disabledSeconds:u,onChange:this.onChange,focusOnOpen:O,onKeyDown:S,inputReadOnly:D,clearIcon:k}),j.createElement(Zl,{prefixCls:o,value:F,defaultOpenValue:ue,format:m,onChange:this.onChange,onAmPmChange:this.onAmPmChange,showHour:l,showMinute:p,showSecond:d,hourOptions:V,minuteOptions:Y,secondOptions:J,disabledHours:this.disabledHours,disabledMinutes:s,disabledSeconds:u,onCurrentSelectPanelChange:this.onCurrentSelectPanelChange,use12Hours:w,onEsc:y,isAM:this.isAM()}),v(this))}}],[{key:"getDerivedStateFromProps",value:function(r,o){return"value"in r?xx({},o,{value:r.value}):null}}]),t}(C.Component);Ue(Kr,"propTypes",{clearText:f.string,prefixCls:f.string,className:f.string,defaultOpenValue:f.object,value:f.object,placeholder:f.string,format:f.string,inputReadOnly:f.bool,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,hideDisabledOptions:f.bool,onChange:f.func,onAmPmChange:f.func,onEsc:f.func,showHour:f.bool,showMinute:f.bool,showSecond:f.bool,use12Hours:f.bool,hourStep:f.number,minuteStep:f.number,secondStep:f.number,addon:f.func,focusOnOpen:f.bool,onKeyDown:f.func,clearIcon:f.node});Ue(Kr,"defaultProps",{prefixCls:"rc-time-picker-panel",onChange:ut,disabledHours:ut,disabledMinutes:ut,disabledSeconds:ut,defaultOpenValue:Ie(),use12Hours:!1,addon:ut,onKeyDown:ut,onAmPmChange:ut,inputReadOnly:!1});ya(Kr);var ur={adjustX:1,adjustY:1},cr=[0,0],Tx={bottomLeft:{points:["tl","tl"],overflow:ur,offset:[0,-3],targetOffset:cr},bottomRight:{points:["tr","tr"],overflow:ur,offset:[0,-3],targetOffset:cr},topRight:{points:["br","br"],overflow:ur,offset:[0,3],targetOffset:cr},topLeft:{points:["bl","bl"],overflow:ur,offset:[0,3],targetOffset:cr}};function Wu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function _x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wu(Object(n),!0).forEach(function(r){Pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $x(e,t,n){return t&&Fu(e.prototype,t),n&&Fu(e,n),e}function jx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Ne(e)}function $i(e){return $i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},$i(e)}function Ne(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ax(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ji(e,t)}function ji(e,t){return ji=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},ji(e,t)}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(){}function Bu(e,t){this[e]=t}var Vn=function(e){Ax(t,e);function t(n){var r;Mx(this,t),r=jx(this,$i(t).call(this,n)),Pe(Ne(r),"onPanelChange",function(l){r.setValue(l)}),Pe(Ne(r),"onAmPmChange",function(l){var p=r.props.onAmPmChange;p(l)}),Pe(Ne(r),"onClear",function(l){l.stopPropagation(),r.setValue(null),r.setOpen(!1)}),Pe(Ne(r),"onVisibleChange",function(l){r.setOpen(l)}),Pe(Ne(r),"onEsc",function(){r.setOpen(!1),r.focus()}),Pe(Ne(r),"onKeyDown",function(l){l.keyCode===40&&r.setOpen(!0)}),r.saveInputRef=Bu.bind(Ne(r),"picker"),r.savePanelRef=Bu.bind(Ne(r),"panelInstance");var o=n.defaultOpen,i=n.defaultValue,a=n.open,s=a===void 0?o:a,u=n.value,c=u===void 0?i:u;return r.state={open:s,value:c},r}return $x(t,[{key:"setValue",value:function(r){var o=this.props.onChange;"value"in this.props||this.setState({value:r}),o(r)}},{key:"getFormat",value:function(){var r=this.props,o=r.format,i=r.showHour,a=r.showMinute,s=r.showSecond,u=r.use12Hours;if(o)return o;if(u){var c=[i?"h":"",a?"mm":"",s?"ss":""].filter(function(l){return!!l}).join(":");return c.concat(" a")}return[i?"HH":"",a?"mm":"",s?"ss":""].filter(function(l){return!!l}).join(":")}},{key:"getPanelElement",value:function(){var r=this.props,o=r.prefixCls,i=r.placeholder,a=r.disabledHours,s=r.disabledMinutes,u=r.disabledSeconds,c=r.hideDisabledOptions,l=r.inputReadOnly,p=r.showHour,d=r.showMinute,m=r.showSecond,b=r.defaultOpenValue,g=r.clearText,y=r.addon,v=r.use12Hours,w=r.focusOnOpen,O=r.onKeyDown,S=r.hourStep,T=r.minuteStep,P=r.secondStep,E=r.clearIcon,D=this.state.value;return j.createElement(Kr,{clearText:g,prefixCls:"".concat(o,"-panel"),ref:this.savePanelRef,value:D,inputReadOnly:l,onChange:this.onPanelChange,onAmPmChange:this.onAmPmChange,defaultOpenValue:b,showHour:p,showMinute:d,showSecond:m,onEsc:this.onEsc,format:this.getFormat(),placeholder:i,disabledHours:a,disabledMinutes:s,disabledSeconds:u,hideDisabledOptions:c,use12Hours:v,hourStep:S,minuteStep:T,secondStep:P,addon:y,focusOnOpen:w,onKeyDown:O,clearIcon:E})}},{key:"getPopupClassName",value:function(){var r=this.props,o=r.showHour,i=r.showMinute,a=r.showSecond,s=r.use12Hours,u=r.prefixCls,c=r.popupClassName,l=0;return o&&(l+=1),i&&(l+=1),a&&(l+=1),s&&(l+=1),yt(c,Pe({},"".concat(u,"-panel-narrow"),(!o||!i||!a)&&!s),"".concat(u,"-panel-column-").concat(l))}},{key:"setOpen",value:function(r){var o=this.props,i=o.onOpen,a=o.onClose,s=this.state.open;s!==r&&("open"in this.props||this.setState({open:r}),r?i({open:r}):a({open:r}))}},{key:"focus",value:function(){this.picker.focus()}},{key:"blur",value:function(){this.picker.blur()}},{key:"renderClearButton",value:function(){var r=this,o=this.state.value,i=this.props,a=i.prefixCls,s=i.allowEmpty,u=i.clearIcon,c=i.clearText,l=i.disabled;if(!s||!o||l)return null;if(j.isValidElement(u)){var p=u.props||{},d=p.onClick;return j.cloneElement(u,{onClick:function(){d&&d.apply(void 0,arguments),r.onClear.apply(r,arguments)}})}return j.createElement("a",{role:"button",className:"".concat(a,"-clear"),title:c,onClick:this.onClear,tabIndex:0},u||j.createElement("i",{className:"".concat(a,"-clear-icon")}))}},{key:"render",value:function(){var r=this.props,o=r.prefixCls,i=r.placeholder,a=r.placement,s=r.align,u=r.id,c=r.disabled,l=r.transitionName,p=r.style,d=r.className,m=r.getPopupContainer,b=r.name,g=r.autoComplete,y=r.onFocus,v=r.onBlur,w=r.autoFocus,O=r.inputReadOnly,S=r.inputIcon,T=r.popupStyle,P=this.state,E=P.open,D=P.value,k=this.getPopupClassName();return j.createElement(on,{prefixCls:"".concat(o,"-panel"),popupClassName:k,popupStyle:T,popup:this.getPanelElement(),popupAlign:s,builtinPlacements:Tx,popupPlacement:a,action:c?[]:["click"],destroyPopupOnHide:!0,getPopupContainer:m,popupTransitionName:l,popupVisible:E,onPopupVisibleChange:this.onVisibleChange},j.createElement("span",{className:yt(o,d),style:p},j.createElement("input",{className:"".concat(o,"-input"),ref:this.saveInputRef,type:"text",placeholder:i,name:b,onKeyDown:this.onKeyDown,disabled:c,value:D&&D.format(this.getFormat())||"",autoComplete:g,onFocus:y,onBlur:v,autoFocus:w,onChange:he,readOnly:!!O,id:u}),S||j.createElement("span",{className:"".concat(o,"-icon")}),this.renderClearButton()))}}],[{key:"getDerivedStateFromProps",value:function(r,o){var i={};return"value"in r&&(i.value=r.value),r.open!==void 0&&(i.open=r.open),Object.keys(i).length>0?_x({},o,{},i):null}}]),t}(C.Component);Pe(Vn,"propTypes",{prefixCls:f.string,clearText:f.string,value:f.object,defaultOpenValue:f.object,inputReadOnly:f.bool,disabled:f.bool,allowEmpty:f.bool,defaultValue:f.object,open:f.bool,defaultOpen:f.bool,align:f.object,placement:f.any,transitionName:f.string,getPopupContainer:f.func,placeholder:f.string,format:f.string,showHour:f.bool,showMinute:f.bool,showSecond:f.bool,style:f.object,className:f.string,popupClassName:f.string,popupStyle:f.object,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,hideDisabledOptions:f.bool,onChange:f.func,onAmPmChange:f.func,onOpen:f.func,onClose:f.func,onFocus:f.func,onBlur:f.func,addon:f.func,name:f.string,autoComplete:f.string,use12Hours:f.bool,hourStep:f.number,minuteStep:f.number,secondStep:f.number,focusOnOpen:f.bool,onKeyDown:f.func,autoFocus:f.bool,id:f.string,inputIcon:f.node,clearIcon:f.node});Pe(Vn,"defaultProps",{clearText:"clear",prefixCls:"rc-time-picker",defaultOpen:!1,inputReadOnly:!1,style:{},className:"",popupClassName:"",popupStyle:{},align:{},defaultOpenValue:Ie(),allowEmpty:!0,showHour:!0,showMinute:!0,showSecond:!0,disabledHours:he,disabledMinutes:he,disabledSeconds:he,hideDisabledOptions:!1,placement:"bottomLeft",onChange:he,onAmPmChange:he,onOpen:he,onClose:he,onFocus:he,onBlur:he,addon:he,use12Hours:!1,focusOnOpen:!1,onKeyDown:he});ya(Vn);const Dx=_.div`
  @media only screen and (min-width: 768px) {
    width: 656px;
  }

  @media only screen and (min-width: 1440px) {
    width: auto;
  }
`,kx=_.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  margin-bottom: 24px;
`,Nx=_.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
`,Rx=_.div`
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
`,Ix=_.form`
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
`,Lx=_.div`
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
`,Wx=_.p`
  color: ${e=>e.theme.colors.textColor};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
  margin-bottom: 12px;
`,Fx=_(Vn)`
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
`;function Ma(e){return e.year===new Date().getFullYear()&&e.month===new Date().getMonth()}const Hu=50,Ql=({onClose:e})=>{const t=Kt(),n=ne(_r),{t:r}=xe(),[o,i]=C.useState(250),{handleSubmit:a,values:{date:s,waterAmount:u},errors:c,setFieldValue:l}=rl({initialValues:{waterAmount:"250",date:Ie().format("HH:mm")},onSubmit:g=>{t(bf({credentials:g,shouldUpdateMonth:Ma(n)})).unwrap().then(()=>{e()})}}),p=()=>{l("waterAmount",o?o.toString():"0")},d=()=>{const g=Number.parseInt(u)+Hu;l("waterAmount",g.toString()),i(g)},m=()=>{const g=Number.parseInt(u)-Hu;l("waterAmount",g<=0?"0":g.toString()),i(g<=0?0:g)};function b(g){i(Number.parseInt(isNaN(Number.parseInt(g))?0:g))}return h.jsxs(Dx,{onSubmit:a,children:[h.jsx(kx,{children:r("addWater")}),h.jsx(Nx,{children:r("addModal.Choose a value")}),h.jsxs(Wx,{children:[r("addModal.Amount of water"),":"]}),h.jsxs(Rx,{children:[h.jsx("button",{onClick:m,name:"minus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-minus`})})}),h.jsxs("span",{className:"water-amount-value",children:[u,r("ml")]}),h.jsx("button",{onClick:d,name:"plus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-plus`})})})]}),h.jsxs(Ix,{children:[h.jsxs("label",{children:[r("addModal.Recording time"),":",h.jsx(Fx,{defaultValue:Ie(s,"HH:mm"),showSecond:!1,minuteStep:5,onChange:g=>{l("date",g&&g.format("HH:mm"))}}),c.date?h.jsx("div",{children:c.date}):null]}),h.jsxs("label",{children:[r("addModal.Enter the value of the water used"),":",h.jsx("input",{name:"number",value:o,onBlur:p,onChange:({target:{value:g}})=>b(g)}),c.waterAmount?h.jsx("div",{children:c.waterAmount}):null]}),h.jsxs(Lx,{children:[h.jsxs("p",{children:[u,r("ml")]}),h.jsx("button",{disabled:Object.keys(c).length>0,type:"submit",children:r("save")})]})]})]})},Bx=_.div`
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
`,Hx=_.div`
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
`,Vx=_.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,zx=_.input`
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
`,Ux=_.div`
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
`,Yx=_(ac)`
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
`,Gx=()=>{const[e,t]=C.useState(0),[n,r]=C.useState(!1),[o,i]=C.useState(!1),{t:a}=xe(),{waterRate:s}=ne(Er),u=ne(md),c=p=>{r(!0),i(!1),p.stopPropagation()};C.useEffect(()=>{t(Math.round(u/s*100))},[s,u]);const l=()=>{r(!1)};return h.jsxs(Bx,{children:[h.jsxs(Hx,{children:[h.jsx(Vx,{children:a("today")}),h.jsx(zx,{type:"range",min:"0",max:"100",value:e,disabled:!0}),h.jsxs(Ux,{$rater:e,children:[h.jsx("span",{children:"0%"}),h.jsx("span",{children:"50%"}),h.jsx("span",{children:"100%"})]})]}),h.jsxs(Yx,{onClick:p=>c(p),children:[h.jsx("svg",{width:24,height:24,children:h.jsx("use",{href:`${Me}#icon-plus-in-circle`})}),a("addWater")]}),n&&h.jsx(An,{$position:"center",open:n,onClose:l,children:h.jsx(Ql,{onClose:l,isEditing:o})})]})},qx=_.div`
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
`,Xx=_.div`
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
`,Kx=_.p`
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
`,Zx=_.div`
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
`,Qx=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Vu=_.div`
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
`,Jx=_.div`
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
`,e2=_.div`
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
`;const t2=_.p`
  position: absolute;
  bottom: -33px;
  color: ${e=>e.theme.colors.secondaryRed};
  font-size: 14px;
  line-height: 1.29;
  @media (min-width: 768px) {
    bottom: -17px;
  }
`,zu=_.p`
  color: ${e=>e.theme.colors.secondaryRed};
  font-size: 14px;
  line-height: 1.29;
  position: absolute;
  bottom: -17px;
`,n2=()=>{const{gender:e}=ne(Er),[t,n]=C.useState("0"),[r,o]=C.useState("0"),[i,a]=C.useState("1.8"),[s,u]=C.useState(()=>m()),{t:c}=xe(),l=sc({weight:Na().typeError(c("normaModal.Weight must be a number")).min(3,c("normaModal.Weight must be more than 3kg")).max(300,c("normaModal.Weight must be less than 300kg")),sports:Na().typeError(c("normaModal.Time must be a number")).positive(c("normaModal.Time must be more than 0"))}),{control:p,formState:{errors:d}}=uc({mode:"onChange",resolver:cc(l),defaultValues:{weight:"",sports:""}});C.useEffect(()=>{if(s&&t>0){const g=t*.03+r*.4;a(g.toFixed(1))}if(!s&&t>0){const g=t*.04+r*.6;a(g.toFixed(1))}},[t,r,s,a]);function m(){return e==="female"||e===null}function b(){return e==="female"||e===null?"female":"male"}return h.jsxs(h.Fragment,{children:[h.jsxs("form",{children:[h.jsxs(wf,{defaultValue:b(),name:"radio-buttons-group",row:!0,sx:{marginBottom:"16px"},children:[h.jsx(Ra,{value:"female",control:h.jsx(Ia,{}),label:c("normaModal.For woman"),onChange:()=>u(!0),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25,letterSpacing:"0"},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}}),h.jsx(Ra,{value:"male",control:h.jsx(Ia,{}),label:c("normaModal.For man"),onChange:()=>u(!1),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}})]}),h.jsxs(Qx,{children:[h.jsxs(Vu,{children:[h.jsxs("label",{htmlFor:"weight",children:[c("normaModal.Your weight in kilograms"),":"]}),h.jsx(La,{name:"weight",control:p,render:({field:{onChange:g,...y}})=>h.jsx("input",{id:"weight",...y,onChange:({target:{value:v}})=>{g(v),n(v)},placeholder:"0",onFocus:v=>v.target.placeholder="",onBlur:v=>v.target.placeholder="0",onInput:v=>{v.target.value=v.target.value.replace(/(\.\d{1})\d+/,"$1"),v.target.value=v.target.value.replace(",",".")},autoComplete:"off"})}),d.weight&&t!==""&&h.jsx(zu,{children:d.weight.message})]}),h.jsxs(Vu,{children:[h.jsxs("label",{htmlFor:"sports",children:[c("normaModal.The time of active participation in sports or other activities with a high physical load in hours"),":"]}),h.jsx(La,{name:"sports",control:p,render:({field:{onChange:g,...y}})=>h.jsx("input",{id:"sports",...y,onChange:({target:{value:v}})=>{g(v),o(v)},placeholder:"0",onFocus:v=>v.target.placeholder="",onBlur:v=>v.target.placeholder="0",onInput:v=>{v.target.value=v.target.value.replace(/(\.\d{1})\d+/,"$1"),v.target.value=v.target.value.replace(",",".")},autoComplete:"off"})}),d.sports&&r!==""&&h.jsx(zu,{children:d.sports.message})]})]})]}),h.jsxs(Zx,{children:[h.jsxs("p",{children:[c("normaModal.The required amount of water in liters per day"),":"]}),h.jsx("p",{children:h.jsxs("span",{children:[i," ",c("normaModal.L")]})})]})]})},r2=({onClose:e})=>{const t=Kt(),n=ne(_r),{waterRate:r}=ne(Er),{t:o}=xe(),i=sc({norma:xf().matches(/^(0\.1|[1-9](\.\d)?|1[0-4](\.\d)?|15)$/,o("normaModal.normaError")).required()}),{register:a,handleSubmit:s,formState:{errors:u}}=uc({defaultValues:{norma:r/1e3},mode:"onChange",resolver:cc(i)});async function c(l){const d={waterRate:(l.norma*1e3).toString()};t(Of(d)).unwrap().then(()=>{t(lc({year:n.year,month:n.month+1})),e()}).catch(m=>{Cf.Notify.failure(m.message,Pf)})}return h.jsxs(qx,{children:[h.jsx("h2",{children:o("normaModal.My daily norma")}),h.jsxs(Xx,{children:[h.jsxs("p",{children:[o("normaModal.formulaGenderF"),": ",h.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),h.jsxs("p",{children:[o("normaModal.formulaGenderM"),": ",h.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),h.jsxs(Kx,{children:[h.jsx("span",{children:"*"})," ",o("normaModal.explanation")]}),h.jsxs("h3",{children:[o("normaModal.Calculate your rate"),":"]}),h.jsx(n2,{}),h.jsxs("form",{action:"",onSubmit:s(c),children:[h.jsxs(Jx,{children:[h.jsxs("label",{htmlFor:"norma",children:[o("normaModal. Write down how much water you will drink"),":"]}),h.jsx("input",{type:"text",...a("norma",{max:15}),name:"norma",id:"norma",placeholder:"0",onFocus:l=>l.target.placeholder="",onBlur:l=>l.target.placeholder="0",onInput:l=>{l.target.value=l.target.value.replace(/(\.\d{1})\d+/,"$1"),l.target.value=l.target.value.replace(",",".")},autoComplete:"off"}),u.norma&&h.jsx(t2,{children:u.norma.message})]}),h.jsx(e2,{children:h.jsx(ac,{type:"submit",children:o("save")})})]})]})},o2=_.div`
  width: 198px;
`,i2=_.div`
  width: 164px;
`,Uu=_.div`
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
`,Yu=_.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,a2=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),{waterRate:o}=ne(Er),i=ne(Sf),{t:a}=xe();C.useEffect(()=>{r(i==="uk")},[i]);const s=o/1e3;return h.jsxs(h.Fragment,{children:[n?h.jsx(o2,{children:h.jsxs(Uu,{children:[h.jsx("h2",{children:a("normaModal.My daily norma")}),h.jsxs(Yu,{children:[h.jsxs("p",{children:[s," ",a("normaModal.L")]}),h.jsx("button",{onClick:()=>t(!0),children:a("edit")})]})]})}):h.jsx(i2,{children:h.jsxs(Uu,{children:[h.jsx("h2",{children:a("normaModal.My daily norma")}),h.jsxs(Yu,{children:[h.jsxs("p",{children:[s," ",a("normaModal.L")]}),h.jsx("button",{onClick:()=>t(!0),children:a("edit")})]})]})}),e&&h.jsx(An,{open:e,onClose:()=>t(!1),children:h.jsx(r2,{onClose:()=>t(!1)})})]})};function fe(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function bt(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const Jl=6048e5,s2=864e5;let u2={};function Zr(){return u2}function wt(e,t){var s,u,c,l;const n=Zr(),r=(t==null?void 0:t.weekStartsOn)??((u=(s=t==null?void 0:t.locale)==null?void 0:s.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((l=(c=n.locale)==null?void 0:c.options)==null?void 0:l.weekStartsOn)??0,o=fe(e),i=o.getDay(),a=(i<r?7:0)+i-r;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}function Sr(e){return wt(e,{weekStartsOn:1})}function ef(e){const t=fe(e),n=t.getFullYear(),r=bt(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Sr(r),i=bt(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const a=Sr(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}function Gu(e){const t=fe(e);return t.setHours(0,0,0,0),t}function qu(e){const t=fe(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function c2(e,t){const n=Gu(e),r=Gu(t),o=+n-qu(n),i=+r-qu(r);return Math.round((o-i)/s2)}function l2(e){const t=ef(e),n=bt(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Sr(n)}function f2(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function p2(e){if(!f2(e)&&typeof e!="number")return!1;const t=fe(e);return!isNaN(Number(t))}function d2(e){const t=fe(e),n=bt(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const h2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},m2=(e,t,n)=>{let r;const o=h2[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Bt(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const v2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},g2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},y2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},b2={date:Bt({formats:v2,defaultWidth:"full"}),time:Bt({formats:g2,defaultWidth:"full"}),dateTime:Bt({formats:y2,defaultWidth:"full"})},w2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},x2=(e,t,n,r)=>w2[e];function Se(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,s=n!=null&&n.width?String(n.width):a;o=e.formattingValues[s]||e.formattingValues[a]}else{const a=e.defaultWidth,s=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[s]||e.values[a]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const O2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},C2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},P2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},S2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},E2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},T2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},_2=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},M2={ordinalNumber:_2,era:Se({values:O2,defaultWidth:"wide"}),quarter:Se({values:C2,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Se({values:P2,defaultWidth:"wide"}),day:Se({values:S2,defaultWidth:"wide"}),dayPeriod:Se({values:E2,defaultWidth:"wide",formattingValues:T2,defaultFormattingWidth:"wide"})};function Ee(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const a=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?j2(s,p=>p.test(a)):$2(s,p=>p.test(a));let c;c=e.valueCallback?e.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;const l=t.slice(a.length);return{value:c,rest:l}}}function $2(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function j2(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function tf(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;const s=t.slice(o.length);return{value:a,rest:s}}}const A2=/^(\d+)(th|st|nd|rd)?/i,D2=/\d+/i,k2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},N2={any:[/^b/i,/^(a|c)/i]},R2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},I2={any:[/1/i,/2/i,/3/i,/4/i]},L2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},W2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},F2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},B2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},H2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},V2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},z2={ordinalNumber:tf({matchPattern:A2,parsePattern:D2,valueCallback:e=>parseInt(e,10)}),era:Ee({matchPatterns:k2,defaultMatchWidth:"wide",parsePatterns:N2,defaultParseWidth:"any"}),quarter:Ee({matchPatterns:R2,defaultMatchWidth:"wide",parsePatterns:I2,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ee({matchPatterns:L2,defaultMatchWidth:"wide",parsePatterns:W2,defaultParseWidth:"any"}),day:Ee({matchPatterns:F2,defaultMatchWidth:"wide",parsePatterns:B2,defaultParseWidth:"any"}),dayPeriod:Ee({matchPatterns:H2,defaultMatchWidth:"any",parsePatterns:V2,defaultParseWidth:"any"})},nf={code:"en-US",formatDistance:m2,formatLong:b2,formatRelative:x2,localize:M2,match:z2,options:{weekStartsOn:0,firstWeekContainsDate:1}},Xu=nf;function U2(e){const t=fe(e);return c2(t,d2(t))+1}function Y2(e){const t=fe(e),n=+Sr(t)-+l2(t);return Math.round(n/Jl)+1}function rf(e,t){var l,p,d,m;const n=fe(e),r=n.getFullYear(),o=Zr(),i=(t==null?void 0:t.firstWeekContainsDate)??((p=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:p.firstWeekContainsDate)??o.firstWeekContainsDate??((m=(d=o.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,a=bt(e,0);a.setFullYear(r+1,0,i),a.setHours(0,0,0,0);const s=wt(a,t),u=bt(e,0);u.setFullYear(r,0,i),u.setHours(0,0,0,0);const c=wt(u,t);return n.getTime()>=s.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function G2(e,t){var s,u,c,l;const n=Zr(),r=(t==null?void 0:t.firstWeekContainsDate)??((u=(s=t==null?void 0:t.locale)==null?void 0:s.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((l=(c=n.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??1,o=rf(e,t),i=bt(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),wt(i,t)}function q2(e,t){const n=fe(e),r=+wt(n,t)-+G2(n,t);return Math.round(r/Jl)+1}function B(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const ze={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return B(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):B(n+1,2)},d(e,t){return B(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return B(e.getHours()%12||12,t.length)},H(e,t){return B(e.getHours(),t.length)},m(e,t){return B(e.getMinutes(),t.length)},s(e,t){return B(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return B(o,t.length)}},jt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ku={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return ze.y(e,t)},Y:function(e,t,n,r){const o=rf(e,r),i=o>0?o:1-o;if(t==="YY"){const a=i%100;return B(a,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):B(i,t.length)},R:function(e,t){const n=ef(e);return B(n,t.length)},u:function(e,t){const n=e.getFullYear();return B(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return B(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return B(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return ze.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return B(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=q2(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):B(o,t.length)},I:function(e,t,n){const r=Y2(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):B(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):ze.d(e,t)},D:function(e,t,n){const r=U2(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):B(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return B(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return B(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return B(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=jt.noon:r===0?o=jt.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=jt.evening:r>=12?o=jt.afternoon:r>=4?o=jt.morning:o=jt.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return ze.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):ze.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):B(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):B(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):ze.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):ze.s(e,t)},S:function(e,t){return ze.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return Qu(r);case"XXXX":case"XX":return ft(r);case"XXXXX":case"XXX":default:return ft(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return Qu(r);case"xxxx":case"xx":return ft(r);case"xxxxx":case"xxx":default:return ft(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Zu(r,":");case"OOOO":default:return"GMT"+ft(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Zu(r,":");case"zzzz":default:return"GMT"+ft(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return B(r,t.length)},T:function(e,t,n){const r=e.getTime();return B(r,t.length)}};function Zu(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+B(i,2)}function Qu(e,t){return e%60===0?(e>0?"-":"+")+B(Math.abs(e)/60,2):ft(e,t)}function ft(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=B(Math.trunc(r/60),2),i=B(r%60,2);return n+o+t+i}const Ju=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},of=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},X2=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Ju(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",Ju(r,t)).replace("{{time}}",of(o,t))},K2={p:of,P:X2},Z2=/^D+$/,Q2=/^Y+$/,J2=["D","DD","YY","YYYY"];function e0(e){return Z2.test(e)}function t0(e){return Q2.test(e)}function n0(e,t,n){const r=r0(e,t,n);if(console.warn(r),J2.includes(e))throw new RangeError(r)}function r0(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const o0=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,i0=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,a0=/^'([^]*?)'?$/,s0=/''/g,u0=/[a-zA-Z]/;function ec(e,t,n){var l,p,d,m,b,g,y,v;const r=Zr(),o=(n==null?void 0:n.locale)??r.locale??nf,i=(n==null?void 0:n.firstWeekContainsDate)??((p=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,a=(n==null?void 0:n.weekStartsOn)??((g=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:g.weekStartsOn)??r.weekStartsOn??((v=(y=r.locale)==null?void 0:y.options)==null?void 0:v.weekStartsOn)??0,s=fe(e);if(!p2(s))throw new RangeError("Invalid time value");let u=t.match(i0).map(w=>{const O=w[0];if(O==="p"||O==="P"){const S=K2[O];return S(w,o.formatLong)}return w}).join("").match(o0).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const O=w[0];if(O==="'")return{isToken:!1,value:c0(w)};if(Ku[O])return{isToken:!0,value:w};if(O.match(u0))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:w}});o.localize.preprocessor&&(u=o.localize.preprocessor(s,u));const c={firstWeekContainsDate:i,weekStartsOn:a,locale:o};return u.map(w=>{if(!w.isToken)return w.value;const O=w.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&t0(O)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&e0(O))&&n0(O,t,String(e));const S=Ku[O[0]];return S(s,O,o.localize,c)}).join("")}function c0(e){const t=e.match(a0);return t?t[1].replace(s0,"'"):e}function af(e,t,n){const r=wt(e,n),o=wt(t,n);return+r==+o}function dn(e,t){if(e.one!==void 0&&t===1)return e.one;const n=t%10,r=t%100;return n===1&&r!==11?e.singularNominative.replace("{{count}}",String(t)):n>=2&&n<=4&&(r<10||r>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function te(e){return(t,n)=>n&&n.addSuffix?n.comparison&&n.comparison>0?e.future?dn(e.future,t):"за "+dn(e.regular,t):e.past?dn(e.past,t):dn(e.regular,t)+" тому":dn(e.regular,t)}const l0=(e,t)=>t&&t.addSuffix?t.comparison&&t.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",f0={lessThanXSeconds:te({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:te({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:l0,lessThanXMinutes:te({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:te({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:te({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:te({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:te({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:te({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:te({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:te({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:te({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:te({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:te({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:te({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:te({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},p0=(e,t,n)=>(n=n||{},f0[e](t,n)),d0={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},h0={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},m0={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v0={date:Bt({formats:d0,defaultWidth:"full"}),time:Bt({formats:h0,defaultWidth:"full"}),dateTime:Bt({formats:m0,defaultWidth:"full"})},$a=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function g0(e){const t=$a[e];switch(e){case 0:case 3:case 5:case 6:return"'у минулу "+t+" о' p";case 1:case 2:case 4:return"'у минулий "+t+" о' p"}}function sf(e){return"'у "+$a[e]+" о' p"}function y0(e){const t=$a[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступну "+t+" о' p";case 1:case 2:case 4:return"'у наступний "+t+" о' p"}}const b0=(e,t,n)=>{const r=fe(e),o=r.getDay();return af(r,t,n)?sf(o):g0(o)},w0=(e,t,n)=>{const r=fe(e),o=r.getDay();return af(r,t,n)?sf(o):y0(o)},x0={lastWeek:b0,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:w0,other:"P"},O0=(e,t,n,r)=>{const o=x0[e];return typeof o=="function"?o(t,n,r):o},C0={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},P0={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},S0={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},E0={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},T0={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},_0={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},M0={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},$0=(e,t)=>{const n=String(t==null?void 0:t.unit),r=Number(e);let o;return n==="date"?r===3||r===23?o="-є":o="-е":n==="minute"||n==="second"||n==="hour"?o="-а":o="-й",r+o},j0={ordinalNumber:$0,era:Se({values:C0,defaultWidth:"wide"}),quarter:Se({values:P0,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Se({values:S0,defaultWidth:"wide",formattingValues:E0,defaultFormattingWidth:"wide"}),day:Se({values:T0,defaultWidth:"wide"}),dayPeriod:Se({values:_0,defaultWidth:"any",formattingValues:M0,defaultFormattingWidth:"wide"})},A0=/^(\d+)(-?(е|й|є|а|я))?/i,D0=/\d+/i,k0={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},N0={any:[/^д/i,/^н/i]},R0={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},I0={any:[/1/i,/2/i,/3/i,/4/i]},L0={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},W0={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},F0={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},B0={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},H0={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},V0={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},z0={ordinalNumber:tf({matchPattern:A0,parsePattern:D0,valueCallback:e=>parseInt(e,10)}),era:Ee({matchPatterns:k0,defaultMatchWidth:"wide",parsePatterns:N0,defaultParseWidth:"any"}),quarter:Ee({matchPatterns:R0,defaultMatchWidth:"wide",parsePatterns:I0,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ee({matchPatterns:L0,defaultMatchWidth:"wide",parsePatterns:W0,defaultParseWidth:"any"}),day:Ee({matchPatterns:F0,defaultMatchWidth:"wide",parsePatterns:B0,defaultParseWidth:"any"}),dayPeriod:Ee({matchPatterns:H0,defaultMatchWidth:"wide",parsePatterns:V0,defaultParseWidth:"any"})},U0={code:"uk",formatDistance:p0,formatLong:v0,formatRelative:O0,localize:j0,match:z0,options:{weekStartsOn:1,firstWeekContainsDate:1}},tc=U0,Y0=(e,t)=>Array.from({length:e},(n,r)=>({date:`${r+1}, ${t}`,portions:0,waterVolumePercentage:0,dailyNorma:0})),G0=(e,t)=>new Date(t,e+1,0).getDate(),q0=navigator.language,uf=(e,t="HH:mm")=>Ie.utc(e).locale(q0).format(t),X0=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],nc=e=>{const t=e==null?void 0:e.split(", ");return parseInt((t==null?void 0:t[0])??0)},K0=_.span`
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
`,lr=_.span`
  color: ${e=>e.theme.colors.textColor};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,fr=_.span`
  color: ${e=>e.theme.colors.primaryBlue};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,Z0=({item:e,index:t,monthName:n})=>{const{waterVolumePercentage:r,dailyNorma:o,portions:i}=e,a=Math.min(100,r),{t:s}=xe();return h.jsxs(K0,{children:[h.jsx(lr,{children:h.jsxs(fr,{children:[t+1,", ",n]})}),h.jsxs(lr,{children:[s("dayStatistics.Daily norma"),": ",h.jsx(fr,{children:o})]}),h.jsxs(lr,{children:[s("dayStatistics.Fulfillment of the daily norm"),":"," ",h.jsxs(fr,{children:[a,"%"]})]}),h.jsxs(lr,{children:[s("dayStatistics.How many servings of water"),":"," ",h.jsx(fr,{children:i})]})]})},Q0=_.li`
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
`,J0=_.span`
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
`;const eO=_.span`
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
`,tO=({item:e,index:t,monthName:n})=>{const[r,o]=C.useState(null),{waterVolumePercentage:i}=e,a=b=>{o(i===0||r?null:b.currentTarget)},s=!!r,u=s?"simple-popper":void 0,c=i,l=r&&r.getBoundingClientRect().left>window.innerWidth/2,p=ne(Ef),[d,m]=C.useState(Wa);return C.useEffect(()=>{m(p==="dark"?Tf:Wa)},[p,d]),h.jsxs(Q0,{children:[h.jsx(eO,{"aria-describedby":u,onMouseEnter:a,onMouseLeave:a,style:{borderWidth:c===0?0:1,borderStyle:"solid",borderColor:c>=100?"transparent":d.colors.secondaryOrange},children:t+1}),h.jsxs(J0,{children:[c,"%"]}),h.jsx(hd,{id:u,open:s,anchorEl:r,placement:l?"right-start":"left-start",modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!0,padding:8}},{name:"flip",enabled:!0,options:{fallbackPlacements:["top"]}}],children:({TransitionProps:b})=>h.jsx(_f,{component:"div",sx:{p:2,minWidth:"292px",minHeight:"188px",padding:"24px 16px",borderRadius:"10px",background:d.colors.mainBg,boxShadow:d.shadows.calendarShadow},onMouseLeave:a,...b,children:h.jsx(Z0,{item:e,index:t,monthName:n})})})]})},nO=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,rO=_.div`
  display: flex;
  gap: 12px;

  span {
    color: ${e=>e.theme.colors.primaryBlue};
    font-size: 16px;
    line-height: 1.25;
    width: 120px;
    text-align: center;
  }
`,oO=_.ul`
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
`,iO=_.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,rc=_.button`
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
`,Vo=new Date,aO=()=>{const e=ne(vd),[t,n]=C.useState(Vo.getMonth()),[r,o]=C.useState(Vo.getFullYear()),i=Kt(),{i18n:a}=xe(),s=X0(t),u=G0(t,r),c=Y0(u,s),l=c==null?void 0:c.map(m=>Object.values(e).find(g=>nc(g.date)===nc(m.date))||m);C.useEffect(()=>{i(lc({year:r,month:t+1})),i(Mf({year:r,month:t}))},[i,r,t]);const p=({currentTarget:m})=>{t===0?(o(b=>b-1),n(11)):n(b=>b-1),m.blur()},d=({currentTarget:m})=>{t===11?(o(b=>b+1),n(0)):n(b=>b+1),m.blur()};return h.jsxs(h.Fragment,{children:[h.jsxs(nO,{children:[h.jsx(iO,{children:a.t("month")}),h.jsxs(rO,{children:[h.jsx(rc,{onClick:p,children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-arrow-left`})})}),h.jsxs("span",{style:{textTransform:"capitalize"},children:[ec(new Date(r,t,1),"LLLL",{locale:a.language==="uk"?tc:Xu}),", ",r]}),h.jsx(rc,{onClick:d,disabled:Vo<new Date(r,t+1),children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-arrow-right`})})})]})]}),h.jsx(oO,{children:l.map((m,b)=>{const g=ec(new Date(r,t,b+1),"LLLL",{locale:a.language==="uk"?tc:Xu});return h.jsx(tO,{item:m,index:b,monthName:g},b)})})]})},sO=_.div`
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
`,uO=({onClose:e,id:t})=>{const n=Kt(),{t:r}=xe(),o=ne(_r);function i(){n($f({portionId:t,shouldUpdateMonth:Ma(o)})).unwrap().then(()=>e())}return h.jsxs(sO,{children:[h.jsx("h2",{children:r("deleteModal.Delete entry")}),h.jsx("p",{className:"text",children:r("deleteModal.Are you sure you want to delete the entry?")}),h.jsxs("div",{className:"wrapper-btn",children:[h.jsx("button",{onClick:e,className:"cancel-btn",children:r("deleteModal.Cancel")}),h.jsx("button",{onClick:i,className:"delete-btn",children:r("deleteModal.Delete")})]})]})},cO=_.button`
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
`;function lO({id:e}){const[t,n]=C.useState(!1);function r(){n(!0)}return h.jsxs(h.Fragment,{children:[h.jsx(cO,{onClick:r,children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-trash`})})}),t&&h.jsx(An,{onClose:()=>n(!1),children:h.jsx(uO,{id:e,onClose:()=>n(!1)})})]})}const cf=e=>C.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},C.createElement("path",{d:"M6.26099 3.13043L8.39972 32.7888V32.8696H26.8122L28.9509 3.22275V3.13043H6.26099ZM26.0557 32.0387H9.16193L7.55788 9.82376H8.43954L9.89002 29.4017C9.89851 29.5048 9.94461 29.601 10.0193 29.6714C10.094 29.7418 10.1919 29.7815 10.2939 29.7826H10.328C10.3811 29.7789 10.4329 29.7646 10.4806 29.7406C10.5282 29.7165 10.5707 29.6832 10.6056 29.6424C10.6404 29.6017 10.667 29.5544 10.6838 29.5031C10.7006 29.4519 10.7073 29.3979 10.7034 29.344L9.25294 9.82376H27.6597L26.0557 32.0387ZM27.7166 8.99286H9.19037L8.87184 4.66528C8.86183 4.5597 8.81293 4.46184 8.7349 4.39125C8.65687 4.32065 8.55546 4.28251 8.45092 4.28445C8.34378 4.29473 8.24477 4.34679 8.17474 4.42968C8.1047 4.51256 8.06913 4.61978 8.0755 4.72875L8.39404 8.99863H7.501L7.13696 3.95556H28.0807L27.7166 8.99286Z",fill:"#407BFF"}),C.createElement("path",{d:"M12.7797 13.9321C13.0452 13.9321 13.3047 13.8522 13.5255 13.7026C13.7462 13.553 13.9183 13.3403 14.0199 13.0914C14.1215 12.8426 14.1481 12.5688 14.0963 12.3047C14.0445 12.0405 13.9166 11.7979 13.7289 11.6074C13.5411 11.417 13.3019 11.2873 13.0415 11.2348C12.7811 11.1822 12.5112 11.2092 12.2659 11.3122C12.0206 11.4153 11.811 11.5898 11.6635 11.8138C11.516 12.0377 11.4373 12.301 11.4373 12.5703C11.4373 12.9315 11.5787 13.2779 11.8304 13.5332C12.0822 13.7886 12.4236 13.9321 12.7797 13.9321ZM12.7797 12.0337C12.8843 12.0337 12.9866 12.0652 13.0735 12.1241C13.1605 12.1831 13.2283 12.2669 13.2684 12.365C13.3084 12.463 13.3189 12.5709 13.2985 12.675C13.2781 12.7791 13.2277 12.8747 13.1537 12.9498C13.0797 13.0248 12.9855 13.0759 12.8829 13.0966C12.7802 13.1173 12.6739 13.1067 12.5772 13.0661C12.4806 13.0255 12.3979 12.9567 12.3398 12.8685C12.2817 12.7802 12.2507 12.6765 12.2507 12.5703C12.2507 12.428 12.3064 12.2915 12.4056 12.1909C12.5048 12.0902 12.6394 12.0337 12.7797 12.0337Z",fill:"#407BFF"}),C.createElement("path",{d:"M12.7738 18.3578C12.7772 18.6266 12.8589 18.8883 13.0087 19.1101C13.1585 19.3319 13.3696 19.5037 13.6155 19.604C13.8614 19.7042 14.1311 19.7284 14.3905 19.6734C14.6499 19.6185 14.8875 19.4869 15.0733 19.2952C15.2591 19.1035 15.3848 18.8603 15.4346 18.5962C15.4844 18.3322 15.456 18.0591 15.353 17.8114C15.2501 17.5637 15.0772 17.3524 14.856 17.2042C14.6349 17.0561 14.3755 16.9776 14.1105 16.9787C13.9332 16.9794 13.7579 17.0158 13.5946 17.0856C13.4312 17.1555 13.2832 17.2575 13.1589 17.3857C13.0346 17.5139 12.9366 17.6658 12.8705 17.8327C12.8044 17.9995 12.7715 18.178 12.7738 18.3578ZM14.6395 18.3578C14.6395 18.4639 14.6085 18.5676 14.5503 18.6559C14.4922 18.7441 14.4096 18.8129 14.3129 18.8535C14.2163 18.8941 14.1099 18.9048 14.0073 18.8841C13.9047 18.8634 13.8104 18.8122 13.7364 18.7372C13.6625 18.6622 13.6121 18.5665 13.5917 18.4624C13.5713 18.3583 13.5817 18.2505 13.6218 18.1524C13.6618 18.0543 13.7296 17.9705 13.8166 17.9116C13.9036 17.8526 14.0059 17.8211 14.1105 17.8211C14.2508 17.8211 14.3854 17.8777 14.4846 17.9783C14.5838 18.0789 14.6395 18.2154 14.6395 18.3578Z",fill:"#407BFF"}),C.createElement("path",{d:"M22.3129 18.3924C22.5784 18.3924 22.8379 18.3125 23.0587 18.1629C23.2794 18.0132 23.4515 17.8006 23.5531 17.5517C23.6547 17.3029 23.6813 17.0291 23.6295 16.765C23.5777 16.5008 23.4498 16.2582 23.2621 16.0677C23.0743 15.8773 22.8351 15.7476 22.5747 15.6951C22.3143 15.6425 22.0444 15.6695 21.7991 15.7725C21.5539 15.8756 21.3442 16.0501 21.1967 16.2741C21.0492 16.498 20.9705 16.7613 20.9705 17.0306C20.9705 17.3918 21.1119 17.7382 21.3636 17.9935C21.6154 18.2489 21.9568 18.3924 22.3129 18.3924ZM22.3129 16.4998C22.4177 16.4998 22.5202 16.5314 22.6073 16.5906C22.6944 16.6499 22.7622 16.734 22.8021 16.8324C22.842 16.9308 22.8521 17.039 22.8312 17.1432C22.8104 17.2475 22.7594 17.3431 22.6849 17.4179C22.6103 17.4927 22.5155 17.5434 22.4125 17.5634C22.3095 17.5835 22.203 17.572 22.1064 17.5305C22.0099 17.489 21.9277 17.4193 21.8702 17.3303C21.8128 17.2413 21.7827 17.137 21.7839 17.0306C21.7854 16.8893 21.8418 16.7543 21.9408 16.6549C22.0398 16.5555 22.1735 16.4998 22.3129 16.4998Z",fill:"#407BFF"}),C.createElement("path",{d:"M17.6373 15.8247C17.9028 15.8247 18.1624 15.7448 18.3831 15.5952C18.6039 15.4455 18.7759 15.2329 18.8775 14.984C18.9791 14.7352 19.0057 14.4614 18.9539 14.1972C18.9021 13.9331 18.7743 13.6905 18.5865 13.5C18.3988 13.3096 18.1596 13.1799 17.8992 13.1273C17.6388 13.0748 17.3689 13.1018 17.1236 13.2048C16.8783 13.3079 16.6687 13.4824 16.5212 13.7064C16.3737 13.9303 16.2949 14.1936 16.2949 14.4629C16.2949 14.8241 16.4364 15.1704 16.6881 15.4258C16.9399 15.6812 17.2813 15.8247 17.6373 15.8247ZM17.6373 13.9263C17.7419 13.9263 17.8442 13.9578 17.9312 14.0167C18.0182 14.0757 18.086 14.1595 18.126 14.2576C18.1661 14.3556 18.1766 14.4635 18.1562 14.5676C18.1357 14.6717 18.0854 14.7673 18.0114 14.8424C17.9374 14.9174 17.8431 14.9685 17.7405 14.9892C17.6379 15.0099 17.5315 14.9993 17.4349 14.9587C17.3382 14.9181 17.2556 14.8493 17.1975 14.761C17.1394 14.6728 17.1083 14.569 17.1083 14.4629C17.1045 14.3901 17.1153 14.3172 17.1401 14.2487C17.165 14.1802 17.2033 14.1176 17.2528 14.0647C17.3024 14.0117 17.362 13.9696 17.4281 13.9409C17.4942 13.9121 17.5654 13.8973 17.6373 13.8974V13.9263Z",fill:"#407BFF"}),C.createElement("path",{d:"M15.0776 23.5451C15.0832 23.7663 15.153 23.9809 15.2782 24.1621C15.4035 24.3433 15.5786 24.483 15.7817 24.5638C15.9848 24.6446 16.2069 24.6628 16.4201 24.6161C16.6334 24.5695 16.8283 24.4602 16.9806 24.3017C17.1329 24.1433 17.2358 23.9428 17.2763 23.7253C17.3169 23.5079 17.2933 23.2832 17.2086 23.0792C17.1239 22.8753 16.9817 22.7013 16.8 22.5789C16.6183 22.4564 16.405 22.3911 16.1868 22.3911C15.8901 22.3986 15.608 22.5235 15.4007 22.7391C15.1935 22.9547 15.0775 23.2439 15.0776 23.5451ZM16.1868 23.245C16.2453 23.245 16.3025 23.2626 16.3512 23.2956C16.3998 23.3286 16.4377 23.3754 16.4601 23.4302C16.4825 23.4851 16.4883 23.5454 16.4769 23.6036C16.4655 23.6618 16.4373 23.7153 16.396 23.7572C16.3546 23.7992 16.3019 23.8278 16.2445 23.8394C16.1872 23.8509 16.1277 23.845 16.0736 23.8223C16.0196 23.7996 15.9734 23.7611 15.9409 23.7118C15.9084 23.6624 15.891 23.6044 15.891 23.5451C15.891 23.4655 15.9222 23.3892 15.9777 23.3329C16.0331 23.2766 16.1084 23.245 16.1868 23.245Z",fill:"#407BFF"}),C.createElement("path",{d:"M20.4414 22.2929C20.6691 22.301 20.894 22.2394 21.0868 22.1163C21.2797 21.9932 21.4317 21.8142 21.523 21.6024C21.6144 21.3907 21.641 21.1559 21.5994 20.9287C21.5577 20.7014 21.4497 20.4921 21.2894 20.3278C21.1292 20.1635 20.9239 20.0519 20.7003 20.0073C20.4767 19.9627 20.2451 19.9872 20.0354 20.0777C19.8258 20.1682 19.6477 20.3205 19.5244 20.5149C19.401 20.7092 19.338 20.9367 19.3436 21.1678C19.3507 21.4619 19.4683 21.7423 19.6723 21.9514C19.8764 22.1606 20.1515 22.2827 20.4414 22.2929ZM20.4414 20.8677C20.5199 20.8677 20.5951 20.8993 20.6506 20.9556C20.706 21.0119 20.7372 21.0882 20.7372 21.1678C20.7372 21.2474 20.706 21.3237 20.6506 21.3799C20.5951 21.4362 20.5199 21.4678 20.4414 21.4678C20.3624 21.4678 20.2866 21.4364 20.2302 21.3803C20.1738 21.3242 20.1414 21.2479 20.1399 21.1678C20.1399 21.1279 20.1478 21.0884 20.163 21.0516C20.1782 21.0148 20.2005 20.9815 20.2286 20.9535C20.2566 20.9256 20.2899 20.9036 20.3265 20.8889C20.363 20.8742 20.4021 20.867 20.4414 20.8677Z",fill:"#407BFF"}),C.createElement("path",{d:"M22.7851 12.98C23.0101 12.98 23.23 12.9123 23.4171 12.7855C23.6042 12.6587 23.75 12.4785 23.8361 12.2676C23.9222 12.0567 23.9448 11.8247 23.9009 11.6008C23.857 11.377 23.7486 11.1714 23.5895 11.01C23.4304 10.8486 23.2277 10.7387 23.007 10.6941C22.7863 10.6496 22.5576 10.6725 22.3497 10.7598C22.1419 10.8472 21.9642 10.9951 21.8392 11.1848C21.7142 11.3746 21.6475 11.5977 21.6475 11.826C21.6475 12.1321 21.7673 12.4256 21.9807 12.642C22.194 12.8584 22.4834 12.98 22.7851 12.98ZM22.7851 11.5548C22.8291 11.542 22.8754 11.5398 22.9205 11.5483C22.9655 11.5568 23.0079 11.5758 23.0445 11.6038C23.081 11.6317 23.1107 11.6679 23.1311 11.7095C23.1515 11.7511 23.1621 11.7969 23.1621 11.8433C23.1621 11.8897 23.1515 11.9355 23.1311 11.9771C23.1107 12.0187 23.081 12.0549 23.0445 12.0828C23.0079 12.1108 22.9655 12.1298 22.9205 12.1383C22.8754 12.1468 22.8291 12.1446 22.7851 12.1318C22.7411 12.1446 22.6947 12.1468 22.6497 12.1383C22.6047 12.1298 22.5623 12.1108 22.5257 12.0828C22.4892 12.0549 22.4595 12.0187 22.4391 11.9771C22.4187 11.9355 22.4081 11.8897 22.4081 11.8433C22.4081 11.7969 22.4187 11.7511 22.4391 11.7095C22.4595 11.6679 22.4892 11.6317 22.5257 11.6038C22.5623 11.5758 22.6047 11.5568 22.6497 11.5483C22.6947 11.5398 22.7411 11.542 22.7851 11.5548Z",fill:"#407BFF"}),C.createElement("path",{d:"M11.6646 30.5904C11.6136 30.6142 11.568 30.6485 11.5306 30.691C11.4931 30.7335 11.4647 30.7834 11.4471 30.8375C11.4295 30.8916 11.4231 30.9488 11.4282 31.0056C11.4333 31.0623 11.4499 31.1174 11.4769 31.1674C11.5119 31.2348 11.5642 31.2913 11.6283 31.3309C11.6924 31.3705 11.7659 31.3918 11.841 31.3924C11.904 31.3942 11.9665 31.3803 12.023 31.352C13.7609 30.4488 15.6845 29.9744 17.6372 29.9672C19.7037 29.9977 21.7414 30.4634 23.6211 31.3347C23.6955 31.3741 23.78 31.3894 23.8632 31.3785C23.9464 31.3675 24.0243 31.331 24.0863 31.2737C24.1484 31.2164 24.1916 31.1412 24.2101 31.0582C24.2286 30.9752 24.2216 30.8884 24.1899 30.8096C24.1499 30.7073 24.0724 30.6246 23.9738 30.5788C21.9837 29.6554 19.8254 29.164 17.6372 29.1363C15.5614 29.1381 13.5152 29.6363 11.6646 30.5904Z",fill:"#407BFF"})),fO=_.div`
  @media only screen and (min-width: 768px) {
    width: 656px;
  }

  @media only screen and (min-width: 1440px) {
    width: auto;
  }
`,pO=_.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;

  margin-bottom: 24px;
`,dO=_.div`
  font-size: 18px;
  line-height: 1.1;
  margin-bottom: 16px;
  font-weight: 500;
`,hO=_(cf)`
  width: 36px;
  height: 36px;
`,mO=_.div`
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
`,vO=_.form`
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
`,gO=_.div`
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
`,yO=_.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: ${e=>e.theme.colors.secondaryBg};
  margin-bottom: 24px;
`,bO=_.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`,wO=_.p`
  color: ${e=>e.theme.colors.textColor};
  font-size: 12px;
  line-height: 2;
`,xO=_.p`
  color: ${e=>e.theme.colors.textColor};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
  margin-bottom: 12px;
`,OO=_(Vn)`
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
`,oc=50,CO=({onClose:e,id:t})=>{const{t:n}=xe(),r=Kt(),o=ne(_r),a=ne(Bi).find(w=>w._id===t),[s,u]=C.useState(a.waterAmount),{handleSubmit:c,values:{date:l,waterAmount:p},errors:d,setFieldValue:m}=rl({initialValues:{waterAmount:a.waterAmount.toString(),date:`${uf(a.date)}`},onSubmit:w=>{r(jf({portionId:t,credentials:w,shouldUpdateMonth:Ma(o)})).unwrap().then(()=>{e()})}}),b=()=>{m("waterAmount",s?s.toString():"0")},g=()=>{const w=Number.parseInt(p)+oc;m("waterAmount",w.toString()),u(w)},y=()=>{const w=Number.parseInt(p)-oc;m("waterAmount",w<=0?"0":w.toString()),u(w<=0?0:w)};function v(w){u(Number.parseInt(isNaN(Number.parseInt(w))?0:w))}return h.jsxs(fO,{onSubmit:c,children:[h.jsx(pO,{children:n("editModal.Edit the entered amount of water")}),h.jsxs(yO,{children:[h.jsx(hO,{}),h.jsxs(bO,{children:[a.waterAmount,n("ml")]}),h.jsxs(wO,{children:[" ",Ie(a.date).subtract(2,"hours").format("HH:mm")]})]}),h.jsx(dO,{children:n("editModal.Correct entered data")}),h.jsxs(xO,{children:[n("addModal.Amount of water"),":"]}),h.jsxs(mO,{children:[h.jsx("button",{onClick:y,name:"minus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-minus`})})}),h.jsxs("span",{className:"water-amount-value",children:[p,n("ml")]}),h.jsx("button",{onClick:g,name:"plus",type:"button",children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-plus`})})})]}),h.jsxs(vO,{children:[h.jsxs("label",{children:[n("addModal.Recording time"),":",h.jsx(OO,{defaultValue:Ie(l,"HH:mm"),showSecond:!1,minuteStep:5,onChange:w=>{m("date",w&&w.format("HH:mm"))}}),d.date?h.jsx("div",{children:d.date}):null]}),h.jsxs("label",{children:[n("addModal.Enter the value of the water used"),":",h.jsx("input",{name:"number",value:s,onBlur:b,onChange:({target:{value:w}})=>v(w)}),d.waterAmount?h.jsx("div",{children:d.waterAmount}):null]}),h.jsxs(gO,{children:[h.jsxs("p",{children:[p,n("ml")]}),h.jsx("button",{disabled:Object.keys(d).length>0,type:"submit",children:n("save")})]})]})]})},PO=_.button`
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
`;function SO({id:e}){const[t,n]=C.useState(!1);function r(){n(!0)}return h.jsxs(h.Fragment,{children:[h.jsx(PO,{onClick:r,children:h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-edit`})})}),t&&h.jsx(An,{onClose:()=>n(!1),children:h.jsx(CO,{id:e,onClose:()=>n(!1)})})]})}const EO=_.div`
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
`,TO=_.ul`
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
`,_O=_.li`
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
`,MO=_.span`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.33;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`,$O=_.span`
  font-size: 12px;
  line-height: 2;
  color: ${e=>e.theme.colors.textColor};
`,jO=_.div`
  margin-left: auto;
  margin-right: 4px;

  button:first-child {
    margin-right: 18px;
  }
`,AO=_.button`
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
`,DO=()=>{const e=ne(Bi),[t,n]=C.useState(!1),[r,o]=C.useState(!1),{t:i}=xe(),a=c=>{o(!0),n(!1),c.stopPropagation()},s=()=>{o(!1)},u=[...e].sort((c,l)=>{const p=new Date(c.date);return new Date(l.date)-p});return h.jsxs(EO,{children:[u.length>0&&h.jsx(TO,{children:u==null?void 0:u.map(c=>h.jsxs(_O,{children:[h.jsx(cf,{className:"glass"}),h.jsxs(MO,{children:[`${c.waterAmount} ${i("ml")}`," "]}),h.jsx($O,{children:uf(c.date)}),h.jsxs(jO,{children:[h.jsx(SO,{id:c._id}),h.jsx(lO,{id:c._id})]})]},c._id))}),h.jsxs(AO,{onClick:c=>a(c),children:[h.jsx("svg",{children:h.jsx("use",{href:`${Me}#icon-plus`})}),i("addWater")]}),r&&h.jsx(An,{$position:"center",open:r,onClose:s,children:h.jsx(Ql,{onClose:s,isEditing:t})})]})},kO=_.div`
  margin-bottom: 24px;
`,NO=_.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,RO=_.p`
font-size: 18px;
 color: ${e=>e.theme.colors.secondaryBlue};
 margin-bottom: 16px;
`,IO=()=>{const e=Kt(),t=ne(Bi),[n,r]=C.useState(!1),{t:o}=xe();return C.useEffect(()=>{e(Af())},[e]),C.useEffect(()=>{t.length===0?r(!0):r(!1)},[t]),h.jsxs(kO,{children:[h.jsx(NO,{children:o("today")}),n&&h.jsx(RO,{children:"No notes yet"}),h.jsx(DO,{})]})},LO=_.div`
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
`,WO=()=>h.jsxs(LO,{children:[h.jsx(IO,{}),h.jsx(aO,{})]}),FO=_(Df)`
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
`,BO=_.div`
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
`,HO=_.div`
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
  }
`,VO=_.div`
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
`,YO=()=>h.jsx(VO,{id:"beckground",children:h.jsxs(FO,{children:[h.jsxs(BO,{children:[h.jsx(a2,{}),h.jsx(Gx,{})]}),h.jsx(HO,{children:h.jsx(WO,{})})]})});export{YO as default};
