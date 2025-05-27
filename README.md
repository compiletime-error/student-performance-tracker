# student-performance-tracker
# 🎓 Student Performance and Behavioural Tracking System

A full-stack web application to track and analyze student performance, academic progress, and behavioural trends. Built using **React.js** for the frontend, **Node.js** and **Express.js** for the backend, and **MySQL** as the database.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Others**: JWT for Authentication, bcrypt for password hashing

---

## 🚀 Features

### 🔐 Authentication
- Login & registration for Admin, Teachers, and Students
- Role-based access control

### 🎓 Student Management
- Add, update, and delete student records

### 📈 Performance Tracking
- Progress reports over time

### 🧠 Behavioural Monitoring
- Record behavioural observations (positive or negative)
- Category-based tagging (attendance, discipline, participation)
- Behaviour charts and history

### 📊 Dashboard
- Visual insights into academic and behavioural performance
- Filterable and sortable reports

### 📁 Admin Panel
- Manage users (teachers, students)
- Database control options

---

## 🧑‍💻 Folder Structure

student-performance-system/
│
├── backend/ # Express + MySQL backend
│ ├── config/ # DB config and middleware
│ ├── controllers/ # Route handlers
│ ├── models/ # SQL queries and schema mapping
│ ├── routes/ # All API routes
│ ├── middleware/ # Auth, error handling, etc.
│ └── index.js # Entry point
│
├── frontend/ # React app
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page components (Dashboard, Login, etc.)
│ │ ├── services/ # Axios API calls
│ │ ├── context/ # Auth and App context
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── .env # Environment variables
├── README.md
└── package.json 
