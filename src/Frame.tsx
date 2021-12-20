import styled from 'styled-components';

type FrameProps = {
	/** The element's aspect ratio. */
	ratio?: string;
};

/** A custom element for augmenting image ratios */
export const Frame = styled.div<FrameProps>`
	display: block;
	position: relative;

	--ratio: ${(p) =>
		p
			.ratio!.split(':')
			.map(Number)
			.reduce((a, b) => b / a)};
	padding-block-end: calc(var(--ratio) * 100%);

	> * {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		inset: 0;
	}

	> img,
	> video {
		block-size: 100%;
		inline-size: 100%;
		object-fit: cover;
	}
`;

Frame.defaultProps = {
	ratio: '16:9',
};
