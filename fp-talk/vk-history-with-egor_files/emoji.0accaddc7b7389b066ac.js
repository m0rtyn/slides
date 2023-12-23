﻿(()=>{"use strict";var e,t,r,i,n,o,a={891047:(e,t,r)=>{function i(e){return new Promise(((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)}))}function n(e,t){const r=indexedDB.open(e);r.onupgradeneeded=()=>r.result.createObjectStore(t);const n=i(r);return(e,r)=>n.then((i=>r(i.transaction(t,e).objectStore(t))))}let o;function a(){return o||(o=n("keyval-store","keyval")),o}function s(e,t=a()){return t("readonly",(t=>i(t.get(e))))}function d(e,t,r=a()){return r("readwrite",(r=>(r.put(t,e),i(r.transaction))))}function c(e,t,r=a()){return r("readwrite",(r=>new Promise(((n,o)=>{r.get(e).onsuccess=function(){try{r.put(t(this.result),e),n(i(r.transaction))}catch(e){o(e)}}}))))}function h(e,t=a()){return t("readwrite",(t=>(t.delete(e),i(t.transaction))))}function l(e=a()){return e("readwrite",(e=>(e.clear(),i(e.transaction))))}r.d(t,{clear:()=>l,createStore:()=>n,del:()=>h,get:()=>s,set:()=>d,update:()=>c})},874162:(e,t,r)=>{r.d(t,{DEFAULT_CACHE:()=>d,ORDER_ERRORS:()=>h,ORDER_ITEM_ERRORS:()=>l,SAMPLE_RECIPIENT_ID:()=>c,STICKER_ANIMATION:()=>s,STICKER_IMAGE:()=>a,STICKER_PACK_ICON:()=>n,STICKER_PACK_THUMB:()=>o});var i=r(899033);const n={square_png:{id:"square.png",width:104,height:104},square_15x_png:{id:"square_1.5x.png",width:156,height:156},square_2x_png:{id:"square_2x.png",width:208,height:208},square_3x_png:{id:"square_3x.png",width:312,height:312},square_4x_png:{id:"square_4x.png",width:416,height:416}},o={"102_png":{id:"102.png",width:102,height:102,theme:i.Theme.LIGHT},"51_png":{id:"51.png",width:51,height:51,theme:i.Theme.LIGHT},"68_png":{id:"68.png",width:68,height:68,theme:i.Theme.LIGHT},"34_png":{id:"34.png",width:34,height:34,theme:i.Theme.LIGHT},"60_png":{id:"60.png",width:60,height:60,theme:i.Theme.LIGHT},"30_png":{id:"30.png",width:30,height:30,theme:i.Theme.LIGHT},"102b_png":{id:"102b.png",width:102,height:102,theme:i.Theme.DARK},"51b_png":{id:"51b.png",width:51,height:51,theme:i.Theme.DARK},"68b_png":{id:"68b.png",width:68,height:68,theme:i.Theme.DARK},"34b_png":{id:"34b.png",width:34,height:34,theme:i.Theme.DARK},"60b_png":{id:"60b.png",width:60,height:60,theme:i.Theme.DARK},"30b_png":{id:"30b.png",width:30,height:30,theme:i.Theme.DARK},"44_png":{id:"44.png",width:44,height:44},"22_png":{id:"22.png",width:22,height:22}},a={"64_png":{id:"64.png",width:64,height:64,theme:i.Theme.LIGHT},"128_png":{id:"128.png",width:128,height:128,theme:i.Theme.LIGHT},"256_png":{id:"256.png",width:256,height:256,theme:i.Theme.LIGHT},"352_png":{id:"352.png",width:352,height:352,theme:i.Theme.LIGHT},"512_png":{id:"512.png",width:512,height:512,theme:i.Theme.LIGHT},"64b_png":{id:"64b.png",width:64,height:64,theme:i.Theme.DARK},"128b_png":{id:"128b.png",width:128,height:128,theme:i.Theme.DARK},"256b_png":{id:"256b.png",width:256,height:256,theme:i.Theme.DARK},"352b_png":{id:"352b.png",width:352,height:352,theme:i.Theme.DARK},"512b_png":{id:"512b.png",width:512,height:512,theme:i.Theme.DARK}},s={[i.Theme.LIGHT]:"animation.json",[i.Theme.DARK]:"animation.b.json"},d={products:(0,i.createProductsMap)([]),productIdsQueue:new Set,productsPromise:void 0,productPromises:new Map,stickers:new Map},c=-1;var h,l;!function(e){e.NOT_SIGNED_IN="not_signed_in",e.NO_VALID_ITEMS="no_valid_items"}(h||(h={})),function(e){e.DUPLICATE_PRODUCT="duplicate_product"}(l||(l={}))},899033:(e,t,r)=>{var i;r.d(t,{ProductsByType:()=>u,Theme:()=>i,UserProductStateKey:()=>s,createProductsMap:()=>a,imageSizeCache:()=>o,imageSizesIndex:()=>n,isBasePack:()=>d,isPackProduct:()=>h,isStyleProduct:()=>c}),function(e){e.LIGHT="light",e.DARK="dark",e.DEFAULT="light"}(i||(i={}));const n=Symbol(),o=Symbol(),a=e=>new Map(e);var s;!function(e){e.IsNew="is_new"}(s||(s={}));const d=e=>void 0!==e.sticker_ids,c=e=>void 0!==e.base_id,h=e=>d(e)&&!c(e);var l;!function(e){e.Pack="pack",e.Style="style"}(l||(l={}));class u{add(e){e&&(h(e)?this.pack.add(e):c(e)&&this.style.add(e))}getPack(){return this.pack.values().next().value}getStyles(){return Array.from(this.style.values())}getCount(){return this.pack.size+this.style.size}constructor(e=[]){this.pack=new Set,this.style=new Set,e.forEach((e=>this.add(e)))}}},396316:(e,t,r)=>{r.d(t,{STICKERS_CONFDATA_KEY:()=>i,isNewStickerPicker:()=>o,isUGCStickersEnabled:()=>a});var i,n=r(839470);function o(){return(0,n.partConfigEnabled)("new_sticker_picker")}function a(){return(0,n.partConfigEnabled)("stickers.ugc")}!function(e){e.UGC="stickers.ugc",e.NEW_STICKER_PICKER="new_sticker_picker",e.MVK_NEW_KEYBOARD="stickers_mvk_new_keyboard"}(i||(i={}))},457299:(e,t,r)=>{r.d(t,{getStickerAnimationUrl:()=>h,getStickerImageUrl:()=>c,getStickerPackIconUrl:()=>l,getStickersKitModule:()=>g,isSampleOrderItem:()=>u,logStickersError:()=>f});var i=r(899033),n=r(874162),o=r(970978);const a=(e,t,r,n=i.Theme.DEFAULT)=>{const o=window.devicePixelRatio,a=[t*=o,r*=o,n].toString();let s=e[i.imageSizeCache];if(s&&s.has(a)){const e=s.get(a);if(e)return e}s||(s=new Map,e[i.imageSizeCache]=s);const d=(e=>{let t=e[i.imageSizesIndex];return t||(t=Object.values(e).sort(((e,t)=>e.width-t.width||e.height-t.height)),e[i.imageSizesIndex]=t),t})(e).filter((e=>!e.theme||e.theme===n)),c=d.find((e=>e.width>=t&&e.height>=r))||d[d.length-1];return s.set(a,c),c},s=(e,t,r=i.Theme.DEFAULT)=>a(n.STICKER_IMAGE,e,t,r),d=(e,t)=>e.image.base_url+"/"+t.id+(e.image.version?`?${e.image.version}`:"");function c(e,t,r,n=i.Theme.DEFAULT){var o;if(null==(o=e.render)?void 0:o.images){const{images:i}=e.render;let o;i.sort(((e,t)=>e.width-t.width||e.height-t.height));for(const e of i)if(e.width>=t&&e.height>=r){if(e.theme===n)return e.url;o=e}if(o)return o.url}return d(e,s(t,r,n))}const h=(e,t=i.Theme.DEFAULT)=>e.animation?e.animation.base_url+"/"+n.STICKER_ANIMATION[t]+(e.animation.version?`?${e.animation.version}`:""):"",l=(e,t,r,o=i.Theme.DEFAULT)=>((e,t)=>e.icon.base_url+"/"+t.id+(e.thumb.version?`?${e.thumb.version}`:""))(e,((e,t,r=i.Theme.DEFAULT)=>a(n.STICKER_PACK_ICON,e,t,r))(t,r,o)),u=e=>e.recipient_id===n.SAMPLE_RECIPIENT_ID,g=()=>r.e(51162).then(r.bind(r,406857)),f=e=>{(0,o.logError)(new Error(`Stickers: ${e}`))}},424499:(e,t,r)=>{var i,n,o,a=r(790287);(null==(i=window.vk)||null==(n=i.pe)?void 0:n.static_manager_dynamic_imports)&&(null==(o=window.vk)?void 0:o.stDomain)&&(r.p=window.vk.stDomain+"/dist/"),window.Emoji||(window.Emoji=a.Emoji);try{window.stManager.done(window.jsc("web/emoji.js"))}catch(e){}},91525:(e,t,r)=>{function i(){return{icon:'<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.88 18.12a1.25 1.25 0 0 1-1.76 1.76l-7-7a1.25 1.25 0 0 1 0-1.76l7-7a1.25 1.25 0 0 1 1.76 1.76L9.77 12z" fill="currentColor"/></svg>',name:"chevron_left_24"}}r.d(t,{getIcon24ChevronLeft:()=>i})},475117:(e,t,r)=>{function i(){return{icon:'<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.23 12 8.12 5.88a1.25 1.25 0 1 1 1.76-1.76l7 7c.5.48.5 1.28 0 1.76l-7 7a1.25 1.25 0 0 1-1.76-1.76z" fill="currentColor"/></svg>',name:"chevron_right_24"}}r.d(t,{getIcon24ChevronRight:()=>i})},348354:(e,t,r)=>{r.d(t,{stickersEmojiKeyboard:()=>i});const i=(0,r(210929).createDomain)()},616912:(e,t,r)=>{r.d(t,{$userEnv:()=>o,setUserEnv:()=>n});var i=r(348354);const n=i.stickersEmojiKeyboard.createEvent(),o=i.stickersEmojiKeyboard.createStore({}).on(n,((e,t)=>t))},997650:(e,t,r)=>{r.d(t,{observe:()=>c,useInView:()=>h});var i=r(667294);const n=new Map,o=new WeakMap;let a,s=0;function d(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(r=e.root,r?(o.has(r)||(s+=1,o.set(r,s.toString())),o.get(r)):"0"):e[t]}`;var r})).toString()}function c(e,t,r={},i=a){if(void 0===window.IntersectionObserver&&void 0!==i){const n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:o,observer:s,elements:c}=function(e){let t=d(e),r=n.get(t);if(!r){const i=new Map;let o;const a=new IntersectionObserver((t=>{t.forEach((t=>{var r;const n=t.isIntersecting&&o.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),null==(r=i.get(t.target))||r.forEach((e=>{e(n,t)}))}))}),e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:i},n.set(t,r)}return r}(r);let h=c.get(e)||[];return c.has(e)||c.set(e,h),h.push(t),s.observe(e),function(){h.splice(h.indexOf(t),1),0===h.length&&(c.delete(e),s.unobserve(e)),0===c.size&&(s.disconnect(),n.delete(o))}}i.Component;function h({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:o,triggerOnce:a,skip:s,initialInView:d,fallbackInView:h,onChange:l}={}){var u;const[g,f]=i.useState(null),p=i.useRef(),[b,m]=i.useState({inView:!!d,entry:void 0});p.current=l,i.useEffect((()=>{if(s||!g)return;let i;return i=c(g,((e,t)=>{m({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&a&&i&&(i(),i=void 0)}),{root:o,rootMargin:n,threshold:e,trackVisibility:r,delay:t},h),()=>{i&&i()}}),[Array.isArray(e)?e.toString():e,g,o,n,a,s,r,h,t]);const v=null==(u=b.entry)?void 0:u.target,w=i.useRef();g||!v||a||s||w.current===v||(w.current=v,m({inView:!!d,entry:void 0}));const _=[f,b.inView,b.entry];return _.ref=_[0],_.inView=_[1],_.entry=_[2],_}}},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=a,e=[],d.O=(t,r,i,n)=>{if(!r){var o=1/0;for(h=0;h<e.length;h++){for(var[r,i,n]=e[h],a=!0,s=0;s<r.length;s++)(!1&n||o>=n)&&Object.keys(d.O).every((e=>d.O[e](r[s])))?r.splice(s--,1):(a=!1,n<o&&(o=n));if(a){e.splice(h--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var h=e.length;h>0&&e[h-1][2]>n;h--)e[h]=e[h-1];e[h]=[r,i,n]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,i){if(1&i&&(e=this(e)),8&i)return e;if("object"==typeof e&&e){if(4&i&&e.__esModule)return e;if(16&i&&"function"==typeof e.then)return e}var n=Object.create(null);d.r(n);var o={};t=t||[null,r({}),r([]),r(r)];for(var a=2&i&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,d.d(n,o),n},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>75980===e?"menu_settings.fe841ee6e9d1770c7df7.js":9375===e?"voice_message_player.050d74b181d5db2642f0.js":28762===e?"speech.5c7a8bafaa4c80a92840.js":57468===e?"SilentModeForms.8425705394906aebc7de.js":96248===e?"feed-skeleton.6830e5b139046f63a92d.js":51162===e?"StickersKit.4339d749c3a9af1c83c0.js":79344===e?"sticker.8572aa685d86819d0a97.js":55489===e?"lottie-light.48f1a65d83e7d0217b60.js":7103===e?"stickers-layer-view.0f9e18fceeb83717335e.js":37211===e?"stickers-layer-purchase-details-view.ecd9d8e01b1f803b4eeb.js":39457===e?"stickers-random-selector-view.15fbf277235a4f58c348.js":78177===e?"stickers-random-selector-packs-view.82e74823176d3ebdeb11.js":34757===e?"stickers-random-selector-result-view.1613cb988c705d7da5ab.js":68346===e?"NewStickerPicker.861dc89b3c6eea368742.js":59240===e?"performance-stats.d89fb0a11246583657a4.js":29019===e?"ReportForm.bca17ba3f106ecbaeea6.js":24195===e?e+".13b2fb10985a55b7af12.js":63371===e?e+".be0b8c0c48a4a1b02a8e.js":62638===e?"183ae8612f6fc4f939669ff68939db2e.051ab845cc7544fd28c7.js":87448===e?"df5f2238430381af4073776990037d9a.442712de4c33add780bb.js":72809===e?"70b318539525aae4f37779c8dacf0473.deb135de08144aaa1549.js":35699===e?"5b9871f5e48dc927cf0229bdc83c9099.34760922f2bef30c3e9c.js":60514===e?"36663761e4c963339956e18f6140595c.059d39c9a857698a1410.js":31848===e?"f79ca980fcc26ca55859ad5158f5fea8.6879ee938d1351b5ed4c.js":882===e?"fba43c7a1c8ad19aa306e4c66812a52a.73a4f57c56bf469f3cd0.js":void 0,d.miniCssF=e=>882===e?"fba43c7a1c8ad19aa306e4c66812a52a.e8339c192951ae3223aa.css":e+"."+{7103:"40a7e407b709ab3e6fbf",29019:"673778676fc8f6a95111",34757:"b5be4318cc62f878564e",37211:"765824321a7e8c9308b4",39457:"76704ef5d1a34fea5625",57468:"e8a9b5d3b4a38f45d2ec",75980:"519f671449550110bbb1",78177:"28f0e479ab7f49cdada2",79344:"39ec17015c909fafa936"}[e]+".css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},d.l=(e,t,r,n)=>{if(i[e])i[e].push(t);else{var o,a;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var h=s[c];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")=="vk:"+r){o=h;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,d.nc&&o.setAttribute("nonce",d.nc),o.setAttribute("data-webpack","vk:"+r),o.src=e),i[e]=[t];var l=(t,r)=>{o.onerror=o.onload=null,clearTimeout(u);var n=i[e];if(delete i[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),a&&document.head.appendChild(o)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),d.p="/dist/",n=e=>new Promise(((t,r)=>{var i=d.miniCssF(e),n=d.p+i;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var n=(a=r[i]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){var a;if((n=(a=o[i]).getAttribute("data-href"))===e||n===t)return a}})(i,n))return t();((e,t,r,i)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=s,n.parentNode.removeChild(n),i(d)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),o={50098:0},d.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{882:1,7103:1,29019:1,34757:1,37211:1,39457:1,57468:1,75980:1,78177:1,79344:1}[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{d.b=document.baseURI||self.location.href;var e={50098:0};d.f.j=(t,r)=>{var i=d.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else if(/^(75980|882)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>i=e[t]=[r,n]));r.push(i[2]=n);var o=d.p+d.u(t),a=new Error;d.l(o,(r=>{if(d.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",a.name="ChunkLoadError",a.type=n,a.request=o,i[1](a)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,[o,a,s]=r,c=0;if(o.some((t=>0!==e[t]))){for(i in a)d.o(a,i)&&(d.m[i]=a[i]);if(s)var h=s(d)}for(t&&t(r);c<o.length;c++)n=o[c],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(h)},r=self.webpackChunkvk=self.webpackChunkvk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=d.O(void 0,[75514,98066,56990,76429,24509,76400,40885,38288,68592,63489,43639],(()=>d(424499)));c=d.O(c)})();