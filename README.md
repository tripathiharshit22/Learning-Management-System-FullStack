# 📚 Learning Management System (LMS) – MERN Stack Project

A full-stack Learning Management System built using the **MERN stack** (MongoDB, Express.js, React, Node.js), with modern authentication using **Clerk**, and secure payments powered by **Stripe**.

This LMS enables:
- 👨‍🏫 Educators to create and publish courses
- 👨‍🎓 Students to browse, enroll in, and watch those courses
- 💳 Online payments for premium content access

---

## 🚀 Features

### ✅ Authentication (Clerk)
- Secure sign-up, sign-in, and profile management
- Pre-built, customizable Clerk UI components
- Role-based access (Educator & Student)

### ✅ Payments (Stripe)
- Stripe Checkout integration for purchasing courses
- Educators earn from enrollments
- Webhook handling for payment success/failure

### ✅ Core LMS Functionality
- Course creation with title, description, thumbnail, and video lectures
- Student enrollment tracking
- Lecture progress indicators and completion status
- Course listing, sorting, and filtering
- Responsive video player for smooth playback

---

## 🧩 Tech Stack

| Layer       | Tech                          |
|-------------|-------------------------------|
| Frontend    | React, Tailwind CSS           |
| Backend     | Node.js, Express.js           |
| Database    | MongoDB with Mongoose         |
| Auth        | Clerk.dev                     |
| Payments    | Stripe API                    |
| Deployment  | Vercel                        |

---

## 📂 Project Structure

Learning-Management-System-FullStack/
├── backend/ # Node.js + Express backend
│ ├── controllers/ # Logic for handling API requests
│ ├── models/ # Mongoose schemas (User, Course, Progress)
│ ├── routes/ # API route definitions
│ ├── middlewares/ # Auth, error handling, validators
│ ├── utils/ # Helper functions (e.g. courseProgress)
│ └── server.js # Entry point of the backend server
│
├── frontend/ # React + Vite frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components (Navbar, Footer)
│ │ ├── pages/ # Route-based pages (Home, Course, Player)
│ │ ├── context/ # Global state and auth using Context API
│ │ ├── services/ # API utilities using Axios
│ │ └── App.jsx # Main application with routing
│ └── tailwind.config.js # Tailwind CSS configuration
│
├── .env.example # Example environment variable file
├── README.md # Project documentation
└── package.json # Project dependencies (for backend)
