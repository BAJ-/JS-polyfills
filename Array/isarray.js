/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/Array-isArray/
 *
 * In essence we are using the Object object's toString method to get information about what class of object
 * the given arg parameter is.
 */
if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}
