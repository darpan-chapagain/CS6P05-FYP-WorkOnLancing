"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resource/js/components/dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibility.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibility.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_component_availibilityForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app_component/availibilityForm.vue */ "./resources/js/components/app_component/availibilityForm.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty({
  name: "Availability",
  props: {},
  components: {
    AvailabilityForm: _app_component_availibilityForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      user: this.$store.state.auth.user,
      available: true,
      dialog: false,
      status: 2,
      // 1 = available, 2 = not available
      select: null,
      value: null,
      items: [1, 2, 3, 4]
    };
  },
  methods: {
    statusChange: function statusChange() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.status = _this.available ? 1 : 2;
                _context.next = 3;
                return _this.updateStatus(_this.status);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateStatus: function updateStatus(status) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios({
                  method: "post",
                  url: "employee/update/status/",
                  headers: {
                    Authorization: "Bearer " + _this2.token
                  }
                });

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return res.data;

              case 5:
                data = _context2.sent;
                console.log(data);
                return _context2.abrupt("return", data);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getStatus: function getStatus() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios({
                  method: "get",
                  url: "employee/get/status/",
                  headers: {
                    Authorization: "Bearer " + _this3.token
                  }
                });

              case 2:
                res = _context3.sent;
                _context3.next = 5;
                return res.data;

              case 5:
                data = _context3.sent;
                return _context3.abrupt("return", data.status);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getNum: function getNum() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios({
                  method: "get",
                  url: "employee/get/job/",
                  data: {
                    num: _this4.select
                  },
                  headers: {
                    Authorization: "Bearer " + _this4.token
                  }
                });

              case 2:
                res = _context4.sent;
                _context4.next = 5;
                return res.data;

              case 5:
                data = _context4.sent;
                return _context4.abrupt("return", data);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    submit: function submit() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios({
                  method: "post",
                  url: "employee/update/job/no",
                  data: {
                    job: _this5.select
                  },
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                  }
                });

              case 2:
                res = _context5.sent;

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    a_user: "auth/user",
    token: "auth/getToken"
  })),
  created: function created() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this6.getStatus();

            case 2:
              _this6.status = _context6.sent;
              _context6.next = 5;
              return _this6.getNum();

            case 5:
              data = _context6.sent;
              _context6.next = 8;
              return data.num;

            case 8:
              _this6.select = _context6.sent;
              console.log(_this6.select);

              if (_this6.status == 1) {
                _this6.available = true;
              } else {
                _this6.available = false;
              }

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
}, "computed", _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
  a_user: "auth/user",
  token: "auth/getToken"
}))));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibilityForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibilityForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AvailabilityForm",
  props: {
    select: Number
  },
  data: function data() {
    return {
      items: [1, 2, 3, 4],
      dialog: true
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default()({
                  method: "get",
                  url: "employee/update/job/",
                  headers: {
                    Authorization: "Bearer " + _this.token
                  }
                });

              case 2:
                res = _context.sent;
                alert(res.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  // async mounted() {
  //   let data = await this.getNum();
  //   this.select = await data.num;
  //   // alert(this.select);
  // },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    a_user: "auth/user",
    token: "auth/getToken"
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/jobCategoryForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/jobCategoryForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MyJobCategory",
  data: function data() {
    return {
      items: [],
      skill: [],
      search: null
    };
  },
  props: {
    mySkills: Array
  },
  watch: {
    model: function model(val) {
      var _this = this;

      if (val.length > 5) {
        this.$nextTick(function () {
          return _this.model.pop();
        });
      }
    }
  },
  methods: {
    getSkill: function getSkill() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res, skill_data, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("skill");

              case 2:
                res = _context.sent;
                skill_data = [];

                for (i = 0; i < res.data.length; i++) {
                  _this2.items.push(res.data[i].skill);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getMySkills: function getMySkills() {
      var _this3 = this;

      this.mySkills.forEach(function (skill, index) {
        _this3.skill.push(skill.all_skill.skill);

        console.log(skill.all_skill.skill);
      });
    },
    postSkill: function postSkill(val) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("api/jobs_skill", {
                  skill: val
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    submit: function submit() {
      var _this4 = this;

      console.log(this.skill);
      Object.entries(this.skill).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        console.log(key, value);

        _this4.postSkill(String(value));
      });
    }
  },
  created: function created() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this5.getSkill();

            case 2:
              _this5.getMySkills();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/myservices.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/myservices.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_component_jobCategoryForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app_component/jobCategoryForm.vue */ "./resources/js/components/app_component/jobCategoryForm.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MyServices",
  components: {
    MyJobCategory: _app_component_jobCategoryForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      mySkills: [],
      value: null,
      items: [],
      skill: []
    };
  },
  methods: {
    getMySkills: function getMySkills() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios({
                  method: "get",
                  url: "/employee/get/skill",
                  headers: {
                    Authorization: "Bearer " + _this.token
                  }
                });

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.data;

              case 5:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    postSkill: function postSkill(val) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var userForm, sk, res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userForm = new FormData();

                for (sk in _this2.skill) {
                  userForm.append("skill[]", _this2.skill[sk]);
                }

                _context2.next = 4;
                return axios({
                  method: "post",
                  url: "/employee/update/skill",
                  data: userForm,
                  headers: {
                    Authorization: "Bearer " + _this2.token,
                    "Content-Type": "multipart/form-data"
                  }
                });

              case 4:
                res = _context2.sent;
                _context2.next = 7;
                return res;

              case 7:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    submit: function submit() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.postSkill();

              case 2:
                data = _context3.sent;
                _context3.next = 5;
                return _this3.getMySkills();

              case 5:
                console.log(data);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getSkill: function getSkill() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var res, skill_data, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get("skill");

              case 2:
                res = _context4.sent;
                skill_data = [];

                for (i = 0; i < res.data.length; i++) {
                  _this4.items.push(res.data[i].skill);
                }

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  created: function created() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.getMySkills();

            case 2:
              _this5.mySkills = _context5.sent;
              _context5.next = 5;
              return _this5.getSkill();

            case 5:
              _this5.mySkills.forEach(function (skill, index) {
                _this5.skill.push(skill.all_skill.skill);

                console.log(skill.all_skill.skill);
              });

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    a_user: "auth/user",
    token: "auth/getToken"
  })),
  watch: {
    model: function model(val) {
      var _this6 = this;

      if (val.length > 5) {
        this.$nextTick(function () {
          return _this6.model.pop();
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/proposals.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/proposals.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_component_cardJobDetails_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app_component/cardJobDetails.vue */ "./resources/js/components/app_component/cardJobDetails.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Proposals",
  components: {
    JobDetail: _app_component_cardJobDetails_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    proposals: [Object, Array]
  },
  data: function data() {
    return {
      snackbar1: false,
      text1: "Error!",
      snackbar2: false,
      text2: "Error!",
      timeout: 2000,
      dialog: false,
      value: null
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)({
    updateRequests: "requests/fetchProposals"
  })), {}, {
    test: function test() {
      alert("yooo");
    },
    action: function action(ac) {
      if (ac == "accept") {
        this.accept();
      } else if (ac == "reject") {
        this.reject();
      } else if (ac == "message") {}
    },
    accept: function accept() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios({
                  method: "post",
                  url: "employee/accept/job/".concat(_this.proposals.id, "/"),
                  data: {
                    status: "accept"
                  }
                }).then(function (res) {
                  _this.snackbar2 = true;
                  _this.text2 = "Offer Accepted";

                  _this.updateRequests();

                  setTimeout(function () {
                    return _this.$router.push({
                      name: "dashboard.employee"
                    })["catch"](function () {});
                  }, 2000);
                });

              case 2:
                res = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    reject: function reject() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios({
                  method: "post",
                  url: "employee/accept/job/".concat(_this2.proposals.id, "/"),
                  data: {
                    status: "reject"
                  }
                }).then(function (res) {
                  console.log(res);
                  _this2.snackbar1 = true;
                  _this2.text1 = "Offer Rejected";

                  _this2.updateRequests();

                  setTimeout(function () {
                    return _this2.$router.push({
                      name: "dashboard.employee"
                    })["catch"](function () {});
                  }, 2000);
                });

              case 2:
                res = _context2.sent;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/EmployeeDashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/EmployeeDashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_component_filter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app_component/filter.vue */ "./resources/js/components/app_component/filter.vue");
/* harmony import */ var _app_component_dashboardJob_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app_component/dashboardJob.vue */ "./resources/js/components/app_component/dashboardJob.vue");
/* harmony import */ var _app_component_user_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app_component/user.vue */ "./resources/js/components/app_component/user.vue");
/* harmony import */ var _app_component_availibility_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app_component/availibility.vue */ "./resources/js/components/app_component/availibility.vue");
/* harmony import */ var _app_component_myservices_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app_component/myservices.vue */ "./resources/js/components/app_component/myservices.vue");
/* harmony import */ var _app_component_proposals_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app_component/proposals.vue */ "./resources/js/components/app_component/proposals.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FilterBy: _app_component_filter_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Jobs: _app_component_dashboardJob_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    User: _app_component_user_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Availability: _app_component_availibility_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    MyServices: _app_component_myservices_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Proposals: _app_component_proposals_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  name: "dashboard",
  data: function data() {
    return {
      category: "",
      name: "",
      min: "0",
      max: "70000",
      allJobs: []
    };
  },
  methods: _objectSpread(_objectSpread({
    search: function search() {
      console.log(this.name);
    },
    getCategory: function getCategory(value) {
      if (value) {
        console.log(value);
        this.category = value;
      } else {
        this.category = [];
      }
    },
    getRange: function getRange(value) {
      if (value) {
        console.log(value[0], value[1]);
        this.min = value[0];
        this.max = value[1];
      } else {
        this.min = "0";
        this.max = "70000";
      }
    },
    fetchJobs: function fetchJobs() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_7___default().get("/jobs/all");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.data;

              case 5:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapActions)({
    fetchProposals: "requests/fetchProposals"
  })), {}, {
    seeAll: function seeAll() {
      this.$router.push({
        name: "offer",
        params: {
          proposals: this.allProposals
        }
      })["catch"](function () {});
    },
    filterByCategory: function filterByCategory(allJobs) {
      var _this = this;

      return allJobs.filter(function (allJobs) {
        return !allJobs.job_category.category_name.indexOf(_this.category);
      });
    },
    filterByName: function filterByName(allJobs) {
      var _this2 = this;

      return allJobs.filter(function (allJobs) {
        return !allJobs.title.toLowerCase().indexOf(_this2.name.toLowerCase());
      });
    },
    filterByRange: function filterByRange(allJobs) {
      var _this3 = this;

      return allJobs.filter(function (allJobs) {
        return allJobs.project_rate > _this3.min && allJobs.project_rate < _this3.max ? allJobs : "";
      });
    }
  }),
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this4.fetchJobs();

            case 2:
              _this4.allJobs = _context2.sent;
              _context2.next = 5;
              return _this4.fetchProposals();

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapGetters)({
    allProposals: "requests/job_Proposal",
    user: "auth/user"
  })), {}, {
    filterJobs: function filterJobs() {
      return this.filterByRange(this.filterByCategory(this.filterByName(this.allJobs)));
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/UserDashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/UserDashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_component_filter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app_component/filter.vue */ "./resources/js/components/app_component/filter.vue");
/* harmony import */ var _app_component_dashboardJob_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app_component/dashboardJob.vue */ "./resources/js/components/app_component/dashboardJob.vue");
/* harmony import */ var _app_component_user_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app_component/user.vue */ "./resources/js/components/app_component/user.vue");
/* harmony import */ var _app_component_requests_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app_component/requests.vue */ "./resources/js/components/app_component/requests.vue");
/* harmony import */ var _app_component_userCard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app_component/userCard.vue */ "./resources/js/components/app_component/userCard.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FilterBy: _app_component_filter_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Jobs: _app_component_dashboardJob_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    User: _app_component_user_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Requests: _app_component_requests_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Users: _app_component_userCard_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  name: "dashboard",
  data: function data() {
    return {
      category: "",
      name: "",
      min: "0",
      max: "70000",
      allUsers: [],
      filterU: [] // allRequests: [],

    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)({
    allRequests: "requests/job_Request"
  })), {}, {
    filterUsers: function filterUsers() {
      return this.filterByRange(this.filterByCategory(this.filterByName(this.allUsers)));
    }
  }),
  methods: _objectSpread(_objectSpread({
    search: function search() {
      console.log(this.name);
    },
    getCategory: function getCategory(value) {
      if (value) {
        console.log(value);
        this.category = value;
      } else {
        this.category = [];
      }
    },
    getRange: function getRange(value) {
      if (value) {
        console.log(value[0], value[1]);
        this.min = value[0];
        this.max = value[1];
      } else {
        this.min = "0";
        this.max = "70000";
      }
    },
    fetchUsers: function fetchUsers() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("employee/all");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.data;

              case 5:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapActions)({
    fetchRequests: "requests/fetchRequest"
  })), {}, {
    seeAll: function seeAll() {
      this.$router.push({
        name: "jobRequest",
        params: {
          job: this.allRequests
        }
      })["catch"](function () {});
    },
    filterByCategory: function filterByCategory(allUsers) {
      var _this = this;

      return allUsers.filter(function (allUsers) {
        return !allUsers.job_categories.category_name.indexOf(_this.category);
      });
    },
    filterByName: function filterByName(allUsers) {
      var _this2 = this;

      return allUsers.filter(function (allUsers) {
        return !allUsers.user.first_name.toLowerCase().indexOf(_this2.name.toLowerCase()) || !allUsers.user.last_name.toLowerCase().indexOf(_this2.name.toLowerCase());
      });
    },
    filterByRange: function filterByRange(allUsers) {
      var _this3 = this;

      return allUsers.filter(function (allUsers) {
        return allUsers.project_rate > _this3.min && allUsers.project_rate < _this3.max ? allUsers : "";
      });
    }
  }),
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this4.fetchUsers();

            case 2:
              _this4.allUsers = _context2.sent;
              // this.filterU = this.allUsers;
              console.log(_this4.allUsers);
              _context2.next = 6;
              return _this4.fetchRequests();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vuetify/src/components/VSwitch/VSwitch.sass":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vuetify/src/components/VSwitch/VSwitch.sass ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme--light.v-input--switch .v-input--switch__thumb {\n  color: #FFFFFF;\n}\n.theme--light.v-input--switch .v-input--switch__track {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb {\n  color: #fafafa !important;\n}\n.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track {\n  color: rgba(0, 0, 0, 0.12) !important;\n}\n\n.theme--dark.v-input--switch .v-input--switch__thumb {\n  color: #bdbdbd;\n}\n.theme--dark.v-input--switch .v-input--switch__track {\n  color: rgba(255, 255, 255, 0.3);\n}\n.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb {\n  color: #424242 !important;\n}\n.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track {\n  color: rgba(255, 255, 255, 0.1) !important;\n}\n\n.v-input--switch__track, .v-input--switch__thumb {\n  background-color: currentColor;\n  pointer-events: none;\n  transition: inherit;\n}\n.v-input--switch__track {\n  border-radius: 8px;\n  width: 36px;\n  height: 14px;\n  left: 2px;\n  position: absolute;\n  opacity: 0.6;\n  right: 2px;\n  top: calc(50% - 7px);\n}\n.v-input--switch__thumb {\n  border-radius: 50%;\n  top: calc(50% - 10px);\n  height: 20px;\n  position: relative;\n  width: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-input--switch .v-input--selection-controls__input {\n  width: 38px;\n}\n.v-input--switch .v-input--selection-controls__ripple {\n  top: calc(50% - 24px);\n}\n.v-input--switch.v-input--dense .v-input--switch__thumb {\n  width: 18px;\n  height: 18px;\n}\n.v-input--switch.v-input--dense .v-input--switch__track {\n  height: 12px;\n  width: 32px;\n}\n.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track {\n  height: 22px;\n  width: 44px;\n  top: calc(50% - 12px);\n  left: -3px;\n}\n.v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  top: calc(50% - 22px);\n}\n.v-input--switch.v-input--is-dirty.v-input--is-disabled {\n  opacity: 0.6;\n}\n.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple {\n  left: -14px;\n}\n.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  left: -12px;\n}\n.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb {\n  transform: translate(20px, 0);\n}\n.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple {\n  right: -14px;\n}\n.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  right: -12px;\n}\n.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb {\n  transform: translate(-20px, 0);\n}\n.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.v-input--switch--inset .v-input--switch__track,\n.v-input--switch--inset .v-input--selection-controls__input {\n  width: 48px;\n}\n.v-input--switch--inset .v-input--switch__track {\n  border-radius: 14px;\n  height: 28px;\n  left: -4px;\n  opacity: 0.32;\n  top: calc(50% - 14px);\n}\n.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb {\n  transform: translate(0, 0) !important;\n}\n.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb {\n  transform: translate(-6px, 0) !important;\n}\n.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb {\n  transform: translate(20px, 0) !important;\n}\n.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb {\n  transform: translate(-26px, 0) !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vuetify/src/components/VSwitch/VSwitch.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSwitch/VSwitch.sass ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../../postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../../sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./VSwitch.sass */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vuetify/src/components/VSwitch/VSwitch.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/app_component/availibility.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/app_component/availibility.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_availibility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./availibility.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibility.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_availibility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app_component/availibilityForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/app_component/availibilityForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_availibilityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./availibilityForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibilityForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_availibilityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app_component/jobCategoryForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/app_component/jobCategoryForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_jobCategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./jobCategoryForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/jobCategoryForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_jobCategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app_component/myservices.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/app_component/myservices.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myservices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./myservices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/myservices.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myservices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app_component/proposals.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/app_component/proposals.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proposals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./proposals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/proposals.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proposals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/EmployeeDashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/EmployeeDashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/EmployeeDashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/UserDashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/UserDashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/UserDashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app_component/availibility.vue?vue&type=template&id=403e301e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/app_component/availibility.vue?vue&type=template&id=403e301e& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_availibility_vue_vue_type_template_id_403e301e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_availibility_vue_vue_type_template_id_403e301e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_availibility_vue_vue_type_template_id_403e301e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./availibility.vue?vue&type=template&id=403e301e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibility.vue?vue&type=template&id=403e301e&");


/***/ }),

/***/ "./resources/js/components/app_component/availibilityForm.vue?vue&type=template&id=44f327fc&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/app_component/availibilityForm.vue?vue&type=template&id=44f327fc&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_availibilityForm_vue_vue_type_template_id_44f327fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_availibilityForm_vue_vue_type_template_id_44f327fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_availibilityForm_vue_vue_type_template_id_44f327fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./availibilityForm.vue?vue&type=template&id=44f327fc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibilityForm.vue?vue&type=template&id=44f327fc&scoped=true&");


/***/ }),

/***/ "./resources/js/components/app_component/jobCategoryForm.vue?vue&type=template&id=38fb87d4&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/app_component/jobCategoryForm.vue?vue&type=template&id=38fb87d4& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jobCategoryForm_vue_vue_type_template_id_38fb87d4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jobCategoryForm_vue_vue_type_template_id_38fb87d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jobCategoryForm_vue_vue_type_template_id_38fb87d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./jobCategoryForm.vue?vue&type=template&id=38fb87d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/jobCategoryForm.vue?vue&type=template&id=38fb87d4&");


/***/ }),

/***/ "./resources/js/components/app_component/myservices.vue?vue&type=template&id=edc257f6&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/app_component/myservices.vue?vue&type=template&id=edc257f6& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_myservices_vue_vue_type_template_id_edc257f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_myservices_vue_vue_type_template_id_edc257f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_myservices_vue_vue_type_template_id_edc257f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./myservices.vue?vue&type=template&id=edc257f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/myservices.vue?vue&type=template&id=edc257f6&");


/***/ }),

/***/ "./resources/js/components/app_component/proposals.vue?vue&type=template&id=298ac116&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/app_component/proposals.vue?vue&type=template&id=298ac116& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proposals_vue_vue_type_template_id_298ac116___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proposals_vue_vue_type_template_id_298ac116___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_proposals_vue_vue_type_template_id_298ac116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./proposals.vue?vue&type=template&id=298ac116& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/proposals.vue?vue&type=template&id=298ac116&");


/***/ }),

/***/ "./resources/js/components/pages/EmployeeDashboard.vue?vue&type=template&id=e2fd9840&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pages/EmployeeDashboard.vue?vue&type=template&id=e2fd9840&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeDashboard_vue_vue_type_template_id_e2fd9840_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeDashboard_vue_vue_type_template_id_e2fd9840_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeDashboard_vue_vue_type_template_id_e2fd9840_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeDashboard.vue?vue&type=template&id=e2fd9840&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/EmployeeDashboard.vue?vue&type=template&id=e2fd9840&scoped=true&");


/***/ }),

/***/ "./resources/js/components/pages/UserDashboard.vue?vue&type=template&id=24e5d6e3&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pages/UserDashboard.vue?vue&type=template&id=24e5d6e3&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboard_vue_vue_type_template_id_24e5d6e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboard_vue_vue_type_template_id_24e5d6e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboard_vue_vue_type_template_id_24e5d6e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDashboard.vue?vue&type=template&id=24e5d6e3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/UserDashboard.vue?vue&type=template&id=24e5d6e3&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibility.vue?vue&type=template&id=403e301e&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibility.vue?vue&type=template&id=403e301e& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h6", { staticClass: "text-center" }, [_vm._v("Availability")]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "\n      manage-time\n      d-flex\n      flex-row\n      align-items-center\n      justify-content-around\n      mx-5\n    ",
      },
      [
        _c("v-switch", {
          attrs: { inset: "" },
          on: { change: _vm.statusChange },
          model: {
            value: _vm.available,
            callback: function ($$v) {
              _vm.available = $$v
            },
            expression: "available",
          },
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "time-chip" },
          [
            _vm.available
              ? _c("v-chip", { attrs: { color: "green" } }, [
                  _vm._v(" Available For Work "),
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.available
              ? _c("v-chip", { attrs: { color: "red" } }, [
                  _vm._v(" Not Taking Work "),
                ])
              : _vm._e(),
          ],
          1
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "\n      manage-job\n      d-flex\n      flex-row\n      align-items-center\n      justify-content-around\n    ",
      },
      [
        _c("h6", { staticClass: "text-center my-0" }, [
          _vm._v("Edit number of jobs at same time"),
        ]),
        _vm._v(" "),
        _c(
          "v-dialog",
          {
            attrs: { width: "600" },
            scopedSlots: _vm._u([
              {
                key: "activator",
                fn: function (ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _c(
                      "v-btn",
                      _vm._g(
                        _vm._b(
                          {
                            attrs: {
                              outlined: "",
                              color: "indigo",
                              mid: "",
                              icon: "",
                              text: "",
                            },
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        on
                      ),
                      [
                        _vm._v(
                          "\n          " + _vm._s(_vm.select) + "\n        "
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
            model: {
              value: _vm.dialog,
              callback: function ($$v) {
                _vm.dialog = $$v
              },
              expression: "dialog",
            },
          },
          [
            _vm._v(" "),
            _c(
              "v-card",
              [
                _c(
                  "v-toolbar",
                  { attrs: { dark: "", color: "primary" } },
                  [_c("v-toolbar-title", [_vm._v("Job Detail")])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-container",
                  {
                    staticStyle: {
                      "max-width": "400px",
                      margin: "20px auto",
                      display: "flex",
                    },
                  },
                  [
                    _c(
                      "v-form",
                      {
                        ref: "form",
                        staticStyle: { width: "100%", margin: "0 auto" },
                      },
                      [
                        _c("v-autocomplete", {
                          attrs: {
                            items: _vm.items,
                            rules: [
                              function (v) {
                                return !!v || "Please enter a value"
                              },
                            ],
                            label:
                              "Choose how many assignment you can do at a time!",
                            required: "",
                          },
                          model: {
                            value: _vm.select,
                            callback: function ($$v) {
                              _vm.select = $$v
                            },
                            expression: "select",
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticStyle: {
                              width: "100%",
                              "text-align": "center",
                            },
                            attrs: { color: "success", type: "submit" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.submit.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("\n              Save\n            ")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-bottom-navigation",
                  {
                    staticClass: "mb-0",
                    attrs: {
                      value: _vm.value,
                      "background-color": "blue",
                      grow: "",
                    },
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function ($event) {
                            _vm.dialog = false
                          },
                        },
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v("mdi-close"),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibilityForm.vue?vue&type=template&id=44f327fc&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/availibilityForm.vue?vue&type=template&id=44f327fc&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    {
      staticStyle: {
        "max-width": "400px",
        margin: "20px auto",
        display: "flex",
      },
    },
    [
      _c(
        "v-form",
        { ref: "form", staticStyle: { width: "100%", margin: "0 auto" } },
        [
          _c("v-autocomplete", {
            attrs: {
              items: _vm.items,
              rules: [
                function (v) {
                  return !!v || "Please enter a value"
                },
              ],
              label: "Choose how many assignment you can do at a time!",
              required: "",
            },
            model: {
              value: _vm.select,
              callback: function ($$v) {
                _vm.select = $$v
              },
              expression: "select",
            },
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticStyle: { width: "100%", "text-align": "center" },
              attrs: { color: "success", type: "submit" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.submit.apply(null, arguments)
                },
              },
            },
            [_vm._v("\n      Save\n    ")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/jobCategoryForm.vue?vue&type=template&id=38fb87d4&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/jobCategoryForm.vue?vue&type=template&id=38fb87d4& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    {
      staticStyle: {
        "max-width": "400px",
        margin: "20px auto",
        display: "flex",
      },
      attrs: { fluid: "" },
    },
    [
      _c(
        "form",
        { ref: "form", staticStyle: { width: "100%", margin: "0 auto" } },
        [
          _c("v-autocomplete", {
            attrs: {
              items: _vm.items,
              clearable: "",
              "hide-selected": "",
              "persistent-hint": "",
              label: "Skills",
              dense: "",
              multiple: "",
              required: "",
              "small-chips": "",
            },
            model: {
              value: _vm.skill,
              callback: function ($$v) {
                _vm.skill = $$v
              },
              expression: "skill",
            },
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticStyle: { width: "100%", "text-align": "center" },
              attrs: { color: "success" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.submit.apply(null, arguments)
                },
              },
            },
            [_vm._v("\n      submit\n    ")]
          ),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/myservices.vue?vue&type=template&id=edc257f6&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/myservices.vue?vue&type=template&id=edc257f6& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "my-services" }, [
    _c(
      "div",
      {
        staticClass:
          "\n      title-btn\n      manage-job\n      d-flex\n      flex-row\n      align-items-center\n      justify-content-around\n    ",
      },
      [
        _c("h6", [_vm._v("My Job Skills")]),
        _vm._v(" "),
        _c(
          "v-dialog",
          {
            attrs: { width: "700" },
            scopedSlots: _vm._u([
              {
                key: "activator",
                fn: function (ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _c(
                      "v-btn",
                      _vm._g(
                        _vm._b(
                          {
                            attrs: {
                              outlined: "",
                              color: "indigo",
                              small: "",
                              fab: "",
                            },
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        on
                      ),
                      [_c("v-icon", [_vm._v("mdi-pencil")])],
                      1
                    ),
                  ]
                },
              },
            ]),
            model: {
              value: _vm.dialog,
              callback: function ($$v) {
                _vm.dialog = $$v
              },
              expression: "dialog",
            },
          },
          [
            _vm._v(" "),
            _c(
              "v-card",
              [
                _c(
                  "v-toolbar",
                  { attrs: { dark: "", color: "primary" } },
                  [_c("v-toolbar-title", [_vm._v("Job Detail")])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-container",
                  {
                    staticStyle: {
                      "max-width": "400px",
                      margin: "20px auto",
                      display: "flex",
                    },
                    attrs: { fluid: "" },
                  },
                  [
                    _c(
                      "form",
                      {
                        ref: "form",
                        staticStyle: { width: "100%", margin: "0 auto" },
                      },
                      [
                        _c("v-autocomplete", {
                          attrs: {
                            items: _vm.items,
                            clearable: "",
                            "hide-selected": "",
                            "persistent-hint": "",
                            label: "Skills",
                            dense: "",
                            multiple: "",
                            required: "",
                            "small-chips": "",
                          },
                          model: {
                            value: _vm.skill,
                            callback: function ($$v) {
                              _vm.skill = $$v
                            },
                            expression: "skill",
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticStyle: {
                              width: "100%",
                              "text-align": "center",
                            },
                            attrs: { color: "success" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.submit.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("\n              submit\n            ")]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-bottom-navigation",
                  {
                    staticClass: "mb-0",
                    attrs: {
                      value: _vm.value,
                      "background-color": "blue",
                      grow: "",
                    },
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function ($event) {
                            _vm.dialog = false
                          },
                        },
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v("mdi-close"),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/proposals.vue?vue&type=template&id=298ac116&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/proposals.vue?vue&type=template&id=298ac116& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "proposals p-2" },
    [
      _c(
        "v-snackbar",
        {
          attrs: {
            timeout: _vm.timeout,
            top: "",
            color: "red accent-2",
            right: "",
          },
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function (ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { color: "white", text: "" },
                        on: {
                          click: function ($event) {
                            _vm.snackbar = false
                          },
                        },
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("\n        Close\n      ")]
                  ),
                ]
              },
            },
          ]),
          model: {
            value: _vm.snackbar1,
            callback: function ($$v) {
              _vm.snackbar1 = $$v
            },
            expression: "snackbar1",
          },
        },
        [_vm._v("\n    " + _vm._s(_vm.text1) + "\n\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { timeout: _vm.timeout, top: "", color: "success", right: "" },
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function (ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { color: "white", text: "" },
                        on: {
                          click: function ($event) {
                            _vm.snackbar2 = false
                          },
                        },
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("\n        Close\n      ")]
                  ),
                ]
              },
            },
          ]),
          model: {
            value: _vm.snackbar2,
            callback: function ($$v) {
              _vm.snackbar2 = $$v
            },
            expression: "snackbar2",
          },
        },
        [_vm._v("\n    " + _vm._s(_vm.text2) + "\n\n    ")]
      ),
      _vm._v(" "),
      _vm.proposals
        ? _c("div", [
            _c(
              "div",
              { staticClass: "dialog" },
              [
                _c(
                  "v-dialog",
                  {
                    attrs: {
                      fullscreen: "",
                      "hide-overlay": "",
                      transition: "dialog-bottom-transition",
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c("v-card-actions", [
                                _c(
                                  "a",
                                  _vm._g(
                                    _vm._b(
                                      {
                                        staticStyle: { width: "100%" },
                                        attrs: { text: "" },
                                      },
                                      "a",
                                      attrs,
                                      false
                                    ),
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-alert",
                                      {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          border: "left",
                                          "colored-border": "",
                                          color: "deep-purple accent-4",
                                          elevation: "2",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "d-flex" },
                                          [
                                            _c(
                                              "v-avatar",
                                              {
                                                staticClass: "mr-3",
                                                attrs: { size: "40" },
                                              },
                                              [
                                                _c("img", {
                                                  staticClass: "img-fluid",
                                                  staticStyle: {
                                                    "object-fit": "cover",
                                                    "object-position": "center",
                                                    width: "100%",
                                                  },
                                                  attrs: {
                                                    src:
                                                      "/" +
                                                      _vm.proposals.user
                                                        .profile_path,
                                                    alt: "image",
                                                  },
                                                }),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v(
                                                _vm._s(_vm.proposals.title) +
                                                  " Job"
                                              ),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("v-divider"),
                                  ],
                                  1
                                ),
                              ]),
                            ]
                          },
                        },
                      ],
                      null,
                      false,
                      859947047
                    ),
                    model: {
                      value: _vm.dialog,
                      callback: function ($$v) {
                        _vm.dialog = $$v
                      },
                      expression: "dialog",
                    },
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "v-card",
                      [
                        _c(
                          "v-toolbar",
                          { attrs: { dark: "", color: "primary" } },
                          [
                            _c("v-toolbar-title", [_vm._v("Proposals Detail")]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-toolbar-items",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "", dark: "" },
                                    on: {
                                      click: function ($event) {
                                        _vm.dialog = false
                                      },
                                    },
                                  },
                                  [_c("v-icon", [_vm._v("mdi-close")])],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticStyle: { "min-height": "100vh" } },
                          [
                            _c("JobDetail", {
                              attrs: { a_job_detail: _vm.proposals },
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "btns",
                                staticStyle: {
                                  display: "flex",
                                  "flex-direction": "column",
                                  "align-items": "center",
                                  "justify-content": "center",
                                  "margin-top": "50px",
                                },
                              },
                              [
                                _c("div", { staticClass: "m-4" }, [
                                  _c(
                                    "div",
                                    { staticClass: "message" },
                                    [
                                      _c("h5", { staticClass: "my-0" }, [
                                        _vm._v("Do you accept this Offer?"),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "m-2 mt-4",
                                          attrs: {
                                            rounded: "",
                                            color: "Green",
                                            dark: "",
                                            width: "100%",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.action("accept")
                                            },
                                          },
                                        },
                                        [_vm._v("Accept!")]
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "m-4" }, [
                                  _c(
                                    "div",
                                    { staticClass: "message" },
                                    [
                                      _c("h5", { staticClass: "my-0" }, [
                                        _vm._v("Do you have questions?"),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "m-2 mt-4",
                                          attrs: {
                                            rounded: "",
                                            color: "primary",
                                            dark: "",
                                            width: "100%",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.action("message")
                                            },
                                          },
                                        },
                                        [_vm._v("Contact!")]
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "m-4" }, [
                                  _c(
                                    "div",
                                    { staticClass: "message" },
                                    [
                                      _c("h5", { staticClass: "my-0" }, [
                                        _vm._v("Do not like the Offer?"),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "m-2 mt-4",
                                          attrs: {
                                            rounded: "",
                                            color: "red",
                                            dark: "",
                                            width: "100%",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.action("reject")
                                            },
                                          },
                                        },
                                        [_vm._v("Reject!")]
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-bottom-navigation",
                          {
                            attrs: {
                              value: _vm.value,
                              "background-color": "blue",
                              grow: "",
                            },
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "" },
                                on: {
                                  click: function ($event) {
                                    _vm.dialog = false
                                  },
                                },
                              },
                              [
                                _c("v-icon", { attrs: { color: "white" } }, [
                                  _vm._v("mdi-close"),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ])
        : _c(
            "div",
            [
              _c(
                "v-alert",
                {
                  attrs: {
                    outlined: "",
                    type: "warning",
                    prominent: "",
                    border: "left",
                  },
                },
                [_vm._v("\n      You do not have any job proposals yet\n    ")]
              ),
            ],
            1
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/EmployeeDashboard.vue?vue&type=template&id=e2fd9840&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/EmployeeDashboard.vue?vue&type=template&id=e2fd9840&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pt-5 m-6 main-container" },
    [
      _c(
        "div",
        {
          staticClass: "p-5",
          staticStyle: { display: "flex", "justify-content": "center" },
        },
        [
          _c("v-text-field", {
            staticStyle: { "max-width": "600px" },
            attrs: {
              label: "Search",
              "hide-details": "",
              "prepend-icon": "mdi-magnify",
              "single-line": "",
            },
            on: {
              keyup: function ($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.search.apply(null, arguments)
              },
            },
            model: {
              value: _vm.name,
              callback: function ($$v) {
                _vm.name = $$v
              },
              expression: "name",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "dashboard-container" },
        [
          _c(
            "v-col",
            {
              attrs: {
                cols: "12",
                sm: "12",
                md: "6",
                lg: "3",
                "order-md": "1",
                "order-sm": "1",
                "order-lg": "1",
              },
            },
            [
              _c(
                "v-sheet",
                { attrs: { rounded: "lg", "min-height": "268" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "p-3", attrs: { elevation: "6" } },
                    [
                      _c("User", {
                        attrs: {
                          name: _vm.user.first_name + " " + _vm.user.last_name,
                          image: _vm.user.profile_path,
                        },
                      }),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("Availability", { staticClass: "test" }),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("MyServices"),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "right-contents",
              attrs: {
                cols: "12",
                sm: "12",
                md: "6",
                lg: "3",
                "order-md": "2",
                "order-sm": "2",
                "order-lg": "3",
              },
            },
            [
              _c(
                "v-sheet",
                { attrs: { rounded: "lg", "min-height": "268" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "p-3", attrs: { elevation: "6" } },
                    [
                      _c("h3", [_vm._v("Filter Jobs")]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("FilterBy", {
                        staticClass: "filter",
                        on: {
                          categoryChange: _vm.getCategory,
                          rangeChange: _vm.getRange,
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-sheet",
                { attrs: { rounded: "lg", "min-height": "268" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "p-3 mt-5", attrs: { elevation: "6" } },
                    [
                      _c("div", { staticClass: "proposal-title" }, [
                        _c("h3", { staticClass: "text-center" }, [
                          _vm._v("Proposals"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _vm.allProposals
                        ? _c(
                            "div",
                            [
                              _vm._l(3, function (index) {
                                return _c(
                                  "div",
                                  { key: index },
                                  [
                                    _vm.allProposals.job[index - 1]
                                      ? _c("Proposals", {
                                          attrs: {
                                            proposals:
                                              _vm.allProposals.job[index - 1],
                                          },
                                        })
                                      : _vm._e(),
                                  ],
                                  1
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { width: "100%" },
                                  on: { click: _vm.seeAll },
                                },
                                [_vm._v("See All")]
                              ),
                            ],
                            2
                          )
                        : _c(
                            "div",
                            [
                              _c(
                                "v-alert",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    border: "left",
                                    "colored-border": "",
                                    color: "red accent-4",
                                    elevation: "2",
                                  },
                                },
                                [
                                  _c("div", { staticClass: "d-flex ml-5" }, [
                                    _c("p", [_vm._v('No Proposal yet!"')]),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "right-contents",
              attrs: {
                cols: "12",
                sm: "12",
                md: "12",
                lg: "6",
                "order-md": "3",
                "order-sm": "3",
                "order-lg": "2",
              },
            },
            [
              _c(
                "v-sheet",
                { attrs: { "min-height": "70vh", rounded: "lg" } },
                [
                  _c(
                    "v-card",
                    { attrs: { elevation: "6" } },
                    [
                      _c("div", { staticClass: "title px-4 pt-5" }, [
                        _c("h1", [_vm._v("Find Work")]),
                      ]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("div", { staticClass: "px-3 pt-4" }, [
                        _vm._v(
                          "\n            View and apply to Jobs posted by recruiters\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("Jobs", { attrs: { allJobs: _vm.filterJobs } }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/UserDashboard.vue?vue&type=template&id=24e5d6e3&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/UserDashboard.vue?vue&type=template&id=24e5d6e3&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pt-5 m-6 main-container" },
    [
      _c(
        "div",
        {
          staticClass: "p-5",
          staticStyle: { display: "flex", "justify-content": "center" },
        },
        [
          _c("v-text-field", {
            staticStyle: { "max-width": "600px" },
            attrs: {
              label: "Search",
              "hide-details": "",
              "prepend-icon": "mdi-magnify",
              "single-line": "",
            },
            on: {
              keyup: function ($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.search.apply(null, arguments)
              },
            },
            model: {
              value: _vm.name,
              callback: function ($$v) {
                _vm.name = $$v
              },
              expression: "name",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "dashboard-container" },
        [
          _c(
            "v-col",
            {
              staticClass: "right-contents",
              attrs: {
                cols: "12",
                sm: "12",
                md: "6",
                lg: "3",
                "order-md": "1",
                "order-sm": "1",
                "order-lg": "3",
                "order-xs": "1",
              },
            },
            [
              _c(
                "v-sheet",
                { attrs: { rounded: "lg", "min-height": "268" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "p-3", attrs: { elevation: "6" } },
                    [
                      _c("div", { staticClass: "proposal-title" }, [
                        _c("h3", { staticClass: "text-center" }, [
                          _vm._v("Job Requests"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _vm.allRequests
                        ? _c(
                            "div",
                            [
                              _vm._l(3, function (index) {
                                return _c("div", { key: index }, [
                                  _c(
                                    "div",
                                    [
                                      _vm.allRequests[index - 1]
                                        ? _c("Requests", {
                                            attrs: {
                                              request:
                                                _vm.allRequests[index - 1],
                                            },
                                          })
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                ])
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { width: "100%" },
                                  on: { click: _vm.seeAll },
                                },
                                [_vm._v("See All")]
                              ),
                            ],
                            2
                          )
                        : _c(
                            "div",
                            [
                              _c(
                                "v-alert",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    border: "left",
                                    "colored-border": "",
                                    color: "red accent-4",
                                    elevation: "2",
                                  },
                                },
                                [
                                  _c("div", { staticClass: "d-flex ml-5" }, [
                                    _c("p", [_vm._v('No requests yet!"')]),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              attrs: {
                cols: "12",
                sm: "12",
                md: "6",
                lg: "3",
                "order-md": "2",
                "order-sm": "2",
                "order-lg": "1",
                "order-xs": "2",
              },
            },
            [
              _c(
                "v-sheet",
                { attrs: { rounded: "lg", "min-height": "268" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "p-3", attrs: { elevation: "6" } },
                    [
                      _c("h3", [_vm._v("Filter")]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("FilterBy", {
                        staticClass: "filter",
                        on: {
                          categoryChange: _vm.getCategory,
                          rangeChange: _vm.getRange,
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "right-contents",
              attrs: {
                cols: "12",
                sm: "12",
                md: "12",
                lg: "6",
                "order-md": "3",
                "order-sm": "3",
                "order-lg": "2",
                "order-xs": "3",
              },
            },
            [
              _c(
                "v-main",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "h2",
                            { staticStyle: { "text-align": "center" } },
                            [_vm._v("Find Employees!")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.filterUsers, function (a_user) {
                            return _c(
                              "v-col",
                              {
                                key: a_user.employee_id,
                                attrs: { cols: "12", md: "12" },
                              },
                              [_c("Users", { attrs: { a_user: a_user } })],
                              1
                            )
                          }),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/app_component/availibility.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/app_component/availibility.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _availibility_vue_vue_type_template_id_403e301e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./availibility.vue?vue&type=template&id=403e301e& */ "./resources/js/components/app_component/availibility.vue?vue&type=template&id=403e301e&");
/* harmony import */ var _availibility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./availibility.vue?vue&type=script&lang=js& */ "./resources/js/components/app_component/availibility.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js");
/* harmony import */ var vuetify_lib_components_VBottomNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBottomNavigation */ "./node_modules/vuetify/lib/components/VBottomNavigation/VBottomNavigation.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/VDialog.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _availibility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _availibility_vue_vue_type_template_id_403e301e___WEBPACK_IMPORTED_MODULE_0__.render,
  _availibility_vue_vue_type_template_id_403e301e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAutocomplete: vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__["default"],VBottomNavigation: vuetify_lib_components_VBottomNavigation__WEBPACK_IMPORTED_MODULE_5__["default"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["default"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["default"],VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_13__["default"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__["default"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__.VToolbarTitle})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app_component/availibility.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/app_component/availibilityForm.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/app_component/availibilityForm.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _availibilityForm_vue_vue_type_template_id_44f327fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./availibilityForm.vue?vue&type=template&id=44f327fc&scoped=true& */ "./resources/js/components/app_component/availibilityForm.vue?vue&type=template&id=44f327fc&scoped=true&");
/* harmony import */ var _availibilityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./availibilityForm.vue?vue&type=script&lang=js& */ "./resources/js/components/app_component/availibilityForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _availibilityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _availibilityForm_vue_vue_type_template_id_44f327fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _availibilityForm_vue_vue_type_template_id_44f327fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "44f327fc",
  null
  
)

/* vuetify-loader */
;




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAutocomplete: vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__["default"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app_component/availibilityForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/app_component/jobCategoryForm.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/app_component/jobCategoryForm.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jobCategoryForm_vue_vue_type_template_id_38fb87d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobCategoryForm.vue?vue&type=template&id=38fb87d4& */ "./resources/js/components/app_component/jobCategoryForm.vue?vue&type=template&id=38fb87d4&");
/* harmony import */ var _jobCategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobCategoryForm.vue?vue&type=script&lang=js& */ "./resources/js/components/app_component/jobCategoryForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _jobCategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _jobCategoryForm_vue_vue_type_template_id_38fb87d4___WEBPACK_IMPORTED_MODULE_0__.render,
  _jobCategoryForm_vue_vue_type_template_id_38fb87d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAutocomplete: vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__["default"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app_component/jobCategoryForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/app_component/myservices.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/app_component/myservices.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _myservices_vue_vue_type_template_id_edc257f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myservices.vue?vue&type=template&id=edc257f6& */ "./resources/js/components/app_component/myservices.vue?vue&type=template&id=edc257f6&");
/* harmony import */ var _myservices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myservices.vue?vue&type=script&lang=js& */ "./resources/js/components/app_component/myservices.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js");
/* harmony import */ var vuetify_lib_components_VBottomNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBottomNavigation */ "./node_modules/vuetify/lib/components/VBottomNavigation/VBottomNavigation.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/VDialog.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _myservices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _myservices_vue_vue_type_template_id_edc257f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _myservices_vue_vue_type_template_id_edc257f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAutocomplete: vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__["default"],VBottomNavigation: vuetify_lib_components_VBottomNavigation__WEBPACK_IMPORTED_MODULE_5__["default"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["default"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["default"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__["default"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__.VToolbarTitle})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app_component/myservices.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/app_component/proposals.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/app_component/proposals.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _proposals_vue_vue_type_template_id_298ac116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proposals.vue?vue&type=template&id=298ac116& */ "./resources/js/components/app_component/proposals.vue?vue&type=template&id=298ac116&");
/* harmony import */ var _proposals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proposals.vue?vue&type=script&lang=js& */ "./resources/js/components/app_component/proposals.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBottomNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBottomNavigation */ "./node_modules/vuetify/lib/components/VBottomNavigation/VBottomNavigation.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/VDialog.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VSpacer.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _proposals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _proposals_vue_vue_type_template_id_298ac116___WEBPACK_IMPORTED_MODULE_0__.render,
  _proposals_vue_vue_type_template_id_298ac116___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["default"],VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["default"],VBottomNavigation: vuetify_lib_components_VBottomNavigation__WEBPACK_IMPORTED_MODULE_6__["default"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["default"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_9__.VCardActions,VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["default"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["default"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_13__["default"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_14__["default"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["default"],VToolbarItems: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__.VToolbarItems,VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__.VToolbarTitle})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app_component/proposals.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/EmployeeDashboard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/EmployeeDashboard.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmployeeDashboard_vue_vue_type_template_id_e2fd9840_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeDashboard.vue?vue&type=template&id=e2fd9840&scoped=true& */ "./resources/js/components/pages/EmployeeDashboard.vue?vue&type=template&id=e2fd9840&scoped=true&");
/* harmony import */ var _EmployeeDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeDashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/EmployeeDashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ "./node_modules/vuetify/lib/components/VSheet/VSheet.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmployeeDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployeeDashboard_vue_vue_type_template_id_e2fd9840_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmployeeDashboard_vue_vue_type_template_id_e2fd9840_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e2fd9840",
  null
  
)

/* vuetify-loader */
;








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["default"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["default"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_10__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/EmployeeDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/UserDashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/UserDashboard.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserDashboard_vue_vue_type_template_id_24e5d6e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDashboard.vue?vue&type=template&id=24e5d6e3&scoped=true& */ "./resources/js/components/pages/UserDashboard.vue?vue&type=template&id=24e5d6e3&scoped=true&");
/* harmony import */ var _UserDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/UserDashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/VMain.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ "./node_modules/vuetify/lib/components/VSheet/VSheet.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDashboard_vue_vue_type_template_id_24e5d6e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserDashboard_vue_vue_type_template_id_24e5d6e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "24e5d6e3",
  null
  
)

/* vuetify-loader */
;










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["default"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["default"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["default"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["default"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_10__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_12__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/UserDashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/styles/components/_selection-controls.sass */ "./node_modules/vuetify/src/styles/components/_selection-controls.sass");
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/VSwitch/VSwitch.sass */ "./node_modules/vuetify/src/components/VSwitch/VSwitch.sass");
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/selectable */ "./node_modules/vuetify/lib/mixins/selectable/index.js");
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VInput */ "./node_modules/vuetify/lib/components/VInput/index.js");
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/touch */ "./node_modules/vuetify/lib/directives/touch/index.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../VProgressCircular/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Styles

 // Mixins


 // Directives

 // Components


 // Helpers


/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'v-switch',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    inset: Boolean,
    loading: {
      type: [Boolean, String],
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_4__["default"].options.computed.classes.call(this),
        'v-input--selection-controls v-input--switch': true,
        'v-input--switch--flat': this.flat,
        'v-input--switch--inset': this.inset
      };
    },

    attrs() {
      return {
        'aria-checked': String(this.isActive),
        'aria-disabled': String(this.isDisabled),
        role: 'switch'
      };
    },

    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    },

    switchData() {
      return this.setTextColor(this.loading ? undefined : this.validationState, {
        class: this.themeClasses
      });
    }

  },
  methods: {
    genDefaultSlot() {
      return [this.genSwitch(), this.genLabel()];
    },

    genSwitch() {
      const {
        title,
        ...switchAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.genInput('checkbox', { ...this.attrs,
        ...switchAttrs
      }), this.genRipple(this.setTextColor(this.validationState, {
        directives: [{
          name: 'touch',
          value: {
            left: this.onSwipeLeft,
            right: this.onSwipeRight
          }
        }]
      })), this.$createElement('div', {
        staticClass: 'v-input--switch__track',
        ...this.switchData
      }), this.$createElement('div', {
        staticClass: 'v-input--switch__thumb',
        ...this.switchData
      }, [this.genProgress()])]);
    },

    genProgress() {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_5__.VFabTransition, {}, [this.loading === false ? null : this.$slots.progress || this.$createElement(_VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__["default"], {
        props: {
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          size: 16,
          width: 2,
          indeterminate: true
        }
      })]);
    },

    onSwipeLeft() {
      if (this.isActive) this.onChange();
    },

    onSwipeRight() {
      if (!this.isActive) this.onChange();
    },

    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__.keyCodes.left && this.isActive || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__.keyCodes.right && !this.isActive) this.onChange();
    }

  }
}));
//# sourceMappingURL=VSwitch.js.map

/***/ })

}]);