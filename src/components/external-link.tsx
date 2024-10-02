import { externalLinkProps } from "@/external-link-props";
import Link, { LinkProps } from "next/link";
import { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props extends LinkProps {
  children: React.ReactNode;
}

const ExternalLink: FC<Props> = (props) => {
  return props.href.toString().startsWith("/") ? (
    <Link {...props} />
  ) : (
    <span className="external">
      <Link {...props} {...externalLinkProps} />
      <Link {...props} {...externalLinkProps}>
        <FaExternalLinkAlt size={14} />
      </Link>
    </span>
  );
};

export default ExternalLink;
