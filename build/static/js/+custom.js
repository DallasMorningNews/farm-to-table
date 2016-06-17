$(document).ready(function() {

	//custom scripting goes here

  $(document).ready(function(){


    //chickentouille mobile
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


    //chickentouille desktop
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



  //mobile nav
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.mobile-sticky').fadeIn();
    } else {
      $('.mobile-sticky').fadeOut();
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

});

	// injecting current year into footer
	// DO NOT DELETE

	var d = new Date();
	var year = d.getFullYear();

	$('.copyright').text(year);


	// some code blocks require javascript to function, like slideshows, synopsis blocks, etc
	// you can find that code here: https://github.com/DallasMorningNews/generator-dmninteractives/wiki/Cookbook



});
