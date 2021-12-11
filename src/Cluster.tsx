import styled from 'styled-components';

type ClusterProps = {
	/** A CSS `justify-content` value. */
	justify?: string;
	/**	A CSS `align-items` value. */
	align?: string;
	/**	A CSS `gap` value. The minimum space between the clustered child elements. */
	space?: string;
};

/** A custom element for grouping items, with control over the margin between them. */
export const Cluster = styled.div<ClusterProps>`
	display: flex;
	flex-wrap: wrap;
	justify-content: ${(p) => p.justify};
	align-items: ${(p) => p.align};
	gap: ${(p) => p.space};
`;

Cluster.defaultProps = {
	justify: 'flex-start',
	align: 'flex-start',
	space: 'var(--s1, 1.5rem)',
};
