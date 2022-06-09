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
room_name= localStorage.getItem("room_name");

function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        Name: user_name,
        Message: msg,
        Likes: 0
    });

    document.getElementById("msg").value="";

}