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



//local storage things
var button9 = document.querySelector("#button9")
var textarea9 = document.querySelector("#textarea9")


// var eventObject = {
//     time:"",
//     eventContent:""
// }

var eventArray = [] 


window.onload = renderEvents


function renderEvents(){
    fetchArray = JSON.parse(localStorage.getItem("eventArrayStorage")) || []
    console.log(fetchArray.eventObject)

}



////use this.object from lesson 3.25

button9.addEventListener("click", function(event){ 
    event.preventDefault()
    console.log(textarea9.value)
    eventObject = {
        time: "hour9",
        eventContent: textarea9.value
    }
    eventArray.push(eventObject)
    localStorage.setItem("eventArrayStorage", JSON.stringify(eventArray))
 
}
)




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






