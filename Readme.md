

1.npm install mountain-jsonp

2.var tool = require('mountain-jsonp');

e.g:

jsonp to json

tool.jsonp2json('callback({"name":"jack"})');

json to jsonp

tool.jsonp2json({"name":"jack"}, 'callbackName');


