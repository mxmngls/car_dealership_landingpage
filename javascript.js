document.getElementById('info-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Create a new object to store the form data
    let formData = {
        companyName: document.getElementById('company-name').value,
        email: document.getElementById('email').value,
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        mobileNumber: document.getElementById('mobile-number').value,
        termsAgreed: document.getElementById('terms').checked,
        timestamp: new Date().toISOString()  // Add a timestamp
    };

    // Convert the formData object to a JSON string
    let jsonData = JSON.stringify(formData);

    // Define your API endpoint
    let apiEndpoint = 'https://your-api-endpoint.com';

    // Set your JWT token
    let jwtToken = 'your-jwt-token';

    // Create a new request object
    let request = new XMLHttpRequest();
    request.open('POST', apiEndpoint, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', 'Bearer ' + jwtToken);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            console.log(this.response);
        } else {
            // Error :(
            console.log(this.response);
        }
    };

    request.onerror = function() {
        // There was a connection error
        console.log('Connection error');
    };

    // Send the request with the JSON payload
    request.send(jsonData);
});
