// Import CSS specific to Employee Card styling
import '../assets/styles/employee-card.css';

import Avatar from './Avatar';

/**
 * EmployeeCard Component
 * 
 * Renders an individual employee's information in a card layout.
 * Shows name, role, department, and an avatar.
 * Provides Edit and Delete buttons for user actions.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.employee - Employee data { id, name, role, department }
 * @param {Function} props.onEdit - Callback to trigger editing this employee
 * @param {Function} props.onDelete - Callback to trigger deletion by employee ID
 */
const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="employee-card">

      {/* Employee Information Section */}
      <div className="employee-info">
        {/* Avatar showing first letter of employee name */}
        <div className='avatar-container'><Avatar name={employee.name} /> </div>

        {/* Employee Name */}
        <h2>{employee.name}</h2>

        {/* Employee Role */}
        <p>{employee.role}</p>

        {/* Employee Department */}
        <p className="department">{employee.department}</p>
      </div>

      {/* Action Buttons Section */}
      <div className="card-actions">
        {/* Edit Button */}
        <button
          onClick={() => onEdit(employee)}
          className="btn edit-btn"
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(employee.id)}
          className="btn delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;