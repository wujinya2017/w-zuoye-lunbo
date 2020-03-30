define(['jquery'],function($){
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
        +'<span id="left" class="btn"><</span>'
        +'<span id="right" class="btn">></span>'
        +'<ul class="nav" id="navs">'
        +'<li class="active">1</li>'
        +'<li>2</li>'
        +'<li>3</li>'
        +'<li>4</li>'
        +'<li>5</li>'
        +'</ul>'
     );
         
     var index = 0,
        timer;

     $('body div').append($lunbo);
     $("#right").click(function(){
            next();
     });
     $("#left").click(function(){
            prev();
     })
    
     $("#box").mouseover(function(){ 
        clearInterval(timer);
        $('.btn').css("opacity",0.5)
     })
     $("#box").mouseleave(function(){ 
        auto();
        $('.btn').css("opacity",0)
     })

     $(".nav li").click(function(){ 
        var index = $(this).index();
        $(".slider").animate({left:-(index+1)*1200},500);
        iconHover(index);
     })
      
     function next(){       
        index++;
        if(index > 4){ 
           $(".slider").animate({left:-(index)*1200},500); 
           index = 0;
           $(".slider").animate({left:0},0);
        }
        $(".slider").animate({left:-(index+1)*1200},500);
        iconHover(index);
      }
      function prev(){
        index--;
        if(index < 0 ){
          index = 4;
          $(".slider").animate({left:-(index+1)*1200},0);
        }
        $(".slider").animate({left:-(index+1)*1200},500);
        iconHover(index);
      }
      function iconHover(index){
        $(".nav li").eq(index).addClass("active").siblings().removeClass("active");
      }
      function auto(){ 
          timer = setInterval(function(){ 
              next();
              iconHover(index);
          },2000) 
      }   
  }
  return Lunbotu;
});

