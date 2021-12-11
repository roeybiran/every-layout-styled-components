import styled from 'styled-components';

type ImposterProps = {
	/** Whether the element is allowed to break out of the container over which it is positioned */
	breakout?: boolean;
	/** The minimum space between the element and the inside edges of the positioning container over which it is placed (where `breakout` is not applied) */
	margin?: number;
	/** Whether to position the element relative to the viewport */
	fixed?: boolean;
};

/** A custom element to be positioned absolutely over any element */
export const Imposter = styled.div<ImposterProps>`
	position: absolute;
	inset-block-start: 50%;
	inset-inline-start: 50%;
	transform: translate(-50%, -50%);

	${(p) =>
		!p.breakout
			? `
		--size: calc(100% - (${p.margin} * 2));
		max-inline-size: var(--size);
		max-block-size: var(--size);
		overflow: auto;
	`
			: ''}

	${(p) => (p.fixed ? 'position: fixed' : '')}
`;

Imposter.defaultProps = {
	breakout: false,
	margin: 0,
	fixed: false,
};
