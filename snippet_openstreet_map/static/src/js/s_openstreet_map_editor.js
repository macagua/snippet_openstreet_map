odoo.define('snippet_openstreet_map.s_openstreet_map_editor', function (require) {
    'use strict';

    var ajax = require('web.ajax');
    var core = require('web.core');
    var Dialog = require('web_editor.widget').Dialog;
    var openStreetScriptLoaded = require('snippet_openstreet_map.s_openstreet_map_frontend').openStreetScriptLoaded;
    var sOptions = require('web_editor.snippets.options');

    var _t = core._t;

    ajax.loadXML('/snippet_openstreet_map/static/src/xml/s_openstreet_map_modal.xml', core.qweb);

    sOptions.registry.osmap = sOptions.Class.extend({
        // Map Default Location
        defaultLocation: '(55.75,37.62)',

        /**
         * Start function
         *
         * @override
         */
        /*start: function () {
            this.$filterValueOpts = this.$el.find('[data-map-zoom]');
            console.log("EDITOR");
            console.log(this.$filterValueOpts);
            return this._super.apply(this, arguments);
        },*/

        /**
         * Drop and build snippet
         * Open the parameters modal on snippet dropped
         *
         * @override
         */
        onBuilt: function () {
            this._super.apply(this, arguments);
            this.osmap('click', null, null);
        },

        //--------------------------------------------------------------------------
        // Options
        //--------------------------------------------------------------------------

        /**
         * Opens the customization dialog.
         *
         * @param {*} previewMode
         * @param {*} value
         * @param {*} $opt
         */
        osmap: function (previewMode, value, $opt) {
            var self = this;

            this.dialog = new Dialog(this, {
                size: 'medium',
                title: _t("Customize your map"),
                buttons: [
                    {text: _t("Save"), classes: 'btn-primary', close: true, click: function () {
                        if (!this.$('#center-map').val()) {
                            this.$('#center-map').val(self.defaultLocation);
                        }
                        self.$target.attr({
                            'data-map-center': this.$('#center-map').val(),
                            'data-pin-style': this.$('#pin_style').val(),
                            'data-markers': this.$('#markers').val(),
                            'data-map-zoom': this.$('#zoom').val(),
                        });
                        // self.$target.data("snippet-view").redraw();
                    }},
                    {text: _t("Cancel"), close: true}
                ],
                $content: $(core.qweb.render('snippet_openstreet_map.s_openstreet_map_modal'))
            });

            this.dialog.opened().then((function () {
                this.$('#center-map').val(self.$target.attr('data-map-center'));
                this.$('#pin_style').val(self.$target.attr('data-pin-style'));
                this.$('#markers').val(self.$target.attr('data-markers'));
                this.$('#zoom').val(self.$target.attr('data-map-zoom'));
            }).bind(this.dialog));

            self.dialog.open();
        },

        /**
         * Adapts map's type.
         *
         * @param {*} previewMode
         * @param {*} value
         * @param {*} $opt
         */
        mapType: function (previewMode, value, $opt) {
            this.$target.attr('data-map-type', value);
            this.$target.attr('data-map-color', '');
            // this.$target.data('snippet-view').redraw();
        },

        /**
         * Adapts map's color.
         *
         * @param {*} previewMode
         * @param {*} value
         * @param {*} $opt
         */
        mapColor: function (previewMode, value, $opt) {
            this.$target.attr('data-map-color', value);
            // this.$target.data('snippet-view').redraw();
        },

        /**
         * Adapts map's zoom.
         *
         * @param {*} previewMode
         * @param {*} value
         * @param {*} $opt
         */
        mapZoom: function (previewMode, value, $opt) {
            this.$target.attr('data-map-zoom', value);
            // this.$target.data('snippet-view').redraw();
        },

        /**
         * Adapts map's location.
         *
         * @param {*} previewMode
         * @param {*} value
         * @param {*} $opt
         */
        mapCenter: function (previewMode, value, $opt) {
            this.$target.attr('data-map-center', value);
            // this.$target.data('snippet-view').redraw();
        },

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * Set active function
         *
         * @override
         */
        _setActive: function () {
            this.$el.find('[data-map-type]')
                .removeClass('active')
                .filter('[data-map-type="' + this.$target.attr('data-map-type') + '"]')
                .addClass('active');
            this.$el.find('[data-map-color]')
                .removeClass('active')
                .filter('[data-map-color="' + this.$target.attr('data-map-color') + '"]')
                .addClass('active');
            this.$el.find('[data-map-zoom]')
                .removeClass('active')
                .filter('[data-map-zoom="' + this.$target.attr('data-map-zoom') + '"]')
                .addClass('active');
            this.$el.find('[data-map-center]')
                .removeClass('active')
                .filter('[data-map-center="' + this.$target.attr('data-map-center') + '"]')
                .addClass('active');
        },
    });
});
