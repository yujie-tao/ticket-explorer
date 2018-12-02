/**
 * Utilities for handling users
 *
 * @function createUser       Creates new user
 * @function authenticateUser Authenticate the user
 * @function logOut           Log out
 */


import { AjaxUtils } from "ajax_utils";


/**
 * Create a new user.
 *
 * @param {String} username
 * @param {String} password
 */
function createUser(username, password){
  AjaxUtils.create(
    "users",
    {
      user: {
        username: username,
        password: password
      }
    });
}


/**
 * User authentication
 *
 * @param {String} username
 * @param {String} password
 */
function authenticateUser(username, password){
  AjaxUtils.create(
    "session",
    {
      user: {
        username: username,
        password: password
      }
    });
}


/**
 * Log out and clear the coockies
 */
function logOut(){
  AjaxUtils.delete("session");
}
