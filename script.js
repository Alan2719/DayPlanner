$(document).ready(function() {

//Current date
var currentDay = $("#currentDay");
var date = moment().format("MMM Do YYYY");
var today = moment().format('dddd'); 
currentDay.text(today + ", " + date);

var hour = moment().format("HH");
console.log(hour);
var h = parseInt(hour);

//Variables
var workHours = [$("#9"),$("#10"),$("#11"),$("#12"),$("#1"),$("#2"),$("#3"),$("#4"),$("#5")]; //Arreglo de textareas
var hours = [9,10,11,12,13,14,15,16,17];

displayTime();
displayColor();

//Clock
function displayTime(){
    var time = moment().format('h:mm:ss a');
    $("#currentTime").text(time);
    setTimeout(displayTime,1000)
    var h = moment().format('h');
}

//Textareas by id
$("#9").attr("data-index",moment("9:00 am", "h:mm a").format("HH"));
$("#10").attr("data-index",moment("10:00 am", "h:mm a").format("HH"));
$("#11").attr("data-index",moment("11:00 am", "h:mm a").format("HH"));
$("#12").attr("data-index",moment("12:00 am", "h:mm a").format("HH"));
$("#1").attr("data-index",moment("1:00 am", "h:mm a").format("HH"));
$("#2").attr("data-index",moment("2:00 am", "h:mm a").format("HH"));
$("#3").attr("data-index",moment("3:00 am", "h:mm a").format("HH"));
$("#4").attr("data-index",moment("4:00 am", "h:mm a").format("HH"));
$("#5").attr("data-index",moment("5:00 am", "h:mm a").format("HH"));

//Get the text from the local Storage.
for (var i = 0; i < workHours.length; i++) {
    console.log(i);
    if (i < 4) {
        console.log(workHours[i].val(localStorage.getItem(i + 9)));
    } else {
        console.log(workHours[i].val(localStorage.getItem(i - 3)));
    }
}

//Save the value of the current textarea
$(".schedule").on('click',function(){ //Agregar la lógica para saber a que textarea pertenece
    var index = $(this).val();
    console.log(index);
    var row = $("#" + index).val();
    localStorage.setItem(index,row);
})

//Change the color 
function displayColor(){
    for (var i = 0; i < hours.length; i++) {
        if (hours[i] == h) {
            var index = i;
            console.log(index);
        }
    }
    for (var j = 0; j < workHours.length; j++) {
        if (j < index) {
            workHours[j].css("background-color","grey");
        } else if (j == index) {
            workHours[j].css("background-color","red");
        } else if (index > 8) {
            for (var k = 0; workHours.length; k++) {
                workHours[k].css("background-color","rgb(6, 177, 245)");
            }
        }
    }
}

})

