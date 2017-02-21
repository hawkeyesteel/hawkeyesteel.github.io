var WIDTH = screen.width;
var HEIGHT = 90;

$(document).ready(function(){
  $("#header").hide().delay(0).fadeIn(500)
  $("#content").hide().delay(250).fadeIn(500)
  $(".site-footer").hide().delay(500).fadeIn(500);




  var dividers = document.getElementsByClassName("divider");

  for(var i = 0; i < dividers.length; i++){
    var new_canvas = document.createElement('canvas');
    new_canvas.className = "canvas_div";
    new_canvas.width = WIDTH;
    new_canvas.height = HEIGHT;
    dividers[i].appendChild(new_canvas);
  }

  var cdivs = document.getElementsByClassName("canvas_div");

  function renderCanvas(){
    var canvas;
    var ctx;
    for(var canvas in cdivs){
      canvas = cdivs[canvas];
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      canvas.style.width = "100%";
      //console.log(canvas)
      ctx = canvas.getContext('2d');
      draw();
      function draw(){
        //#4F739C

        random_ha = ((Math.random()*(HEIGHT-(HEIGHT*0.15))))+(HEIGHT*0.075);
        random_hb = HEIGHT-random_ha;

        ctx.fillStyle = "#3A7CA5";
        ctx.fillRect(0, 0, WIDTH, random_ha);

        ctx.fillStyle = "#2F6690";
        ctx.fillRect(0, random_ha-1, WIDTH, random_hb);
      }
    }
  }
  renderCanvas();
})
