import { externalLinkProps } from "@/external-link-props";
import Link, { LinkProps } from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ComponentProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  classNameOverride?: string;
}

const ExternalLink = ({
  children,
  className,
  classNameOverride,
  ...rest
}: ComponentProps) => {
  return rest.href.toString().startsWith("/") ? (
    <Link {...rest} />
  ) : (
    <Link
      {...rest}
      {...externalLinkProps}
      className={`${classNameOverride ?? "external"} ${className ?? ""}`}
    >
      {children}
      <FaExternalLinkAlt size={14} />
    </Link>
  );
};

export default ExternalLink;
