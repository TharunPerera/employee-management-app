import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
    return (
        <Router>
            <div>
                <h1>Employee Management System</h1>
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/add-employee" element={<AddEmployee />} />
                    <Route path="/edit-employee/:id" element={<EditEmployee />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
