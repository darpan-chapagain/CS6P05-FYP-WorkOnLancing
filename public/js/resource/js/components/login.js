"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resource/js/components/login"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AuthInput',
  props: {
    formClass: String,
    inputClass: String,
    lableText: String,
    inputID: String,
    input_placeholder: String,
    in_name: String,
    auto_complete: String,
    in_auth: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _app_component_AuthInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app_component/AuthInput.vue */ "./resources/js/components/app_component/AuthInput.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "login",
  components: {
    AuthInput: _app_component_AuthInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      // loginImage: require("asset('images/signin.png')"),
      auth: {
        email: "",
        password: ""
      },
      show3: false,
      password: "Password",
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        emailMatch: function emailMatch() {
          return "Please enter a valid password";
        }
      },
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+/.test(v) || 'E-mail must be valid';
      }]
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    signIn: "auth/login"
  })), {}, {
    login: function login() {
      this.signIn(this.auth);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bootStrapChat.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bootStrapChat.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mdbvue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    mdbRow: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mdbvue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    mdbCol: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mdbvue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    mdbChat: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mdbvue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    mdbChatList: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mdbvue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    mdbChatRoom: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mdbvue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    mdbContainer: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mdbvue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      basicChat: [{
        loggedUserId: 1,
        active: true,
        lastId: 4,
        chat: [{
          id: 0,
          name: "Brad Pitt",
          online: true,
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.webp",
          messages: [{
            id: 0,
            date: "2019-04-21 15:00:09",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }, {
            id: 1,
            date: "2019-06-26 11:00",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }, {
            id: 4,
            date: "2019-07-01 09:20",
            content: "Can you pop out and buy lemons?"
          }]
        }, {
          id: 1,
          name: "Lara Croft",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
          messages: [{
            id: 2,
            date: "2019-06-26 11:15",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }, {
            id: 3,
            date: "2019-06-26 11:16",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }]
        }]
      }, {
        id: 1,
        loggedUserId: 1,
        active: false,
        lastId: 2,
        chat: [{
          id: 1,
          name: "Lara Croft",
          online: true,
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
          messages: [{
            id: 0,
            date: "2019-04-21 15:00:09",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }, {
            id: 1,
            date: "2019-06-26 11:00",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }]
        }, {
          id: 2,
          name: "Ashley Olsen",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.webp",
          messages: [{
            id: 2,
            date: "2019-06-26 11:15",
            content: "Remember to bring me oranges",
            unread: true
          }]
        }]
      }, {
        id: 2,
        loggedUserId: 1,
        active: false,
        lastId: 2,
        chat: [{
          id: 1,
          name: "Lara Croft",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
          messages: [{
            id: 0,
            date: "2019-04-21 15:00:09",
            content: "Sed ut perspiciatis unde omnis iste natus remque laudantium."
          }, {
            id: 1,
            date: "2019-06-26 11:00",
            content: "Sed ut doloremque laudantium."
          }]
        }, {
          id: 3,
          name: "Danny Smith",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.webp",
          messages: [{
            id: 2,
            date: "2019-06-26 11:15",
            content: "Call me later!",
            unread: false
          }]
        }]
      }, {
        id: 1,
        loggedUserId: 1,
        active: false,
        lastId: 2,
        chat: [{
          id: 1,
          name: "Lara Croft",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
          messages: [{
            id: 0,
            date: "2019-04-21 15:00:09",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }, {
            id: 1,
            date: "2019-06-26 11:00",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }]
        }, {
          id: 6,
          name: "Alex Turner",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1.webp",
          messages: [{
            id: 2,
            date: "2019-06-26 11:15",
            content: "Hey, are you at home?",
            unread: false
          }]
        }]
      }, {
        id: 2,
        loggedUserId: 1,
        active: false,
        lastId: 2,
        chat: [{
          id: 1,
          name: "Lara Croft",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
          messages: [{
            id: 0,
            date: "2019-04-21 15:00:09",
            content: "Sed ut perspiciatis unde omnis iste natus remque laudantium."
          }, {
            id: 1,
            date: "2019-06-26 11:00",
            content: "Sed ut doloremque laudantium."
          }]
        }, {
          id: 7,
          name: "Kate Moss",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-4.webp",
          messages: [{
            id: 2,
            date: "2019-06-26 11:15",
            content: "Wanna grab a bite later?",
            unread: true
          }]
        }]
      }, {
        id: 1,
        loggedUserId: 1,
        active: false,
        lastId: 2,
        chat: [{
          id: 1,
          name: "Lara Croft",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
          messages: [{
            id: 0,
            date: "2019-04-21 15:00:09",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }, {
            id: 1,
            date: "2019-06-26 11:00",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }]
        }, {
          id: 10,
          name: "Meg Ryan",
          online: true,
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-12.webp",
          messages: [{
            id: 2,
            date: "2019-06-26 11:15",
            content: "Sed ut perspicantium.",
            unread: false
          }]
        }]
      }, {
        id: 2,
        loggedUserId: 1,
        active: false,
        lastId: 2,
        chat: [{
          id: 1,
          name: "Lara Croft",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.webp",
          messages: [{
            id: 0,
            date: "2019-04-21 15:00:09",
            content: "Sed ut perspiciatis unde omnis iste natus remque laudantium."
          }, {
            id: 1,
            date: "2019-06-26 11:00",
            content: "Sed ut doloremque laudantium."
          }]
        }, {
          id: 3,
          name: "John Smith",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.webp",
          messages: [{
            id: 2,
            date: "2019-06-26 11:15",
            content: "Sed ut!",
            unread: true
          }]
        }]
      }, {
        id: 1,
        loggedUserId: 1,
        active: false,
        lastId: 2,
        chat: [{
          id: 1,
          name: "Lara Croft",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
          messages: [{
            id: 0,
            date: "2019-04-21 15:00:09",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }, {
            id: 1,
            date: "2019-06-26 11:00",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          }]
        }, {
          id: 13,
          name: "Olenna Gervais",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-11.webp",
          messages: [{
            id: 2,
            date: "2019-06-26 11:15",
            content: "Sed ut perspicantium.",
            unread: false
          }]
        }]
      }, {
        id: 2,
        loggedUserId: 1,
        active: false,
        lastId: 2,
        chat: [{
          id: 1,
          name: "Lara Croft",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp",
          messages: [{
            id: 0,
            date: "2019-04-21 15:00:09",
            content: "Sed ut perspiciatis unde omnis iste natus remque laudantium."
          }, {
            id: 1,
            date: "2019-06-26 11:00",
            content: "Sed ut doloremque laudantium."
          }]
        }, {
          id: 11,
          name: "Max Jackson",
          img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-14.webp",
          messages: [{
            id: 2,
            date: "2019-06-26 11:15",
            content: "Sed laudantium!",
            unread: false
          }]
        }]
      }],
      activeChat: 0
    };
  },
  methods: {
    createMessage: function createMessage(e, id) {
      var content = e.content,
          unread = e.unread,
          date = e.date;
      return {
        id: id + 1,
        date: date,
        content: content,
        unread: unread
      };
    },
    sendMessage: function sendMessage(e, chat) {
      var newMessage = this.createMessage(e, chat.lastId);
      chat.chat.find(function (el) {
        return el.id === chat.loggedUserId;
      }).messages.push(newMessage);
      chat.lastId += 1;
    },
    changeActiveChat: function changeActiveChat(index) {
      this.activeChat = index;
      this.basicChat.forEach(function (chat, i) {
        if (i === index) {
          chat.active = true;
        } else {
          chat.active = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "login",
  components: {},
  data: function data() {
    return {
      // loginImage: require("asset('images/signin.png')"),
      auth: {
        email: "",
        password: ""
      },
      show3: false,
      password: "Password",
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        emailMatch: function emailMatch() {
          return "Please enter a valid password";
        }
      },
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+/.test(v) || 'E-mail must be valid';
      }]
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    signIn: "auth/login"
  })), {}, {
    login: function login() {
      this.signIn(this.auth);
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-group input[data-v-47d37092]{\n    max-width: 400px;\n    min-width: 300px;\n    width: 100%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* *{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n} */\n.main-div[data-v-4fe3757a] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 96vh;\n}\n.login-card[data-v-4fe3757a] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 320px;\r\n  align-items: center;\n}\n.image-holder[data-v-4fe3757a] {\r\n  padding-top: 25px;\r\n  width: 50%;\n}\n.image-holder img[data-v-4fe3757a] {\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  -o-object-position: center;\r\n     object-position: center;\n}\n.form-holder[data-v-4fe3757a] {\r\n  margin-left: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* justify-content: center; */\r\n  align-items: center;\n}\n.form-group .form-input[data-v-4fe3757a] {\r\n  max-width: 400px;\r\n  min-width: 300px;\r\n  width: 100%;\n}\n.form-group[data-v-4fe3757a] {\r\n  margin-bottom: 10px;\n}\n.btn[data-v-4fe3757a] {\r\n  max-width: 380px;\r\n  min-width: 240px;\r\n  width: 100%;\r\n  font-size: 18px;\n}\n.sign-in-btn[data-v-4fe3757a] {\r\n  background-color: #0c0b0b !important;\r\n  color: #ffffff !important;\n}\n@media only screen and (min-width: 769px) {\n.login-card[data-v-4fe3757a] {\r\n    flex-direction: row;\r\n    max-width: 1022px;\r\n    min-width: 768px;\r\n    width: 100%;\r\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;\n}\n.form-holder[data-v-4fe3757a] {\r\n    padding: 25px;\r\n    width: 40%;\n}\n.image-holder[data-v-4fe3757a] {\r\n    height: 100%;\n}\n.image-holder img[data-v-4fe3757a] {\r\n    height: 100%;\n}\n}\n@media only screen and (min-width: 1025px) {\n.login-card[data-v-4fe3757a] {\r\n    max-width: 1400px;\r\n    min-width: 1024px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* *{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n} */\n.main-div[data-v-5bbfff4c] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 96vh;\n}\n.login-card[data-v-5bbfff4c] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 320px;\r\n  align-items: center;\n}\n.image-holder[data-v-5bbfff4c] {\r\n  padding-top: 25px;\r\n  width: 50%;\n}\n.image-holder img[data-v-5bbfff4c] {\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  -o-object-position: center;\r\n     object-position: center;\n}\n.form-holder[data-v-5bbfff4c] {\r\n  margin-left: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* justify-content: center; */\r\n  align-items: center;\n}\n.form-group .form-input[data-v-5bbfff4c] {\r\n  max-width: 400px;\r\n  min-width: 300px;\r\n  width: 100%;\n}\n.form-group[data-v-5bbfff4c] {\r\n  margin-bottom: 10px;\n}\n.btn[data-v-5bbfff4c] {\r\n  max-width: 380px;\r\n  min-width: 240px;\r\n  width: 100%;\r\n  font-size: 18px;\n}\n.sign-in-btn[data-v-5bbfff4c] {\r\n  background-color: #0c0b0b !important;\r\n  color: #ffffff !important;\n}\n@media only screen and (min-width: 769px) {\n.login-card[data-v-5bbfff4c] {\r\n    flex-direction: row;\r\n    max-width: 1022px;\r\n    min-width: 768px;\r\n    width: 100%;\r\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;\n}\n.form-holder[data-v-5bbfff4c] {\r\n    padding: 25px;\r\n    width: 40%;\n}\n.image-holder[data-v-5bbfff4c] {\r\n    height: 100%;\n}\n.image-holder img[data-v-5bbfff4c] {\r\n    height: 100%;\n}\n}\n@media only screen and (min-width: 1025px) {\n.login-card[data-v-5bbfff4c] {\r\n    max-width: 1400px;\r\n    min-width: 1024px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_style_index_0_id_47d37092_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_style_index_0_id_47d37092_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_style_index_0_id_47d37092_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_4fe3757a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_4fe3757a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_4fe3757a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_imageUploadtest_vue_vue_type_style_index_0_id_5bbfff4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_imageUploadtest_vue_vue_type_style_index_0_id_5bbfff4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_imageUploadtest_vue_vue_type_style_index_0_id_5bbfff4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/app_component/AuthInput.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/app_component/AuthInput.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/bootStrapChat.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/bootStrapChat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bootStrapChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bootStrapChat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bootStrapChat.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bootStrapChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imageUploadtest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./imageUploadtest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imageUploadtest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app_component/AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/app_component/AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_style_index_0_id_47d37092_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/pages/Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pages/Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_4fe3757a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_imageUploadtest_vue_vue_type_style_index_0_id_5bbfff4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/app_component/AuthInput.vue?vue&type=template&id=47d37092&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/app_component/AuthInput.vue?vue&type=template&id=47d37092&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_template_id_47d37092_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_template_id_47d37092_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_template_id_47d37092_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthInput.vue?vue&type=template&id=47d37092&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=template&id=47d37092&scoped=true&");


/***/ }),

/***/ "./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4fe3757a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4fe3757a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4fe3757a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=4fe3757a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/pages/bootStrapChat.vue?vue&type=template&id=44916780&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/bootStrapChat.vue?vue&type=template&id=44916780& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bootStrapChat_vue_vue_type_template_id_44916780___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bootStrapChat_vue_vue_type_template_id_44916780___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bootStrapChat_vue_vue_type_template_id_44916780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bootStrapChat.vue?vue&type=template&id=44916780& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bootStrapChat.vue?vue&type=template&id=44916780&");


/***/ }),

/***/ "./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=template&id=5bbfff4c&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=template&id=5bbfff4c&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageUploadtest_vue_vue_type_template_id_5bbfff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageUploadtest_vue_vue_type_template_id_5bbfff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageUploadtest_vue_vue_type_template_id_5bbfff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./imageUploadtest.vue?vue&type=template&id=5bbfff4c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=template&id=5bbfff4c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=template&id=47d37092&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/app_component/AuthInput.vue?vue&type=template&id=47d37092&scoped=true& ***!
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
  return _c("div", { class: _vm.formClass }, [
    _c("label", [_vm._v(_vm._s(_vm.lableText))]),
    _vm._v(" "),
    _c("input", {
      staticClass: "form-control",
      attrs: {
        type: _vm.type,
        id: _vm.inputID,
        placeholder: _vm.input_placeholder,
        name: _vm.in_name,
        autocomplete: _vm.auto_complete,
        autofocus: "",
        "v-model": _vm.$emit(_vm.in_auth),
        required: "",
      },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a&scoped=true& ***!
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
  return _c("div", { staticClass: "main-div" }, [
    _c("div", { staticClass: "login-card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-holder" },
        [
          _vm._m(1),
          _vm._v(" "),
          _c("v-form", [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("v-text-field", {
                  staticClass: "form-input mb-2",
                  attrs: {
                    rules: _vm.emailRules,
                    label: "Email",
                    required: "",
                  },
                  model: {
                    value: _vm.auth.email,
                    callback: function ($$v) {
                      _vm.$set(_vm.auth, "email", $$v)
                    },
                    expression: "auth.email",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("v-text-field", {
                  staticClass: "form-input mb-2",
                  attrs: {
                    "append-icon": _vm.show3 ? "mdi-eye" : "mdi-eye-off",
                    rules: [_vm.rules.required],
                    type: _vm.show3 ? "text" : "password",
                    name: "input-10-2",
                    label: "Password",
                    hint: "At least 8 characters",
                    value: "",
                  },
                  on: {
                    "click:append": function ($event) {
                      _vm.show3 = !_vm.show3
                    },
                  },
                  model: {
                    value: _vm.auth.password,
                    callback: function ($$v) {
                      _vm.$set(_vm.auth, "password", $$v)
                    },
                    expression: "auth.password",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c(
                  "v-btn",
                  {
                    staticClass: "btn btn-lg btn-block sign-in-btn mb-2",
                    on: { click: _vm.login },
                  },
                  [_vm._v(" Login ")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "p",
              [
                _vm._v("\n          Don't Have an Account?\n          "),
                _c("router-link", { attrs: { to: { name: "register" } } }, [
                  _vm._v("Register Now!"),
                ]),
              ],
              1
            ),
          ]),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-holder" }, [
      _c("img", {
        staticClass: "img-fluid",
        attrs: { src: "images/signin.png", alt: "image" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h2", [_vm._v("Sign In")])])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bootStrapChat.vue?vue&type=template&id=44916780&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bootStrapChat.vue?vue&type=template&id=44916780& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "mdb-container",
    [
      _c(
        "mdb-chat-room",
        { staticClass: "lighten-2", attrs: { color: "grey" } },
        [
          _c(
            "mdb-row",
            { staticClass: "px-lg-2 px-2" },
            [
              _c(
                "mdb-col",
                { staticClass: "px-0 pt-3", attrs: { md: "6", xl: "4" } },
                [
                  _c("mdb-chat-list", {
                    attrs: { data: _vm.basicChat },
                    on: { click: _vm.changeActiveChat },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "mdb-col",
                {
                  staticClass: "pl-md-3 px-lg-auto px-0 pt-3",
                  attrs: { md: "6", xl: "8" },
                },
                [
                  _c("mdb-chat", {
                    attrs: {
                      loggedUserId: _vm.basicChat[_vm.activeChat].loggedUserId,
                      chat: _vm.basicChat[_vm.activeChat].chat,
                      color: "info",
                      avatarWidth: 50,
                    },
                    on: {
                      send: function ($event) {
                        return _vm.sendMessage(
                          $event,
                          _vm.basicChat[_vm.activeChat]
                        )
                      },
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=template&id=5bbfff4c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=template&id=5bbfff4c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "main-div" }, [
    _c("div", { staticClass: "login-card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-holder" },
        [
          _vm._m(1),
          _vm._v(" "),
          _c("v-form", [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("v-text-field", {
                  staticClass: "form-input mb-2",
                  attrs: {
                    rules: _vm.emailRules,
                    label: "Email",
                    required: "",
                  },
                  model: {
                    value: _vm.auth.email,
                    callback: function ($$v) {
                      _vm.$set(_vm.auth, "email", $$v)
                    },
                    expression: "auth.email",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("v-text-field", {
                  staticClass: "form-input mb-2",
                  attrs: {
                    "append-icon": _vm.show3 ? "mdi-eye" : "mdi-eye-off",
                    rules: [_vm.rules.required],
                    type: _vm.show3 ? "text" : "password",
                    name: "input-10-2",
                    label: "Password",
                    hint: "At least 8 characters",
                    value: "",
                  },
                  on: {
                    "click:append": function ($event) {
                      _vm.show3 = !_vm.show3
                    },
                  },
                  model: {
                    value: _vm.auth.password,
                    callback: function ($$v) {
                      _vm.$set(_vm.auth, "password", $$v)
                    },
                    expression: "auth.password",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c(
                  "v-btn",
                  {
                    staticClass: "btn btn-lg btn-block sign-in-btn mb-2",
                    on: { click: _vm.login },
                  },
                  [_vm._v(" Login ")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "p",
              [
                _vm._v("\n          Don't Have an Account?\n          "),
                _c("router-link", { attrs: { to: { name: "register" } } }, [
                  _vm._v("Register Now!"),
                ]),
              ],
              1
            ),
          ]),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-holder" }, [
      _c("img", {
        staticClass: "img-fluid",
        attrs: { src: "images/signin.png", alt: "image" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h2", [_vm._v("Sign In")])])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/app_component/AuthInput.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/app_component/AuthInput.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthInput_vue_vue_type_template_id_47d37092_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthInput.vue?vue&type=template&id=47d37092&scoped=true& */ "./resources/js/components/app_component/AuthInput.vue?vue&type=template&id=47d37092&scoped=true&");
/* harmony import */ var _AuthInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthInput.vue?vue&type=script&lang=js& */ "./resources/js/components/app_component/AuthInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _AuthInput_vue_vue_type_style_index_0_id_47d37092_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css& */ "./resources/js/components/app_component/AuthInput.vue?vue&type=style&index=0&id=47d37092&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthInput_vue_vue_type_template_id_47d37092_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthInput_vue_vue_type_template_id_47d37092_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47d37092",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app_component/AuthInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Login.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/pages/Login.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_4fe3757a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4fe3757a&scoped=true& */ "./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _Login_vue_vue_type_style_index_0_id_4fe3757a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css& */ "./resources/js/components/pages/Login.vue?vue&type=style&index=0&id=4fe3757a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_4fe3757a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_4fe3757a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4fe3757a",
  null
  
)

/* vuetify-loader */
;



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/bootStrapChat.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/bootStrapChat.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bootStrapChat_vue_vue_type_template_id_44916780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootStrapChat.vue?vue&type=template&id=44916780& */ "./resources/js/components/pages/bootStrapChat.vue?vue&type=template&id=44916780&");
/* harmony import */ var _bootStrapChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootStrapChat.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/bootStrapChat.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bootStrapChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bootStrapChat_vue_vue_type_template_id_44916780___WEBPACK_IMPORTED_MODULE_0__.render,
  _bootStrapChat_vue_vue_type_template_id_44916780___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/bootStrapChat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/tests/imageUploadtest.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/pages/tests/imageUploadtest.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imageUploadtest_vue_vue_type_template_id_5bbfff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageUploadtest.vue?vue&type=template&id=5bbfff4c&scoped=true& */ "./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=template&id=5bbfff4c&scoped=true&");
/* harmony import */ var _imageUploadtest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageUploadtest.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=script&lang=js&");
/* harmony import */ var _imageUploadtest_vue_vue_type_style_index_0_id_5bbfff4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css& */ "./resources/js/components/pages/tests/imageUploadtest.vue?vue&type=style&index=0&id=5bbfff4c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _imageUploadtest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _imageUploadtest_vue_vue_type_template_id_5bbfff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _imageUploadtest_vue_vue_type_template_id_5bbfff4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5bbfff4c",
  null
  
)

/* vuetify-loader */
;



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/tests/imageUploadtest.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);