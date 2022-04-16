var firebaseConfig = {
    apiKey: "AIzaSyAT_Z1-oMHy7kQZrtcLNbp7oDdxUAEhves",
    authDomain: "quitter-96a74.firebaseapp.com",
    databaseURL: "https://quitter-96a74-default-rtdb.firebaseio.com",
    projectId: "quitter-96a74",
    storageBucket: "quitter-96a74.appspot.com",
    messagingSenderId: "317521412773",
    appId: "1:317521412773:web:6ac501a28421ff0130034c"
};
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var user_name = localStorage.getItem("username");
document.getElementById("user-name").innerHTML = "GOOD TO SEE YOU, " + user_name;

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("ROOM NAME:- " + Room_names);
            row = "<div class='room-name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function addRoom() {
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
        purpouse: "adding room name"
    });
    localStorage.setItem("roomname", roomname);
    window.location = "Quitter_page.html";
}

function logout() {
    user_name = "";
    localStorage.setItem("username", "")
    window.location = "index.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("roomname", name)
    window.location = "Quitter_page.html"
}