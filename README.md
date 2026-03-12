# Nextjs-Auth-System


## Description
Authentication system built with Next.js, Node.js, Express, and MongoDB featuring JWT authentication, secure password handling, and protected API routes.

This project can be used as a foundation for building multi-user web applications that require authentication, user accounts, and secure access control.





## Features
- User Signup / Registration
- Secure User Login
- JWT-based Authentication
- Protected API Routes
- Password Hashing using bcrypt
- Email Verification system
- Forgot Password functionality
- Reset Password using secure token
- Change Password for authenticated users
- User Profile Endpoint
- Logout functionality
- MongoDB Database Integration
- Minimal and clean Next.js UI
## Tech Stack
- Next.js
- React
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt

## Installation
- Clone the repository


    `git clone https://github.com/Nitesh-Kukreti/Nextjs-Auth-System.git`

- Navigate to the project directory

    `cd Nextjs-Auth-System`
- Install dependencies

    `npm install`
-  Create environment variables

    Create a .env file in the root directory and add the following:

    ```
    LOCAL_MONGO_URL=mongodb=your_mongodb_connection_string
    TOKEN_SECRET=nextjsAuthProject
    DOMAIN=http://localhost:3000
    MAILTRAP_USER_ID_NKD=your_mailtrap_id
    MAIL_TRAP_PASSWORD_NKD=your_mailtrap_password

    ```
- Run the development server

    `npm run dev`

- Open your browser and visit:

    `http://localhost:3000`
## Project Structure

```
nextjs-auth-system
|
├───public
│   └───project-screenshots
└───src 
    ├───app 
    │   ├───api 
    │   │   └───users
    │   │       ├───change-password 
    │   │       ├───delete
    │   │       ├───forgot-password
    │   │       ├───login
    │   │       ├───logout
    │   │       ├───me
    │   │       ├───reset-password
    │   │       ├───signup
    │   │       └───verify-email
    │   ├───change-password
    │   ├───dashboard
    │   ├───forgot-password
    │   ├───login
    │   ├───profile
    │   │   └───[id]
    │   ├───reset-password
    │   ├───signup
    │   └───verify-email
    ├───dbConfig
    ├───helpers
    └───models
```
    
## Output

After running the development server, the application will be available at:
http://localhost:3000

- Available Pages
```
/ - Landing page
/signup – Register a new user
/login – Login with existing credentials
/dashboard – Protected dashboard page
/profile – View user profile
/forgot-password – Request password reset
/reset-password – Reset password using token
/verify-email – Verify user email
```
- API Endpoints

```
/api/users/signup
/api/users/login
/api/users/logout
/api/users/me
/api/users/verify-email
/api/users/forgot-password
/api/users/reset-password
/api/users/change-password
/api/users/delete
```

- Project Screenshots

    `public/project-screenshots/`




## Authors
Nitesh Kukreti
## License
This project is licensed under the MIT License.