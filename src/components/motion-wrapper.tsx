"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionWrapper({
  children,
  motionProps,
}: Readonly<{
  children: React.ReactNode;
  motionProps: HTMLMotionProps<"div">;
}>) {
  return <motion.div {...motionProps}>{children}</motion.div>;
}
