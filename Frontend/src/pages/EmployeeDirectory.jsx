import { useState } from "react";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "../services/employeeService";

import '../assets/styles/styles.css';

const EmployeeDirectory = () => {
    const [employees, setEmployees] = useState(getEmployees());
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    /** Save handler (Add or Update) */
    const handleSave = (employee) => {
        if (selectedEmployee) {
            // Update existing employee
            const updatedList = updateEmployee(selectedEmployee.id, employee);
            setEmployees([...updatedList]);
            setSelectedEmployee(null);
        } else {
            // Add new employee
            const updatedList = addEmployee(employee); // Make addEmployee return full array
            setEmployees([...updatedList]);
        }
    };


    /** Edit handler */
    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    /** Delete handler */
    const handleDelete = (id) => {
        setEmployees(deleteEmployee(id));
    };

    /** Filter employees based on search */
    const filteredEmployees = employees.filter(
        (emp) =>
            emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <section className="main-page">
                <div className="container">

                    {/* Search */}
                    <SearchBar
                        searchQuery={searchTerm}
                        setSearchQuery={setSearchTerm}
                    />

                    {/* Add / Edit Form */}
                    <EmployeeForm
                        onSubmit={handleSave}
                        editingEmployee={selectedEmployee}
                        onCancel={() => setSelectedEmployee(null)}
                    />

                    {/* Employee List */}
                    <EmployeeList
                        employees={filteredEmployees}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </div>
            </section>
        </>
    )
}

export default EmployeeDirectory;