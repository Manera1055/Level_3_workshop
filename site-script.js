console.log('hi');

var firstBox = document.getElementById('first-box');
console.log(firstBox);
firstBox.innerHTML = 'do you know dat wae';
firstBox.style.backgroundColor = 'grey';

var secondBox = document.getElementById('second-box');
console.log(secondBox);
secondBox.innerHTML = 'you dont know dat wae';
 secondBox.style.backgroundColor = 'yellow';

 var thirdBox = document.getElementById('third-box');
 console.log(thirdBox);
 thirdBox.innerHTML = 'I spit on you';
 thirdBox.style.backgroundColor = 'red';

function testfunction(){
    console.log('do you know dat wae');
    firstBox.style.backgroundColor = 'red';
}

firstBox.addEventListener('click',testfunction);

function onMouseOver(){
    secondBox.style.backgroundColor = 'red';
    secondBox.innerHTML = 'i can show you the wae';
}

secondBox.addEventListener('mouseover',onMouseOver);

function onMouseOut(){
    secondBox.style.backgroundColor = 'yellow';
    secondBox.innerHTML = 'you dont know dat wae';
}

secondBox.addEventListener('mouseout',onMouseOut);
    
var listOfItems = document.getElementsByClassName('item');
console.log(listOfItems);

function crossOutItem( event ) {

var item = event.target;
    
    if( item.style.textDecoration == 'line-through') {
        item.style.textDecoration = 'unset';
    }else {
         item.style.textDecoration = 'line-through';
    }
    


}
     












for( var count=0 ; count < listOfItems.length ; count++ ){
    console.log('loop ran', count);
    var item = listOfItems[count];
    console.log(item);
    item.addEventListener('click', crossOutItem);
}












var timeBetweenUpdates = 1000;

var hoursBox = document.getElementById('hours');
var minutesBox = document.getElementById('minutes');
var secondsBox = document.getElementById('seconds');



function displayTime(){
    var date= new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
   
     hoursBox.innerHTML = hours;
     minutesBox.innerHTML = minutes;
    secondsBox.innerHTML = seconds;


    console.log('the time is...', date);
    console.log(hours, minutes, seconds);
}


var clockTimer = setInterval(displayTime, timeBetweenUpdates);