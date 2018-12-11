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
 * Utilities and Examples for handling flights
 * ----------------------------------------------------------------
 */

// API's: Just use them
function sortFlightsByDepartTimeAsc() {
  getFlights(_SortByDepartTimeAsc);
}

function sortTicketsByPricePaidAsc() {
  getTickets(_SortByPricePaidAsc);
}

function sortFlightsByDepartTimeDesc() {
    getFlights(_SortByDepartTimeDesc);
}

function sortTicketsByPricePaidDesc() {
    getTickets(_SortByPricePaidDesc);
}


// Functions ------------------------------------------------------
function _PrintResponse(response) {
  console.log(response);
}

function _SortByDepartTimeAsc(response) {
  // https://stackoverflow.com/questions/10123953/sort-javascript-object-array-by-date/10124053
  response.sort(function(r1, r2) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(r1.departs_at) - new Date(r2.departs_at);
  });
  console.log(response);
}

function _SortByPricePaidAsc(response) {
  response.sort(function(r1, r2) {
    return r1.price_paid - r2.price_paid;
  });

  console.log(response);
}

function _SortByDepartTimeDesc(response) {
    response.sort(function(r1, r2) {
        return new Date(r2.departs_at) - new Date(r1.departs_at);
    });
    console.log(response);
}

function _SortByPricePaidDesc(response) {
    response.sort(function(r1, r2) {
        return r2.price_paid - r1.price_paid;
    });

    console.log(response);
}


/**
 * ----------------------------------------------------------------
 * Core Backends
 * ----------------------------------------------------------------
 */
function namedEntityExtractor(text) {
  $.ajax({
    type: "POST",
    url: "http://bluetang.cs.unc.edu:6000/python/ner",
    data: {
      text: text
    },
    success: function(response) {
      console.log(response);
      passInSearch(response);
    }
  });
}

// https://stackoverflow.com/questions/40281713/how-to-join-dictionary-elements
// d: {key1: val1, key2:val2 ...} --> "?filter[key1]=val1&filter[key2]=val2 ..."
function _DictToFilterString(d = null) {
  if (d === null) {
    return "";
  }
  /*****Not using filter for id*****/
  if (Object.keys(d) == 'id'){
    return '/'+d.id;
  }
  return "?" + Object.keys(d).map(function(key) {
    return `filter[${key}]=${d[key]}`
  }).join("&"); //outputs "foo=0&bar=1"
}


// Get ------------------------------------------------------------
// https://stackoverflow.com/questions/5316697/jquery-return-data-after-ajax-call-success
function getFlights(response_fn = _PrintResponse, filter_dict = null) {
  AjaxUtils.index(
    "flights" + _DictToFilterString(filter_dict),
    response_fn,
    function(response) {
      alert("getFlights Failed");
    }
  )
}

function getAirlines(response_fn = _PrintResponse, filter_dict = null) {
  AjaxUtils.index(
    "airlines" + _DictToFilterString(filter_dict),
    response_fn,
    function(response) {
      alert("getAirlines Failed");
    }
  )
}


function getAirports(response_fn = _PrintResponse, filter_dict = null) {
  AjaxUtils.index(
    "airports" + _DictToFilterString(filter_dict),
    response_fn,
    function(response) {
      alert("getAirports Failed");
    }
  )
}


function getPlanes(response_fn = _PrintResponse, filter_dict = null) {
  AjaxUtils.index(
    "planes" + _DictToFilterString(filter_dict),
    response_fn,
    function(response) {
      alert("getPlanes Failed");
    }
  )
}


function getSeats(response_fn = _PrintResponse, filter_dict = null) {
  AjaxUtils.index(
    "seats" + _DictToFilterString(filter_dict),
    response_fn,
    function(response) {
      alert("getSeats Failed");
    }
  )
}


function getInstances(response_fn = _PrintResponse, filter_dict = null) {
  AjaxUtils.index(
    "instances" + _DictToFilterString(filter_dict),
    response_fn,
    function(response) {
      alert("getInstances Failed");
    }
  )
}


function getItineraries(response_fn = _PrintResponse, filter_dict = null) {
  AjaxUtils.index(
    "itineraries" + _DictToFilterString(filter_dict),
    response_fn,
    function(response) {
      alert("getItineraries Failed");
    }
  )
}


function getTickets(response_fn = _PrintResponse, filter_dict = null) {
  AjaxUtils.index(
    "tickets" + _DictToFilterString(filter_dict),
    response_fn,
    function(response) {
      alert("getTickets Failed");
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


function createSeat(plane_id, row, number) {
  AjaxUtils.create(
    "seats", {
      seat: {
        plane_id: plane_id,
        row: row,
        number: number,
      }
    });
}


function createInstance(flight_id, date) {
  AjaxUtils.create(
    "instances", {
      instance: {
        flight_id: flight_id,
        date: date
      }
    });
}


function createItinerary(confirmation_code) {
  AjaxUtils.create(
    "itineraries", {
      itinerary: {
        confirmation_code: confirmation_code,
        email: "kmp@cs.unc.edu"
      }
    });
}


function createTicket(first_name, middle_name, last_name, age, gender, price_paid, instance_id, iternary_id, seat_id) {
  AjaxUtils.create(
    "tickets", {
      ticket: {
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        age: age,
        gender: gender,
        is_purchased: false,
        price_paid: price_paid,
        instance_id: instance_id,
        // iternary_id: iternary_id
        //seat_id: seat_id
      }
    });
}

function updateTicket(first_name, middle_name, last_name, age, gender, ticket_id) {
    AjaxUtils.update(
        "tickets", ticket_id,
        {
            ticket: {
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
                age: age,
                gender: gender,
                is_purchased: true
            }
        });
}


// FakeData -------------------------------------------------------
function createFakeFlights() {
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

function createFakeSeats() {
  createSeat(4506, 1, "A");
  createSeat(4510, 2, "B");
  createSeat(4507, 1, "C");
  createSeat(4509, 2, "A");
  createSeat(4506, 1, "B");
  createSeat(4508, 2, "C");
  createSeat(4510, 1, "A");
  createSeat(4510, 2, "B");
  createSeat(4506, 1, "C");
  createSeat(4510, 2, "D");
}

function createFakeInstances() {
  createInstance(139520, "2018-12-21");
  createInstance(139521, "2018-12-21");
  createInstance(139522, "2018-12-21");
  createInstance(139523, "2018-12-21");
  createInstance(139234, "2018-12-21");
}

function createFakeItineraries() {
  createItinerary("Itinerary-1");
  createItinerary("Itinerary-2");
  createItinerary("Itinerary-3");
  createItinerary("Itinerary-4");
  createItinerary("Itinerary-5");
}

function createFakeTickets() {
  createTicket("Yujie-1", "", "Tao", "20", "Female", "119.99", 4006890);
  createTicket("Yujie-2", "", "Tao", "20", "Female", "999.0", 4006890);
  // createTicket("Yujie-3", "Tao", "20", "Female", "23.7", 874856, 13161);
  // createTicket("Yujie-4", "Tao", "20", "Female", "432.1", 874857, 13163);
  // createTicket("Yujie-5", "Tao", "20", "Female", "77.3", 874858, 13165);
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
