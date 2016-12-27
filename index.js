/**
 * Created by liangshan on 16/12/27.
 */

exports.jsonp2json = function jsonp2json(jsonStr) {
    var start, end, jsonObj = {};
    if (jsonStr && jsonStr.length > 0) {
        if ((start = jsonStr.indexOf('({')) != -1) {
            start++;
        } else {
            throw 'is not a normal jsonp data，less ({';
        }
        if ((end = jsonStr.indexOf('})')) != -1) {
            end++;
        } else {
            throw 'is not a normal jsonp data，less }))';
        }
        jsonStr = jsonStr.substring(start, end);

        console.info(jsonStr);
        try {
            jsonObj = JSON.parse(jsonStr);
        } catch (e) {
            throw e.stack;
        }
        return jsonObj;
    } else {
        throw 'json string is null or blank string!';
    }
};

exports.json2jsonp = function json2jsonp(jsonObj, callbackMethodName) {
    if (typeof jsonObj == 'object') {
        return callbackMethodName + '(' + JSON.stringify(jsonObj) + ')';
    } else {
        console.error('the first parameter is not a json object!');
        throw 'the first parameter is not a json object!';
        return;
    }
};

