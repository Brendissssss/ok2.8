var firebaseConfig = {
  apiKey: "AIzaSyC_rJ369ZGV8HcgpwQwhHr8bU2QSaFEQY4",
  authDomain: "kwitter-924eb.firebaseapp.com",
  authDomain: "chismesitovintach.firebaseapp.com",
  databaseURL: "https://chismesitovintach-default-rtdb.firebaseio.com",
    projectId: "chismesitovintach",
  storageBucket: "chismesitovintach.appspot.com",
  messagingSenderId: "244918141668",
  appId: "1:244918141668:web:d56c1eed0fdf1ed03322f1"
 
};



firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "¡🌊" + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location.replace("kwitter_page.html");

}

function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Inicio del código
console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
 //Final del código
 });});}
getRoom();


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}


function redirectToRoomName(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "kwitter_page.html";
}