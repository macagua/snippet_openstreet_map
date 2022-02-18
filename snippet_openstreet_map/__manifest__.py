# -*- coding: utf-8 -*-
# Copyright (C) 2020 Artem Shurshilov <shurshilov.a@yandex.ru>
# License OPL-1.0 or later (http://www.gnu.org/licenses/agpl).
{
    'name': "OpenStreetMap Leaflet Snippet",
    'summary': """
        Adds FREE Leaflet OpenStreetMap map on website as snippet
    [TAGS] website maps Leaflet OSM map free map osm Leaflet
    map leaflet map maps leafletjs website openstreet map widget""",
    'description': """
OpenStreetMap Leaflet Snippet HTML for Website app.
===================================================

Allows to automatically load data and set the following items:
--------------------------------------------------------------
    * Add a snippet HTML called *OpenStreetMap* for Website app.
""",
    'author': "Shurshilov Artem",
    'website': "https://www.eurodoo.com",
    # "live_test_url": "https://www.eurodoo.com",
    'maintainer': 'Leonardo J. Caballero G. <leonardocaballero@gmail.com>',
    'support': 'shurshilov.a@yandex.ru',
    "license": "OPL-1",
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Website',
    'version': '13.0.0.1',
    'price': 49,
    'currency': 'EUR',
    'depends': ['website'],
    'data': [
        'views/assets.xml',
        'views/s_openstreet_map.xml',
    ],
    'images': [
        'static/description/icon.png',
        'static/description/preview.gif',
        'static/description/screenshot_1.png',
        'static/description/screenshot_2.png',
        'static/description/screenshot_3.png',
    ],
    'qweb': [
        "static/src/xml/s_openstreet_map_modal.xml",
    ],
}

