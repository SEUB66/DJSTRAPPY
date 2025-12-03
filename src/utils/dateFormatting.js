/**
 * Cached date formatter instance for better performance.
 * Creating Intl.DateTimeFormat is expensive, so reuse a single instance.
 */
const dateFormatter = new Intl.DateTimeFormat("en-us", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

/**
 * Formats a date into a localized string representation.
 * @param {Date|string|number} date - The date to format (can be a Date object, date string, or timestamp)
 * @returns {string} The formatted date string (e.g., "Jan 1, 2024") or empty string if date is falsy
 */
export const getFormattedDate = (date) =>
  date ? dateFormatter.format(new Date(date)) : "";
