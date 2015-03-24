$(document).ready(function(){
$('#enter').on('click',function(){
   var item = $('input').val();
   $('ul').append('<li>'+item+"</li>");
   });
$('#empty').on('click',function(){
   var item = $('input').val();
   $('ul').empty();
 });
});

