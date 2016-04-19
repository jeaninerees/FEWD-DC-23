$(document).ready(function() {

var a;
var b;
var myName = "Bob"

// Defining the function:
function whatIsMyName(myName) {
	console.log(myName);
}
// Using the function:
whatIsMyName(myName);

// Or you can define the variable on the fly:
whatIsMyName("Sal");


$("#submit").click(compareNumbers);

function compareNumbers() {
	a = $("#a").val();
	a = parseInt(a);
	b = $("#b").val();
	b = parseInt(b)
	console.log(a);
	console.log(b);

	if (a>b) {
		$("#comparison").html(">");
		$("body").removeClass();
		$("body").addClass("pinkBackground");
		console.log("Fuck you, right number");
	} else if (a<b) {
		$("#comparison").html("<");
		$("body").removeClass();
		$("body").addClass("greenBackground");
		console.log("Fuck you, left number");
	} else if (a == b) {
		$("#comparison").html("=");
		$("body").removeClass();
		$("body").addClass("yellowBackground");
		console.log("We are all equal here");
	}
}

});