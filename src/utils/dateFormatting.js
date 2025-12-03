/**
 * Formats a date into a localized string representation.
 * @param {Date|string|number} date - The date to format (can be a Date object, date string, or timestamp)
 * @returns {string} The formatted date string (e.g., "Jan 1, 2024") or empty string if date is falsy
 */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
