/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/Array-prototype-reduce/
 *
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

// Array.prototype.reduce using for-loop
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callbackfn, initVal) {
        "use strict";
        var arr = this,
            arrLen = arr.length,
            k = 0,
            accumulator = initVal === undefined ? undefined : initVal;
 
        for(;k < arrLen;k++) {
            if (accumulator !== undefined && k in arr) {
                accumulator = callbackfn.call(undefined, accumulator, arr[k], k, arr);
            } else {
                accumulator = arr[k];
            }
        }
        return accumulator;
    };
}

// ECMAScript 5.1 compliant version (check the step by step guide on the website)
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callbackfn, initialValue) {
        "use strict";
        var O = Object(this),
            lenValue = O.length,
            len = lenValue >>> 0,
            k,
            accumulator,
            kPresent,
            Pk,
            kValue;
            
        if (typeof callbackfn !== 'function') {
            throw new TypeError();
        }
        
        if (len === 0 && initialValue === undefined) {
            throw new TypeError();
        }
        
        k = 0;
        
        if (initialValue !== undefined) {
            accumulator = initialValue;
        } else {
            kPresent = false;
            while(!kPresent && k < len) {
                Pk = k.toString();
                kPresent = O.hasOwnProperty(Pk);
                if (kPresent) {
                    accumulator = O[Pk];
                }
                k += 1;
            }
            if (!kPresent) {
                throw new TypeError();
            }
        }
        while(k < len) {
            Pk = k.toString();
            kPresent = O.hasOwnProperty(Pk);
            if (kPresent) {
                kValue = O[Pk];
                accumulator = callbackfn.call(undefined, accumulator, kValue, k, O);
            }
            k += 1;
        }
        return accumulator;
    };
}
