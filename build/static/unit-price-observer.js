!function(r,e,t,i){var n=function(t){var i=this;if(i.params=wc_gzd_unit_price_observer_params,i.$wrapper=t.closest(i.params.wrapper),i.$form=i.$wrapper.find(".variations_form, .cart").length>0&&i.$wrapper.find(".variations_form, .cart"),i.isVar=!!i.$form&&i.$form.hasClass("variations_form"),i.$product=i.$wrapper.closest(".product"),i.requests=[],i.observer={},i.timeout=!1,i.priceData=!1,i.productId=0,i.$wrapper.length<=0&&(i.$wrapper=i.$product),i.replacePrice=!i.$wrapper.hasClass("bundled_product")&&i.params.replace_price,"MutationObserver"in e||"WebKitMutationObserver"in e||"MozMutationObserver"in e){if(i.$wrapper.addClass("has-unit-price-observer"),i.initObservers(i),i.isVar&&i.$form)i.productId=parseInt(i.$form.find("input[name=product_id]").length>0?i.$form.find("input[name=product_id]").val():i.$form.data("product_id")),i.variationId=parseInt(i.$form.find("input[name=variation_id]").length>0?i.$form.find("input[name=variation_id]").val():0),i.$form.find("input[name=variation_id]").length<=0&&(i.variationId=parseInt(i.$form.find("input.variation_id").length>0?i.$form.find("input.variation_id").val():0)),i.$form.on("reset_data.unit-price-observer",{GermanizedUnitPriceObserver:i},i.onResetVariation),i.$form.on("found_variation.unit-price-observer",{GermanizedUnitPriceObserver:i},i.onFoundVariation);else if(i.$form&&i.$form.find("*[name=add-to-cart][type=submit]").length>0)i.productId=parseInt(i.$form.find("*[name=add-to-cart][type=submit]").val());else if(i.$form&&i.$form.data("product_id"))i.productId=parseInt(i.$form.data("product_id"));else{var n=i.$product.attr("class").split(/\s+/);r.each(n,(function(r,e){if("post-"===e.substring(0,5)){var t=parseInt(e.substring(5).replace(/[^0-9]/g,""));if(t>0)return i.productId=t,!0}})),i.productId<=0&&1===i.$product.find("a.ajax_add_to_cart[data-product_id], a.add_to_cart_button[data-product_id]").length&&(i.productId=parseInt(i.$product.find("a.ajax_add_to_cart, a.add_to_cart_button").data("product_id")))}if(i.productId<=0)return i.destroy(i),!1;i.params.refresh_on_load&&r.each(i.params.price_selector,(function(r,e){var t=!!e.hasOwnProperty("is_primary_selector")&&e.is_primary_selector,n=i.getPriceNode(i,r,t),a=i.getUnitPriceNode(i,n);t&&a.length>0&&(i.stopObserver(i,r),i.setUnitPriceLoading(i,a),setTimeout((function(){i.stopObserver(i,r);var n=i.getCurrentPriceData(i,r,e.is_total_price,t,e.quantity_selector);n?i.refreshUnitPrice(i,n,r,t):a.length>0&&i.unsetUnitPriceLoading(i,a),i.startObserver(i,r,t)}),250))}))}t.data("unitPriceObserver",i)};n.prototype.destroy=function(r){(r=r||this).cancelObservers(r),r.$form&&r.$form.off(".unit-price-observer"),r.$wrapper.removeClass("has-unit-price-observer")},n.prototype.getTextWidth=function(r){var e=r.html(),t="<span>"+e+"</span>";r.html(t);var i=r.find("span:first").width();return r.html(e),i},n.prototype.getPriceNode=function(r,e,t){t=void 0!==t&&t;var i=r.$wrapper.find(e+":not(.price-unit):visible").not(".variations_form .single_variation .price").first();return t&&r.isVar&&(i.length<=0||!r.replacePrice)?i=r.$wrapper.find(".woocommerce-variation-price span.price:not(.price-unit):visible:last"):t&&i.length<=0&&(i=r.$wrapper.find(".price:not(.price-unit):visible:last")),i},n.prototype.getObserverNode=function(r,e,t){var i=r.getPriceNode(r,e,t);return t&&r.isVar&&!r.replacePrice&&(i=r.$wrapper.find(".single_variation:last")),i},n.prototype.getUnitPriceNode=function(r,e){if(e.length<=0)return[];var t=e.parents(".wp-block-woocommerce-product-price[data-is-descendent-of-single-product-template]").length>0;return"SPAN"===e[0].tagName?r.$wrapper.find(".price-unit"):t?r.$wrapper.find(".wp-block-woocommerce-gzd-product-unit-price[data-is-descendent-of-single-product-template] .price-unit"):r.$wrapper.find(".price-unit:not(.wc-gzd-additional-info-placeholder, .wc-gzd-additional-info-loop)")},n.prototype.stopObserver=function(r,e){var t=r.getObserver(r,e);t&&t.disconnect()},n.prototype.startObserver=function(r,e,t){var i=r.getObserver(r,e),n=r.getObserverNode(r,e,t);return!!i&&(r.stopObserver(r,e),n.length>0&&i.observe(n[0],{childList:!0,subtree:!0,characterData:!0}),!0)},n.prototype.initObservers=function(t){0===Object.keys(t.observer).length&&r.each(t.params.price_selector,(function(i,n){var a=!!n.hasOwnProperty("is_primary_selector")&&n.is_primary_selector,o=!1;if(t.getObserverNode(t,i,a).length>0){var s=function(e,o){var s=t.getPriceNode(t,i,a);if(t.timeout&&clearTimeout(t.timeout),s.length<=0)return!1;var p=t.getUnitPriceNode(t,s),c=!1;t.stopObserver(t,i),p.length>0&&t.setUnitPriceLoading(t,p),t.timeout=setTimeout((function(){t.stopObserver(t,i);var e=t.getCurrentPriceData(t,i,n.is_total_price,a,n.quantity_selector);e&&r.active<=0&&(c=!0,t.refreshUnitPrice(t,e,i,a)),!c&&p.length>0&&t.unsetUnitPriceLoading(t,p),t.startObserver(t,i,a)}),500)};"MutationObserver"in e?o=new e.MutationObserver(s):"WebKitMutationObserver"in e?o=new e.WebKitMutationObserver(s):"MozMutationObserver"in e&&(o=new e.MozMutationObserver(s)),o&&(t.observer[i]=o,t.startObserver(t,i,a))}}))},n.prototype.getObserver=function(r,e){return!!r.observer.hasOwnProperty(e)&&r.observer[e]},n.prototype.cancelObservers=function(r){for(var e in r.observer)r.observer.hasOwnProperty(e)&&(r.observer[e].disconnect(),delete r.observer[e])},n.prototype.onResetVariation=function(r){r.data.GermanizedUnitPriceObserver.variationId=0},n.prototype.onFoundVariation=function(r,e){var t=r.data.GermanizedUnitPriceObserver;e.hasOwnProperty("variation_id")&&(t.variationId=parseInt(e.variation_id)),t.initObservers(t)},n.prototype.getCurrentPriceData=function(e,t,i,n,a){a=a&&""!==a?a:e.params.qty_selector;var o=e.getPriceNode(e,t,n);if(o.length>0){var s=e.getUnitPriceNode(e,o),p=o.clone();p.find(".woocommerce-price-suffix").remove();var c="",d=p.find(".amount:first"),u=r(e.params.wrapper+" "+a+":first"),l=1;u.length>0&&(l=parseFloat(u.val())),d.length<=0&&(d=p.find(".price").length>0?p.find(".price"):p);var v=e.getRawPrice(d,e.params.price_decimal_sep);if(p.find(".amount").length>1){var f=r(p.find(".amount")[1]);c=e.getRawPrice(f,e.params.price_decimal_sep)}if(s.length>0&&v)return i&&(v=parseFloat(v)/l,c.length>0&&(c=parseFloat(c)/l)),{price:v,unit_price:s,sale_price:c,quantity:l}}return!1},n.prototype.getCurrentProductId=function(r){var e=r.productId;return r.variationId>0&&(e=r.variationId),parseInt(e)},n.prototype.getRawPrice=function(r,e){var t=r.length>0?r.text():"",i=!1;try{i=accounting.unformat(t,e)}catch(r){i=!1}return i},n.prototype.setUnitPriceLoading=function(r,e){var t=e.html();if(e.hasClass("wc-gzd-loading"))t=e.data("org-html");else{var i=r.getTextWidth(e),n=e.find("span").length>0?e.find("span").innerHeight():e.height();e.html('<span class="wc-gzd-placeholder-loading"><span class="wc-gzd-placeholder-row" style="height: '+e.height()+'px;"><span class="wc-gzd-placeholder-row-col-4" style="width: '+i+"px; height: "+n+'px;"></span></span></span>'),e.addClass("wc-gzd-loading"),e.data("org-html",t)}return t},n.prototype.unsetUnitPriceLoading=function(r,e,t){t=t||e.data("org-html"),e.html(t),e.hasClass("wc-gzd-loading")&&e.removeClass("wc-gzd-loading").show()},n.prototype.refreshUnitPrice=function(r,e,t,i){germanized.unit_price_observer_queue.add(r,r.getCurrentProductId(r),e,t,i)},r.fn.wc_germanized_unit_price_observer=function(){return r(this).data("unitPriceObserver")&&r(this).data("unitPriceObserver").destroy(),new n(this),this},r((function(){"undefined"!=typeof wc_gzd_unit_price_observer_params&&r(wc_gzd_unit_price_observer_params.wrapper).each((function(){r(this).is("body")||r(this).wc_germanized_unit_price_observer()}))}))}(jQuery,window,document),window.germanized=window.germanized||{},((window.germanized=window.germanized||{}).static=window.germanized.static||{})["unit-price-observer"]={};