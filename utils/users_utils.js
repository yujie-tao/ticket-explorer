/**
 * Utilities for handling users
 *
 * @function createUser       Creates new user
 * @function authenticateUser Authenticate the user
 * @function logOut           Log out
 */


var API_ROOT = "http://comp426.cs.unc.edu:3001/api/";


/**
 * Create a new user.
 *
 * @param {String} username
 * @param {String} password
 */
function createUser(username, password){
  $.ajax({
    type: "POST",
    url: API_ROOT + "login",
    xhrFields: {
      withCredentials: true
    },
    data: {
      user: {
        username: username,
        password: password
      }
    },
    success: function(response) {console.log("New User Created");},
    error: function {alert("User Creation Error");}
  });
}



/**
 * User authentication
 *
 * @param {String} username
 * @param {String} password
 */
function authenticateUser(username, password){
  $.ajax({
    type: "POST",
    url: API_ROOT + "session",
    xhrFields: {
      withCredentials: true
    },
    data: {
      user: {
        username: username,
        password: password
      }
    },
    success: function(response) {console.log("Authentication Success");},
    error: function {alert("Authentication Error");}
  });
}


/**
 * Log out and clear the coockies
 *
 * @param {String} username
 * @param {String} password
 */
function logOut(){
  $.ajax({
    type: "DELETE",
    url: API_ROOT + "session",
    xhrFields: {
      withCredentials: true
    },
    success: function(response) {console.log("Logged Out");},
    error: function {alert("Logout Failure");}
  });
}
