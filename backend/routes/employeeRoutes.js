import express from "express";
import Employee from "../models/Employee.js";

const router = express.Router();

/**
 * Employee Routes
 * 
 * Provides CRUD API endpoints for managing employees.
 * Endpoints:
 *  - GET    /api/employees       → Fetch all employees
 *  - POST   /api/employees       → Add a new employee
 *  - PUT    /api/employees/:id   → Update existing employee
 *  - DELETE /api/employees/:id   → Delete employee
 */

/**
 * GET /api/employees
 * Fetch all employees from the database.
 */
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
});

/**
 * POST /api/employees
 * Add a new employee to the database.
 */
router.post("/", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: "Failed to add employee" });
  }
});

/**
 * PUT /api/employees/:id
 * Update an existing employee by ID.
 */
router.put("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: true, message: "Employee updated successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to update employee" });
  }
});

/**
 * DELETE /api/employees/:id
 * Delete an employee by ID.
 */
router.delete("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Employee deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete employee" });
  }
});

export default router;