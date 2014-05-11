/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/Array-prototype-filter/
 *
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

// Array.prototype.filter using for-loop
if (!Array.prototype.filter) {
    Array.prototype.filter = function (fn, context) {
        "use strict";
        var i,
            value,
            result = [],
            length = this.length;
        for (i = 0; i < length; i++) {
            if (this.hasOwnProperty(i)) {
                value = this[i];
                if (fn.call(context, value, i, this)) {
                    result.push(value);
                }
            }
        }
    return result;
    };
}

// ECMAScript 5.1 compliant version
if (!Array.prototype.filter) {
    Array.prototype.filter = function(callbackfn , thisArg) {
        "use strict";
        var O = Object(this),
            lenValue = O.length,
            len = lenValue >>> 0,
            T,
            A,
            k,
            to,
            Pk,
            kPresent,
            kValue,
            selected;
 
        if (typeof callbackfn !== "function") {
            throw new TypeError();
        }
 
        T = thisArg ? thisArg : undefined;
        A = new Array();
        k = 0;
        to = 0;
        
        while(k < len) {
            Pk = k.toString();
            kPresent = O.hasOwnProperty(Pk);
            if (kPresent) {
                kValue = O[Pk];
                selected = callbackfn.call(T, kValue, k, O);
                if (!!selected) {
                    A.push(kValue);
                    to += 1;
                }
            }
            k += 1;
        }
        return A;
    };
}
