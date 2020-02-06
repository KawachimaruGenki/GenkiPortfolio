$(function(){

  $('#top-btn').click(function(){
    $('html,body').animate({
      'scrollTop':0
    },500);
  });
  
  $('.h-p,.contact').click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);
  });
  
    $('#nav-toggle').click( function() {
        $('body').toggleClass('open');
    });
  
    $('.Toggle').click(function() {
      $(this).toggleClass('active');
      
      if ($(this).hasClass('active')) {
      $('.NavMenu').addClass('active'); 
      } else {
      $('.NavMenu').removeClass('active'); 
      }
      });

      var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '20px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 200); 
            }
        }
    });

    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(function() {
      setTimeout(function(){
        $('.start p').fadeIn(1600);
      },500); 
      setTimeout(function(){
        $('.start').fadeOut(500);
      },2500); 
    });

      });
  
      
  
  
