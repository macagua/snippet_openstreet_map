# -*- coding: utf-8 -*-
# Copyright (C) 2016 Shurshilov Artem <shurshilov.a@yandex.ru>
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).
{
    'name': 'Authenticate by faceid',
    'summary': """Adds functional auth by photo""",
    'author': 'Shurshilov Artem',
    "website": "https://vk.com/id20132180",
    
    # Categories can be used to filter modules in modules listing
    'category': "Tools",
    'version': '2.0',
    # any module necessary for this one to work correctly
    'depends': ['base','web'],    
    "license": "LGPL-3",
#    'price': 9.99,
#    'currency': 'EUR',
    # always loaded
    'images':[
            'static/description/stock_open2.png',
            'static/description/stock_open.png',
            'static/description/stock_cursor.png',
    ],
    'data': [ 'views/form_image_preview_templates.xml', ],   
    'qweb': [ 'static/src/xml/image.xml', ],
    'installable': False,
    'application': False,
    # If it's True, the modules will be auto-installed when all dependencies
    # are installed
    'auto_install': False,
}