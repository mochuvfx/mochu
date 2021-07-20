
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCNymIr5d7N3PWTQrIAWjOq3AsbjQ1rdx8",
  authDomain: "test-app-ac2af.firebaseapp.com",
  databaseURL: "https://test-app-ac2af-default-rtdb.firebaseio.com",
  projectId: "test-app-ac2af",
  storageBucket: "test-app-ac2af.appspot.com",
  messagingSenderId: "917931447006",
  appId: "1:917931447006:web:4089d8447466355c60e84f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose: "adding room link"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}


function getData() { firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div> <hr>"; 
       document.getElementById("output").innerHTML += row;
  
      });
    });
  }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
