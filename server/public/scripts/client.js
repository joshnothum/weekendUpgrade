$(document).ready(readyNow);

 function readyNow() {
   console.log('js sourced');
   clickHandler();

 }
 function clickHandler() {

   $('#button').on('click', appendInfo);

 }
var monthlyCost = 0;

function appendInfo() {
event.preventDefault();
averageMaker();
console.log(monthlyCost);

var $newInfo = $("<p class = 'info'></p>");
$('#monthlyCost').text(monthlyCost);

console.log('help');




}

 function averageMaker(){
   
   monthlyCost += parseInt(($('#annualSalary').val())/12);
   return monthlyCost;

 }
