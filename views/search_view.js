function createSearchBar(){
	 var searchBox= $('<div>',{
	 	class: "searchBox"
	 }).appendTo($('.search'))
	 $('<h1>',{
	 	class: "title",
	 	html: "Find a ticket"
	 }).appendTo(searchBox)
	 $('<input>',{
	 	id: "ticketSearch",
	 	type:"text",
	 	placeholder: "I want a flight from RDU to SFO on Dec.20…"
	 }).appendTo(searchBox)
	  $('<i>',{
	 	class: "fas fa-search"
	 }).appendTo(searchBox)
}

function createFilter(){
	var filter= $('.searchFilter');
	var priceFilter= $('<div>',{
	 	class: "priceFilter filter"
	 }).appendTo(filter)
	$('<h6>',{
	 	html: "Price"
	 }).appendTo(priceFilter)

	$('<input>',{
		id: "priceAsc",
		type: "checkbox",
	 }).appendTo(priceFilter)
	$('<p>',{
	 	html: "Lowest to highest"
	 }).appendTo(priceFilter)

	$('<input>',{
		id: "priceDesc",
		type: "checkbox",
	 }).appendTo(priceFilter)
	$('<p>',{
	 	html: "Highest to lowest"
	 }).appendTo(priceFilter)



	var timeFilter= $('<div>',{
	 	class: "timeFilter filter"
	 }).appendTo(filter)
	$('<h6>',{
	 	html: "Departure time"
	 }).appendTo(timeFilter)
	$('<h6>',{
	 	html: "Arrival time"
	 }).appendTo(timeFilter)

	var airlineFilter= $('<div>',{
	 	class: "airlineFilter filter"
	 }).appendTo(filter)
	$('<h6>',{
	 	html: "Airlines"
	 }).appendTo(airlineFilter)
	$('<input>',{
		id: "american",
		type: "checkbox",
	 }).appendTo(airlineFilter)
	$('<p>',{
	 	html: "American Airlines"
	 }).appendTo(airlineFilter)

	$('<input>',{
		id: "alaska",
		type: "checkbox",
	 }).appendTo(airlineFilter)
	$('<p>',{
	 	html: "Alaska Airlines"
	 }).appendTo(airlineFilter)

	$('<input>',{
		id: "delta",
		type: "checkbox",
	 }).appendTo(airlineFilter)
	$('<p>',{
	 	html: "Delta Airlines"
	 }).appendTo(airlineFilter)

	$('<input>',{
		id: "jetblue",
		type: "checkbox",
	 }).appendTo(airlineFilter)
	$('<p>',{
	 	html: "Jetblue Airlines"
	 }).appendTo(airlineFilter)

	$('<input>',{
		id: "united",
		type: "checkbox",
	 }).appendTo(airlineFilter)
	$('<p>',{
	 	html: "United Airlines"
	 }).appendTo(airlineFilter)


	$('<input>',{
		id: "other",
		type: "checkbox",
	 }).appendTo(airlineFilter)
	$('<p>',{
	 	html: "Other Airlines"
	 }).appendTo(airlineFilter)
}

function createGrid(logourl,airline,flightNum,
					depTime,arrTime,duration,
					depPort,arrPort,price){
	var result= $('<div>',{
	 	class: "result col-lg-8 row"
	 }).appendTo($('.resultBox'))
	$('<img>',{
	 	class: "logo",
	 	src: logourl
	 }).appendTo(result)

	var table= $('<table>',{
	 	class: "tickettableo"
	 }).appendTo(result)

	var ticketInfoRow1= $('<tr>',{
	 	class: "ticketInfo"
	 }).appendTo(table)


	var time= $('<th>',{
	 	class: "time"
	 }).appendTo(ticketInfoRow1)

	$('<h5>',{
	 	html: depTime+'-'+arrTime
	 }).appendTo(time)

	var dura= $('<th>',{
	 	class: "duration"
	 }).appendTo(ticketInfoRow1)

	$('<h4>',{
	 	html: duration
	 }).appendTo(dura)


	var pricing= $('<th>',{
	 	class: "pricing"
	 }).appendTo(ticketInfoRow1)

	$('<h4>',{
	 	html: price
	 }).appendTo(pricing)

	var ticketInfoRow2= $('<tr>',{
	 	class: "ticketInfo"
	 }).appendTo(table)


	var flight= $('<td>',{
	 	class: "flight"
	 }).appendTo(ticketInfoRow2)

	$('<p>',{
	 	html: airline
	 }).appendTo(flight)


	var airports= $('<td>',{
	 	class: "airport"
	 }).appendTo(ticketInfoRow2)

	$('<p>',{
	 	html: depPort+'-'+'arrPort'
	 }).appendTo(airports)


	var trip= $('<td>',{
	 	class: "trip"
	 }).appendTo(ticketInfoRow2)

	$('<p>',{
		html:'singleTrip'
	 }).appendTo(trip)

	 $('<i>',{
	 	class: "fa fa-angle-down"
	 }).appendTo(result)

}

