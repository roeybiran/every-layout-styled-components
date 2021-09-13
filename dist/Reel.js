import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var StyledReel = styled.div.withConfig({
  displayName: "Reel__StyledReel",
  componentId: "sc-10qbagv-0"
})(["display:flex;overflow-x:auto;overflow-y:hidden;height:", ";> *{flex:0 0 ", ";}> figure > img,> img{height:100%;flex-basis:auto;width:auto;}> * + *{margin-inline-start:", ";}", " ", ""], function (_ref) {
  var height = _ref.height;
  return height;
}, function (_ref2) {
  var itemWidth = _ref2.itemWidth;
  return itemWidth;
}, function (_ref3) {
  var space = _ref3.space;
  return space;
}, function (_ref4) {
  var noBar = _ref4.noBar,
      space = _ref4.space;
  return noBar ? "" : "\n  &.overflowing {\n    padding-bottom: ".concat(space, "\n  }\n");
}, function (_ref5) {
  var noBar = _ref5.noBar;
  return noBar ? "\n    scrollbar-width: none;\n\n    ::-webkit-scrollbar {\n      display: none;\n    }\n    " : "";
});
function Reel(props) {
  var _props$itemWidth, _props$space, _props$height, _props$noBar, _props$as;

  var reelRef = useRef(null);

  var handleObserverCallback = function handleObserverCallback() {
    if (!reelRef.current) return;
    reelRef.current.classList.toggle("overflowing", reelRef.current.scrollWidth > reelRef.current.clientWidth);
  };

  useEffect(function () {
    if (!reelRef.current) return;
    var resizeObserver;
    var mutationObserver;

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(function () {
        handleObserverCallback();
      });
      resizeObserver.observe(reelRef.current);
    }

    if ("MutationObserver" in window) {
      mutationObserver = new MutationObserver(function () {
        handleObserverCallback();
      });
      mutationObserver.observe(reelRef.current, {
        childList: true
      });
    }

    return function cleanup() {
      var _resizeObserver, _mutationObserver;

      (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 ? void 0 : _resizeObserver.disconnect();
      (_mutationObserver = mutationObserver) === null || _mutationObserver === void 0 ? void 0 : _mutationObserver.disconnect();
    };
  }, []);
  return /*#__PURE__*/React.createElement(StyledReel, _extends({
    className: "reel",
    itemWidth: (_props$itemWidth = props.itemWidth) !== null && _props$itemWidth !== void 0 ? _props$itemWidth : "auto",
    space: (_props$space = props.space) !== null && _props$space !== void 0 ? _props$space : "1rem",
    height: (_props$height = props.height) !== null && _props$height !== void 0 ? _props$height : "auto",
    noBar: (_props$noBar = props.noBar) !== null && _props$noBar !== void 0 ? _props$noBar : false //
    ,
    as: (_props$as = props.as) !== null && _props$as !== void 0 ? _props$as : "div",
    ref: reelRef
  }, props));
}

export { Reel as default };
//# sourceMappingURL=Reel.js.map
