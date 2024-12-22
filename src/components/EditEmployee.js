import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        designation: ""
    });

    useEffect(() => {
        EmployeeService.getEmployees().then((response) => {
            const selectedEmployee = response.data.find(emp => emp.id === parseInt(id));
            if (selectedEmployee) {
                setEmployee(selectedEmployee);
            } else {
                alert("Employee not found");
            }
        }).catch((error) => {
            console.error("Error fetching employee data:", error);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(id, employee)
            .then(() => {
                alert("Employee updated successfully!");
                navigate("/"); // Navigate back to the employee list
            })
            .catch((error) => {
                console.error("Error updating employee:", error);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Edit Employee</h2>
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
                <button type="submit" className="btn btn-primary">Update Employee</button>
            </form>
        </div>
    );
};

export default EditEmployee;
