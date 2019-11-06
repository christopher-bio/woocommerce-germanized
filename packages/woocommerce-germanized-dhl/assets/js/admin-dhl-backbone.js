window.germanized = window.germanized || {};
window.germanized.admin = window.germanized.admin || {};

( function( $, admin ) {

    /**
     * Core
     */
    admin.dhl_backbone = {

        params: {},

        init: function () {
            var self    = germanized.admin.dhl_backbone;
            self.params = wc_gzd_admin_dhl_backbone_params;

            $( document )
                .on( 'click', '.germanized-create-label .show-further-services', self.onExpandServices )
                .on( 'click', '.germanized-create-label .show-fewer-services', self.onHideServices )
                .on( 'change', '.germanized-create-label input.show-if-trigger', self.onShowIf )
                .on( 'click', '.germanized-create-label .notice .notice-dismiss', self.onRemoveNotice );

            $( document.body )
                .on( 'wc_backbone_modal_loaded', self.backbone.init )
                .on( 'wc_backbone_modal_response', self.backbone.response );
        },

        onRemoveNotice: function() {
            $( this ).parents( '.notice' ).slideUp( 150, function() {
                $( this ).remove();
            });
        },

        onShowIf: function() {
            var $wrapper  = $( this ).parents( '.germanized-create-label' ),
                $show     = $wrapper.find( $( this ).data( 'show-if' ) ),
                $checkbox = $( this );

            if ( $show.length > 0 ) {
                if ( $checkbox.is( ':checked' ) ) {
                    $show.show();
                } else {
                    $show.hide();
                }
            }
        },

        onExpandServices: function() {
            var $wrapper  = $( this ).parents( '.germanized-create-label' ).find( '.show-if-further-services' ),
                $trigger  = $( this ).parents( '.show-services-trigger' );

            $wrapper.show();

            $trigger.find( '.show-further-services' ).hide();
            $trigger.find( '.show-fewer-services' ).show();

            return false;
        },

        onHideServices: function() {
            var $wrapper  = $( this ).parents( '.germanized-create-label' ).find( '.show-if-further-services' ),
                $trigger  = $( this ).parents( '.show-services-trigger' );

            $wrapper.hide();

            $trigger.find( '.show-further-services' ).show();
            $trigger.find( '.show-fewer-services' ).hide();

            return false;
        },

        backbone: {

            getShipmentId: function( target ) {
                return target.replace( /^\D+/g, '' );
            },

            init: function( e, target ) {
                if ( target.indexOf( 'wc-gzd-modal-create-shipment-label' ) !== -1 ) {
                    var self         = germanized.admin.dhl_backbone.backbone,
                        backbone     = germanized.admin.dhl_backbone,
                        $modal       = $( '.germanized-create-label' ).parents( '.wc-backbone-modal-content' ),
                        shipmentId   = self.getShipmentId( target ),
                        params       = {
                            'action'     : 'woocommerce_gzd_dhl_create_label_form',
                            'shipment_id': shipmentId,
                            'security'   : backbone.params.create_label_form_nonce
                        };

                    self.doAjax( params, $modal, self.onInitForm );
                }
            },

            onAjaxSuccess: function( data ) {

            },

            onAjaxError: function( data ) {

            },

            doAjax: function( params, $wrapper, cSuccess, cError  ) {
                var self     = germanized.admin.dhl_backbone.backbone,
                    backbone = germanized.admin.dhl_backbone,
                    $content = $wrapper.find( '.germanized-create-label' );

                cSuccess = cSuccess || self.onAjaxSuccess;
                cError   = cError || self.onAjaxError;

                $wrapper.block({
                    message: null,
                    overlayCSS: {
                        background: '#fff',
                        opacity: 0.6
                    }
                });

                $wrapper.find( '.notice-wrapper' ).empty();

                $.ajax({
                    type: "POST",
                    url:  backbone.params.ajax_url,
                    data: params,
                    success: function( data ) {
                        if ( data.success ) {
                            if ( data.fragments ) {
                                $.each( data.fragments, function ( key, value ) {
                                    $( key ).replaceWith( value );
                                });
                            }
                            $wrapper.unblock();
                            cSuccess.apply( $content, [ data ] );
                        } else {
                            $wrapper.unblock();
                            cError.apply( $content, [ data ] );

                            $.each( data.messages, function( i, message ) {
                                self.addNotice( message, 'error', $content );
                            });

                            // ScrollTo top of modal
                            $content.animate({
                                scrollTop: 0
                            }, 500 );
                        }
                    },
                    error: function( data ) {},
                    dataType: 'json'
                });
            },

            onInitForm: function( data ) {
                var self       = germanized.admin.dhl_backbone.backbone,
                    shipmentId = data['shipment_id'],
                    $modal     = $( '.germanized-create-label' );

                $( document.body ).trigger( 'wc-enhanced-select-init' );
                $( document.body ).trigger( 'wc-init-datepickers' );

                $modal.find( 'input.show-if-trigger' ).trigger( 'change' );
                $modal.parents( '.wc-backbone-modal' ).on( 'click', '#btn-ok', { 'shipmentId': shipmentId }, self.onSubmit );
            },

            getFormData: function( $form ) {
                var data = {};

                $.each( $form.serializeArray(), function( index, item ) {
                    if ( item.name.indexOf( '[]' ) !== -1 ) {
                        item.name = item.name.replace( '[]', '' );
                        data[ item.name ] = $.makeArray( data[ item.name ] );
                        data[ item.name ].push( item.value );
                    } else {
                        data[ item.name ] = item.value;
                    }
                });

                return data;
            },

            onSubmitSuccess: function( data ) {
                var self   = germanized.admin.dhl_backbone.backbone,
                    $modal = $( this ).parents( '.wc-backbone-modal-content' );

                $modal.find( '.modal-close' ).trigger( 'click' );
            },

            onSubmit: function( e ) {
                var self       = germanized.admin.dhl_backbone.backbone,
                    backbone   = germanized.admin.dhl_backbone,
                    $modal     = $( this ).parents( '.wc-backbone-modal-content' ),
                    $content   = $modal.find( '.germanized-create-label' ),
                    $form      = $content.find( 'form' ),
                    params     = self.getFormData( $form );

                params['security']    = backbone.params.create_label_nonce;
                params['shipment_id'] = e.data.shipmentId;
                params['action']      = 'woocommerce_gzd_create_dhl_label';

                self.doAjax( params, $modal, self.onSubmitSuccess );

                e.preventDefault();
                e.stopPropagation();
            },

            addNotice: function( message, noticeType, $wrapper ) {
                $wrapper.find( '.notice-wrapper' ).append( '<div class="notice is-dismissible notice-' + noticeType +'"><p>' + message + '</p><button type="button" class="notice-dismiss"></button></div>' );
            },

            response: function( e, target, data ) {
                if ( target.indexOf( 'wc-gzd-modal-create-shipment-label' ) !== -1 ) {

                }
            }
        }
    };

    $( document ).ready( function() {
        germanized.admin.dhl_backbone.init();
    });

})( jQuery, window.germanized.admin );
