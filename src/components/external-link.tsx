import { externalLinkProps } from "@/external-link-props";
import Link, { LinkProps } from "next/link";
import { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: string;
  classNameOverride?: string;
}

const ExternalLink: FC<Props> = (props) => {
  return props.href.toString().startsWith("/") ? (
    <Link {...props} />
  ) : (
    <Link
      {...props}
      {...externalLinkProps}
      className={`${props.classNameOverride ?? "external"} ${props.className ?? ""}`}
    >
      {props.children}
      <FaExternalLinkAlt size={14} />
    </Link>
  );
};

export default ExternalLink;
