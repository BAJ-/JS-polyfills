/**
 * Detailed explanation of the code can be found here: http://javascript.boxsheep.com/polyfills/document-getElementsByClassName/
 *
 * NOTE: This is not one big polyfill but several ways to write the same polyfill.
 */

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * document.getElementsByClassName using for-loop
 */
if (document.getElementsByClassName) {
    document.getElementsByClassName = function (className) {
        "use strict";
        var result = [],
              elements = document.getElementsByTagName('*'),
              len = elements.length,
              i,
              node;
        for (i = 0; i < len; i += 1) {
            node = elements[i];
            if ((' ' + (node.className || node.getAttribute('class')) + ' ').indexOf(' ' + className + ' ') >= 0) {
                result.push(node);
            }
        }
        return result;
    };
}

/*
 * By Bjorn A. Johansen @ javascript.boxsheep.com
 * document.getElementsByClassName using recursion
 */
if (document.getElementsByClassName) {
    document.getElementsByClassName = function (className) {
        "use strict";
        var result = [],
            body = document.body;
        (function traverseDOM (node, fn) {
            if (node.nodeType === 1) {
                fn(node, className);
            }
            node = node.firstChild;
            while (node) {
                traverseDOM(node, fn);
                node = node.nextSibling;
            }
        }(body, function (elem, cName) {
            if ((' ' + (elem.className || elem.getAttribute('class')) + ' ').indexOf(' ' + cName + ' ') >= 0) {
                result.push(elem);
            }
        }));
        return result;
    };
}
