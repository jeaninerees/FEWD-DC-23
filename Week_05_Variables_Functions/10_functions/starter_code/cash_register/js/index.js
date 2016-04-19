$(document).ready(function() {

	var total = 0;

	$("#entry").submit(useRegister);

	function useRegister(event) {
		event.preventDefault();
		var newEntry = $("#newEntry").val();
		$("#entries").html("<td>" + newEntry + "</td>");

		newEntry = parseInt(newEntry);
		total = total + newEntry;
		console.log(total);

		$("#total").html(total);
	}













});