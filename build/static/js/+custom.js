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

          // $("#mobile-sticky").click(function(){
          //     $(".overlay").show();
          // });

          $("#menu-rata, #menu-carrot, #menu-chicken, #menu-bread, #menu-cobbler").click(function(){
              $(".overlay").hide();
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
      $('.sticky-nav').fadeIn();
    } else {
      $('.sticky-nav').fadeOut();
    }
  });

//highlight nav on scroll
    // $sections incleudes all of the container divs that relate to menu items.
    var $sections = $('.highlight');

    // The user scrolls
    $(window).scroll(function(){

      // currentScroll is the number of pixels the window has been scrolled
      var currentScroll = $(this).scrollTop();

      // $currentSection is somewhere to place the section we must be looking at
      var $currentSection

      // We check the position of each of the divs compared to the windows scroll positon
      $sections.each(function(){
        // divPosition is the position down the page in px of the current section we are testing
        var divPosition = $(this).offset().top;

        // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
        // the -1 is so that it includes the div 1px before the div leave the top of the window.
        if( divPosition - 1 < currentScroll ){
          // We have either read the section or are currently reading the section so we'll call it our current section
          $currentSection = $(this);

          // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
        }

        // This is the bit of code that uses the currentSection as its source of ID
        var id = $currentSection.attr('id');
     	 $('img').removeClass('active');
     	 $("[href=#"+id+"]").addClass('active');

      })

    });



	// injecting current year into footer
	// DO NOT DELETE

	var d = new Date();
	var year = d.getFullYear();

	$('.copyright').text(year);


	// some code blocks require javascript to function, like slideshows, synopsis blocks, etc
	// you can find that code here: https://github.com/DallasMorningNews/generator-dmninteractives/wiki/Cookbook



});
