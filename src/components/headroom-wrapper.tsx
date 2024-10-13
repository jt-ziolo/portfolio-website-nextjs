"use client";

import Headroom from "react-headroom";
import { ReactHeadroomProps } from "react-headroom";

type ComponentProps = Omit<ReactHeadroomProps, "children"> & {
  children?: React.ReactNode;
};

const HeadroomWrapper = ({ children, ...headroomProps }: ComponentProps) => {
  return <Headroom {...headroomProps}>{children}</Headroom>;
};

export default HeadroomWrapper;
