# Simple Node.js Application

This is a simple Node.js application that sets up a server using Express and includes basic routing. The app is deployed on **Render** and can be accessed online.

## Requirements

1. **Node.js** - Ensure you have Node.js installed on your machine.
2. **Express** - The project uses Express for routing.

## Setup Instructions

### 1. Set Up the Node.js Application

- Install the necessary dependencies by running:
  ```bash
  npm install
Ensure you have a package.json file, which contains the required dependencies and scripts. Here’s an example of a basic package.json:

json
```
{
  "name": "simple-node-app",
  "version": "1.0.0",
  "description": "A simple Node.js server",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

Run the application locally:
```
npm start
You should see the message: Server running on port 3000.
```

### 2. Deploy to Render
Create an account on Render.
After logging in, click on New and select Web Service.
Connect your GitHub repository to Render and follow the prompts to configure your deployment.
Render will automatically detect that you are using a Node.js application.
Set the build command to npm install.
Set the start command to npm start.
After deployment, Render will provide a live URL where your app is accessible.

### 3. Test the Live Application
Visit the URL provided by Render to verify that the app is working.

You should be able to access the following routes:

Root Route (/): Returns Hello World!
About Route (/about): Returns This is the About page.
Contact Route (/contact): Returns This is the Contact page.
User Profile Route (/users/:id): Returns a dynamic profile page for a user based on the provided ID, e.g., /users/123 will return Profile page for user with ID: 123.
404 Route: Returns Page not found. for any unmatched routes.

### 4. Check Logs and Errors
Use the Render dashboard to check logs or debug any errors that may occur.
Go to your service on the Render dashboard, click on Logs to view real-time logs.
Deployment
The application is live at: [https://your-app-name.onrender.com] (replace with your actual deployed URL).