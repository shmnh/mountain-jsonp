

1.npm install mountain-jsonp

2.var jp = require('mountain-jsonp');

e.g:

jsonp to json

jp.jsonp2json('callback({"name":"jack"})');

json to jsonp

jp.jsonp2json({"name":"jack"}, callbackName);


