/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/Array-prototype-lastIndexOf/
 *
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * Array.prototype.lastIndexOf using for-loop
 */
if (!Array.prototype.lastIndexOf) {
    Array.prototype.lastIndexOf = function (elem, fIndex) {
        "use strict";
        var arr = this,
            frm = fIndex ? parseInt(fIndex) : arr.length - 1;
 
        for (frm; frm >= 0; frm--) {
            if (arr.hasOwnProperty(frm) && arr[frm] === elem) {
                return frm;
            }
        }
        return -1;
    };
}

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * Array.prototype.lastIndexOf using recursion
 */
if (!Array.prototype.lastIndexOf) {
    Array.prototype.lastIndexOf = function (elem, fIndex) {
        "use strict";
        var arr = this,
              frm = fIndex ? parseInt(fIndex) : arr.length - 1;
        return (function findElm(i) {
            return (i >= 0) ? (function () {
                if (arr.hasOwnProperty(frm) && arr[frm] === elem) {
                    return frm;
                }
                return findElm(frm--);
           }()) : -1;
        }(frm));
    };
}

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * ECMAScript 5.1 compliant version (check the step by step guide at http://javascript.boxsheep.com/polyfills/Array-prototype-lastIndexOf/)
 */
if (!Array.prototype.lastIndexOf) {
    Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
        "use strict";
        var O = Object(this),
            lenValue = O.length,
            len = lenValue >>> 0,
            n,
            k,
            kPresent,
            elementK,
            same;
 
        if (len === 0) {
            return -1;
        }
 
        n = fromIndex ? parseInt(fromIndex) : len - 1;
 
        k = (n >= 0) ? Math.min(n, len - 1) : len - Math.abs(n);
 
        while (k >= 0) {
            kPresent = O.hasOwnProperty(k.toString());
            if (kPresent) {
                elementK = O[k.toString()];
                same = searchElement === elementK;
                if (same) {
                    return k;
                }
            }
            k -= 1;
        }
        return -1;
    };
}
