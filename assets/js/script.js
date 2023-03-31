var time9 = document.getElementById("text9")
var time10 = document.getElementById("text10")
var time11 = document.getElementById("text11")
var time12 = document.getElementById("text12")
var time1 = document.getElementById("text1")
var time2 = document.getElementById("text2")
var time3 = document.getElementById("text3")
var time4 = document.getElementById("text4")
var time5 = document.getElementById("text5")

var currentDay = document.getElementById("currentDay")

var saveButtons = document.querySelectorAll(".saveBtn")


var date = moment();
var currentDate = date.format('hh');
console.log(currentDate)
var topDate = date.format('MM DD YYYY');
console.log(topDate)

function displayTopDate() {
   var displayedTopDate = `Today is ${topDate}.`;
   currentDay.innerHTML = displayedTopDate;
}



function updateTimeblockColors() {
    var currentHour = moment().hour();

    var timeblocks = document.querySelectorAll("textarea")
    timeblocks.forEach(function(timeblock) {
        var hour = parseInt(timeblock.dataset.hour);

        if (hour < currentHour) {
            timeblock.classList.add("past");
        } else if (hour === currentHour) {
            timeblock.classList.add("present");
        } else {
            timeblock.classList.add("future"); 
        }
    });
}



// saveButtons.forEach(function(saveButton) {
//     saveButton.addEventListener("click", saveEvent);
// });


// function saveEvent() {
//     var eventText = this.previousElementSibling.value;
//     var eventHour = this.parentElement.previousElementSibling.dataset.hour;
//     localStorage.setItem("event-" + eventHour, eventText);
// } 

// saveEvent(); 


function loadEvents(hour) {
    var savedEvents = localStorage.getItem(`event${hour}` );

    if (savedEvents) {
        var timeblocks = document.querySelectorAll("textarea");
        timeblocks.forEach(function(timeblock) {
            var savedEvent = savedEvents[timeblock.id];

            if (savedEvent) {
                timeblock.textContent = savedEvent;
            }
        });
    }
}
time9.textContent = localStorage.getItem("event9")
time10.textContent = localStorage.getItem("event10")
time11.textContent = localStorage.getItem("event11")
time12.textContent = localStorage.getItem("event12")
time1.textContent = localStorage.getItem("event1")
time2.textContent = localStorage.getItem("event2")
time3.textContent = localStorage.getItem("event3")
time4.textContent = localStorage.getItem("event4")
time5.textContent = localStorage.getItem("event5")
 
function handleClick(event) {
    event.preventDefault();
    
    var button = event.target;
    var hour = button.dataset.hour;
    var eventText = document.getElementById(`text${hour}`).value;

    localStorage.setItem(`event${hour}`, eventText);
}

function init() {
    loadEvents();
    displayTopDate();
    updateTimeblockColors();

    var saveButtons = document.querySelectorAll(".saveBtn");
    saveButtons.forEach(function(button) {
      button.addEventListener("click", handleClick);
    });
  }


window.addEventListener("load", init);