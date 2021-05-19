// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCJhW7gZK9biMTGXv92FElAdsqaib4c00s",
    authDomain: "practice-49cef.firebaseapp.com",
    databaseURL: "https://practice-49cef-default-rtdb.firebaseio.com",
    projectId: "practice-49cef",
    storageBucket: "practice-49cef.appspot.com",
    messagingSenderId: "940571541406",
    appId: "1:940571541406:web:af956a5cf03be46119a08f",
    measurementId: "G-JQCM1ZBTFH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function addUser(){

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"adding user"});

  }