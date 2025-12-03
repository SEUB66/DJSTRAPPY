/**
 * Shared styling configuration for button and link components.
 * This utility reduces code duplication by providing common size classes,
 * style variants, and base classes used by both button.astro and link.astro.
 */

export type Size = "md" | "lg";
export type ButtonStyle = "outline" | "primary";
export type LinkStyle = "outline" | "primary" | "inverted" | "muted";

/**
 * Size classes for button and link components.
 * Maps size options to their corresponding Tailwind CSS classes.
 */
export const sizeClasses: Record<Size, string> = {
  md: "px-4 py-2",
  lg: "px-5 py-2.5",
};

/**
 * Base classes shared by both button and link components.
 */
export const baseClasses =
  "rounded-sm text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200";

/**
 * Style variant classes for button components.
 */
export const buttonStyleClasses: Record<ButtonStyle, string> = {
  outline: "border-2 border-black hover:bg-black text-black hover:text-white",
  primary: "bg-black text-white hover:bg-slate-900 border-2 border-transparent",
};

/**
 * Style variant classes for link components.
 * Includes additional variants (inverted, muted) specific to links.
 */
export const linkStyleClasses: Record<LinkStyle, string> = {
  outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
  primary: "bg-black text-white hover:bg-gray-800 border-2 border-transparent",
  inverted: "bg-white text-black border-2 border-transparent",
  muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent",
};
