# API-SPA

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

This project is a classic Single-Page Application (SPA) built with React, JavaScript, and Vite. It interacts with the free [JSONPlaceholder](https://jsonplaceholder.typicode.com/) REST API to demonstrate fundamental frontend development concepts, including data fetching, client-side routing, and component-based architecture.

![API_SPA.gif](https://github.com/user-attachments/assets/250bf6a2-77e3-4f62-8110-c520209d904e)

## 🌟 Key Features

*   **📰 Post Feed:** Fetches and displays a list of posts from the API.
*   **📄 Detailed Post View:** Users can click on any post to navigate to a detailed view, which includes the post's content and its associated comments.
*   **👤 User Profiles:** View information about the author of a post.
*   **🚀 Client-Side Routing:** Utilizes `react-router-dom` to provide a seamless, multipage experience without page reloads.
*   **🚦 Loading & Error States:** The UI provides clear feedback to the user while fetching data or if an API error occurs.
*   **📱 Responsive Design:** The layout is fully responsive and optimized for a great user experience on both mobile and desktop devices.

## 🛠️ Tech Stack

*   **React:** A JavaScript library for building user interfaces.
*   **JavaScript (ES6+):** The core language for the application's logic.
*   **Vite:** A next-generation frontend build tool for a faster and leaner development experience.
*   **React Router DOM:** For declarative, client-side routing.
*   **Fetch API:** The modern, built-in browser API used for all network requests to the JSONPlaceholder service.
*   **CSS Modules:** For writing modular, scoped, and conflict-free CSS.

## 🏗️ Project Architecture

The application follows a modular, component-based architecture. The code is organized by feature and responsibility, promoting a clean separation of concerns and making the project easy to understand and maintain.

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

*   Node.js (v18.x or higher)
*   npm / yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nikitinvitya/API-SPA.git
    cd API-SPA/SPA
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application in your browser:**
    Navigate to the local URL provided by Vite (e.g., `http://localhost:5173`).

## 📜 Available Scripts

In the project directory, you can run:

*   `npm run dev` — Runs the app in development mode using Vite.
*   `npm run build` — Builds the app for production.
