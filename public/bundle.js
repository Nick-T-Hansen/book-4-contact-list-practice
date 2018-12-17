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
    return contactSection;
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contact = _interopRequireDefault(require("./contact"));

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
//
const contactList = {
  appendContactList() {
    _contactCollection.default.getAllContacts().then(allContacts => {
      let contactListFragment = document.createDocumentFragment(); // Iterate over data in JSON and build HTML for each item

      allContacts.forEach(person => {
        let contactAddition = _contact.default.contactBuilder(person);

        contactListFragment.appendChild(contactAddition);
      }); // Append the HTML to the DOM

      let contactListContainer = document.querySelector("#display-container");
      contactListContainer.appendChild(contactListFragment);
    });
  }

};
var _default = contactList;
exports.default = _default;

},{"./contact":1,"./contactCollection":2}],4:[function(require,module,exports){
"use strict";

var _contactList = _interopRequireDefault(require("./contactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// In main.js, import the ContactList component and the ContactForm component.
_contactList.default.appendContactList();

},{"./contactList":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0TGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBRUEsTUFBTSxRQUFRLEdBQUc7QUFDYixFQUFBLGNBQWMsQ0FBQyxVQUFELEVBQWE7QUFDdkIsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7QUFFQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBd0IsVUFBVSxDQUFDLElBQW5DO0FBRUEsUUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUF6QjtBQUNBLElBQUEsa0JBQWtCLENBQUMsU0FBbkIsR0FBK0IsVUFBVSxDQUFDLFdBQTFDO0FBRUEsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxTQUFmLEdBQTJCLFVBQVUsQ0FBQyxPQUF0QztBQUVBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsV0FBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLGtCQUEzQjtBQUNBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsY0FBM0I7QUFFQSxXQUFPLGNBQVA7QUFDSDs7QUFsQlksQ0FBakI7ZUFxQmUsUTs7Ozs7Ozs7OztBQ3ZCZjtBQUVBLElBQUksaUJBQWlCLEdBQUc7QUFDcEIsRUFBQSxjQUFjLEdBQUk7QUFDZCxXQUFPLEtBQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ04sSUFETSxDQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURYLENBQVA7QUFFSDs7QUFKbUIsQ0FBeEI7ZUFPZSxpQjs7Ozs7Ozs7Ozs7QUNQZjs7QUFFQTs7OztBQUpBO0FBQ0E7QUFLQSxNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLGlCQUFpQixHQUFHO0FBQ2hCLCtCQUFrQixjQUFsQixHQUNDLElBREQsQ0FDTyxXQUFXLElBQUk7QUFDbEIsVUFBSSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsc0JBQVQsRUFBMUIsQ0FEa0IsQ0FFbEI7O0FBQ0EsTUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixNQUFNLElBQUk7QUFDMUIsWUFBSSxlQUFlLEdBQUcsaUJBQVMsY0FBVCxDQUF3QixNQUF4QixDQUF0Qjs7QUFDQSxRQUFBLG1CQUFtQixDQUFDLFdBQXBCLENBQWdDLGVBQWhDO0FBQ0gsT0FIRCxFQUhrQixDQU9sQjs7QUFDQSxVQUFJLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9CQUF2QixDQUEzQjtBQUNBLE1BQUEsb0JBQW9CLENBQUMsV0FBckIsQ0FBaUMsbUJBQWpDO0FBQ0gsS0FYRDtBQVlIOztBQWRlLENBQXBCO2VBaUJlLFc7Ozs7OztBQ3BCZjs7OztBQUhBO0FBTUEscUJBQVksaUJBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBBIGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGEgcGVyc29uJ3MgbmFtZShjb250YWN0TmFtZSksIHBob25lIG51bWJlcihjb250YWN0UGhvbmVOdW1iZXIpLCBhbmQgYWRkcmVzcyhjb250YWN0QWRkcmVzcykuXHJcblxyXG5jb25zdCBjb250YWN0cyA9IHtcclxuICAgIGNvbnRhY3RCdWlsZGVyKGNvbnRhY3RPYmopIHtcclxuICAgICAgICBsZXQgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIGNvbnRhY3ROYW1lLmlubmVyVGV4dCA9IGNvbnRhY3RPYmoubmFtZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhY3RQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnRhY3RQaG9uZU51bWJlci5pbm5lclRleHQgPSBjb250YWN0T2JqLnBob25lTnVtYmVyO1xyXG5cclxuICAgICAgICBsZXQgY29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb250YWN0QWRkcmVzcy5pbm5lclRleHQgPSBjb250YWN0T2JqLmFkZHJlc3NcclxuXHJcbiAgICAgICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpO1xyXG4gICAgICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZU51bWJlcik7XHJcbiAgICAgICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3MpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFjdFNlY3Rpb25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdHMiLCIvLyBBIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudCB0aGF0IGxvYWRzIGV4aXN0aW5nIGNvbnRhY3RzIGZyb20gc3RvcmFnZSwgYW5kIHNhdmVzIG5ldyBvbmVzLiBFYWNoIG5ldyBjb250YWN0IHNob3VsZCBoYXZlIGFuIGF1dG8tZ2VuZXJhdGVkIGlkZW50aWZpZXIuXHJcblxyXG5sZXQgY29udGFjdENvbGxlY3Rpb24gPSB7XHJcbiAgICBnZXRBbGxDb250YWN0cyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RzXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbGxlY3Rpb24iLCIvLyBBIENvbnRhY3RMaXN0IGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGFsbCBjb250YWN0cy4gSXQgc2hvdWxkIGltcG9ydCB0aGUgQ29udGFjdCBjb21wb25lbnQgYW5kIHRoZSBDb250YWN0Q29sbGVjdGlvbiBjb21wb25lbnQuXHJcbi8vXHJcbmltcG9ydCBjb250YWN0cyBmcm9tIFwiLi9jb250YWN0XCJcclxuXHJcbmltcG9ydCBjb250YWN0Q29sbGVjdGlvbiBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvblwiXHJcblxyXG5jb25zdCBjb250YWN0TGlzdCA9IHtcclxuICAgIGFwcGVuZENvbnRhY3RMaXN0KCkge1xyXG4gICAgICAgIGNvbnRhY3RDb2xsZWN0aW9uLmdldEFsbENvbnRhY3RzKClcclxuICAgICAgICAudGhlbiAoYWxsQ29udGFjdHMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29udGFjdExpc3RGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGRhdGEgaW4gSlNPTiBhbmQgYnVpbGQgSFRNTCBmb3IgZWFjaCBpdGVtXHJcbiAgICAgICAgICAgIGFsbENvbnRhY3RzLmZvckVhY2gocGVyc29uID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWN0QWRkaXRpb24gPSBjb250YWN0cy5jb250YWN0QnVpbGRlcihwZXJzb24pO1xyXG4gICAgICAgICAgICAgICAgY29udGFjdExpc3RGcmFnbWVudC5hcHBlbmRDaGlsZChjb250YWN0QWRkaXRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBIVE1MIHRvIHRoZSBET01cclxuICAgICAgICAgICAgbGV0IGNvbnRhY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgY29udGFjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdExpc3RGcmFnbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RMaXN0IiwiLy8gSW4gbWFpbi5qcywgaW1wb3J0IHRoZSBDb250YWN0TGlzdCBjb21wb25lbnQgYW5kIHRoZSBDb250YWN0Rm9ybSBjb21wb25lbnQuXHJcblxyXG5cclxuaW1wb3J0IENvbnRhY3RMaXN0IGZyb20gXCIuL2NvbnRhY3RMaXN0XCJcclxuaW1wb3J0IGNvbnRhY3RMaXN0IGZyb20gXCIuL2NvbnRhY3RMaXN0XCI7XHJcblxyXG5jb250YWN0TGlzdC5hcHBlbmRDb250YWN0TGlzdCgpO1xyXG5cclxuXHJcblxyXG4iXX0=
