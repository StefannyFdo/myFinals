// var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();
  
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
  
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//     // Display the result in the element with id="demo"
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";
  
//     // If the count down is finished, write some text
//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("demo").innerHTML = "It's Your Birthday Today";
//     }
//   }, 1000);

 

  const months = [
    "January", "February", 
    "March", "April", "May", 
    "June", "July", "August",
    "September", "October", 
    "November", "December"
];

const days = [
    "Sunday", "Monday", 
    "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday"];

    var toggle = true;


    var x = setInterval(twentyFourClock,1000);

  function myToggle(){
    toggle = !toggle;
  }

//   if(toggle==true){
//     var x = setInterval(twentyFourClock,1000);
// }else{
//     var x = setInterval(twelveClock,1000);
// }




function twentyFourClock(){
        var today = new Date();
        var month = months[today.getMonth()];
        var year = today.getFullYear();
        var thisDate = today.getDate();
        var displayDate = month + " " + thisDate + ", " + year;
        var day = days[today.getDay()];
        
        var hour = today.getHours();;
        var twentfour = today.getHours();
        var twelveHour = hour>12 ? hour-12: hour;
        var session = hour > 12 ?"PM" : "AM";

        if(toggle == true){
                hour = twelveHour;
                
        }else{
            hour = twentfour;
            session = "";
        }

        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        
       

        document.getElementById("date").innerText = displayDate;
  document.getElementById("day").innerText = day;
  document.getElementById("hours").innerText = hour;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("session").innerText = session;
    }


 



 

  

