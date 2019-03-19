var HOST = "ws://localhost:3000";

var ws = new WebSocket(HOST);
ws.onopen = function(){
   ws.send(JSON.stringify({
       type: "client_connected",
       data: "hello !"
   }));
}




var app = new Vue({

  el:'#app',

  data:{

    id:'',
    img1:'./user1.png',
    img2:'./qrcode.png',
    img3:'./m3.png',
    img4:'./order.png',
    price:'',
    sorting:true,
    collecting:true,
    location1:'',
    location2:'',
    red:'',
    green:'',
    blue:'',
    newTodo:'',
    todos:[],
  },

  /** The methods to handle events */

  methods: {


      addTodo(){
        this.todos.push({
          title:this.newTodo,
          done:false
        })

      },
      removetodo(todo){
        const todoIndex = this.todo.indexOf(todo);
        this.todos.splice(todoIndex,1)
      }
  }

});
