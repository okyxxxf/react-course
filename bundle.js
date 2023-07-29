"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.concat.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(function () {
  "use strict";

  var s = new ( /*#__PURE__*/function () {
      function _class(s) {
        _classCallCheck(this, _class);
        this.names = s.filter(function (s) {
          return s.length > 0;
        }).map(function (s) {
          return s.trim().toLowerCase();
        });
      }
      return _createClass(_class);
    }())(["Vilka", "Igor", "", "", "Ochmuan"]),
    e = new ( /*#__PURE__*/function () {
      function _class2(s, e, t) {
        _classCallCheck(this, _class2);
        this.cash = s, this.eu = e, this.rus = t;
      }
      _createClass(_class2, [{
        key: "calcCash",
        value: function calcCash() {
          var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var e = s;
          return this.cash.forEach(function (s) {
            e += s;
          }), e;
        }
      }, {
        key: "getRiskSponsor",
        value: function getRiskSponsor() {
          return this.eu[0];
        }
      }]);
      return _class2;
    }())([100, 1e4, 2e3], ["rbk", "mojang"], ["лукойй", "беларуснефть"]);
  new ( /*#__PURE__*/function () {
    function _class3(s) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Victor";
      var t = arguments.length > 2 ? arguments[2] : undefined;
      var r = arguments.length > 3 ? arguments[3] : undefined;
      _classCallCheck(this, _class3);
      this.owner = s, this.director = e, this.cash = t, this.emp = r;
    }
    _createClass(_class3, [{
      key: "makeBusiness",
      value: function makeBusiness(s, e, t) {
        var r = [].concat(_toConsumableArray(s), _toConsumableArray(e), ["unexpected sponsor"]).join(", ");
        console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp, "\n    And we have a sponsors: \n    ").concat(r, ".\n    Note. Be careful with ").concat(t, ". It's a huge risk."));
      }
    }]);
    return _class3;
  }())("Michael", "Victor", e.calcCash(), s.names).makeBusiness(e.eu, e.rus, e.riskSponsor);
})();