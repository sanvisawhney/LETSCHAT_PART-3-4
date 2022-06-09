var firebaseConfig = {
  apiKey: "AIzaSyDYaFTTn047uJ8n0VGj5FHfDzONqIhby9k",
  authDomain: "kwitter-web-92c17.firebaseapp.com",
  databaseURL: "https://kwitter-web-92c17-default-rtdb.firebaseio.com",
  projectId: "kwitter-web-92c17",
  storageBucket: "kwitter-web-92c17.appspot.com",
  messagingSenderId: "30913405763",
  appId: "1:30913405763:web:f4d9aac5aae06e25f2c5f6"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
  
  user_name= localStorage.getItem("user_name");
  document.getElementById("name").innerHTML="Welcome " + user_name;

   function addroom(){
     room_name= document.getElementById("room_name").value;
     localStorage.setItem("room_name", room_name);
     window.location="kwitter_page.html";
     firebase.database().ref("/").child(room_name).update({
       purpose: "adding room name"
     });
    }

   function getData() {
     firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - "+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;

//End code
});});}
getData();

function redirect(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}


