// Import Employee Card specific CSS
import '../assets/styles/employee-card.css';

/**
 * EmployeeCard Component
 * 
 * Displays individual employee details in a card layout.
 * Includes Edit and Delete buttons for user actions.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.employee - Employee data (name, role, department, id)
 * @param {Function} props.onEdit - Callback function to handle edit action
 * @param {Function} props.onDelete - Callback function to handle delete action
 */
const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="employee-card">
      
      {/* Employee Information */}
      <div>
        {/* Employee Name */}
        <h2>{employee.name}</h2>

        {/* Employee Role */}
        <p>{employee.role}</p>

        {/* Employee Department */}
        <p className="department">{employee.department}</p>
      </div>

      {/* Action Buttons */}
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