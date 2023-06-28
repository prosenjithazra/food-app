jQuery(document).ready(function($){
// document start


 // Navbar
 $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
     e.preventDefault();
     var $this = $(this);
     if ($this.next().hasClass('show'))
        {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
        } 
        else 
        {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
        }
 });

 $(window).on('resize', function(){
     if ($(this).width() < 1025) {
         $('html').click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $(document).click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $('.navbar-nav').click(function(e){
            e.stopPropagation();
         });
     }
 });
 // Navbar end


 
/* ===== For menu animation === */
$(".navbar-toggler").click(function(){
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $('body,html' ).toggleClass("open-nav");
});

// Navbar end





// to make sticky nav bar
// $(window).scroll(function() {     
//     var scroll = $(window).scrollTop();     
//     if (scroll > 200) { 
//         $(".main-head").addClass("fixed"); 
//     } 
//     else {
//       $(".main-head").removeClass("fixed"); 
//     }
// }) 


// smooth scroll to any section
// if($('a.scroll').length){
//     $("a.scroll").on('click', function(event) {
//       if (this.hash !== "") {
//         event.preventDefault();
//         var target = this.hash, $target = $(target);
//         $('html, body').animate({
//           scrollTop: $target.offset().top - 60
//         }, 800, function(){
//           window.location.href.substr(0, window.location.href.indexOf('#'));
//         });
//       } 
//     });
  
//   }


// back to top
if($("#scroll").length){
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(200); 
        } else { 
            $('#scroll').fadeOut(200); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
}




// one page scroll menu link
// $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault();
//     $(document).off("scroll");
//     $('.navbar-nav > li > a').each(function () {
//         $(this).parent('li').removeClass('current-menu-item');
//     });
//     $(this).parent('li').addClass('current-menu-item');
//     var target = this.hash, $target = $(target);
//     $('html, body').stop().animate({
//         'scrollTop': $target.offset().top
//     }, 500, 'swing', function () {
//         window.location.href.substr(0, window.location.href.indexOf('#'));
//         $(document).on("scroll", onScroll);
//     });
// });
//  $(document).on("scroll", onScroll);
// function onScroll(event){
//     var scrollPos = $(document).scrollTop() + 100;
//     $('.navbar-nav > li > a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.navbar-nav > li').removeClass("current-menu-item");
//             currLink.parent('li').addClass("current-menu-item");
//         }
//         else{
//             currLink.parent('li').removeClass("current-menu-item");
//         }
//     });
// }







// $('.number-slider').slick({
//   dots: false,
//   arrows: true,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 3000,
//   centerMode: false,
//   adaptiveHeight: true,
//   centerPadding: '0px',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });






$('.add').click(function () {
    if ($(this).prev().val() < 100) {
    $(this).prev().val(+$(this).prev().val() + 1);
    }
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
});


// $( function() {
//     $( "#datepicker" ).datepicker();
//   } );




  // $( function() {
  //   var handle = $( "#amount" );
  //   var handle1 = $( "#amount1" );
  //   $( "#slider-range" ).slider({
  //     range: true,
  //     min: 0,
  //     max: 150,
  //     values: [ 15, 100 ],
  //     slide: function( event, ui ) {
  //      handle.text(  ui.values[ 0 ] + "$");
  //      handle1.text(  ui.values[ 1 ] + "$");
  //     },
  //     create: function() {
  //       handle.text( $( this ).slider("values", 0) + "$");
  //       handle1.text( $( this ).slider(  "values", 1 ) + "$");
  //     },
  //   });
  // } );

  // $( function() {
  //   var handle = $( "#amount_1" );
  //   var handle1 = $( "#amount1_1" );
  //   $( "#slider-range_1" ).slider({
  //     range: true,
  //     min: 0,
  //     max: 10,
  //     values: [ 3, 5 ],
  //     slide: function( event, ui ) {
  //      handle.text(  ui.values[ 0 ] + "hr");
  //      handle1.text(  ui.values[ 1 ] + "hr");
  //     },
  //     create: function() {
  //       handle.text( $( this ).slider("values", 0) + "hr");
  //       handle1.text( $( this ).slider(  "values", 1 ) + "hr");
  //     },
  //   });
  // } );


  // $( function() {
  //   var handle = $( "#amount_2" );
  //   var handle1 = $( "#amount1_2" );
  //   $( "#slider-range_2" ).slider({
  //     range: true,
  //     min: 0,
  //     max: 2000,
  //     values: [ 100, 1000 ],
  //     slide: function( event, ui ) {
  //      handle.text(  ui.values[ 0 ]);
  //      handle1.text(  ui.values[ 1 ]);
  //     },
  //     create: function() {
  //       handle.text( $( this ).slider("values", 0));
  //       handle1.text( $( this ).slider(  "values", 1 ) );
  //     },
  //   });
  // } );

// custom file upload btn open
jQuery(".customfile_inputin").on("change",function(){
  var file_name = jQuery('input[type=file]').val().split('\\').pop();
  jQuery(".customfile_label").text(file_name);
  });
  // custom file upload btn end





  $(".filter_toggler_btn").click(function(){
    $(this).parent().toggleClass("open");
    $('body,html' ).toggleClass("open-filter-nav");

    if($(this).parent().hasClass("open")){
      $("body").append("<div class='filter_overlay'></div>")
    }
    else{
      $("body").find(".filter_overlay").remove();
    }
});

$(".filter_close_btn").click(function(){
  $("body").find(".filter_overlay").remove();
  $("body, html").removeClass("open-filter-nav");
  $(".filter-toggler").removeClass("open");
})

$(document).on('click', '.filter_overlay', function (e) {
  $(this).remove();
  $("body, html").removeClass("open-filter-nav");
  $(".filter-toggler").removeClass("open");
})


// document end



$('.new-home-slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false,
  adaptiveHeight: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

})


