
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
	var filter= $('<div>',{
	 	class: "searchFilters col-lg-4"
	 }).appendTo($('.searchResult'))
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

function createGrid(){
	var resultBox= $('<div>',{
	 	class: "resultBox col-lg-8"
	 }).appendTo($('.searchResult'))
}

