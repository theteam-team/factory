let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let output3 = document.getElementById('output3');
let output4 = document.getElementById('output4');
let output5 = document.getElementById('output5');
let output6 = document.getElementById('output6');

let db = firebase.database();
let key='new/';
let orders ;
let N = 0;
let c = 0;
let output ='';
db.ref(key).on('value', function(snap){
  output = '';
  output2.innerHTML = output ;
  orders = snap.val();
  console.log(typeof orders);
  if (orders) {
    output = '';
    N = 1;
   Object.keys(orders).forEach((name) => {
     
     c= 0;
     console.log(orders);
     console.log('lol   '   +  orders[name].name);
     Object.keys(orders[name]).forEach((nameobj) => {
     let s = nameobj;
     let keys = Object.keys(orders[name]);
     let values = Object.values(orders[name]);
     let entries = Object.entries(orders[name]);
     console.log(s);
     console.log(typeof s);
     console.log('names   ' + keys);
     console.log('values   ' + values);
     console.log('entries  ' + entries);
     console.log('entries  ' + entries[0][1]);
     
     output += '<li>' + 'Order ' + N + '  ,  ' + nameobj + '  :  '+ entries[c][1] +  '</li>' ;
     output2.innerHTML = output ;
    c++;
   });
 N++;
  });
  
  
   }

 }); 
   // problems
   /* orders[name].green // to get the values of green 
   in object of ordere the promblem in orders[name].nameobj ...
    aslo append and the output...*/

  /*output1.innerHTML = "NUMBER OF GREEN BALLS : " + orders.green;
  output2.innerHTML = "location1 : " + orders.location1;
  output3.innerHTML = "location2 : " + orders.locatoin2;*/


   
  
//testing
// db.ref().on('value', snap => output2.innerHTML = "NUMBER OF RED BALLS : " + snap.val().green );


//  db.ref().on('value', snap => output3.innerHTML = "NUMBER OF YELLOW BALLS : " + snap.val().yellow );