var depCode = 'LAX';
var arrCode = 'JFK';
var depdate = '2000-01-01';

var x;
getAirports(function(response){
			  let depId = response[0].id;
			  getAirports(function(response){
			  	let arrId = response[0].id;
			  	getFlights(function(response){
			  		console.log(response)
			  	},{departure_id:depId,arrival_id:arrId});
			  },{code:arrCode});
			},{code: depCode});