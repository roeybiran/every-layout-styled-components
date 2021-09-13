import styled from 'styled-components';

var Cover = styled.div.withConfig({
  displayName: "Cover",
  componentId: "sc-kys7lo-0"
})(["display:flex;flex-direction:column;min-height:", ";padding:", ";> *{margin-top:1rem;margin-bottom:1rem;}>:first-child:not(", "){margin-top:0;}>:last-child:not(", "){margin-bottom:0;}> ", "{margin-top:auto;margin-bottom:auto;}"], function (_ref) {
  var minHeight = _ref.minHeight;
  return minHeight;
}, function (_ref2) {
  var noPad = _ref2.noPad;
  return noPad ? 0 : "1rem";
}, function (_ref3) {
  var centered = _ref3.centered;
  return centered;
}, function (_ref4) {
  var centered = _ref4.centered;
  return centered;
}, function (_ref5) {
  var centered = _ref5.centered;
  return centered;
});
Cover.defaultProps = {
  centered: "h1",
  space: "1rem",
  minHeight: "100vh",
  noPad: false
};

export { Cover as default };
//# sourceMappingURL=Cover.js.map
