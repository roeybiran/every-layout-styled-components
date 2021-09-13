import styled from "styled-components";

// https://every-layout.dev/layouts/switcher/

export interface SwitcherProps {
  threshold?: string;
  space?: string;
  limit?: number;
}

const Switcher = styled.div<SwitcherProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ space }) => space};

  > * {
    flex-grow: 1;
    flex-basis: calc((${({ threshold }) => threshold} - 100%) * 999);
  }

  > :nth-last-child(n + ${({ limit }) => limit! + 1}),
  > :nth-last-child(n + ${({ limit }) => limit! + 1}) ~ * {
    flex-basis: 100%;
  }
`;

Switcher.defaultProps = {
  threshold: "60ch",
  space: "1rem",
  limit: 4,
};

export default Switcher;
