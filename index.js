$(".playbutton").on("click", function() {
    window.location.href = "./error.html";
  });
  $(".glancebutton").on("click", function() {
    window.location.href = "./game.html";
  });
//tickle cartman to let him flick the finger
$('.character').on("click",function() {
  $('.character .thumb').css('opacity', 1);  

  setTimeout(function() {
    $('.character .thumb').css('opacity', ''); //Opacity back to original value
  }, 1000); // 1000 ms (1 second)
});
//click top left cloud to let the sun shine
$('.cloud').on("click",function() {
  $('.cloud').css('background', "lightgrey");  

  setTimeout(function() {
    $('.cloud').css('background', "#ECEFF1"); //Cloud Color back to original value
  }, 1000); // 1000 ms (1 second)
});
