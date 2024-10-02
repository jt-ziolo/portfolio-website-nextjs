// "use client";

import { externalLinkProps } from "@/external-link-props";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { FaQuestion } from "react-icons/fa";

type Props = {
  href: string;
  linkAccessibleText: string;
  iconProps?: React.ComponentPropsWithoutRef<"span">;
  iconType?: IconType;
};

const SocialBtn: FC<Props> = (props) => {
  const IconComponent = props.iconType ?? FaQuestion;
  return (
    <Link
      href={props.href}
      aria-label={props.linkAccessibleText}
      {...externalLinkProps}
    >
      <button className="socialBtn">
        <span {...props.iconProps}>
          <IconComponent />
        </span>
      </button>
    </Link>
  );
};

export default SocialBtn;
