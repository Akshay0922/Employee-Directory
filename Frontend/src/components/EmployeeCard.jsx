import '../assets/styles/employee-card.css';

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="employee-card">
      <div>
        <h2>{employee.name}</h2>
        <p>{employee.role}</p>
        <p className="department">{employee.department}</p>
      </div>

      <div className="card-actions">
        <button
          onClick={() => onEdit(employee)}
          className="btn edit-btn"
        >
          Edit
        </button>
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