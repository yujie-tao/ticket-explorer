var API_ROOT = "http://comp426.cs.unc.edu:3001/";
var TMP_USERNAME = "haha";
var TMP_PASSWORD = "Wyxha0-fertob-zegtud";

/**
 * ----------------------------------------------------------------
 * RESTful Resources
 * ----------------------------------------------------------------
 */
class AjaxUtils {

  static index(
    resouce,
    succuss_fn = _DefaultSuccessFn("index"),
    error_fn = _DefaultErrorFn("index")) {

    $.ajax({
      type: "GET",
      url: API_ROOT + resouce,
      xhrFields: {
        withCredentials: true
      },
      success: succuss_fn,
      error: error_fn
    });
  }

  static create(
    resouce, data,
    succuss_fn = _DefaultSuccessFn("create"),
    error_fn = _DefaultErrorFn("create")) {

    $.ajax({
      type: "POST",
      url: API_ROOT + resouce,
      xhrFields: {
        withCredentials: true
      },
      data: data,
      success: succuss_fn,
      error: error_fn
    });
  }

  static read(
    resouce, id, data,
    succuss_fn = _DefaultSuccessFn("read"),
    error_fn = _DefaultErrorFn("read")) {

    $.ajax({
      type: "GET",
      url: `${API_ROOT}${resouce}/:${id}`,
      xhrFields: {
        withCredentials: true
      },
      data: data,
      success: succuss_fn,
      error: error_fn
    });
  }

  static update(
    resouce, id, data,
    succuss_fn = _DefaultSuccessFn("update"),
    error_fn = _DefaultErrorFn("update")) {

    $.ajax({
      type: "PUT",
      url: `${API_ROOT}${resouce}/:${id}`,
      xhrFields: {
        withCredentials: true
      },
      data: data,
      success: succuss_fn,
      error: error_fn
    });
  }

  static delete(
    resouce, id = null,
    succuss_fn = _DefaultSuccessFn("delete"),
    error_fn = _DefaultErrorFn("delete")) {

    if (id === null) {
      let url = `${API_ROOT}${resouce}/:${id}`;
    } else {
      let url = API_ROOT + resouce;
    }

    $.ajax({
      type: "DELETE",
      url: url,
      xhrFields: {
        withCredentials: true
      },
      data: data,
      success: succuss_fn,
      error: error_fn
    });
  }
}



function _DefaultSuccessFn(tag) {
  function successFn(response) {
    console.log(`${tag} Success`);
  }
  return successFn
}

function _DefaultErrorFn(tag) {
  function ErrorFn(response) {
    console.log(`${tag}} Error`);
  }
  return ErrorFn
}



/**
 * ----------------------------------------------------------------
 * Utilities for handling flights
 * ----------------------------------------------------------------
 */

// Get ------------------------------------------------------------
function getFlights() {
  AjaxUtils.index(
    "flights",
    function(response) {
      console.log(response)
    },
    function(response) {
      alert("getFlights Failed");
    }
  )
}

function getAirlines() {
  AjaxUtils.index(
    "airlines",
    function(response) {
      console.log(response)
    },
    function(response) {
      alert("getAirlines Failed");
    }
  )
}


function getAirports() {
  AjaxUtils.index(
    "airports",
    function(response) {
      console.log(response)
    },
    function(response) {
      alert("getAirports Failed");
    }
  )
}


function getPlanes() {
  AjaxUtils.index(
    "planes",
    function(response) {
      console.log(response)
    },
    function(response) {
      alert("getPlanes Failed");
    }
  )
}


// Create ---------------------------------------------------------
function createFlight(departs_at, arrives_at, number, departure_id, arrival_id) {
  AjaxUtils.create(
    "flights", {
      flight: {
        departs_at: departs_at,
        arrives_at: arrives_at,
        number: number,
        departure_id: departure_id,
        arrival_id: arrival_id
      }
    });
}


function createAirline(name) {
  AjaxUtils.create(
    "airlines", {
      airline: {
        name: name
      }
    });
}


function createAirport(name, code) {
  AjaxUtils.create(
    "airports", {
      airport: {
        name: name,
        code: code
      }
    });
}


function createPlane(name) {
  AjaxUtils.create(
    "planes", {
      plane: {
        name: name
      }
    });
}


// FakeData -------------------------------------------------------
function createFakeFlights(){
  createFlight("4:30", "7:10", "AA 267", 129406, 129407);
  createFlight("5:30", "7:10", "AA 267", 129406, 129408);
  createFlight("6:30", "7:10", "AA 667", 129407, 129409);
  createFlight("17:30", "19:10", "AA 266", 129409, 129408);
  createFlight("18:30", "21:10", "AA 26697", 129410, 129406);
}


function createFakeAirports() {
  createAirport("name-1", "code-1");
  createAirport("name-2", "code-2");
  createAirport("name-3", "code-3");
  createAirport("name-4", "code-4");
  createAirport("name-5", "code-5");
}


function createFakeAirlines() {
  createAirline("AA");
  createAirline("UA");
  createAirline("Delta");
  createAirline("Alaska");
  createAirline("SkyPriority");
}

function createFakePlanes() {
  createPlane("Plane-1");
  createPlane("Plane-2");
  createPlane("Plane-3");
  createPlane("Plane-4");
  createPlane("Plane-5");
}




/**
 * ----------------------------------------------------------------
 * Utilities for handling users
 *
 * @function createUser       Creates new user
 * @function authenticateUser Authenticate the user
 * @function logOut           Log out
 * ----------------------------------------------------------------
 */

/**
 * Create a new user.
 *
 * @param {String} username
 * @param {String} password
 */
function createUser(username, password) {
  AjaxUtils.create(
    "users", {
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
function authenticateUser(username, password) {
  AjaxUtils.create(
    "sessions", {
      user: {
        username: username,
        password: password
      }
    });
}


/**
 * Log out and clear the coockies
 */
function logOut() {
  AjaxUtils.delete("sessions");
}
