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
  // Common regex: only alphabets + spaces allowed
  const alphaRegex = /^[A-Za-z\s]+$/;

  // Validate Name
  if (!data.name || data.name.trim() === "") {
    return "Name is required";
  }
  if (!alphaRegex.test(data.name.trim())) {
    return "Name must contain only letters and spaces";
  }

  // Validate Role
  if (!data.role || data.role.trim() === "") {
    return "Role is required";
  }
  if (!alphaRegex.test(data.role.trim())) {
    return "Role must contain only letters and spaces";
  }

  // Validate Department
  if (!data.department || data.department.trim() === "") {
    return "Department is required";
  }
  if (!alphaRegex.test(data.department.trim())) {
    return "Department must contain only letters and spaces";
  }

  // If all validations pass
  return null;
};