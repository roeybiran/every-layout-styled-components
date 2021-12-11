import styled from 'styled-components';

type CenterProps = {
	/** A CSS `max-width` value. */
	max?: string;
	/** Center align the text too (`text-align: center`). */
	andText?: boolean;
	/** The minimum space on either side of the content. */
	gutters?: string;
	/** Center child elements based on their content width. */
	intrinsic?: boolean;
};

/** A custom element for centering a block-level element horizontally, with a max-width value representing the typographic measure. */
export const Center = styled.div<CenterProps>`
	display: block;
	box-sizing: content-box;
	margin-left: auto;
	margin-right: auto;
	max-width: ${(p) => p.max};

	${(p) =>
		p.gutters
			? `
    padding-inline-start: ${p.gutters};
    padding-inline-end: ${p.gutters};`
			: ''}

	${(p) => (p.andText ? 'text-align: center;' : '')}

  ${(p) =>
		p.intrinsic
			? `
		display: flex;
		flex-direction: column;
		align-items: center;`
			: ''}
`;

Center.defaultProps = {
	max: 'var(--measure, 60ch)',
	andText: false,
	intrinsic: false,
};
