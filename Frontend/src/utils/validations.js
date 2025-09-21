/**
 * Validate employee form data.
 * Ensures all required fields are filled.
 * @param {Object} data - Employee data object containing:
 *   @property {string} name - Employee name
 *   @property {string} role - Employee role
 *   @property {string} department - Employee department
 * @returns {string|null} - Returns error message string if validation fails, otherwise null
 */
export const validateEmployee = (data) => {
  // Validate Name: must not be empty or whitespace only
  if (!data.name || data.name.trim() === "") return "Name is required";

  // Validate Role: must not be empty or whitespace only
  if (!data.role || data.role.trim() === "") return "Role is required";

  // Validate Department: must not be empty or whitespace only
  if (!data.department || data.department.trim() === "") return "Department is required";

  // If all validations pass, return null
  return null;
};