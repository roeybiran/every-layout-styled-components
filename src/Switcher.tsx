import styled from "styled-components";

// https://every-layout.dev/layouts/switcher/

type SwitcherProps = {
  /** A CSS `width` value (representing the 'container breakpoint'). */
  threshold?: string;
  /** A CSS `margin` value. */
  space?: string;
  /** A number representing the maximum number of items permitted for a horizontal layout. */
  limit?: number;
};

/** Switch directly between horizontal and vertical layouts at a given (container width-based) breakpoint or 'threshold'. */
export const Switcher = styled.div<SwitcherProps>`
  display: flex;
  flex-wrap: wrap;

  gap: ${(p) => p.space};

  > * {
    flex-basis: calc((${(p) => p.threshold} - 100%) * 999);
    flex-grow: 1;
  }

  > :nth-last-child(n + ${(p) => p.limit! + 1}),
  > :nth-last-child(n + ${(p) => p.limit! + 1}) ~ * {
    flex-basis: 100%;
  }
`;

Switcher.defaultProps = {
  threshold: "var(--measure, 60ch)",
  space: "var(--s1, 1.5rem)",
  limit: 4,
};
