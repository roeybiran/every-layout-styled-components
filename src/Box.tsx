import styled from 'styled-components';

// https://every-layout.dev/layouts/box/#main

type BoxProps = {
	/** A CSS padding value. */
	padding?: string;
	/** A CSS border-width value. */
	borderWidth?: string;
	/** Whether to apply an inverted theme. Only recommended for greyscale designs. */
	invert?: boolean;
};

/** A custom element for generic boxes/containers. */
export const Box = styled.div<BoxProps>`
	display: block;
	padding: ${(p) => p.padding};
	border: ${(p) => p.borderWidth} solid;
	/* ↓ For high contrast mode */
	outline: var(${(p) => p.borderWidth}) solid transparent;
	outline-offset: calc(var(${(p) => p.borderWidth}) * -1);

	background-color: inherit;

	${(p) =>
		p.invert
			? `
	filter: invert(100%);
	background-color: var(--color-light, white);
	`
			: ''};
`;

Box.defaultProps = {
	padding: 'var(--s1, 1.5rem)',
	borderWidth: 'var(--border-thin, 1px)',
	invert: false,
};
