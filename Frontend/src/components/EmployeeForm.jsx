// React Imports
import { useState, useEffect } from "react";

// Utility functions for validation
import { validateEmployee, validateField } from "../utils/validations";

// Component-specific CSS
import '../assets/styles/employee-form.css';

/**
 * EmployeeForm Component
 *
 * Renders a form for adding a new employee or editing an existing one.
 * Handles live field-level validation, full form validation, and submission.
 * Shows appropriate error messages including a "no changes detected" message in edit mode.
 *
 * @param {Object} props
 * @param {Function} props.onSubmit - Callback function to submit form data to parent
 * @param {Object|null} props.editingEmployee - Employee object if editing, null when adding
 * @param {Function} props.onCancel - Callback function invoked when editing is cancelled
 */
const EmployeeForm = ({ onSubmit, editingEmployee, onCancel }) => {
  // State to hold current input values for name, role, and department
  const [formData, setFormData] = useState({ name: "", role: "", department: "" });

  // State to hold validation errors for each field + general errors
  const [errors, setErrors] = useState({ name: "", role: "", department: "" });

  /**
   * useEffect Hook
   * - Runs whenever editingEmployee prop changes
   * - Populates the form fields when editing an employee
   * - Clears previous validation errors
   */
  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee); // Populate form for editing
      setErrors({ name: "", role: "", department: "" }); // Clear errors
    } else {
      // Reset form when adding a new employee
      setFormData({ name: "", role: "", department: "" });
      setErrors({ name: "", role: "", department: "" });
    }
  }, [editingEmployee]);

  /**
   * handleChange
   * - Updates the formData state when an input field changes
   * - Performs field-level validation on the fly
   * @param {Event} e - The input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the specific field in formData
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate the field and update the corresponding error message
    const errorMessage = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMessage }));
  };

  /**
   * handleCancel
   * - Resets the form fields to empty values
   * - Clears all validation errors
   * - Calls the parent onCancel function to close form or reset editing state
   */
  const handleCancel = () => {
    setFormData({ name: "", role: "", department: "" }); // Reset form
    setErrors({ name: "", role: "", department: "" });   // Clear errors
    onCancel(); // Notify parent about cancel action
  };

  /**
   * handleSubmit
   * - Prevents default form submission behavior
   * - Runs full form validation (including "no changes" check in edit mode)
   * - Updates errors state if validation fails
   * - Calls parent onSubmit with formData if validation passes
   * - Resets the form after successful submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Run full form validation
    const validationErrors = validateEmployee(formData, editingEmployee);
    if (validationErrors) {
      setErrors(validationErrors); // Show validation errors
      return; // Stop submission
    }

    // Submit valid form data to parent
    onSubmit(formData);

    // Reset form and errors after submission
    setFormData({ name: "", role: "", department: "" });
    setErrors({ name: "", role: "", department: "", general: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">

      {/* Form heading: dynamically changes based on add/edit mode */}
      <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>

      {/* Display general errors (e.g., "No changes detected") */}
      {errors.general && <p className="error">{errors.general}</p>}

      {/* Input field for Name */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      {/* Input field for Role */}
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
      />
      {errors.role && <p className="error">{errors.role}</p>}

      {/* Input field for Department */}
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />
      {errors.department && <p className="error">{errors.department}</p>}

      {/* Form Action Buttons */}
      <div className="form-actions">
        {/* Submit button: label changes based on add/edit mode */}
        <button type="submit" className="btn submit-btn">
          {editingEmployee ? "Update" : "Add"}
        </button>

        {/* Cancel button: only visible when editing */}
        {editingEmployee && (
          <button type="button" onClick={handleCancel} className="btn cancel-btn">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default EmployeeForm;