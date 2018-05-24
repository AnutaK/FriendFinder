# FriendFinder

**FriendFinder** is a full-stack site that asks the user to respond to 10 questions, then (based on their answers) checks their compatibility with the scores for users saved on the server.  The user is then shown who they are most compatible with.

Key Files:
* server.js - creates an express server which serves routes contained in htmlRoutes.js and apiRoutes.js
  * htmlRoutes.js - contains routes for home.html/survey.html
  * apiRoutes.js - routes for GET/POST requests to friends.js
    * friend.js - exports an array of objects that contain all user data
* home.html - the FriendFinder homepage
* survey.html - the page that takes in user information and contains the JS for getting data from friends.js, logic for determining who the closest match is (in regards to the user's answers), and posting the users data to friends.js
* style.css - custom stylings and media queries to ensure responsive design
    
Technologies used:
* HTML
* Javascript
* CSS (Materialize framework and a custom stylesheet)
* Node.js
* Express.js

