import styled from 'styled-components';

var Center = styled.div.withConfig({
  displayName: "Center",
  componentId: "sc-g13kuu-0"
})(["box-sizing:content-box;margin-left:auto;margin-right:auto;max-width:", ";", " ", " ", ""], function (_ref) {
  var max = _ref.max;
  return max;
}, function (_ref2) {
  var gutters = _ref2.gutters;
  return gutters ? "\n    padding-left: ".concat(gutters, ";\n    padding-right: ").concat(gutters, ";") : "";
}, function (_ref3) {
  var andText = _ref3.andText;
  return andText ? "text-align: center;" : "";
}, function (_ref4) {
  var intrinsic = _ref4.intrinsic;
  return intrinsic ? "\n      display: flex;\n      flex-direction: column;\n      align-items: center;" : "";
});
Center.defaultProps = {
  max: "60ch",
  andText: false,
  gutters: "0",
  intrinsic: false
};

export { Center as default };
//# sourceMappingURL=Center.js.map
