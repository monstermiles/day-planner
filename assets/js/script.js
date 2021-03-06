$(document).ready(function () {



$('.saveBtn').on('click', function () {
    var value = $(this).siblings('.todo').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);

}) 

function updateHour(){
    var currentHour = moment().hours();
    $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
        if (blockHour < currentHour) {
            $(this).addClass('past');
          } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
        });
      }
       
updateHour();


var interval = setInterval(updateHour, 15000);

$('hour-9 .todo').val(localStorage.getItem('hour-9'));
$('hour-10 .todo').val(localStorage.getItem('hour-10'));
$('hour-11 .todo').val(localStorage.getItem('hour-11'));
$('hour-12 .todo').val(localStorage.getItem('hour-12'));
$('hour-13 .todo').val(localStorage.getItem('hour-13'));
$('hour-14 .todo').val(localStorage.getItem('hour-14'));
$('hour-15 .todo').val(localStorage.getItem('hour-15'));
$('hour-16 .todo').val(localStorage.getItem('hour-16'));


$('#currentDay').text(moment().format('dddd, MMMM Do'));


});
