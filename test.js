const http = require('http');
const app = require('./index'); // Import the Express app

setTimeout(() => {
  http.get('http://localhost:3000', (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      if(data === 'Hello World!') {
        console.log('Test passed: Received expected response from server.');
      } else {
        console.error(`Test failed: Expected 'Hello World!' but received '${data}'`);
        process.exit(1); // Exit with error code
      } 
      process.exit(0); // Exit after receiving the response
    });
  }).on('error', (err) => {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit with error code
  });
}, 1000); // Wait for the server to start before making the request
