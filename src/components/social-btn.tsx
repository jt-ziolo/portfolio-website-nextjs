// "use client";

import { externalLinkProps } from "@/external-link-props";
import Link from "next/link";
import { FC, useId } from "react";
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
  const id = useId();

  return (
    <Link
      id={id}
      href={props.href}
      aria-label={props.linkAccessibleText}
      {...externalLinkProps}
    >
      <button aria-labelledby={id} className="socialBtn">
        <span {...props.iconProps}>
          <IconComponent />
        </span>
      </button>
    </Link>
  );
};

export default SocialBtn;
