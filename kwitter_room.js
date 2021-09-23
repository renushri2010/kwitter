
var firebaseConfig = {
      apiKey: "AIzaSyBzsEF022tkG14RQiE5kSYTL6rVKcQIph4",
      authDomain: "website-55fa2.firebaseapp.com",
      databaseURL: "https://website-55fa2-default-rtdb.firebaseio.com",
      projectId: "website-55fa2",
      storageBucket: "website-55fa2.appspot.com",
      messagingSenderId: "1092961125806",
      appId: "1:1092961125806:web:58fb00871da390243c343f"
    };
    
    // Initialize Firebase
    firebase.intializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
