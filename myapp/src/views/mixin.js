
import * as firebase from 'firebase'

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


 export default{
   data(){
     return{
       name:'',
        id:'',
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
        orders:[
          {
            'name':'menna essam',
            'id':1
          },
          {
            'name':'ahmed',
            'id':2
          }
        ],
     }
   },
   methods:{
     create(){
       db.ref(key).on('value', function(snap){

        orders = snap.val();

        Object.keys(orders).forEach((name) => {

          this.orders.push({
            id:this.idForOrder,
            name: orders[name].name,
            location1: orders[name].location1,
            location2: orders[name].location2,
            red: orders[name].red,
            green: orders[name].green,
            yellow: orders[name].yellow,
            orange: orders[name].orange
          });
           this.idForOrder ++

      });
    });
     },

    showDetails(index){

      this.name=this.orders[index].name;
      this.id=this.orders[index].id;
       this.location1=this.orders[index].location1;
      this.location2=this.orders[index].location2;
      this.red=this.orders[index].red;
      this.green=this.orders[index].green;
      this.orange=this.orders[index].orange;
      this.yellow=this.orders[index].yellow;

    },
    removeOrder(index){
      this.orders.splice(index, 1)
    },
    //send to firebase
    newOrder(){

    }

  }
 }
