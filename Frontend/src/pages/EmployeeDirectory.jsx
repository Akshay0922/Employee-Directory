// React imports
import { useState, useEffect } from "react";

// React Toasts for every major actions
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
 * Main container for managing employees.
 * - Provides a searchable employee list.
 * - Supports adding, editing, and deleting employees.
 * - Integrates with localStorage via service functions.
 *
 * @component
 */

const EmployeeDirectory = () => {
    /** State: All employees (fetched from localStorage on mount) */
    const [employees, setEmployees] = useState(getEmployees());

    /** State: Current search input value */
    const [searchTerm, setSearchTerm] = useState("");

    /** State: Employee object currently being edited */
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    /** State: Controls visibility of the employee form */
    const [isFormVisible, setIsFormVisible] = useState(true);

    /** State: Controls expansion of the search bar */
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    // Load employees from localStorage on component mount
    useEffect(() => {
        setEmployees(getEmployees());
    }, []);

    /**
     * Handles saving an employee (add or update).
     * - If editing, updates existing employee.
     * - If adding, appends a new employee.
     *
     * @param {Object} employee - Employee data from form.
     */

    const handleSave = (employee) => {
        if (selectedEmployee) {
            // Update existing employee
            const updatedList = updateEmployee(selectedEmployee.id, employee);
            setEmployees([...updatedList]);
            setSelectedEmployee(null); // Reset selection after edit
            toast.success("Employee updated successfully!");
        } else {
            // Add new employee
            const updatedList = addEmployee(employee);
            setEmployees([...updatedList]);
            toast.success("Employee added successfully!");
        }

        // Ensure form is visible after save
        setIsFormVisible(true);
    };

    /**
     * Handles editing an employee.
     * - Populates form with selected employee data.
     * - Collapses the search bar when editing begins.
     *
     * @param {Object} employee - Employee object to edit.
     */

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setIsFormVisible(true); // Always show form when editing

        // Collapse search bar and clear input
        setIsSearchExpanded(false);
        setSearchTerm("");

        // Scroll to top for better UX
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    /**
     * Handles deleting an employee.
     * - Removes employee from state and localStorage.
     *
     * @param {string|number} id - Employee ID to delete.
     */

    const handleDelete = (id) => {
        setEmployees(deleteEmployee(id));
        toast.info("Employee deleted.");
    };

    /**
     * Filters employees based on current search term.
     * - Matches by name or department (case-insensitive).
     */
    
    const filteredEmployees = employees.filter(
        (emp) =>
            emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.department.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <section className="main-page">
            <div className="container">

                {/* Search Bar (collapsible) */}
                <SearchBar
                    searchQuery={searchTerm}
                    setSearchQuery={setSearchTerm}
                    expanded={isSearchExpanded}
                    setExpanded={(exp) => {
                        setIsSearchExpanded(exp);
                        setIsFormVisible(!exp); // Hide form if search bar is expanded
                    }}
                />

                {/* Employee Form (add/edit) wrapped in show/hide animation */}
                <div className={`form-wrapper ${isFormVisible ? "show" : "hide"}`}>
                    <EmployeeForm
                        onSubmit={handleSave}
                        editingEmployee={selectedEmployee}
                        onCancel={() => setSelectedEmployee(null)}
                    />
                </div>

                {/* Employee List */}
                <EmployeeList
                    employees={filteredEmployees}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                pauseOnHover
                draggable
            />
        </section>
    );
};

export default EmployeeDirectory;