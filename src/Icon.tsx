import styled from 'styled-components';

type IconProps = {
	/** The space between the text and the icon. If null, natural word spacing is preserved */
	space?: string;
	/** Turns the element into an image in assistive technologies and adds an aria-label of the value */
	label?: string;
};

/** A custom element for inline icon insertion */
const Icon = styled.div.attrs<IconProps>((p) => ({
	role: p.label ? 'img' : undefined,
	ariaLabel: p.label,
}))<IconProps>`
	svg {
		block-size: 0.75em;
		block-size: 1cap;
		inline-size: 0.75em;
		inline-size: 1cap;
	}

	${(p) =>
		p.space
			? `
		display: inline-flex;
		align-items: baseline;

		> svg {
			margin-inline-end: ${p.space};
		}
	`
			: ''}
`;

export default Icon;
