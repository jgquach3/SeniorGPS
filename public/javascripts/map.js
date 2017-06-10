function snapToArray(snapshot){
	var ret = [];
	
	snapshot.forEach(function(childSnapshot) {
		var item = childSnapshot.val();
		
		ret.push(item);
	});
	return ret;
};

firebase.database().ref('current/coords/').on('value', function(snapshot) {
	holder = snapToArray(snapshot);
	console.log(holder)
	s = holder[0].split(" ");
	
	var mapOptions = {
	zoom: 17,
	center: {lat:Number(s[0]), lng:Number(s[1])}
};

var map;
map = new google.maps.Map(document.getElementById('map'),
	mapOptions);
	
	for (i = 0; i < holder.length; i++){
		
		s = holder[i].split(" ");
		var marker = new google.maps.Marker({
		position: {lat:Number(s[0]), lng:Number(s[1])},
		map: map
});
	}

});

function getLocation(){
	if (navigator.geolocation) { //Checks if browser supports geolocation
	 navigator.geolocation.getCurrentPosition(function (position) {
     var latitude = position.coords.latitude;
     var longitude = position.coords.longitude;   
     var coords = new google.maps.LatLng(latitude, longitude);
	 console.log(latitude)
	 console.log(longitude)
	 
	 var directionsDisplay;
	 var directionsService = new google.maps.DirectionsService();
	 var map;
	 
	 function initialize(coords) {
	  directionsDisplay = new google.maps.DirectionsRenderer({ 'map': map });
	  var mapOptions = {
		zoom:7,
		center: coords
	  }
	  map = new google.maps.Map(document.getElementById('map'), mapOptions);
	  $("#directionsPanel").html("");
	  directionsDisplay.setMap(map);
	  directionsDisplay.setPanel(document.getElementById('directionsPanel'));

	}

	function calcRoute(coords) {
	  firebase.database().ref('current/coords/').on('value', function(snapshot) {
	  holder = snapToArray(snapshot);
	  console.log(holder)
	  s = holder[0].split(" ");
	
	  var request = {
		origin: coords,
		destination: {lat:Number(s[0]), lng:Number(s[1])},
		travelMode: 'DRIVING'
	  };
	  directionsService.route(request, function(result, status) {
		if (status == 'OK') {
			console.log(result)
		  directionsDisplay.setDirections(result);
		}
	  })
	});
	}
	
	initialize(coords)
	calcRoute(coords)
	 

 })
}
}





