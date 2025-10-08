# task-management-backend

## 🚀 Features
- Secure Login for Admin & Employee (JWT Auth)
- Admin:
  - Create, Edit, Delete Tasks
  - Assign Tasks to Employees
  - Add Employees

- Employee:

  - Update Task Status (Assigned → Completed)
 
  - **Backend**
- Node.js + Express + TypeScript
- MySQL (with mysql2)
- JWT Authentication
- bcrypt.js for password hashing

- ### 🖥 Backend Setup


**create your .env file**

 .env Example
PORT=5000
JWT_SECRET= your_secret_key
DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_NAME=task_management


  **Use This Query Database Setup**

  CREATE DATABASE task_management;

  USE task_management;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('Admin', 'Employee') NOT NULL
);

INSERT INTO users 
(
name, email, password, role
) VALUES 
(
'Admin','admin@gmail.com','$2b$10$gAmDVNS0BcNucZQu1iTDgeiywKtG/Mq/NLctV.l6eYoTixUWhTCy2','Admin'
) , (  'Employee','employee@gmail.com','$2b$10$Ejw1/rXdSRmfqea8Ae4PMeRH/FMgCCZ0I5zYRkEkX3JM7VgyWlBLW','Employee')
; 

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  status ENUM('Assigned', 'Started', 'Hold', 'Completed') DEFAULT 'Assigned',
  priority ENUM('Low', 'Medium', 'High', 'Urgent'),
  assignedUserId INT,
  FOREIGN KEY (assignedUserId) REFERENCES users(id) ON DELETE SET NULL
);

- npm install
- npm run dev

