import styled from 'styled-components';

var Stack = styled.div.withConfig({
  displayName: "Stack",
  componentId: "sc-192q6fz-0"
})(["display:flex;flex-direction:column;justify-content:flex-start;> *{margin-top:0;margin-bottom:0;}", " * + *{margin-top:", ";}", ""], function (_ref) {
  var recursive = _ref.recursive;
  return recursive ? "" : ">";
}, function (_ref2) {
  var space = _ref2.space;
  return space;
}, function (_ref3) {
  var splitAfter = _ref3.splitAfter;
  return splitAfter ? "\n    :only-child {\n      height: 100%;\n    }\n\n    > :nth-child(".concat(splitAfter, ") {\n      margin-bottom: auto;\n    }") : "";
});
Stack.defaultProps = {
  recursive: false,
  space: "1rem"
};

export { Stack as default };
//# sourceMappingURL=Stack.js.map
