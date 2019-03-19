

      //var HOST = "ws://197.135.36.103:3000";
var HOST = "ws://localhost:3000";

var ws = new WebSocket(HOST);
ws.onopen = function(){
    ws.send(JSON.stringify({
        type: "client_connected",
        data: "hello !"
    }));
}

ws.onmessage = function(msg){
			var message = JSON.parse(msg.data);
			if (message.type == "sorting"){
			app.sorting = message.data;
		}
ws.onmessage = function(msg){
    	var message = JSON.parse(msg.data);
    	if (message.type == "collecting"){
    	app.collecting = message.data;
  	}


var app = new Vue({

    el:'#app',

    data:{
        name:'',
        id:'',
        img1:'./user1.png',
        img2:'./qrcode.png',
        img3:'./m3.png',
        img4:'./order.png',
        sorting:true,
        collecting:true,

        red:'',
        green:'',
        blue:'',
        yellow:'',
        orange:'',

        location1:'',
        location2:'',

  },

  /** The methods to handle events */

    methods: {

        sendOrder: function (event)
        {
            ws.send(JSON.stringify
            ({

                type: "sendOrder",

                red: app.red,
                green: app.green,
                blue: app.blue

            }));

        },
        newOrder:function(event)
        {
          ws.send(JSON.stringify
          ({
              type: "newOrder,
          }));

        }
    }

});
