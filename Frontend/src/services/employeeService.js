const EMPLOYEE_KEY = "employees";

/**
 * Get all employees
 * @returns {Array} Array of employee objects
 */
export const getEmployees = () => {
  return JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
};

/**
 * Add a new employee
 * @param {Object} employee - { name, role, department }
 * @returns {Array} Updated employee list
 */
export const addEmployee = (employee) => {
  const employees = getEmployees();
  const newEmp = { ...employee, id: Date.now() }; // unique ID using timestamp
  employees.push(newEmp);
  localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(employees));
  return employees;
};

/**
 * Update existing employee
 * @param {number} id - Employee ID to update
 * @param {Object} updatedData - { name, role, department }
 * @returns {Array} Updated employee list
 */
export const updateEmployee = (id, updatedData) => {
  let employees = getEmployees();
  employees = employees.map((emp) =>
    emp.id === id ? { ...emp, ...updatedData } : emp
  );
  localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(employees));
  return employees;
};

/**
 * Delete employee
 * @param {number} id - Employee ID to delete
 * @returns {Array} Updated employee list
 */
export const deleteEmployee = (id) => {
  let employees = getEmployees();
  employees = employees.filter((emp) => emp.id !== id);
  localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(employees));
  return employees;
};