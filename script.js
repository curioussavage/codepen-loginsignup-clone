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

});


//   on submit  click use the form fields to give a new object 
//  properties  to send 
	
	// make object for login user
	function MakeUser(user, pass) {
		username: user;
		password: pass;
	}

	$(btn-login).on("click", function () {
		var user = new Makeuser($(".login-username-field").val(),".login-password-field").val())
		codepen.api.login(user);
	})



