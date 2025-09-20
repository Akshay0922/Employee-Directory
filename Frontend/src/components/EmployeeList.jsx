import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  if (employees.length === 0) {
    return <p style={{textAlign: "center"}}>No employees found.</p>;
  }

  return (
    <div className="employee-list">
      {employees.map((emp) => (
        <EmployeeCard
          key={emp.id}
          employee={emp}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default EmployeeList;