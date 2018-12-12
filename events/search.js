var depPort = 'BOS';
var arrPort = 'JFK';
var depDate = '2018-11-29';
// createFakeTickets();

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
			flightNotFound();
			return;
		}
		let depId = response[0].id;
		_getArrPort(depPort, arrPort, depDate, depId);
	},{code:depPort})
}

function _getArrPort(depPort, arrPort, depDate, depId){
	getAirports(function(response){
		if(response.length == 0){
			flightNotFound();
			return;
		}
		let arrId = response[0].id;
		_getFlight(depPort, arrPort, depDate, depId, arrId);
	}, {code: arrPort})
}

function _getFlight(depPort, arrPort, depDate, depId, arrId){
	getFlights(function(response){
		if(response.length == 0){
			flightNotFound();
			return;
		}
		for(let i = 0; i < response.length; i++){
			let fliId = response[i].id;
			let depAt = response[i].departs_at.split('T')[1].split('.')[0].split(':').splice(0,2).join(':');
			let arrAt =  response[i].arrives_at.split('T')[1].split('.')[0].split(':').splice(0,2).join(':');
			let airId = response[i].airline_id;
			let flinum = response[i].number;
			console.log(fliId);
			_getAirline(depPort, arrPort, depDate, depAt, arrAt, flinum, airId, fliId);
		}
		console.log(response);
	}, {departure_id:depId, arrival_id:arrId})
}

function _getAirline(depPort, arrPort, depDate, depAt, arrAt, flinum, airId, fliId){
	getAirlines(function(response){
		if(response.length == 0){
			return;
		}
		let airName = response.name;
		let airLogo = response.logo_url;
		_getInstance(depPort, arrPort, depDate, depAt, arrAt, flinum, airName, airLogo, fliId);
	},{id: airId})
}

function _getInstance(depPort, arrPort, depDate, depAt, arrAt, flinum, airName, airLogo,fliId){
	console.log(fliId);
	getInstances(function(response){
		if(response.length == 0){
			return;
		}
		for(let i = 0; i < response.length; i++){
			let insId = response[i].id;
			console.log(response);
			_getTicket(depPort, arrPort, depDate, depAt, arrAt, flinum, airName, airLogo,insId);
		}
	},{flight_id:fliId, date:depDate})
}

function _getTicket(depPort, arrPort, depDate, depAt, arrAt, flinum, airName, airLogo,insId){
	getTickets(function(response){
		if(response.length == 0){
			return;
		}
		for(let i = 0; i < response.length; i++){
			if(response[i].is_purchased == false){
				var price = response[i].price_paid;
				var tid = response[i].id;
				console.log(response[i].is_purchased);
				createGrid(airLogo,airName,flinum,
						depAt, arrAt,"duration",
						depPort,arrPort,price,tid);
			}
		}

		if(!$('.result')){
			flightNotFound();
		}else{
			createFilter();
		}
	},{instance_id:insId})
}
