# EJSDir

## Description
EJSDir is a simple Node.js application that utilizes Express.js and EJS templates to demonstrate a basic dynamic web application with server-side rendering. This project is a great starting point for learning or building small applications that use Express.js for routing and EJS for rendering views.

## Features
- **Express.js**: Handles routing and middleware, providing a robust web server framework.
- **EJS Templates**: Allows dynamic rendering of HTML content with embedded JavaScript.
- **Static File Serving**: Serves static files such as CSS, JavaScript, and images to enhance web page functionality and design.

## Project Structure
The project is organized as follows:
- **`.idea/`**: IDE-specific settings (not relevant to the application's functionality).
- **`node_modules/`**: Contains installed dependencies from npm.
- **`views/`**: Directory housing EJS template files for rendering pages.
    - `home.ejs`: Template for the homepage.
    - `rolldice.ejs`: Template for displaying results of a dice roll.
- **`public/`**: Directory containing static files like CSS, JavaScript, and images.
- **`desktop.ini`**: A system file (can be ignored).
- **`index.js`**: The entry point of the application, containing server setup, routes, and logic.
- **`package.json`**: Manages project dependencies and metadata.
- **`package-lock.json`**: Ensures consistent installation of dependency versions.
- **`README.md`**: Provides an overview of the project.

## Prerequisites
Make sure you have the following software installed:
1. [Node.js](https://nodejs.org/) - Required to run the server.
2. [npm](https://www.npmjs.com/) - Comes with Node.js, used for dependency management.

## Installation
Follow these steps to set up the project:

1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd EJSDir
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the server by running:
   ```bash
   node index.js
   ```

2. Open a web browser and visit:
    - Home page: `http://localhost:8080/home` – Displays a simple message.
    - Root path: `http://localhost:8080/` – Renders the `home.ejs` template.
    - Dice Roll: `http://localhost:8080/rolldice` – Renders `rolldice.ejs` template with a random dice value.
    - Static Files: Accessible under the `/public` path (e.g., `http://localhost:8080/public/styles.css` for CSS files in the `public` directory).

## Routes Overview
- **GET `/home`**: Renders a plain text message: "This is the home page."
- **GET `/`**: Renders the `home.ejs` template.
- **GET `/rolldice`**: Renders the `rolldice.ejs` template with a randomly rolled dice value (1-6).

## Static Files Usage
The application serves static files from the `public/` directory. These files can include:
- **CSS Files**: For styling your web pages.
- **JavaScript Files**: For adding interactivity to your pages.
- **Images**: For enhancing visual elements.

To access these files, include them in your EJS templates or other HTML files with relative paths prefixed by `/public/`.

### Example Usage:
In your `home.ejs` file: