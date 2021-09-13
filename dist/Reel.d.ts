import React from "react";
declare type StyledReelProps = {
    height?: string;
    itemWidth?: string;
    space?: string;
    noBar?: boolean;
};
export declare type Props = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref" | "height"> & StyledReelProps & {
    as?: keyof JSX.IntrinsicElements;
};
export default function Reel(props: Props): JSX.Element;
export {};
