// Initialize Firebase
var config = {
    apiKey: "AIzaSyB_GzFAi93M1oPeKhNdguwoyBgXCEznsaA",
    authDomain: "realtime-23d22.firebaseapp.com",
    databaseURL: "https://realtime-23d22.firebaseio.com",
    projectId: "realtime-23d22",
    storageBucket: "realtime-23d22.appspot.com",
    messagingSenderId: "100120188778"
  };
  firebase.initializeApp(config);

//database refrence
let db = firebase.database();
let key='node/';
let order ;
let ref = db.ref(key);
let RedRef = ref.child("red");
let GreenRef = ref.child("green");
let YellowRef = ref.child("yellow");
let button = document.getElementById('send');

//EmitEvent
button.addEventListener('click',function(){
//set orders in firebase
    RedRef.set(30);
    GreenRef.set(20);
    YellowRef.set(15);
});