var today = moment();

//added date to the header
var todayFormatted = today.format ("MMM Do, YYYY")

$("#currentDay").text(today.format("MMM Do, YYYY"));




//setting the time variable
var hour = today.format("H")
console.log(hour)




//set variable for the time block
var nine = document.querySelector("#hour9")
var ten = document.querySelector("#hour10")
var eleven = document.querySelector("#hour11")
var twelve = document.querySelector("#hour12")
var one = document.querySelector("#hour1")
var two = document.querySelector("#hour2")
var three = document.querySelector("#hour3")
var four = document.querySelector("#hour4")





//color function
function colorNine() {
    if (hour < 9){
        nine.setAttribute("class", "future")
    }
    if (hour == 9) {
        nine.setAttribute("class", "present")
    }
    if (hour > 9) {
        nine.setAttribute("class", "past")
    }
}
colorNine()



function colorTen() {
    if (hour < 10){
        ten.setAttribute("class", "future")
    }
    if (hour == 10) {
        ten.setAttribute("class", "present")
    }
    if (hour > 10) {
        ten.setAttribute("class", "past")
    }
}
colorTen()



function colorEleven() {
    if (hour < 11){
        eleven.setAttribute("class", "future")
    }
    if (hour == 9) {
        eleven.setAttribute("class", "present")
    }
    if (hour > 9) {
        eleven.setAttribute("class", "past")
    }
}
colorEleven()


function colorTwelve() {
    if (hour < 12) {
        twelve.setAttribute("class", "future")
    }
    if (hour == 12) {
        twelve.setAttribute("class", "present")
    }
    if (hour > 12)
        twelve.setAttribute("class", "past")
}

colorTwelve()

function colorOne() {
    if (hour < 13){
        one.setAttribute("class", "future")
    }
    if (hour == 13) {
        one.setAttribute("class", "present")
    }
    if (hour > 13) {
        one.setAttribute("class", "past")
    }
}
colorOne()



function colorTwo() {
    if (hour < 14){
        two.setAttribute("class", "future")
    }
    if (hour == 14) {
        two.setAttribute("class", "present")
    }
    if (hour > 14) {
        two.setAttribute("class", "past")
    }
}
colorTwo()


function colorThree() {
    if (hour < 15){
        three.setAttribute("class", "future")
    }
    if (hour == 15) {
        three.setAttribute("class", "present")
    }
    if (hour > 15) {
        three.setAttribute("class", "past")
    }
}
colorThree()




function colorThree() {
    if (hour < 15){
        three.setAttribute("class", "future")
    }
    if (hour == 15) {
        three.setAttribute("class", "present")
    }
    if (hour > 15) {
        three.setAttribute("class", "past")
    }
}
colorThree()


function colorFour() {
    if (hour < 16) {
        four.setAttribute("class", "future")
    }
    if (hour == 16) {
        four.setAttribute("class", "present")
    }
    if (hour > 16) {
        four.setAttribute("class", "past")
    }
}
colorFour()


//saving events 

var button9 = document.querySelector("#button9")
var textarea9 = document.querySelector("#textarea9")
var userEvent9 = document.querySelector("#userEvent9")

button9.addEventListener("click", function(event){ 
    console.log(textarea9.value)
    localStorage.setItem("userEvent9Storage", textarea9.value)
    textarea9.setAttribute("style", "display:none")
    console.log(userEvent9Storage)

}
)

/// on button clcik
//grab text
//save 
//hide input
//add text to span



//make refresh button to clear all fields 