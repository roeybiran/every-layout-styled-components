import styled from "styled-components";

export interface StackProps {
  recursive?: boolean;
  splitAfter?: number;
  space?: string;
}

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${({ recursive }) => (recursive ? "" : ">")} * + * {
    margin-top: ${({ space }) => space};
  }

  ${({ splitAfter }) =>
    splitAfter
      ? `
    :only-child {
      height: 100%;
    }

    > :nth-child(${splitAfter}) {
      margin-bottom: auto;
    }`
      : ""}
`;

Stack.defaultProps = {
  recursive: false,
  space: "1rem",
};

export default Stack;
