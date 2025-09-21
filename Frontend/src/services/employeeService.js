/**
 * Employee Service
 * ----------------
 * Handles all CRUD operations (Create, Read, Update, Delete)
 * by communicating with the backend API (MongoDB via Express).
 */

const API_URL = "http://localhost:2209/api/employees";

/**
 * Fetch all employees from API
 * @async
 * @returns {Promise<Array>} - List of employees from backend
 */
export const getEmployees = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

/**
 * Add a new employee to backend
 * @async
 * @param {Object} employee - Employee data (name, role, department)
 * @returns {Promise<Object>} - Newly created employee object
 */
export const addEmployee = async (employee) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

/**
 * Update an existing employee
 * @async
 * @param {string} id - Employee ID (_id from MongoDB)
 * @param {Object} updatedData - Updated employee fields
 * @returns {Promise<void>} - No return, operation confirmation
 */
export const updateEmployee = async (id, updatedData) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
};

/**
 * Delete an employee by ID
 * @async
 * @param {string} id - Employee ID (_id from MongoDB)
 * @returns {Promise<void>} - No return, operation confirmation
 */
export const deleteEmployee = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};