var myVar = setInterval(rotator, 1090);

var nine = document.getElementsByClassName('nine');
var eight = document.getElementsByClassName('eight');
var seven = document.getElementsByClassName('seven');
var six = document.getElementsByClassName('six');
var five = document.getElementsByClassName('five');
var four = document.getElementsByClassName('four');
var three = document.getElementsByClassName('three');
var two = document.getElementsByClassName('two');
var one = document.getElementsByClassName('one');


function rotator() {

    var divs = document.getElementsByClassName("edge-sudr");
    for (var i = 0; i<divs.length-1; i++) {
        var sub_div = divs[i].classList;
        var e = sub_div[1];
        divs[i].classList.remove(e);
        if (e == "one") {
            divs[i].classList.add("two");
        }
        else if (e == "two") {
            divs[i].classList.add("three");
        }
        else if (e == "three") {
            divs[i].classList.add("four");
        }
        else if (e == "four") {
            divs[i].classList.add("five");
        }
        else if (e == "five") {
            divs[i].classList.add("six");
        }
        else if (e == "six") {
            divs[i].classList.add("seven");
        }
        else if (e == "seven") {
            divs[i].classList.add("eight");
        }
        else if (e == "eight") {
            divs[i].classList.add("one");
        }
    }
    
} 