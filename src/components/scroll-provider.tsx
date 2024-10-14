"use client";

import { useScrollToHash } from "@/lib/useScrollToHash";

interface ComponentProps {
  children: React.ReactNode;
}

const ScrollProvider = ({ children }: ComponentProps) => {
  useScrollToHash();
  return <>{children}</>;
};

export default ScrollProvider;
