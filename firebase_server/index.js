//server side
const express = require('express');
var socket = require('socket.io');
var admin = require('firebase-admin');
var serviceAccount = require('./realtime-23d22-firebase-adminsdk-i7h3m-838e286cca.json');

//initalize admin_SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://realtime-23d22.firebaseio.com'
});

//database refrence
var db = admin.database();
var key='new/';
var orders ;

//App setup
const app = express();
var server= app.listen(3000, function(){
    console.log('listing to request on port 3000');
});

//Static files
app.use(express.static('factory'));

//Socket setup
var io= socket(server); 
io.on('connection',function(socket){
    console.log('made socket connection from the server',socket.id);

    //listen to firebase database
    db.ref(key).on('value', function(snap){
        orders = snap.val();
        console.log( orders);

        //send data to clients
        io.sockets.emit('chat',orders);
        console.log(' socket ',orders);
    });
});










