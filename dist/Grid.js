import styled from 'styled-components';

var Grid = styled.div.withConfig({
  displayName: "Grid",
  componentId: "sc-k3urd1-0"
})(["display:grid;grid-template-columns:repeat( auto-fit,minmax(min(", ",100%),1fr) );gap:", ";"], function (_ref) {
  var minimum = _ref.minimum;
  return minimum;
}, function (_ref2) {
  var space = _ref2.space;
  return space;
});
Grid.defaultProps = {
  minimum: "250px",
  space: "1rem"
};

export { Grid as default };
//# sourceMappingURL=Grid.js.map
