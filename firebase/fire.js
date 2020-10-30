
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC2088YdBl-xgNRBkZHjoqZCkUGRbxeThY",
    authDomain: "sample-8bb11.firebaseapp.com",
    databaseURL: "https://sample-8bb11.firebaseio.com",
    projectId: "sample-8bb11",
    storageBucket: "sample-8bb11.appspot.com",
    messagingSenderId: "476666381787",
    appId: "1:476666381787:web:9e066d5bdaa278b23b13fe",
    measurementId: "G-RHK8963DZB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function write() {
    firebase.database().ref("user").set({
      name:document.getElementById('name1').value,
      addr:document.getElementById('addr1').value
    });

  }
  