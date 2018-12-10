var depPort = 'BOS';
var arrPort = 'JFK';
var depDate = '2018-11-29';

searchFlight(depPort, arrPort, depDate);


/**
 * Based on departure port, arrival port, departure date 
 * search necessary info to create grids
 * Won't get any response from this function yet
 * cuz we don't have tickets
 */

function searchFlight(depPort, arrPort, depDate){
	getAirports(function(response){
		if(response.length == 0){
			/******handle not found in front end*****/
			return;
		}
		let depId = response[0].id;
		_getArrPort(depPort, arrPort, depDate, depId);
	},{code:depPort})
}

function _getArrPort(depPort, arrPort, depDate, depId){
	getAirports(function(response){
		if(response.length == 0){
			/******handle not found in front end*****/
			return;
		}
		let arrId = response[0].id;
		_getFlight(depPort, arrPort, depDate, depId, arrId);
	}, {code: arrPort})
}

function _getFlight(depPort, arrPort, depDate, depId, arrId){
	getFlights(function(response){
		if(response.length == 0){
			/******handle not found in front end*****/
			return;
		}
		for(let i = 0; i < response.length; i++){
			let fliId = response[i].id;
			let depAt = response[i].departs_at;
			let arrAt = response[i].arrives_at;
			let airId = response[i].airline_id;
			let flinum = response[i].number;
			console.log(airId);
			_getAirline(depPort, arrPort, depDate, depAt, arrAt, flinum, airId, fliId);
		}
		// console.log(response);
	}, {departure_id:depId, arrival_id:arrId})
}

function _getAirline(depPort, arrPort, depDate, depAt, arrAt, flinum, airId, fliId){
	getAirlines(function(response){
		if(response.length == 0){
			/******handle not found in front end*****/
			return;
		}
		console.log(response);
		let airName = response.name;
		let airLogo = response.logo_url;
		_getInstance(depPort, arrPort, depDate, depAt, arrAt, flinum, airName, airLogo, fliId);
	},{id: airId})
}

function _getInstance(depPort, arrPort, depDate, depAt, arrAt, flinum, airName, airLogo,fliId){
	getInstances(function(response){
		if(response.length == 0){
			/******handle not found in front end*****/
			return;
		}
		for(let i = 0; i < response.length; i++){
			let insId = response[i].id;
			console.log(insId);
			_getTicket(depPort, arrPort, depDate, depAt, arrAt, flinum, airName, airLogo,insId);
		}
	},{flight_id:fliId, date:depDate})
}

function _getTicket(depPort, arrPort, depDate, depAt, arrAt, flinum, airName, airLogo,insId){
	getTickets(function(response){
		if(response.length == 0){
			/******handle not found in front end*****/
			console.log(response);
			return;
		}
		for(let i = 0; i < response.length; i++){
			var price = response[i].price;
			createGrid(airLogo,airName,flinum,
						depAt, arrAt,"duration",
						depPort,arrPort,depDate,i);
		}
	},{instance_id:insId})
}
