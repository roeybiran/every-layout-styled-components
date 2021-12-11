import styled from 'styled-components';

type CoverProps = {
	/** A simple selector such an element or class selector, representing the centered (main) element in the cover. */
	centered?: string;
	/** The minimum space between and around all of the child elements. */
	space?: string;
	/** The minimum height for the **Cover**. */
	minHeight?: string;
	/** Whether the spacing is also applied as padding to the container element. */
	noPad?: boolean;
};

export const Cover = styled.div<CoverProps>`
	display: flex;
	flex-direction: column;
	min-height: ${(p) => p.minHeight};
	padding: ${(p) => (p.noPad ? 0 : p.space)};

	> * {
		margin-block-start: ${(p) => p.space};
		margin-block-end: ${(p) => p.space};
	}

	> :first-child:not(${(p) => p.centered}) {
		margin-block-start: 0;
	}

	> :last-child:not(${(p) => p.centered}) {
		margin-block-end: 0;
	}

	> ${(p) => p.centered} {
		margin-block-start: auto;
		margin-block-end: auto;
	}
`;

Cover.defaultProps = {
	centered: 'h1',
	space: 'var(--s1, 1.5rem)',
	minHeight: '100vh',
	noPad: false,
};
