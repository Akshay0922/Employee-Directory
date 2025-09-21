// React imports
import { useState, useEffect } from "react";

// Components
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";

// Services for employee CRUD operations
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "../services/employeeService";

// Global styles
import '../assets/styles/styles.css';

/**
 * EmployeeDirectory Component
 * 
 * Main page for managing employees.
 * Includes search, add/edit form, and employee list.
 * Handles all frontend CRUD operations via local state and services.
 */
const EmployeeDirectory = () => {
    // State for all employees
    const [employees, setEmployees] = useState(getEmployees());

    // State for search input
    const [searchTerm, setSearchTerm] = useState("");

    // State for currently editing employee
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Load employees from localStorage on component mount
    useEffect(() => {
        setEmployees(getEmployees());
    }, []);

    /**
     * Handles saving an employee
     * Adds new employee or updates existing one
     * @param {Object} employee - Employee data from the form
     */
    const handleSave = (employee) => {
        if (selectedEmployee) {
            // Update existing employee
            const updatedList = updateEmployee(selectedEmployee.id, employee);
            setEmployees([...updatedList]);
            setSelectedEmployee(null); // Clear selection after edit
        } else {
            // Add new employee
            const updatedList = addEmployee(employee); // Ensure addEmployee returns updated array
            setEmployees([...updatedList]);
        }
    };

    /**
     * Handles editing an employee
     * Sets the selected employee to populate the form
     * @param {Object} employee - Employee object to edit
     */
    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    /**
     * Handles deleting an employee
     * Updates state after removal
     * @param {string | number} id - Employee ID to delete
     */
    const handleDelete = (id) => {
        setEmployees(deleteEmployee(id));
    };

    /**
     * Filters employees based on search input
     * Matches by name or department (case-insensitive)
     */
    const filteredEmployees = employees.filter(
        (emp) =>
            emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <section className="main-page">
                <div className="container">

                    {/* Search Bar Component */}
                    <SearchBar
                        searchQuery={searchTerm}
                        setSearchQuery={setSearchTerm}
                    />

                    {/* Add / Edit Employee Form */}
                    <EmployeeForm
                        onSubmit={handleSave}
                        editingEmployee={selectedEmployee}
                        onCancel={() => setSelectedEmployee(null)}
                    />

                    {/* Employee List Component */}
                    <EmployeeList
                        employees={filteredEmployees}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </div>
            </section>
        </>
    );
};

export default EmployeeDirectory;