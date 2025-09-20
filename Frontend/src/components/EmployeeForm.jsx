import { useState, useEffect } from "react";
import { validateEmployee } from "../utils/validations";

const EmployeeForm = ({ onSubmit, editingEmployee, onCancel }) => {
  const [formData, setFormData] = useState({ name: "", role: "", department: "" });
  const [error, setError] = useState("");

  // Pre-fill form when editing
  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee);
      setError("");
    } else {
      setFormData({ name: "", role: "", department: "" });
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateEmployee(formData);
    if (validationError) {
      setError(validationError);
      return;
    }
    onSubmit(formData);
    setFormData({ name: "", role: "", department: "" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>

      {error && <p className="error">{error}</p>}

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

      <div className="form-actions">
        <button type="submit" className="btn submit-btn">
          {editingEmployee ? "Update" : "Add"}
        </button>
        {editingEmployee && (
          <button type="button" onClick={onCancel} className="btn cancel-btn">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default EmployeeForm;