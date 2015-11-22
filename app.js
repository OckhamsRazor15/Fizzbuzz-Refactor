$(document).ready(function(){
	 $('form').submit(function(e){
	 	e.preventDefault();
	 	var enteredNum = parseInt($("#numinput").val());
	 	var fb = fizzer(enteredNum);
	 	console.log(fizzer(enteredNum));

	 	$("#fboutput").append(fb);
		

	 });
function fizzer(n){
	for (var i = 1; i <= n; i++) {
		if(i % 3 == 0 && i % 5 == 0){
			//return "FizzBuzz";
			console.log("fizzbuzz");
		}else if (i % 3 == 0){
			//return "Fizz";
			console.log("fizz");
		}else if (i % 5 == 0){
			//return "Buzz";
			console.log('buzz');
		}else {
			//return i;
			console.log(i);
		}
	}

}










});



