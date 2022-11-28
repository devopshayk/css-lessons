$(document).ready(function(){
    $(".btn").click(function(){
      var toggleText = $(this).data('toggle-text');
      $(this).data('toggle-text', $(this).text())
             .text(toggleText);
    $(".description").toggleClass('show');
    });
  });