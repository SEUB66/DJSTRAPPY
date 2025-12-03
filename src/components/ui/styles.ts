// Shared types and styles for UI components

export type Size = "md" | "lg";

// Button styles
export type ButtonStyle = "outline" | "primary" | "inverted";

// Link styles (includes button styles plus additional variants)
export type LinkStyle = "outline" | "primary" | "inverted" | "muted";

// Size classes for buttons
export const buttonSizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3",
};

// Size classes for links
export const linkSizeClasses: Record<Size, string> = {
  md: "px-4 py-2",
  lg: "px-5 py-2.5",
};

// Style variant classes for buttons
export const buttonStyleVariantClasses: Record<ButtonStyle, string> = {
  outline: "border-2 border-black hover:bg-black text-black hover:text-white",
  primary: "bg-black text-white hover:bg-slate-900 border-2 border-transparent",
  inverted: "bg-white text-black border-2 border-transparent",
};

// Style variant classes for links
export const linkStyleVariantClasses: Record<LinkStyle, string> = {
  outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
  primary: "bg-black text-white hover:bg-gray-800 border-2 border-transparent",
  inverted: "bg-white text-black border-2 border-transparent",
  muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent",
};

// Shared base classes
export const baseClasses = "rounded-sm text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200";
