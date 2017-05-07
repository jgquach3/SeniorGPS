console.log("wtf");
  
var bRef = firebase.database().ref('Users/Bill/CT/');

bRef.update({
	"John": 005
});

console.log(ref);