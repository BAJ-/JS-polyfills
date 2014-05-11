/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/String-prototype-trim/
 *
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

// String.prototype.trim Douglas Crockford version
// I found this on http://javascript.crockford.com/remedial.html
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, "$1");
    };
}

// String.prototype.trim with simpler RegExp
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}
