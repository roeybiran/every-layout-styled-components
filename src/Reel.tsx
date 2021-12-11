import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

type ReelProps = {
	/** The width of each item (child element) in the Reel */
	itemWidth?: string;
	/** The space between Reel items (child elements) */
	space?: string;
	/** The height of the Reel itself */
	height?: string;
	/** Whether to display the scrollbar */
	noBar?: boolean;
};

export const Reel = styled(_Reel)<ReelProps>`
	display: flex;
	overflow-x: auto;
	overflow-y: hidden;
	scrollbar-color: var(--color-light) var(--color-dark);

	> img {
		height: 100%;
		flex-basis: auto;
		width: auto;
	}

	::-webkit-scrollbar {
		height: 1rem;
	}

	::-webkit-scrollbar-track {
		background-color: var(--color-dark);
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--color-dark);
		background-image: linear-gradient(
			var(--color-dark) 0,
			var(--color-dark) 0.25rem,
			var(--color-light) 0.25rem,
			var(--color-light) 0.75rem,
			var(--color-dark) 0.75rem
		);
	}

	height: ${(p) => p.height};

	> * {
		flex: 0 0 ${(p) => p.itemWidth};
	}

	> * + * {
		margin-inline-start: ${(p) => p.space};
	}

	&.overflowing {
		${(p) => (p.noBar ? '' : `padding-block-end: ${p.space}`)}
	}

	${(p) =>
		p.noBar
			? `
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
		`
			: ''}
`;

type _Props = {
	className?: string;
	children?: React.ReactNode;
};

function _Reel({ className, children }: _Props) {
	const reelRef = useRef<HTMLDivElement>(null);

	const handleObserverCallback = () => {
		if (!reelRef.current) return;
		reelRef.current.classList.toggle(
			'overflowing',
			reelRef.current.scrollWidth > reelRef.current.clientWidth
		);
	};

	useEffect(() => {
		if (!reelRef.current) return;
		let resizeObserver: ResizeObserver;
		let mutationObserver: MutationObserver;

		if ('ResizeObserver' in window) {
			resizeObserver = new ResizeObserver(() => {
				handleObserverCallback();
			});
			resizeObserver.observe(reelRef.current);
		}

		if ('MutationObserver' in window) {
			mutationObserver = new MutationObserver(() => {
				handleObserverCallback();
			});
			mutationObserver.observe(reelRef.current, { childList: true });
		}
		return function cleanup() {
			resizeObserver?.disconnect();
			mutationObserver?.disconnect();
		};
	}, []);

	return (
		<div ref={reelRef} className={className}>
			{children}
		</div>
	);
}
