!function(){var e;window.germanized=window.germanized||{},window.germanized.admin=window.germanized.admin||{},e=jQuery,window.germanized.admin.packaging={params:{},init:function(){var n=germanized.admin.packaging;e(document).on("change","input.gzd-override-toggle",n.onChangeOverride)},onChangeOverride:function(){var n=e(this),i=n.parents(".wc-gzd-shipping-provider-override-title-wrapper").next(".wc-gzd-packaging-zone-wrapper");i.removeClass("zone-wrapper-has-override"),n.is(":checked")&&i.addClass("zone-wrapper-has-override")}},e(document).ready((function(){germanized.admin.packaging.init()})),((window.germanizedShipments=window.germanizedShipments||{}).static=window.germanizedShipments.static||{})["admin-packaging"]={}}();