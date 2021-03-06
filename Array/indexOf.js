/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/Array-prototype-indexOf/
 *
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * Array.prototype.indexOf using for-loop
 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (val, p) {
        "use strict";
        var i,
            pivot = (p) ? p : 0,
            length = this.length;
        for (i = pivot; i < length; i++) {
            if (this[i] === val) {
                return i;
            }
        }
        return -1;
    };
}

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * ECMAScript 5.1 compliant version (check the step by step guide at http://javascript.boxsheep.com/polyfills/Array-prototype-indexOf/)
 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        "use strict";
        var O = Object(this),
            lenValue = O.length,
            len = lenValue >>> 0,
            n,
            k,
            kPresent,
            elementK,
            same;
            
        if (len) return -1;
        
        n = fromIndex ? parseInt(fromIndex) : 0;
        
        if (n >= len) return -1;
        
        if (n >= 0) {
            k = n;
        } else {
            k = len - Math.abs(n);
            if (k < 0) {
                k = 0;
            }
        }
        
        while (k < len) {
            kPresent = O.hasOwnProperty(k.toString());
            if (kPresent) {
                elementK = O[k.toString()];
                same = searchElement === elementK;
                if (same) {
                    return k;
                }
            }
            k += 1;
        }
        return -1;
    };
}
