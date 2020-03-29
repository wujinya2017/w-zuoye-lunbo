requirejs.config({
  "paths":{
    'jquery':'//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
  }
});
require(['jquery'],function($){
  $(function(){
    require(['function'],function(Lunbotu){
          var lunbo = new Lunbotu();
          console.log(lunbo);
    })         

  });
});
