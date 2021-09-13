import styled from "styled-components";

export interface GridProps {
  minimum?: string;
  space?: string;
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${({ minimum }) => minimum}, 100%), 1fr)
  );
  gap: ${({ space }) => space};
`;

Grid.defaultProps = {
  minimum: "250px",
  space: "1rem",
};

export default Grid;
