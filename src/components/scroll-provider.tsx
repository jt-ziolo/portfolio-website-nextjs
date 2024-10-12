"use client";

import { useScrollToHash } from "@/lib/useScrollToHash";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const ScrollProvider: FC<Props> = ({ children }) => {
  useScrollToHash();
  return <>{children}</>;
};

export default ScrollProvider;
