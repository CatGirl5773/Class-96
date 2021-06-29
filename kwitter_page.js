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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
