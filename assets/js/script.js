var today = moment();

//added date to the header
var todayFormatted = today.format ("MMM Do, YYYY")

$("#currentDay").text(today.format("MMM Do, YYYY"));

