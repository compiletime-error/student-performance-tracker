import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import ParentDashboard from './components/ParentDashboard';
import AdminDashboard from './components/AdminDashboard';
import './styles/common.css';

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/faculty" element={<FacultyDashboard />} />
                <Route path="/parent" element={<ParentDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
};

export default App; 