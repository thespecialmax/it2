(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{IZ8t:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("Fcif"),i=n("mXGw"),r=n.n(i),o=n("ki3l"),s=r.a.createElement,l=function(t){var e,n=t.id,a=t.name,i=t.creative,r=t.position,o={event:"promotion-click",ecommerce:{promoClick:{promotions:[{id:(e={id:n,name:a,creative:i,position:r}).id,name:e.name,creative:e.creative,position:e.position}]}}};window.dataLayer.push(o)};function c(t){return function(e){return s(o.a,null,(function(n){var i=t.displayName||t.name;return s(t,Object(a.a)({},e,{handlePromotionClick:function(t){n&&l({id:t,name:"".concat(i," Click"),creative:i,position:n.title})}}))}))}}},PK2V:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var a=n("mXGw"),i=n.n(a),r=n("8Jek"),o=n.n(r),s=n("s4DR"),l=i.a.createElement,c=function(t){var e=t.className,n=t.url,a=t.title,i=t.category,r=t.image,c=t.alt,u=t.index,d=t.onClick;return l("div",{"data-testid":"card-callout",key:n,className:o()("w-1-2 lg:w-1-4 px-16 pb-32 md:pb-0",e)},l(s.a,{className:e,url:n,title:a,category:i,imageSrc:r,alt:c||a||"",index:u,onClick:d}))};c.defaultProps={alt:"",className:"",onClick:function(){}};var u=c},pvnw:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("Fcif"),i=n("aNYv"),r=n("mXGw"),o=n.n(r),s=n("vh07"),l=n.n(s),c=n("7u/i"),u=o.a.createElement;function d(t){return Object.entries(l.a.theme.screens).reduce((function(t,e){var n=Object(i.a)(e,2),a=n[0],r=n[1];return Object(c.a)(t,"(min-width: ".concat(r,")"),a)}),(function(e){var n=Object(r.useState)(!1),i=n[0],o=n[1];Object(r.useEffect)((function(){i||o(!0)}),[i,o]);var s=Object.keys(l.a.theme.screens).reduce((function(t,n){return t[n]=i&&!!e[n],t}),{});return u(t,Object(a.a)({},e,s))}))}},s4DR:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var a=n("Fcif"),i=n("YIwv"),r=n.n(i),o=n("mXGw"),s=n.n(o),l=n("8Jek"),c=n.n(l),u=n("T4N5"),d=n("rqbA"),f=n("9WxZ"),h=n("b9Kb"),m=n("pvnw"),p=n("2f5i"),x=n("uNdt"),b=n.n(x),v=n("HyFM"),g=n("e1kf"),C=n("IZ8t"),k=n("BWQ3"),j=[".aspectRatioCropWrap.jsx-2736022025{padding-top:56.25%;}",".aspectRatioCropImage.jsx-2736022025{-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}"];j.__hash="2736022025";var E=j,N=s.a.createElement,S=Object(f.a)(E),_={medium:{width:300,height:190,imgixParams:{auto:"format",ar:"16:9",fit:"crop",sharp:10,vib:20}},large:{width:630,height:360,imgixParams:{auto:"format",ar:"16:9",fit:"crop",crop:"entropy",sharp:10,vib:20}}},w=function(t){var e=t.className,n=t.url,i=t.onClick,s=t.title,l=t.imageSrc,f=t.imageOverlay,m=t.size,x=t.alt,C=t.category,j=t.categoryUrl,w=t.readingTime,y=t.publishedUnix,O=t.theme,I=t.index,T=t.handlePromotionClick,M=t.sm,D=t.tagularCategoryClick,P=t.tagularTitleClick,R=t.tagularImageClick,B=I+1,X=B?"".concat(B," - ").concat(s):s,Y=function(t){return N(h.a,{url:n},N("a",{className:c()("relative block",{"cursor-pointer":n||i}),onClick:function(){i&&i(),T(X)}},t))},U="en-US"===Object(o.useContext)(k.b).language?"MMM D, YYYY":"D MMM YYYY";return N("article",{"data-testid":"card-preview",className:"jsx-".concat(E.__hash)+" "+(c()("CardPreview",e,{"text-white":"dark"===O})||"")},N("figure",{className:"jsx-".concat(E.__hash)},Y(N("div",{"data-testid":"card-preview-".concat(s,"-image"),onClick:R,className:"jsx-".concat(E.__hash)+" \n              aspectRatioCropWrap\n              rounded\n              shadow-md\n              mb-16\n              relative\n              h-0\n              overflow-hidden\n            "},N(u.a,Object(a.a)({className:S("aspectRatioCropImage","h-auto w-full absolute left-1-2 top-1-2"),src:b()(l),htmlAttributes:{alt:x||s||""}},_[m],{lazyload:!0})),f&&N("div",{className:"jsx-".concat(E.__hash)+" absolute w-full h-full inset-0"},f))),N("figcaption",{className:"jsx-".concat(E.__hash)+" mt-16"},C&&N(p.a,{maxLines:1},(function(t){return N(d.a,{testId:s},j?N(h.a,{url:j},N("a",{onClick:D,className:"jsx-".concat(E.__hash)},C)):N("span",{style:t,className:"jsx-".concat(E.__hash)},C))})),Y(N(p.a,{maxLines:3},(function(t){return N("h2",{"data-testid":"card-preview-".concat(s,"-description"),style:t,onClick:P,className:"jsx-".concat(E.__hash)+" "+(c()("leading-tight font-medium responsive-lg","dark"===O?"text-white":"text-primary")||"")},s)}))),M&&N("div",{className:"jsx-".concat(E.__hash)+" font-medium type-xs text-secondary"},w&&N("span",{className:"jsx-".concat(E.__hash)},w),w&&y&&N("span",{className:"jsx-".concat(E.__hash)}," \u2022 "),y&&N("span",{className:"jsx-".concat(E.__hash)},Object(v.a)(Object(g.a)(y,5,U)))))),N(r.a,{id:E.__hash},E))};w.defaultProps={className:"",url:null,onClick:null,imageOverlay:null,size:"medium",alt:"",category:"",categoryUrl:"",readingTime:"",publishedUnix:null,theme:"light",index:0,tagularCategoryClick:function(){},tagularTitleClick:function(){},tagularImageClick:function(){}};var y=Object(m.a)(Object(C.a)(w))},wR8h:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return Y}));var a=n("hisu"),i=n("yBJb"),r=n("0942"),o=n("CHlC"),s=n("kMo5"),l=n("P+uj"),c=n("mK0O"),u=n("mXGw"),d=n.n(u),f=n("BfJI"),h=n("jdwf"),m=n("YIwv"),p=n.n(m),x=n("+I+c"),b=n("7L9N"),v=(n("W0B4"),n("xARA")),g=n.n(v),C=!1,k=d.a.createContext(null),j="unmounted",E="exited",N="entering",S="entered",_=function(t){function e(e,n){var a;a=t.call(this,e,n)||this;var i,r=n&&!n.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?r?(i=E,a.appearStatus=N):i=S:i=e.unmountOnExit||e.mountOnEnter?j:E,a.state={status:i},a.nextCallback=null,a}Object(b.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===j?{status:E}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==N&&n!==S&&(e=N):n!==N&&n!==S||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,a=this.props.timeout;return t=e=n=a,null!=a&&"number"!==typeof a&&(t=a.exit,e=a.enter,n=void 0!==a.appear?a.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=g.a.findDOMNode(this);e===N?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:j})},n.performEnter=function(t,e){var n=this,a=this.props.enter,i=this.context?this.context.isMounting:e,r=this.getTimeouts(),o=i?r.appear:r.enter;!e&&!a||C?this.safeSetState({status:S},(function(){n.props.onEntered(t)})):(this.props.onEnter(t,i),this.safeSetState({status:N},(function(){n.props.onEntering(t,i),n.onTransitionEnd(t,o,(function(){n.safeSetState({status:S},(function(){n.props.onEntered(t,i)}))}))})))},n.performExit=function(t){var e=this,n=this.props.exit,a=this.getTimeouts();n&&!C?(this.props.onExit(t),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(t),e.onTransitionEnd(t,a.exit,(function(){e.safeSetState({status:E},(function(){e.props.onExited(t)}))}))}))):this.safeSetState({status:E},(function(){e.props.onExited(t)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e,n){this.setNextCallback(n);var a=null==e&&!this.props.addEndListener;t&&!a?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===j)return null;var e=this.props,n=e.children,a=Object(x.a)(e,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"===typeof n)return d.a.createElement(k.Provider,{value:null},n(t,a));var i=d.a.Children.only(n);return d.a.createElement(k.Provider,{value:null},d.a.cloneElement(i,a))},e}(d.a.Component);function w(){}_.contextType=k,_.propTypes={},_.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:w,onEntering:w,onEntered:w,onExit:w,onExiting:w,onExited:w},_.UNMOUNTED=0,_.EXITED=1,_.ENTERING=2,_.ENTERED=3,_.EXITING=4;var y=_,O=[".MastheadNavigation.jsx-4207966585{bottom:inherit;top:6rem;}","@media (min-width:768px){.MastheadNavigation.jsx-4207966585{bottom:2rem;top:inherit;}}",".tabButton.jsx-4207966585{outline-color:white;}",".lineButton.jsx-4207966585{outline:0 !important;}",".progress.jsx-4207966585{left:-100%;}"];O.__hash="4207966585";var I=O,T=d.a.createElement,M=function(t){var e=t.slideDurations,n=t.slideIndex,a=t.onClick,i=t.onNext;return T("div",{className:"jsx-".concat(I.__hash)+" MastheadNavigation absolute left-0 right-0"},T("ul",{className:"jsx-".concat(I.__hash)+" lm-container flex"},e.map((function(t,e){return T("li",{key:String(e),className:"jsx-".concat(I.__hash)+" relative flex-1 px-5 first:pl-0 last:pr-0"},T("button",{type:"button",onClick:function(){return a(e)},className:"jsx-".concat(I.__hash)+" tabButton absolute left-0 top-0 w-full h-full"}),T("button",{type:"button",tabIndex:-1,onClick:function(){return a(e)},className:"jsx-".concat(I.__hash)+" lineButton relative py-20 w-full"},T("div",{style:{backgroundColor:"rgba(255, 255, 255, ".concat(e<n?1:.5,")")},className:"jsx-".concat(I.__hash)+" block relative h-2 w-full rounded overflow-hidden"},T(y,{appear:!0,in:e===n,onEntered:i,timeout:{enter:t,exit:0}},(function(e){return T("div",{style:{entering:{transform:"translateX(100%)",transition:"transform ".concat(t,"ms linear")},entered:{transform:"translateX(100%)",transition:"transform ".concat(t,"ms linear")},exiting:{transform:"translateX(0%)",transition:"transform 0ms linear"},exited:{transform:"translateX(0%)",transition:"transform 0ms linear"}}[e],className:"jsx-".concat(I.__hash)+" progress absolute top-0 bg-white h-full w-full"})})))))}))),T(p.a,{id:I.__hash},I))},D=n("23BM"),P=n("g3/d"),R=d.a.createElement;function B(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var X=function(t){Object(o.a)(u,t);var e,n=(e=u,function(){var t,n=Object(l.a)(e);if(B()){var a=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(s.a)(this,t)});function u(t){var e;return Object(a.a)(this,u),e=n.call(this,t),Object(c.a)(Object(r.a)(e),"onBeforeSlide",(function(t,n){return e.setState({beforeChangeSlideIndex:n})})),Object(c.a)(Object(r.a)(e),"onAfterSlide",(function(t){return e.setState({afterChangeSlideIndex:t})})),Object(c.a)(Object(r.a)(e),"onNavigationClick",(function(t){e.mastheadSlider&&e.mastheadSlider.goTo(t)})),Object(c.a)(Object(r.a)(e),"onNavigationNext",(function(){e.mastheadSlider&&e.mastheadSlider.next()})),e.mastheadSlider=null,e.mobile=h.a.isMobile(),e.state={beforeChangeSlideIndex:0,afterChangeSlideIndex:0},e}return Object(i.a)(u,[{key:"render",value:function(){var t=this,e=this.state,n=e.beforeChangeSlideIndex,a=e.afterChangeSlideIndex,i=this.props.slides,r=i.map((function(e,n){return R(D.a,{key:n,slide:e,mobile:t.mobile,active:n===a})})),o=i.map((function(e){return!t.mobile&&e.videoDuration||t.mobile&&(e.videoMobileDuration||e.videoDuration)||7e3}));return R(f.a,{className:"relative",isUnderGlobalHeader:!0,qaHook:"masthead"},R(P.a,{qaHook:!0,ref:function(e){t.mastheadSlider=e},slides:r,settings:{autoplay:!1,renderBottomCenterControls:null,beforeSlide:this.onBeforeSlide,afterSlide:this.onAfterSlide}}),R(M,{slideDurations:o,slideIndex:n,onClick:this.onNavigationClick,onNext:this.onNavigationNext}))}}]),u}(d.a.Component);X.defaultProps={slides:[]};var Y=X}}]);