$(document).ready(readyNow);

 function readyNow() {
   console.log('js sourced');

 }
 function clickHandler() {

   $('#submit').on('click', appendInfo);

 }
var monthlyCost = 0;
function appendInfo() {
  event.preventDefault();
  var $tr = $('#employee').append('<tr></tr>');
  $tr.append('<td>'+$('#firstName').val()+'</td>');
  $tr.append('<td>'+$('#lastName').val()+'</td>');
  $tr.append('<td>'+$('#title').val()+'</td>');
  $tr.append('<td>'+$('#employeeID').val()+'</td>');
  $tr.append('<td>'+$('#annualSalary').val()+'</td>');

  monthlyCost();

}

 function monthlyCost(){
   monthlyCost = annualSalary/12;
 }
