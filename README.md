# Full-Stack MERN Authentication Project

This project is a comprehensive demonstration of building a full-stack web application using the MERN stack, focusing primarily on user authentication functionality.

<img width="1680" alt="Screenshot 2024-02-28 at 18 01 54" src="https://github.com/mowabanga/auth_project/assets/106926800/416c3390-c260-410d-9a0a-ef3bfd3eab3e">

## Technologies Used
- **MongoDB**: NoSQL database used for storing user information and authentication data.
- **Express.js**: Backend framework for handling server-side logic and API endpoints.
- **React.js**: Frontend library for building interactive user interfaces.
- **Node.js**: JavaScript runtime environment for running server-side code.
- **JSON Web Tokens (JWT)**: For securely transmitting information between parties as a JSON object.
- **bcrypt**: Library used for hashing passwords before storing them in the database.
- **Axios**: Promise-based HTTP client for making requests to the backend from the frontend.
- **React Router**: For managing routing and navigation in the React application.
- **Redux**: For managing application state globally.
- **Redux Thunk**: Middleware for Redux, enabling asynchronous logic in action creators.
- **Firebase**: For building web and mobile applications with real-time database and authentication services.

## Features
1. **User Registration**: Allows users to sign up with a unique email address and password.
2. **User Login**: Existing users can log in securely with their credentials.
3. **Protected Routes**: Certain routes are protected and require users to be authenticated.
4. **JWT Authentication**: Uses JSON Web Tokens for user authentication.
5. **Password Hashing**: User passwords are securely hashed before being stored in the database.
6. **Redux State Management**: Application state is managed globally using Redux, providing a seamless user experience.


## Folder Structure
- **client**: Contains the React.js frontend code.
- **api**: Contains the Node.js backend code.
- **/api/controllers**: Contains controller functions for handling HTTP requests.
- **/api/models**: Defines the MongoDB schema for user data.
- **/api/routes**: Defines API routes for user authentication.
- **/client/src/firebase.js**: Contains configuration for database connection settings.
- **/api/utils**: Contains utility functions.
