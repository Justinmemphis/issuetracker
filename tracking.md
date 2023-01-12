Issue Tracker
Tracking

01/12/23:
- remove old entries from database (see if it helps pass tests)
- add additional console logs for requests


Replace myFirstDatabase with the name of the database that connections will use by default. You will be prompted for the password for the Database User, <username>. When entering your password, make sure all special characters are URL encoded.

01/09/23:
- added new console logs to PUT function to catch routing through if else - failing same tests as below

01/04/23:
- update PUT request to have correct error handling
- update POST request to use if/else for better error handling
- fix typo
- see new replit test with FCC below
- update error handling on DELETE function
- four tests below still failing - investigate more tomorrow


Failed: You can send a PUT request to /api/issues/{projectname} with an _id and one or more fields to update. On success, the updated_on field should be updated, and returned should be {  result: 'successfully updated', '_id': _id }.
Failed: When the PUT request sent to /api/issues/{projectname} does not include update fields, the return value is { error: 'no update field(s) sent', '_id': _id }. On any other error, the return value is { error: 'could not update', '_id': _id }.
Failed: You can send a DELETE request to /api/issues/{projectname} with an _id to delete an issue. If no _id is sent, the return value is { error: 'missing _id' }. On success, the return value is { result: 'successfully deleted', '_id': _id }. On failure, the return value is { error: 'could not delete', '_id': _id }.
Failed: All 14 functional tests are complete and passing.


12/30/22:
- add delete function to delete an issue
- put version on replit to see how it is doing with FCC tests.  See results below:
- based on the FCC test input, there are significant changes to be made to the functions and responses, will proceed to work down the list
- fix outstanding PUT request issues (based on FCC)
Tomorrow - fix outstanding issues related to PUT and DELETE

Passed: You can provide your own project, not the example URL.
Passed: You can send a POST request to /api/issues/{projectname} with form data containing the required fields issue_title, issue_text, created_by, and optionally assigned_to and status_text.
Failed: The POST request to /api/issues/{projectname} will return the created object, and must include all of the submitted fields. Excluded optional fields will be returned as empty strings. Additionally, include created_on (date/time), updated_on (date/time), open (boolean, true for open - default value, false for closed), and _id.
Failed: If you send a POST request to /api/issues/{projectname} without the required fields, returned will be the error { error: 'required field(s) missing' }
Failed: You can send a GET request to /api/issues/{projectname} for an array of all issues for that specific projectname, with all the fields present for each issue.
Passed: You can send a GET request to /api/issues/{projectname} and filter the request by also passing along any field and value as a URL query (ie. /api/issues/{project}?open=false). You can pass one or more field/value pairs at once.
Failed: You can send a PUT request to /api/issues/{projectname} with an _id and one or more fields to update. On success, the updated_on field should be updated, and returned should be {  result: 'successfully updated', '_id': _id }.
Failed: When the PUT request sent to /api/issues/{projectname} does not include an _id, the return value is { error: 'missing _id' }.
Failed: When the PUT request sent to /api/issues/{projectname} does not include update fields, the return value is { error: 'no update field(s) sent', '_id': _id }. On any other error, the return value is { error: 'could not update', '_id': _id }.
Failed: You can send a DELETE request to /api/issues/{projectname} with an _id to delete an issue. If no _id is sent, the return value is { error: 'missing _id' }. On success, the return value is { result: 'successfully deleted', '_id': _id }. On failure, the return value is { error: 'could not delete', '_id': _id }.
Failed: All 14 functional tests are complete and passing.

12/29/22:
- changed get function to handle filters (individual or multiple) 
- create put function to update issues
Tomorrow - create build function

Plan for buiild:
~~12/29 - finish get function - handle queries~~
~~12/29 - build put function~~
12/30 - build delete function
01/02 - create 'create' tests
01/03 - create 'view' tests
01/04 - create 'update' tests
01/05 - create 'delete' tests

12/28/22:
- post function added last time appears to be working correctly
- realized today I need issues to have a 'project' field showing which project they are for
- added project property to post function and document schema
- added basic get function to retrieve all issues for a project - and to test for no project error condition

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


