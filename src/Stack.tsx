import styled from 'styled-components';

type StackProps = {
	/** A CSS margin value. */
	space?: string;
	/** Whether the spaces apply recursively (i.e. regardless of nesting level). */
	recursive?: boolean;
	/** The element after which to split the stack with an auto margin. */
	splitAfter?: number;
};

export const Stack = styled.div<StackProps>`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	${(p) => (p.recursive ? '' : '>')} * + * {
		margin-block-start: ${(p) => p.space};
	}

	${(p) =>
		p.splitAfter
			? `
    :only-child {
      height: 100%;
    }

    > :nth-child(${p.splitAfter}) {
      margin-bottom: auto;
    }`
			: ''}
`;

Stack.defaultProps = {
	space: 'var(--s1, 1.5rem)',
	recursive: false,
};
