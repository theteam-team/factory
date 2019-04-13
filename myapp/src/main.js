import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase' // install via npm
import mixin from './views/mixin'


var HOST = "ws://localhost:3000";

var ws = new WebSocket(HOST);
ws.onopen = function(){
  ws.send(JSON.stringify({
      type: "client_connected",
      data: "hello !"
  }));
}

 

Vue.config.productionTip = false


App.firebase = firebase;



    new Vue({
      router,
      render: h => h(App),

    }).$mount('#app')
