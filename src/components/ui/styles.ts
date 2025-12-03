// Shared types and styles for UI components

export type Size = "md" | "lg";
export type Style = "outline" | "primary" | "inverted" | "muted";

export const sizeClasses: Record<Size, string> = {
  md: "px-4 py-2",
  lg: "px-5 py-2.5",
};

export const styleVariantClasses: Record<Style, string> = {
  outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
  primary: "bg-black text-white hover:bg-gray-800 border-2 border-transparent",
  inverted: "bg-white text-black border-2 border-transparent",
  muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent",
};

export const baseClasses = "rounded-sm text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200";
