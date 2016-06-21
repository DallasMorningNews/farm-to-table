$(document).ready(function() {

	//custom scripting goes here



    //chicken mobile
      $("#m-chicken-origins-toggle").click(function(){
          $("#chicken-origins-section").show();
          $("#m-chicken-origins-toggle").addClass('origins-orange');
          $("#m-chicken-recipe-toggle").addClass('recipe-gray');
          $("#m-chicken-origins-toggle").removeClass('origins-gray');
          $("#m-chicken-recipe-toggle").removeClass('recipe-orange');
          $("#chicken-recipe-section").hide();
      });

      $("#m-chicken-recipe-toggle").click(function(){
          $("#chicken-recipe-section").show();
          $("#chicken-recipe-section").removeClass('hide');
          $("#m-chicken-origins-toggle").addClass('origins-gray');
          $("#m-chicken-recipe-toggle").addClass('recipe-orange');
          $("#m-chicken-origins-toggle").removeClass('origins-orange');
          $("#m-chicken-recipe-toggle").removeClass('recipe-gray');
          $("#chicken-origins-section").hide();
      });


    //chicken desktop
      $("#chicken-origins-toggle").click(function(){
          $("#chicken-origins-section").show();
          $("#chicken-origins-toggle").addClass('origins-orange');
          $("#chicken-recipe-toggle").addClass('recipe-gray');
          $("#chicken-origins-toggle").removeClass('origins-gray');
          $("#chicken-recipe-toggle").removeClass('recipe-orange');
          $("#chicken-recipe-section").hide();
      });

      $("#chicken-recipe-toggle").click(function(){
          $("#chicken-recipe-section").show();
          $("#chicken-recipe-section").removeClass('hide');
          $("#chicken-origins-toggle").addClass('origins-gray');
          $("#chicken-recipe-toggle").addClass('recipe-orange');
          $("#chicken-origins-toggle").removeClass('origins-orange');
          $("#chicken-recipe-toggle").removeClass('recipe-gray');
          $("#chicken-origins-section").hide();
      });

    //ratatouille mobile
      $("#m-rata-origins-toggle").click(function(){
          $("#rata-origins-section").show();
          $("#m-rata-origins-toggle").addClass('origins-orange');
          $("#m-rata-recipe-toggle").addClass('recipe-gray');
          $("#m-rata-origins-toggle").removeClass('origins-gray');
          $("#m-rata-recipe-toggle").removeClass('recipe-orange');
          $("#rata-recipe-section").hide();
      });

      $("#m-rata-recipe-toggle").click(function(){
          $("#rata-recipe-section").show();
          $("#rata-recipe-section").removeClass('hide');
          $("#m-rata-origins-toggle").addClass('origins-gray');
          $("#m-rata-recipe-toggle").addClass('recipe-orange');
          $("#m-rata-origins-toggle").removeClass('origins-orange');
          $("#m-rata-recipe-toggle").removeClass('recipe-gray');
          $("#rata-origins-section").hide();
      });


    //ratatouille desktop
      $("#rata-origins-toggle").click(function(){
          $("#rata-origins-section").show();
          $("#rata-origins-toggle").addClass('origins-orange');
          $("#rata-recipe-toggle").addClass('recipe-gray');
          $("#rata-origins-toggle").removeClass('origins-gray');
          $("#rata-recipe-toggle").removeClass('recipe-orange');
          $("#rata-recipe-section").hide();
      });

      $("#rata-recipe-toggle").click(function(){
          $("#rata-recipe-section").show();
          $("#rata-recipe-section").removeClass('hide');
          $("#rata-origins-toggle").addClass('origins-gray');
          $("#rata-recipe-toggle").addClass('recipe-orange');
          $("#rata-origins-toggle").removeClass('origins-orange');
          $("#rata-recipe-toggle").removeClass('recipe-gray');
          $("#rata-origins-section").hide();
      });

      //carrot mobile
        $("#m-carrot-origins-toggle").click(function(){
            $("#carrot-origins-section").show();
            $("#m-carrot-origins-toggle").addClass('origins-orange');
            $("#m-carrot-recipe-toggle").addClass('recipe-gray');
            $("#m-carrot-origins-toggle").removeClass('origins-gray');
            $("#m-carrot-recipe-toggle").removeClass('recipe-orange');
            $("#carrot-recipe-section").hide();
        });

        $("#m-carrot-recipe-toggle").click(function(){
            $("#carrot-recipe-section").show();
            $("#carrot-recipe-section").removeClass('hide');
            $("#m-carrot-origins-toggle").addClass('origins-gray');
            $("#m-carrot-recipe-toggle").addClass('recipe-orange');
            $("#m-carrot-origins-toggle").removeClass('origins-orange');
            $("#m-carrot-recipe-toggle").removeClass('recipe-gray');
            $("#carrot-origins-section").hide();
        });


      //carrot desktop
        $("#carrot-origins-toggle").click(function(){
            $("#carrot-origins-section").show();
            $("#carrot-origins-toggle").addClass('origins-orange');
            $("#carrot-recipe-toggle").addClass('recipe-gray');
            $("#carrot-origins-toggle").removeClass('origins-gray');
            $("#carrot-recipe-toggle").removeClass('recipe-orange');
            $("#carrot-recipe-section").hide();
        });

        $("#carrot-recipe-toggle").click(function(){
            $("#carrot-recipe-section").show();
            $("#carrot-recipe-section").removeClass('hide');
            $("#carrot-origins-toggle").addClass('origins-gray');
            $("#carrot-recipe-toggle").addClass('recipe-orange');
            $("#carrot-origins-toggle").removeClass('origins-orange');
            $("#carrot-recipe-toggle").removeClass('recipe-gray');
            $("#carrot-origins-section").hide();
        });


        //cobbler mobile
          $("#m-cobbler-origins-toggle").click(function(){
              $("#cobbler-origins-section").show();
              $("#m-cobbler-origins-toggle").addClass('origins-orange');
              $("#m-cobbler-recipe-toggle").addClass('recipe-gray');
              $("#m-cobbler-origins-toggle").removeClass('origins-gray');
              $("#m-cobbler-recipe-toggle").removeClass('recipe-orange');
              $("#cobbler-recipe-section").hide();
          });

          $("#m-cobbler-recipe-toggle").click(function(){
              $("#cobbler-recipe-section").show();
              $("#cobbler-recipe-section").removeClass('hide');
              $("#m-cobbler-origins-toggle").addClass('origins-gray');
              $("#m-cobbler-recipe-toggle").addClass('recipe-orange');
              $("#m-cobbler-origins-toggle").removeClass('origins-orange');
              $("#m-cobbler-recipe-toggle").removeClass('recipe-gray');
              $("#cobbler-origins-section").hide();
          });


        //cobbler desktop
          $("#cobbler-origins-toggle").click(function(){
              $("#cobbler-origins-section").show();
              $("#cobbler-origins-toggle").addClass('origins-orange');
              $("#cobbler-recipe-toggle").addClass('recipe-gray');
              $("#cobbler-origins-toggle").removeClass('origins-gray');
              $("#cobbler-recipe-toggle").removeClass('recipe-orange');
              $("#cobbler-recipe-section").hide();
          });

          $("#cobbler-recipe-toggle").click(function(){
              $("#cobbler-recipe-section").show();
              $("#cobbler-recipe-section").removeClass('hide');
              $("#cobbler-origins-toggle").addClass('origins-gray');
              $("#cobbler-recipe-toggle").addClass('recipe-orange');
              $("#cobbler-origins-toggle").removeClass('origins-orange');
              $("#cobbler-recipe-toggle").removeClass('recipe-gray');
              $("#cobbler-origins-section").hide();
          });


// hide/show mobile menu on click

          $(".lower").click(function(){
              $(".overlay").addClass("displayed");
          });

          $(".menu-item, .dish").click(function(e){
              e.preventDefault();

              var targetID = $(this).attr("href");

              $("html, body").animate({
                  scrollTop: $(targetID).offset().top
              }, 500);

              $(".overlay").removeClass("displayed");

          });

          $(".overlay label").click(function(){
              $(".overlay").removeClass("displayed");

          });



  //mobile nav
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1500) {
      $('#mobile-sticky').fadeIn();
    } else {
      $('#mobile-sticky').fadeOut();
    }
  });

  //desktop nav
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1500) {
      $('.sticky-nav, .title-background').fadeIn();
    } else {
      $('.sticky-nav, .title-background').fadeOut();
    }
  });

//Add "selected" class to navigation on scroll

// Cache selectors
var lastId,
    topMenu = $(".dish-container"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;
//
//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
//
//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active")
//          .end().filter("[href='#"+id+"']").parent().addClass("active");
//          if ($(".highlight").hasClass('active')) {
//            var targetImage = $(this).attr("id");
//           //  $(".dish").attr("src", "images/_" + targetImage + ".png")
//           //  $(".dish").attr('src', 'images/' + '[href='#"+id+"']' + '.png');
//
//          } else  {
//            console.log("dark");
//           //  $(".dish").attr("src", "images/_" + targetImage + "-dark.png")
//           //  $(".dish").attr('src', 'images/' + '[href='#"+id+"']' + '-dark.png');
//          }
//    }
// });

var sectionPos = [];
var sections = []

var lastScrollTop = 0;


function updateNav() {

  var fromTop = $(window).scrollTop();
  var wHeight = $(window).height();

  if (sectionPos.length === 0) {
    $.each($(".highlight"), function() {
      sections.push($(this).attr("id"));
      sectionPos.push($(this).offset().top);

          for (i=0; i<sections.length; i++) {
            console.log("images/_" + sections[i] + ".png");
              $.preloadImages("images/_" + sections[i] + ".png");
          }
    })
  }

  if (lastScrollTop > fromTop) {
    checkStickyNav(fromTop, wHeight, .5);
  } else {
    checkStickyNav(fromTop, wHeight, .75)
  }

  lastScrollTop = fromTop;

}

$(window).on("scroll", _.throttle(updateNav, 1000));


function checkStickyNav(scrollTop, height, modifier) {
  var position = scrollTop + (height*modifier);

  if (position > sectionPos[0] && position < sectionPos[1]) {
    var target = 0;
    for (i=0; i<sectionPos.length; i++) {
      if (i !==0) {
        $("." + sections[i]).attr("src", "images/_" + sections[i] + "-dark.png");
      } else {
        $("." + sections[i]).attr("src", "images/_" + sections[i] + ".png");
      }
    }
  }

  if (position > sectionPos[1] && position < sectionPos[2]) {
    var target = 1;
    for (i=0; i<sectionPos.length; i++) {
      if (i !==1) {
        $("." + sections[i]).attr("src", "images/_" + sections[i] + "-dark.png");
      } else {
        $("." + sections[i]).attr("src", "images/_" + sections[i] + ".png");
      }
    }
  }

  if (position > sectionPos[2] && position < sectionPos[3]) {
    var target = 2;
    for (i=0; i<sectionPos.length; i++) {
      if (i !==2) {
        $("." + sections[i]).attr("src", "images/_" + sections[i] + "-dark.png");
      } else {
        $("." + sections[i]).attr("src", "images/_" + sections[i] + ".png");
      }
    }
  }

  if (position > sectionPos[3] && position < sectionPos[4]) {
    var target = 3;
    for (i=0; i<sectionPos.length; i++) {
      if (i !==3) {
        $("." + sections[i]).attr("src", "images/_" + sections[i] + "-dark.png");
      } else {
        $("." + sections[i]).attr("src", "images/_" + sections[i] + ".png");
      }
    }
  }

  if (position > sectionPos[4]) {
    var target = 4;
    for (i=0; i<sectionPos.length; i++) {
      if (i !==4) {
        $("." + sections[i]).attr("src", "images/_" + sections[i] + "-dark.png");
      } else {
        $("." + sections[i]).attr("src", "images/_" + sections[i] + ".png");
      }
    }
  }

}



//////////////////////////////////////////////////////
    ////  IMAGE PRELOADER ////////////////////////////////
    //////////////////////////////////////////////////////

    $.preloadImages = function() {
        $("<img />").attr("src", arguments[0]);
    };


	// injecting current year into footer
	// DO NOT DELETE

	var d = new Date();
	var year = d.getFullYear();

	$('.copyright').text(year);


	// some code blocks require javascript to function, like slideshows, synopsis blocks, etc
	// you can find that code here: https://github.com/DallasMorningNews/generator-dmninteractives/wiki/Cookbook



});
