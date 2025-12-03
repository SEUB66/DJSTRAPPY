/**
 * Shared configuration for button and link UI components
 */

/**
 * Size classes for button and link components
 */
export const sizeClasses = {
  sm: "px-3 py-1.5",
  md: "px-4 py-2",
  lg: "px-5 py-2.5",
  xl: "px-6 py-3",
} as const;

/**
 * Style variant classes for button and link components
 */
export const styleVariantClasses = {
  primary: "bg-black text-white hover:bg-slate-900 border-2 border-transparent",
  outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
  inverted: "bg-white text-black border-2 border-transparent",
  muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent",
} as const;

/**
 * Base CSS classes shared by button and link components
 */
export const baseClasses = "rounded-sm text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200";

export type Size = keyof typeof sizeClasses;
export type StyleVariant = keyof typeof styleVariantClasses;
