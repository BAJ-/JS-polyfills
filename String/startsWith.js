/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/String-prototype-startsWith/
 *
 * NOTE: This is still an EXPERIMENTAL FEATURE NOT YET STANDARDIZED, but set to be part of ECMAScript 6!
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

// String.prototype.startsWith using for-loop
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        "use strict";
        var str = this,
            strLen = str.length,
            seaLen = searchString.length,
            pos = position || 0,
            i;
        
        if (seaLen + pos > strLen) {
            return false;
        }
        
        for (i = 0; i < seaLen; i++) {
            if (str.charCodeAt(pos + i) !== searchString.charCodeAt(i)) {
                return false;
            }
        }
        return true;
    };
}

// String.prototype.startsWith using recursion
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        "use strict";
        var str = this,
            strLen,
            seaLen,
            pos = position || 0;
        
        strLen = str.length;
        seaLen = searchString.length;
        
        return (seaLen + pos > strLen) ? false : (function nextChar(i) {
            return (i >= seaLen) || (function () {
                return str.charCodeAt(pos + i) !== searchString.charCodeAt(i) ? false : nextChar(i + 1);
            }());
        }(0));
    };
}
