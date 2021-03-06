/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/Function-prototype-bind/
 *
 */

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * Function.prototype.bind
 */
if (!Function.prototype.bind) {
    Function.prototype.bind = function (o) {
        "use strict";
        var target = this,
            args = Array.prototype.slice.call(arguments, 1),
            bound = function () {
                var F = (function() {
                        var Fn = function() {};
                        Fn.prototype = target.prototype;
                        return Fn;
                    }()),
                    self = new F(),
                    targetSelf = target.apply((function() {
                        return (this instanceof bound && self) ? self : o;
                    }()), args.concat(Array.prototype.slice.call(arguments)));
                
                return targetSelf || self;
            };
        return bound;
    };
}
