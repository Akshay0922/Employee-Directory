// /**
//  * Temporary in-memory employee data.
//  * In a real-world scenario, this would be replaced with API calls to a backend server.
//  */
// let employees = [
//   { id: 1, name: "Akshay", role: "Software Developer", department: "Information Technology" },
//   { id: 2, name: "Rohit Sharma", role: "Manager", department: "HR" },
// ];

// /**
//  * Fetch all employees
//  * @returns {Array} Array of employee objects
//  */
// export const getEmployees = () => {
//   return employees;
// };

// /**
//  * Add a new employee
//  * Generates a unique ID using timestamp and adds to employee list
//  * @param {Object} employee - Employee details { name, role, department }
//  * @returns {Array} Updated list of employees including the new employee
//  */
// export const addEmployee = (employee) => {
//   const newEmp = { ...employee, id: Date.now() }; // Using timestamp as unique ID
//   employees.push(newEmp);
//   return [...employees]; // Return a new array to trigger React state updates
// };

// /**
//  * Update an existing employee
//  * Finds the employee by ID and updates their data
//  * @param {number} id - ID of the employee to update
//  * @param {Object} updatedData - Updated employee fields { name, role, department }
//  * @returns {Array} Updated employee list
//  */
// export const updateEmployee = (id, updatedData) => {
//   employees = employees.map((emp) =>
//     emp.id === id ? { ...emp, ...updatedData } : emp
//   );
//   return [...employees]; // Return new array for state consistency
// };

// /**
//  * Delete an employee
//  * Removes an employee from the list by their ID
//  * @param {number} id - ID of the employee to delete
//  * @returns {Array} Updated employee list after deletion
//  */
// export const deleteEmployee = (id) => {
//   employees = employees.filter((emp) => emp.id !== id);
//   return [...employees]; // Return new array to reflect state change
// };




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