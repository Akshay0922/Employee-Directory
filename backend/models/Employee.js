import mongoose from "mongoose";

/**
 * Employee Schema
 * 
 * Defines the structure of an Employee document in MongoDB.
 * Each employee has:
 *  - name: Full name of the employee (string, required)
 *  - role: Job role/designation of the employee (string, required)
 *  - department: Department where the employee works (string, required)
 * 
 * Schema also includes automatic timestamps (createdAt, updatedAt).
 */
const employeeSchema = new mongoose.Schema(
  {
    /** Employee's full name */
    name: { type: String, required: true },

    /** Employee's role/designation */
    role: { type: String, required: true },

    /** Department to which the employee belongs */
    department: { type: String, required: true },
  },
  { 
    /** Automatically adds createdAt and updatedAt fields */
    timestamps: true 
  }
);

/**
 * Employee Model
 * 
 * Represents the "employees" collection in MongoDB.
 * Provides methods to interact with employee documents.
 */
const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;