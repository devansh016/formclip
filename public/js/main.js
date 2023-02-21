baseURL  = "https://api.formclip.xyz";

function isEmailValid(email){
	let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return emailPattern.test(email)
}
function registerUser(email){
	if(email == "") {
        alert("Kindly fill in the email field!");
        return;
    }
	if(!isEmailValid(email)){
		alert("Please enter a valid email address!");
		return;
	}
	var data = JSON.stringify({
		"email": email
	});
	
	var config = {
		method: 'post',
		url: baseURL + '/auth/register',
		headers: { 
		'Content-Type': 'application/json'
		},
		data : data
	};
	
	axios(config)
	.then(function (response) {
		alert(JSON.stringify(response.data.message));
	})
	.catch(function (error) {
		alert(JSON.stringify(error.response.data.message));
	});
}