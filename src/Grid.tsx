import styled from 'styled-components';

type GridProps = {
	/** A CSS length value representing x in `minmax(min(x, 100%), 1fr)`. */
	min?: string;
	/** The space between grid cells. */
	space?: string;
};

/** A custom element for creating a responsive grid using the CSS Grid module. */
export const Grid = styled.div<GridProps>`
	display: grid;
	gap: ${(p) => p.space};
	align-content: start;
	grid-template-columns: 100%;

	@supports (width: min(${(p) => p.space}, 100%)) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(min(${(p) => p.min}, 100%), 1fr)
		);
	}
`;

Grid.defaultProps = {
	min: '250px',
	space: 'var(--s1, 1.5rem)',
};
