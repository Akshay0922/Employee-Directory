/**
 * Validate employee form data.
 * Ensures all required fields are filled and valid.
 * Also checks for "no changes" in edit mode.
 * 
 * @param {Object} data - Employee form data
 * @param {Object|null} originalData - Original employee (only in edit mode)
 * @returns {string|null} - Error message if invalid, otherwise null
 */
export const validateEmployee = (data, originalData = null) => {
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

  // Extra validation in edit mode → no changes detected
  if (
    originalData &&
    data.name.trim() === originalData.name.trim() &&
    data.role.trim() === originalData.role.trim() &&
    data.department.trim() === originalData.department.trim()
  ) {
    return "No changes detected to update.";
  }

  // ✅ All validations passed
  return null;
};