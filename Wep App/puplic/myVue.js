var HOST = "ws://localhost:3000";

var ws = new WebSocket(HOST);
ws.onopen = function(){
  ws.send(JSON.stringify({
      type: "client_connected",
      data: "hello !"
  }));
}

var config = {
 apiKey: "AIzaSyB_GzFAi93M1oPeKhNdguwoyBgXCEznsaA",
 authDomain: "realtime-23d22.firebaseapp.com",
 databaseURL: "https://realtime-23d22.firebaseio.com",
 projectId: "realtime-23d22",
 storageBucket: "realtime-23d22.appspot.com",
 messagingSenderId: "100120188778"
};
firebase.initializeApp(config);



   let db = firebase.database();
   let key='new/';
   let orders ;
   let output ='';
   db.ref(key).on('value', function(snap){

        orders = snap.val();

        Object.keys(orders).forEach((name) => {

          app.orders.push({
            id:app.idForOrder,
            name: orders[name].name,
            location1: orders[name].location1,
            location2: orders[name].location2,
            red: orders[name].red,
            green: orders[name].green,
            yellow: orders[name].yellow
          });
          app.idForOrder ++

      });
});



var app = new Vue({

 el:'#app',

 data:{
   name:'',
   id:'',
   img1:'./user1.png',
   img2:'./qrcode.png',
   img3:'./m3.png',
   img4:'./order.png',
   img5:'./minUser.png',
   price:'',
   sorting:true,
   collecting:true,
   status:'',
   Done:'',
   location1:'',
   location2:'',
   red:'',
   green:'',
   yellow:'',
   orange:'',
   idForOrder:1,
   orders:[],

 },



 methods: {




//Removing order
removeOrder(index){
  this.orders.splice(index, 1)
},
showDetails(index){
  this.name=this.orders[index].name;
  this.id=this.orders[index].id;
   this.location1=this.orders[index].location1;
  this.location2=this.orders[index].location2;
  this.red=this.orders[index].red;
  this.green=this.orders[index].green;
  this.blue=this.orders[index].blue;

}
 }

});
