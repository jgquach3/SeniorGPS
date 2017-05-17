var bRef = firebase.database().ref('Users/Bill/CT/');

bRef.update({
	"John": 005
});

console.log(bRef);

function login() {
	
    event.preventDefault();

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

	console.log(username);
	console.log(password);
	
    if (username && password) {
        window.location = "/map";
        };
    }