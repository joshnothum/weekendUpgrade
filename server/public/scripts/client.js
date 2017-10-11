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

event.preventDefault();//to prevent auto refresh when using html <form>
averageMaker();//see below
var $newInfo = $("<div class= 'info'></div>");
$("#newInfo").append($newInfo);
$newInfo.append("<p>" + $('#firstName').val() + "</p>");
$newInfo.append("<p>" + $('#lastName').val() + "</p>");
$newInfo.append("<p>" + $('#employeeID').val() + "</p>");
$newInfo.append("<p>" + $('#annualSalary').val() + "</p>");

$('#monthlyCost').text(monthlyCost);

console.log('help');
reset();




}

function reset() {
  $('input').val('');
 
}

 function averageMaker(){
   
   monthlyCost += parseInt(Math.round(($('#annualSalary').val())/12));
   return monthlyCost;

 }
