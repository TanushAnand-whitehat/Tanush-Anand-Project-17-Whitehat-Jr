var firebaseConfig = {
    apiKey: "AIzaSyBNNZId5mZYLlsly2QsPuyi-4vZW1dmjrA",
    authDomain: "whitehat-jr-class-94-practice.firebaseapp.com",
    databaseURL: "https://whitehat-jr-class-94-practice-default-rtdb.firebaseio.com",
    projectId: "whitehat-jr-class-94-practice",
    storageBucket: "whitehat-jr-class-94-practice.appspot.com",
    messagingSenderId: "870462495668",
    appId: "1:870462495668:web:501d952b22f81634cf30e1",
    measurementId: "G-MHCFFF57EZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("User_name");
  room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function Send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name, 
          message: msg,
          like:0
    });
}
