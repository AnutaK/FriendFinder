// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


//   app.get("/api/htmlRoutes", function(req, res) {
//     res.json(friendData);
//   });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends",function(req,res){
    var newFriend = req.body;
    console.log(newFriend)
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 100
    }
    var totalDifference = 0;

    for(var i = 0; i < friendData.length; i++){
      var currentFriend = friendData[i]
       for(var j = 0; j < currentFriend.scores.length; j++){
        var newFriendScore = newFriend.scores[j];
        var currentFriendScore = currentFriend.scores[j]
        //if we get an odd error, we need to parseInt currentFriendScore and newFriendScore
        totalDifference+=Math.abs(newFriendScore - currentFriendScore)
       }
        if(totalDifference <= bestMatch.friendDifference){
            bestMatch.name = currentFriend.name;
            bestMatch.photo = currentFriend.photo;
            bestMatch.friendDifference = totalDifference;
         }

      }

      friendData.push(newFriend)
      res.json(bestMatch);      
  }

)


//   app.post("/api/tables", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body-parser middleware
//     // if (tableData.length < 5) {
//     //   tableData.push(req.body);
//     //   res.json(true);
//     // }
//     // else {
//     //   waitListData.push(req.body);
//     //   res.json(false);
//     // }
//   });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableData = [];
//     waitListData = [];

//     console.log(tableData);
//   });
};
