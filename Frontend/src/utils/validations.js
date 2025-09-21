/**
 * validateEmployee
 * 
 * Validates the entire employee form data.
 * Ensures all required fields are filled and contain only valid characters.
 * Also checks for "no changes" if in edit mode.
 * 
 * @param {Object} data - Current employee form data
 *   @property {string} name
 *   @property {string} role
 *   @property {string} department
 * @param {Object|null} originalData - Original employee data (only used in edit mode)
 * @returns {Object|null} - Returns an object containing field-level errors 
 *                          or a general error. Returns null if no errors.
 */
export const validateEmployee = (data, originalData = null) => {
  const alphaRegex = /^[A-Za-z\s]+$/; // Allow only letters and spaces
  const fieldErrors = { name: "", role: "", department: "" }; // Initialize errors

  // Validate Name
  if (!data.name.trim()) fieldErrors.name = "Name is required";
  else if (!alphaRegex.test(data.name.trim())) fieldErrors.name = "Name must contain only letters and spaces";

  // Validate Role
  if (!data.role.trim()) fieldErrors.role = "Role is required";
  else if (!alphaRegex.test(data.role.trim())) fieldErrors.role = "Role must contain only letters and spaces";

  // Validate Department
  if (!data.department.trim()) fieldErrors.department = "Department is required";
  else if (!alphaRegex.test(data.department.trim())) fieldErrors.department = "Department must contain only letters and spaces";

  // Extra validation in edit mode → detect no changes
  if (originalData &&
      data.name.trim() === originalData.name.trim() &&
      data.role.trim() === originalData.role.trim() &&
      data.department.trim() === originalData.department.trim()) {
    fieldErrors.general = "No changes detected to update";
  }

  // Return null if there are no errors, otherwise return the error object
  return Object.values(fieldErrors).every(v => !v) ? null : fieldErrors;
};

/**
 * validateField
 * 
 * Validates a single field for live validation (as the user types).
 * Checks for required fields and allowed characters.
 * 
 * @param {string} field - Field name ("name", "role", or "department")
 * @param {string} value - Value of the field to validate
 * @returns {string} - Returns an error message string if invalid, empty string if valid
 */
export const validateField = (field, value) => {
  const alphaRegex = /^[A-Za-z\s]+$/; // Allow only letters and spaces

  switch (field) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (!alphaRegex.test(value.trim())) return "Name must contain only letters and spaces";
      break;

    case "role":
      if (!value.trim()) return "Role is required";
      if (!alphaRegex.test(value.trim())) return "Role must contain only letters and spaces";
      break;

    case "department":
      if (!value.trim()) return "Department is required";
      if (!alphaRegex.test(value.trim())) return "Department must contain only letters and spaces";
      break;

    default:
      return ""; // Unknown field → no error
  }

  return ""; // ✅ No error detected
};