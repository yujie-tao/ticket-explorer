var depCode = 'BOS';
var arrCode = 'JFK';
var depDate = '2018-11-29';

// searchFlight(depCode, arrCode, depDate);

function searchFlight(depCode,arrCode, depDate){
	getAirports(function(response){
					if(response.length == 0){
						/******handle not found in front end*****/
						return;
					}
					let depId = response[0].id;
					getAirports(function(response){
						if(response.length == 0){
							/******handle not found in front end*****/
							return;
						}
						let arrId = response[0].id;
						getFlights(function(response){
							if(response.length == 0){
								/******handle not found in front end*****/
								return;
							}
							for(var i = 0; i < response.length;i++){
								console.log(response[i]);
								let fid = response[0].id;
								/******need to be splitted by T*****/
								let arrTime = response[0].arrives_at;
								let depTime = response[0].departs_at;
								getInstances(function(response){
									if(response.length == 0){
										/******handle not found in front end*****/
										// return
									}
									console.log(response);
									let iid = response[0].id;
									getTickets(function(){
										console.log(response);
									},{instance_id:iid});
								},{flight_id:fid, date:depDate});
							}
						},{departure_id:depId,arrival_id:arrId});
					},{code:arrCode});
				},{code: depCode});	
}

var x;

getAirports(function(response){x=response},{code:depCode});
// console.log(x);

setTimeout(function(){
  console.log(x);
},2000);
