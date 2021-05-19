// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCBKdy4mBi10Sgr81OCDN0XBapZfjRHrG4",
      authDomain: "let-s-chat-64db4.firebaseapp.com",
      databaseURL: "https://let-s-chat-64db4-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-64db4",
      storageBucket: "let-s-chat-64db4.appspot.com",
      messagingSenderId: "441261755587",
      appId: "1:441261755587:web:7e3ffdbec394eb40cbe676",
      measurementId: "G-SF8WTHSEZT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){

      localStorage.removeItem("User name");
      localStorage.removeItem("Room name");
      window.location = "index.html"      
}

function add_room(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name"
      });

      localStorage.setItem("Room name", room_name);
      
      window.location = "page.html";

}

function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML})
      Room_names=childKey;

      console.log("Room_names -" + Room_names);
      row = "<div class ='room_name' id = "+Room_names+" onClick = 'redirect(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
}