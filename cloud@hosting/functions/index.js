const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);


const ref = firebaseApp.database().ref('/new');
const data = ref.once('value').then(snap => snap.val());



const app = express();

app.use(express.static('public'));

app.get('/time', (request, response)=>{
    response.send('odres in console of cloud functions firebase website');
    
    console.log(data);
    
    console.log('it is ....working......');

});


exports.app = functions.https.onRequest(app);