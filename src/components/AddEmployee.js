import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        designation: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        EmployeeService.addEmployee(employee)
            .then(() => {
                alert("Employee added successfully!");
                navigate("/"); // Navigate back to the employee list
            })
            .catch((error) => {
                console.error("Error adding employee:", error);
                alert("Failed to add employee.");
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Designation</label>
                    <input
                        type="text"
                        className="form-control"
                        name="designation"
                        value={employee.designation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
