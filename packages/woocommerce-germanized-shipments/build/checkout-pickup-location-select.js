!function(){"use strict";var e,o={449:function(e,o,i){i.r(o);var t=window.React,c=window.wc.blocksCheckout,n=window.wp.plugins,a=window.wp.element,s=window.wp.data,p=window.wp.i18n,r=window.wc.wcBlocksData,u=window.wp.htmlEntities,l=window.wcGzdShipments.blocksCheckout;const d=({isAvailable:e,pickupLocations:o,currentPickupLocation:i,onChangePickupLocation:n,onChangePickupLocationCustomerNumber:a,currentPickupLocationCustomerNumber:s})=>e?(0,t.createElement)("div",{className:"wc-gzd-shipments-pickup-location-delivery"},(0,t.createElement)("h4",null,(0,p._x)("Not at home? Choose a pickup location","shipments","woocommerce-germanized")),(0,t.createElement)(l.Combobox,{options:o,id:"pickup-location",key:"pickup-location",name:"pickup_location",label:(0,p._x)("Pickup location","shipments","woocommerce-germanized"),errorId:"pickup-location",allowReset:!!i,value:i?i.code:"",required:!1,onChange:n}),i&&i.supports_customer_number&&(0,t.createElement)(c.ValidatedTextInput,{key:"pickup_location_customer_number",value:s,id:"pickup-location-customer-number",label:i.customer_number_field_label,name:"pickup_location_customer_number",required:i.customer_number_is_mandatory,maxLength:"20",onChange:a})):null;(0,n.registerPlugin)("woocommerce-gzd-shipments-pickup-location-select",{render:()=>{const[e,o]=(0,a.useState)(null),[i,n]=(0,a.useState)(!1),{shippingRates:m,cartDataLoaded:h,needsShipping:k,pickupLocations:_,pickupLocationDeliveryAvailable:g,defaultPickupLocation:w,defaultCustomerNumber:f,customerData:b}=(0,s.useSelect)((e=>{const o=!!e("core/editor"),i=e(r.CART_STORE_KEY),t=o?[]:i.getShippingRates(),c=i.getCartData(),n=c.extensions.hasOwnProperty("woocommerce-gzd-shipments")?c.extensions["woocommerce-gzd-shipments"]:{pickup_location_delivery_available:!1,pickup_locations:[],default_pickup_location:"",default_pickup_location_customer_number:""};return{shippingRates:t,cartDataLoaded:i.hasFinishedResolution("getCartData"),customerData:i.getCustomerData(),needsShipping:i.getNeedsShipping(),isLoadingRates:i.isCustomerDataUpdating(),isSelectingRate:i.isShippingRateBeingSelected(),pickupLocationDeliveryAvailable:n.pickup_location_delivery_available,pickupLocations:n.pickup_locations,defaultPickupLocation:n.default_pickup_location,defaultCustomerNumber:n.default_pickup_location_customer_number}})),v=b.shippingAddress,{setShippingAddress:C}=(0,s.useDispatch)(r.CART_STORE_KEY),y=(0,l.getCheckoutData)(),S=(0,a.useMemo)((()=>Object.fromEntries(_.map((e=>[e.code,e])))),[_]),E=(0,a.useCallback)((e=>S.hasOwnProperty(e)?S[e]:null),[S]),O=(0,a.useMemo)((()=>_.map((e=>({value:e.code,label:(0,u.decodeEntities)(e.formatted_address)})))),[_]),P=(0,a.useCallback)(((e,o)=>{y[e]=o,y.pickup_location||(y.pickup_location_customer_number=""),(0,s.dispatch)(r.CHECKOUT_STORE_KEY).__internalSetExtensionData("woocommerce-gzd-shipments",y)}),[y]);(0,a.useEffect)((()=>{h&&v.address_1&&!i&&P("pickup_location",""),i&&n(!1)}),[v.address_1,v.postcode,v.country,h]),(0,a.useEffect)((()=>{h&&g&&E(w)&&(P("pickup_location",w),P("pickup_location_customer_number",f))}),[h]),(0,a.useEffect)((()=>{if(n(!0),y.pickup_location){const e=E(y.pickup_location);if(e){o((()=>e));const i={...v};Object.keys(e.address_replacements).forEach((o=>{const t=e.address_replacements[o];t&&(i[o]=t)})),i!==v&&C(i)}else o((()=>null))}else o((()=>null))}),[y.pickup_location]),(0,a.useEffect)((()=>{const e=E(y.pickup_location);if(!g||!e){let e=!!y.pickup_location;P("pickup_location",""),e&&(0,s.dispatch)("core/notices").createNotice("warning",(0,p._x)("Your pickup location chosen is not available any longer. Please review your shipping address.","shipments","woocommerce-germanized"),{id:"wc-gzd-shipments-pickup-location-missing",context:"wc/checkout/shipping-address"})}}),[g,O]);const L=(0,a.useCallback)((e=>{if(S.hasOwnProperty(e)){P("pickup_location",e);const{removeNotice:o}=(0,s.dispatch)("core/notices");o("wc-gzd-shipments-review-shipping-address","wc/checkout/shipping-address"),o("wc-gzd-shipments-pickup-location-missing","wc/checkout/shipping-address")}else e?P("pickup_location",""):(P("pickup_location",""),(0,s.dispatch)("core/notices").createNotice("warning",(0,p._x)("Please review your shipping address.","shipments","woocommerce-germanized"),{id:"wc-gzd-shipments-review-shipping-address",context:"wc/checkout/shipping-address"}))}),[S,v,y]),x=(0,a.useCallback)((e=>{P("pickup_location_customer_number",e)}),[y]);return(0,t.createElement)(c.ExperimentalOrderShippingPackages,null,(0,t.createElement)(d,{pickupLocations:O,isAvailable:g&&k,currentPickupLocation:e,onChangePickupLocation:L,onChangePickupLocationCustomerNumber:x,currentPickupLocationCustomerNumber:e?y.pickup_location_customer_number:""}))},scope:"woocommerce-checkout"})}},i={};function t(e){var c=i[e];if(void 0!==c)return c.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,t),n.exports}t.m=o,e=[],t.O=function(o,i,c,n){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],c=e[u][1],n=e[u][2];for(var s=!0,p=0;p<i.length;p++)(!1&n||a>=n)&&Object.keys(t.O).every((function(e){return t.O[e](i[p])}))?i.splice(p--,1):(s=!1,n<a&&(a=n));if(s){e.splice(u--,1);var r=c();void 0!==r&&(o=r)}}return o}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[i,c,n]},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={157:0,352:0};t.O.j=function(o){return 0===e[o]};var o=function(o,i){var c,n,a=i[0],s=i[1],p=i[2],r=0;if(a.some((function(o){return 0!==e[o]}))){for(c in s)t.o(s,c)&&(t.m[c]=s[c]);if(p)var u=p(t)}for(o&&o(i);r<a.length;r++)n=a[r],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},i=self.webpackWcShipmentsBlocksJsonp=self.webpackWcShipmentsBlocksJsonp||[];i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i))}();var c=t.O(void 0,[352],(function(){return t(449)}));c=t.O(c),(window.wcGzdShipments=window.wcGzdShipments||{})["checkout-pickup-location-select"]=c}();