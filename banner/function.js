//define(['jquery'],function($){
  function Lunbotu(){
     var $lunbo = $(''
        +'<div class="slider" id="slider">'
        +'<div class="slide"><img src="img/b5.png" alt=""></div>'
        +'<div class="slide"><img src="img/b1.png" alt=""></div>'
        +'<div class="slide"><img src="img/b2.png" alt=""></div>'
        +'<div class="slide"><img src="img/b3.png" alt=""></div>'
        +'<div class="slide"><img src="img/b4.png" alt=""></div>'
        +'<div class="slide"><img src="img/b5.png" alt=""></div>'
        +'<div class="slide"><img src="img/b1.png" alt=""></div>'
        +'</div>'
        +'<span id="left"><</span>'
        +'<span id="right">></span>'
        +'<ul class="nav" id="navs">'
        +'<li>1</li>'
        +'<li>2</li>'
        +'<li>3</li>'
        +'<li>4</li>'
        +'<li>5</li>'
        +'</ul>'
     );
         
     var cfg={
          container:'body div',        
        },
        index;

     this.show = function(conf){
        $(cfg.container).append($lunbo);
        $.extend(cfg,conf);
     }
  }
  //return Lunbotu;
//});

