function createLogIn(){
	 var logInBox= $('<div>',{
	 	class: "logInBox"
	 }).appendTo($('.log-in'))
	 $('<h2>',{
	 	class: "head",
	 	html: "welcome"
	 }).appendTo(logInBox)
	 $('<h6>',{
	 	class: "username",
	 	html: "username"
	 }).appendTo(logInBox)
	 $('<input>',{
	 	id: "input-username",
	 	type:"text"
	 }).appendTo(logInBox)
	 $('<h6>',{
	 	class: "password",
	 	html: "password"
	 }).appendTo(logInBox)
	 $('<input>',{
	 	id: "input-password",
	 	type:"text"
	 }).appendTo(logInBox)
	 /*****Add onclick function****/
	 $('<button>',{
	 	id: "log-in",
	 	type:"submit",
	 	html: "Sign In",
	 	onclick: ""
	 }).appendTo(logInBox)
}
