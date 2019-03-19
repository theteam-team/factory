var express = require('express');
var socket = require('socket.io');
const SocketServer = require('ws').Server;

 //app setup **
 var app= express();

 var server= app.listen(3000, function(){
   console.log('listing to request on port 3000');
 });

//static files **
app.use(express.static('puplic'));

//socket setup **
var wss = new SocketServer({ server });

wss.on('connection', (ws) => {
	console.log('Client connected');

    ws.on('message', function(msg)
    {
		console.log(msg);

		var message = JSON.parse(msg);
        if(message.type == "client_connected")
        {
            ws.type = "client";
            console.log(message.data);
        }

        else if(message.type == "newOrder")
        {
            console.log("Checking for nodes");
            wss.clients.forEach(function e(client)
            {
                if(client.type == "node")
                {
                    console.log("Found a node sending ...");
                    client.send(JSON.stringify
                    ({
                        //type : "ORDER",
                        red : message.red,
                        green : message.green,
                        blue : message.blue
                    }));
                }
            })
        }

        else if(message.type == "node_connected")
        {
            ws.type = "node";
        }
	});

    ws.on('close', () => console.log('Client disconnected'));

});
