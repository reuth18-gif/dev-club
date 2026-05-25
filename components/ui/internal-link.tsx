import NextLink from "next/link";
import type { ComponentProps } from "react";

type InternalLinkProps = ComponentProps<typeof NextLink>;

/**
 * Internal navigation — always same-tab. Strips target="_blank" if passed.
 */
export function InternalLink({
  target: _ignoredTarget,
  ...props
}: InternalLinkProps) {
  return <NextLink target="_self" {...props} />;
}
