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
$('#container').append("<p>Hello</p>");
var $tr = $('<')
console.log('help');
monthlyCost();

}

 function monthlyCost(){
   var annualSalary = parseInt($('#annualSalary').val()));
   monthlyCost += annualSalary/12;
   return monthlyCost;
 }
