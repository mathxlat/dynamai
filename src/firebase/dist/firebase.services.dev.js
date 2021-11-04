"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.firebaseAnalytics = void 0;

var _firestore = require("firebase/firestore");

var _analytics = require("firebase/analytics");

var _firebase = require("./firebase.connect");

var firebaseAnalytics = function firebaseAnalytics(data) {
  (0, _analytics.logEvent)(_firebase.analytics, data);
};

exports.firebaseAnalytics = firebaseAnalytics;

var createUser = function createUser(nameCollection, user) {
  var newDoc;
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _firestore.addDoc)((0, _firestore.collection)(_firebase.firestore, nameCollection), {
            date: _firestore.Timestamp.fromDate(new Date()),
            user: user
          }));

        case 3:
          newDoc = _context.sent;
          console.log(newDoc.id);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.createUser = createUser;