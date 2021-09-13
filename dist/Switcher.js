import styled from 'styled-components';

var Switcher = styled.div.withConfig({
  displayName: "Switcher",
  componentId: "sc-10kafwh-0"
})(["display:flex;flex-wrap:wrap;gap:", ";> *{flex-grow:1;flex-basis:calc((", " - 100%) * 999);}>:nth-last-child(n + ", "),>:nth-last-child(n + ", ") ~ *{flex-basis:100%;}"], function (_ref) {
  var space = _ref.space;
  return space;
}, function (_ref2) {
  var threshold = _ref2.threshold;
  return threshold;
}, function (_ref3) {
  var limit = _ref3.limit;
  return limit + 1;
}, function (_ref4) {
  var limit = _ref4.limit;
  return limit + 1;
});
Switcher.defaultProps = {
  threshold: "60ch",
  space: "1rem",
  limit: 4
};

export { Switcher as default };
//# sourceMappingURL=Switcher.js.map
