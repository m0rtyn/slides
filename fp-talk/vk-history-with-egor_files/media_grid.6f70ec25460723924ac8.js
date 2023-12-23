﻿(()=>{"use strict";var e,t={471234:(e,t,r)=>{function l(e,t){const r=new IntersectionObserver(((e,r)=>{e.some((e=>e.isIntersecting))&&(t(),r.disconnect())}),{threshold:0});return r.observe(e),()=>r.disconnect()}r.d(t,{runOnceInViewport:()=>l})},975921:(e,t,r)=>{r.d(t,{initCarousel:()=>f});var l=r(321850),a=r(159097),n=r(210929),o=r(471234),s=r(790500),i=r(970978),c=r(459474),u=r(839470),d=r(301230);function m(e,t,r){return t.contains(e)&&!r.contains(e)}function p(e){e.target===e.currentTarget&&"transform"===e.propertyName&&y()}function y(){window.dispatchEvent(new CustomEvent("scroll"))}function v(e,t){if(!window.UIGallery)return void(0,i.logError)(new Error("PrimaryAttachmentCarousel >> no UIGallery global"));const{slidesCount:r,maxBulletsToDisplay:o,activeBulletIndex:v}=e,f=(0,n.fork)(a.domain,{values:[[a.$carousel,{slidesCount:r,maxBulletsToDisplay:o,activeBulletIndex:v}]],handlers:[[a.updateCarouselBulletsFx,e=>function(e,t){var r,l,a;null==(r=t.querySelector(".PrimaryAttachmentCarousel__bullet--active"))||r.classList.remove("PrimaryAttachmentCarousel__bullet--active"),null==(l=t.querySelector(".PrimaryAttachmentCarousel__bulletCircle--big"))||l.classList.remove("PrimaryAttachmentCarousel__bulletCircle--big");const n=t.querySelectorAll(".PrimaryAttachmentCarousel__bullet")[e.activeBulletIndex];null==n||n.classList.add("PrimaryAttachmentCarousel__bullet--active"),null==(a=n.querySelector(".PrimaryAttachmentCarousel__bulletCircle"))||a.classList.add("PrimaryAttachmentCarousel__bulletCircle--big"),e.slidesCount>e.maxBulletsToDisplay&&(t.querySelector(".PrimaryAttachmentCarousel__bulletsInner").style.left=`${e.bulletsContainerOffsetX}px`);t.querySelectorAll(".PrimaryAttachmentCarousel__bulletCircle--small").forEach((e=>e.classList.remove("PrimaryAttachmentCarousel__bulletCircle--small"))),e.smallBulletsIndexes.forEach((e=>{var r;const l=t.querySelectorAll(".PrimaryAttachmentCarousel__bullet")[e];null==(r=null==l?void 0:l.querySelector(".PrimaryAttachmentCarousel__bulletCircle"))||r.classList.add("PrimaryAttachmentCarousel__bulletCircle--small")}))}(e,t)]]}),h=!d.browser.safari&&(0,u.partConfigEnabled)("feed_primary_attachments_carousel_css_transitions"),w={scrollX:!1,scrollY:!1,onViewItem:(e,t)=>{(0,n.allSettled)(a.updateShownSlideIndex,{scope:f,params:t}),function(e){var t,r;const l=e.closest(`.${c.UI_GALLERY_CLASSNAME}`);if(!l)return;const a=window.cur.videoInlinePlayer;a&&m(a.el,l,e)&&(a.pause(),a.ads.pause());const n=null==(t=window.VideoYoutube)||null==(r=t.cur)?void 0:r.player;n&&m(n.h,l,e)&&n.pauseVideo()}(e)},isFullSizeSlide:!h,isModernTransitionsEnabled:h},_=new window.UIGallery(t,w),b=t.querySelector(`.${c.UI_GALLERY_CONTENT_CLASSNAME}`),C=t.querySelector(`.${c.UI_GALLERY_INNER_CLASSNAME}`);h?null==C||C.addEventListener("transitionend",p):null==b||b.addEventListener("scroll",y),(0,s.default)(t,".PrimaryAttachmentCarousel__bullet","click",(e=>{let t=e.delegateTarget.dataset.bulletIndex;t&&(0,n.allSettled)(a.scrollToSlide,{scope:f,params:{index:parseInt(t,10),carousel:_}})})),(0,l.pushNavDestroy)((()=>{h?null==C||C.removeEventListener("transitionend",p):null==b||b.removeEventListener("scroll",y),_.destroy()}))}function f(e){const{data:t,target:r}=e.payload;if(r)if(0===r.clientWidth||0===r.clientHeight){const e=(0,o.runOnceInViewport)(r,(()=>{v(t,r),e()}))}else v(t,r);else(0,i.logError)(new Error("PrimaryAttachmentCarousel >> no target for UIGallery"))}},159097:(e,t,r)=>{r.d(t,{$carousel:()=>o,domain:()=>n,scrollToSlide:()=>c,updateCarouselBulletsFx:()=>u,updateShownSlideIndex:()=>s});var l=r(434788),a=r(210929);const n=(0,a.createDomain)("PrimaryAttachmentCarousel"),o=n.createStore({shownSlideIndex:0,slidesCount:0,activeBulletIndex:0,bulletsContainerOffsetX:0,smallBulletsIndexes:[],maxBulletsToDisplay:5},{sid:"carouselStore"}),s=n.createEvent(),i=n.createEvent(),c=n.createEvent({sid:"scrollToSlide"}),u=n.createEffect({sid:"updateCarouselBulletsFx"}),d=n.createEffect((({carouselState:e,params:t})=>{const r=e.shownSlideIndex,l=t.index;if(l>=0&&l<=e.slidesCount-1){const e=l-r;0!==e&&t.carousel.scrollToDirection(e)}}));o.on(i,((e,t)=>(0,l._)({},e,{slidesCount:t}))),o.on(s,((e,t)=>{let r=t,a=0,n=[];if(e.slidesCount>e.maxBulletsToDisplay){const r=e.slidesCount-1;n=[4],a=e.bulletsContainerOffsetX,t>2&&r-t>2?(a=14*(t-2)*-1,n=[t-2,t+2]):r-t<=2?(n=[r-4],a=14*(e.slidesCount-e.maxBulletsToDisplay)*-1):a=0}return(0,l._)({},e,{shownSlideIndex:t,activeBulletIndex:r,bulletsContainerOffsetX:a,smallBulletsIndexes:n})})),(0,a.sample)({clock:c,source:o,fn:(e,t)=>({carouselState:e,params:t}),target:d}),(0,a.sample)({clock:o.updates,source:o,target:u})},53458:(e,t,r)=>{var l,a,n,o=r(283452),s=r(975921);(null==(l=window.vk)||null==(a=l.pe)?void 0:a.static_manager_dynamic_imports)&&(null==(n=window.vk)?void 0:n.stDomain)&&(r.p=window.vk.stDomain+"/dist/"),window.vk.widget||((0,o.tq)().setInteractiveHandler("MediaGrid/unblurPhoto",(e=>{let{title:t,text:r,photoRawId:l,hash:a}=e.payload.dataAttrs;window.Page.showUnblurBox(t,r,l,a,(()=>{var t;const r=null==(t=e.payload.target)?void 0:t.closest("[data-restricted-item]");if(r){const e=r.querySelector(".MediaGridItemRestriction");null==e||e.remove();const t=r.querySelector(".MediaGrid__imageElement--blur");null==t||t.classList.remove("MediaGrid__imageElement--blur")}}))})),(0,o.tq)().setInteractiveHandler("WallPost/openGif",(e=>{var t;let{docId:r,docOwnerId:l,accessKey:a,postId:n,postOwnerId:o,hash:s}=e.payload.dataAttrs;null==(t=window.Page)||t.showGifBox(parseInt(r),parseInt(l),n,o,s,e.payload.event,{accessKey:a})})),(0,o.tq)().setInteractiveHandler("WallPost/openPhoto",(e=>{let{photoId:t,listId:r,options:l}=e.payload.dataAttrs;try{var a;const n=JSON.parse(l);(null==(a=e.payload.target)?void 0:a.closest("[data-blurred-item]"))&&(n.preventPhotoShowingInLayer=!0),window.showPhoto(t,r,n,e.payload.event)}catch(e){}})),(0,o.tq)().setStartupHandler("PrimaryAttachmentCarousel/init",s.initCarousel));try{window.stManager.done(window.jsc("web/media_grid.js"))}catch(e){}},790500:(e,t,r)=>{r.d(t,{default:()=>n});const l=new WeakMap;function a(e,t,r,a){var n,o;if(!e&&!l.has(t))return!1;const s=null!==(n=l.get(t))&&void 0!==n?n:new WeakMap;if(l.set(t,s),!e&&!l.has(t))return!1;const i=null!==(o=s.get(r))&&void 0!==o?o:new Set;s.set(r,i);const c=i.has(a);return e?i.add(a):i.delete(a),c&&e}const n=function e(t,r,l,n,o){if("string"==typeof t&&(t=document.querySelectorAll(t)),"function"!=typeof t.addEventListener){const a=Array.prototype.map.call(t,(t=>e(t,r,l,n,o)));return{destroy(){a.forEach((e=>e.destroy()))}}}const s=t,i=Boolean("object"==typeof o?o.capture:o),c=e=>{const t=e.target.closest(r);t&&(e.delegateTarget=t,e.currentTarget.contains(e.delegateTarget)&&n.call(s,e))},u=JSON.stringify({selector:r,type:l,capture:i}),d={destroy(){s.removeEventListener(l,c,o),a(!1,s,n,u)}};return a(!0,s,n,u)||s.addEventListener(l,c,o),d}}},r={};function l(e){var a=r[e];if(void 0!==a)return a.exports;var n=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.loaded=!0,n.exports}l.m=t,e=[],l.O=(t,r,a,n)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,a,n]=e[u],s=!0,i=0;i<r.length;i++)(!1&n||o>=n)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(s=!1,n<o&&(o=n));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,a,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.e=()=>Promise.resolve(),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.p="/dist/",(()=>{var e={63799:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[o,s,i]=r,c=0;if(o.some((t=>0!==e[t]))){for(a in s)l.o(s,a)&&(l.m[a]=s[a]);if(i)var u=i(l)}for(t&&t(r);c<o.length;c++)n=o[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(u)},r=self.webpackChunkvk=self.webpackChunkvk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=l.O(void 0,[75514,76400,68592],(()=>l(53458)));a=l.O(a)})();