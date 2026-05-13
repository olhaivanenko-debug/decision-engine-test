/**
 * Lightweight className utility — joins truthy strings and filters falsy values.
 * Avoids the need for a full `clsx`/`classnames` dependency.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
