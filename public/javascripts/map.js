console.log('map.js');
coords = new google.maps.LatLng(32.7157, 117.1611)


var mapOptions = {
	zoom: 4,
	center: coords
};

var map;
map = new google.maps.Map(document.getElementById('map'),
	mapOptions);
var marker = new google.maps.Marker({
	position: coords,
	map: map
});

var bRef = firebase.database().ref('Users/Bill/CT/');
bRef.once("value")
	.then(function(snapshot) {
		snapshot.forEach(function(childSnapshot){
			var key = childSnapshot.key;
			var data = childSnapshot.val();
			
			console.log(key);
			console.log(data);
		});
	});

