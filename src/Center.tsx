import styled from "styled-components";

export interface CenterProps {
  andText?: boolean;
  gutters?: string;
  intrinsic?: boolean;
  max?: string;
}

const Center = styled.div<CenterProps>`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ max }) => max};

  ${({ gutters }) =>
    gutters
      ? `
    padding-left: ${gutters};
    padding-right: ${gutters};`
      : ""}

  ${({ andText }) => (andText ? `text-align: center;` : "")}

  ${({ intrinsic }) =>
    intrinsic
      ? `
      display: flex;
      flex-direction: column;
      align-items: center;`
      : ""}
`;

Center.defaultProps = {
  max: "60ch",
  andText: false,
  gutters: "0",
  intrinsic: false,
};

export default Center;
