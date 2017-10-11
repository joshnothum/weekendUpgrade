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
var $newInfo = $("<tr class= 'info'></tr>");
$("#newInfo").append($newInfo);
$newInfo.append("<td>" + $('#firstName').val() + "</td>");
$newInfo.append("<td>" + $('#lastName').val() + "</td>");
$newInfo.append("<td>" + $('#employeeID').val() + "</td>");
$newInfo.append("<td>" + $('#annualSalary').val() + "</td>");

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
