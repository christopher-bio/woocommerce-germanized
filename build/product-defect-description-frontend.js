"use strict";(self.webpackWcBlocksJsonp=self.webpackWcBlocksJsonp||[]).push([[710],{575:function(e,t,o){o.r(t),o.d(t,{default:function(){return a}});var n=o(196),r=o(721),c=o(606),a=e=>(e={...e,labelType:"defect-description"}).isDescendentOfSingleProductTemplate?(0,n.createElement)(c.Z,{...e}):(0,r.withProductDataContext)(c.Z)(e)},606:function(e,t,o){o.d(t,{Z:function(){return v}});var n=o(196),r=o(184),c=o.n(r),a=o(293),l=o(864),s=o(736);const i=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object,m=e=>"string"==typeof e;var u=o(857),p=o(83);function d(e={}){const t={};return(0,p.R)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function g(e,t){return e&&t?`has-${(0,u.o)(t)}-${e}`:""}const y=e=>{const t=(e=>{const t=i(e)?e:{style:{}};let o=t.style;return m(o)&&(o=JSON.parse(o)||{}),i(o)||(o={}),{...t,style:o}})(e),o=function(e){const{backgroundColor:t,textColor:o,gradient:n,style:r}=e,a=g("background-color",t),l=g("color",o),s=function(e){if(e)return`has-${e}-gradient-background`}(n),m=s||r?.color?.gradient;return{className:c()(l,s,{[a]:!m&&!!a,"has-text-color":o||r?.color?.text,"has-background":t||r?.color?.background||n||r?.color?.gradient,"has-link-color":i(r?.elements?.link)?r?.elements?.link?.color:void 0}),style:d({color:r?.color||{}})}}(t),n=function(e){const t=e.style?.border||{};return{className:function(e){const{borderColor:t,style:o}=e,n=t?g("border-color",t):"";return c()({"has-border-color":!!t||!!o?.border?.color,[n]:!!n})}(e),style:d({border:t})}}(t),r=function(e){return{className:void 0,style:d({spacing:e.style?.spacing||{}})}}(t),a=(e=>{const t=i(e.style.typography)?e.style.typography:{},o=m(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:o,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:c()(a.className,o.className,n.className,r.className),style:{...a.style,...o.style,...n.style,...r.style}}};var f=o(333);const _=e=>({thousandSeparator:e?.thousandSeparator,decimalSeparator:e?.decimalSeparator,fixedDecimalScale:!0,prefix:e?.prefix,suffix:e?.suffix,isNumericString:!0});var w=({className:e,value:t,currency:o,onValueChange:r,displayType:a="text",...l})=>{var s;const i="string"==typeof t?parseInt(t,10):t;if(!Number.isFinite(i))return null;const m=i/10**o.minorUnit;if(!Number.isFinite(m))return null;const u=c()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",e),p=null!==(s=l.decimalScale)&&void 0!==s?s:o?.minorUnit,d={...l,..._(o),decimalScale:p,value:void 0,currency:void 0,onValueChange:void 0},g=r?e=>{const t=+e.value*10**o.minorUnit;r(t)}:()=>{};return(0,n.createElement)(f.Z,{className:u,displayType:a,...d,value:m,onValueChange:g})},b=o(307),h=({align:e,className:t,labelType:o,formattedLabel:r,labelClassName:a,labelStyle:l,style:s})=>{const i=c()(t,"wc-gzd-block-components-product-"+o,"wc-gzd-block-components-product-price-label",{[`wc-gzd-block-components-product-price-label--align-${e}`]:e});let m=(0,n.createElement)("span",{className:c()("wc-gzd-block-components-product-"+o+"__value",a)});return r&&(m=(0,b.isValidElement)(r)?(0,n.createElement)("span",{className:c()("wc-gzd-block-components-product-"+o+"__value",a),style:l},r):(0,n.createElement)("span",{className:c()("wc-gzd-block-components-product-"+o+"__value",a),style:l,dangerouslySetInnerHTML:{__html:r}})),(0,n.createElement)("span",{className:i,style:s},m)},v=e=>{const{className:t,textAlign:o,isDescendentOfSingleProductTemplate:r,labelType:i}=e,{parentName:m,parentClassName:u}=(0,l.useInnerBlockLayoutContext)(),{product:p}=(0,l.useProductDataContext)(),d=y(e),g="woocommerce/all-products"===m,f=c()("wc-gzd-block-components-product-"+i,t,d.className,{[`${u}__product-${i}`]:u});if(!p.id&&!r){const e=(0,n.createElement)(h,{align:o,className:f,labelType:i});if(g){const t=`wp-block-woocommerce-gzd-product-${i}`;return(0,n.createElement)("div",{className:t},e)}return e}const _=((e,t,o)=>{const r=t.hasOwnProperty("extensions")?t.extensions["woocommerce-germanized"]:{unit_price_html:"",unit_prices:{price:0,regular_price:0,sale_price:0},unit_product:0,unit_product_html:"",delivery_time_html:"",tax_info_html:"",shipping_costs_info_html:"",defect_description_html:"",nutri_score:"",nutri_score_html:"",deposit_html:"",deposit_prices:{price:0,quantity:0,amount:0},deposit_packaging_type_html:""},c=t.prices,l=o?(0,a.getCurrencyFromPriceResponse)():(0,a.getCurrencyFromPriceResponse)(c),i=e.replace(/-/g,"_"),m=r.hasOwnProperty(i+"_html")?r[i+"_html"]:"";let u="";return"unit_price"===i?u=(0,n.createElement)(n.Fragment,null,(0,n.createElement)(w,{currency:l,value:1e3})," / ",(0,n.createElement)("span",{className:"unit"},(0,s._x)("kg","unit","woocommerce-germanized"))):"delivery_time"===i?u=(0,s._x)("Delivery time: 2-3 days","preview","woocommerce-germanized"):"tax_info"===i?u=(0,s._x)("incl. 19 % VAT","preview","woocommerce-germanized"):"shipping_costs_info"===i?u=(0,s._x)("plus shipping costs","preview","woocommerce-germanized"):"unit_product"===i?u=(0,s.sprintf)((0,s._x)("Product includes: %1$s kg","preview","woocommerce-germanized"),10):"defect_description"===i?u=(0,s._x)("This product has a serious defect.","preview","woocommerce-germanized"):"deposit"===i?u=(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"additional"},(0,s._x)("Plus","preview","woocommerce-germanized"))," ",(0,n.createElement)(w,{currency:l,value:40})," ",(0,n.createElement)("span",{className:"deposit-notice"},(0,s._x)("deposit","preview","woocommerce-germanized"))):"deposit_packaging_type"===i?u=(0,s._x)("Disposable","preview","woocommerce-germanized"):"nutri_score"===i&&(u=(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"wc-gzd-nutri-score-value wc-gzd-nutri-score-value-a"},"A"))),{preview:u,data:m}})(i,p,r),b=(0,n.createElement)(h,{align:o,className:f,labelType:i,style:d.style,labelStyle:d.style,formattedLabel:r?_.preview:_.data});if(g){const e=`wp-block-woocommerce-gzd-product-${i}`;return(0,n.createElement)("div",{className:e},b)}return b}}}]);