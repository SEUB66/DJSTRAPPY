/**
 * Shared base styles configuration for Button and Link components.
 * This module consolidates truly common styling logic while allowing
 * component-specific variations in sizes and style variants.
 */

export type Size = "md" | "lg";
export type ButtonStyle = "outline" | "primary" | "inverted";
export type LinkStyle = "outline" | "primary" | "inverted" | "muted";

/**
 * Base CSS classes shared between Button and Link components.
 */
export const baseClasses =
  "rounded-sm text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200";

/**
 * Button-specific size configurations.
 */
export const buttonSizes: Record<Size, string> = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3",
};

/**
 * Link-specific size configurations.
 */
export const linkSizes: Record<Size, string> = {
  md: "px-4 py-2",
  lg: "px-5 py-2.5",
};

/**
 * Button-specific style configurations.
 */
export const buttonStyles: Record<ButtonStyle, string> = {
  outline: "border-2 border-black hover:bg-black text-black hover:text-white",
  primary: "bg-black text-white hover:bg-slate-900 border-2 border-transparent",
  inverted: "bg-white text-black hover:bg-gray-100 border-2 border-transparent",
};

/**
 * Link-specific style configurations.
 */
export const linkStyles: Record<LinkStyle, string> = {
  outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
  primary: "bg-black text-white hover:bg-gray-800 border-2 border-transparent",
  inverted: "bg-white text-black hover:bg-gray-100 border-2 border-transparent",
  muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent",
};
