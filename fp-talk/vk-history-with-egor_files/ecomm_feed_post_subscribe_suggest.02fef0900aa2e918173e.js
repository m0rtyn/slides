﻿(()=>{"use strict";var e,t,n,o={59985:(e,t,n)=>{n.d(t,{HIDE_TOOLTIP_TIMEOUT:()=>o,OPENED_REACTED_USERS_DEFAULT_REACTION_ID:()=>c,REACTION_ID_DEFAULT:()=>i,REACTION_ID_MAX:()=>s,REACTION_ID_MIN:()=>a,REACTION_ID_UNSET:()=>u,REACTION_SET_ITEMS_MIN_COUNT:()=>l,SHOW_TOOLTIP_TIMEOUT:()=>r});const o=600,r=140,i=0,s=7,a=0,u=void 0,l=2,c=i},192441:(e,t,n)=>{n.d(t,{reactionCountsBrandUnwrap:()=>r,reactionCountsBrandWrap:()=>i});var o=n(640971);const r=e=>(0,o.unwrap)(e),i=e=>(0,o.wrap)(e)},822715:(e,t,n)=>{n.d(t,{areCountersEqual:()=>h,calcCounters:()=>S,calcCountersSum:()=>y,calcCountersWeightedSum:()=>E,counterForReactionId:()=>R,getDefaultReaction:()=>l,getDefaultReactionTitle:()=>c,getReaction:()=>u,hasReactionsForCounts:()=>O,isReactionIdSet:()=>_,isReactionIdUnset:()=>v,isUnknownObject:()=>a,isValidReactionId:()=>g,parseReactionId:()=>b,parseReactionIdOrUnset:()=>f,parseReactionMenuConfig:()=>I,prepareReactionMenuSet:()=>p,validateReactionSetPayloaditems:()=>m});var o=n(59985),r=n(192441),i=n(659397);const s=Number.isInteger||(e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e),a=e=>null!==e&&"object"==typeof e,u=(e,t)=>e.itemsById[t],l=e=>u(e,o.REACTION_ID_DEFAULT),c=e=>{var t;return null==(t=l(e))?void 0:t.title},d=(e,t)=>0===e.length?"":((e,t,n=!0)=>e.reduce(((e,o)=>{const r=t(o),i=t(e);return i===r?n?e:o:i<r?e:o})))(e,(e=>Math.pow(t.width-e.width,2)+Math.pow(t.height-e.height,2)),!1).url,p=(e,t,n)=>{const o=t.map((({asset:e,color_sets:t,id:o,score:r,title:i})=>({animationURL:e.animation_url||void 0,backgroundColor:null==t?void 0:t.background,id:o,imageMenuURL:d(e.images,n.imageMenuSize),imagePreviewURL:"imagePreviewSize"in n?d(e.images,n.imagePreviewSize):void 0,imageStoryPanelURL:"imageStoryPanelSize"in n?d(e.images,n.imageStoryPanelSize):void 0,imageStoryPreviewURL:"imageStoryPreviewSize"in n?d(e.images,n.imageStoryPreviewSize):void 0,score:r,title:i,titleColor:null==t?void 0:t.foreground}))),r={};return o.forEach((e=>{r[e.id]=e})),{id:e,items:o,itemsById:r}},_=e=>e!==o.REACTION_ID_UNSET,v=e=>e===o.REACTION_ID_UNSET,g=e=>s(e)&&e>=o.REACTION_ID_MIN&&e<=o.REACTION_ID_MAX,b=e=>{const t=parseInt(e,10);return g(t)?{isValid:!0,value:t}:{isValid:!1}},f=e=>{const t=b(e);return t.isValid?t.value:o.REACTION_ID_UNSET},m=(e,t)=>{if(e.length<o.REACTION_SET_ITEMS_MIN_COUNT)return{error:new Error(`Invalid reactions items count in set '${t}': ${e.length}`)}},I=e=>{if(!a(e))return;const t={},{animationShowStaticAfterEnd:n,menuShowDelay:r,openedDefaultReactionId:i,reportJsErrors:s}=e;return"number"!=typeof r&&void 0!==r||(t.menuShowDelay=r),"boolean"==typeof n&&(t.animationShowStaticAfterEnd=n),"boolean"==typeof s&&(t.reportJsErrors=s),"number"==typeof i||null===i?null===i?t.openedDefaultReactionId=void 0:g(i)&&(t.openedDefaultReactionId=i):t.openedDefaultReactionId=o.OPENED_REACTED_USERS_DEFAULT_REACTION_ID,t},S=(e,t)=>{const n=(0,r.reactionCountsBrandWrap)({});return Object.entries((0,r.reactionCountsBrandUnwrap)(e)).forEach((([e,o])=>{var r,i;const s=e;var a;const u=null!=(a=null==t||null==(r=t.itemsById)||null==(i=r[s])?void 0:i.score)?a:1;n[s]=u*(o||0)})),n},y=e=>Object.values((0,r.reactionCountsBrandUnwrap)(e)).reduce(((e,t)=>e+(t||0)),0),E=e=>y((0,r.reactionCountsBrandWrap)(e)),O=e=>y(e)>0;var w;const R=(e,t)=>null!=(w=e[t])?w:void 0,h=(e,t)=>e&&t?(0,i.isEqual)(e,t):e===t},640971:(e,t,n)=>{n.d(t,{unwrap:()=>o,wrap:()=>r});const o=e=>e,r=e=>e},126299:(e,t,n)=>{n.d(t,{PostSubscribeSuggest:()=>b});var o=n(11010),r=n(785893),i=n(667294),s=n(86894),a=n(659397),u=n(869048),l=n(29271),c=n(851793),d=n(896509),p=n(170864),_=n(693982),v=n(822715),g=n(505426);const b=({groupId:e,avatarUrl:t,objectId:n,isLast:b,ajaxService:f})=>{const[m,I]=(0,i.useState)(!1),[S,y]=(0,i.useState)(!1),[E,O]=(0,i.useState)(!1),w=(0,i.useRef)(null);(0,i.useEffect)((()=>{b&&(()=>{const e=(0,p.getPostElem)(n);e&&(w.current=e.querySelector(".PostActivityBar"))})()}),[]),(0,i.useEffect)((()=>{w.current&&w.current.classList.toggle("PostActivityBar--isLast")}),[m]);const R=(0,o._)((function*(){O(!0);try{yield f.groupsJoin({group_id:e}),(0,g.emitEvent)(g.WallDataEvents.post_subscribe_update,{groupId:e,isSubscribed:!0})}catch(e){console.log(e)}finally{O(!1)}})),h=(0,o._)((function*(){O(!0);try{yield f.groupsLeave({group_id:e}),(0,g.emitEvent)(g.WallDataEvents.post_subscribe_update,{groupId:e,isSubscribed:!1})}catch(e){console.log(e)}finally{O(!1)}}));return(0,c.useReactionsGlobalUpdateEventsForObject)((0,_.likePostObjectId)(n),(({reactionIdState:e,suggestSubscribe:t})=>{(0,v.isReactionIdSet)(e.reactionId)&&t&&I(!0)})),(0,d.useSubscribeGlobalUpdateEventsForObject)(e,(({isSubscribed:e})=>{y(e)})),m?(0,r.jsx)(u.AppRootProvider,{children:(0,r.jsxs)("div",{className:(0,a.classNames)("PostSubscribeSuggest",{PostSubscribeSuggest__isLast:b}),children:[(0,r.jsx)(s.Avatar,{size:24,src:t}),(0,r.jsx)("span",{className:"PostSubscribeSuggest__message",children:l.getLang("groups_post_subscribe_suggest_message")}),(0,r.jsx)(s.Button,{onClick:S?h:R,size:"s",appearance:"accent",mode:S?"secondary":"primary",className:"PostSubscribeSuggest__button",loading:E,children:S?l.getLang("groups_post_subscribe_suggest_btn_unsubscribe"):l.getLang("groups_post_subscribe_suggest_btn_subscribe")})]})}):null}},467253:(e,t,n)=>{n.d(t,{AjaxServiceInstance:()=>r});var o=n(256837);const r={groupsJoin:o.Groups.join,groupsLeave:o.Groups.leave}},256837:(e,t,n)=>{n.d(t,{Groups:()=>a});var o=n(11010),r=n(434788),i=n(393356),s=n(599809);const a={join:(0,o._)((function*(e){return(0,s.api)("groups.join",(0,r._)({},e),{version:i.API_VERSION})})),leave:(0,o._)((function*(e){return(0,s.api)("groups.leave",(0,r._)({},e),{version:i.API_VERSION})})),toggle:(0,o._)((function*({apiParams:e,isMember:t}){return t?a.leave(e):a.join(e)})),getById:(0,o._)((function*({group_id:e,fields:t}){var n;if(!e)return null;const o=yield(0,s.api)("groups.getById",{group_ids:String(u(e)),fields:t},{version:i.API_VERSION}).catch((e=>console.error(e)));var r;return null!=(r=null==o||null==(n=o.groups)?void 0:n[0])?r:null})),edit:(0,o._)((function*(e){return(0,s.api)("groups.edit",(0,r._)({},e),{version:i.API_VERSION})})),getMembers:(0,o._)((function*(e){return(0,s.api)("groups.getMembers",(0,r._)({},e),{version:i.API_VERSION})}))};function u(e){return"string"==typeof e?Math.abs(parseInt(e,10)):Math.abs(e)}},811973:(e,t,n)=>{var o,r,i,s=n(434788),a=n(785893),u=n(973935),l=n(126299),c=n(467253),d=n(283452),p=n(321850);(null==(o=window.vk)||null==(r=o.pe)?void 0:r.static_manager_dynamic_imports)&&(null==(i=window.vk)?void 0:i.stDomain)&&(n.p=window.vk.stDomain+"/dist/");const _={init(e,t){u.render((0,a.jsx)(l.PostSubscribeSuggest,(0,s._)({},t,{ajaxService:c.AjaxServiceInstance})),e),e&&(0,p.pushNavDestroy)((()=>u.unmountComponentAtNode(e)))}};try{window.stManager.done(window.jsc("web/ecomm_feed_post_subscribe_suggest.js")),(0,d.tq)().setStartupHandler("EcommFeedPostSubscribeSuggest/init",(({payload:e})=>{const{target:t,data:n}=e;_.init(t,n)}))}catch(e){}},693982:(e,t,n)=>{function o(e){const t=e.match(/^([a-z_]+)([0-9\-_]+)$/);if(!t)return null;const[,n,o]=t;return{objectType:n,objectId:o}}n.d(t,{getElementLikeButtonCount:()=>a,getElementLikeButtonIcon:()=>l,getElementLikeButtonLabel:()=>d,likePostObjectId:()=>r,likeReplyObjectId:()=>i,parseLikeObjectId:()=>o});const r=e=>`wall${e}`,i=e=>`wall_reply${e}`;var s;const a=e=>null!=(s=null==e?void 0:e.querySelector(".like_button_count, ._like_button_count"))?s:void 0;var u;const l=e=>null!=(u=null==e?void 0:e.querySelector(".like_button_icon, ._like_button_icon"))?u:void 0;var c;const d=e=>null!=(c=e.querySelector(".like_button_label, ._like_button_label"))?c:void 0},282795:(e,t,n)=>{n.d(t,{ReactionMenuTitleVariants:()=>i,TITLE_VARIANT_DEFAULT:()=>r,TitleVariantWithLikedUsers:()=>o});const o="WithLikedUsers",r=o,i=[o,"TitleOnly"]},851793:(e,t,n)=>{n.d(t,{useReactionsGlobalStateForObject:()=>u,useReactionsGlobalUpdateEventsForObject:()=>l});var o=n(667294),r=n(822715),i=n(505426),s=n(693982),a=n(249823);function u(e,{payloadIsSuitable:t}={}){const[n,i]=(0,o.useState)(void 0),s=(0,a.usePreviousRef)(n);return l(e,(0,o.useCallback)((function(e){var n;t&&!t(e)||e.counts&&!(0,r.areCountersEqual)(e.counts,null!=(n=s.current)?n:void 0)&&i(e.counts)}),[e])),{counts:n}}function l(e,t){!function({onAnyPostCountsAnyUpdate:e}){(0,o.useEffect)((()=>(0,i.registerNonGlobalNonUniqueListener)(i.WallDataEvents.post_reactions_counts_update,e)),[e])}({onAnyPostCountsAnyUpdate:(0,o.useCallback)((function(n){(0,s.likePostObjectId)(n.postFullId)===e&&t(n)}),[e])})}},225960:(e,t,n)=>{n.d(t,{ButtonStyleVariant:()=>o});const o={Post:"post",Reply:"reply"}},249823:(e,t,n)=>{n.d(t,{isValidButtonStyleVariant:()=>p,isValidButtonTitleVariant:()=>d,isValidEnvironment:()=>s,preloadImage:()=>a,usePrevious:()=>u,usePreviousRef:()=>l});var o=n(667294),r=n(282795),i=n(225960);const s=()=>{var e,t;return"function"==typeof(null==(e=window.cur)?void 0:e.viewAsBox)?(window.cur.viewAsBox(),!1):!(window.vk.widget&&!window.vk.id)||(null==(t=window.Widgets)||null==t.oauth||t.oauth(),!1)},a=e=>new Promise(((t,n)=>{const o=new Image;o.src=e,o.onload=()=>t(),o.onerror=()=>n()})),u=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e})),t.current},l=e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e})),t},c=Object.values(i.ButtonStyleVariant),d=e=>r.ReactionMenuTitleVariants.includes(e),p=e=>c.includes(e)},505426:(e,t,n)=>{n.d(t,{WallDataEvents:()=>s,emitEvent:()=>d,registerNonGlobalNonUniqueListener:()=>c,registerUniqueListener:()=>l});var o=n(434788),r=n(980602),i=n(212368);const s={post_reactions_counts_update:"wall/post_reactions_counts_update",reply_reactions_counts_update:"wall/reply_reactions_counts_update",post_subscribe_update:"wall/post_subscribe_update"},a=(0,i.makeSharedState)("wall-data",(()=>({emitter:new r.default,keyedListeners:Object.create(null)})),{version:0}),u=(e,t,n)=>{var r,i;const s=a(),u=null==(r=s.keyedListeners)||null==(i=r[e])?void 0:i[t];return u&&s.emitter.removeListener(e,u),((e,t,n)=>{const r=a();return r.emitter.addListener(e,n),r.keyedListeners[e]=(0,o._)({},r.keyedListeners[e],{[t]:n}),()=>{var o,i;r.emitter.removeListener(e,n),(null==(o=r.keyedListeners[e])?void 0:o[t])===n&&(null==(i=r.keyedListeners[e])||delete i[t])}})(e,t,n)},l=(e,t,n)=>u(t,e,n),c=(e,t)=>((e,t)=>{const n=a();return n.emitter.addListener(e,t),()=>{n.emitter.removeListener(e,t)}})(e,t),d=(e,t)=>{a().emitter.emit(e,t)}},896509:(e,t,n)=>{n.d(t,{useSubscribeGlobalUpdateEventsForObject:()=>i});var o=n(667294),r=n(505426);const i=(e,t)=>{const n=(0,o.useCallback)((function(n){n.groupId===e&&t(n)}),[e]);(0,o.useEffect)((()=>(0,r.registerNonGlobalNonUniqueListener)(r.WallDataEvents.post_subscribe_update,n)),[n])}},170864:(e,t,n)=>{n.d(t,{getPostElem:()=>i,replyUserImageImg:()=>l,replyUserImageLinkClosest:()=>a});var o,r;const i=(e,t)=>null!=(r=null!=(o=(e=>{var t;if("string"==typeof e)return null!=(t=document.querySelector(`#post${e}`))?t:void 0})(e))?o:null==t?void 0:t.closest("._post, .wl_post"))?r:void 0;var s;const a=e=>null!=(s=e.closest(".reply_image, ._reply_image"))?s:void 0;var u;const l=e=>null!=(u=e.querySelector("img.reply_img"))?u:void 0}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=o,e=[],i.O=(t,n,o,r)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,o,r]=e[c],a=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(i.O).every((e=>i.O[e](n[u])))?n.splice(u--,1):(a=!1,r<s&&(s=r));if(a){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);i.r(r);var s={};t=t||[null,n({}),n([]),n(n)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,i.d(r,s),r},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.e=()=>Promise.resolve(),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.p="/dist/",(()=>{var e={67147:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[s,a,u]=n,l=0;if(s.some((t=>0!==e[t]))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(u)var c=u(i)}for(t&&t(n);l<s.length;l++)r=s[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},n=self.webpackChunkvk=self.webpackChunkvk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=i.O(void 0,[75514,98066,56990,76429,68592],(()=>i(811973)));s=i.O(s)})();