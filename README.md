# BookMyDoctor - Doctor Appointment Web App

BookMyDoctor is a full-stack MERN application for booking doctor appointments online. It supports three user roles — Patient, Doctor, and Admin — with secure authentication and online payment integration.

## 🚀 Tech Stack

* React.js
* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Razorpay

## ✨ Features

### Patient

* Register/Login
* Book doctor appointments
* Online payments
* Manage profile and appointments

### Doctor

* Manage appointments
* Update profile and availability
* View earnings and patient details

### Admin

* Add/manage doctors
* View all appointments
* Dashboard analytics

## 💳 Payment Support

* Cash Payment
* Razorpay Integration

## 📦 Project Setup

Clone the repository:

```bash
git clone https://github.com/your-username/bookmydoctor.git
cd bookmydoctor
```

Install dependencies:

```bash
npm install
cd client
npm install
```

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_API_KEY=your_key
RAZORPAY_API_KEY=your_key
```

Run the project:

```bash
npm run dev
```

## 📁 Folder Structure

```plaintext
bookmydoctor/
├── client/
├── server/
├── models/
├── controllers/
├── routes/
├── middleware/
└── config/
```

## 🤝 Contributing

Pull requests and contributions are welcome.
