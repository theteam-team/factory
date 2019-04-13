<template>
  <v-app dark>
   <v-navigation-drawer temporary v-model="sideNav"  clipped  fixed>

          <v-layout v-scroll:#scroll-target="onScroll"  column  align-center    style="height: 1000px">
            <v-flex xs12  >
              <v-toolbar color="orange" dark>
                 <v-icon x-large  > supervisor_account</v-icon>
                  <v-toolbar-title>All Customers</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>search</v-icon>
                  </v-btn>

                </v-toolbar>
                <v-list three-line>

                    <v-list-tile v-for="(order,index) in orders" :key="order.id"  @click ="showDetails(index)" >

                            <v-avatar >
                              <v-icon x-large dark>account_circle</v-icon>
                            </v-avatar>
                           

                           <div  style="display:inline-block;font-size:20px;margin-left:10px "> {{ order.name }} </div>
                           <div class="item" @click="removeOrder(index)"> &times</div>
                           <div  style="display:inline-block;font-size:20px;margin-left:60px; "> Order ID: {{ order.id }} </div>
                           <br></br>


                     </v-list-tile>
                      <v-divider></v-divider>



                </v-list>
            </v-flex>
          </v-layout>

    </v-navigation-drawer>

    <v-toolbar clipped-left>
      <v-toolbar-side-icon  @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
       Orders
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items >

        <v-btn flat v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link">
          <v-icon left>{{ item.icon}}</v-icon>
        {{ item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script src="https://www.gstatic.com/firebasejs/5.9.1/firebase.js"></script>
<script>

import mixin from './views/mixin';

export default {
    mixins:[mixin],
  data () {
    return {

      sideNav:false,
      menuItems:[
        { icon:'home', title:'Home',link:'/'},
        { icon:'lock_open', title:'logout', link:'/Login'},
        { icon:'face', title:'Signup',link:'/Signup'},

      ],

    }
  },

}
</script>
<style>
  .item{
    cursor:pointer;
     display:inline-block;

     &:hover{
      color:black;
    }

  }
</style>
