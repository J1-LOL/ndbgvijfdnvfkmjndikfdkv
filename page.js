function logout(){

    localStorage.removeItem("User name");
    localStorage.removeItem("Room name");
    window.location = "index.html"      
}

function send(){

    msg = document.getElementById("msg").value;
firebase.database().ref (room_name).push({
    name:user_name,
    message:msg,
    like:0
})
document.getElementById("msg").value = "";
}
    function getData()
     { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {

    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    user= message_data['name'];
    likes = message_data['like'];
    message = message_data['message'];
    user_with_tag = "<h4>" + user + "<img class='user_tick' src='tick.png'</h4>";
    like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+Like+" onclick='updateLike(tis.id)'>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

    row = user_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;

}}); }); }

function updateLike(message_id){
    
    console.log("Like button clicked - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updateLike = Number(likes) + 1;

    firebase.database().ref(room_name).child(message_id).update({
        like : updateLike
    })

}

function logout(){

    localStorage.removeItem("User name");
    localStorage.removeItem("Room name");
    window.location = "index.html"      
}