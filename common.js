$(document).ready(function(){

    /* Smooth scrolling */
    $("a.scroll").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $("html,body").animate( { scrollTop: destination }, 1300 );
      return false;
    });

    /* Animation block about */
    var h = $(window).height();
    $(window).scroll(function(){
      if ( ($(this).scrollTop()+h) >= $("#animate2").offset().top) {
        $("#animate2 .slide").css({visibility:"visible"});
        $("#animate2 .slide").eq(0).addClass('animated fadeIn');
        $("#animate2 .slide").eq(1).addClass('animated fadeIn');
      }
    });

    /* Animation block contact */
    var h = $(window).height();
    $(window).scroll(function(){
      if ( ($(this).scrollTop()+h) >= $("#animate4").offset().top) {
        $("#animate4 .slide").css({visibility:"visible"});
        $("#animate4 .slide").eq(0).addClass('animated flipInX');
        $("#animate4 .slide").eq(1).addClass('animated flipInX');
        $("#animate4 .slide").eq(2).addClass('animated flipInX');
        $("#animate4 .slide").eq(3).addClass('animated flipInX');
      }
    });

  });