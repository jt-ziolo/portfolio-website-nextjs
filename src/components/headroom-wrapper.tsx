"use client";

import Headroom from "react-headroom";
import { ReactHeadroomProps } from "react-headroom";

type WrappedReactHeadroomProps = Omit<ReactHeadroomProps, "children"> & {
  children?: React.ReactNode;
};

export default function HeadroomWrapper({
  children,
  ...headroomProps
}: WrappedReactHeadroomProps) {
  return <Headroom {...headroomProps}>{children}</Headroom>;
}
