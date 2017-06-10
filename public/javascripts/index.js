function logButton() {
	
    event.preventDefault();

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if (username && password) {
        window.location = "/map";
        }
	else {
		alert("Missing required input")
	};
    }