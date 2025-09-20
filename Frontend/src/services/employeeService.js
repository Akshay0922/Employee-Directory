/**
 * Temporary in-memory employee data.
 * In real scenario, replace with API calls.
 */
let employees = [
  { id: 1, name: "Akshay", role: "Software Developer", department: "Information Technology" },
  { id: 2, name: "Rohit Sharma", role: "Manager", department: "HR" },
];

/**
 * Get all employees
 * @returns {Array} Array of employee objects
 */
export const getEmployees = () => {
  return employees;
};

/**
 * Add a new employee
 * @param {Object} employee - { name, role, department }
 * @returns {Object} Newly added employee with id
 */
export const addEmployee = (employee) => {
  const newEmp = { ...employee, id: Date.now() }; // Using timestamp as unique ID
  employees.push(newEmp);
  return [...employees];
};

/**
 * Update existing employee
 * @param {number} id - Employee ID to update
 * @param {Object} updatedData - Updated fields { name, role, department }
 * @returns {Array} Updated employee list
 */
export const updateEmployee = (id, updatedData) => {
  employees = employees.map((emp) =>
    emp.id === id ? { ...emp, ...updatedData } : emp
  );
  return employees;
};

/**
 * Delete employee
 * @param {number} id - Employee ID to delete
 * @returns {Array} Updated employee list
 */
export const deleteEmployee = (id) => {
  employees = employees.filter((emp) => emp.id !== id);
  return employees;
};