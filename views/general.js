  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgT1gwtKhM1ma0SgTP3Lf5wVVMupEklu4",
    authDomain: "seniorgps-7da0a.firebaseapp.com",
    databaseURL: "https://seniorgps-7da0a.firebaseio.com",
    projectId: "seniorgps-7da0a",
    storageBucket: "seniorgps-7da0a.appspot.com",
    messagingSenderId: "675280638130"
  };
  firebase.initializeApp(config);

var ref = firebase.database().ref('Users');

console.log(ref);