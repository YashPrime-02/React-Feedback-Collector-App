## 📋 Project Overview – Feedback Collector App

**Feedback Collector** is a modern, glassmorphic React + TypeScript application that allows users to submit, edit, delete, and filter feedback dynamically.
It’s a lightweight front-end project designed to demonstrate real-world React skills — handling state management, controlled forms, validation, and persistence using localStorage.

Built with a clean, modular structure, this app mimics how feedback widgets or review forms work in professional web applications.

---

## ✨ Features

* 🧩 **Component-Based Architecture** — modularized React components for scalability.
* 💬 **Feedback System** — add, edit, delete feedback dynamically.
* 🔢 **Rating Filter** — filter feedback by user rating (1–5 stars).
* 💾 **Persistent Storage** — saves data using a custom `useLocalStorage` hook.
* 🎨 **Glassmorphic UI** — modern frosted-glass design with 3D gradients and neon highlights.
* ⚡ **Vite + TypeScript** — fast dev environment with strong typing and instant HMR.
* 🧠 **Form Validation** — built-in validation for title, message, and rating inputs.
* 📱 **Responsive Layout** — optimized for desktop and mobile screens.

---

## 🏗️ Tech Stack

| Layer            | Technology Used                                               |
| ---------------- | ------------------------------------------------------------- |
| Frontend         | **React 18**, **TypeScript**, **Vite**                        |
| Styling          | **CSS Modules**, **Glassmorphism**, **Responsive CSS**        |
| State Management | **React Context API**                                         |
| Persistence      | **Custom Hook (`useLocalStorage`)**                           |
| Utilities        | **uuid** for unique IDs, **Form Validators** for field checks |

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/feedback-app.git
cd feedback-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

### 4️⃣ Build for Production

```bash
npm run build
```

### 5️⃣ Preview the Production Build

```bash
npm run preview
```

---

## 🧩 Folder Breakdown

| Folder             | Purpose                                                                               |
| ------------------ | ------------------------------------------------------------------------------------- |
| **src/components** | Holds reusable UI components like `FeedbackForm`, `FeedbackList`, and `RatingFilter`. |
| **src/context**    | Contains the `FeedbackContext` that manages global state across the app.              |
| **src/hooks**      | Includes custom hooks like `useLocalStorage` for persistent data.                     |
| **src/services**   | Abstracts browser APIs such as localStorage (ready for backend switch later).         |
| **src/utils**      | Validation and helper utilities for cleaner logic.                                    |
| **src/types.ts**   | Centralized TypeScript definitions for consistent typing.                             |

---

## 🧠 How It Works

1. User submits feedback → `FeedbackForm` validates inputs.
2. Data is added via `FeedbackContext` and persisted using `useLocalStorage`.
3. Feedback items instantly appear in `FeedbackList`.
4. Users can **filter**, **edit**, or **delete** feedback seamlessly.
5. All state updates trigger re-renders across the app using React Context.

---

## 🎨 UI Design Philosophy

* **Glassmorphic Styling:**
  Frosted-glass cards with blurred transparency and subtle gradients.

* **3D Animated Background:**
  Layered radial gradients create smooth ambient motion.

* **Focus Glow Effects:**
  Inputs, selects, and buttons light up on focus for premium feel.

* **Responsive Grid Layout:**
  Automatically adapts to smaller viewports while preserving design depth.

---

## 🧱 Scalability Ideas

This app is easily extendable to a full-stack project.
Here are ideas to scale it further:

* 🔗 **Backend Integration:** Connect to a Node.js + Express + MySQL or Strapi API.
* 🔐 **Authentication:** Allow users to sign in before posting feedback.
* 📈 **Analytics Dashboard:** Add charts to visualize average ratings over time.
* ☁️ **Cloud Deployment:** Deploy backend to Railway or Render and frontend to Netlify/Vercel.
* 💬 **API Caching & Pagination:** Prepare for larger data sets.

---

## 🧑‍💻 Developer Notes

* Project initialized using **Vite** for blazing-fast dev performance.
* Uses **React Context** instead of Redux for lightweight state flow.
* Styling done via **CSS Modules** for isolated, reusable design.
* Built with **TypeScript** for safer and cleaner code.

---

## 🌐 Deployment

This app can be deployed easily using:

### ▶️ Vercel

```bash
npm run build
# Then drag and drop /dist folder to Vercel
```

### ▶️ Netlify

* Set **Build Command:** `npm run build`
* Set **Publish Directory:** `dist`

---

## 🧾 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Yash Mishra**
Trainee Software Developer @ Euodias Technologies
📧 [EmailJS Integrated Example User]
🌐 [Portfolio or GitHub: YashPrime-02](https://github.com/YashPrime-02)

> “Built with React, TypeScript, and passion — to turn feedback into insights.”
