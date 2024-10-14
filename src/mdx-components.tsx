import type { MDXComponents } from "mdx/types";

import { LinkProps } from "next/link";

import ExternalLink from "./components/external-link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => (
      <ExternalLink {...(props as LinkProps)}>{props.children}</ExternalLink>
    ),
    ...components,
  };
}
