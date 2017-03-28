var WIDTH = screen.width;
var HEIGHT = (100/768)*screen.height;

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
      canvas.style.height = ((90/768) * 100) + "%";
      //console.log(canvas)
      ctx = canvas.getContext('2d');
      draw();
      function draw(){
        //#4F739C

        var colors = ["#3a7ca5", "#2f6690", "#7bb6c9"];
        var color1 = colors[2];
        var color2 = colors[1];
        var color3 = colors[0];
        // var color1 = colors[(Math.round(Math.random()*(colors.length-1)))];
        // var color2 = colors[(Math.round(Math.random()*(colors.length-1)))];
        // var color3 = colors[(Math.round(Math.random()*(colors.length-1)))];
        // while(color2 == color1){
        //   color2 = colors[(Math.round(Math.random()*(colors.length-1)))];
        // }
        // while(color3 == color1 || color3 == color2){
        //   color3 = colors[(Math.round(Math.random()*(colors.length-1)))];
        // }

        //console.log(color1, color2, color3)
        
//         ctx.globalAlpha = 0.5;


        random_ha = ((Math.random()*(HEIGHT-(HEIGHT*0.15))))+(HEIGHT*0.075);
        random_hb = HEIGHT-random_ha;

        ctx.fillStyle = color1;
        ctx.fillRect(0, 0, WIDTH, random_ha);

        ctx.fillStyle = color2;
        ctx.fillRect(0, random_ha, WIDTH, random_hb);

        if(random_ha >= random_hb){
          ctx.fillStyle = color3;
          ctx.fillRect(0, (random_ha-(HEIGHT*0.25)), WIDTH, 25)
        } else if(random_ha < random_hb){
          ctx.fillStyle = color3;
          ctx.fillRect(0, random_ha, WIDTH, 25)
        }

      }
    }
  }
  renderCanvas();
  
  var dividers = document.getElementsByClassName('canvas_div');
  for(var canvas in dividers){
    console.log(dividers[canvas]);
    dividers[canvas].style.opacity = 0.2;
  }
})
