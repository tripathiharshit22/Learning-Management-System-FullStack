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
| Deployment  | (Add here: Vercel, Render, etc.) |

---

## 📂 Project Structure

Learning-Management-System-FullStack/
├── backend/ # Express.js API
│ ├── models/ # Mongoose schemas
│ ├── routes/ # RESTful API endpoints
│ ├── controllers/ # Business logic
│ └── server.js # Entry point
│
├── frontend/ # React app
│ ├── components/ # Shared UI components
│ ├── pages/ # Route-specific pages
│ ├── context/ # App-wide state and auth context
│ ├── services/ # API services (axios)
│ └── App.jsx # Main app structure
