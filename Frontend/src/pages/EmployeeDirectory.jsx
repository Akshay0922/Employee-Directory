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
 * This is the main container for the Employee Directory page.
 * It manages the employee list, search functionality, and add/edit/delete operations.
 * Uses a backend API (via employeeService) for CRUD operations.
 */
const EmployeeDirectory = () => {
    /** State: List of employees fetched from backend */
    const [employees, setEmployees] = useState([]);

    /** State: Search term entered by user */
    const [searchTerm, setSearchTerm] = useState("");

    /** State: Currently selected employee for editing */
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    /**
     * Fetch all employees on initial render
     * Equivalent to componentDidMount()
     */
    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmployees(data);
        };
        fetchEmployees();
    }, []);

    /**
     * Save Handler (Add or Update employee)
     * - If editing, update the existing employee
     * - If adding, create a new employee
     * After save, refresh list from API
     * 
     * @param {Object} employee - Employee form data (name, role, department)
     */
    const handleSave = async (employee) => {
        if (selectedEmployee) {
            // Update existing employee
            await updateEmployee(selectedEmployee._id, employee);
            const data = await getEmployees();
            setEmployees(data);
            setSelectedEmployee(null); // Clear selection after edit
        } else {
            // Add new employee
            await addEmployee(employee);
            const data = await getEmployees();
            setEmployees(data);
        }
    };

    /**
     * Edit Handler
     * Sets selectedEmployee so the form is pre-filled for editing
     * 
     * @param {Object} employee - Employee object to be edited
     */
    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    /**
     * Delete Handler
     * Removes employee from backend and refreshes list
     * 
     * @param {string} id - Employee ID (_id from MongoDB)
     */
    const handleDelete = async (id) => {
        await deleteEmployee(id);
        const data = await getEmployees();
        setEmployees(data);
    };

    /**
     * Filter employees based on search input
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

                    {/* Search Bar for filtering employees */}
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

                    {/* Employee List Display */}
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