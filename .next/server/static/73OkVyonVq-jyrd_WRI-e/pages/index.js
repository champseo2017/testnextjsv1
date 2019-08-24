module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2uPq":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Navbar.js

var __jsx = external_react_default.a.createElement;


const Navbar = () => __jsx("nav", {
  className: "navbar navbar-expand navbar-dark bg-dark mb-4"
}, __jsx("div", {
  className: "container"
}, __jsx("a", {
  className: "navbar-brand",
  href: "#"
}, "BitzPrice"), __jsx("div", {
  className: "collapse navbar-collapse"
}, __jsx("ul", {
  className: "navbar-nav ml-auto"
}, __jsx("li", {
  className: "nav-item"
}, __jsx(link_default.a, {
  href: "/"
}, __jsx("a", {
  className: "nav-link"
}, "Home"))), __jsx("li", {
  className: "nav-item"
}, __jsx(link_default.a, {
  href: "/about"
}, __jsx("a", {
  className: "nav-link"
}, "About")))))));

/* harmony default export */ var components_Navbar = (Navbar);
// CONCATENATED MODULE: ./components/Footer.js

var Footer_jsx = external_react_default.a.createElement;

const Footer = () => Footer_jsx("footer", {
  id: "sticky-footer",
  className: "py-4 bg-dark text-white-50"
}, Footer_jsx("div", {
  className: "container text-center"
}, Footer_jsx("small", null, "Copyright \xA9 Your Website")), Footer_jsx("style", null, `
   
        #sticky-footer {
            margin-top: 20%;
        }
    
  
  
`));

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__("xeH2");
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./components/Layout.js
var Layout_jsx = external_react_default.a.createElement;






class Layout_Layout extends external_react_["Component"] {
  componentDidMount() {
    let divcon = this.divcontainer.offsetHeight;

    if (divcon < 600) {
      external_jquery_default()('body').find('.heightcon').addClass('fullHeight');
    } else {
      external_jquery_default()('body').find('.heightcon').removeClass('fullHeight');
    }
  }

  render() {
    return Layout_jsx("div", {
      className: "justify-content-between"
    }, Layout_jsx(head_default.a, null, Layout_jsx("title", null, "BitzPrice"), Layout_jsx("link", {
      rel: "stylesheet",
      href: "https://bootswatch.com/4/cerulean/bootstrap.min.css"
    }), Layout_jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), Layout_jsx("style", null, `
                html,body{
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                div#__next {
                    height: 100%;
                }
                .fullHeight {
                    height: 100vh;
                  }
                 
            `)), Layout_jsx(components_Navbar, null), Layout_jsx("div", {
      ref: div => {
        this.divcontainer = div;
      },
      className: "container justify-content-between fullHeight heightcon"
    }, this.props.children), Layout_jsx(components_Footer, null));
  }

}

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "OUZz":
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),

/***/ "Ok53":
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./components/Prices.js

var __jsx = external_react_default.a.createElement;


class Prices_Prices extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      currency: 'USD'
    });
  }

  render() {
    const {
      bpi
    } = this.props;
    const {
      currency
    } = this.state;
    let list = '';

    if (this.state.currency === 'USD') {
      list = __jsx("li", {
        className: "list-group-item"
      }, "Bitcoin rate for ", bpi.USD.description, " : ", __jsx("span", {
        className: "badge  badge-primary"
      }, bpi.USD.code), __jsx("strong", null, " ", bpi.USD.rate));
    } else if (currency === 'GBP') {
      list = __jsx("li", {
        className: "list-group-item"
      }, "Bitcoin rate for ", bpi.GBP.description, " : ", __jsx("span", {
        className: "badge  badge-primary"
      }, bpi.GBP.code), __jsx("strong", null, " ", bpi.GBP.rate));
    } else if (currency === 'EUR') {
      list = __jsx("li", {
        className: "list-group-item"
      }, "Bitcoin rate for ", bpi.EUR.description, " : ", __jsx("span", {
        className: "badge  badge-primary"
      }, bpi.EUR.code), __jsx("strong", null, " ", bpi.EUR.rate));
    }

    return __jsx("div", null, __jsx("ul", {
      className: "list-group"
    }, list), __jsx("br", null), __jsx("select", {
      onChange: e => this.setState({
        currency: e.target.value
      }),
      className: "form-control"
    }, __jsx("option", {
      value: "USD"
    }, "USD"), __jsx("option", {
      value: "GBP"
    }, "GBP"), __jsx("option", {
      value: "EUR"
    }, "EUR")));
  }

}

/* harmony default export */ var components_Prices = (Prices_Prices);
// EXTERNAL MODULE: external "material-ui/styles/MuiThemeProvider"
var MuiThemeProvider_ = __webpack_require__("2uPq");
var MuiThemeProvider_default = /*#__PURE__*/__webpack_require__.n(MuiThemeProvider_);

// EXTERNAL MODULE: external "material-ui/AppBar"
var AppBar_ = __webpack_require__("Ok53");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "material-ui/TextField"
var TextField_ = __webpack_require__("nL77");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "material-ui/RaisedButton"
var RaisedButton_ = __webpack_require__("OUZz");
var RaisedButton_default = /*#__PURE__*/__webpack_require__.n(RaisedButton_);

// CONCATENATED MODULE: ./components/FormUserDetails.js

var FormUserDetails_jsx = external_react_default.a.createElement;






class FormUserDetails_FormUserDetails extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "continue", e => {
      e.preventDefault();
      this.props.nextStep();
    });
  }

  render() {
    const {
      values,
      handleChange
    } = this.props;
    return FormUserDetails_jsx(MuiThemeProvider_default.a, null, FormUserDetails_jsx(external_react_default.a.Fragment, null, FormUserDetails_jsx(AppBar_default.a, {
      title: "Enter User Details"
    }), FormUserDetails_jsx(TextField_default.a, {
      hintText: "Enter Your First Name",
      floatingLabelText: "First Name",
      onChange: handleChange('firstName'),
      defaultValue: values.firstName
    }), FormUserDetails_jsx("p", null), FormUserDetails_jsx(TextField_default.a, {
      hintText: "Enter Your Last Name",
      floatingLabelText: "Last Name",
      onChange: handleChange('lastName'),
      defaultValue: values.lastName
    }), FormUserDetails_jsx("p", null), FormUserDetails_jsx(TextField_default.a, {
      hintText: "Enter Your Email",
      floatingLabelText: "Email",
      onChange: handleChange('email'),
      defaultValue: values.email
    }), FormUserDetails_jsx("p", null), FormUserDetails_jsx(RaisedButton_default.a, {
      label: "Continue",
      primary: true,
      style: styles.button,
      onClick: this.continue
    })));
  }

}

const styles = {};
/* harmony default export */ var components_FormUserDetails = (FormUserDetails_FormUserDetails);
// CONCATENATED MODULE: ./components/FormPersonalDetails.js

var FormPersonalDetails_jsx = external_react_default.a.createElement;






class FormPersonalDetails_FormPersonalDetails extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "continue", e => {
      e.preventDefault();
      this.props.nextStep();
    });

    _defineProperty(this, "back", e => {
      e.preventDefault();
      this.props.prevStep();
    });
  }

  render() {
    const {
      values,
      handleChange
    } = this.props;
    return FormPersonalDetails_jsx(MuiThemeProvider_default.a, null, FormPersonalDetails_jsx(external_react_default.a.Fragment, null, FormPersonalDetails_jsx(AppBar_default.a, {
      title: "Enter Personal Details"
    }), FormPersonalDetails_jsx(TextField_default.a, {
      hintText: "Enter Your Occupation",
      floatingLabelText: "Occupation",
      onChange: handleChange('occupation'),
      defaultValue: values.occupation
    }), FormPersonalDetails_jsx("p", null), FormPersonalDetails_jsx(TextField_default.a, {
      hintText: "Enter Your City",
      floatingLabelText: "City",
      onChange: handleChange('city'),
      defaultValue: values.city
    }), FormPersonalDetails_jsx("p", null), FormPersonalDetails_jsx(TextField_default.a, {
      hintText: "Enter Your Bio",
      floatingLabelText: "Bio",
      onChange: handleChange('bio'),
      defaultValue: values.bio
    }), FormPersonalDetails_jsx("p", null), FormPersonalDetails_jsx(RaisedButton_default.a, {
      label: "Continue",
      primary: true,
      style: FormPersonalDetails_styles.button,
      onClick: this.continue
    }), FormPersonalDetails_jsx(RaisedButton_default.a, {
      label: "Back",
      primary: false,
      style: FormPersonalDetails_styles.button,
      onClick: this.back
    })));
  }

}

const FormPersonalDetails_styles = {};
/* harmony default export */ var components_FormPersonalDetails = (FormPersonalDetails_FormPersonalDetails);
// EXTERNAL MODULE: external "material-ui/List"
var List_ = __webpack_require__("nWiH");

// CONCATENATED MODULE: ./components/Confirm.js

var Confirm_jsx = external_react_default.a.createElement;






class Confirm_Confirm extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "continue", e => {
      e.preventDefault(); // PROCESS FORM //

      this.props.nextStep();
    });

    _defineProperty(this, "back", e => {
      e.preventDefault();
      this.props.prevStep();
    });
  }

  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        occupation,
        city,
        bio
      }
    } = this.props;
    return Confirm_jsx(MuiThemeProvider_default.a, null, Confirm_jsx(external_react_default.a.Fragment, null, Confirm_jsx(AppBar_default.a, {
      title: "Confirm User Data"
    }), Confirm_jsx(List_["List"], null, Confirm_jsx(List_["ListItem"], {
      primaryText: "First Name",
      secondaryText: firstName
    }), Confirm_jsx(List_["ListItem"], {
      primaryText: "Last Name",
      secondaryText: lastName
    }), Confirm_jsx(List_["ListItem"], {
      primaryText: "Email",
      secondaryText: email
    }), Confirm_jsx(List_["ListItem"], {
      primaryText: "Occupation",
      secondaryText: occupation
    }), Confirm_jsx(List_["ListItem"], {
      primaryText: "City",
      secondaryText: city
    }), Confirm_jsx(List_["ListItem"], {
      primaryText: "Bio",
      secondaryText: bio
    })), Confirm_jsx("p", null), Confirm_jsx(RaisedButton_default.a, {
      label: "Confirm && Continue",
      primary: true,
      style: Confirm_styles.button,
      onClick: this.continue
    }), Confirm_jsx(RaisedButton_default.a, {
      label: "Back",
      primary: false,
      style: Confirm_styles.button,
      onClick: this.back
    })));
  }

}

const Confirm_styles = {};
/* harmony default export */ var components_Confirm = (Confirm_Confirm);
// CONCATENATED MODULE: ./components/Success.js

var Success_jsx = external_react_default.a.createElement;




class Success_Success extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "continue", e => {
      e.preventDefault(); // PROCESS FORM //

      this.props.nextStep();
    });

    _defineProperty(this, "back", e => {
      e.preventDefault();
      this.props.prevStep();
    });
  }

  render() {
    return Success_jsx(MuiThemeProvider_default.a, null, Success_jsx(external_react_default.a.Fragment, null, Success_jsx(AppBar_default.a, {
      title: "Success"
    }), Success_jsx("p", null), Success_jsx("h1", null, "Thank You For Your Submission"), Success_jsx("p", null, "You will get an email with further instructions")));
  }

}

/* harmony default export */ var components_Success = (Success_Success);
// CONCATENATED MODULE: ./components/UserForm.js

var UserForm_jsx = external_react_default.a.createElement;






class UserForm_UserForm extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: '' // Proceed to next step

    });

    _defineProperty(this, "nextStep", () => {
      const {
        step
      } = this.state;
      this.setState({
        step: step + 1
      });
    });

    _defineProperty(this, "prevStep", () => {
      const {
        step
      } = this.state;
      this.setState({
        step: step - 1
      });
    });

    _defineProperty(this, "handleChange", input => e => {
      this.setState({
        [input]: e.target.value
      });
    });
  }

  render() {
    const {
      step
    } = this.state;
    const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    };

    switch (step) {
      case 1:
        return UserForm_jsx(components_FormUserDetails, {
          nextStep: this.nextStep,
          handleChange: this.handleChange,
          values: values
        });

      case 2:
        return UserForm_jsx(components_FormPersonalDetails, {
          nextStep: this.nextStep,
          prevStep: this.prevStep,
          handleChange: this.handleChange,
          values: values
        });

      case 3:
        return UserForm_jsx(components_Confirm, {
          nextStep: this.nextStep,
          prevStep: this.prevStep,
          values: values
        });

      case 4:
        return UserForm_jsx(components_Success, null);
    }
  }

}

/* harmony default export */ var components_UserForm = (UserForm_UserForm);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;






const Index = props => {
  const {
    0: posts,
    1: setPosts
  } = Object(external_react_["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(external_react_["useState"])(1);
  const {
    0: postsPerPage,
    1: setPostsPerPage
  } = Object(external_react_["useState"])(10);
  return pages_jsx(Layout["a" /* default */], null, pages_jsx("div", null, pages_jsx("h1", null, "Welcome to BitzPrice"), pages_jsx("p", null, "Check current Bitcoin rate"), pages_jsx(components_Prices, {
    bpi: props.bpi
  }), pages_jsx("p", null), pages_jsx(components_UserForm, null)));
}; // fetch data async  


Index.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    // props 
    bpi: data.bpi
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nL77":
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nWiH":
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });