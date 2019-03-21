$(document).ready(function(){
  $("form#fortune").submit(function(event){
    event.preventDefault();
    $("#fortune-answer").show();
    $("input:checkbox[name=fortune-teller]:checked").each(function(){
      var reveal = $(this).val();
      $('#fortune-answer').append(reveal + "<br>");
    });
    $('#fortune').hide();
  });
});
