Issue Tracker
Tracking

12/26/22:
- got database connection working
- add database schema
- fix tabs and minor formatting
- add post function to add new issue to database

12/14/22:
- setup initial files
- it appears we will need to connect to a database to get/post/put/delete issues - will setup MongoDB
- start to add database connection

Instructions:

    Complete the necessary routes in /routes/api.js
    Create all of the functional tests in tests/2_functional-tests.js
    Copy the sample.env file to .env and set the variables appropriately
    To run the tests uncomment NODE_ENV=test in your .env file
    To run the tests in the console, use the command npm run test. To open the Replit console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"

Write the following tests in tests/2_functional-tests.js:

    Create an issue with every field: POST request to /api/issues/{project}
    Create an issue with only required fields: POST request to /api/issues/{project}
    Create an issue with missing required fields: POST request to /api/issues/{project}
    View issues on a project: GET request to /api/issues/{project}
    View issues on a project with one filter: GET request to /api/issues/{project}
    View issues on a project with multiple filters: GET request to /api/issues/{project}
    Update one field on an issue: PUT request to /api/issues/{project}
    Update multiple fields on an issue: PUT request to /api/issues/{project}
    Update an issue with missing _id: PUT request to /api/issues/{project}
    Update an issue with no fields to update: PUT request to /api/issues/{project}
    Update an issue with an invalid _id: PUT request to /api/issues/{project}
    Delete an issue: DELETE request to /api/issues/{project}
    Delete an issue with an invalid _id: DELETE request to /api/issues/{project}
    Delete an issue with missing _id: DELETE request to /api/issues/{project}


