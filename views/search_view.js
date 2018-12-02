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
	
}
