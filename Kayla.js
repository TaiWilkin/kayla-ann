$(document).ready(function() {
	$(".gallery").on("click", "img", function(){
		var randomNum = Math.floor((Math.random()*51)+1);
		console.log("hi", this);
		$(this).attr('src', randomNum + 'kayla.jpg');
	});
});