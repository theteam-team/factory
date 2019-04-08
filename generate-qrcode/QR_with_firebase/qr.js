
let db = firebase.database();
let key='new/';
let order ;
let ref = db.ref(key);
let sData 
ref.limitToLast(1).on('value', function(snap){
    order = snap.val();
    console.log( order);
    //console.log( typeof order);
    sData = JSON.stringify(order);
    //console.log( typeof sData);
    //console.log( sData);
    let qrcode = new QRCode('qrcode', {
        text:sData,
        width: 125,
        height: 125,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});


////qr
/*let data  = {
    name:"jemy", 
    green:"10",
    red:"5",
    yellow:"1"
  };*/
  //


 