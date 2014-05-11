/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/Array-prototype-find/
 *
 * NOTE: This is still an EXPERIMENTAL FEATURE NOT YET STANDARDIZED, but set to be part of ECMAScript 6!
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

// Array.prototype.find using for-loop
if (!Array.prototype.find) {
    Array.prototype.find = function (callback, thisArg) {
        "use strict";
        var arr = this,
            arrLen = arr.length,
            i;
        for (i = 0; i < arrLen; i += 1) {
            if (callback.call(thisArg, arr[i], i, arr)) {
                return arr[i];
            }
        }
        return undefined;
    };
}

// Array.prototype.find using forEach
if (!Array.prototype.find) {
    Array.prototype.find = function (callback, thisArg) {
        "use strict";
        this.forEach(function (elmVal, i, arr) {
            if (callback.call(thisArg, elmVal, i, arr)) {
                return elmVal;
            }
        });
        return undefined;
    };
}

// Array.prototype.find using recursion
if (!Array.prototype.find) {
    Array.prototype.find = function (callback, thisArg) {
        "use strict";
        return (function checkNext(elmVal, i, arr) {
            return callback.call(thisArg, elmVal, i, arr) ? elmVal : (i < arr.length) ? checkNext(arr[i], i + 1, arr) : undefined;
        }(this[0], 0, this));
    };
}
