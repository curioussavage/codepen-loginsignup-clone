
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

	

	var user = {};    //user object

	$(".btn-login").on("click", function () {               // on click  send the user login/pass to the login api
		user.username = $("#login-username-field").val();
		user.password =  $("#login-password-field").val();
		//var user = new Makeuser(name, secret);
		
		codepen.api.login(user);
		console.log(codepen.api.login(user));

	})

	function Newuser(name, email, user, pass) {         //  constructor for the new user objects
		this.name = name;
		this.email = email;
		this.username = user;
		this.password = pass;

	}

	$("#signup-password-field").on("input", function (){          // this function disables the submit button when the passwords arent the same.

		if ($("#signup-password-field").val() != $("#signup-password-field2").val() ) {    //|| !reg_password.test($("#signup-password-field").val()
					// $(".btn-signup").attr("disabled", true);     this works
					// $(".btn-signup").addClass("disabled");       need to make a better disabled class
					$(".btn-signup").hide();
		}
		else {
			// $(".btn-signup").attr("disabled", false);
			// $(".btn-signup").removeClass("disabled");
			$(".btn-signup").show();
		}

	})

	


	$(".btn-signup").on("click", function () {              //  on clicking the signup button assigns the values of the fields
			var name = $("#signup-name-field").val();       //   to these variables then on line 100 call calls the signup function
			var email =  $("#signup-email-field").val();      //  then it calls the Newuser constructor with the new username as the key
			var username =  $("#signup-username-field").val();  //
			var password =  $("#signup-password-field").val();


			var response = codepen.api.signup(codepen.objects[username] = new Newuser(name,email,username,password));

			//   old way
			// newuser.name = $("#signup-name-field").val();
			// newuser.email =  $("#signup-email-field").val();
			// newuser.username =  $("#signup-username-field").val();
			// newuser.password =  $("#signup-password-field").val();
			// newuser.password =  $("#signup-password-field").val();
			
			
			console.log(response);                      //  logs the servers response
			console.log(codepen.objects.adam01);        // this line is for testing, you have to know the username of the user you made to test.
                                                        // this logs the newuser object.  need to make a function to log all of the new users

	})		


});





