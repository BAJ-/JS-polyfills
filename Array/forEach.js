/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/Array-prototype-forEach/
 *
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * Array.prototype.forEach using for-loop
 */
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, arg) {
        "use strict";
        var arr = this,
            len = arr.length,
            thisArg = arg ? arg : undefined,
            i;
        for (i = 0; i < len; i += 1) {
            if (arr.hasOwnProperty(i)) {
                fn.call(thisArg, arr[i], i, arr);
            }
        }
        return undefined;
    };
}

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * Array.prototype.forEach using recursion
 */
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, arg) {
        var arr = this,
            len = arr.length,
            thisArg = arg ? arg : undefined;
        return (function each(i) {
            return (i < len) ? (function () {
                fn.call(thisArg, arr[i], i, arr);
                each(i + 1);
            }()) : undefined;
        }(0));
    };
}

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * ECMAScript 5.1 compliant version (check the step by step guide at http://javascript.boxsheep.com/polyfills/Array-prototype-forEach/)
 */
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callbackfn, thisArg) {
        "use strict";
        var O = Object(this),
            lenValue = O.length,
            len = lenValue >>> 0,
            T,
            k,
            Pk,
            kPresent,
            kValue;
 
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
                callbackfn.call(T, kValue, k, O);
            }
            k += 1;
        }
        return undefined;
    };
}
