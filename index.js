//Error Message on Error Page
$(document).ready(typeMessage);
function typeMessage() {
  var txt = "Bugger! This is currently not available...";
  var i = 0;
  var speed = 50;

  function addNextCharacter() {
    if (i < txt.length) {
      $("#errortext").append(txt.charAt(i));
      i++;
      setTimeout(addNextCharacter, speed);
    }
  }
  addNextCharacter();
}
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


// Detecting Keyboard Press for movement of character
document.addEventListener("keydown", function (event) {
  // Right Arrow click to move forward
  if (event.keyCode == 39) {
    forward();
  }
   // Left Arrow click to move backwards
  if (event.keyCode == 37) {
    backwards();
  }
  // Up Arrow to jump
  if (event.keyCode == 38) {
    jump();
    setTimeout(function() {
      $('.character').css('bottom','-100px'); //Bottom back to original value
    }, 200); // 200 ms (1 second)
  }
});

function forward() {
  // get current position in px
  const currentPosition = parseInt($('.character').css('left'));
  // change current position: add 10px
  const newPosition = currentPosition + 10;
  // move character to new position
  $('.character').css('left', newPosition + 'px');
}
function backwards() {
  // get current position in px
  const currentPosition = parseInt($('.character').css('left'));
  // change current position: add 10px
  const newPosition = currentPosition - 10;
  // move character to new position
  $('.character').css('left', newPosition + 'px');
}
function jump() {
  // get current position in px
  const currentPosition = parseInt($('.character').css('bottom'));
  // change current position: add 20px
  const newPosition = currentPosition + 100;
  // move character to new position
  $('.character').css('bottom', newPosition + 'px');
}
