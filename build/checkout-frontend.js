!function(){"use strict";var e,t,o,n,r,c={196:function(e){e.exports=window.React},819:function(e){e.exports=window.lodash},554:function(e){e.exports=window.wc.blocksCheckout},801:function(e){e.exports=window.wc.wcBlocksData},617:function(e){e.exports=window.wc.wcSettings},813:function(e){e.exports=window.wcGzd.blocks.wcGzdBlocksSettings},818:function(e){e.exports=window.wp.data},307:function(e){e.exports=window.wp.element},736:function(e){e.exports=window.wp.i18n},444:function(e){e.exports=window.wp.primitives}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return c[e](o,o.exports,a),o.exports}a.m=c,a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))},a.u=function(e){return{86:"checkout-blocks/checkout-photovoltaic-system-notice",131:"checkout-blocks/checkout-checkboxes"}[e]+"-frontend.js?ver="+{86:"8b68b59387f0cc476fd9",131:"016c78e3815355a151dc"}[e]},a.miniCssF=function(e){},a.miniCssF=function(e){},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="woocommerce-germanized:",a.l=function(o,n,r,c){if(e[o])e[o].push(n);else{var i,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+r){i=f;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+r),i.src=o),e[o]=[n];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!e;)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e={231:0};a.f.j=function(t,o){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise((function(o,r){n=e[t]=[o,r]}));o.push(n[2]=r);var c=a.p+a.u(t),i=new Error;a.l(c,(function(o){if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",i.name="ChunkLoadError",i.type=r,i.request=c,n[1](i)}}),"chunk-"+t,t)}};var t=function(t,o){var n,r,c=o[0],i=o[1],s=o[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);s&&s(a)}for(t&&t(o);u<c.length;u++)r=c[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0},o=self.webpackWcBlocksJsonp=self.webpackWcBlocksJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}(),o=a(554),n=a(307),r={CHECKOUT_CHECKBOXES:JSON.parse('{"apiVersion":2,"name":"woocommerce-germanized/checkout-checkboxes","version":"2.0.0","title":"Legal Checkboxes","category":"woocommerce","description":"Adds your checkboxes, registered via Germanized, to your checkout.","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"parent":["woocommerce/checkout-fields-block","woocommerce/checkout-totals-block"],"textdomain":"woocommerce-germanized","attributes":{"className":{"type":"string","default":""}}}'),CHECKOUT_PHOTOVOLTAIC_SYSTEM_NOTICE:JSON.parse('{"apiVersion":2,"name":"woocommerce-germanized/checkout-photovoltaic-system-notice","version":"2.0.0","title":"Photovoltaic system notice","category":"woocommerce","description":"Remind your customers of a possible vat exempt for a photovoltaic system contained within the current cart.","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"parent":["woocommerce/checkout-totals-block","woocommerce/checkout","woocommerce/checkout-fields-block"],"textdomain":"woocommerce-germanized","attributes":{"className":{"type":"string","default":""},"text":{"type":"string","required":false},"title":{"type":"string","required":false},"lock":{"type":"object","default":{"remove":false,"move":false}}}}')},(0,o.registerCheckoutBlock)({metadata:r.CHECKOUT_CHECKBOXES,component:(0,n.lazy)((()=>a.e(131).then(a.bind(a,225))))}),(0,o.registerCheckoutBlock)({metadata:r.CHECKOUT_PHOTOVOLTAIC_SYSTEM_NOTICE,component:(0,n.lazy)((()=>a.e(86).then(a.bind(a,367))))})}();