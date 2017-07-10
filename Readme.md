

1.npm install mountain-jsonp

2.var jp = require('mountain-jsonp');

e.g:

jsonp to json

jp.jsonp2json('callbackName({"name":"jack"})');

json to jsonp

jp.json2jsonp({"name":"jack"}, callbackName);


