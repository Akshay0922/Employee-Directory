// Component Imports
import EmployeeCard from "./EmployeeCard";

// Component-specific CSS
import '../assets/styles/employee-list.css';

/**
 * EmployeeList Component
 * 
 * Renders a list/grid of employees using EmployeeCard components.
 * Displays a message if there are no employees.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.employees - Array of employee objects
 * @param {Function} props.onEdit - Callback function for editing an employee
 * @param {Function} props.onDelete - Callback function for deleting an employee
 */
const EmployeeList = ({ employees, onEdit, onDelete }) => {

  // Show message if employee list is empty
  if (employees.length === 0) {
    return <p style={{ textAlign: "center" }}>No employees found.</p>;
  }

  return (
    <div className="employee-list">
      {/* Map through employees and render EmployeeCard for each */}
      {employees.map((emp) => (
        <EmployeeCard
          key={emp.id}            // Unique key for each card
          employee={emp}          // Employee data passed as prop
          onEdit={onEdit}         // Edit callback passed to card
          onDelete={onDelete}     // Delete callback passed to card
        />
      ))}
    </div>
  );
};

export default EmployeeList;