$( document ).ready(function() {
	createSearchBar();
	createFilter();
	createGrid("logourl","airline","flightNum",
					"depTime","arrTime","duration",
					"depPort","arrPort","price","id");
	createGrid("logourl","airline","flightNum",
					"depTime","arrTime","duration",
					"depPort","arrPort","price","id2");
	// $('div .excCheck').click(function () { 
	// 	 checkedState = $(this).attr('checked');
	// 	 $('.excCheck').attr('checked', false);
	// 	 $(this).attr('checked', checkedState);
	// });

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
	 	class:"col-lg-8 searchBar",
	 	placeholder: "I want a flight from RDU to SFO on Dec.20…"
	 }).appendTo(searchBox)
	  $('<i>',{
	 	class: "fas fa-search"
	 }).appendTo(searchBox)
}

function createFilter(){
	var filter= $('.searchFilter');
	var sorter= $('<div>',{
	 	class: "mulSorter filter"
	 }).appendTo(filter)


	$('<h6>',{
	 	html: "Sort by price/departure time"
	 }).appendTo(sorter)


	var block1 = $('<div>',{
	 	class:"filter-block"
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
	 	class:"filter-block"
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
	 	class:"filter-block"
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
	 	class:"filter-block"
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

	var block5 = $('<div>',{
	 	class:"filter-block"
	 }).appendTo(airlineFilter)

	$('<h6>',{
	 	html: "Airlines"
	 }).appendTo(block5)
	$('<input>',{
		id: "american",
		type: "checkbox",
	 }).appendTo(block5)

	var block6 = $('<div>',{
	 	class:"filter-block"
	 }).appendTo(airlineFilter)

	$('<p>',{
	 	html: "American Airlines"
	 }).appendTo(block6)

	$('<input>',{
		id: "alaska",
		type: "checkbox",
	 }).appendTo(block6)

	var block7 = $('<div>',{
	 	class:"filter-block"
	 }).appendTo(airlineFilter)


	$('<p>',{
	 	html: "Alaska Airlines"
	 }).appendTo(block7)

	$('<input>',{
		id: "delta",
		type: "checkbox",
	 }).appendTo(block7)
	$('<p>',{
	 	html: "Delta Airlines"
	 }).appendTo(airlineFilter)

	var block8 = $('<div>',{
	 	class:"filter-block"
	 }).appendTo(airlineFilter)

	$('<input>',{
		id: "jetblue",
		type: "checkbox",
	 }).appendTo(block8)
	$('<p>',{
	 	html: "Jetblue Airlines"
	 }).appendTo(block8)

	var block9 = $('<div>',{
	 	class:"filter-block"
	 }).appendTo(airlineFilter)

	$('<input>',{
		id: "united",
		type: "checkbox",
	 }).appendTo(block9)
	$('<p>',{
	 	html: "United Airlines"
	 }).appendTo(block9)

	var block10 = $('<div>',{
	 	class:"filter-block"
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
	 	id: "info"+id
	 }).appendTo($('.resultBox'))

	var info= $('<button>',{
	 	class: "info row"
	 }).appendTo(result)

	$(info).attr("data-toggle","collapse");
	$(info).attr("data-target","#"+'booking'+id);

	$('<img>',{
	 	class: "logo",
	 	src: logourl
	 }).appendTo(info)

	var table= $('<table>',{
	 	class: "tickettableo"
	 }).appendTo(info)

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
	 }).appendTo(info)


	var booking= $('<div>',{
	 	class: "booking collapse",
	 	id:"booking"+id
	 }).appendTo(result)

	$(booking).attr("data-parent","#info"+id);

	$('<h6>',{
	 	html: "First name"
	 }).appendTo(booking)
	 $('<input>',{
	 	id: "book-fname-"+id,
	 	type:"text"
	 }).appendTo(booking)

	 $('<h6>',{
	 	html: "Middle name"
	 }).appendTo(booking)
	 $('<input>',{
	 	id: "book-mname-"+id,
	 	type:"text"
	 }).appendTo(booking)

	  $('<h6>',{
	 	html: "Last name"
	 }).appendTo(booking)
	 $('<input>',{
	 	id: "book-lname-"+id,
	 	type:"text"
	 }).appendTo(booking)

	 $('<h6>',{
	 	html: "Gender"
	 }).appendTo(booking)
	 $('<input>',{
	 	id: "book-gender-"+id,
	 	type:"text"
	 }).appendTo(booking)

	 $('<h6>',{
	 	html: "Age"
	 }).appendTo(booking)
	 $('<input>',{
	 	id: "book-age-"+id,
	 	type:"number"
	 }).appendTo(booking)

	 $('<h6>',{
	 	html: "Email"
	 }).appendTo(booking)
	 $('<input>',{
	 	id: "book-email-"+id,
	 	type:"email"
	 }).appendTo(booking)

	  $('<input>',{
	 	id: "book-submit-"+id,
	 	type:"submit"
	 }).appendTo(booking)

}

