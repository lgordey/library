webpackHotUpdate(0,{

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

  eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nvar _reactTransformHmr2 = __webpack_require__(369);\n\nvar _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);\n\nvar _react = __webpack_require__(346);\n\nvar _reactTransformCatchErrors2 = __webpack_require__(411);\n\nvar _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);\n\nvar _redboxReact = __webpack_require__(412);\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _LoginPageScss = __webpack_require__(475);\n\nvar _LoginPageScss2 = _interopRequireDefault(_LoginPageScss);\n\nvar _decoratorsWithStyles = __webpack_require__(424);\n\nvar _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);\n\nvar _components = {\n  _$LoginPage: {\n    displayName: 'LoginPage'\n  }\n};\n\nvar _reactComponentWrapper = (0, _reactTransformHmr3['default'])({\n  filename: '/Users/Gordei/rambler/react-starter-kit/src/components/LoginPage/LoginPage.js',\n  components: _components,\n  locals: [module],\n  imports: [_react]\n});\n\nvar _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({\n  filename: '/Users/Gordei/rambler/react-starter-kit/src/components/LoginPage/LoginPage.js',\n  components: _components,\n  locals: [],\n  imports: [_react, _redboxReact]\n});\n\nfunction _wrapComponent(uniqueId) {\n  return function (ReactClass) {\n    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);\n  };\n}\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar LoginPage = (function (_Component) {\n  _inherits(LoginPage, _Component);\n\n  function LoginPage() {\n    _classCallCheck(this, _LoginPage);\n\n    _get(Object.getPrototypeOf(_LoginPage.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(LoginPage, [{\n    key: 'render',\n    value: function render() {\n      var title = 'Log In';\n      this.context.onSetTitle(title);\n      return _react2['default'].createElement(\n        'div',\n        { className: 'LoginPage' },\n        _react2['default'].createElement(\n          'div',\n          { className: 'LoginPage-container' },\n          _react2['default'].createElement(\n            'h1',\n            null,\n            title,\n            'It'\n          ),\n          _react2['default'].createElement(\n            'p',\n            null,\n            '...'\n          )\n        )\n      );\n    }\n  }], [{\n    key: 'contextTypes',\n    value: {\n      onSetTitle: _react.PropTypes.func.isRequired\n    },\n    enumerable: true\n  }]);\n\n  var _LoginPage = LoginPage;\n  LoginPage = _wrapComponent('_$LoginPage')(LoginPage) || LoginPage;\n  LoginPage = (0, _decoratorsWithStyles2['default'])(_LoginPageScss2['default'])(LoginPage) || LoginPage;\n  return LoginPage;\n})(_react.Component);\n\nexports['default'] = LoginPage;\nmodule.exports = exports['default'];\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9naW5QYWdlL0xvZ2luUGFnZS5qcz81NjUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBSZWFjdCBTdGFydGVyIEtpdCB8IE1JVCBMaWNlbnNlIHwgaHR0cDovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW5QYWdlLnNjc3MnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vLi4vZGVjb3JhdG9ycy93aXRoU3R5bGVzJztcblxuQHdpdGhTdHlsZXMoc3R5bGVzKVxuY2xhc3MgTG9naW5QYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIG9uU2V0VGl0bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0xvZyBJbic7XG4gICAgdGhpcy5jb250ZXh0Lm9uU2V0VGl0bGUodGl0bGUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luUGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luUGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDE+e3RpdGxlfUl0PC9oMT5cbiAgICAgICAgICA8cD4uLi48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9naW5QYWdlL0xvZ2luUGFnZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBOzs7Ozs7QUFBQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBOztBQUFBO0FBQ0E7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7O0FBZkE7QUFDQTtBQUNBOzs7O0FBSkE7QUFBQTtBQUFBO0FBQUE7OztBQXFCQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})