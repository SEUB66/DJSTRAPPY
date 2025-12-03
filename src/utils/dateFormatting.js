/**
 * Cached date formatter instance for consistent formatting
 * @type {Intl.DateTimeFormat}
 */
const dateFormatter = new Intl.DateTimeFormat("en-us", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

/**
 * Cache for formatted dates to avoid re-processing the same dates
 * @type {Map<number, string>}
 */
const dateCache = new Map();

/**
 * Formats a date into a localized string representation.
 * Uses memoization to cache results for repeated formatting of the same date.
 * @param {Date|string|number} date - The date to format (can be a Date object, date string, or timestamp)
 * @returns {string} The formatted date string (e.g., "Jan 1, 2024") or empty string if date is falsy
 */
export const getFormattedDate = (date) => {
  if (!date) return "";
  
  // Normalize all inputs to timestamp for consistent cache keys
  const timestamp = new Date(date).getTime();
  
  // Return empty string for invalid dates
  if (isNaN(timestamp)) return "";
  
  if (dateCache.has(timestamp)) {
    return dateCache.get(timestamp);
  }
  
  const formatted = dateFormatter.format(timestamp);
  dateCache.set(timestamp, formatted);
  return formatted;
};
