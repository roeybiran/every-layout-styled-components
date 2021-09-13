import styled from "styled-components";

export interface CoverProps {
  centered?: string;
  space?: string;
  minHeight?: string;
  noPad?: boolean;
}

const Cover = styled.div<CoverProps>`
  display: flex;
  flex-direction: column;
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ noPad }) => (noPad ? 0 : "1rem")};

  > * {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  > :first-child:not(${({ centered }) => centered}) {
    margin-top: 0;
  }

  > :last-child:not(${({ centered }) => centered}) {
    margin-bottom: 0;
  }

  > ${({ centered }) => centered} {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

Cover.defaultProps = {
  centered: "h1",
  space: "1rem",
  minHeight: "100vh",
  noPad: false,
};

export default Cover;
