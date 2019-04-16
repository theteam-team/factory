//MakeConnection FrontEnd browser
const socket =io.connect('http://localhost:3000/');
let output;

//Listen for Events
socket.on('chat',function(orders){
    if (orders) {
        output = '';
        N = 1;
        Object.keys(orders).forEach((name) => {
            c= 0;
            console.log(orders);
            console.log(orders[name].name);
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
