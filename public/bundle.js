(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// A component that displays a person's name(contactName), phone number(contactPhoneNumber), and address(contactAddress).
const contacts = {
  contactBuilder(contactObj) {
    let contactSection = document.createElement("section");
    let contactName = document.createElement("h3");
    contactName.innerText = contactObj.name;
    let contactPhoneNumber = document.createElement("p");
    contactPhoneNumber.innerText = contactObj.phoneNumber;
    let contactAddress = document.createElement("p");
    contactAddress.innerText = contactObj.address;
    contactSection.appendChild(contactName);
    contactSection.appendChild(contactPhoneNumber);
    contactSection.appendChild(contactAddress);
    return contactBuilder;
  }

};
var _default = contacts;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
let contactCollection = {
  getAllContacts() {
    return fetch("http://localhost:8088/contacts").then(response => response.json());
  }

};
var _default = contactCollection;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _contact = _interopRequireDefault(require("./contact"));

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./contact":1,"./contactCollection":2}],4:[function(require,module,exports){
"use strict";

var _contactList = _interopRequireDefault(require("./contactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./contactList":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0TGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBRUEsTUFBTSxRQUFRLEdBQUc7QUFDYixFQUFBLGNBQWMsQ0FBQyxVQUFELEVBQWE7QUFDdkIsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7QUFFQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBd0IsVUFBVSxDQUFDLElBQW5DO0FBRUEsUUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUF6QjtBQUNBLElBQUEsa0JBQWtCLENBQUMsU0FBbkIsR0FBK0IsVUFBVSxDQUFDLFdBQTFDO0FBRUEsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxTQUFmLEdBQTJCLFVBQVUsQ0FBQyxPQUF0QztBQUVBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsV0FBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLGtCQUEzQjtBQUNBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsY0FBM0I7QUFFQSxXQUFPLGNBQVA7QUFDSDs7QUFsQlksQ0FBakI7ZUFxQmUsUTs7Ozs7Ozs7OztBQ3ZCZjtBQUVBLElBQUksaUJBQWlCLEdBQUc7QUFDcEIsRUFBQSxjQUFjLEdBQUk7QUFDZCxXQUFPLEtBQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ04sSUFETSxDQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURYLENBQVA7QUFFSDs7QUFKbUIsQ0FBeEI7ZUFPZSxpQjs7Ozs7O0FDUGY7O0FBQ0E7Ozs7Ozs7QUNBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEEgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgYSBwZXJzb24ncyBuYW1lKGNvbnRhY3ROYW1lKSwgcGhvbmUgbnVtYmVyKGNvbnRhY3RQaG9uZU51bWJlciksIGFuZCBhZGRyZXNzKGNvbnRhY3RBZGRyZXNzKS5cclxuXHJcbmNvbnN0IGNvbnRhY3RzID0ge1xyXG4gICAgY29udGFjdEJ1aWxkZXIoY29udGFjdE9iaikge1xyXG4gICAgICAgIGxldCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG5cclxuICAgICAgICBsZXQgY29udGFjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgY29udGFjdE5hbWUuaW5uZXJUZXh0ID0gY29udGFjdE9iai5uYW1lO1xyXG5cclxuICAgICAgICBsZXQgY29udGFjdFBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29udGFjdFBob25lTnVtYmVyLmlubmVyVGV4dCA9IGNvbnRhY3RPYmoucGhvbmVOdW1iZXI7XHJcblxyXG4gICAgICAgIGxldCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnRhY3RBZGRyZXNzLmlubmVyVGV4dCA9IGNvbnRhY3RPYmouYWRkcmVzc1xyXG5cclxuICAgICAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0TmFtZSk7XHJcbiAgICAgICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdFBob25lTnVtYmVyKTtcclxuICAgICAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWN0QnVpbGRlclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0cyIsIi8vIEEgQ29udGFjdENvbGxlY3Rpb24gY29tcG9uZW50IHRoYXQgbG9hZHMgZXhpc3RpbmcgY29udGFjdHMgZnJvbSBzdG9yYWdlLCBhbmQgc2F2ZXMgbmV3IG9uZXMuIEVhY2ggbmV3IGNvbnRhY3Qgc2hvdWxkIGhhdmUgYW4gYXV0by1nZW5lcmF0ZWQgaWRlbnRpZmllci5cclxuXHJcbmxldCBjb250YWN0Q29sbGVjdGlvbiA9IHtcclxuICAgIGdldEFsbENvbnRhY3RzICgpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdHNcIilcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDb2xsZWN0aW9uIiwiLy8gQSBDb250YWN0TGlzdCBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBhbGwgY29udGFjdHMuIEl0IHNob3VsZCBpbXBvcnQgdGhlIENvbnRhY3QgY29tcG9uZW50IGFuZCB0aGUgQ29udGFjdENvbGxlY3Rpb24gY29tcG9uZW50LlxyXG4vL1xyXG5pbXBvcnQgY29udGFjdHMgZnJvbSBcIi4vY29udGFjdFwiXHJcbmltcG9ydCBjb250YWN0Q29sbGVjdGlvbiBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvblwiXHJcblxyXG4iLCIvLyBJbiBtYWluLmpzLCBpbXBvcnQgdGhlIENvbnRhY3RMaXN0IGNvbXBvbmVudCBhbmQgdGhlIENvbnRhY3RGb3JtIGNvbXBvbmVudC5cclxuXHJcblxyXG5pbXBvcnQgQ29udGFjdExpc3QgZnJvbSBcIi4vY29udGFjdExpc3RcIlxyXG5cclxuIl19
