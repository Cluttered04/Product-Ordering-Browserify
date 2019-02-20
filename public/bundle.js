(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ReviewList = _interopRequireDefault(require("./ReviewList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productHTML = (name, description, price, quantity, image) => {
  // printReview();
  // console.log(printReview());
  let HTMLString = `<h1>${name}</h1><p>${description}</p><p>${price}</p><p>${quantity}</p><img url="${image}">` + (0, _ReviewList.default)();
  console.log(HTMLString);
  return HTMLString;
};

var _default = productHTML;
exports.default = _default;

},{"./ReviewList":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const fetchProductData = () => {
  return fetch("http://localhost:8088/product", {}).then(response => response.json());
};

var _default = fetchProductData;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ProductData = _interopRequireDefault(require("./ProductData.js"));

var _Product = _interopRequireDefault(require("./Product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printFullProduct = () => {
  (0, _ProductData.default)().then(parsedResponses => {
    parsedResponses.forEach(product => {
      document.querySelector("#product").innerHTML += (0, _Product.default)(product.title, product.description, product.price, product.quantity, product.image);
    });
  });
};

var _default = printFullProduct;
exports.default = _default;

},{"./Product.js":1,"./ProductData.js":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function reviewHTML(review) {
  return `<article>${review}</article>`;
}

var _default = reviewHTML;
exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const reviewData = ["Lorem ipsum dolor amet squid blue bottle migas, hammock thundercats yuccie la croix banjo church-key intelligentsia franzen edison bulb. Ugh woke forage taiyaki, fam activated charcoal helvetica etsy tumeric. Succulents helvetica vape XOXO tofu, cornhole sustainable tumblr hammock skateboard activated charcoal af church-key. Stumptown bespoke sustainable DIY.", "Lorem ipsum dolor amet squid blue bottle migas, hammock thundercats yuccie la croix banjo church-key intelligentsia franzen edison bulb. Ugh woke forage taiyaki, fam activated charcoal helvetica etsy tumeric. Succulents helvetica vape XOXO tofu, cornhole sustainable tumblr hammock skateboard activated charcoal af church-key. Stumptown bespoke sustainable DIY.", "Lorem ipsum dolor amet squid blue bottle migas, hammock thundercats yuccie la croix banjo church-key intelligentsia franzen edison bulb. Ugh woke forage taiyaki, fam activated charcoal helvetica etsy tumeric. Succulents helvetica vape XOXO tofu, cornhole sustainable tumblr hammock skateboard activated charcoal af church-key. Stumptown bespoke sustainable DIY."];
var _default = reviewData;
exports.default = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Review = _interopRequireDefault(require("./Review.js"));

var _ReviewData = _interopRequireDefault(require("./ReviewData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printReview = () => {
  _ReviewData.default.forEach(review => {
    return (0, _Review.default)(review);
  });
};

var _default = printReview;
exports.default = _default;

},{"./Review.js":4,"./ReviewData.js":5}],7:[function(require,module,exports){
"use strict";

var _ProductList = _interopRequireDefault(require("./ProductList.js"));

var _nav = _interopRequireDefault(require("./nav.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ProductList.default)();
document.querySelector("#product").innerHTML += (0, _nav.default)();

},{"./ProductList.js":3,"./nav.js":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const createNav = () => {
  return "<nav><a href='#Betsy'>Betsy</a><a href='#Categories'>Categories</a><a href='#Orders'>Orders</a><a href='#Log Out'>Log out</a></nav>";
};

var _default = createNav;
exports.default = _default;

},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL1Byb2R1Y3QuanMiLCIuLi9zY3JpcHRzL1Byb2R1Y3REYXRhLmpzIiwiLi4vc2NyaXB0cy9Qcm9kdWN0TGlzdC5qcyIsIi4uL3NjcmlwdHMvUmV2aWV3LmpzIiwiLi4vc2NyaXB0cy9SZXZpZXdEYXRhLmpzIiwiLi4vc2NyaXB0cy9SZXZpZXdMaXN0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7QUFHQSxNQUFNLFdBQVcsR0FBRyxDQUFDLElBQUQsRUFBTyxXQUFQLEVBQW9CLEtBQXBCLEVBQTJCLFFBQTNCLEVBQXFDLEtBQXJDLEtBQStDO0FBQy9EO0FBQ0E7QUFDQSxNQUFJLFVBQVUsR0FBSSxPQUFNLElBQUssV0FBVSxXQUFZLFVBQVMsS0FBTSxVQUFTLFFBQVMsaUJBQWdCLEtBQU0sSUFBekYsR0FBK0YsMEJBQWhIO0FBQ0EsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVo7QUFDQSxTQUFPLFVBQVA7QUFFSCxDQVBEOztlQVNlLFc7Ozs7Ozs7Ozs7O0FDWmYsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzNCLFNBQU8sS0FBSyxDQUFDLCtCQUFELEVBQWtDLEVBQWxDLENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVILENBSEQ7O2VBS2UsZ0I7Ozs7Ozs7Ozs7O0FDTGY7O0FBQ0E7Ozs7QUFFQSxNQUFNLGdCQUFnQixHQUFHLE1BQU07QUFDM0IsOEJBQ0MsSUFERCxDQUNNLGVBQWUsSUFBSTtBQUNyQixJQUFBLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixPQUFPLElBQUk7QUFDL0IsTUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixFQUFtQyxTQUFuQyxJQUFnRCxzQkFBWSxPQUFPLENBQUMsS0FBcEIsRUFBMkIsT0FBTyxDQUFDLFdBQW5DLEVBQWdELE9BQU8sQ0FBQyxLQUF4RCxFQUErRCxPQUFPLENBQUMsUUFBdkUsRUFBaUYsT0FBTyxDQUFDLEtBQXpGLENBQWhEO0FBQ1AsS0FGRztBQUdQLEdBTEc7QUFLRCxDQU5IOztlQVFlLGdCOzs7Ozs7Ozs7OztBQ1hmLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QjtBQUN4QixTQUFRLFlBQVcsTUFBTyxZQUExQjtBQUdIOztlQUVjLFU7Ozs7Ozs7Ozs7QUNOZixNQUFNLFVBQVUsR0FBRyxDQUNmLDJXQURlLEVBRWYsMldBRmUsRUFHZiwyV0FIZSxDQUFuQjtlQU9lLFU7Ozs7Ozs7Ozs7O0FDUGY7O0FBQ0E7Ozs7QUFHQSxNQUFNLFdBQVcsR0FBRyxNQUFNO0FBQ3RCLHNCQUFXLE9BQVgsQ0FBbUIsTUFBTSxJQUFJO0FBQzdCLFdBQU8scUJBQVcsTUFBWCxDQUFQO0FBQ0gsR0FGRztBQUVELENBSEg7O2VBS2UsVzs7Ozs7O0FDVGY7O0FBQ0E7Ozs7QUFFQTtBQUNBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLEVBQW1DLFNBQW5DLElBQWlELG1CQUFqRDs7Ozs7Ozs7OztBQ0pBLE1BQU0sU0FBUyxHQUFHLE1BQU07QUFDcEIsU0FBTyxxSUFBUDtBQUNILENBRkQ7O2VBSWUsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBwcmludFJldmlldyBmcm9tIFwiLi9SZXZpZXdMaXN0XCI7XHJcblxyXG5cclxuY29uc3QgcHJvZHVjdEhUTUwgPSAobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBxdWFudGl0eSwgaW1hZ2UpID0+IHtcclxuICAgIC8vIHByaW50UmV2aWV3KCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcmludFJldmlldygpKTtcclxuICAgIGxldCBIVE1MU3RyaW5nID0gYDxoMT4ke25hbWV9PC9oMT48cD4ke2Rlc2NyaXB0aW9ufTwvcD48cD4ke3ByaWNlfTwvcD48cD4ke3F1YW50aXR5fTwvcD48aW1nIHVybD1cIiR7aW1hZ2V9XCI+YCArIHByaW50UmV2aWV3KCk7XHJcbiAgICBjb25zb2xlLmxvZyhIVE1MU3RyaW5nKTtcclxuICAgIHJldHVybiBIVE1MU3RyaW5nO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdEhUTUwiLCJjb25zdCBmZXRjaFByb2R1Y3REYXRhID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Byb2R1Y3RcIiwge30pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoUHJvZHVjdERhdGE7IiwiaW1wb3J0IGZldGNoUHJvZHVjdERhdGEgZnJvbSBcIi4vUHJvZHVjdERhdGEuanNcIlxyXG5pbXBvcnQgcHJvZHVjdEhUTUwgZnJvbSBcIi4vUHJvZHVjdC5qc1wiXHJcblxyXG5jb25zdCBwcmludEZ1bGxQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgZmV0Y2hQcm9kdWN0RGF0YSgpXHJcbiAgICAudGhlbihwYXJzZWRSZXNwb25zZXMgPT4ge1xyXG4gICAgICAgIHBhcnNlZFJlc3BvbnNlcy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2R1Y3RcIikuaW5uZXJIVE1MICs9IHByb2R1Y3RIVE1MKHByb2R1Y3QudGl0bGUsIHByb2R1Y3QuZGVzY3JpcHRpb24sIHByb2R1Y3QucHJpY2UsIHByb2R1Y3QucXVhbnRpdHksIHByb2R1Y3QuaW1hZ2UpO1xyXG4gICAgfSlcclxufSl9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmludEZ1bGxQcm9kdWN0OyIsImZ1bmN0aW9uIHJldmlld0hUTUwocmV2aWV3KSB7XHJcbiAgICByZXR1cm4gYDxhcnRpY2xlPiR7cmV2aWV3fTwvYXJ0aWNsZT5gXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3SFRNTDsiLCJjb25zdCByZXZpZXdEYXRhID0gW1xyXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBhbWV0IHNxdWlkIGJsdWUgYm90dGxlIG1pZ2FzLCBoYW1tb2NrIHRodW5kZXJjYXRzIHl1Y2NpZSBsYSBjcm9peCBiYW5qbyBjaHVyY2gta2V5IGludGVsbGlnZW50c2lhIGZyYW56ZW4gZWRpc29uIGJ1bGIuIFVnaCB3b2tlIGZvcmFnZSB0YWl5YWtpLCBmYW0gYWN0aXZhdGVkIGNoYXJjb2FsIGhlbHZldGljYSBldHN5IHR1bWVyaWMuIFN1Y2N1bGVudHMgaGVsdmV0aWNhIHZhcGUgWE9YTyB0b2Z1LCBjb3JuaG9sZSBzdXN0YWluYWJsZSB0dW1ibHIgaGFtbW9jayBza2F0ZWJvYXJkIGFjdGl2YXRlZCBjaGFyY29hbCBhZiBjaHVyY2gta2V5LiBTdHVtcHRvd24gYmVzcG9rZSBzdXN0YWluYWJsZSBESVkuXCIsXHJcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIGFtZXQgc3F1aWQgYmx1ZSBib3R0bGUgbWlnYXMsIGhhbW1vY2sgdGh1bmRlcmNhdHMgeXVjY2llIGxhIGNyb2l4IGJhbmpvIGNodXJjaC1rZXkgaW50ZWxsaWdlbnRzaWEgZnJhbnplbiBlZGlzb24gYnVsYi4gVWdoIHdva2UgZm9yYWdlIHRhaXlha2ksIGZhbSBhY3RpdmF0ZWQgY2hhcmNvYWwgaGVsdmV0aWNhIGV0c3kgdHVtZXJpYy4gU3VjY3VsZW50cyBoZWx2ZXRpY2EgdmFwZSBYT1hPIHRvZnUsIGNvcm5ob2xlIHN1c3RhaW5hYmxlIHR1bWJsciBoYW1tb2NrIHNrYXRlYm9hcmQgYWN0aXZhdGVkIGNoYXJjb2FsIGFmIGNodXJjaC1rZXkuIFN0dW1wdG93biBiZXNwb2tlIHN1c3RhaW5hYmxlIERJWS5cIixcclxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3IgYW1ldCBzcXVpZCBibHVlIGJvdHRsZSBtaWdhcywgaGFtbW9jayB0aHVuZGVyY2F0cyB5dWNjaWUgbGEgY3JvaXggYmFuam8gY2h1cmNoLWtleSBpbnRlbGxpZ2VudHNpYSBmcmFuemVuIGVkaXNvbiBidWxiLiBVZ2ggd29rZSBmb3JhZ2UgdGFpeWFraSwgZmFtIGFjdGl2YXRlZCBjaGFyY29hbCBoZWx2ZXRpY2EgZXRzeSB0dW1lcmljLiBTdWNjdWxlbnRzIGhlbHZldGljYSB2YXBlIFhPWE8gdG9mdSwgY29ybmhvbGUgc3VzdGFpbmFibGUgdHVtYmxyIGhhbW1vY2sgc2thdGVib2FyZCBhY3RpdmF0ZWQgY2hhcmNvYWwgYWYgY2h1cmNoLWtleS4gU3R1bXB0b3duIGJlc3Bva2Ugc3VzdGFpbmFibGUgRElZLlwiXHJcbl1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXZpZXdEYXRhOyIsImltcG9ydCByZXZpZXdIVE1MIGZyb20gXCIuL1Jldmlldy5qc1wiO1xyXG5pbXBvcnQgcmV2aWV3RGF0YSBmcm9tIFwiLi9SZXZpZXdEYXRhLmpzXCI7XHJcblxyXG5cclxuY29uc3QgcHJpbnRSZXZpZXcgPSAoKSA9PiB7XHJcbiAgICByZXZpZXdEYXRhLmZvckVhY2gocmV2aWV3ID0+IHtcclxuICAgIHJldHVybiByZXZpZXdIVE1MKHJldmlldyk7XHJcbn0pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpbnRSZXZpZXc7IiwiaW1wb3J0IHByaW50RnVsbFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdExpc3QuanNcIjtcclxuaW1wb3J0IGNyZWF0ZU5hdiBmcm9tIFwiLi9uYXYuanNcIlxyXG5cclxucHJpbnRGdWxsUHJvZHVjdCgpXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdFwiKS5pbm5lckhUTUwgKz0gIGNyZWF0ZU5hdigpOyIsImNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcclxuICAgIHJldHVybiBcIjxuYXY+PGEgaHJlZj0nI0JldHN5Jz5CZXRzeTwvYT48YSBocmVmPScjQ2F0ZWdvcmllcyc+Q2F0ZWdvcmllczwvYT48YSBocmVmPScjT3JkZXJzJz5PcmRlcnM8L2E+PGEgaHJlZj0nI0xvZyBPdXQnPkxvZyBvdXQ8L2E+PC9uYXY+XCJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2OyJdfQ==
