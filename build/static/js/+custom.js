$(document).ready(function() {

	//custom scripting goes here

$(document).ready(function(){
    $("#origins-toggle").click(function(){
        $(".origin-section").hide();
    });
    $("#recipe-toggle").click(function(){
        $(".origin-section").show();
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
