/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/Array-prototype-every/
 *
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

// Array.prototype.every using for-loop
if (!Array.prototype.every) {
    Array.prototype.every = function (fn, thisArg) {
        "use strict";
        var arr = this,
            arrLen = arr.length,
            i,
            T = thisArg ? thisArg : undefined;
        
        for (i = 0; i < arrLen; i += 1) {
            if (!fn.call(T, arr[i], i, arr)) {
                return false;
            }
        }
        return true;
    };
}

// Array.prototype.every using recursion
if (!Array.prototype.every) {
    Array.prototype.every = function (fn, thisArg) {
        "use strict";
        var arr = this,
            arrLen = arr.length,
            T = thisArg ? thisArg : undefined;
        return (function ev(i) {
            return (!fn.call(T, arr[i], arr)) ? false : (i < arrLen - 1) ? ev(i + 1) : true;
        }(0));
    };
}

// ECMAScript 5.1 compliant version (check the step by step guide on the website)
if (!Array.prototype.every) {
    Array.prototype.every = function (callbackfn, thisArg) {
        "use strict";
        var O = Object(this),
            lenValue = O.length,
            len = lenValue >>> 0,
            T,
            k,
            Pk,
            kPresent,
            kValue,
            testResult;
        
        if (typeof callbackfn !== 'function') {
            throw new TypeError();
        }
        
        T = thisArg ? thisArg : undefined;
        
        k = 0;
        
        while (k < len) {
            Pk = k.toString();
            kPresent = O.hasOwnProperty(Pk);
            if (kPresent) {
                kValue = O[Pk];
                testResult = callbackfn.call(T, kValue, k, O);
                if (!!!testResult) {
                    return false;
                }
            }
            k = k + 1;
        }
        return true;
    };
}
