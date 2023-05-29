Car Dealership Landing Page

This project contains a simple, modern landing page for a car dealership. The landing page collects information from B2B customers. The user is asked to provide their company name, email address, first and last names, and optionally their mobile number. It also includes a checkbox for users to agree to the terms of service.
Project Structure

The project consists of three main files:

    index.html: This is the main HTML file for the landing page. It contains placeholders for a title picture and form fields for user data.

    stylesheets.css: This is the CSS file that styles the HTML content. It gives the page a clean, modern look with a simple color palette.

    javascript.js: This is the JavaScript file that handles form submission. It collects the form data, adds a timestamp, and sends the data as a JSON payload to a specified API using a POST request. Authentication is handled via JSON Web Tokens (JWT).

Getting Started

To get started with this project:

    Clone the repository or download the source code.
    Open index.html in your web browser to view the page.

Usage

The form on the landing page sends data to an API endpoint when submitted. This data is packaged as a JSON object, which includes a timestamp of the interaction. The form data and timestamp are included in the JSON payload sent to the API.

To specify the API endpoint and JWT token, you'll need to update the apiEndpoint and jwtToken variables in javascript.js.
Deployment

This project is set up for deployment on GitHub Pages. To view the page, visit https://mxmngls.github.io/car_dealership_landingpage/.
Contributions

This project is a simple landing page and is not currently accepting contributions. However, you're free to clone the repository and modify the code for your own purposes.
