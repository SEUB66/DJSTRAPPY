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
 * @type {Map<string|number, string>}
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
  
  // Create a cache key from the date
  const cacheKey = date instanceof Date ? date.getTime() : date;
  
  if (dateCache.has(cacheKey)) {
    return dateCache.get(cacheKey);
  }
  
  const formatted = dateFormatter.format(new Date(date));
  dateCache.set(cacheKey, formatted);
  return formatted;
};
