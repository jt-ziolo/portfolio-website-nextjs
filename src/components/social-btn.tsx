// "use client";

import { externalLinkProps } from "@/external-link-props";
import Link from "next/link";
import { useId } from "react";
import { IconType } from "react-icons";
import { FaQuestion } from "react-icons/fa";

type ComponentProps = {
  href: string;
  linkAccessibleText: string;
  iconProps?: React.ComponentPropsWithoutRef<"span">;
  iconType?: IconType;
};

const SocialBtn = ({
  href,
  linkAccessibleText,
  iconProps,
  iconType,
}: ComponentProps) => {
  const IconComponent = iconType ?? FaQuestion;
  const id = useId();

  return (
    <Link
      id={id}
      href={href}
      aria-label={linkAccessibleText}
      {...externalLinkProps}
    >
      <button aria-labelledby={id} className="socialBtn">
        <span {...iconProps}>
          <IconComponent />
        </span>
      </button>
    </Link>
  );
};

export default SocialBtn;
