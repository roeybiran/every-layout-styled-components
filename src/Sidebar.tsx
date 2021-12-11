import React from 'react';
import styled from 'styled-components';

// https://every-layout.dev/layouts/sidebar/

type SidebarProps = {
	/** Which element to treat as the sidebar */
	side?: 'first' | 'second';
	/** Represents the width of the sidebar _when_ adjacent. If not set (`null`) it defaults to the sidebar's content width */
	sideWidth?: string;
	/** A CSS **percentage** value. The minimum width of the content element in the horizontal configuration */
	contentMin?: number;
	/** A CSS margin value representing the space between the two elements */
	space?: string;
	/** Make the adjacent elements adopt their natural height */
	noStretch?: boolean;

	children: [React.ReactNode, React.ReactNode];
};

/** A custom element for placing two elements side-by-side. If space permits, the sidebar element has a set width, and the companion takes up the rest of the available horizontal space. If not, the elements are collapsed into a single column, each taking up 100% of the horizontal space. */
export const Sidebar = styled.div<SidebarProps>`
	display: flex;
	flex-wrap: wrap;
	gap: ${(p) => p.space};

	${(p) => (p.noStretch ? 'align-items: flex-start' : '')}

	> * {
		${(p) => (p.sideWidth ? `flex-basis: ${p.sideWidth}` : '')}
		flex-grow: 1;
	}

	> ${(p) => (p.side !== 'first' ? ':first-child' : ':last-child')} {
		flex-basis: 0;
		flex-grow: 999;
		min-width: ${(p) => p.contentMin}%;
	}
`;

Sidebar.defaultProps = {
	side: 'first',
	contentMin: 50,
	space: 'var(--s1, 1.5rem)',
	noStretch: false,
};
