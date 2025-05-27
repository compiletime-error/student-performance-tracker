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

### Screenshots
![Screenshot 2025-04-28 110213](https://github.com/user-attachments/assets/ae46f903-f4d1-4547-8fdf-6dd4acfabb85)
![Screenshot 2025-04-28 110538](https://github.com/user-attachments/assets/58f17baa-da26-4d09-9c83-ab74a272b4fd)
![Screenshot 2025-04-28 110316](https://github.com/user-attachments/assets/d48f0586-9947-428b-971e-37778e0bd6ca)
![Screenshot 2025-04-28 110515](https://github.com/user-attachments/assets/bbdfbf5f-ae0a-42ea-aa84-2493256d2fe6)
![Screenshot 2025-04-28 110557](https://github.com/user-attachments/assets/384c5ba7-7f6f-4283-baf5-d702df4d3dc8)
![Screenshot 2025-04-28 124939](https://github.com/user-attachments/assets/32e98983-d28a-4062-a9f1-240d2b1471f5)
![Screenshot 2025-04-28 125228](https://github.com/user-attachments/assets/daa2a7c5-0b68-4977-8e99-b9852b9fcc07)
![Screenshot 2025-04-28 125308](https://github.com/user-attachments/assets/885049b9-a4e6-4c64-bcfa-e5265c0bbd39)
![Screenshot 2025-04-28 125400](https://github.com/user-attachments/assets/2b5e9618-2549-47a8-955a-f99660d7e661)
![Screenshot 2025-04-28 125139](https://github.com/user-attachments/assets/539f0714-1558-4b78-8365-d1e959799e44)
![Screenshot 2025-04-28 110457](https://github.com/user-attachments/assets/741bbb9f-6613-401a-8194-501791e1ae12)
![Screenshot 2025-04-28 110248](https://github.com/user-attachments/assets/a2df561a-5efb-496c-9287-d7dfaecdb9e1)
![Screenshot 2025-04-28 110235](https://github.com/user-attachments/assets/538981b9-3225-4844-ab6c-e50000f35a76)

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
