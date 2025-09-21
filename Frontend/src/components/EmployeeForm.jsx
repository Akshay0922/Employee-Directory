// React Imports
import { useState, useEffect } from "react";

// Utility function for form validation
import { validateEmployee } from "../utils/validations";

// Component-specific CSS
import '../assets/styles/employee-form.css';

/**
 * EmployeeForm Component
 * 
 * Renders a form for adding or editing an employee.
 * Handles input changes, validation, and form submission.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Callback to submit form data
 * @param {Object} props.editingEmployee - Employee data if editing
 * @param {Function} props.onCancel - Callback to cancel editing
 */
const EmployeeForm = ({ onSubmit, editingEmployee, onCancel }) => {
  // Form data state
  const [formData, setFormData] = useState({ name: "", role: "", department: "" });

  // Error message state
  const [error, setError] = useState("");

  /**
   * useEffect Hook
   * Updates form data when editingEmployee changes
   */
  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee); // populate form for editing
      setError(""); // clear any existing error
    } else {
      setFormData({ name: "", role: "", department: "" }); // reset form
    }
  }, [editingEmployee]);

  /**
   * handleChange
   * Updates formData state on input change
   * @param {Event} e - input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
 * Handle Cancel action for the form
 * 
 * - Resets form fields to their initial empty state
 * - Clears any existing validation error messages
 * - Calls the parent onCancel handler to inform parent
 *   (e.g., reset editingEmployee or close the form)
 */
  const handleCancel = () => {
    setFormData({ name: "", role: "", department: "" }); // Reset all input fields
    setError(""); // Clear local validation errors
    onCancel();   // Notify parent component that cancel action occurred
  };

  /**
   * handleSubmit
   * Validates form data and triggers onSubmit callback
   * @param {Event} e - form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const validationError = validateEmployee(formData, editingEmployee);
    if (validationError) {
      setError(validationError); // show error message
      return;
    }

    // Submit form data
    onSubmit(formData);

    // Reset form
    setFormData({ name: "", role: "", department: "" });
    setError(""); // clear error
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">

      {/* Form Heading */}
      <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Input Fields */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />

      {/* Form Action Buttons */}
      <div className="form-actions">
        <button type="submit" className="btn submit-btn">
          {editingEmployee ? "Update" : "Add"}
        </button>

        {/* Cancel Button shown only when editing */}
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