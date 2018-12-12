$( document ).ready(function() {
	createSearchBar();
});

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
		class:"searchBar col-lg-8 col-10",
		placeholder: "I want a flight from RDU to SFO on Dec.20…"
	}).appendTo(searchBox)
	$('<i>',{
		id: "ticketSearchButton",
		// type: "button",
		class: "fas fa-search"
	}).appendTo(searchBox)
}

function createFilter(){
	var filterBox= $('.searchFilter');
	var filter = $('<div>',{
		class:"filterBox"
	}).appendTo(filterBox)

	var sorter= $('<div>',{
		class: "mulSorter filter"
	}).appendTo(filter)


	$('<h6>',{
		html: "Sort by price/departure time"
	}).appendTo(sorter)


	var block1 = $('<div>',{
		class:"filter-block row"
	}).appendTo(sorter)

	$('<input>',{
		id: "priceAsc",
		type: "radio",
		class:"excCheck",
		name: "sort"
	}).appendTo(block1)
	$('<p>',{
		html: "Price lowest to highest",
		for: "priceAsc"
	}).appendTo(block1)

	var block2 = $('<div>',{
		class:"filter-block row"
	}).appendTo(sorter)

	$('<input>',{
		id: "priceDesc",
		type: "radio",
		name: "sort",
		class:"excCheck"
	}).appendTo(block2)
	$('<p>',{
		html: "Price highest to lowest"
	}).appendTo(block2)

	var block3 = $('<div>',{
		class:"filter-block row"
	}).appendTo(sorter)

	$('<input>',{
		id: "timeAsc",
		type: "radio",
		name: "sort",
		class:"excCheck"
	}).appendTo(block3)
	$('<p>',{
		html: "Dept. time earliest to latest"
	}).appendTo(block3)

	var block4 = $('<div>',{
		class:"filter-block row"
	}).appendTo(sorter)

	$('<input>',{
		id: "timeDesc",
		type: "radio",
		name: "sort",
		class:"excCheck"
	}).appendTo(block4)
	$('<p>',{
		html: "Dept. time latest to earliest"
	}).appendTo(block4)


	var airlineFilter= $('<div>',{
		class: "airlineFilter filter"
	}).appendTo(filter)


	$('<h6>',{
		html: "Airlines"
	}).appendTo(airlineFilter)

	var block5 = $('<div>',{
		class:"filter-block row"
	}).appendTo(airlineFilter)

	$('<input>',{
		id: "American Airlines",
		type: "checkbox",
	}).appendTo(block5)


	$('<p>',{
		html: "American Airlines"
	}).appendTo(block5)

	var block6 = $('<div>',{
		class:"filter-block row"
	}).appendTo(airlineFilter)

	$('<input>',{
		id: "Alaska Airlines",
		type: "checkbox",
	}).appendTo(block6)

	$('<p>',{
		html: "Alaska Airlines"
	}).appendTo(block6)

	var block7 = $('<div>',{
		class:"filter-block row"
	}).appendTo(airlineFilter)

	$('<input>',{
		id: "Delta Air Lines",
		type: "checkbox",
	}).appendTo(block7)

	$('<p>',{
		html: "Delta Airlines"
	}).appendTo(block7)

	var block8 = $('<div>',{
		class:"filter-block row"
	}).appendTo(airlineFilter)

	$('<input>',{
		id: "JetBlue Airways",
		type: "checkbox",
	}).appendTo(block8)
	$('<p>',{
		html: "JetBlue Airways"
	}).appendTo(block8)

	var block9 = $('<div>',{
		class:"filter-block row"
	}).appendTo(airlineFilter)

	$('<input>',{
		id: "United Airlines",
		type: "checkbox",
	}).appendTo(block9)
	$('<p>',{
		html: "United Airlines"
	}).appendTo(block9)

	var block10 = $('<div>',{
		class:"filter-block row"
	}).appendTo(airlineFilter)

	$('<input>',{
		id: "other",
		type: "checkbox",
	}).appendTo(block10)
	$('<p>',{
		html: "Other Airlines"
	}).appendTo(block10)
}

function createGrid(logourl,airline,flightNum,
	depTime,arrTime,duration,
	depPort,arrPort,price,
	id){
	var result= $('<div>',{
		class: "result btn btn-link",
		id: "info-"+id
	}).appendTo($('.resultBox'))

	var info= $('<button>',{
		class: "info row"
	}).appendTo(result)

	$(info).attr("data-toggle","collapse");
	$(info).attr("data-target","#"+'booking-'+id);

	// $('<img>',{
	// 	class: "logo col-lg-3",
	// 	src: logourl
	// }).appendTo(info)

	$('<i>',{
		class: "logo col-lg-3 col-3 fas fa-plane",
	}).appendTo(info)

	var table= $('<table>',{
		class: "ticketTable col-lg-6 col-6"
	}).appendTo(info)

	var ticketInfoRow1= $('<tr>',{
		class: "ticketInfo"
	}).appendTo(table)


	var time= $('<th>',{
		class: "time col-lg-3"
	}).appendTo(ticketInfoRow1)

	$('<h5>',{
		html: depTime+'-'+arrTime
	}).appendTo(time)

	var dura= $('<th>',{
		class: "duration col-lg-3"
	}).appendTo(ticketInfoRow1)

	$('<h5>',{
		html: duration
	}).appendTo(dura)


	var pricing= $('<th>',{
		class: "pricing col-lg-3"
	}).appendTo(ticketInfoRow1)

	$('<h4>',{
		html: '$'+price
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
		html: depPort+'-'+arrPort
	}).appendTo(airports)


	var trip= $('<td>',{
		class: "trip"
	}).appendTo(ticketInfoRow2)

	$('<p>',{
		html:'Single Trip'
	}).appendTo(trip)

	$('<i>',{
		class: "fa fa-angle-down col-lg-1 col-1"
	}).appendTo(info)


	var booking= $('<div>',{
		class: "booking collapse row",
		id:"booking-"+id
	}).appendTo(result)

	$(booking).attr("data-parent","#info-"+id);

	var block1 = $('<div>',{
		class:"booking-block col-lg-6"
	}).appendTo(booking)

	$('<h6>',{
		html: "First name"
	}).appendTo(block1)
	$('<input>',{
		id: "book-fname-"+id,
		type:"text"
	}).appendTo(block1)

	var block2 = $('<div>',{
		class:"booking-block col-lg-6"
	}).appendTo(booking)

	$('<h6>',{
		html: "Middle name"
	}).appendTo(block2)
	$('<input>',{
		id: "book-mname-"+id,
		type:"text"
	}).appendTo(block2)

	var block3 = $('<div>',{
		class:"booking-block col-lg-6"
	}).appendTo(booking)

	$('<h6>',{
		html: "Last name"
	}).appendTo(block3)
	$('<input>',{
		id: "book-lname-"+id,
		type:"text"
	}).appendTo(block3)

	var block4 = $('<div>',{
		class:"booking-block col-lg-6"
	}).appendTo(booking)

	$('<h6>',{
		html: "Gender"
	}).appendTo(block4)
	$('<input>',{
		id: "book-gender-"+id,
		type:"text"
	}).appendTo(block4)

	var block5 = $('<div>',{
		class:"booking-block col-lg-4"
	}).appendTo(booking)

	$('<h6>',{
		html: "Age"
	}).appendTo(block5)
	$('<input>',{
		id: "book-age-"+id,
		type:"number"
	}).appendTo(block5)

	var block6 = $('<div>',{
		class:"booking-block col-lg-4"
	}).appendTo(booking)

	$('<h6>',{
		html: "Email"
	}).appendTo(block6)
	$('<input>',{
		id: "book-email-"+id,
		type:"email"
	}).appendTo(block6)

	$('<input>',{
		id: "book-submit-"+id,
		type:"submit",
		value: "Book now",
		class:"booking-block submit-btn book-submit col-lg-4"
	}).appendTo(booking)

}

function flightNotFound(){
	$('.searchFilter').empty();
	$('.resultBox').empty();
	$('.noflight').remove();

	$('<h3>',{
		html: "( ¯•ω•¯ )",
		class: "noflight col-lg-12"
	}).appendTo('.searchResult')
	$('<p>',{
		html: "No flights found!",
		class: "noflight col-lg-12"
	}).appendTo('.searchResult')
}

function submitForm(){
	alert("Ticket submitted!");
	location.reload();
}

