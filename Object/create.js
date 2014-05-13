/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/Object-create/
 *
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

/*
 * Object.create Douglas Crockford version
 * I found this on http://javascript.crockford.com/prototypal.html
 */
if (!Object.create) {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * ECMAScript 5.1 compliant version (check the step by step guide at http://javascript.boxsheep.com/polyfills/Object-create/)
 */
if (!Object.create) {
    Object.create = function (O, Properties) {
        "use strict";
        var obj;
        if (typeof O !== 'object' || O === null) {
            throw new TypeError();
        }
        obj = new Object();
        obj.prototype = O;
        
        if (Properties !== undefined) {
            Object.defineProperties(obj, Properties);
        }
        return obj;
    };
}
