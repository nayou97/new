$(function(){
  $(window).on('load',function(){
    new WOW().init();
  });
});//wow plugin 초기화











$(function(){
  //var
  var $mePrev = $('#aboutme>.content1-right>.profile>.prev');
  var $meNext = $('#aboutme>.content1-right>.profile>.next');
  var $aboutme = $('#aboutme>.content1-right>.profile>ul>li');
  var $tag = $('#aboutme>.content1-right>.tag>ul>li');

  var $list = $('#portfolio>.container>.mnu>li>a');
  var $listImg = $('#portfolio>.container>.view>li');
  var $viewOpen = $('.viewOpen');
  var $viewClose = $('.viewClose');
  var $viewImg = $('#portfolio>.portfolio_bg>.portfolio_img');
  var $view = $('#portfolio>.portfolio_bg');

  var $dePrev = $('#design>.prev');
  var $deNext = $('#design>.next');
  var $design = $('#design>.container>ul');
  var $designs = $('#design>.container>ul>li');
  var $gallOpen = $('.gallOpen');
  var $gallClose = $('.gallClose');
  var $gall = $('#design>.gallery_bg');
  var $gallImg = $('#design>.gallery_bg>.gallery_img');

  var nowIdx = 0;

  //design
  function galleryMove(){
    $designs.eq(nowIdx).stop().animate({left:0,},500,function(){
      $designs.eq(nowIdx).siblings().css({'left':'990px'}).appendTo($design);
    });
  }

  $dePrev.on('click',function(){
    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx = 2;
    }

    galleryMove();
  });

  $deNext.on('click',function(){
    if(nowIdx<2){
      nowIdx++;
    }else{
      nowIdx = 0 ;
    }

    galleryMove();
  });

  $gallOpen.on('click',function(event){
    event.preventDefault();
    var src = $(this).attr('href');

    $gallImg.css({
      backgroundImage : 'url('+src+')'
    }).parent().fadeIn();
  });

  $gallClose.on('click',function(event){
    event.preventDefault();
    $gall.fadeOut();
  });

  $gall.on('click',function(){
    $gall.fadeOut();
  });//end of design






$(window).ready(function(){
   draw(80, '.pie-chart1', '#ccc');
  draw(70, '.pie-chart2', '#8b22ff');
  draw(70, '.pie-chart3','#ff8'); /* 크기(량), 지칭하는 그래프, 색깔 */
  draw(70, '.pie-chart4','#33aa77');
  draw(70, '.pie-chart5','#eeaaaa');
});

function draw(max, classname, colorname){
   var i=1;
    var func1 = setInterval(function(){
      if(i<max){
          color1(i,classname,colorname);
          i++;
      } else{
        clearInterval(func1);
      }
    },10);
}

function color1(i, classname,colorname){
   $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
   });
}













});//end of section handler