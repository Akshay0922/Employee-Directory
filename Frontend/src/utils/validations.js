/**
 * Validate employee form data
 * @param {Object} data - { name, role, department }
 * @returns {string|null} - Error message if invalid, otherwise null
 */
export const validateEmployee = (data) => {
  // Name validation
  if (!data.name || data.name.trim() === "") return "Name is required";

  // Role validation
  if (!data.role || data.role.trim() === "") return "Role is required";

  // Department validation
  if (!data.department || data.department.trim() === "") return "Department is required";

  // All good
  return null;
};