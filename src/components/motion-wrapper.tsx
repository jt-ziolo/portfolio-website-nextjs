"use client";

import { HTMLMotionProps, motion } from "framer-motion";

const MotionWrapper = ({
  children,
  motionProps,
}: Readonly<{
  children: React.ReactNode;
  motionProps: HTMLMotionProps<"div">;
}>) => {
  return <motion.div {...motionProps}>{children}</motion.div>;
};

export default MotionWrapper;
