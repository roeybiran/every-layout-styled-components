import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type StyledReelProps = {
  height?: string;
  itemWidth?: string;
  space?: string;
  noBar?: boolean;
};

const StyledReel = styled.div<StyledReelProps>`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  height: ${({ height }) => height};

  > * {
    flex: 0 0 ${({ itemWidth }) => itemWidth};
  }

  > figure > img,
  > img {
    height: 100%;
    flex-basis: auto;
    width: auto;
  }

  > * + * {
    margin-inline-start: ${({ space }) => space};
  }

  ${({ noBar, space }) =>
    noBar
      ? ""
      : `
  &.overflowing {
    padding-bottom: ${space}
  }
`}

  ${({ noBar }) =>
    noBar
      ? `
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
    `
      : ""}
`;

export type Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ref" | "height"
> &
  StyledReelProps & {
    as?: keyof JSX.IntrinsicElements;
  };

export default function Reel(props: Props) {
  const reelRef = useRef<HTMLDivElement>(null);

  const handleObserverCallback = () => {
    if (!reelRef.current) return;
    reelRef.current.classList.toggle(
      "overflowing",
      reelRef.current.scrollWidth > reelRef.current.clientWidth
    );
  };

  useEffect(() => {
    if (!reelRef.current) return;
    let resizeObserver: ResizeObserver;
    let mutationObserver: MutationObserver;
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        handleObserverCallback();
      });
      resizeObserver.observe(reelRef.current);
    }
    if ("MutationObserver" in window) {
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
    <StyledReel
      className="reel"
      itemWidth={props.itemWidth ?? "auto"}
      space={props.space ?? "1rem"}
      height={props.height ?? "auto"}
      noBar={props.noBar ?? false}
      //
      as={props.as ?? "div"}
      ref={reelRef}
      {...props}
    />
  );
}
