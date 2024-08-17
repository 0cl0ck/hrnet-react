"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Modal = _ref => {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  (0, _react.useEffect)(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  if (!isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "blocker",
    onClick: onClose,
    "data-testid": "modal-blocker"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `modal ${isOpen ? "modal-open" : ""}`,
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-children"
  }, children, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose,
    className: "close-modal"
  }, "Close"))));
};
var _default = exports.default = Modal;