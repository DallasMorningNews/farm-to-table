$(document).ready(function() {

	//custom scripting goes here

  $(document).ready(function(){

    //ratatouille
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

  //chicken
    $("#chick-origins-toggle").click(function(){
        $("#chick-origins-section").show();
        $("#chick-origins-toggle").addClass('origins-orange');
        $("#chick-recipe-toggle").addClass('recipe-gray');
        $("#chick-origins-toggle").removeClass('origins-gray');
        $("#chick-recipe-toggle").removeClass('recipe-orange');
        $("#chick-recipe-section").hide();
    });

    $("#chick-recipe-toggle").click(function(){
        $("#chick-recipe-section").show();
        $("#chick-recipe-section").removeClass('hide');
        $("#chick-origins-toggle").addClass('origins-gray');
        $("#chick-recipe-toggle").addClass('recipe-orange');
        $("#chick-origins-toggle").removeClass('origins-orange');
        $("#chick-recipe-toggle").removeClass('recipe-gray');
        $("#chick-origins-section").hide();
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
