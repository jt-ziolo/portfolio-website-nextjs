import type { MDXComponents } from "mdx/types";
import ExternalLink from "./components/external-link";
import { LinkProps } from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => (
      <ExternalLink {...(props as LinkProps)}>{props.children}</ExternalLink>
    ),
    ...components,
  };
}
