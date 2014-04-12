
/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.api.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {


	// make the forms appear and disappear //

	$(".login-form-btn").on("click", function(){
		$(".login-form").show();
		$(".signup-form").hide();

		$(".login-form").addClass("active");
		$(".signup-form").removeClass("active");
	})
	$(".signup-form-btn").on("click", function(){
		$(".login-form").hide();
		$(".signup-form").show();

		$(".signup-form").addClass("active");
		$(".login-form").removeClass("active");
	})

	

	var user = {};

	$(".btn-login").on("click", function () {
		user.username = $("#login-username-field").val();
		user.password =  $("#login-password-field").val();
		//var user = new Makeuser(name, secret);
		
		codepen.api.login(user);
		console.log(codepen.api.login(user));

	})

	function Newuser(name, email, user, pass) {
		this.name = name;
		this.email = email;
		this.username = user;
		this.password = pass;

	}

	$("#signup-password-field").on("input", function (){

		if ($("#signup-password-field").val() != $("#signup-password-field2").val() ) {    //|| !reg_password.test($("#signup-password-field").val()
					$(".btn-signup").attr("disabled", true);
		}
		else {
			$(".btn-signup").attr("disabled", false);
		}

	})

	


	$(".btn-signup").on("click", function () {
			var name = $("#signup-name-field").val();
			var email =  $("#signup-email-field").val();
			var username =  $("#signup-username-field").val();
			var password =  $("#signup-password-field").val();


			var response = codepen.api.signup(codepen.objects[username] = new Newuser(name,email,username,password));

			//   old way
			// newuser.name = $("#signup-name-field").val();
			// newuser.email =  $("#signup-email-field").val();
			// newuser.username =  $("#signup-username-field").val();
			// newuser.password =  $("#signup-password-field").val();
			// newuser.password =  $("#signup-password-field").val();
			
			
			console.log(response);
			console.log(codepen.objects);

	})		


});





