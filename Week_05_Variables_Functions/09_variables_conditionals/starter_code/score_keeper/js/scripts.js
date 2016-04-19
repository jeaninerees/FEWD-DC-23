$(document).ready(function() {

var score = 0;

$("#add5").click(addFive);
$("#add10").click(addTen);
$("#sub1").click(subtractOne);
$("#zero").click(makeZero);

function addFive() {
	score = score + 5;
	$("#result").html(score);
}

function addTen() {
	score = score + 10;
	$("#result").html(score);
}

function subtractOne() {
	score = score - 1;
	$("#result").html(score);
}

function makeZero() {
	score = 0;
	$("#result").html(score);
}













});