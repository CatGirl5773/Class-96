var firebaseConfig = {
      apiKey: "AIzaSyBvu1V_L9Gg8PnNMg9e3ENDN0W8ffeTiHI",
      authDomain: "kwitter-7c67e.firebaseapp.com",
      databaseURL: "https://kwitter-7c67e-default-rtdb.firebaseio.com",
      projectId: "kwitter-7c67e",
      storageBucket: "kwitter-7c67e.appspot.com",
      messagingSenderId: "701250774597",
      appId: "1:701250774597:web:8d8a148ea153a97b16e52c"
    };

    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}